import { useRouteError } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div class="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl font-semibold text-gray-900">Oops!</h1>
        <TbError404 className="text-9xl" />
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
