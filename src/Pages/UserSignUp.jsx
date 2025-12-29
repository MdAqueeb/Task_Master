import { useEffect, useState } from "react";
import img from "../assets/profile_avatar.webp";
import { useNavigate } from "react-router-dom";
import {addUser} from '../APIs/User';

const UserSignUp = () => {
  let [Profile, setProfile] = useState(`${img}`);
  let [Name, setName] = useState('');
  let [Email,setEmail] = useState('');
  let [Password, setPassword] = useState('');
  let [ConPass, setConPass] = useState('');
  let [passError, setPassError] = useState(false)
  let [failed, setFailed] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if(passError){
      setTimeout(() => {
      setPassError(false);
    },3000)}
    if(failed){
      setTimeout(() => {
      setFailed(false);
    },3000)}
    }
    
  ,[passError, failed])

  // link loning page 
  // call to add user api(post)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Password === ConPass){
      console.log("User register Successfully");
      let user = {
        username : Name,
        email : Email, 
        password : Password,
        profilePic : Profile
      }
      console.log(user);
      addUser(user)
        .then((res) => {
          (res.success) ? setTimeout(navigate('/'),2000) : setFailed(true);
        })
        .catch((err) => {console.log(err)})
    }
    else{
      setPassError(true)
    }
    // console.log("Yes singup page is here"+res);
  }

 
  const handleProfileChange = (event) => {
    let file = event.target.files[0];
    if (file) {
      setProfile(URL.createObjectURL(file));
    }
  };

  let diable = (Name === '' || Email === '' || Password === '' || ConPass === '') ? true : false;

  const handlLogin = () => {
   navigate('/')
  }
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-neutral-300 border">
      {
        (passError && 
          <div className="bg-orange-300 rounded-2xl mb-3 text-xl p-2">Password Not Matched to Confirm Password</div>
        )}
        {
        (failed && 
          <div className="bg-red-500 rounded-2xl mb-3 text-xl p-2">Failed! to Sign Up</div>
        )
      }
      <section className="bg-white p-10 rounded-4xl shadow-2xl shadow-blue-500">
        <div className="text-center ">
          <h1 className="text-blue-700">Registration Form</h1>
        </div>
        {/* 
                    user name, profile photo, password, 
                */}
        <form className="flex flex-col mt-2">
                <center><div >
                    <img src={`${Profile}`} className="border w-50 h-50 rounded-full" />
                    <input type="file" onChange={(e) => handleProfileChange(e)} />
                </div></center>
                <br />
                <div className="flex flex-col">
         
                    <label htmlFor="username" className="font-bold text-lg">Name</label>
                    <input
                        className="p-3 m-3 border rounded-3xl focus:border-blue-600 outline-none"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Full Name"
                        required
                        onChange={(e) => {setName(e.target.value)}}
                    />
                  
            
                    <label htmlFor="email" className="font-bold text-lg mr-3">Email</label>
                    <input
                        className="p-3 m-3 border rounded-3xl focus:border-blue-600 outline-none"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                        onChange={(e) => {setEmail(e.target.value)}}
                        required
                    />
            

            
                    <label htmlFor="password" className="font-bold text-lg mr-3 ">Password</label>
                    <input 
                    className="p-3 m-3 border rounded-3xl focus:border-blue-600 outline-none"
                    type="password" name="password" placeholder="Password" id="password"
                    onChange={(e) => {setPassword(e.target.value)}} required/>
            
                
            
                    <label htmlFor="confirm_password" className="font-bold text-lg mr-3  ">Confirm Password</label>
                    <input 
                    className="p-3 m-3 border rounded-3xl focus:border-blue-600 outline-none"
                    type="password" name="confirm_password" placeholder="confirm_password"  id="confirm_password"
                    onChange={(e) => {setConPass(e.target.value)}} required />

                <br />
                <div className="flex justify-around items-center flex-col gap-3">
                    <button id="subit" className="p-3 w-1/2 text-white text-center font-bold bg-blue-600 cursor-pointer rounded-lg hover:bg-blue-500 hover:text-black disabled:text-white disabled:bg-blue-600 disabled:cursor-no-drop" disabled={diable} onClick={(event) => {handleSubmit(event)}}>Registor</button>
                    <p onClick={handlLogin} className="text-blue-600 cursor-pointer">Already account?Login</p>
                </div>
                
                
          </div>
        </form>
      </section>
    </section>
  );
};

export default UserSignUp;
