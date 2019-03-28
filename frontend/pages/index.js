import Link from 'next/link'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GoogleLogin from 'react-google-login';
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
    }
});

const theme = createMuiTheme({
    palette: {
      primary: { main: '#455a64' }, // Purple and green play nicely together.
      secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
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
            dataSecondHalf: []
        };
    }

    componentDidMount() {
        this.timer = setInterval(()=> this.getData(), 5 * 1000)
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
                console.log(convertedData);

                this.setState({
                    error: null,
                    isLoaded: true,
                    loadingData: false,
                    data: convertedData,
                    dataFirstHalf: convertedData.splice(0, Math.ceil(convertedData.length / 2)),
                    dataSecondHalf: convertedData,
                });

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

    render() {
        const { classes } = this.props;

        const responseGoogle = (response) => {
            console.log(response);
        }

        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <div>
                    <MuiThemeProvider theme={theme}>
                        <AppbarComponent />
                        {/* <h2>My blog</h2>
                        <ul>
                        <li>
                            <Post slug="post/yet-another-post" title="Yet another post" />
                            <Post slug="post/second-post" title="Second post" />
                            <Post slug="post/hello-world" title="Hello, world!" />
                        </li>
                        </ul> */}

                        {this.state.loadingData ? "True" : "False"}

                        <GoogleLogin
                                clientId="379738068740-tgguug359j7mqrm0vqledsf9si5u7ssp.apps.googleusercontent.com"
                                buttonText="Login to google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                />
                        
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