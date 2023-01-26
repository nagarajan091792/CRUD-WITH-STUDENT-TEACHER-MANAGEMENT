import axios from "axios";
import { useEffect, useState } from "react"

function Dashboard() {
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
    return(
        <>
          <div class="container-fluid mb-10" >

        
<div class="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
    <h1 class="h3 mb-0 text-gray-800">Students Assign Teachers List</h1>
    
</div>
<div> 

<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h5 class="m-0 font-weight-bold text-primary"> Table</h5>
    </div>
    {
        isloading ? <span>Loading.....</span> : <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                    <th>ID</th>
                       <th>Student Name</th>
                                    <th>Teacher Name</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                    <th>ID</th>
                       <th>Student Name</th>
                                    <th>Teacher Name</th>
                                    
                    </tr>
                </tfoot>
                <tbody>
               
                  
                    
                   {students.map((student)=>{
                    return <tr>
                      <td>{student.id}</td>  
                    <td>{student.student_name}</td>
                    <td>{student.teacher}</td>
                    
                   
                </tr>
                   })}
                    
                   
                   
                </tbody>
            </table>
        </div>
    </div>
    }
</div>

</div></div>
        </>
    )
}
export default Dashboard;