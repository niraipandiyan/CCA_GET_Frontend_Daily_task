import { faker } from "@faker-js/faker";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Avatar,
  Dialog,
  InputBase,
  MenuItem,
  Modal,
  Select,
  TableFooter,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { Grid } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import Button from "@mui/material/Button";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

let USERS = [],
  STATUS = ["Active", "Inactive", "Offline"],
  AGE = [23, 25, 45, 67, 45, 34, 22, 26],
  ROLE = ["Admin", "Owner", "Member"];
for (let i = 0; i < 15; i++) {
  USERS[i] = {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
    status: STATUS[Math.floor(Math.random() * STATUS.length)],
    age: AGE[Math.floor(Math.random() * AGE.length)],
    role: ROLE[Math.floor(Math.random() * ROLE.length)],
    images: faker.image.avatar(),
  };
}

console.log(USERS);

export default function Addtable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [query, setQuery] = React.useState("");
  const [showUserModal, setShowUserModal] = React.useState(false);
  const [userData, setUserData] = React.useState(USERS);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    jobTitle: "",
    status: "",
    age: "",
    role: "",
  });
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const keys = ["name", "jobTitle"];
  const showSearch = page === 0;
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) =>
        item[key].toLowerCase().startsWith(query.toLowerCase())
      )
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleAddUserClick = () => {
    setShowUserModal(true);
  };

  const handleCloseModal = () => {
    setShowUserModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = () => {
    setUserData((prevData) => [
      ...prevData,
      {
        name: formData.name,
        email: formData.email,
        jobTitle: formData.jobTitle,
        status: formData.status,
        age: formData.age,
        role: formData.role,
        images: faker.image.avatar(),
      },
    ]);
    setFormData({
      name: '',
      jobTitle: '',
      status: '',
      age: '',
      role: ''
    });
    console.log(userData);
    setShowUserModal(false);
    setDialogOpen(true);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {showSearch && (
        <Search>
          <InputBase
            style={{
              bottom: "6.5px",
              left: "8px",
              width: "350px",
              color: "#767c7c",
              backgroundColor: "#dfe6e7",
              borderRadius: "5px",
              paddingLeft: "5px",
              textAlign: "center",
              boxShadow: "1px 2px 1px 2px #ccc",
              fontFamily:"monospace"
            }}
            placeholder="      Search For Name Or Title 🔎"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            sx={{
              left: "20px",
              bottom: "6px",
              backgroundColor: "#dfe6e7",
              color: "#603601",
              border: "1px solid #94B49F",
              "&:hover": {
                backgroundColor: "#789c91", // Change background color on hover
                color: "#fff", // Change text color on hover
              },
              fontFamily:"monospace"
            }}
            variant="contained"
            onClick={handleAddUserClick}
          >
            Add User
          </Button>
          {showUserModal && (
            <Modal
              open={showUserModal}
              onClose={handleCloseModal}
              style={{
                position: "fixed",
                top: "40%",
                left: "40%",
                transform: "translate(-50%, -50%)",
              }}
              hideBackdrop
            >
              <form
                style={{
                  display: "grid",
                  gap: "15px",
                  padding: "80px",
                  backgroundColor: "#dfe6e7",
                  borderRadius: "6px",
                  marginLeft: "300px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  border:"2px solid gray"
                }}
              >
                <h2 style={{ textAlign: "center", fontFamily: "monospace" }}>
                  Enter User Details
                </h2>
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Name"
                  style={{
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: "#DDDDDD",
                    fontFamily: "serif",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  required
                />

                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  placeholder="Email"
                  style={{
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: "#DDDDDD",
                    fontFamily: "serif",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  required
                />

                <input
                  type="text"
                  name="jobTitle"
                  onChange={handleInputChange}
                  placeholder="Title"
                  style={{
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: "#DDDDDD",
                    fontFamily: "serif",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  required
                />
                <Select
                  value={formData.status}
                  onChange={handleInputChange}
                  name="status"
                  placeholder="Status"
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: "#DDDDDD",
                    height: "30px",
                    fontFamily: "serif",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  required
                  displayEmpty
                >
                  <MenuItem disabled value="">
                    Status
                  </MenuItem>
                  {STATUS.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
                <input
                  type="number"
                  placeholder="Age"
                  name="age"
                  onChange={handleInputChange}
                  style={{
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: "#DDDDDD",
                    fontFamily: "serif",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  required
                />
                <Select
                  value={formData.role}
                  onChange={handleInputChange}
                  name="role"
                  placeholder="Role"
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: "#DDDDDD",
                    color: "black",
                    height: "30px",
                    fontFamily: "serif",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  required
                  displayEmpty
                >
                  <MenuItem disabled value="">
                    Role
                  </MenuItem>
                  {ROLE.map((role) => (
                    <MenuItem key={role} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#DDDDDD",
                      color: "black",
                      fontFamily: "monospace",
                      border: "1px solid black",
                      borderRadius: "4px ",
                      "&:hover": {
                        backgroundColor: "#789c91",
                        color: "#fff", 
                      },
                    }}
                    onClick={handleSubmit}
                    disabled={
                      !formData.name ||
                      !formData.email ||
                      !formData.jobTitle ||
                      !formData.status ||
                      !formData.age ||
                      !formData.role
                    }
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#DDDDDD",
                      color: "black",
                      fontFamily: "monospace",
                      border: "1px solid black",
                      borderRadius: "4px ",
                      "&:hover": {
                        backgroundColor: "#789c91",
                        color: "#fff", 
                      },
                    }}
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Modal>
          )}
          <Dialog
            open={dialogOpen}
            onClose={handleClose}
            PaperProps={{
              style: {
                borderRadius: 10,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                
              },
            }}
          >
            <DialogContent>
              <DialogContentText style={{fontFamily: "monospace", color:"black"}}id="alert-dialog-description">
                User added Successfully!!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                autoFocus
                style={{
                  backgroundColor: "#789c91", // Button background color
                  color: "#fff", // Button text color
                  borderRadius: 5, // Button border radius
                }}
              >
                OKAY
              </Button>
            </DialogActions>
          </Dialog>
        </Search>
      )}

      <TableContainer
        component={Paper}
        style={{
          borderRadius: 15,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            style={{ backgroundColor: "#dfe6e7", alignContent: "center" }}
          >
            <TableRow>
              <TableCell style={{ fontWeight: "bold", color: "#767c7c" }}>
                NAME
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#767c7c" }}>
                TITLE
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#767c7c" }}>
                STATUS
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#767c7c" }}>
                AGE
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#767c7c" }}>
                ROLE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {search(userData).length > 0 &&
              search(userData)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0,  } }}
                  >
                    <TableCell component="th" scope="row">
                      <Grid container>
                        <Grid item lg={1.5}>
                          <Avatar src={row.images} alt={row.name} />
                        </Grid>
                        <Grid item lg={10.5}>
                          <Typography
                            style={{ fontWeight: "bold", color:"#789c91" }}
                          >
                            {row.name}
                          </Typography>
                          <Typography color="GrayText" variant="body2">
                            {row.email}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell>
                      <Typography color="#789c91" variant="subtitle2">
                        {row.jobTitle}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        style={{
                          fontWeight: "bolder",
                          fontSize: "0.75rem",
                          color: "black",
                          backgroundColor:
                            (row.status === "Active" && "#7db58e") ||
                            (row.status === "Inactive" && "#eeaa34") ||
                            (row.status === "Offline" && "#ff3716"),
                          borderRadius: 8,
                          padding: "3px 10px",
                          display: "inline-block",
                        }}
                      >
                        {row.status}
                      </Typography>
                    </TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.role}</TableCell>
                  </TableRow>
                ))}
            {search(userData).length === 0 && (
              <p style={{ fontWeight: "bolder", textAlign: "right" }}>
                No users found on that name or that title
              </p>
            )}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={search(userData).length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
