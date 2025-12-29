import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../APIs/Authentications";
const UserLogin = () => {

    let [Email, setEmail] = useState('');
    let [Password, setPassword] = useState('');
    let [Error, setError] = useState('')
    // let [showerr, Setshowerr] = useState(false);
    const navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        let loginDetails = {
            email : Email, 
            password : Password
        }
        Login(loginDetails)
            .then((res) => {
                console.log(res+" in then")
                console.log(res.status+" this is status code");
                if(res.status == 404){
                    console.log("Yes sinup")
                    navigate('/sinup')
                }
                else if(res.status == 401){
                    console.log("Yes invalid")
                    setError("Invalid Password")
                }
                else if(res.status == 202 || res.status == 200){
                    console.log("Yes dashboard")
                    
                    window.localStorage.setItem("email", `${res.data.email}`)
                    console.log(window.localStorage.getItem("email"));
                    navigate('/dashboardHome/dashboard')
                }
                else{
                    console.log("Please provide condition to apply functionality")
                }
                
            })
            .catch((err) => {
                console.log(err+" in error")
                
            })
            
        // console.log("Yesin")
        // if(email === 'admin@gmail.com' && password === 'admin123'){
        //     navigate('/dashboardHome/dashboard');
        // }
        // else if(email !== 'admin@gmail.com' ){
        //     navigate('/sinup');
        // }
        // else{
        //     setError("Invalid email or password")
        // } 
    }

    useEffect(() => {
        if(Error){
            setTimeout(() => {setError('')},3000)
        }
    },[Error]);

    let handleForgotPassword = () => {
        navigate('/forgotPassword')
    }  

    let handleSignUp = () => {
        navigate('/sinup')
    }

    // call to authentication api 
    // link to signup page 
    // link to forgot page 

    return (
        <>
        
        <section className="h-screen flex flex-col justify-center items-center bg-neutral-300">

            {
            Error && (
                <div className="bg-red-400 p-4 mb-4 text-3xl rounded-2xl">
                    {Error}
                </div>
            )
            }
            <section className=" bg-white p-10 rounded-4xl shadow-2xl shadow-blue-600">
                <div>
                    <center><h3 className="text-blue-700 text-4xl">Welcome Back!</h3></center>
                </div>
                <form className="mt-10" >
                    <label htmlFor="Email" className="text-2xl font-bold">Email </label>
                    
                    <input className="text-xl w-full border focus:border-blue-600 focus:border-2 outline-none rounded-full p-2.5 mt-2" type="email" name="Email" id="Email" placeholder="Enter your Email" onChange={(e) => {setEmail(e.target.value)}} required/>
                    <br /><br />
                    <label htmlFor="Password" className="text-2xl font-bold">Password: </label>
                    <input className="text-xl w-full border focus:border-blue-600 focus:border-2 outline-none rounded-full p-2.5 mt-2" type="password" name="Password" id="Password" placeholder="Enter Password" onChange={(e) => {setPassword(e.target.value)}} required/>
                    <br /><br /><br />
                    <div className="flex justify-around">
                        <button onClick={handleSubmit}  className="bg-blue-600 text-white text-2xl p-3 rounded-2xl hover:bg-blue-500 hover:text-black cursor-pointer disabled:text-white disabled:bg-blue-600 disabled:cursor-no-drop" disabled={(Email === '' || Password === '') ? true : false}>SignIn</button>
                        <button className="bg-blue-600 text-white text-2xl p-3 rounded-2xl hover:bg-blue-500 hover:text-black cursor-pointer" onClick={handleSignUp}>SingUp</button>
                    </div>
                    <br />
                    <div className="text-center">
                        <p className="text-blue-500 cursor-pointer" onClick={handleForgotPassword}>Forgot Password</p>
                    </div>
                </form>
            </section>
        </section>
        </>
    )
}

export default UserLogin;