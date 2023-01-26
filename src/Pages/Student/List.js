import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function List () {
    const [students,setStudents] = useState([]);
    const [isloading,setloading] = useState(false)
    useEffect(()=>{
        fetchData()
    },[])

    let  fetchData = async () => {
        try {
            setloading(true)
          const students =  await axios.get("https://63873d31e399d2e473f90617.mockapi.io/students")
        
          setStudents(students.data)
          setloading(false)
        } catch (error) {
          alert ("error") 
          console.log(error) 
        }
    }
    const deleteUser = async (id) => {
        let ask = window.confirm("Do you want to delete!!");
        if (ask){
            try {
                await axios.delete (`https://63873d31e399d2e473f90617.mockapi.io/students/${id}`)
                fetchData();
           
            alert("Deleted")
        }
        catch(error){
console.log(error)
        }
        }
    }

    return (
        <div class="container-fluid mb-10" >

        
        <div class="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
            <h1 class="h3 mb-0 text-gray-800">Students List</h1>
            <Link to={"/students/create"} href="#" class="d-none d-lg-inline-block btn btn-lg btn-primary shadow-sm"><i
                    class="fas fa-user-plus fa-lg text-white-90"></i> Add Student</Link>
        </div>
        <div> 
       
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h5 class="m-0 font-weight-bold text-primary">Student Table</h5>
            </div>
            {
                isloading ? <span>Loading.....</span> : <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                                            <th>Standard</th>
                                            <th>Subject-1</th>
                                            <th>Subject-2</th>
                                            <th>Subject-3</th>
                                            <th>Teacher</th>
                                            <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>ID</th>
                               <th>Name</th>
                                            <th>Standard</th>
                                            <th>Subject-1</th>
                                            <th>Subject-2</th>
                                            <th>Subject-3</th>
                                            <th>Teacher</th>
                                            <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                       
                          
                            
                           {students.map((student)=>{
                            return <tr>
                              <td>{student.id}</td>  
                            <td>{student.student_name}</td>
                            <td>{student.standard}</td>
                            <td>{student.subject1}</td>
                            <td>{student.subject2}</td>
                            <td>{student.subject3}</td>
                            <td>{student.teacher}</td>
                            
                            <td>< Link to={`/students/view/${student.id}`} className="btn btn-primary mr-2 mb-2">View</Link>
                            < Link to={`/students/edit/${student.id}`} className="btn btn-info mr-2 mb-2">Edit</Link>
                            < button onClick={ () => deleteUser(student.id)} className="btn btn-danger mb-2">Delete</button></td>
                        </tr>
                           })}
                            
                           
                           
                        </tbody>
                    </table>
                </div>
            </div>
            }
        </div>

    </div></div>

    )
}
export default List;