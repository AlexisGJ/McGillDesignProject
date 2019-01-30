// export default props => <h1>{props.url.query.title}</h1>
import { withRouter } from 'next/router'

class Post extends React.Component {

    render() {
        {console.log(this.props)}
        return(
            <h1>{this.props.url.query.title}</h1>
        );
    }
}

export default Post;