import React, { useEffect } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

// btn
import { useState } from "react";
// import { FaArrowCircleUp } from "react-icons/fa";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button } from "../pages/Styles";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    toggleVisible();
  }, [visible]);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <footer>
        <div className="lg:px-16 md:px-5 footer text-white">
          <div class="grid md:grid-cols-3  md:gap-1 grid-cols-1">
            {/* col1============ */}
            <div className="col bo">
              <div className="logo">
                <img src="./assets/burhan.png" alt="" />
                <h1>BUR.</h1>
              </div>
              <p className="mid ">
                Welcome and open yourself to your truest <br /> love this year
                with us! With the Release <br /> Process
              </p>
              <div className="icons">
                <FacebookOutlinedIcon className="icon" />
                <TwitterIcon className="icon" />
                <LinkedInIcon className="icon" />
                <GitHubIcon className="icon" />
                <InstagramIcon className="icon" />
              </div>
            </div>
            {/* col2============*/}
            <div className="col2">
              <span>
                <h1>Navigation</h1>
                <div className="mid2">
                  <p>-About us</p>
                  <p>-About us</p>
                  <p>-Projects</p>
                  <p>-Recent Post</p>
                </div>
              </span>
              <span>
                <h1>Navigation</h1>
                <div className="mid">
                  <p>-Web Design</p>
                  <p>-Web Development</p>
                  <p>-Brand Identity</p>
                  <p>-Digital Marketing</p>
                </div>
              </span>
            </div>

            {/* col3=========== */}
            <div className=" flex justify-center flex-col  col">
              <h1 className="text-center">Newsletter</h1>
              <p className="mid text-center">
                Must explain to you how all this <br />
                mistaken idea pleasure born and give <br />
                you a complete account.
              </p>
              <div className="input">
                <input type="text" placeholder="Enter Address*" />
                <EmailIcon />
              </div>
            </div>
          </div>
          <Button style={{ display: visible ? "inline" : "none" }}>
            <ArrowUpwardIcon onClick={scrollToTop} />
          </Button>
        </div>
        <div className="copy">
          <p>Copyright © 2023 BUR. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
