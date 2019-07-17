import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import CloseIcon from '@material-ui/icons/Close';
import moment from 'moment';

import { scale, scalePow, scaleLog } from 'd3-scale';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, ReferenceArea, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';


const API_URL = (process.env.NODE_ENV && process.env.NODE_ENV === 'production') ? "https://camp-carowanis-api.herokuapp.com" : "http://localhost:1234";


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    borderRadius: '5px',
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    // width: theme.spacing.unit * 50,
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      padding: '15px'
    },
  },
  menu: {
    width: 200,
  },
});

class CustomizedAxisTick extends React.Component {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    const date = moment(new Date()).subtract(-payload.value, "minutes").format("HH:mm");

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-45)">{date}</text>
      </g>
    );
  }
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    const date = moment(new Date()).subtract(-label, "minutes").fromNow();
    return (
      <div className="custom-tooltip">
        <div className="value">{`${payload[0].value}`} <span>mmol/L</span></div>
        <div className="time">{date}</div>
      </div>
    );
  }

  return null;
};

const timeScaleOptions = [
  {
    value: 1,
    label: 'Dernière heure',
  },
  {
    value: 3,
    label: '3 dernières heures',
  },
  {
    value: 12,
    label: '12 dernières heures',
  },
  {
    value: 24,
    label: '24 dernières heures',
  },
];

class SimpleModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: props.data,
      allData: props.data,
      timeScale: 1,
      loadedData: false,
    };
  }

  componentDidMount() {
    this.setState({loaded: true});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.data!==this.props.data){
      if (nextProps.data.collection_id && nextProps.data.readings) {
        this.setState({
          data: nextProps.data.readings.reverse(),
          allData: nextProps.data,
          timeScale: 1,
          loadedData: false,
        });

        this.getData(nextProps.data.collection_id);
      }
    }
  }

  async getData(collection_id) {
    fetch(API_URL + "/api/reading/" + collection_id + "/24")
    .then(res => res.json())
    .then(
        (result) => {
              if (result && result.length > 0) {
                  let convertedData = this.convertData(result);

                  this.setState({
                      data: convertedData,
                      loadedData: true,
                  });
              }
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            console.log(error);
        }
    )
  }

  convertData = (data) => {
    moment.locale('fr-CA');
    var now = moment(new Date());
  
    for(var i=0; i<data.length; i++) {
      var measurementDate = moment(data[i]['dateString'])
      var diffMinutes = Math.round(moment.duration(now.diff(measurementDate)).asMinutes());

      data[i]['mmol'] = Math.round(data[i]['sgv'] / 18 * 100) / 100;  // convert from mg/dl to mmol/L
      data[i]['dateFromNowMinutes'] = -diffMinutes;
    }
    
    return data;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    const { loaded, data, allData, timeScale, loadedData } = this.state;

    if (!loaded || !allData._id || !loadedData) {
      return null;
    } else {
      return (
        <div>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.props.open}
            onClose={this.props.handleClose}
          >
            <div style={getModalStyle()} className={classes.paper}>
              <Grid container>
                <Grid item xs={10}>
                  <Typography variant="h4" id="modal-title">
                    {allData.name}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton size="small" aria-label="Close" onClick={this.props.handleClose}>
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item md={4} xs={12}>
                    <TextField
                        id="outlined-name-input"
                        label="Appareil"
                        className={classes.textField}
                        type="text"
                        name="device"
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                          readOnly: true,
                        }}
                        value={allData.latestReading.device}
                    />
                </Grid>
                <Grid item md={4} xs={12}>
                    <TextField
                        id="outlined-sensorId-input"
                        label="Emplacement"
                        className={classes.textField}
                        type="text"
                        name="location"
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                          readOnly: true,
                        }}
                        value={allData.location}
                    />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    id="outlined-select-timeScale"
                    select
                    label="Données"
                    className={classes.textField}
                    value={timeScale}
                    onChange={this.handleChange('timeScale')}
                    margin="normal"
                    variant="outlined"
                  >
                    {timeScaleOptions.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  ></TextField>
                </Grid>
              </Grid>

              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <LineChart
                    height={500}
                    data={data.filter(function(row) {
                      return row.dateFromNowMinutes > -(timeScale * 60);
                    })}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                    className="line-chart"
                    >
                    <XAxis allowDataOverflow domain={[-(timeScale * 60), 'auto']} type="number" dataKey="dateFromNowMinutes" height={100} tickCount={10} tick={<CustomizedAxisTick />} label="temps"/>
                    <YAxis allowDataOverflow width={80}>
                      <Label value="mmol/L" offset={5} position="insideTopLeft" />
                    </YAxis>
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid stroke="#f5f5f5" />

                    <Line yAxisId={0} type="monotone" dataKey="mmol" stroke="#54a4ef" strokeWidth={2} dot={{ r: 1 }} />
                    <ReferenceLine y={allData.range_min} stroke="#97191b" strokeWidth={2} className="graph-referenece-line" >
                      <Label value={"MIN " + allData.range_min} offset={5} position="insideTopRight" />
                    </ReferenceLine>
                    <ReferenceLine y={allData.range_max} stroke="#97191b" strokeWidth={2} className="graph-referenece-line" >
                      <Label value={"MAX " + allData.range_max} offset={5} position="insideBottomRight" />
                    </ReferenceLine>

                  </LineChart>
                </ResponsiveContainer>
              </div>

            </div>
          </Modal>
        </div>
      );
    }

  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;