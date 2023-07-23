import "./Header.css"
const Header = () => {
    return (
        <div className="header-bg">
            <div className="lg:w-[90vw] lg:h-[80vh] mx-auto flex items-center justify-center md:pt-0 pt-4">
                <div className=" text-center lg:p-10 p-4">
                    <h3 className="text-white text-5xl font-bold website-title ">Explore Colleges and Universities.</h3>
                    <div className="lg:mt-10 mt-6 ">
                        <input className="border-white border-2 lg:w-[400px] focus:[outline:none] bg-transparent px-4 py-2 text-white rounded-s-full" type="text" placeholder="Search By College name" name="" id="" />
                        <button className="btn-h-w font-bold">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;