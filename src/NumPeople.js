import {useField} from "formik";

export const NumPeople = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <>
        <div className="form_row">
            <label>{label}</label>
            <select {...field} {...props}>
            </select>
        </div>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </>
    )
}

export default NumPeople;