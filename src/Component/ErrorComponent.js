import { useNavigate, useRouteError } from "react-router-dom";
import "../css/Error.css";

const ErrorComponent = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    console.log("Route Error:", error);

    const status = error?.status || 500;
    const statusText = error?.statusText || "Something went wrong";
    const message = error?.data || error?.message || "An unexpected error occurred.";

    return (
        <div className="error-page">

            <div className="error-content">

                <div className="error-icon">
                    ⚠️
                </div>

                <h1>{status}</h1>

                <h2>{statusText}</h2>

                <p>
                    {typeof message === "string"
                        ? message
                        : "We couldn't find the page you're looking for."}
                </p>

                <button
                    className="error-home-btn"
                    onClick={() => navigate("/")}
                >
                    Go Home
                </button>

            </div>

        </div>
    );
};

export default ErrorComponent;