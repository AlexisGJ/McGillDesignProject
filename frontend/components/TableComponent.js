import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

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

function convertData(data) {
  for(var i=0; i<data.length; i++) {
    for (var j=0; j<data[i]['readings'].length; j++) {
      var now = moment(new Date());
      var measurementDate = moment(data[i]['readings'][j]['dateString'])
      var diffMinutes = Math.round(moment.duration(now.diff(measurementDate)).asMinutes());

      data[i]['readings'][j]['dateFromNow'] = measurementDate.fromNow();
      data[i]['readings'][j]['dateFromNowMinutes'] = -diffMinutes;
    }

    data[i]['latestReading'] = data[i]['readings'][0];
  }
  
  return data;
}

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
      rows: convertData(this.state.data),
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
                <TableCell align="right">Type de capteur</TableCell>
                <TableCell align="right">Valeur de glucose</TableCell>
                <TableCell align="right">% batterie</TableCell>
                <TableCell align="right">Mesuré le</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row._id} className={classes.tableRow} onClick={() => this.handleClick(row)}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.latestReading.device}</TableCell>
                  <TableCell align="right">{row.latestReading.sgv}</TableCell>
                  <TableCell align="right">{row.latestReading.dateFromNowMinutes}</TableCell>
                  <TableCell align="right">{row.latestReading.dateFromNow}</TableCell>
                </TableRow>
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