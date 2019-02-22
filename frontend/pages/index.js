import Link from 'next/link'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
  

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:1234/api/reading/allActiveChildren")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    data: result
                });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { classes } = this.props;
        const { error, isLoaded, data } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <div>
                    <AppbarComponent />
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
                                <TableComponent data={data}/>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <TableComponent data={data}/>
                            </div>
                        </Grid>
                    </Grid>
                    
                    <SnackbarComponent />
    
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