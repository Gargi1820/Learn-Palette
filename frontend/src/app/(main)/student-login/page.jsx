"use client";
import { useFormik } from "formik";
// import toast from "react-hot-toast";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Studentlogin = () => {
  // const addUserSchema = Yup.object().shape({});

  
  const router = useRouter();
  const loginForm = useFormik({
    initialValues: {
      fname:"",
      lname:"",
      email: "",
      password: "",
    },


    onSubmit: async (values, action) => {
      // values.image = selFile;
      console.log(values);
      const res = await fetch("http://localhost:5000/student/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.status);
      action.resetForm();
      if (res.status === 200) {
        toast.success("studentlogin successfully");
        res.json().then((data) => {
          console.log(data);
         
          router.push("/classroom");
        });
      } else if (res.status === 401){
        toast.error("Something went wrong");
      }
      
    },
    // validationSchema: addUserSchema,
  });
     

  return (
    <div>
      <>
  {/* Header */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="description" content="My Express JS website" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* component */}
  <div className="h-screen bg-gradient-to-br from-pink-600 to-cyan-300 flex justify-center items-center w-full">
    <form method="POST" action="#">
      <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
        <div className="space-y-4">
          <h1 className="text-center text-2xl font-semibold text-gray-600">
            Login
          </h1>
          <hr />
          <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-full"
              type="email"
              name="email"
              defaultValue=""
              placeholder="Email"
              required=""
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-full"
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required=""
            />
          </div>
        </div>
        {/* Remember Me checkbox */}
        <div className="flex justify-center items-center mt-4">
          <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
            <input
              type="checkbox"
              id="rememberMeCheckbox"
              name="rememberMe"
              className="mr-2"
            />
            <span className="text-xs font-semibold">Remember me?</span>
          </p>
        </div>
        <button
          type="submit"
          value="login"
          id="login"
          className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
        >
          Login
        </button>
        <hr />
        <Link href="/resetpassword" className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
              Forget password?
            </Link> 
        <div className="flex justify-center items-center mt-4">
          <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
            <span className="ml-2">
              You don't have an account?
              <Link href="/student-signup" className="text-xs ml-2 text-blue-500 font-semibold">
                Register now →
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="pt-6 text-base font-semibold leading-7">
        <p className="font-sans text-black-500 text-md hover:text-red-800">
          <Link Link href="/" className="absolute">
            ← Home
          </Link>
        </p>
      </div>
    </form>
  </div>
</>

    </div>
  );
};


export default Studentlogin;
