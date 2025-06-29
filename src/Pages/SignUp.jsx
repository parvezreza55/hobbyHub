import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { Bounce, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const { createUser, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [showpass, setShowPass] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, name, photoURL, password, ...restForm } = Object.fromEntries(
      formData.entries()
    );
    // console.log(email, password, restForm);

    const regularExpress = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!password.match(/[A-Z]/)) {
      toast.warn("Use uppercase", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else if (!password.match(/[a-z]/)) {
      toast.warn("Use lowercase", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else if (regularExpress.test(password) == false) {
      toast.warn("Password should be at least 6 character", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const results = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...results, displayName: name, photoURL: photoURL });
          })
          .catch(() => {});
        const usersProfile = {
          email,
          ...restForm,
        };
        // fetch to backend
        fetch("https://hobby-hub-server-bice.vercel.app//user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(usersProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign Up Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Already Register",
            text: "Please LogIn",
          });
        }
      });
  };
  return (
    <form onSubmit={handleSignUp}>
      <h1 className="text-3xl font-bold text-center mt-24 mb-4">Sign Up</h1>
      <div className="card bg-base-100 dark:bg-gray-200 dark:text-black w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name </label>
            <input
              type="text"
              name="name"
              className="input dark:bg-white"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input dark:bg-white"
              placeholder="Email"
            />
            <label className="label">photoURL </label>
            <input
              type="text"
              name="photoURL"
              className="input dark:bg-white"
              placeholder="photoURL"
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showpass ? "text" : "password"}
                name="password"
                className="input dark:bg-white"
                placeholder="Password"
              />
              <p
                className="absolute top-3 right-8"
                onClick={() => setShowPass(!showpass)}
              >
                {showpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </p>
            </div>
            <div>
              <p>
                Already Have an Account?{" "}
                <Link
                  className="text-blue-600 font-semibold"
                  to={"/auth/login"}
                >
                  Login
                </Link>
              </p>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              SignUp
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
