import {useField} from "formik";

const DisabilityCheckbox = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return(
        <>
            <div className="form_row">
                <input {...field} {...props}/>
                    <span>People with disabilities</span>
            </div>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </>
    );
};

export default DisabilityCheckbox;
