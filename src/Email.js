import {useField} from "formik";

const Email = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <>
        <div className="form_row">
            <label>{label}</label>
            <input {...field} {...props}>
            </input>
        </div>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </>
    )
}

export default Email;