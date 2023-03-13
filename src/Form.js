import React from 'react';
import {  Formik, Form,  } from "formik";
import Name from "./Name";
import NumPeople from "./NumPeople";
import DisabilityCheckbox from "./DisabilityCheckbox";
import Email from "./Email";
import { ValidationSchema } from "./ValidationSchema";
import DateForm from './Date';


const current = new Date()
var month = current.getMonth() + 1
if(month<10){
    month = "0" + month
}

const today = `${current.getFullYear()}-${month}-${current.getDate()}`


function DateValidation(date){
    console.log(date)
    const current = new Date();
    const cur_year = current.getFullYear();
    const cur_month = current.getMonth() +1;
    const cur_day = current.getDate();
    var input_year = parseInt(date.slice(0,4));
    var input_month = parseInt(date.slice(5,7));
    var input_day = parseInt(date.slice(8,10));

    //If current year higher then input or
        //return false
    //else current year == input year and current month higher then input month or
        //return false
    //
    if( (cur_year>input_year) ||  (cur_year === input_year && cur_month>input_month) || (cur_year === input_year && cur_month===input_month && cur_day>input_day)){
        return false;
    }
    return true;
}


const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

export const ReserveForm = () => (
    <div>
        <Formik
         initialValues={{name:'', email:'', numpeople : '',disability : false, date:today}}
         validationSchema={ValidationSchema}
         onSubmit={onSubmit}
         >
            {(props) => {
                return(
                <Form>
                    <Name
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                    />
                    <Email
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                    />
                    <NumPeople
                        label="Number of people"
                        name="numpeople"
                        placeholder="Please select number of people"
                    >
                        <option value="">Please select number of people</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </NumPeople>
                    <div className='form_row'>
                        <DateForm type="date" name="date" label="Choose Date"/>
                        <h1>{props.values.date}</h1>
                    </div>
                    {DateValidation(props.values.date) ? null:<p className='error'>You cannot choose past date</p>}
                    <DisabilityCheckbox name="disability" type="checkbox"/>
                    <button type="submit">Submit</button>
                </Form>
                );
            }}
        </Formik>
    </div>
);
