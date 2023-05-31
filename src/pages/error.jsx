import { Link } from "react-router-dom";

const ErrorPage = (props) => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-3xl font-extrabold">Oooppss !!!</h1>
      <p className="text-xl my-5">Sory, an unexpected error has accured</p>
      <h2 className="text-lg font-bold">Not Found 404</h2>
      <p className="mt-2 font-semibold">
        Back To Home
        <Link
          to="/"
          className="text-blue-500 underline ms-1 font-extrabold italic"
        >
          Click Me
        </Link>
      </p>
    </div>
  );
};
export default ErrorPage;
