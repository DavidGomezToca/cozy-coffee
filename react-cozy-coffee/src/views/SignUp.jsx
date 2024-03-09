import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import { useAuth } from "../hooks/useAuth";

export default function SignUp() {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();
  const [errors, setErrors] = useState([]);
  const { signup } = useAuth({ middleware: "guest", url: "/" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
    signup(details, setErrors);
  };

  return (
    <>
      <h1 className="text-4xl font-black">Sign Up</h1>
      <p>Create your account using the form</p>
      <div className="bg-white shadow-md reounded-md mt-10 px-5 py-10">
        <form onSubmit={handleSubmit} noValidate>
          {errors
            ? errors.map((error, i) => <Alert key={i}>{error}</Alert>)
            : null}
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 w-full p-3 bg-gray-50"
              name="name"
              placeholder="Your name"
              ref={nameRef}
            />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 w-full p-3 bg-gray-50"
              name="email"
              placeholder="Your email"
              ref={emailRef}
            />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="mt-2 w-full p-3 bg-gray-50"
              name="password"
              placeholder="Your password"
              ref={passwordRef}
            />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password_confirmation">
              Confirm password:
            </label>
            <input
              id="password_confirmation"
              type="password"
              className="mt-2 w-full p-3 bg-gray-50"
              name="password_confirmation"
              placeholder="Confirm your password"
              ref={passwordConfirmationRef}
            />
          </div>
          <input
            type="submit"
            value="Create account"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>
      <nav className="mt-5">
        <span>Already have an account? </span>
        <Link className="text-blue-600" to="/auth/login">
          Log In
        </Link>
      </nav>
    </>
  );
}
