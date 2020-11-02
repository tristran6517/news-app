import React from "react";
import "./App.css";
import "./normalize.css";
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
import Modal from "@material-ui/core/Modal";
import { Input, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";

function App() {
  const [openNew, setOpenNew] = React.useState(false);
  const [openCate, setOpenCate] = React.useState(false);

  const handleOpenModalNew = () => {
    setOpenNew(true);
  };

  const handleCloseModalNew = () => {
    setOpenNew(false);
  };
  const handleOpenModalCate = () => {
    setOpenCate(true);
  };

  const handleCloseModalCate = () => {
    setOpenCate(false);
  };

  const modalInner = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    background: "#ffffff",
    padding: "10px",
    border: "0",
  };

  return (
    <div className="App">
      <Container maxWidth="md">
        <h2 className="title">Newspaper</h2>
        <Grid container alignItems="flex-end">
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModalNew}
            >
              Add New
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModalCate}
              style={{ marginLeft: 10 }}
            >
              Add Category
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
      <Modal
        open={openNew}
        onClose={handleCloseModalNew}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="c-modal1"
      >
        <div className="c-modal1__inner" style={modalInner}>
          <h3 className="c-modal1__ttl">Add new</h3>
          <form noValidate autoComplete="off">
            <Input
              placeholder="Something text"
              fullWidth
              style={{ marginBottom: 30 }}
            />
            <div style={{ textAlign: "right" }}>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </div>
          </form>
        </div>
      </Modal>
      <Dialog
        open={openCate}
        onClose={handleCloseModalCate}
      >
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form>
            <Input
              placeholder="Number"
              fullWidth
              style={{ marginBottom: 30 }}
            />
            <Input
              placeholder="Name"
              fullWidth
              style={{ marginBottom: 30 }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModalCate} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseModalCate} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
