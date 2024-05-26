import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";

export const routes = [
  {
    name: "Home",
    component: <Home />,
    path: "/",
    isHybrid: true,
    isNavbar: true,
  },
  {
    name: "About",
    component: <About />,
    path: "/about",
    isHybrid: true,
    isNavbar: true,
  },
  {
    name: "Portfolio",
    component: <Portfolio />,
    path: "/portfolio",
    isPrivate: true,
    isNavbar: true,
  },
  {
    name: "Contact",
    component: <Contact />,
    path: "/contact",
    isPrivate: true,
    isNavbar: true,
  },
  {
    name: "Blog",
    component: <Blog />,
    path: "/blog",
    isPublic: true,
    isNavbar: true,
  },
  {
    name: "Login",
    component: <Login />,
    path: "/login",
    isPublic: true,
    isNavbar: false,
  },
];

export const isHybridRoutes = routes.filter((item) => item.isHybrid);
export const isPrivateRoutes = routes.filter((item) => item.isPrivate);
export const isPublicRoutes = routes.filter((item) => item.isPublic);
