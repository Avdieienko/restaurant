import {useField} from "formik";

const Name = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
        <div className='form_row'>
            <label>{label}</label>
            <input {...field} {...props} className={meta.touched && meta.error ? "error_input":""}/>
        </div>
        {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </>
    );
};
export default Name;