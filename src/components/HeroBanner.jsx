import React from "react";

import { Box, Typography, Button } from "@mui/material";

// asset imports
import HeroImg from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        mb="23px"
        mt="30px"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out our most effective exercises
      </Typography>

      <Button
        href="#exercises"
        variant="contained"
        color="error"
        sx={{ backgroundColor: "#FF2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#FF2625"
        mt="30px"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>

      <img src={HeroImg} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
