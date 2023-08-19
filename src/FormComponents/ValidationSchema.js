import * as yup from "yup"

const current = new Date()
var month = current.getMonth() + 1
if(month<10){
    month = "0" + month
}

const today = `${current.getFullYear()}-${month}-${current.getDate()}`

function TimeforDay (message) {
    return this.test("TimeForDay", message, function(value){
        const {path, createError} = this;
        let ans = 12;
        if(document.getElementById('date_input')!==undefined){
            let d = document.getElementById('date_input').valueAsDate;
            if(d.getDate()===current.getDate() && d.getMonth === current.getMonth() && d.getFullYear() === d.getFullYear()){
                ans = current.getHours()+1;
            }
            else if(d<current){
                ans=25;
            }
            else{
                ans=12;
            }
        }
        else{
            ans=12;
        }
        if (value<ans){
            return createError({ path, message: "You cannot choose past time"  });
        }
        return true;
    });
};

yup.addMethod(yup.number, "TimeforDay", TimeforDay);


export const ValidationSchema =  yup.object().shape({
    name: yup.string().required("Required"),
    email : yup.string().email("Please enter a valid email").required("Required"),
    numpeople : yup.string().oneOf(["1","2","3","4","5","6"], "Invalid number").required("Required"),
    disability : yup.boolean().oneOf([true, false], "Invalid choice"),
    restaurant : yup.string().oneOf(["London", "Southampton", "Manchester"], "Invalid restaurant").required("Choose location"),
    date: yup.date().min(today, "You cannot choose past date").required("Required"),
    time : yup.number().TimeforDay("You cannot choose past time").required("Required"),
});

