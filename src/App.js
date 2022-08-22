import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchApiData } from "./store/reducers/fetchDataReducer";
import { StickyHeadTable, Loader, Home } from "components";
import { Container } from "@mui/material";

function App() {
  const { data, isLoading, error } = useSelector((store) => store.fetchData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);
  if (isLoading) return <Loader size={40} />;
  if (error) return <h4>Something went wrong</h4>;
  return (
    <Container>
      <Home data={data} />
      <StickyHeadTable rows={data?.data?.states} />
    </Container>
  );
}

export default App;
