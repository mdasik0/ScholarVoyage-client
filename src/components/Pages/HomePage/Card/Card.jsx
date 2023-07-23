import "./Card.css";
const Card = () => {
  return (
    <div className="h-full shadow-xl rounded-lg shadow-slate-400 w-full hover:scale-105 duration-500 hover:bg-slate-300 md:w-[350px] bg-slate-100">
      {/* image */}
      <div className="h-[220px] p-3">
        <img
          className="w-full h-full rounded-lg"
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
        />
      </div>
      {/* info */}
      <div className="p-4">
        {/* college name */}
        <h4 className="poppins font-bold text-xl">Harvard College</h4>
        <div className="text-slate-700 poppins text-sm mt-3 font-bold">
          <h4>Admission Date: 20/33/2000</h4>
          <h4>Events: 20/33/2000</h4>
          <h4>Research History: 20/33/2000</h4>
          <h4>Sports: 20/33/2000</h4>
        </div>
        <div className="main hover:text-white duration-500  mt-2">
          <button className="button px-6 rounded-full">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
