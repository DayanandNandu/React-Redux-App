import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "./action";


const UserDetails = () => {
    const showModal = useSelector(state => state.usersRed.showModal);
    const userDetails = useSelector(state => state.usersRed.userDetails);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(hideModal())
    }
    return (
        <div>
            <Modal show={showModal} onHide={() => handleClose()} backdrop="static">
                <Modal.Header closeButton>
                <Modal.Title>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">User ID :</th>
                            <td>{userDetails.id}</td>
                        </tr>
                        <tr>
                            <th scope="row">Name :</th>
                            <td className="text-primary">{userDetails.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">User Name :</th>
                            <td className="text-success">{userDetails.username}</td>
                        </tr>
                        <tr>
                            <th scope="row">Phone No:</th>
                            <td className="text-primary">{userDetails.phone}</td>
                        </tr>
                        <tr>
                            <th scope="row">Website :</th>
                            <td className="text-primary">{userDetails.website}</td>
                        </tr>
                        <tr>
                            <th scope="row">Address :</th>
                            <td className="text-primary">{userDetails.address.street} {userDetails.address.suite} {userDetails.address.city} {userDetails.address.zipcode}</td>
                        </tr>
                        <tr>
                            <th scope="row">Company :</th>
                            <td className="text-success">{userDetails.company.name} {userDetails.company.catchPhrase} {userDetails.company.bs}</td>
                        </tr>
                                                 
                    </tbody>
                    </table>
                                       
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default UserDetails;