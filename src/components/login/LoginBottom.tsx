import { Link } from "react-router-dom";

const LoginBottom = () => {
  return (
    <div className="px-8 py-4 bg-gray-700 text-center">
      <span className="text-gray-400">Don't have an account? </span>
      <Link className="font-medium text-indigo-500 hover:text-indigo-400" to="/register">
        Sign up
      </Link>
    </div>
  );
};

export default LoginBottom;
