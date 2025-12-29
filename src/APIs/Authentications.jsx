import axios from "axios"

let url = 'http://localhost:8080';
export const Login = (loginDetails) => {
    return axios.post(`${url}/user/login`,loginDetails)
        .then((res) => {
            // console.log("Present in api's in then")
            // console.log(res.data);
            // console.log(res +" res ");
            return {success:true,data:res.data,status:res.status}
        })
        .catch((err) => {
            // console.log("Present in api's in error")
            // console.log(err);
            return {success:false,error:err,status:err.status}})
}