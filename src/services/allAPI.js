import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"



// add
export const addTaskAPI=async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/add-task`,reqBody)
}
// get
export const getTasksAPI=async()=>{
    return await commonAPI("GET",`${SERVERURL}/all-tasks`,"")
}

// delete
export const deleteTaskAPI=async(pId)=>{
    return await commonAPI("DELETE",`${SERVERURL}/${pId}/delete`,{})
}

// editProjectAPI called by edit : PUT req to http://localhost:3000/pid/edit-project
export const editTaskAPI=async(pId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/${pId}/edit-task`,reqBody,reqHeader)
}