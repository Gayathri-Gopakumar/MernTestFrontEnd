import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteTaskAPI, getTasksAPI } from '../services/allAPI';




const TaskCard = ({title}) => {
    const [show, setShow] = useState(false);
    const [allTask,setallTask]=useState([])
    // const [description, setDescription] = useState('');
    // const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');
    

    useEffect(()=>{
        getAllTaks()
    },[])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getAllTaks=async()=>{
        try{
            const result=await getTasksAPI()
            if(result.status==200){
                setallTask(result.data)
                // setDescription(result.data.description)
                // setStartDate(result.data.startDate)
                // setEndDate(result.data.endDate)
                // const newTask={title,description,startDate,endDate}
            }else{
                console.log(result.response.data);
                
            }
            
        }catch(err){
            console.log(err);
            
        }
    }
    console.log(allTask);

    
    
    
    const handleDelete=async()=>{
        try{
            await deleteTaskAPI(pId)
        }catch(err){
            console.log(err);
            
        }
    }
  return (
    <div className='flex flex-wrap ms-3'>
            {
                allTask.length>0?
                allTask.map(task=>(
                    <Card style={{ width: '18rem',background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,126,253,1) 100%)' }} className='mb-2' >
                        <Card.Body>
                            <Card.Title>{task.title}</Card.Title>
                            <Card.Text>
                                Task description: {task.description}
                                <br />
                                Start date:{task.startDate}
                                <br />
                                End date:{task.endDate}
                            </Card.Text>
                            <Button onClick={handleShow} variant="primary" className='me-2'>EDIT</Button>
                            <Button onClick={handleDelete} variant="danger">DELETE</Button>
                        </Card.Body>
                     </Card>

                ))
                :
                <div className='text-center text-danger'>NO TASK</div>
            }

        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} className='me-2'>
                    Close
                </Button>
                <Button  variant="primary" >
                    Save Changes
                </Button>
                </Modal.Footer>
        </Modal>
    </div>
  )
}

export default TaskCard
