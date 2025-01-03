import { Typography } from "@mui/material";

import { color } from "framer-motion";
import React, { useEffect } from "react";

const ServicesDescription = (props) => {

  return (
    <div className="container allpadding pb-0">
      <Typography
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-mirror="true"
        sx={{
          color: "#fff",
          fontSize: { xs: "18px", md: "50px", lg: "50px" },
          fontWeight: 600,
          textAlign: "left",
        }}
      >
        {props.servicesdescription}
      </Typography>
    </div>
  );
};

export default ServicesDescription;
