import "./Card.css"
const Card = () => {
  return (
    <div className="h-[420px] shadow-xl shadow-slate-300 w-full md:w-[350px] bg-slate-200">
      {/* image */}
      <div className="h-[220px] rounded">
        <img
          className="w-full h-full rounded"
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
        />
      </div>
      {/* info */}
      <div className="p-4">
        {/* college name */}
        <h4 className="website-title font-bold text-xl">Harvard College</h4>
        <div className="text-slate-700 font-semibold">
        <h4>Admission Date: 20/33/2000</h4>
        <h4>Events: 20/33/2000</h4>
        <h4>Research History: 20/33/2000</h4>
        <h4>Sports: 20/33/2000</h4>
        </div>
        <div className="main hover:text-white duration-500 w-full mt-2">
          <button className="button w-full">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
