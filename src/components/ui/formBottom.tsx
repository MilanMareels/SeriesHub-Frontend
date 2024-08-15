import { Link } from "react-router-dom";

interface FormBottomProps {
  text: string;
  linkText: string;
  to: string;
}

const FormBottom = ({ text, linkText, to }: FormBottomProps) => {
  return (
    <div className="px-8 py-4 bg-gray-700 text-center">
      <span className="text-gray-400">{text}</span>
      <Link className="font-medium text-indigo-500 hover:text-indigo-400" to={`${to}`}>
        {linkText}
      </Link>
    </div>
  );
};

export default FormBottom;
