import {useField} from "formik";

export const RestaurantForm = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <>
        <div className="form_row">
            <label>{label}</label>
            <select {...field} {...props} className={meta.touched && meta.error ? "error_input":""}>
            </select>
        </div>
            {meta.touched && meta.error ? (<p className="error">{meta.error}</p>) : null}
        </>
    )
}

export default RestaurantForm;