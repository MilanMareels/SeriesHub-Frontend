import { Button } from "../ui/button";

interface LoginButtonProps {
	handleLogin: (event: React.FormEvent) => void;
}

const LoginButton = ({ handleLogin }: LoginButtonProps) => {
	return (
		<Button
			className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			onClick={(e) => handleLogin(e)}
		>
			Sign In
		</Button>
	);
};

export default LoginButton;
