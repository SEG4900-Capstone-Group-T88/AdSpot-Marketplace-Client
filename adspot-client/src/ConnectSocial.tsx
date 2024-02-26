import React from "react";
import { faInstagram, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ConnectSocial() {
    return (
        <div className="social-container">
            <h3>Connect a Social Media Account</h3>
            <a className="instagram-connect" href="https://api.instagram.com/oauth/authorize?client_id=3649610268617265&redirect_uri=https://localhost:5173&scope=user_profile,user_media&response_type=code">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
            <a className="youtube-connect">
                <FontAwesomeIcon icon={faYoutube} size="2x"/>
            </a>
            <a className="facebook-connect" href="https://www.facebook.com/v19.0/dialog/oauth?client_id=948021529632543&redirect_uri=https://localhost:5173">
                <FontAwesomeIcon icon={faFacebook} size="2x"/>
            </a>
        </div>
    )
}