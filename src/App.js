import { useFormik } from "formik";
import React from "react";
// TODO: import useFormik from formik library

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    onSubmit: (values) => {
      alert("Inicio de sesión exitoso")
    },
    validate: (values) => {
      let errors = {};
      if (!values.emailField) { errors.emailField = 'Campo requierido'}
      if (!values.pswField) { errors.pswField = 'Campo requierido'}
      return errors
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input name="emailField" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField? <div id="emailError" style={{color:'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password:</div>
        <input name="pswField" id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField? <div id="pswError" style={{color:'red'}}>{formik.errors.pswField}</div>: null}
        <br/>
        <br/>
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
