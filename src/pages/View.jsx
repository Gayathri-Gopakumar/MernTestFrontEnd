import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addTaskAPI } from '../services/allAPI';
import TaskCard from '../components/TaskCard';



const View = () => {
    const [show, setShow] = useState(false);
    const [title,setTitle]=useState("")
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    console.log(title,description,startDate,endDate);
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddTask=async()=>{
    const reqBody={title,description,startDate,endDate}
    try{
        await addTaskAPI(reqBody)
    }catch(err){
        console.log(err);
        
    }
   
    handleClose()
  }

  return (
    <>
        <div style={{height:'100px',width:'100%',background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,126,253,1) 100%)'}} className='d-flex justify-content-center align-items-center bg-primary '>
                <h2 className='text-center text-light'>TASK TRACKING SYSTEM</h2>
        </div>
        <div className='mt-3 text-center'>
            <div onClick={handleShow} className='btn btn-warning '>ADD TASK</div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>NEW TASK</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} className='form-control mb-2' type="text" placeholder='Task Title' />
                    <input value={description} onChange={(e)=>setDescription(e.target.value)} className='form-control mb-2' type="text" placeholder='Task Description' />
                    <input value={startDate} onChange={(e)=>setStartDate(e.target.value)} className='form-control mb-2' type="date" placeholder='Start date' />
                    <input value={endDate} onChange={(e)=>setEndDate(e.target.value)} className='form-control mb-2' type="date" placeholder='End date' />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button onClick={handleAddTask} variant="primary" >
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

        </div>
        <TaskCard title={title}/>

    </>
  )
}

export default View