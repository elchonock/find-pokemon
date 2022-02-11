
import { Formik } from 'formik'
// import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import * as yup from 'yup';
import s from "./Form.module.scss";

const Form = () => {
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError("Should be a string").required("This field is required"),
        email: yup.string().email().typeError("Should be a string").required("This field is required"),
        confirmEmail: yup.string().email().oneOf([yup.ref("email")], "Email doesn't match").typeError("Should be a string").required("this field is required"),
        password: yup.string().typeError("Should be a string").required("This field is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Password doesn't match").typeError("Should be a string").required("this field is required"),
    });

    return (
        <div>
            <Formik 
                initialValues={{
                    name: "",
                    email: "",
                    confirmEmail: "",
                    password: "",
                    confirmPassword: ""
                }}
                validateOnBlur
                validationSchema={validationsSchema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                {
                    ({ values, errors, handleChange, handleBlur, touched, dirty, isValid, handleSubmit }) => (
                        // : DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
                        <div className={s.form}>
                        <div className={s.div}>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id='name'
                            name='name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className={s.input}

                        /> 
                        {touched.name && errors.name && <div className={s.error}>{errors.name}</div>}
                        </div>

                        <div className={s.div}>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id='email'
                            name='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className={s.input}

                        /> 
                        {touched.email && errors.email && <div className={s.error}>{errors.email}</div>}
                        </div>

                        <div className={s.div}>
                        <label htmlFor="confirmEmail">Confirm Email</label>
                        <input 
                            type="email" 
                            id='confirmEmail'
                            name='confirmEmail'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmEmail}
                            className={s.input}

                        /> 
                        {touched.confirmEmail && errors.confirmEmail && <div className={s.error}>{errors.confirmEmail}</div>}
                        </div>

                        
                        <div className={s.div}>
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password" 
                            id='password'
                            name='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className={s.input}
                            /> 

                            {touched.password && errors.password && <div className={s.error}>{errors.password}</div>}
                        </div>

                        <div className={s.div}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            id='confirmPassword'
                            name='confirmPassword'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            className={s.input}

                        /> 
                        {touched.confirmPassword && errors.confirmPassword && <div className={s.error}>{errors.confirmPassword}</div>}
                        </div>
                       
                        <button
                        className={s.btn} 
                        disabled={!isValid && !dirty}
                        type={'submit'}
                        // onClick={handleSubmit}
                        >

                        Submit</button>
                        </div>
                    )

                }

            </Formik>
        </div>
    )

}

export default Form;