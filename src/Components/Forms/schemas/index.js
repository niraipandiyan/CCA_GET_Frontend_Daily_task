import * as Yup from "yup";

const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

export const signupSchema = Yup.object({
    name: Yup.string().min(3).required("Please enter your name."),
    email: Yup.string()
        .email("Please enter valid email.")
        .required("Please enter your email."),
    password: Yup.string()
        .matches(passwordRegex, "Please enter valid password.")
        .required("Please enter your password."),
    cpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do NOT match!")
        .required("Please enter confirm password."),
    gender: Yup.string().oneOf(["male", "female"], "Please select a valid gender."),
    age: Yup.number().positive("Please enter a positive number").integer("Please enter a valid integer").required("Please enter your age."),
    address: Yup.string().required("Please enter your address."),
    city: Yup.string().required("Please enter your city."),
    state: Yup.string().required("Please enter your state."),
    country: Yup.string().required("Please enter your country."),
    phone: Yup.string().matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Please enter a valid phone number").required("Please enter your phone number.")
});
