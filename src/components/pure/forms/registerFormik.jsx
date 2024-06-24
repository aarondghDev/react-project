import React from 'react';
import { User } from '../../../models/users.class';
import { Formik , Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';

// Models

const Registerformik = () => {

    let user =new User();

    const initialValues = {
        username:  '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
        username: Yup.string()
        .min(6, "Username too short")
        .max(12, "Username too long")
        .required("Username is requiered"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User/Admin')
        .required('Role is required'),
        password: Yup.string()
            .min(8, 'Password too short')
            .required("Password is required"),
        confirm: Yup.string()
        .when("password", {
            is: value => (value && value.lenght > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                '¡Password must match!'
            )
        }).required('You must confirm the password')

        }

    )



    const subtmit = () => {
        alert('Register user');
    }
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = {initialValues}
                //*** Yup Validation Schema***
                validationSchema={ registerSchema }

                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000)); // values: son los valores que va a recibir por defecto del formulario, el formulario se tratara como un objeto con valores 
                alert(JSON.stringify(values, null, 2));
                // We save the data in the localstorage  
                localStorage.setItem('credentials', values)
                return(JSON.stringify(values, null, 2)); // Aqui estamos simulando una peticion http (onSubmit) atravez de un proceso asyncrono que espera la generacion de una nueva promesa con un timeout de medio segundo y al final se muestran como una alerta los formatos de JSON convertidos a string que serian email y el password
                // We save the data in the localstorage  

            }}
            >
            {({ 
                touched, 
                isSubmitting, 
                values, 
                errors, 
                handleChange, 
                handleBlur}) => (
                    <Form>
                    <label htmlFor="username">Username</label>
                        <Field id="username" 
                        type="text"
                        name="username" 
                        placeholder="Your username"
                            />
                    {/* username errors */}
                    {errors.username && touched.username &&
                        (
                            <div>
                            <ErrorMessage name='username' component='div'></ErrorMessage>
                            </div>
                        )
                    }

                    <label htmlFor="email">Email</label>
                        <Field id="email" 
                        type="email"
                        name="email" 
                        placeholder="example@gmail.com"
                            />
                    {/* Email errors */}
                    {errors.email && touched.email &&
                        (
                            <div>
                            <ErrorMessage name='email' component='div'></ErrorMessage>
                            </div>
                        )
                    }

                    <label htmlFor="passowrd">Password</label>
                            <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                            />
                            {/* Password errors */}

                            {
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage name='password' component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="confirm">Confirm password</label>
                            <Field
                            id="confirm"
                            name="confirm"
                            placeholder=" Confirm password"
                            type="password"
                            />
                            {/* Confirm password errors */}

                            {
                                errors.confirm && touched.confirm &&
                                (
                                    <ErrorMessage name='confirm' component='div'></ErrorMessage>
                                )
                            }

                            <button type="submit">Register accont</button>
                        { isSubmitting ? <p>Sending your credentials...</p> : null}

                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default Registerformik;
