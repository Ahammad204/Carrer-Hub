import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!! Something wrong </h2>
            <Link to="/">Home</Link>
        </div>
    );
};

export default ErrorPage;