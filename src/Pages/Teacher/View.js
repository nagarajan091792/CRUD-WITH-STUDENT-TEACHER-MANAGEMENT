import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
function Tview() {
    const [view, setview] = useState([])
    const [isloading,setloading] = useState(false)
  let params = useParams()
  useEffect(() => {
    fetchdata()
  }, [])
  let fetchdata = async () => {
    try {
      setloading(true)
    let a = await axios.get(`https://63873d31e399d2e473f90617.mockapi.io/teacher/${params.id}`);
    setview(a.data);
    setloading(false)
    } catch (error) {
    console.log(error) 
    }
    
  }
    return(
        <>
        <div class="card text-center">
  <div class="card-header">
 <h3>Teacher Details</h3> 
  </div>
  {
                isloading ? <span>Loading.....</span> :
  <div class="card-body">
    
    <h4>
    {`Name : ${view.teacher_name}`} </h4>
    <h4> {`Position : ${view.position}`} </h4>
    <h4> {`Subject-1 : ${view.subject1}`} </h4>
    <h4> {`Subject-2 : ${view.subject2}`} </h4>
    <h4>{`Salary : ${view.salary}`} </h4>
    <h4>  {`Joining : ${view.joining_date}`}
    </h4>
  
  </div>}
  
</div>
<Link className="btn btn-primary text-center mt-4 ml-4" to={"/teachers/list"}>Back</Link>
        </>
    )
}
export default Tview;