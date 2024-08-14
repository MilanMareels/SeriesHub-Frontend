import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useState } from "react";
import useLogin from "@/hooks/useLogin";
import LoginForm from "./LoginForm";
import FormBottom from "../ui/formBottom";
import FormHeader from "../ui/formHeader";

const Login = () => {
  const { loginUser } = useLogin();

  const { login } = useContext(AuthContext);

  const [text, setText] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    const response = await loginUser(text, password);

    if ("error" in response && response.error) {
      if (response.status) {
        setErrorMessage(response.data.message);
        setLoading(false);
      }
    } else {
      login(response.userId!);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-svh flex justify-center items-center">
      <div className="max-w-lg w-full m-6">
        <div className="box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <FormHeader title="Welcome Back" text="Sign in to continue" />
            <LoginForm handleLogin={handleLogin} setPassword={setPassword} setText={setText} errorMessage={errorMessage!} loading={loading} />
          </div>

          <FormBottom text="Don't have an account? " to="/register" linkText="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Login;
