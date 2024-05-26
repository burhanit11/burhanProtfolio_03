import "../index.scss";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { routes } from "../router";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../Redux/Slices/authUser";

const drawerWidth = 240;

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const users = useSelector((state) => {
    return state.authUser;
  });

  React.useEffect(() => {
    toggleVisible();
  }, [visible]);

  const logout = () => {
    dispatch(authLogout());
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window?.addEventListener("scroll", toggleVisible);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigate = (id) => {
    console.log(id, "idd text");
    const element = document.getElementById(id);

    console.log(element, "elemrnt");
    if (element) {
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ fontSize: 20, fontWeight: "bold" }}>
        BUR.
      </Typography>
      <Divider />
      <List>
        {routes?.map(
          (item) =>
            item.isNavbar && (
              <ListItem key={item.path} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText onClick={() => handleNavigate(item?.name)}>
                    {item.name}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            )
        )}
        <Divider />
        <Box onClick={() => navigate("./login")}>Login</Box>
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className={`${visible ? "scrolled-navbar" : "navbar"}`}
        component="nav"
      >
        <Toolbar>
          <img src="./assets/burhan.png" alt="" />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
            }}
            className="toggle"
          >
            <MenuIcon className="icon" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className="logo"
            sx={{
              color: "black",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontSize: "2rem",
              fontWeight: "bold",
              py: "1.5rem",
            }}
          >
            BUR.
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              flexGrow: 1,
              justifyContent: "center",
            }}
            className="item"
          >
            {routes?.map(
              (item) =>
                item.isNavbar && (
                  <Button
                    key={item.path}
                    sx={{ color: "black" }}
                    className="btn"
                    onClick={() => handleNavigate(item?.name)}
                  >
                    {item.name}
                  </Button>
                )
            )}
          </Box>
          {users ? (
            <Button
              className="login"
              sx={{ display: { xs: "block", sm: "none" } }}
              onClick={logout}
            >
              LOGOUT
              <ArrowDownwardIcon />
            </Button>
          ) : (
            <Button
              className="login"
              sx={{ display: { xs: "block", sm: "none" } }}
              onClick={() => navigate("/login")}
            >
              LOGIN
              <ArrowDownwardIcon />
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
      <Toolbar />
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
