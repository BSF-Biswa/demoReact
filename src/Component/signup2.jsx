import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik, Field } from 'formik';
import {signUpValidator} from './schema/validator';


// ...import statements

export const SignUp = () => {
  const InitialValue = {
    userName: "",
    userEmail: "",
    userNumber: "",
    userPassword: ""
  };
const  myValues= (value)=> console.log(value);
  return (
    <>
      <div className='d-flex justify-content-center Sign-page'>
        <div>
          <Formik
            initialValues={InitialValue}
            initialTouched={{
              field: true,
            }}
            validationSchema={signUpValidator}
            enableReinitialize
            onSubmit={(val)=>myValues(val)}
          >
            {({ errors, handleBlur, handleChange, touched, values }) => {
              console.log(errors);
              return (
                <Form>
                    <h3 className='text-center mt-3'>SIGNUP HERE</h3>
                <label for="formGroupExampleField" className="form-label mt-2">Your Name</label>
                <Field onChange={handleChange} onBlur={handleBlur} value={values.userName} type="text" className="form-control" name="userName" placeholder="name" aria-label="First name"></Field>
                {errors?.userName && touched?.userName? <p className='text-danger'>{errors.userName}</p> : null}
                <br />
                <label for="formGroupExampleField" className="form-label">Your Email</label>
                <Field onChange={handleChange} onBlur={handleBlur} value={values.userEmail} type="text" className="form-control" name="userEmail" placeholder="Email" aria-label="First name"></Field>
                {errors?.userEmail && touched?.userEmail? <p className='text-danger'>{errors.userEmail}</p> : null}
                <br />
                <label for="formGroupExampleField" className="form-label">Mob No</label>
                <Field onChange={handleChange} onBlur={handleBlur} value={values.userNumber} type="number" className="form-control" name="userNumber" placeholder="number" aria-label="First name"></Field>
                {errors?.userNumber && touched?.userNumber? <p className='text-danger'>{errors.userNumber}</p> : null}
                <br />
                <label for="formGroupExampleField" className="form-label">Password</label>
                <Field onChange={handleChange} onBlur={handleBlur} value={values.userPassword} type="text" className="form-control" name="userPassword" placeholder="Password" aria-label="First name"></Field>
                {errors?.userPassword && touched?.userPassword? <p className='text-danger'>{errors.userPassword}</p> : null}
                  <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary mt-3 mb-3">Sign Up</button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignUp;