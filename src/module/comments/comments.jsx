import { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "./action";

class Comments extends Component {
    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
        return (
            <div>
                
                <h1>Comments</h1>
                <table className="table table-hover table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">email</th>
                            <th scope="col">Context</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.commentsList?.map(comment => {
                            return (
                                <tr  key={comment.id}>
                                    <td>{comment.id}</td>
                                    <td>{comment.name}</td>
                                    <td>{comment.email}</td>
                                    <td>{comment.body}</td>
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
        commentsList : state.commentsReducer.comments
    }
}

export default connect(mapStateToProps , {fetchComments}) (Comments);