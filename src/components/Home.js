import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import CardItem from "components/layout/Card";

const Home = ({ data }) => {
  const [death, setDeath] = useState(0);
  const [totalActiveCases, setTotalActiveCases] = useState(0);
  const [totalConfirmedCases, setTotalConfirmedCases] = useState(0);
  const [discharged, setDischarged] = useState(0);
  const [totalSamplesTested, setTotalSamplesTested] = useState(0);
  useEffect(() => {
    setDeath(data?.data?.death);
    setTotalActiveCases(data?.data?.totalActiveCases);
    setTotalConfirmedCases(data?.data?.totalConfirmedCases);
    setTotalSamplesTested(Number(data?.data?.totalSamplesTested));
    setDischarged(data?.data?.discharged);
  }, [data]);
  // importing image files

  return (
    <Grid
      direction="column"
      container
      width="90%"
      margin="auto"
      justifyContent="center"
      sx={{ magrin: "2rem 0" }}
    >
      <Grid item container rowSpacing={3} justifyContent="space-evenly">
        <CardItem name="Active Cases" data={totalActiveCases} />
        <CardItem name="Deaths" data={death} />
        <CardItem name="Confirmed Cases" data={totalConfirmedCases} />
        <CardItem name="Recovered" data={discharged} />
        <CardItem name="Tested Cases" data={totalSamplesTested} />
      </Grid>
    </Grid>
  );
};
export default Home;
