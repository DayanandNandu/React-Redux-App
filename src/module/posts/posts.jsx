import { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./action";


class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    };

    render() {
        return (
            <div>
                <h1>Posts</h1>
                <table className="table table-hover table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Context</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.postsList?.map(post => {
                            return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                            )
                        })}                        
                    </tbody>
                </table>                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postsList : state.postsReducer.posts
    }
}

export default connect(mapStateToProps , {fetchPosts}) (Posts);