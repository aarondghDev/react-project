import React from 'react';

import { getAllUsers, login, getAllPagedUsers, getUserByID, createUser, updateUserByID, deleteUserByID } from '../../services/axiosCRUDService'; 
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AxiosCRUDExample = () => {

    const authUser = (values) => {
        login(values.email, values.password)
        .then((response) => {
            if (response.data.token) {
                alert(JSON.stringify(response.data.token));
                sessionStorage.setItem('token', response.data.token)
            }else{
                sessionStorage.removeItem('token');
                throw new Error('Login failure');
            }
        })
        .catch((error) => {
            alert(`Something went wrong: ${error}`);
            sessionStorage.removeItem('token');
        })
        .finally(() => console.log('Login succesfully') )
    }

    const initialCredentials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email("Invalid email format")
                .required("Email is required"),
            password: Yup.string()
            .required("Password is required")
        }
    )

    // CRUD Examples:
    const obtainAllUsers = () => {
        getAllUsers()
        .then((response) => {
            if(response.data.data && response.status === 200){
                alert(JSON.stringify(response.data.data))
            }else {
                throw new Error(`No users found`)
            }
        })
        .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
        .then((response) => {
            if(response.data.data && response.status === 200){
                alert(JSON.stringify(response.data.data))
            }else {
                throw new Error(`No users found in page: ${page}`)
            }
                
        })
        .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
        .then((response) => {
            if(response.data.data && response.status === 200){
                alert(JSON.stringify(response.data.data))
            }else{
                throw new Error('User not found')
            }
        })
        .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
        .then((response) => {
            if(response.data && response.status === 201){
                alert(JSON.stringify(response.data));
            }else{
                throw new Error('User not created')
            }
        })
        .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const updateUser = (id, name, job) => {
        updateUserByID(id, name, job)
        .then((response) => {
            if(response.data && response.status === 200){
                alert(JSON.stringify(response.data))
            }else{
                throw new Error('User not found and not updated')
            }
        })
        .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const deleteUser = (id) => {
        deleteUserByID(id)
        .then((response) => {
            if(response.status === 204){
                alert(`User with id: ${id} succesfully deleted`)
            }else{
                throw new Error('User not found and not data deleted ')
            }
        })
        .catch((error) => alert(`Something went wrong: ${error}`))
    }
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik 
            // *** Initial values that the form will take
            initialValues = { initialCredentials }
            validationSchema={ loginSchema } //*** Yup Validation Schema***
            // *** onSubmit Evente
            onSubmit={async (values) => {
                authUser(values)
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
            {/* Example buttons to test api responses */}
            <div>
                <button onClick={ obtainAllUsers }>
                    Get all users with axios
                </button>
                <button onClick={() => obtainAllPagedUsers(1)}>
                    Get all user (Page 1) with Axios
                </button>
                <button onClick={() => obtainUserByID(1)}>
                    Get user 1
                </button>
                <button onClick={() => createNewUser('morpheus', 'leader')}>
                    Create user
                </button>
                <button onClick={() => updateUser(1, 'morpheus', 'Developer')}>
                    Update user
                </button>
                <button onClick={() => deleteUser(1)}>
                    Delete user
                </button>
            </div>
        </div>
    );
}

export default AxiosCRUDExample;
