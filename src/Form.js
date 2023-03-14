import React from 'react';
import {  Formik, Form,  } from "formik";
import Name from "./FormComponents/Name";
import NumPeople from "./FormComponents/NumPeople";
import DisabilityCheckbox from "./FormComponents/DisabilityCheckbox";
import Email from "./FormComponents/Email";
import { ValidationSchema } from "./FormComponents/ValidationSchema";
import DateForm from './FormComponents/Date';
import TimeField from './FormComponents/Time';
import RestaurantForm from './FormComponents/RestaurantForm';

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const current = new Date()
var month = current.getMonth() + 1
if(month<10){
    month = "0" + month
}

const today = `${current.getFullYear()}-${month}-${current.getDate()}`


function DateValidation(){
    if(document.getElementById('date_input')!=undefined){
        const d = document.getElementById('date_input').valueAsDate
        const n = d.getUTCDay()
        if(d.getDate()===current.getDate()){
            return true;
        }
        return(current<d)
    }
    return true
}

const TimeforWeak = ()=>{
    if(document.getElementById('date_input')!=undefined){
        const d = document.getElementById('date_input').valueAsDate
        const n = d.getUTCDay()
        if(n>0 && n<5){
            return(
                <>
                    <option value="23:00">23:00</option>
                </>
            )
        }
        else if(n>4){
            return(
                <>
                    <option value="23:00">23:00</option>
                    <option value="00:00">00:00</option>
                </>
            )
        }
    }
}


const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    alert(`Name: ${values.name} \nEmail: ${values.email} \nYou have successfully booked a table for ${values.numpeople} at ${values.date} ${values.time} in ${values.restaurant} `)
  };

export const ReserveForm = () => (
    <div>
        <Formik
         initialValues={{name:'', email:'', numpeople : '',disability : false, date:today, time:"", restaurant:""}}
         validationSchema={ValidationSchema}
         onSubmit={onSubmit}
         >
            {({isSubmitting}) => {
                return(
                <Form>
                    <Name
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="Enter your name*"
                    />
                    <Email
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="Enter your email*"
                    />
                    <NumPeople
                        label="Number of people"
                        name="numpeople"
                        placeholder="Select number of people"
                    >
                        <option value="">Select number of people</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </NumPeople>
                    <RestaurantForm name="restaurant" label="Location" placeholder="Select location">
                        <option value="">Select location</option>
                        <option value="London">London</option>
                        <option value="Southampton">Southampton</option>
                        <option value="Manchester">Manchester</option>
                    </RestaurantForm>
                    <div className='form_row'>
                        <DateForm type="date" name="date" label="Date" placeholder="dd:mm:yy"/>
                    </div>
                    {DateValidation() ? null:<p className='error'>You cannot choose past date</p>}
                    <TimeField name="time" label="Time" placeholder="Select the time">
                        <option value="">Choose time</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                        <TimeforWeak/>
                    </TimeField>
                    <DisabilityCheckbox name="disability" type="checkbox"/>
                    <button disabled={isSubmitting} type="submit">Reserve</button>
                </Form>
                );
            }}
        </Formik>
    </div>
);
