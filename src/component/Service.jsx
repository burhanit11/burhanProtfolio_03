import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import CampaignIcon from "@mui/icons-material/Campaign";
// import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
// import InterestsIcon from "@mui/icons-material/Interests";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Workexp from "./Workexp";
import { menu } from "./MenuApi";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Service = () => {
  const [menuData, setMenuData] = React.useState(menu);
  const [category, setCategory] = React.useState("design");

  
  const filterItem = (category) => {
    const upDataList = menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(upDataList);
  };

  return (
    <>
      <div className=" md:px-16  px-5 service">
        <div className="text-center pt-28  first">
          <h1 className="text-5xl font-semibold">Popular Services</h1>
          <p className="text-1xl my-5 mb-10 font-normal ">
            Must explain to you how all this mistaken idea of denouncing
            pleasure <br />
            born and give you a complete account the system
          </p>
          <button onClick={() => filterItem("design")}>Design</button>
          <button onClick={() => filterItem("development")}>Development</button>
          <button onClick={() => filterItem("marketing")}>Marketing</button>
        </div>
        <Box sx={{ flexGrow: 1 }} className="box">
          <Grid container spacing={2}>
            {menuData.map((item) => (
              <Grid item sm={4} xs={12} key={item.id}>
                <Item className="my-5 item">
                  <div className="span shadow-xl">
                    {/* <InterestsIcon className="icon" /> */}
                    {item.icon}
                  </div>
                  <h1 className="py-5">{item.name}</h1>
                  <p className="text-sm">{item.describation}</p>
                  <button className="py-5 ">
                    {" "}
                    <ArrowForwardIcon /> LEARN MORE
                  </button>
                </Item>
              </Grid>
            ))}
            {/* <Grid item sm={4} xs={12}>
              <Item className="my-5 ">
                <div className="span shadow-2xl">
                  <CampaignIcon className="icon" />
                </div>
                <h1 className="py-5">Digital Marketing</h1>
                <p className="text-sm">
                  Explain to you how all this mistaken idea of denouncing
                  pleasure born and give you complete account the system.
                </p>
                <button className="py-5 ">
                  {" "}
                  <ArrowForwardIcon className="icon" /> LEARN MORE
                </button>
              </Item>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Item className="my-5 ">
                <div className="span shadow-2xl">
                  <MoveToInboxIcon className="icon" />
                </div>
                <h1 className="py-5" s>
                  Email Marketing
                </h1>
                <p className="text-sm">
                  Explain to you how all this mistaken idea of denouncing
                  pleasure born and give you complete account the system.
                </p>
                <button className="py-5 ">
                  {" "}
                  <ArrowForwardIcon /> LEARN MORE
                </button>
              </Item>
            </Grid> */}
          </Grid>
        </Box>
      </div>
      <Workexp />
    </>
  );
};

export default Service;
