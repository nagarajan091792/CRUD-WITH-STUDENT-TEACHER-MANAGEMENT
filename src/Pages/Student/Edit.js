import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Edit() {
  const [teachers,setTeachers] = useState([]);
  useEffect(()=>{
    fetchData1()
},[]);
let  fetchData1 = async () => {
  try { 
     
    const teachers =  await axios.get("https://63873d31e399d2e473f90617.mockapi.io/teacher")
  
    setTeachers(teachers.data)
    
  } catch (error) {
    alert ("error") 
    console.log(error) 
  }
};
    let navigate = useNavigate();
  let params = useParams();
    useEffect(() => {
      
        fetchData();
      }, []);
      let  fetchData = async () => {
        try {
            
          const users =  await axios.get(`https://63873d31e399d2e473f90617.mockapi.io/students/${params.id}`)
          formik.setValues(users.data);
          
        } catch (error) {
          alert ("error")  
          console.log(error)
        }}

        const formik = useFormik({
            initialValues: {
              student_name: "",
              standard: "",
              subject1: "",
              subject2: "",
              subject3: "",
              gender: "",
              teacher: ""
            },
            validate: (values) => {
              let error = {};
              if (!values.student_name) {
                error.student_name = "Please enter the Student Name";
              }
              if (values.student_name && (values.student_name.length <= 2 || values.student_name.length > 15)) {
                error.student_name = "studentname must be between 3 to 15 Characters";
              }
        
              if (!values.standard) {
                error.standard = "Please select standard";
              }
              if (!values.subject1) {
                error.subject1 = "Please select subject1";
              }
              if (!values.subject2) {
                error.subject2 = "Please select subject2";
              }
              if (!values.subject3) {
                error.subject3 = "Please select subject3";
              }
              if (!values.gender) {
                error.gender = "Please select gender";
              }
              if (!values.teacher) {
                error.teacher = "Please select teacher";
              }
        
              return error;
            },
            onSubmit: async (values) => {
              try {
                 await axios.put(
                  `https://63873d31e399d2e473f90617.mockapi.io/students/${params.id}`,
                  values
                );
                alert("Updated Successfully");
                navigate("/students/list");
                formik.resetForm();
              } catch (error) {
                alert("Error");
                console.log(error)
              }
            },
          });
    return (
        <>
        <h2 style={{ textDecorationLine: "underline" }}>Update Your Details </h2><ul />
        <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Student Name</label>
              <input type={"text"} className={`form-control ${
                  formik.touched.student_name && formik.errors.student_name ? "error-box" : "null"
                } ${
                  formik.touched.student_name && !formik.errors.student_name
                    ? "success-box"
                    : "null"
                }`} name='student_name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.student_name}></input>
                {formik.errors.student_name ? (
                <span style={{ color: "red" }}>{formik.errors.student_name}</span>
              ) : null}
            </div> </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Standard</label>
              <select className={`form-control ${
                  formik.touched.standard && formik.errors.standard ? "error-box" : "null"
                } ${
                  formik.touched.standard && !formik.errors.standard
                    ? "success-box"
                    : "null"
                } `} name='standard' value={formik.values.standard} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value={""}></option>
                <option value="Ⅰ">Ⅰ</option>
                <option value="Ⅱ">Ⅱ</option>
                <option value="Ⅲ">Ⅲ</option>
                <option value="Ⅳ">Ⅳ</option>
                <option value="Ⅴ">Ⅴ</option>
                <option value="Ⅵ">Ⅵ</option>
                <option value="Ⅶ">Ⅶ</option>
                <option value="Ⅷ">Ⅷ</option>
                <option value="Ⅸ">Ⅸ</option>
                <option value="Ⅹ">Ⅹ</option>
                <option value="Ⅺ">Ⅺ</option>
                <option value="Ⅻ">Ⅻ</option>
              </select>{formik.errors.standard ? (
                <span style={{ color: "red" }}>{formik.errors.standard}</span>
              ) : null}
            </div></div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="form-group">
              <label>Subject 1</label>
              <select className={`form-control ${
                  formik.touched.subject1 && formik.errors.subject1 ? "error-box" : "null"
                } ${
                  formik.touched.subject1 && !formik.errors.subject1
                    ? "success-box"
                    : "null"
                } `} name='subject1' value={formik.values.subject1} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value={""}></option>
                <option>Tamil</option>
                <option>English</option>
              </select>{formik.errors.subject1 ? (
                <span style={{ color: "red" }}>{formik.errors.subject1}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Subject 2</label>
              <select  className={`form-control ${
                  formik.touched.subject2 && formik.errors.subject2 ? "error-box" : "null"
                } ${
                  formik.touched.subject2 && !formik.errors.subject2
                    ? "success-box"
                    : "null"
                } `}  name='subject2' value={formik.values.subject2} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value={""}></option>
                <option>Math</option>
                <option>Social Science</option>
              </select>{formik.errors.subject2 ? (
                <span style={{ color: "red" }}>{formik.errors.subject2}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Subject 3</label>
              <select className={`form-control ${
                  formik.touched.subject3 && formik.errors.subject3 ? "error-box" : "null"
                } ${
                  formik.touched.subject3 && !formik.errors.subject3
                    ? "success-box"
                    : "null"
                } `}  name='subject3' value={formik.values.subject3} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value={""}></option>
                <option>Science</option>
                <option>General Knowledge </option>
              </select>{formik.errors.subject3 ? (
                <span style={{ color: "red" }}>{formik.errors.subject3}</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Gender</label> 
              <select className={`form-control ${
                  formik.touched.gender && formik.errors.gender ? "error-box" : "null"
                } ${
                  formik.touched.gender && !formik.errors.gender
                    ? "success-box"
                    : "null"
                } `}  name='gender' value={formik.values.gender} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                 <option value={""}></option>
                      <option>Male</option>
                <option>Female</option>
              </select>{formik.errors.gender ? (
                <span style={{ color: "red" }}>{formik.errors.gender}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Teacher Name</label>
              <select className={`form-control ${
                  formik.touched.teacher && formik.errors.teacher ? "error-box" : "null"
                } ${
                  formik.touched.teacher && !formik.errors.teacher
                    ? "success-box"
                    : "null"
                } `} name='teacher' value={formik.values.teacher} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value={""}></option>
                {
                                teachers.map((ts) => {
                                    return  <option value={ts.teacher_name}>{`${ts.teacher_name}`}</option>
                                    
                                })
                            }
              </select>{formik.errors.teacher ? (
                <span style={{ color: "red" }}>{formik.errors.teacher}</span>
              ) : null}
            </div>

          </div>
          <div className="col-lg-12">
                        <input type="submit" value="Submit" className="btn btn-primary text-center mt-4" disabled={!formik.isValid}></input>
                        <Link className="btn btn-primary text-center mt-4 ml-4" to={"/students/list"}>Back</Link>
                    </div>
        </div></form>
    </div>

        </>
    )
}
export default Edit;