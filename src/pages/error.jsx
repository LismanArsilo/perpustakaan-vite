import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-3xl font-bold">Oooppss !!!</h1>
      <p className="text-xl my-5">Sory, an unexpected error has accured</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};
export default ErrorPage;
