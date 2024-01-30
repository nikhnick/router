import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
    const navigator = useNavigate();
    const error = useRouteError()
    console.log(error);

  return (
    <div className="text-center mt-10">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-red-600">{error.error.message}</i><br />
        <button className="font-bold text-blue-700" onClick={()=> navigator("/")}>Click here</button> to go back to the main page
      </p>
    </div>
  );
}

export default ErrorPage;
