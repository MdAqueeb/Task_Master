
import axio from 'axios';
// import { useNavigate } from 'react-router-dom';

let url = 'http://localhost:8080';

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
    // console.log("I an in APi")
    // console.log("api "+user);
    return axio.post(`${url}/user/addUser`,user)
        .then((res) => {
            // console.log(res+" -> res");
            // console.log(res.data+" -> res.data")
            return {success: true, data: res.data}
        })
        .catch((err) => {
            // console.log(err+" -> error");
            return {success: false, error: err}
        })
}

export const verifyEmail = (Email) => {
    return axio.post(`${url}/user/verifyEmail`,null,{params:{email:Email}})
        .then((res) => {
            // console.log(res.data+" data")
            // console.log(res.status+" status")
            return {success:true, data:res.data, status:res.status}
        })
        .catch((err) => {
            return {success:false, data:err, status:err.status}
        })
}

export const updatePassword = (passwordDetails) => {
    return axio.post(`${url}/user/update/password`,passwordDetails)
        .then((res) => {
            return {success:true, data:res.data, status:res.status}
        })
        .catch((err) => {
            return {success:false, data:err, status:err.status}
        })
}   

export const countSpecificStatus = (Email) => {
    // console.log(Email+" now it is going to call");
    return  axio.get(`${url}/Task/allTask/count`,{params : {email:Email}})

            .then((res) => {
                // console.log(res)
                return {success:true, data:res.data, status:res.status}
            })
            .catch((err) => {
                // console.log(err)
            return {success:false, data:err, status:err.status}
            })
}

export const countCompletedStatus = (Email) => {
    // console.log(Email+" now it is going to call");
    return  axio.get(`${url}/Task/completedTask/count`,{params : {email:Email}})

            .then((res) => {
                // console.log(res)
                return {success:true, data:res.data, status:res.status}
            })
            .catch((err) => {
                // console.log(err)
            return {success:false, data:err, status:err.status}
            })
}

export const countInProgressStatus = (Email) => {
    // console.log(Email+" now it is going to call");
    return  axio.get(`${url}/Task/inprogressCount/count`,{params : {email:Email}})

            .then((res) => {
                // console.log(res)
                return {success:true, data:res.data, status:res.status}
            })
            .catch((err) => {
                // console.log(err)
            return {success:false, data:err, status:err.status}
            })
}

export const countToDoStatus = (Email) => {
    // console.log(Email+" now it is going to call");
    return  axio.get(`${url}/Task/todo/count`,{params : {email:Email}})

            .then((res) => {
                // console.log(res)
                return {success:true, data:res.data, status:res.status}
            })
            .catch((err) => {
                // console.log(err)
            return {success:false, data:err, status:err.status}
            })
}

export const countOverDueStatus = (Email) => {
    // console.log(Email+" now it is going to call");
    return  axio.get(`${url}/Task/overDueCount/count`,{params : {email:Email}})

            .then((res) => {
                // console.log(res)
                return {success:true, data:res.data, status:res.status}
            })
            .catch((err) => {
                // console.log(err)
            return {success:false, data:err, status:err.status}
            })
}