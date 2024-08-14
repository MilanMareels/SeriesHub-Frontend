import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useState } from "react";
import RegisterForm from "./RegisterForm";
import useRegister from "@/hooks/useRegister";
import { useNavigate } from "react-router-dom";
import FormBottom from "../ui/formBottom";
import FormHeader from "../ui/formHeader";

const Register = () => {
  let navigate = useNavigate();
  const { registerUser } = useRegister();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    const response = await registerUser(userName, email, password);

    if ("error" in response && response.error) {
      if (response.status) {
        setErrorMessage(response.data.message);
        setLoading(false);
      }
    } else {
      login(response.userId!);
      navigate("/");
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-svh flex justify-center items-center">
      <div className="max-w-lg w-full m-6">
        <div className="box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <FormHeader text="Sign up to continue" title="Welcome" />
            <RegisterForm handleRegister={handleRegister} setPassword={setPassword} setEmail={setEmail} setUserName={setUserName} errorMessage={errorMessage!} loading={loading} />
          </div>

          <FormBottom text="Already have an account? " to="/" linkText="Sign In" />
        </div>
      </div>
    </div>
  );
};

export default Register;
