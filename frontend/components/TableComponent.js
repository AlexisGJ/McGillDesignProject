import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const rows = [
  createData('Ege Ozer', 'Dexcom G5', 2.4, 24, '2019-01-29 11:30:12'),
  createData('Rami Djema', 'FreeStyle Libre', 4.4, 51, '2019-01-29 14:58:12'),
  createData('Alexis Giguere', 'Dexcom G5', 5.2, 12, '2019-01-29 09:03:12'),
  createData('Ahmad Prof', 'Dexcom G5', 3.0, 87, '2019-01-29 17:45:12'),
];

class SimpleTable extends React.Component {

  state = {open: false, row: {name: "hey", sensor: "Hey"}}

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
    const { classes, tableNumber } = this.props;

    return (
      <Paper className={classes.root}>
        Table number: {tableNumber}
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
              <TableRow key={row.id} className={classes.tableRow} onClick={() => this.handleClick(row)}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.sensor}</TableCell>
                <TableCell align="right">{row.sgv}</TableCell>
                <TableCell align="right">{row.battery}</TableCell>
                <TableCell align="right">{row.lastTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <ModalComponent open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose} sensorData={this.state.row}/>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleTableWrapped = withStyles(styles)(SimpleTable);

export default SimpleTableWrapped;