import Title from "../../../Shared/Title/Title";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-20 flex flex-col items-center ">
      <Title firstTitle={"Edit Profile"}></Title>
      <div className="bg-slate-300 p-10 rounded-xl mt-10">
        <form className="flex flex-col w-[300px]">
            {/* name */}
          <label className="text-sm font-bold mb-3" htmlFor="Name">
            Name
            <input
              className="px-2 w-full rounded bg-white py-2"
              name="name"
              placeholder={"Your New name here"}
              defaultValue={user?.displayName || ""}
              type="text"
            />
          </label>
          {/* email */}
          <label className="text-sm font-bold mb-3 " htmlFor="Name">
            Email
            <input
              className="px-2 w-full rounded bg-white py-2"
              name="email"
              placeholder={"Your New email here"}
              defaultValue={user?.email || ""}
              type="email"
            />
          </label>
          {/* Address */}
          <label className="text-sm font-bold mb-3 " htmlFor="Name">
            Address
            <input
              className="px-2 w-full rounded bg-white py-2"
              name="Address"
              placeholder={"Your Address Here"}
              defaultValue={user?.ad || ""}
              type="text"
            />
          </label>
          {/* University */}
          <label className="text-sm font-bold mb-3 " htmlFor="Name">
            University
            <input
              className="px-2 w-full rounded bg-white py-2"
              name="University"
              placeholder={"Your University name Here"}
              defaultValue={user?.ad || ""}
              type="text"
            />
          </label>
          <button type="submit" className="btn mt-3 hover:bg-blue-950 hover:text-white duration-500">
            Save
          </button>
        </form>
        
        
        

      </div>
    </div>
  );
};

export default EditProfile;
