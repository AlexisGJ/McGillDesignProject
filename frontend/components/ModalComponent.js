import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';
import { scalePow, scaleLog } from 'd3-scale';

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
});

class CustomizedLabel extends React.Component {
  render () {
    const {x, y, stroke, value} = this.props;
		
    return (
      <text x={x} y={y} fill={stroke} textAnchor="middle">hEYYYYYY YOUUUU</text>
    );
  }
}

class CustomizedAxisTick extends React.Component {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-45)">{-payload.value}</text>
      </g>
    );
  }
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <div className="value">{`${payload[0].value}`} <span>mmol/L</span></div>
        <div className="time">il y a {`${-label}`} minutes</div>
      </div>
    );
  }

  return null;
};

class SimpleModal extends React.Component {

  render() {
    const { classes, sensorData } = this.props;

    if (!sensorData._id) {
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
                {sensorData.name}
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
                        value={sensorData.latestReading.device}
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
                        value={sensorData.location}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        id="outlined-location-input"
                        label="Direction"
                        className={classes.textField}
                        type="text"
                        name="direction"
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                          readOnly: true,
                        }}
                        value={sensorData.latestReading.direction}
                    />
                </Grid>
              </Grid>

              <LineChart
                  width={600}
                  height={400}
                  data={sensorData.readings.reverse()}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  className="line-chart"
                  >
                  <XAxis type="number" dataKey="dateFromNowMinutes" height={140} tick={<CustomizedAxisTick />} label="minutes à partir de maintenant"/>
                  <YAxis width={80}>
                    <Label value="mmol/L" offset={5} position="insideTopLeft" />
                  </YAxis>
                  <Tooltip content={<CustomTooltip />} />
                  <CartesianGrid stroke="#f5f5f5" />
                  <ReferenceLine y={sensorData.range_min} stroke="#97191b" strokeWidth={2} className="graph-referenece-line">
                    <Label value={"MIN " + sensorData.range_min} offset={5} position="insideTopRight" />
                  </ReferenceLine>
                  <ReferenceLine y={sensorData.range_max} stroke="#97191b" strokeWidth={2} className="graph-referenece-line">
                    <Label value={"MAX " + sensorData.range_max} offset={5} position="insideBottomRight" />
                  </ReferenceLine>
                  <Line type="monotone" dataKey="mmol" stroke="#54a4ef" strokeWidth={2} dot={{ r: 1 }} yAxisId={0} />
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