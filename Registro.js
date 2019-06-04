import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = { email: '', password: '' };

function ValidateForm(values) {
  let errors = {};
  if (!values.email)
    errors.email = "Es obligatorio";
  return errors;
}

const Registro = () => 
(
  <div className="row">
  <p>sjsjsj</p>
	<Formik 
		initialValues = {{email:'', password: ''}}
		validate = { values => { return ValidateForm(values);}}
      onSubmit={(values,) => {
        alert("llega")
      }}
	>
			{ ( {isSubmitting}) => (
        <Form>
          <Field  name="email" />
          <ErrorMessage name="email" component="div"/>
          <Field  name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
)      				
			}

      
	</Formik>
  </div>
)

export default Registro;