import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
  

class Index extends React.Component {

    state = {}

    render() {
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
                
                <Grid container spacing={8}>
                    <Grid item xs={6}>
                        <div>
                            <TableComponent tableNumber="1"/>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <TableComponent tableNumber="2"/>
                        </div>
                    </Grid>
                </Grid>
                
                <SnackbarComponent />

            </div>

        );
    }
}

export default Index;