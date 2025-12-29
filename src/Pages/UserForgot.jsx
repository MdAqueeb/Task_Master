import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyEmail, updatePassword } from "../APIs/User";

const UserForgot = () => {
    let [verify, setVerify] = useState(false);
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('')
    let [emailError, setEmailErr] = useState('');
    let [passError, setPassError] = useState('');
    let navigate = useNavigate(); 


    let handleChangeEmail = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }
    // console.log(email);

    useEffect(() => {
        setTimeout(() => {
            setEmailErr('')
            setPassError('')
        }, 3000)
    },[emailError, passError])

    let handleVerifyEmail = (e) => {
        e.preventDefault()
        verifyEmail(email)
            .then((res) => {
                // console.log(res+" inside forgot component")
                // console.log(res.data.status+" status")
                if(res.status == 404){
                    setEmailErr("Email In Valid");
                }
                else if(res.status == 200){
                    setVerify(true);
                    console.log("verified");
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }

    let handleUpdatePassword = (e) => {
        e.preventDefault()
        if(password === confirmPassword){
            let passDetails = {
                email : email,
                password : password, 
                confirmPassword : confirmPassword
            }
            updatePassword(passDetails)
                .then((res) => {
                    console.log(res+" "+res.status)
                    if(res.status == 404){
                        setEmailErr("User In Valid");
                    }
                    else if(res.status == 409){
                        setPassError("Password Not Match");
                    }
                    else if(res.status == 200){
                        navigate('/')
                    }

                })
                .catch((err) => {
                    console.log(err);
                })
                
        
        }
        else{
            e.preventDefault()
            setPassError("Password Not Match")
        }
        
    }

    let handleLogin = () => {
        navigate('/')
    }
    return (
        <section className="bg-neutral-300 h-screen flex justify-center items-center">
            <section className="bg-white p-12 rounded-4xl shadow-2xl shadow-blue-600">
                {
                    (emailError && (
                        <div className="p-3 bg-red-500  text-2xl">
                            {emailError}
                        </div>
                    ))
                }
                {
                    (passError && (
                        <div className="p-3 bg-red-500  text-2xl">
                            {passError}
                        </div>
                    ))
                }
                <div className="text-center">
                    <h1 className="text-blue-700">Forgot Password</h1>
                </div>
                <div className="pt-8">
                    <form className="flex flex-col gap-4">
                        {/* email varification, password, confirm password */}
                        <div className="flex justify-center gap-10">
                            <label htmlFor="email" className="font-bold text-2xl flex items-center">Email</label>
                            <input className=" w-100 rounded-xl outline-none border focus:border-blue-600" type="email" name="email" id="email" onChange={handleChangeEmail} required
                            placeholder="Enter Email"/>
                            <button className=" p-2.5 font-bold text-xl rounded-lg bg-green-400 cursor-pointer disabled:cursor-no-drop disabled:bg-green-400 disabled:text-black hover:text-white hover:bg-green-600" disabled={(email === '') ? true:false} onClick={handleVerifyEmail} >Verify</button>
                        </div>
                        <div className=" flex flex-col gap-5">
                            <div className=" flex justify-between">
                                <label htmlFor="password" className="font-bold text-2xl flex items-center">Password</label>
                                <input className="border p-3 w-100 rounded-xl outline-none focus:border-blue-600 disabled:bg-gray-300 disabled:cursor-no-drop" type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}} disabled={(!verify) ? true : false}
                                placeholder="Enter new password"
                                required/>
                            </div>
                            <div className=" flex justify-between gap-3">
                                <label htmlFor="confirm" className="font-bold text-2xl flex items-center">Confirm Password</label>
                                <input className="border p-3 w-100 rounded-xl outline-none focus:border-blue-600 disabled:bg-gray-300 disabled:cursor-no-drop" type="password" name="confirm" id="confirm" onChange={(e) => {setConfirmPassword(e.target.value)}} disabled={(!verify) ? true : false}
                                placeholder="Enter again same password"
                                required/>   
                            </div>
                            
                        </div>
                        <button className="p-3 border m-2 rounded-4xl text-lg font-bold bg-blue-500 text-white cursor-pointer hover:text-black hover:bg-blue-450 disabled:text-white disabled:bg-blue-500 disabled:cursor-no-drop" disabled={(password === '' && email === '') ? true : false} onClick={handleUpdatePassword}>Update Password</button>
                        <p className=" text-center text-blue-600 cursor-pointer" onClick={handleLogin}>Move to Login</p>
                        {/* <input  */}
                    </form>
                </div>
            </section>
        </section>
    )
}

export default UserForgot;