import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Tedit() {
    let navigate = useNavigate();
  let params = useParams();
    useEffect(() => {
        fetchData();
      }, []);
      let  fetchData = async () => {
        try {
            
          const users =  await axios.get(`https://63873d31e399d2e473f90617.mockapi.io/teacher/${params.id}`)
          formik.setValues(users.data);
          
        } catch (error) {
          alert ("error")  
          console.log(error)
        }}

        const formik = useFormik({
            initialValues: {
                teacher_name: "",
                position: "",
                subject1: "",
                subject2: "",
                phone:"",
                salary: "",
                joining_date: ""
            },
            validate: (values) => {
                let error = {};
                if (!values.teacher_name) {
                  error.teacher_name = "Please enter the Teacher Name";
                }
                if (values.teacher_name && (values.teacher_name.length <= 2 || values.teacher_name.length > 15)) {
                  error.teacher_name = "teachername must be between 3 to 15 Characters";
                }
          
                if (!values.position) {
                  error.position = "Please select position";
                }
                if (!values.subject1) {
                  error.subject1 = "Please select subject1";
                }
                if (!values.subject2) {
                  error.subject2 = "Please select subject2";
                }
                if (!values.phone) {
                  error.phone = "Please enter PhoneNumber";
                }
                if (values.phone && values.phone.toString().length !== 10) {
                  error.phone = "Invalid PhoneNumber";
                }
                if (!values.salary) {
                  error.salary = "Please enter salary";
                }
                if (!values.joining_date) {
                  error.joining_date = "Please select joining_date";
                }
                
          
                return error;
              },
            onSubmit: async (values) => {
              try {
                 await axios.put(
                  `https://63873d31e399d2e473f90617.mockapi.io/teacher/${params.id}`,
                  values
                );
                alert("Updated Successfully");
                navigate("/teachers/list");
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
              <label>Teacher Name</label>
              <input type={"text"} className={`form-control ${
                  formik.touched.teacher_name && formik.errors.teacher_name ? "error-box" : "null"
                } ${
                  formik.touched.teacher_name && !formik.errors.teacher_name
                    ? "success-box"
                    : "null"
                } `} name='teacher_name' onChange={formik.handleChange} value={formik.values.teacher_name} onBlur={formik.handleBlur}></input>
                  {formik.errors.teacher_name ? (
                <span style={{ color: "red" }}>{formik.errors.teacher_name}</span>
              ) : null}
            </div> </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Position</label>
              <select className={`form-control ${
                  formik.touched.position && formik.errors.position ? "error-box" : "null"
                } ${
                  formik.touched.position && !formik.errors.position
                    ? "success-box"
                    : "null"
                } `}  name='position' value={formik.values.position} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value={""}></option>
                <option value="Temporary staff">Temporary staff</option>
                    <option value="Permanent staff">Permanent staff</option>
                    <option value="HOD">HOD</option>
              </select>{formik.errors.position ? (
                <span style={{ color: "red" }}>{formik.errors.position}</span>
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
              <select className={`form-control ${
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
              <label> Phone No</label>
              <input type={"number"} className={`form-control ${
                  formik.touched.phone && formik.errors.phone ? "error-box" : "null"
                } ${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : "null"
                } `} name='phone' onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur}></input>
                {formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Salary</label> 
              <input type={"number"} className={`form-control ${
                  formik.touched.salary && formik.errors.salary ? "error-box" : "null"
                } ${
                  formik.touched.salary && !formik.errors.salary
                    ? "success-box"
                    : "null"
                } `}name='salary' onChange={formik.handleChange} value={formik.values.salary} onBlur={formik.handleBlur}></input>
                 {formik.errors.salary ? (
                <span style={{ color: "red" }}>{formik.errors.salary}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>joining date</label>
              <input type={"date"} className={`form-control ${
                  formik.touched.joining_date && formik.errors.joining_date ? "error-box" : "null"
                } ${
                  formik.touched.joining_date && !formik.errors.joining_date
                    ? "success-box"
                    : "null"
                } `} name='joining_date' onChange={formik.handleChange} value={formik.values.joining_date} onBlur={formik.handleBlur}></input>
                {formik.errors.joining_date ? (
                <span style={{ color: "red" }}>{formik.errors.joining_date}</span>
              ) : null}
            </div>

          </div>
          <div className="col-lg-12">
                        <input type="submit" value="Submit" className="btn btn-primary text-center mt-4" disabled={!formik.isValid}></input>
                        <Link className="btn btn-primary text-center mt-4 ml-4" to={"/teachers/list"}>Back</Link>
                    </div>
        </div></form>
    </div>

        </>
    )
}
export default Tedit;