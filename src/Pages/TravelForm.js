import React from 'react'
import { useState, useEffect } from 'react';
import '../styles/travelform.css'

function TravelForm() {

    const initialValues = { username: "", email: "", pickup: "", drop:"", date:"", time:"", peoples:"", Days:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };

      useEffect(() =>{
        if (Object.keys(formErrors).length === 0 && isSubmit){
          try{
            console.log(formValues)
            setSuccessMessage('Thanks for booking with Us..!Reach you shortly');
            setFormValues(initialValues);
            setTimeout(() => {
            setSuccessMessage('');
          }, 10000);
          } catch(err){
            console.log(err)
            setErrorMessage('You Must be a register user to travel with us..!! Please register');
            setFormValues(initialValues)
              setTimeout(() => {
              setErrorMessage('')
              }, 10000);
          }} else{
            console.log(formErrors)  
            setSuccessMessage('');
            setErrorMessage('');
          }
        }, [formErrors]);

        const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //i represents no casesensitive
        if (!values.username) {
          errors.username = "Username is required!";
        }else if(values.username < 3){
          errors.username = "Username should be minimum 3 characters"
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.pickup) {
            errors.pickup = "Pickup Location is required!";
          }
        if (!values.drop) {
            errors.drop = "Drop Location is required!";
          }
        if (!values.date) {
            errors.date = "PickUp Date is required!";
          }
        if (!values.time) {
            errors.time = "PickUp Time is required!";
          }
        if (!values.peoples) {
            errors.peoples = "This field is Mandatory!";
          }
        if (!values.days) {
            errors.days = "This field is Mandatory!";
          }
        return errors;
      };

  return (
        <section className='Travelform'>
        <div className="formContainer">
        <h1 className="form-title">MV Holidays</h1>
        <form action="#" onSubmit={handleSubmit}>
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="username">Username</label>
              <input type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      onChange={handleChange}/>
                <p className='error'>{formErrors.username}</p>
            </div>
            <div className="user-input-box">
              <label htmlFor="email">email</label>
              <input type="text"
                      id="email"
                      name="email"
                      placeholder="Enter email Id"
                      onChange={handleChange}/>
                <p className='error'>{formErrors.email}</p>
            </div>
            <div className="user-input-box">
              <label htmlFor="pickup">PickUp Location</label>
              <input type="text"
                      id="pickup"
                      name="pickup"
                      placeholder="Enter PickUp Location"
                      onChange={handleChange}/>
                <p className='error'>{formErrors.pickup}</p>      
            </div>
            <div className="user-input-box">
              <label htmlFor="drop">DropOff Location</label>
              <input type="text"
                      id="drop"
                      name="drop"
                      placeholder="Enter DropOff Location"
                      onChange={handleChange}/>
                <p className='error'>{formErrors.drop}</p>
            </div>
            <div className="user-input-box">
              <label htmlFor="PickUpDate">PickUp Date</label>
              <input type="date"
                      id="PickUpDate"
                      name="date"
                      placeholder="PickUp Date"
                      onChange={handleChange}/>
                <p className='error'>{formErrors.date}</p>
            </div>
            <div className="user-input-box">
              <label htmlFor="PickUpTime">PickUp Time</label>
              <input type="time"
                      id="PickUpTime"
                      name="time"
                      placeholder="PickUp Time"
                      onChange={handleChange}/>
                <p className='error'>{formErrors.time}</p>
            </div>
            <div className="user-input-box">
              <label htmlFor="peopleCount">Total Num Of Peoples</label>
              <input type="text"
                      id="peopleCount"
                      name="peoples"
                      placeholder="No Of Peoples"
                      onChange={handleChange}/>
                <p className='error'>{formErrors.peoples}</p>
            </div>
            <div className="user-input-box">
              <label htmlFor="daysCount">Num Of Days</label>
              <input type="text"
                      id="daysCount"
                      name="days"
                      placeholder="No Of Days"
                      onChange={handleChange}/>
                <p className='error'>{formErrors.days}</p>
            </div>
          </div>
          <div className="server">
            {errorMessage && <div className='error'>{errorMessage}</div>}
            {successMessage && <div className='success'>{successMessage}</div>}
          </div>
          <div className="form-submit-btn">
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
      </section>
  )
}

export default TravelForm