import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

interface RegisterButtonProps {
  loading: boolean;
}

const RegisterButton = ({ loading }: RegisterButtonProps) => {
  return (
    <Button
      type="submit"
      className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <p>Sign Up</p>}
    </Button>
  );
};

export default RegisterButton;
