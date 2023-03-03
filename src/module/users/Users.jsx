import { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers , viewUserDetails} from "./action";
import UserDetails from "./userDetails";


class Users extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }    

    render(){
        return (
            <div>
                <h1>USERS</h1>
                <table className="table table-hover table-bordered border-secondary">
                    <thead >
                        <tr className="table-primary">
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.usersList?.map(user => {
                            return (
                                <tr  key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name} <i onClick={() => this.props.viewUserDetails(user.id)} className="fa fa-address-card-o ps-4 text-primary cursor-pointer"></i></td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            )
                            })}
                    </tbody>
                </table>

                
                {this.props.showModal ? <UserDetails /> : null }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersList : state.usersRed.users,
        showModal : state.usersRed.showModal
    }
} 

export default connect(mapStateToProps , {fetchUsers , viewUserDetails}) (Users);



