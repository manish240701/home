import React from "react";
import "./Float.css";
import linkedin from "../assets/linkedin.png"
import whatsapp from "../assets/whatsapp.png"
import github from "../assets/github.png"
import line from "../assets/Line .png"
const Float = () => {
    return (
        <div className="float-container">
            <div className="row float-rows">
                <div className="float-left col-md-2 text-center">
                    <a href="#">
                        <img src={linkedin} className="image-fluid float-img-left" alt="linkedin" /><br />
                    </a>

                    <a href="#">
                        <img src={whatsapp} className="image-fluid float-img-left" alt="whatsapp" /><br />
                    </a>

                    <a href="#">
                        <img src={github} className="image-fluid float-img-left" alt="github" /><br />
                    </a>

                    <img src={line} className="image-fluid" alt="line" />
                </div>
                <div className="col-md-8"></div>
                <div className="float-right col-md-2 text-start">
                    scroll down
                </div>
            </div>
        </div>
    )
}

export default Float;