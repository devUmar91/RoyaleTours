import React from "react";
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <div className="w-full bg-gray-900 md:h-[400px] font-poppins mt-10">
      <div className="max-w-7xl mx-auto text-gray-200 md:flex justify-around p-5 gap-3">
        <div className="max-w-[500px]">
          <h1 className="text-4xl font-bold p-4">Royal Tours </h1>
          <p>
            Pakistan, where your journey begins. Discover your next great place,
            find trips and know about the famous travel destinations of
            Pakistan. A travel and tourism company of Pakistan, city
            sightseeing, group and corporate tours, camping and hiking
            adventures, family and solo trips, and much more for a perfect
            travel experience in Pakistan!
          </p>
        </div>
        <div className="p-4 max-w-[350px]">
          <h3 className="font-bold text-2xl mb-10">  Recommendations </h3>

          <h3 className="font-bold text-gray-300 text-2xl ">  Tour To </h3>

         <ul> 
          <li className="my-2 underline underline-offset-2">  <Link to='http://127.0.0.1:4000/search?searchTerm=Fairy%20Medows'> Fairy Medows   </Link>  </li>
          <li className="my-2 underline underline-offset-2">  <Link to='http://127.0.0.1:4000/search?searchTerm=skardu'> Skardu   </Link>  </li>
          <li className="my-2 underline underline-offset-2">  <Link to='http://127.0.0.1:4000/search?searchTerm=murree'> Murree   </Link>  </li>
          <li className="my-2 underline underline-offset-2">  <Link to='http://127.0.0.1:4000/search?searchTerm=kashmir'> Kashmir  </Link>  </li>


         

         </ul>
        </div>

        <div className="p-4 max-w-[500px]">
          <h1 className="font-bold text-2xl"> Contact Info </h1>
          <p className="pt-4 text-lg text-gray-500"> Pakistan Address : 8-B, Iqbal Avenue Phase 1, Nazaria-e-Pakistan Rd, Lahore. </p>
        
          {/* <p className="pt-4 text-lg">Phone :   03130999917888 </p>
          <p className="pt-4 text-lg">Tel :   03130999917888 </p>
          <p className="pt-4 text-lg">info@royaltours.com </p> */}
          <p>Email: <a href="mailto:rsu560@gmail.com" className="text-yellow-400 hover:underline">info@royaltours.com</a></p>
          <p>Phone: <a href='https://wa.me/+923248580344?' target='_blank' className="text-yellow-400 hover:underline ">+92 324 8580344</a></p>


        
        </div>
      </div>
    </div>
  );
};

export default Footer;
