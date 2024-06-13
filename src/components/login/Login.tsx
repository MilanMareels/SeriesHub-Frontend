import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useState } from "react";
import { Button } from "../ui/button";
import useLogin from "@/hooks/useLogin";

const Login = () => {
	const { loginUser } = useLogin();

	const { login, setUserId } = useContext(AuthContext);

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
			setUserId(response.userId!);
			login();
		}
	};

	return (
		<div className=" bg-slate-600 w-full h-screen flex justify-center items-center flex-col">
			<div className="max-w-lg w-full m-4">
				<div className="box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); bg-gray-800 rounded-lg shadow-xl overflow-hidden">
					<div className="p-8">
						<h2 className="text-center text-3xl font-extrabold text-white">Welcome Back</h2>
						<p className="mt-4 text-center text-gray-400">Sign in to continue</p>
						<form className="mt-8 space-y-6">
							<div className="rounded-md shadow-sm">
								<div>
									<input
										placeholder="Email address or username"
										className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										required={true}
										type="email"
										name="email"
										id="email"
										onChange={(e) => setText(e.target.value)}
									/>
								</div>
								<div className="mt-4">
									<input
										placeholder="Password"
										className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										required={true}
										type="password"
										name="password"
										id="password"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
							</div>

							{errorMessage && (
								<div className="flex justify-center items-center bg-red-700 text-white p-2 rounded-lg">
									<p>{errorMessage}</p>
								</div>
							)}

							<div>
								<Button
									className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									onClick={(e) => handleLogin(e)}
								>
									Sign In
								</Button>
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
