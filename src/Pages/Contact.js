import { React, useState, useEffect } from 'react'
// import axios from 'axios';
import '../styles/Contact.css'

function Contact() {

  const initialValues = { username: "", email: "", password: "", cpassword:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try{  
      console.log(formValues);
      setSuccessMessage('Registration successful');
      setFormValues(initialValues)
      setTimeout(() => {
        setSuccessMessage("");
      }, 10000);
    } catch(error){
      console.log(err);
      setErrorMessage('Server Busy');
      setFormValues(initialValues)
      setTimeout(() => {
      setErrorMessage('')
      }, 10000);
    }} else{
      console.log(formErrors);
      setSuccessMessage('');
      setErrorMessage('');
      }
    },[formErrors]);
  
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    } else if(values.username.length < 3){
      errors.username = "Username should be minimum 3 characters"
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    if (!values.cpassword) {
      errors.cpassword = "Confirm Password is required";
    } else if( values.cpassword !== values.password)
      errors.cpassword = "Password is not matching";
    return errors;
  };

  return (
   <section className='contact'>
      <div className="motto">
            <h2>MAYIL VEERA HOLIDAYS </h2>
            <p id='motto'>Don’t Listen To What They Say, Go See.</p>
      </div> 
        <div className="register">
            <form id="registerForm" onSubmit={handleSubmit} method='POST'>
                <h1>Register</h1>
                <div className="inputGroup">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={formValues.username} onChange={handleChange}/>
                    <p className='error'>{formErrors.username}</p>
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={formValues.email} onChange={handleChange}/>
                    <p className='error'>{formErrors.email}</p>
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formValues.password} onChange={handleChange}/>
                    <p className='error'>{formErrors.password}</p>
                </div>
                <div className="inputGroup">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" id="cpassword" name="cpassword" value={formValues.cpassword} onChange={handleChange}/>
                    <p className='error'>{formErrors.cpassword}</p>
                </div>
                <div className="response">
                    {errorMessage && <div className='error'>{errorMessage}</div>}
                    {successMessage && <div className='success'>{successMessage}</div>}
                </div>
                <center>
                <button type="submit" className='button'>Register</button>
                </center>
            </form>
        </div>
   </section>
  )
}

export default Contact