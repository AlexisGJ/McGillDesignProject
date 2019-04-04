import Link from 'next/link'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import moment from 'moment';

import TableComponent from '../components/TableComponent'
import SnackbarComponent from '../components/SnackbarComponent';
import AppbarComponent from '../components/AppbarComponent';
import { Typography } from '@material-ui/core';


const API_URL = (process.env.NODE_ENV && process.env.NODE_ENV === 'production') ? "https://camp-carowanis-api.herokuapp.com" : "http://localhost:1234";


const styles = theme => ({
    root: {
      padding: 20
    },

    snackbarContainer: {
        minWidth: 500,
    },
    snackbarMargin: {
        margin: theme.spacing.unit,
    },
});

const theme = createMuiTheme({
    palette: {
      primary: { main: '#455a64' },
      secondary: { main: '#ffffff' },
    },
    typography: {
        useNextVariants: true,
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
    { id: 'historique', numeric: false, disablePadding: false, label: 'Historique', enableSorting: false },
    { id: 'mmol', numeric: true, disablePadding: true, label: 'Niveau de glucose (mmol/L)', enableSorting: true },
    { id: 'uploaderBattery', numeric: true, disablePadding: true, label: 'Batterie', enableSorting: true },
    { id: 'dateFromNowMinutes', numeric: true, disablePadding: false, label: 'Dernière valeur', enableSorting: true },
  ];
  

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            loadingData: false,
            data: [],
            dataFirstHalf: [],
            dataSecondHalf: [],
            lastSuccessfulUpdate: moment(),

            snackbarOpen: false,
            snackbarMessage: "",
            snackbarVariant: "info",

            order: 'asc',
            orderBy: 'name',
        };
    }

    componentDidMount() {
        this.getData();
        this.timer = setInterval(()=> this.getData(), 0.5 * 60 * 1000);
    }

    async getData() {
        console.log("getData started!");

        this.setState({
            loadingData: true,
        });

        fetch(API_URL + "/api/reading/allActiveChildren")
        .then(res => res.json())
        .then(
            (result) => {

                if (result && result.length > 0) {
                    let convertedData = this.convertData(result);
                    let sortedData = stableSort(convertedData, getSorting(this.state.order, this.state.orderBy));

                    this.setState({
                        error: null,
                        isLoaded: true,
                        loadingData: false,
                        data: convertedData.slice(0),
                        dataFirstHalf: sortedData.splice(0, Math.ceil(sortedData.length / 2)),
                        dataSecondHalf: sortedData,
                        lastSuccessfulUpdate: moment(),
                    });

                    setTimeout(() => {
                        this.showSnackbarMessage("Données mises à jour", "success");
                    }, 1000);
                } else {
                    this.setState({
                        error: null,
                        isLoaded: true,
                        loadingData: false,
                    });

                    setTimeout(() => {
                        this.showSnackbarMessage("Erreur: impossible d'obtenir les données", "error");
                    }, 1000);
                }
                

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                this.setState({
                    error: error,
                    isLoaded: true,
                });

                setTimeout(() => {
                    this.showSnackbarMessage("Erreur: impossible d'obtenir les données", "error");
                }, 1000);
            }
        )
    }

    convertData = (data) => {

        moment.locale('fr-CA');
      
        for(var i=0; i<data.length; i++) {
      
          if (data[i]['readings'] && data[i]['readings'].length > 0) {

            data[i]['readingsLastHour'] = [];
      
            for (var j=0; j<data[i]['readings'].length; j++) {
              var now = moment(new Date());
              var measurementDate = moment(data[i]['readings'][j]['dateString'])
              var diffMinutes = Math.round(moment.duration(now.diff(measurementDate)).asMinutes());
        
              data[i]['readings'][j]['mmol'] = Math.round(data[i]['readings'][j]['sgv'] / 18 * 100) / 100;  // convert from mg/dl to mmol/L
              data[i]['readings'][j]['dateFromNow'] = measurementDate.fromNow();
              data[i]['readings'][j]['dateFromNowMinutes'] = -diffMinutes;
              data[i]['readings'][j]['dateTime'] = measurementDate.format('HH:mm');
              data[i]['readings'][j]['epoch'] = measurementDate.unix() * 1000;

              if (diffMinutes < 60) {
                var summaryReading = {};
                summaryReading['mmol'] = data[i]['readings'][j]['mmol'];
                summaryReading['dateFromNowMinutes'] = data[i]['readings'][j]['dateFromNowMinutes'];

                data[i]['readingsLastHour'].push(summaryReading);
              }

            }
        
            data[i]['latestReading'] = data[i]['readings'][0];
            data[i]['mmol'] = data[i]['readings'][0]['mmol'];
            data[i]['dateFromNowMinutes'] = -data[i]['readings'][0]['dateFromNowMinutes'];

            var directionArrows = null;
            switch (data[i]['latestReading']['direction']) {
                case 'Flat':
                  directionArrows = "&rarr;"
                  break;
                case 'SingleUp':
                  directionArrows = "&uarr;"
                  break;
                case 'SingleDown':
                  directionArrows = "&darr;"
                  break;
                case 'DoubleUp':
                  directionArrows = "&uarr;&uarr;"
                  break;
                case 'DoubleDown':
                  directionArrows = "&darr;&darr;"
                  break;
                case 'FortyFiveUp':
                  directionArrows = "&nearr;"
                  break;
                case 'FortyFiveDown':
                  directionArrows = "&searr;"
                  break;
                default:
                  directionArrows = ""
            }

            data[i]['latestReading']['directionArrow'] = directionArrows;

      
            if (data[i]['battery']) {
              data[i]['battery']['dateFromNow'] = moment(data[i]['battery']['created_at']).fromNow();
              data[i]['uploaderBattery'] = data[i]['battery']['uploaderBattery'];
            }
      
          } else {
            data[i]['latestReading'] = "err_no_data";
          }
      
        }
        
        return data;
    }

    showSnackbarMessage = (message, variant) => {
        this.setState({ 
            snackbarOpen: true,
            snackbarMessage: message,
            snackbarVariant: variant
        });
    }
    
    snackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ snackbarOpen: false });
    };

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';
    
        if (this.state.orderBy === property && this.state.order === 'desc') {
          order = 'asc';
        }

        let sortedData = stableSort(this.state.data, getSorting(order, orderBy));

        this.setState({ 
            order: order,
            orderBy: orderBy,
            dataFirstHalf: sortedData.splice(0, Math.ceil(sortedData.length / 2)),
            dataSecondHalf: sortedData,
        });

        setTimeout(this.forceUpdate(), 1000);

    };

    render() {
        const { classes } = this.props;

        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <div>
                    <MuiThemeProvider theme={theme}>
                        <AppbarComponent loading={this.state.loadingData}/>
                        
                        <Grid container spacing={8} className={classes.root}>
                            <Grid item xs={6}>
                                <div>
                                    <TableComponent 
                                        rows={this.state.dataFirstHalf} 
                                        handleRequestSort={this.handleRequestSort}
                                        order={this.state.order}
                                        orderBy={this.state.orderBy}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div>
                                    <TableComponent 
                                        rows={this.state.dataSecondHalf}
                                        handleRequestSort={this.handleRequestSort}
                                        order={this.state.order}
                                        orderBy={this.state.orderBy}
                                    />
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography style={{fontSize: '12px', textAlign: 'right'}}>
                                    Dernière mise à jour {moment(this.state.lastSuccessfulUpdate).fromNow()}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={this.state.snackbarOpen}
                            autoHideDuration={4000}
                            onClose={this.snackbarClose}
                            className={classes.snackbarContainer}
                            >

                            <SnackbarComponent
                                variant={this.state.snackbarVariant}
                                className={classes.snackbarMargin}
                                message={this.state.snackbarMessage}
                                />

                        </Snackbar>
                    </MuiThemeProvider>
                </div>
    
            );
        }

    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

const IndexWrapped = withStyles(styles)(Index);

export default IndexWrapped;