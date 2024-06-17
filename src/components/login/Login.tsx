import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useState } from "react";
import useLogin from "@/hooks/useLogin";
import LoginButton from "./LoginButton";
import ErrorMessage from "./ErrorMessasge";
import InputFields from "./InputFields";

const Login = () => {
	const { loginUser } = useLogin();

	const { login } = useContext(AuthContext);

	const [text, setText] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault();

		const response = await loginUser(text, password);

		if ("error" in response && response.error) {
			if (response.status) {
				setErrorMessage(response.data.message);
			}
		} else {
			login(response.userId!);
		}
	};

	return (
		<div className=" bg-slate-600 w-full h-screen flex justify-center items-center">
			<div className="max-w-lg w-full m-6">
				<div className="box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); bg-gray-800 rounded-lg shadow-xl overflow-hidden">
					<div className="p-8">
						<h2 className="text-center text-3xl font-extrabold text-white">Welcome Back</h2>
						<p className="mt-4 text-center text-gray-400">Sign in to continue</p>
						<form className="mt-8 space-y-6">
							<div className="rounded-md shadow-sm gap-4 flex flex-col">
								<InputFields setPassword={setPassword} setText={setText} />
							</div>

							{errorMessage && <ErrorMessage errorMessage={errorMessage} />}

							<div>
								<LoginButton handleLogin={(event) => handleLogin(event)} />
							</div>
						</form>
					</div>
					<div className="px-8 py-4 bg-gray-700 text-center">
						<span className="text-gray-400">Don't have an account? </span>
						<a className="font-medium text-indigo-500 hover:text-indigo-400" href="#">
							Sign up
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
