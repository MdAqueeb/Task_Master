import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [error, setError] = useState('')
    // let [showerr, Setshowerr] = useState(false);
    const navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("Yesin")
        if(email === 'admin@gmail.com' && password === 'admin123'){
            navigate('/dashboard');
        }
        else if(email !== 'admin@gmail.com' ){
            navigate('/sinup');
        }
        else{
            setError("Invalid email or password")
        } 
    }

    useEffect(() => {
        if(error){
            setTimeout(() => {setError('')},3000)
        }
    },[error]);

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
            error && (
                <div className="bg-red-400 p-4 mb-4 text-3xl rounded-2xl">
                    {error}
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
                        <button onClick={handleSubmit}  className="bg-blue-600 text-white text-2xl p-3 rounded-2xl hover:bg-blue-500 hover:text-black cursor-pointer disabled:text-white disabled:bg-blue-600 disabled:cursor-no-drop" disabled={(email === '' || password === '') ? true : false}>SignIn</button>
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