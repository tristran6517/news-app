import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <h2 className="title">Newspaper</h2>
        <Grid container alignItems="flex-end">
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary">
              Add New
            </Button>
          </Grid>
          <Grid container xs={12} sm={6} alignItems="flex-end">
            <Grid sm={8}>
              <TextField
                id="standard-full-width"
                label="Search"
                placeholder="Please typing..."
                style={{ marginBottom: 0 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid sm={1}></Grid>
            <Grid sm={3}>
              <Button variant="contained" color="primary">
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Paper elevation={3} style={{ marginTop: 30 }}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell scope="row">test</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    SelectProps={{
                      inputProps: { "aria-label": "rows per page" },
                      native: true,
                    }}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
