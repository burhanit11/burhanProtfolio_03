import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Price = () => {
  return (
    <div className="price">
      <div className="pt-28  text-center py-10">
        <h1 className="text-5xl font-bold py-5">Pricing Plan</h1>

        <p className="text-lg ">
          Must explain to you how all this mistaken idea of denouncing <br />{" "}
          pleasure born and give you a complete account the system
        </p>
      </div>
      <Box sx={{ flexGrow: 1 }} className="box">
        <Grid container spacing={2}>
          <Grid item sm={4} className="grid">
            <Item className="item">
              <div className="div">
                <div className="basic">BASIC</div>
                <h1>
                  <span>$120</span>/ PER MONTH
                </h1>
                <p>
                  Determine the Best Pricing Strategy <br /> For Your Business.
                </p>
              </div>
              <hr />
              <div className="div">
                <p>Softwere Development</p>
                <p>Web Development</p>
                <p>Digital Marketing</p>
                <p>Graphic Design</p>
                <p>24/Support</p>
                <button>CHOOSE PLAN</button>
              </div>
            </Item>
          </Grid>
          <Grid item sm={4} className="grid">
            <Item className="item">
              <div className="div">
                <span className="basic">PREMIUM</span>
                <h1>
                  <span>$210</span>/ PER MONTH
                </h1>
                <p>
                  Determine the Best Pricing Strategy <br /> For Your Business.
                </p>
              </div>
              <hr />
              <div className="div">
                <p>Softwere Development</p>
                <p>Web Development</p>
                <p>Digital Marketing</p>
                <p>Graphic Design</p>
                <p>24/Support</p>
                <button>CHOOSE PLAN</button>
              </div>
            </Item>
          </Grid>
          <Grid item sm={4} className="grid">
            <Item className="item">
              <div className="div">
                <span className="basic">ADVANCED</span>
                <h1>
                  <span>$373</span>/ PER MONTH
                </h1>
                <p>
                  Determine the Best Pricing Strategy <br /> For Your Business.
                </p>
              </div>
              <hr />
              <div className="div">
                <p>Softwere Development</p>
                <p>Web Development</p>
                <p>Digital Marketing</p>
                <p>Graphic Design</p>
                <p>24/Support</p>
                <button>CHOOSE PLAN</button>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Price;
