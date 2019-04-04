import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

import {ResponsiveContainer, LineChart, Line, XAxis, YAxis} from 'recharts';

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
  tableSpan: {
    fontSize: '0.6em',
    color: '#777',
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

  value_red: {
    color: 'red',
  },
  value_black: {
    color: 'black',
  },

  
});


function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Nom', enableSorting: true },
  { id: 'historique', numeric: false, disablePadding: false, label: 'Tendance dernière heure', enableSorting: false },
  { id: 'mmol', numeric: true, disablePadding: true, label: 'Niveau de glucose (mmol/L)', enableSorting: true },
  { id: 'uploaderBattery', numeric: true, disablePadding: true, label: 'Batterie', enableSorting: true },
  { id: 'dateFromNowMinutes', numeric: true, disablePadding: false, label: 'Dernière valeur', enableSorting: true },
];


class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.id == 'name' ? 'left' : 'right'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
              {row.enableSorting ? (
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              ) : (
                <TableSortLabel>
                  {row.label}
                </TableSortLabel>
              )}
              
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
};



class SimpleTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      // data: props.data,
      open: false,
      row: {name: "", sensor: ""},
    };
  }

  

  componentDidMount() {
    this.setState({
      // rows: this.props.data,
      isLoaded: true
    })
  }

  // componentWillReceiveProps() {
  //   this.setState({
  //     rows: this.props.data,
  //     isLoaded: true
  //   })
  // }

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
    const { classes, rows, order, orderBy } = this.props;
    const { error, isLoaded } = this.state;

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded || !rows) {
        return <div>Loading...</div>;
    } else {
      return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.props.handleRequestSort}
            />
            <TableBody>
              {rows.map(row => (
                row.latestReading == "err_no_data" ? (
                  <TableRow key={row._id} className={classes.tableRow} onClick={() => this.handleClick(row)}>
                    <TableCell component="th" scope="row" padding="dense">
                      {row.name}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                    </TableCell>
                    <TableCell align="right" padding="dense">N/A</TableCell>
                    <TableCell align="right" padding="dense"></TableCell>
                    <TableCell align="right" padding="dense">N/A</TableCell>
                  </TableRow>
                ) : (
                  <TableRow key={row._id} className={classes.tableRow} onClick={() => this.handleClick(row)}>
                    <TableCell component="th" scope="row" padding="dense">
                      {row.name}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      <div style={{ width: '150px', height: '30px', }}>
                        <ResponsiveContainer>
                          <LineChart data={row.readingsLastHour}>
                            <XAxis type="number" dataKey="dateFromNowMinutes" hide={true} />
                            <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true} />
                            <Line type='monotone' dataKey='mmol' stroke='#999' strokeWidth={2} dot={{ r: 0 }}/>
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </TableCell>
                    <TableCell align="right" padding="dense" className={((row.latestReading.mmol < row.range_min) ? classes.value_low : ((row.latestReading.mmol > row.range_max) ? classes.value_high : classes.value_normal))}>
                      {row.latestReading.mmol} <span style={{fontSize: '1.3em', marginTop: '-5px'}} dangerouslySetInnerHTML={{__html: row.latestReading.directionArrow}}></span>
                    </TableCell>
                    {row.battery ? (
                      <TableCell align="right" padding="dense" className={(row.battery.uploaderBattery < 20) ? classes.value_red : classes.value_black}>{row.battery.uploaderBattery} %<br></br><span className={classes.tableSpan}>{row.battery.dateFromNow}</span></TableCell>
                    ) : (
                      <TableCell align="right" padding="dense"></TableCell>
                    )}
                    <TableCell align="right" padding="dense" className={(row.dateFromNowMinutes > 60) ? classes.value_red : classes.value_black}>{row.latestReading.dateTime}<br></br><span className={classes.tableSpan}>{row.latestReading.dateFromNow}</span></TableCell>
                  </TableRow>
                )
                
              ))}
            </TableBody>
          </Table>
  
          <ModalComponent open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose} data={this.state.row}/>
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