import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {ResponsiveContainer, LineChart, Line, YAxis} from 'recharts';

import ModalComponent from '../components/ModalComponent'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    // minWidth: 700,
  },
  tableRow: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },

  value_normal: {
    fontWeight: 'bold',
  },
  value_low: {
    color: 'red',
    fontWeight: 'bold',
  },
  value_high: {
    color: 'red',
    fontWeight: 'bold',
  },

  
});

let id = 0;
function createData(name, sensor, sgv, battery, lastTime) {
  id += 1;
  return { id, name, sensor, sgv, battery, lastTime };
}

// const rows = [
//   createData('Ege Ozer', 'Dexcom G5', 2.4, 24, '2019-01-29 11:30:12'),
//   createData('Rami Djema', 'FreeStyle Libre', 4.4, 51, '2019-01-29 14:58:12'),
//   createData('Alexis Giguere', 'Dexcom G5', 5.2, 12, '2019-01-29 09:03:12'),
//   createData('Ahmad Prof', 'Dexcom G5', 3.0, 87, '2019-01-29 17:45:12'),
// ];


class SimpleTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        data: props.data,
        open: false,
        row: {name: "", sensor: ""},
        rows: []
    };
  }

  componentDidMount() {
    this.setState({
      rows: this.props.data,
      isLoaded: true
    })
  }

  componentWillReceiveProps() {
    this.setState({
      rows: this.props.data,
      isLoaded: true
    })
  }

  handleClick = (row) => {
    this.setState({open: true, row: row});
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { error, isLoaded, rows } = this.state;

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
      return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell align="right">Historique</TableCell>
                <TableCell align="right">Valeur de glucose (mmol/L)</TableCell>
                <TableCell align="right">Batterie (%)</TableCell>
                <TableCell align="right">Dernière valeur</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                row.latestReading == "err_no_data" ? (
                  <TableRow key={row._id} className={classes.tableRow} onClick={() => this.handleClick(row)}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">
                    </TableCell>
                    <TableCell align="right">N/A</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">N/A</TableCell>
                  </TableRow>
                ) : (
                  <TableRow key={row._id} className={classes.tableRow} onClick={() => this.handleClick(row)}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">
                      <div style={{ width: '100%', height: 50 }}>
                        <ResponsiveContainer>
                          <LineChart data={row.readings}>
                            <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />
                            <Line type='monotone' dataKey='mmol' stroke='#999' strokeWidth={2} dot={{ r: 0 }}/>
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </TableCell>
                    <TableCell align="right" className={((row.latestReading.mmol < row.range_min) ? classes.value_low : ((row.latestReading.mmol > row.range_max) ? classes.value_high : classes.value_normal))}>{row.latestReading.mmol}</TableCell>
                    {row.battery ? (
                      <TableCell align="right">{row.battery.uploaderBattery} ({row.battery.dateFromNow})</TableCell>
                    ) : (
                      <TableCell align="right"></TableCell>
                    )}
                    <TableCell align="right">{row.latestReading.dateFromNow}</TableCell>
                  </TableRow>
                )
                
              ))}
            </TableBody>
          </Table>
  
          <ModalComponent open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose} sensorData={this.state.row}/>
        </Paper>
      );
    }

  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleTableWrapped = withStyles(styles)(SimpleTable);

export default SimpleTableWrapped;