import React from 'react';
import {useField} from "formik";



const DateForm = ({label, ...props}) => {
    const [field, meta, helper] = useField(props);
    return (
        <>
        <label>
            {label}
        </label>
        <input {...field} {...props}/>
        </>
    );
};
export default DateForm;