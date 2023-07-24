import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Title from "../../Shared/Title/Title";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="p-20 flex flex-col items-center justify-center text-center">
            <Title firstTitle={'User Profile Information'} ></Title>
                <div className="bg-slate-300 p-10 rounded-xl mt-10">
                    
                        <img className="rounded-full mx-auto mb-3" src={user?.photoURL} alt="" />
                        
                            <h1 className="font-bold text-2xl poppins mb-3">{user?.displayName}</h1>
                            <h1 className="font-semibold mb-2"><span className="poppins">Email</span>: {user?.email}</h1>
                            <h1 className="font-semibold mb-2"><span className="poppins">Address</span>: {user?.email}</h1>
                            <h1 className="font-semibold mb-2"><span className="poppins">University</span>: {user?.email}</h1>
                       
                     <Link to={'/editProfile'}>
                     <button className="btn mt-3 hover:bg-blue-950 hover:text-white duration-500">Edit Profile <FaEdit></FaEdit> </button>
                     </Link>
                </div>
        </div>
    );
};

export default Profile;