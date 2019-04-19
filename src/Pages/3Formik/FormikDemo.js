// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./FormikDemo.css";

const FormikDemo = () => (
  <div className="flexParent">
    <div className="flexChild">
      <h1>Formik Demo</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            Email
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            Password<br/> <br/>
            <button
              class="btn waves-effect waves-light blue darken-2"
              type="submit"
              name="action"
              disabled={isSubmitting}
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default FormikDemo;
