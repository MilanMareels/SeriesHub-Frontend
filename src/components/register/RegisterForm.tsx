import ErrorMessage from "../error/ErrorMessasge";
import InputFields from "./InputFields";
import RegisterButton from "./RegisterButton";

interface RegisterFormProps {
  handleRegister: (event: React.FormEvent) => void;
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  setFullName: (fullName: string) => void;
  setUserName: (userName: string) => void;
  errorMessage: string;
  loading: boolean;
}

const RegisterForm = ({
  handleRegister,
  setPassword,
  setEmail,
  errorMessage,
  loading,
  setFullName,
  setUserName,
}: RegisterFormProps) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={(event) => handleRegister(event)}>
      <div className="rounded-md shadow-sm gap-4 flex flex-col">
        <InputFields
          setPassword={setPassword}
          setEmail={setEmail}
          setFullName={setFullName}
          setUserName={setUserName}
        />
      </div>

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <div>
        <RegisterButton loading={loading} />
      </div>
    </form>
  );
};

export default RegisterForm;
