import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import TableComponent from '../components/TableComponent'
import ModalComponent from '../components/ModalComponent'

const Post = props => (
    <li>
        <Link as={`/${props.slug}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

class Index extends React.Component {

    state = {allo: "1"}

    changeAllo = () => {
        this.setState({allo: "829374"});
    }

    render() {
        return(
            <div>
                <h2>My blog</h2>
                <ul>
                <li>
                    <Post slug="post/yet-another-post" title="Yet another post" />
                    <Post slug="post/second-post" title="Second post" />
                    <Post slug="post/hello-world" title="Hello, world!" />
                </li>
                </ul>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <div>
                            {this.state.allo}
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div>
                            Table 2
                        </div>
                    </Grid>
                </Grid>
                <button onClick={this.changeAllo}>Change allo</button>
                <TableComponent tableNumber="69"/>

                <ModalComponent />
            </div>

        );
    }
}

export default Index;