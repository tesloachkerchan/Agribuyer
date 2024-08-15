import React from "react";
import svg from "../assets/img/404.svg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <div className="cont-404">
                <img src={svg} alt="svg" />
                <Link to='/home'>Backe To Home</Link>
            </div>
        </>
    );
};

export default PageNotFound;