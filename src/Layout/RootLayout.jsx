import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar"

const RootLayout = () => {
  return (
    <>
      <NavBar/>
      <Outlet />
    </>
  );
};

export default RootLayout;
