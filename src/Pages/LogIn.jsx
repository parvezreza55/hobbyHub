import React from "react";
import { Link } from "react-router";

const LogIn = () => {
  return (
    <div className="">
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
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
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
    </div>
  );
};

export default LogIn;
