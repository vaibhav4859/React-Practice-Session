import { Link, useLocation } from "react-router-dom";

const LoadComments = (props) => {
    const location = useLocation();
    return (
        <div className='centered'>
            <Link className='btn--flat' to={location.pathname + "/comments"}>Load Comments</Link>
        </div>
    );
};

export default LoadComments;