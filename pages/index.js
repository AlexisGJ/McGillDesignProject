import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Post = props => (
    <li>
        <Link as={`/${props.slug}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
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
                    Table 1
                </div>
            </Grid>
            <Grid item xs>
                <div>
                    Table 2
                </div>
            </Grid>
        </Grid>
    </div>
)