import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="Error">
            <h2>404</h2>
            <p>Not Found</p>
            <Link to="/">Go Back to Homepage...</Link>
        </div>
    )
}

export default Error;