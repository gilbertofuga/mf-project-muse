import React, { useState, StrictMode } from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import {
  StylesProvider,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

import "./App.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Streams", 159, 6.0, 24),
  createData("Download", 237, 9.0, 37),
  createData("Assets", 262, 16.0, 24),
  createData("Products", 305, 3.7, 67),
  createData("Physical Products", 356, 16.0, 49),
];

const useStyles = makeStyles({
  table: {
    marginTop: 25,
  },
});

function App({ theme }) {
  const [clicked, setClicked] = useState(false);

  const classes = useStyles();

  function onClick() {
    setClicked(!clicked);
  }

  return (
    <StrictMode>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <div>
            <h1>An amazing project</h1>
            <div>
              <Button variant="contained" color="primary" onClick={onClick}>
                clickable button
              </Button>
              {clicked && <div> the button was clicked </div>}
              {!clicked && <div> the button wasnt clicked </div>}
              <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell align="right">Gross revenue</TableCell>
                      <TableCell align="right">Net revenue</TableCell>
                      <TableCell align="right">Diff</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </ThemeProvider>
      </StylesProvider>
    </StrictMode>
  );
}

export default App;
