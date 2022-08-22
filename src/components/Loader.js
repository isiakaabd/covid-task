import { Grid, CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
const Loader = ({ color, size, ...rest }) => {
  return (
    <Grid container justifyContent="center" sx={{ mt: 4 }} alignItems="center">
      <CircularProgress
        size={size ? size : 20}
        color={color ? color : "primary"}
        {...rest}
      />
    </Grid>
  );
};
Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
export default Loader;
