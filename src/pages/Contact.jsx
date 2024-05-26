import React from "react";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="   contact">
        <div className="  text-center">
          <h1 className="pt-20 text-5xl font-bold">Let’s Talk</h1>
          <p className="text-lg py-5">
            Must explain to you how all this mistaken idea of denouncing <br />
            pleasure born and give you a complete account the system
          </p>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-1 mt-10 gap-4 grid1">
          {/* Left Side of contact  ================================================= */}
          <div className="md:col-span-4  2xl:px-20 lg:px-10  md:px-3  2xl:py-16 md:pt-10 lg:py-8 shadow-lg rounded-sm div1">
            <h1 className="text-center text-4xl pb-5">Get In Touch</h1>
            <div className="flex justify-between ">
              <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
                sx={{ width: "15rem" }}
              />
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
                sx={{ marginLeft: "5rem", width: "15rem" }}
              />
            </div>
            <div className="flex justify-between pt-10">
              <TextField
                id="standard-basic"
                label="Your Email"
                variant="standard"
                sx={{ width: "15rem" }}
              />
              <TextField
                id="standard-basic"
                label="Your Phone"
                variant="standard"
                sx={{ marginLeft: "5rem", width: "15rem" }}
              />
            </div>
            <div className="pt-10">
              <TextField
                className="pt-5"
                id="standard-basic"
                label="Your Subject"
                variant="standard"
                fullWidth
              />
              <TextField
                id="standard-multiline-static"
                label="Massege"
                multiline
                rows={6}
                variant="standard"
                fullWidth
                className="pt-5"
              />
              <button className="btn">
                Submit Now
                <ArrowForwardIcon />{" "}
              </button>
            </div>
          </div>

          {/* Right side of Contact  ================================================== */}
          <div className=" md:col-span-2 div2">
            <div className="shadow-lg rounded-sm xl:py-10 py-6 lg:py-5  bg-white ">
              <h1 className="text-center text-2xl ">25 North Street,Dir</h1>
              <div className="div21 ">
                <div className="icon shadow-lg ">
                  <PlaceIcon className="ico" />
                </div>{" "}
                <span className="xl:text-lg  pl-10">Office Home</span>
              </div>
            </div>
            <div className="shadow-lg rounded-sm xl:py-10 py-6 mt-10 bg-white ">
              <h1 className="text-center text-2xl">burhanbur320 @gmail.com</h1>
              <div className="div21 ">
                <div className="icon shadow-lg ">
                  <EmailIcon className="ico" />
                </div>{" "}
                <span className="text-lg pl-10 py-6">Official Mail</span>
              </div>
            </div>
            <div className="shadow-lg rounded-sm py-10 mt-10 bg-white ">
              <h1 className="text-center text-2xl">(+92)306 8866 333</h1>
              <div className="div21 ">
                <div className="icon shadow-lg ">
                  <PhoneCallbackIcon className="ico" />
                </div>{" "}
                <span className="text-lg pl-10">Official Phone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
