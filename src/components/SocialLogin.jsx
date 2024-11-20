import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3 ">Login With</h1>
      <div className="space-y-4 *:w-full">
        <button className="btn border-blue-400 text-blue-400">
          <FaGoogle /> Login With Google
        </button>
        <button  className="btn border-black" ><FaGithub /> Login With GithUb 
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
