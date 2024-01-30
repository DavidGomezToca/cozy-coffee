import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <>
      <h1 className="text-4xl font-black">Log In</h1>
      <p>To create an order you must login</p>
      <div className="bg-white shadow-md reounded-md mt-10 px-5 py-10">
        <form action="">
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
            />
          </div>
          <input
            type="submit"
            value="Log In"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>
      <nav className="mt-5">
        <span>New to CozyCoffee? </span>
        <Link className="text-blue-600" to="/auth/signup">
          Sign Up
        </Link>
      </nav>
    </>
  );
}
