import { Link } from "react-router-dom";

const RegisterBottom = () => {
  return (
    <div className="px-8 py-4 bg-gray-700 text-center">
      <span className="text-gray-400">Already have an account? </span>
      <Link className="font-medium text-indigo-500 hover:text-indigo-400" to="/">
        Sign in
      </Link>
    </div>
  );
};

export default RegisterBottom;
