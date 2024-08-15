interface FormHeaderProps {
  title: string;
  text: string;
}

const FormHeader = ({ text, title }: FormHeaderProps) => {
  return (
    <>
      <h2 className="text-center text-3xl font-extrabold text-white">{title}</h2>
      <p className="mt-4 text-center text-gray-400">{text}</p>
    </>
  );
};

export default FormHeader;
