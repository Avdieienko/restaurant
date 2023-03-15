import {useField} from "formik";



const DateForm = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
        <div className='form_row'>
            <label>
                {label}
            </label>
            <input id="date_input" {...field} {...props}/>
        </div>
        {meta.touched && meta.error ? (<p className="error">{meta.error}</p>) : null}
        </>
    );
};
export default DateForm;