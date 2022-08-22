import React from "react";
import { Card, Typography, CardContent, CardMedia, Grid } from "@mui/material";
import CountUp from "react-countup";
import PropTypes from "prop-types";
import Images from "components/assests";

const CardItem = ({ data, name }) => {
  const { death } = Images; // importing images
  return (
    <Grid
      item
      container
      md={3.5}
      sm={12}
      width="100%"
      sx={{
        justifyContent: "center",
        "&.MuiGrid-root": {
          "& .MuiCard-root": {
            "&.Deaths": {
              borderBottom: "10px solid rgba(255,0,0,0.5)",
            },
            "&.Infected": {
              borderBottom: "10px solid rgba(75,192,192,0.2)",
            },

            "&.Recovered": {
              borderBottom: "10px solid  rgba(0,255,0,1)",
            },
          },
        },
        margin: "2rem 0",
      }}
    >
      <Card className={name} sx={{ width: "100%" }}>
        <CardContent>
          <Grid container alignItems="center" gap={2} flexWrap="nowrap">
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <CardMedia
              sx={{
                "&.MuiCardMedia-img": {
                  width: "3rem",
                  height: "3rem",
                  color: "red",
                },
              }}
              component="img"
              image={death}
            />
          </Grid>
          <CountUp
            start={0}
            end={data}
            duration={5}
            separator=","
            className="countUp"
            style={{ fontSize: "2rem" }}
          />
          <Grid item container sx={{ justifySelf: "end", marginTop: "auto" }}>
            <Typography gutterBottom variant="h6">
              {`Number of ${name.toLowerCase()} cases from Covid 19`}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
CardItem.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  lastUpdate: PropTypes.string.isRequired,
};

export default CardItem;
