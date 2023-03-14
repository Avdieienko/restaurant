import * as yup from "yup"

export const ValidationSchema =  yup.object().shape({
    name: yup.string().required("Required"),
    email : yup.string().email("Please enter a valid email").required("Required"),
    numpeople : yup.string().oneOf(["1","2","3","4","5","6"], "Invalid number").required("Required"),
    disability : yup.boolean().oneOf([true, false], "Invalid choice"),
    time : yup.string().required("Please choose time"),
    restaurant : yup.string().oneOf(["London", "Southampton", "Manchester"], "Invalid restaurant").required("Choose location")
});