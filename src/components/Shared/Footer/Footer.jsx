import {FaFacebookSquare, FaGithubSquare, FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className="bg-blue-950 p-3 text-white">
      <div className="lg:w-[1400px] grid gap-6 md:grid-cols-3 grid-cols-1 mx-auto w-full p-10">
        {/* section 1 */}
        <div>
          <h4 className="font-bold text-2xl text-white poppins">
            ScholarVoyage
          </h4>
          <hr className="my-3 w-[200px]" />
          <h5 className="poppins font-semibold text-lg mb-2">About Us</h5>
          <p className=" text-slate-300 text-sm">We are a dedicated platform that empowers students to discover their dream universities or colleges worldwide. Our user-friendly interface and comprehensive database help students explore various institutions, programs, and scholarships, guiding them towards a brighter academic future!</p>

        </div>
        {/* section 2 */}
        <div>
        <h5 className="poppins font-semibold text-lg">Our Services</h5>
        <div className="mt-4 text-sm text-slate-300">
        <p>Personal guidence</p>
        <p>User friendly interface</p>
        <p>Easy Admission system</p>
        <p>Student Review</p>
        <p>Learn more about your institutions</p>
        </div>
        </div>
        {/* <div className="h-[230px] mx-6 w-[2px] bg-white"></div> */}
        {/* section 3 */}
        <div>
        <h5 className="poppins font-semibold text-lg">Contact info</h5>
        <div className="mt-4 text-sm text-slate-300">
        <p>Address: Dhaka, Mailbag, Sector: 1/2</p>
        <p>Phone: +88012345678910</p>
        <p>Email: studenthelp@scholarvoyage.com</p>
        </div>
        <div className='flex gap-3 text-2xl mt-6 items-center'>
        <FaFacebookSquare />
        <BsLinkedin />
        <FaGithubSquare />
        <FaTwitterSquare />
        <FaInstagramSquare />
        </div>

        </div>
      </div>
     <p className='text-sm text-slate-300 text-center'>Copyright © ScholarVoyage. All rights reserved.</p>
    </div>
  );
};

export default Footer;
