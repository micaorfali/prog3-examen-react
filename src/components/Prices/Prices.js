import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";



// import Plan from "../Plan/Plan";

function PricingContent() {

  

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Container maxWidth="md" component="main">
        {/* {loading && <PricesGrid priceData={priceData}/> } */}
        
      </Container>
    </React.Fragment>
  );
}



export default function Pricing() {
  return <PricingContent />;
}