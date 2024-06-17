interface ErrorMessageProps {
	errorMessage: string;
}

const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
	return (
		<div className="flex justify-center items-center bg-red-700 text-white p-2 rounded-lg">
			<p>{errorMessage}</p>
		</div>
	);
};

export default ErrorMessage;
