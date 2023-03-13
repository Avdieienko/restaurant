import React from 'react';
import {useField} from "formik";

const Name = ({label, ...props}) => {
    const [field, meta, helper] = useField(props);
    return (
        <>
        <div className='form_row'>
            <label>{label}</label>
            <input {...field} {...props}/>
        </div>
        {meta.touched && meta.error ? (<div className="error"><p>{meta.error}</p></div>) : null}
        </>
    );
};
export default Name;