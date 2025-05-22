import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restForm } = Object.fromEntries(
      formData.entries()
    );
    console.log(email, password, restForm);
    createUser(email, password)
      .then((result) => {
        console.log(result);
        const usersProfile = {
          email,
          ...restForm,
        };
        // fetch to backend
        fetch("http://localhost:3000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(usersProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign Up Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSignUp}>
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
