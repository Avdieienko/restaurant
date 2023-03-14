import {useField} from "formik";

const Email = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <>
        <div className="form_row">
            <label>{label}</label>
            <input {...field} {...props} className={meta.touched && meta.error ? "error_input":""}>
            </input>
        </div>
            {meta.touched && meta.error ? (<p className="error">{meta.error}</p>) : null}
        </>
    )
}

export default Email;