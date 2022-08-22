import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

export default function StickyHeadTable({ rows }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const header = [
    "state",
    "Confirmed Case",
    "Cases on Admission",
    "Death",
    "Discharged",
  ];
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(rows);
  }, [rows]);
  return (
    <Paper sx={{ width: "90%", margin: "auto", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {header.map((column, index) => (
                <TableCell
                  key={index}
                  align={"left"}
                  style={{ minWidth: 170, fontWeight: "bold" }}
                >
                  {column.toUpperCase()}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {state
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const {
                  confirmedCases,
                  casesOnAdmission,
                  death,
                  discharged,
                  state,
                } = row;
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell align="left">{state}</TableCell>
                    <TableCell align="left">{confirmedCases}</TableCell>
                    <TableCell component="th" scope="row">
                      {casesOnAdmission}
                    </TableCell>
                    <TableCell align="left">{death}</TableCell>
                    <TableCell align="left">{discharged}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={state?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
