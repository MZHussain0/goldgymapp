import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

// import assets
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      px="20px"
      sx={{
        gap: { sm: "144px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
    >
      <Link to={"/"}>
        <img
          src={logo}
          alt="Gym Logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>

      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "2px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
