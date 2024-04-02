import React from "react";
import { Formik, Form, Field } from "formik";
import { signupSchema } from "./schemas";
import classes from "./Forms.module.css";
import { Button, Dialog } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
  gender: "",
  age: "",
  address: "",
  city: "",
  state: "",
  country: "",
  phone: "",
};

export default function Forms() {
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    setSubmitted(true);
  };
  

  const closeModal = () => {
      setSubmitted(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={classes.signup_form}>
            <h1 style={{ textAlign: "center" }}>Student Details</h1>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <div className={classes.error_container}>
              {errors.name && touched.name && (
                <p className={classes.form_error}>{errors.name}</p>
              )}
            </div>

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <div className={classes.error_container}>
              {errors.email && touched.email && (
                <p className={classes.form_error}>{errors.email}</p>
              )}
            </div>

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <div className={classes.error_container}>
              {errors.password && touched.password && (
                <p className={classes.form_error}>{errors.password}</p>
              )}
            </div>

            <label htmlFor="cpassword">Confirm Password</label>
            <Field type="password" name="cpassword" />
            <div className={classes.error_container}>
              {errors.cpassword && touched.cpassword && (
                <p className={classes.form_error}>{errors.cpassword}</p>
              )}
            </div>

            <label htmlFor="gender">Gender</label>
            <Field type="text" name="gender" />
            <div className={classes.error_container}>
              {errors.gender && touched.gender && (
                <p className={classes.form_error}>{errors.gender}</p>
              )}
            </div>

            <label htmlFor="age">Age</label>
            <Field type="number" name="age" />
            <div className={classes.error_container}>
              {errors.age && touched.age && (
                <p className={classes.form_error}>{errors.age}</p>
              )}
            </div>

            <label htmlFor="address">Address</label>
            <Field type="text" name="address" />
            <div className={classes.error_container}>
              {errors.address && touched.address && (
                <p className={classes.form_error}>{errors.address}</p>
              )}
            </div>

            <label htmlFor="city">City</label>
            <Field type="text" name="city" />
            <div className={classes.error_container}>
              {errors.city && touched.city && (
                <p className={classes.form_error}>{errors.city}</p>
              )}
            </div>

            <label htmlFor="state">State</label>
            <Field type="text" name="state" />
            <div className={classes.error_container}>
              {errors.state && touched.state && (
                <p className={classes.form_error}>{errors.state}</p>
              )}
            </div>

            <label htmlFor="country">Country</label>
            <Field type="text" name="country" />
            <div className={classes.error_container}>
              {errors.country && touched.country && (
                <p className={classes.form_error}>{errors.country}</p>
              )}
            </div>

            <label htmlFor="phone">Phone</label>
            <Field type="tel" name="phone" />
            <div className={classes.error_container}>
              {errors.phone && touched.phone && (
                <p className={classes.form_error}>{errors.phone}</p>
              )}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <Dialog
            open={submitted}
            onClose={closeModal}
            PaperProps={{
              style: {
                borderRadius: 10,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                
              },
            }}
          >
            <DialogContent>
              <DialogContentText style={{fontFamily: "monospace", color:"black"}}id="alert-dialog-description">
                Student added Successfully!!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={closeModal}
                autoFocus
                style={{
                  backgroundColor: "#789c91", // Button background color
                  color: "#fff", // Button text color
                  borderRadius: 5, // Button border radius
                }}
              >
                OKAY
              </Button>
            </DialogActions>
          </Dialog>
    </>
  );
}
