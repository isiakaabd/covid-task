import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchApiData } from "./store/reducers/fetchDataReducer";
function App() {
  const { data, isLoading } = useSelector((store) => store.fetchData);

  const dispatch = useDispatch();

  console.log(data);
  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);
  if (isLoading) return <h1>loading...</h1>;
  return (
    <div className="App">
      {data?.data?.states?.map((item) => {
        return <h2 key={item._id}>{item.casesOnAdmission}</h2>;
      })}
    </div>
  );
}

export default App;
