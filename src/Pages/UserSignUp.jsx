import { useState } from "react";
import img from "../assets/profile_avatar.webp";
import { useNavigate } from "react-router-dom";
const UserSignUp = () => {
  let [profile, setProfile] = useState(`${img}`);
  let [name, setName] = useState('');
  let [email,setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [conPass, setConPass] = useState('');
  let navigate = useNavigate();

  // link loning page 
  // call to add user api(post)

  const handleSubmit = () => {
    
  }

 
  const handleProfileChange = (event) => {
    let file = event.target.files[0];
    if (file) {
      setProfile(URL.createObjectURL(file));
    }
  };

  let diable = (name === '' && email === '' && password === '' && conPass === '') ? true : false;

  const handlLogin = () => {
   navigate('/login')
  }
  return (
    <section className="h-screen flex justify-center items-center bg-neutral-300 border">
      <section className="bg-white p-10 rounded-4xl shadow-2xl shadow-blue-500">
        <div className="text-center ">
          <h1 className="text-blue-700">Registration Form</h1>
        </div>
        {/* 
                    user name, profile photo, password, 
                */}
        <form className="flex flex-col mt-2">
                <center><div >
                    <img src={`${profile}`} className="border w-50 h-50 rounded-full" />
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
                    />
                  
            
                    <label htmlFor="email" className="font-bold text-lg mr-3">Email</label>
                    <input
                        className="p-3 m-3 border rounded-3xl focus:border-blue-600 outline-none"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                        required
                    />
            

            
                    <label htmlFor="password" className="font-bold text-lg mr-3 ">Password</label>
                    <input 
                    className="p-3 m-3 border rounded-3xl focus:border-blue-600 outline-none"
                    type="password" name="password" placeholder="Password" id="password" required/>
            
                
            
                    <label htmlFor="confirm_password" className="font-bold text-lg mr-3  ">Confirm Password</label>
                    <input 
                    className="p-3 m-3 border rounded-3xl focus:border-blue-600 outline-none"
                    type="password" name="confirm_password" placeholder="confirm_password"  id="confirm_password" required />

                <br />
                <div className="flex justify-around items-center flex-col gap-3">
                    <button id="subit" className="p-3 w-1/2 text-white text-center font-bold bg-blue-600 cursor-pointer rounded-lg hover:bg-blue-500 hover:text-black disabled:text-white disabled:bg-blue-600 disabled:cursor-no-drop" disabled={diable}>Registor</button>
                    <p onClick={handlLogin} className="text-blue-600 cursor-pointer">Already account?Login</p>
                </div>
                
                
          </div>
        </form>
      </section>
    </section>
  );
};

export default UserSignUp;
