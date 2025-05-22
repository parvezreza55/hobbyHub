import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mt-24 mb-4">Sign Up</h1>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name </label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Email"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">photoURL </label>
            <input
              type="text"
              name="photoURL"
              className="input"
              placeholder="Password"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
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
            <button className="btn btn-neutral mt-4">SignUp</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
