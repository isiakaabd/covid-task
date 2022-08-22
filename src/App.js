import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchApiData } from "./store/reducers/fetchDataReducer";
import { StickyHeadTable, Loader, Home } from "components";
import { Container } from "@mui/material";

function App() {
  const { data, isLoading } = useSelector((store) => store.fetchData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);
  if (isLoading) return <Loader size={40} />;
  return (
    <Container>
      <Home data={data} />
      <StickyHeadTable rows={data?.data?.states} />
    </Container>
  );
}

export default App;
