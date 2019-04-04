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
import RefreshIcon from '@material-ui/icons/Refresh';
import moment from 'moment';

import { scale, scalePow, scaleLog } from 'd3-scale';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, ReferenceArea, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';

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

const timeScale = [
  {
    value: '1',
    label: 'Dernière heure',
  },
  {
    value: '3',
    label: '3 dernières heures',
  },
  {
    value: '12',
    label: '12 dernières heures',
  },
  {
    value: '24',
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
      timeScale: '1',
    };
  }

  componentDidMount() {
    this.setState({loaded: true});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.data!==this.props.data){
      if (nextProps.data.readings) {
        this.setState({
          data: nextProps.data.readings.reverse(),
          allData: nextProps.data,
        });
      }
    }
  }

  render() {
    const { classes } = this.props;
    const { loaded, data, allData } = this.state;

    if (!loaded || !allData._id) {
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
              <Typography variant="h4" id="modal-title">
                {allData.name}
              </Typography>

              <Grid container>
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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
                <Grid item xs={4}>
                  <TextField
                    id="outlined-select-timeScale"
                    select
                    label="Données"
                    className={classes.textField}
                    value={this.state.timeScale}
                    // onChange={this.handleChange('currency')}
                    margin="normal"
                    variant="outlined"
                  >
                    {timeScale.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  ></TextField>
                </Grid>
              </Grid>

              <LineChart
                  width={600}
                  height={500}
                  data={data}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  className="line-chart"
                  >
                  <XAxis type="number" dataKey="dateFromNowMinutes" height={100} tickCount={10} tick={<CustomizedAxisTick />} label="temps"/>
                  <YAxis width={80}>
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