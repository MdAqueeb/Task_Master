
import axio from 'axios';
import { useNavigate } from 'react-router-dom';

let url = 'http://localhost:8080/users';

// export const getUser = ({user_details}) => {
//     axio.get(url)
//         .then(
//             (res) => 
//                 {
//                     console.log(res.data+" data founded");
//                     if(res.data){
                        
//                     }
//                 })
//         .catch((err) => {console.log(err)}) 
// }

export const addUser = (user) => {
    console.log("I an in APi")
    console.log("api "+user);
    return axio.post(url,{user})
        .then((res) => {return {success: true, data: res.data}})
        .catch((err) => {return {success: false, error: err}})
}