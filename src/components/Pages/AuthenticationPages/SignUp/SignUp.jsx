import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaLock,
  FaRegEnvelope,
  FaRegFileImage,
  FaUserCircle,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser, googleSignin, updateUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // -------------------------------
  //              States
  // -------------------------------
  const [error, setError] = useState("");

  // -------------------------------
  //              Functions
  // -------------------------------

  //============== Email & Password Auth ==============

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const PhotoURL = form.PhotoURL.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        updateUser(name, PhotoURL)
        .then(() => {
            const SavedUser = {
                name: name,
                email: email,
                photo: PhotoURL,
              };
            fetch('http://localhost:5000/userData',{
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(SavedUser),
            })  
            if (user?.displayName) {
                navigate("/");
                Swal.fire("Good job!", `You Have created a Account!`, "success");
                //  timeout is used to fix a issue.
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
            form.reset();
        });
      })
      .catch((error) => {
        form.reset();
        setError(error);
      });
    setError("");
  };
  //============== Social Login ==============
  //============== Google ==============
  const handleGoogleSignIn = () => {
    googleSignin()
      .then((result) => {
        const loggedUser = result.user;
        const SavedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          photo: loggedUser.photoURL,
        };
        fetch(
          `http://localhost:5000/userData`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(SavedUser),
          }
        );
        Swal.fire("Welcome!", "Google Login succesful", "success");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  //============== Github ==============

  return (
    <div>
      <div className="md:pb-6 md:pt-10 px-3 mx-0 md:mx-28 flex justify-center">
        <form
          onSubmit={handleSubmit}
          style={{ width: "450px" }}
          className=""
          action=""
        >
          {/* title */}
          <h3 className="text-2xl font-extrabold mb-4">Sign up</h3>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
              <span>
                <FaRegEnvelope></FaRegEnvelope>
              </span>
              <input
                type="email"
                name="email"
                placeholder="input your email here"
                className="input input-bordered"
                required
              />
            </label>
          </div>
          {/* email end */}
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Password</span>
            </label>
            <label className="input-group">
              <span>
                <FaLock></FaLock>
              </span>
              <input
                type="password"
                name="password"
                placeholder="input your password here"
                className="input input-bordered"
                required
              />
            </label>
          </div>
          {/* password end */}
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <span>
                <FaUserCircle></FaUserCircle>
              </span>
              <input
                type="text"
                name="name"
                placeholder="input your fullname here"
                className="input input-bordered"
                required
              />
            </label>
          </div>
          {/* Name end */}
          {/* PhotoUrl */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL here</span>
            </label>
            <label className="input-group">
              <span>
                <FaRegFileImage></FaRegFileImage>
              </span>
              <input
                type="text"
                name="PhotoURL"
                placeholder="input your profile pic here"
                className="input input-bordered"
                required
              />
            </label>
          </div>
          {/* PhotoUrl end */}

          <div className="text-sm">
            {
              <p className="text-red-500 font-bold" id="error">
                {error.message}
              </p>
            }
            Already have an account ?{" "}
            <Link
              to="/signin"
              className="underline underline-offset-2 text-blue-600"
            >
              Sign in
            </Link>
          </div>
          <div>
            <div>
              {/* <input
                
                value="Sign Up"
              /> */}
              <button
                className="text-black border-2 border-black px-3 rounded-full mt-3 hover:bg-slate-900 duration-500 hover:text-white py-[6px]"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="divider">OR</div>
          <div className="mt-6 flex gap-5 mb-3 md:mb-0 justify-center">
            <div
              onClick={handleGoogleSignIn}
              data-tip="Login with Google"
              className="tooltip text-black border-2 border-black px-3 rounded-full mt-3 hover:bg-slate-900 duration-500 hover:text-white py-[6px] flex items-center"
            >
              <FaGoogle></FaGoogle>
              <p className="ml-3">Google</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
