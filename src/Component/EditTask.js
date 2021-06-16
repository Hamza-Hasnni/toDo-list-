import {Modal,Button} from 'react-bootstrap'
import React, {useState} from "react"
import {useDispatch} from 'react-redux'
import {editTask} from '../Redux/action'
import 'bootstrap/dist/css/bootstrap.min.css';




function EditTask({task}) {
  const [show, setShow] = useState(false);
  const [text, setText]=useState(task.description);
const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit=()=>{
    handleClose();
    dispatch(editTask(task.id,text));
  }
  const handleChange = (e) =>
  {
    setText(e.target.value);
    
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Title>Edit your Task</Modal.Title>
        <Modal.Body>
          <input  defaultValue={text} onChange ={handleChange} />
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditTask ;
