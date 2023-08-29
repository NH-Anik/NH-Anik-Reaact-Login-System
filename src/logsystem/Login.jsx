import Lottie from "lottie-react";
import login_one from "../assets/animation/login-one.json";
import { Button_v1 } from "../helper/Button";
import { useState } from "react";
// import FadeLoader from "react-spinners/FadeLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";


const Login = () => {
   const [loading, setLoading] = useState(false);
// password show hide work start
   const [passwordType, setPasswordType] = useState("password");
    const handelShowHide = () => {
        if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
// password show hide work end

   const [email, setEmail] = useState("");
   const [emailError, setEmailError] = useState("");
    const handelEmail = (e) => {
           setEmail(e.target.value);
           setEmailError("");
    }
   const [password, setPassword] = useState("");
   const [passwordError, setPasswordError] = useState("");
    const handelPassword = (e) => {
        setPassword(e.target.value);
        setPasswordError("");
    }

   const [checkbox, setCheckbox] = useState(false);
   const [checkboxError, setCheckboxError] = useState("");
    const handleCheckbox = (e) => {
        setCheckbox(e.target.checked);
        setCheckboxError("");
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();

        if(email==""){
            setEmailError("Email is required");
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmailError("Invalid email address");
        }else if(password==""){
            setPasswordError("Password is required");
        }else  if(password.length<8){
            setPasswordError("Password must be at least 8 characters");
        }else if(checkbox==false){
            setCheckboxError("Please accept the terms and conditions");
        }else {
            setLoading(true);
            setTimeout(() => {
                console.log("success");
                setLoading(false);
                toast.success('Login Success', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }, 2000);
        }
    }

    return (
        <div className="grid">
             <ToastContainer />
            <div className="flex flex-wrap items-center justify-around">
                <div className='w-2/4'>
                   <Lottie animationData={login_one} loop={true} />
                </div>
                <div className="in-form"> 
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className="text-center text-4xl text-one font-semibold">Login</h1>
                        <legend >Email </legend>
                        <input onChange={handelEmail} name="email" type="text" placeholder="Enter your email"/>
                        <h6>{emailError}</h6>
                       <div className="relative">
                          <legend>Password</legend>
                          <input onChange={handelPassword} name="password" type={passwordType}  placeholder="Enter your password"/>
                          <button type="button" onClick={handelShowHide} className="absolute top-11 right-2">
                            {
                                passwordType=="password" ? <FaEyeSlash/>  : <FaEye/>
                            }
                          </button>                          
                        </div>                       
                        <h6>{passwordError}</h6>
                        <div className="checkbox">
                            <input onChange={handleCheckbox} type="checkbox" value={true}/>
                            <span>Remember me</span>
                        </div>
                        <h6>{checkboxError}</h6>
                        <div className="flex justify-center py-10">
                           <Button_v1 type="submit">
                            {
                                loading ?
                                <div role="status"  className="flex items-center gap-2"> <span className="text-five">Sign In</span>
                                  <svg aria-hidden="true" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-three" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                  </svg>
                                  <span className="sr-only">Loading...</span>
                                </div>
                                : "Sign In"
                            }
                            </Button_v1>
                           <Link className="button" to={"/forgot"}>Forgot</Link>
                        </div>
                        <span className="register">Create New Account <Link to={"/registration"}>Registration here</Link></span>
                        <p>Create by NH-Anik </p>
                    </form> 
                </div>
            </div>
        </div>
    );
};

export default Login;