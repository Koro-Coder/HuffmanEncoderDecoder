import React from "react";
import "./Footer.css";

import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePersonalVideo } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">Designed by Abhishek Aggarwal</div>
      <div className="icons">
        <a href="mailto:abhishekaggarwal2801@gmail.com">
          <AiOutlineMail className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
