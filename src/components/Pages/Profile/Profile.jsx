import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Title from "../../Shared/Title/Title";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (user?.email) {
          fetch(`http://localhost:5000/userData/${user.email}`)
            .then((res) => {
              if (!res.ok) {
                throw new Error('Network response was not ok');
              }
              return res.json();
            })
            .then((data) => setData(data))
            .catch((error) => {
              console.error('Error fetching data:', error);
              // Handle the error or set data to a default value if needed.
            });
        }
      }, [user?.email]);
 
  console.log(data);
  return (
    <div className="p-20 flex flex-col items-center justify-center text-center">
      <Title firstTitle={"User Profile Information"}></Title>
      <div className="bg-slate-300 p-10 rounded-xl mt-10">
        <img
          className="rounded-full mx-auto mb-3"
          src={user?.photoURL}
          alt=""
        />

        <h1 className="font-bold text-2xl poppins mb-3">{user?.displayName}</h1>
        <h1 className="font-semibold mb-2">
          <span className="poppins">Email</span>: {user?.email}
        </h1>
        <h1 className="font-semibold mb-2">
          <span className="poppins">Address</span>:{" "}
          {data?.address ? data?.address : "No address Found"}
        </h1>
        <h1 className="font-semibold mb-2">
          <span className="poppins">University</span>:{" "}
          {data?.university ? data?.university : "No university name Found"}
        </h1>

        <Link to={"/editProfile"}>
          <button className="btn mt-3 hover:bg-blue-950 hover:text-white duration-500">
            Edit Profile <FaEdit></FaEdit>{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
