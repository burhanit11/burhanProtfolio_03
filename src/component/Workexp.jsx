import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Workexp = () => {
  return (
    <>
      <div className="px-16 pt-28 text-center workexp">
        <div>
          <h1 className="text-5xl font-semibold">My Work Experience</h1>
          <p className="pt-5">
            Must explain to you how all this mistaken idea of denouncing
            pleasure <br />
            born and give you a complete account the system
          </p>
        </div>
        <div className="pt-10">
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item className="sm:flex sm:justify-between place-items-center gap-5 justify-center text-center item">
                  <h1 className="text-3xl font-bold text-black py-5">
                    2015 - 2016
                  </h1>
                  <div>
                    <img src="./assets/1.png" alt="" className="mx-auto " />
                  </div>
                  <div className="py-3">
                    <h1 className="text-2xl font-bold text-black ">
                      Junior Visual Designer
                    </h1>
                    <p>
                      {" "}
                      <span className="text-red-600">
                        Trapeza Group, USA.
                      </span>{" "}
                    </p>
                  </div>
                  <button className="py-5 text-lg font-bold text-black">
                    {" "}
                    <ArrowForwardIcon className="icon" /> Go to website
                  </button>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item className="sm:flex sm:justify-between place-items-center gap-5 justify-center text-center item">
                  <h1 className="text-3xl font-bold text-black py-5">
                    2017 - 2018
                  </h1>
                  <div>
                    <img src="./assets/2.png" alt="" className="mx-auto " />
                  </div>
                  <div className="py-3">
                    <h1 className="text-2xl font-bold text-black">
                      UI/UX Designer
                    </h1>
                    <p>
                      <span className="text-red-600">
                        Gallerie Ontario, Canada
                      </span>
                      (Remote){" "}
                    </p>
                  </div>
                  <button className="py-5 text-lg font-bold text-black">
                    {" "}
                    <ArrowForwardIcon className="icon" /> Go to website
                  </button>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item className="sm:flex sm:justify-between place-items-center gap-5 justify-center text-center item">
                  <h1 className="text-3xl font-bold text-black py-5">
                    2019 - 2020
                  </h1>
                  <div>
                    <img src="./assets/3.png" alt="" className="mx-auto " />
                  </div>
                  <div className="py-3">
                    <h1 className="text-2xl font-bold text-black">
                      Seinor UI/UX Desinger
                    </h1>
                    <p>
                      {" "}
                      <span className="text-red-600">
                        Morson Hybrid, Canada
                      </span>{" "}
                    </p>
                  </div>
                  <button className="py-5 text-lg font-bold text-black">
                    {" "}
                    <ArrowForwardIcon className="icon" /> Go to website
                  </button>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item className="sm:flex sm:justify-between place-items-center gap-5 justify-center text-center item">
                  <h1 className="text-3xl font-bold text-black py-5">
                    2019 - Present
                  </h1>
                  <div>
                    <img src="./assets/4.png" alt="" className="mx-auto " />
                  </div>
                  <div className="py-3">
                    <h1 className="text-2xl font-bold text-black">
                      Product Designer
                    </h1>
                    <p>
                      <span className="text-red-600">
                        Myant Inc. Etobicoke, ON
                      </span>
                      (Remote){" "}
                    </p>
                  </div>
                  <button className="py-5 text-lg font-bold text-black">
                    {" "}
                    <ArrowForwardIcon className="icon" /> Go to website
                  </button>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Workexp;
