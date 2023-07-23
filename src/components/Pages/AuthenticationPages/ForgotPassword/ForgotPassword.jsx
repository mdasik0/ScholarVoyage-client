import { Link, useNavigate } from "react-router-dom";
import Title from "../../../Shared/Title/Title";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForgottenPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    resetPassword(email)
      .then(() => {
        Swal.fire(
          "Email Has been sent!",
          `Check your Email for further instructions !`,
          "success"
        );
        navigate("/signIn");
      })
      .catch((error) => {
        form.reset();
        if(error.message === 'Firebase: Error (auth/user-not-found).'){
            Swal.fire(
                "Wrong Email!",
                `Failed to reset your password`,
                "warning"
              );
              setError('Invalid Email Address');
        }
      });
  };
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="text-center mb-20">
        <Title
          firstTitle={"Forgot Password"}
          secondTitle={
            "If you have an account, Provide your valid email address and we will send you a email to reset your password."
          }
        ></Title>
      </div>
      <form
        onSubmit={handleForgottenPassword}
        className="bg-slate-200 p-10 rounded"
      >
        <h4 className="font-bold text-lg mb-4">Email</h4>
        <input
          className="px-6 border-2 border-black bg-white py-2 md:w-[400px] w-full"
          type="email"
          name="email"
          required
          placeholder="Please Enter Your Email here"
          id=""
        />
        {
          <p className="text-red-500 font-bold" id="error">
            {error}
          </p>
        }
        <button className="block btn w-full hover:text-black hover:bg-slate-400 bg-blue-950 text-white mt-4">
          Reset Password
        </button>
        <Link className="text-blue-600 underline" to={"/signIn"}>
          Sign in
        </Link>
      </form>
      <h3>
        Need an Account?{" "}
        <Link className="text-blue-600 underline" to={"/signUp"}>
          Sign Up
        </Link>
      </h3>
    </div>
  );
};

export default ForgotPassword;
