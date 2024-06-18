import ErrorMessage from "./ErrorMessasge";
import InputFields from "./InputFields";
import LoginButton from "./LoginButton";

interface LoginFormProps {
  handleLogin: (event: React.FormEvent) => void;
  setPassword: (password: string) => void;
  setText: (text: string) => void;
  errorMessage: string;
  loading: boolean;
}

const LoginForm = ({ handleLogin, setPassword, setText, errorMessage, loading }: LoginFormProps) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={(event) => handleLogin(event)}>
      <div className="rounded-md shadow-sm gap-4 flex flex-col">
        <InputFields setPassword={setPassword} setText={setText} />
      </div>

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <div>
        <LoginButton loading={loading} />
      </div>
    </form>
  );
};

export default LoginForm;
