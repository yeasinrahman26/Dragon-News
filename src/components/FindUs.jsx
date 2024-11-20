
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3 ">Find Us On</h1>
      <div className="join join-vertical  flex *:w-full">
        <button className="btn join-item  border-1 border-gray-300 text-blue-500 justify-start">
          <FaFacebook></FaFacebook>
          Facebook
        </button>
        <button className="btn join-item  border-1 border-gray-300 text-[#FBA756]  justify-start">
          <FaInstagram></FaInstagram>
          Instagram
        </button>
        <button className="btn join-item  border-1 border-gray-300 text-[#58A7DE]  justify-start">
          <FaTwitter></FaTwitter>
          Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
