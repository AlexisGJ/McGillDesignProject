import Link from 'next/link'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import moment from 'moment';

import '../static/css/main_custom.css'

import TableComponent from '../components/TableComponent'
import SnackbarComponent from '../components/SnackbarComponent';
import AppbarComponent from '../components/AppbarComponent';


const Post = props => (
    <li>
        <Link as={`/${props.slug}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

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

            snackbarOpen: false,
            snackbarMessage: "",
            snackbarVariant: "info",
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

        fetch("http://localhost:1234/api/reading/allActiveChildren")
        .then(res => res.json())
        .then(
            (result) => {
                let convertedData = this.convertData(result);

                this.setState({
                    error: null,
                    isLoaded: true,
                    loadingData: false,
                    data: convertedData,
                    dataFirstHalf: convertedData.splice(0, Math.ceil(convertedData.length / 2)),
                    dataSecondHalf: convertedData,
                });

                setTimeout(() => {
                    this.showSnackbarMessage("Données mises à jour", "success");
                }, 1000);
                

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                this.setState({
                    error: error,
                    isLoaded: true,
                });
            }
        )
    }

    convertData = (data) => {

        moment.locale('fr-CA');
      
        for(var i=0; i<data.length; i++) {
      
          if (data[i]['readings'] && data[i]['readings'].length > 0) {
      
            for (var j=0; j<data[i]['readings'].length; j++) {
              var now = moment(new Date());
              var measurementDate = moment(data[i]['readings'][j]['dateString'])
              var diffMinutes = Math.round(moment.duration(now.diff(measurementDate)).asMinutes());
        
              data[i]['readings'][j]['mmol'] = Math.round(data[i]['readings'][j]['sgv'] / 18 * 100) / 100;  // convert from mg/dl to mmol/L
              data[i]['readings'][j]['dateFromNow'] = measurementDate.fromNow();
              data[i]['readings'][j]['dateFromNowMinutes'] = -diffMinutes;
              data[i]['readings'][j]['dateTime'] = measurementDate.format('HH:mm');
            }
        
            data[i]['latestReading'] = data[i]['readings'][0];
      
            if (data[i]['battery']) {
              data[i]['battery']['dateFromNow'] = moment(data[i]['battery']['created_at']).fromNow();
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
                        {/* <h2>My blog</h2>
                        <ul>
                        <li>
                            <Post slug="post/yet-another-post" title="Yet another post" />
                            <Post slug="post/second-post" title="Second post" />
                            <Post slug="post/hello-world" title="Hello, world!" />
                        </li>
                        </ul> */}
                        
                        <Grid container spacing={8} className={classes.root}>
                            <Grid item xs={6}>
                                <div>
                                    <TableComponent data={this.state.dataFirstHalf}/>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div>
                                    <TableComponent data={this.state.dataSecondHalf}/>
                                </div>
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