interface InputFieldProps {
  setEmail: (email: string) => void;
  setPassword: (passwoord: string) => void;
  setFullName: (fullName: string) => void;
  setUserName: (userName: string) => void;
}

const InputFields = ({ setEmail, setPassword, setFullName, setUserName }: InputFieldProps) => {
  return (
    <div>
      <div>
        <input
          placeholder="User Name"
          className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          required={true}
          type="text"
          name="userName"
          id="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <input
          placeholder="Email address"
          className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          required={true}
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <input
          placeholder="Full Name"
          className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          required={true}
          type="text"
          name="name"
          id="name"
          onChange={(e) => setFullName(e.target.value)}
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
  );
};

export default InputFields;
