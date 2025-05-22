import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { Bounce, toast } from "react-toastify";

const LogIn = () => {
  const { setUser, signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showpass, setShowPass] = useState(false);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        navigate(location.state || "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        toast.error("Invalid email or password", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };
  return (
    <form onSubmit={handleSignIn}>
      <h1 className="text-3xl font-bold text-center mt-24 mb-4">Sign In</h1>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showpass ? "text" : "password"}
                name="password"
                className="input"
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
                Don't Have an Account?{" "}
                <Link
                  className="text-blue-600 font-semibold"
                  to={"/auth/register"}
                >
                  Register
                </Link>
              </p>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default LogIn;
