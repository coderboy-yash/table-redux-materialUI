// import React from "react";
import Table from "./component/table";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import hero from "../src/assets/hero.png";
import Box from "@mui/material/Box";

const App = () => {
  const customTheme = createTheme({
    palette: {
      white: "#ffffff",
      primary: {
        main: "#1a237e",
        light: "#9fa8da",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <CssBaseline></CssBaseline>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            style={{
              color: "#ffc107",
              fontWeight: "bold",
              margin: "10px",
              borderBottom: 2,
            }}
          >
            Table
          </Typography>

          <img src={hero} alt="" />
        </Box>

        <Table></Table>
      </ThemeProvider>
    </div>
  );
};

export default App;
