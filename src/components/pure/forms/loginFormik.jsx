import React from 'react';
import { Navigate, useNavigate }  from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Profilepage from '../../../pages/profile/ProfilePage';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
        .required("Password is required")
    }
)

const LoginFormik = () => {

    const navigate = useNavigate()

    let to = () => {
        navigate('/dashboard')
    }

    

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik 
            // *** Initial values that the form will take
            initialValues = { initialCredentials }
            validationSchema={ loginSchema } //*** Yup Validation Schema***
            // *** onSubmit Evente
            onSubmit={async (values, { setSubmitting }) => {
                await new Promise((r) => setTimeout(r, 1000)); // values: son los valores que va a recibir por defecto del formulario, el formulario se tratara como un objeto con valores 
                alert(JSON.stringify(values, null, 2)); // Aqui estamos simulando una peticion http (onSubmit) atravez de un proceso asyncrono que espera la generacion de una nueva promesa con un timeout de medio segundo y al final se muestran como una alerta los formatos de JSON convertidos a string que serian email y el password
                // We save the data in the localstorage  
                await sessionStorage.setItem('credentials', JSON.stringify(values)) 
                setSubmitting(false); // Importante: asegúrate de establecer setSubmitting en false para indicar que la operación de envío ha terminado
                    navigate('/dashboard'); // Redirige al usuario a la página del perfil después del envío exitoso
                    // navigate('/profile'); // Redirige al usuario a la página del perfil después del envío exitoso

            }}
            >
                {/* We obtain props from Formik */}

                {({ 
                touched, 
                isSubmitting, 
                values, 
                errors, 
                handleChange, 
                handleBlur}) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                            <Field id="email" 
                            type="email"
                            name="email" 
                            placeholder="example@gmail.com"
                        />
                            {/* Email errors */}
                            {
                                errors.email && touched.email &&
                                (
                                    <div>
                                    <ErrorMessage name='email' component='div'></ErrorMessage>
                                    </div>
                                )
                            }

                        <label htmlFor="password">Password</label>
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


                        <button type="submit">Login</button>
                        { isSubmitting ? <p>Login your credentials...</p> : null}
                    </Form>
                )}

            </Formik>
        </div>
    );

} 

export default LoginFormik;
