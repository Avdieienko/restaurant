import {useField} from "formik";



const DateForm = ({label, ...props}) => {
    const [field] = useField(props);
    return (
        <>
        <label>
            {label}
        </label>
        <input id="date_input" {...field} {...props}/>
        </>
    );
};
export default DateForm;