import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";



const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });
const Login=()=>{
    const navigate = useNavigate();

    function handleNavigate(values) {
      alert(values);
    
        navigate("/");
      
    }
    return (
        <Formik
        validationSchema={schema}
        initialValues={{
            email:"",
            password:""
        }}
        onSubmit={(values)=>{
            handleNavigate(JSON.stringify(values));
        }}
        >
            {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
        <div className="login-form-container">
            <div className="login-from">
                <form className="form-item" noValidate onSubmit={handleSubmit}>
                <h2>Login </h2>
                <input type="email" name="email" placeholder="Enter your email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <input type="password" name="password" placeholder="Enter password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <button type="submit" className="submit-button">Login</button>
                </form>

            </div>

        </div>
        )}
        </Formik>

      
    )
}




export default Login;