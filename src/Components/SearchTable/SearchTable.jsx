import { faker } from "@faker-js/faker";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, InputBase, TableFooter, Typography, alpha, styled } from "@mui/material";
import { Grid } from "@mui/material";
import TablePagination from '@mui/material/TablePagination';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

let USERS = [],
  STATUS = ["Active", "Inactive", "Offline"],
  AGE = [23,25,45,67,45,34,22,26],
  ROLE = ["Admin", "Owner", "Member"];
for (let i = 0; i < 15; i++) {
  USERS[i] = {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
    status: STATUS[Math.floor(Math.random() * STATUS.length)],
    age: AGE[Math.floor(Math.random() * AGE.length)],
    role: ROLE[Math.floor(Math.random() * ROLE.length)],
    images: faker.image.avatar()
  };
}

console.log(USERS);

export default function Searchtable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [query, setQuery] = React.useState("");
  const keys= ["name", "jobTitle"];
  const showSearch = page === 0;
  const search = (data) => {
    return data.filter((item) => 
      keys.some((key) => item[key].toLowerCase().startsWith(query.toLowerCase()))
    );
  };

  const handleChangePage = (event, newPage) => {
    console.log(page)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <>
      {showSearch && <Search>
        <InputBase 
          style={{
            bottom:"6.5px",
            left:"8px",
            width:"350px",
            color:"#767c7c",
            backgroundColor:"#dfe6e7",
            borderRadius:"5px",
            paddingLeft:"5px",
            textAlign:"center",
            boxShadow: "1px 2px 1px 2px #ccc"
          }}
          placeholder="                Search For Name Or Title 🔎"
          value={query}
          onChange={(e)=> setQuery(e.target.value)}
        />
      </Search>}
      <TableContainer 
        component={Paper} 
        style={{borderRadius:15,  
        display: 'flex',
        justifyContent:'space-between'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{backgroundColor:'#dfe6e7',alignContent:'center'}}>
            <TableRow>
              <TableCell style={{fontWeight:'bold', color:'#767c7c'}}>NAME</TableCell>
              <TableCell style={{fontWeight:'bold', color:'#767c7c'}}>TITLE</TableCell>
              <TableCell style={{fontWeight:'bold', color:'#767c7c'}}>STATUS</TableCell>
              <TableCell style={{fontWeight:'bold', color:'#767c7c'}}>AGE</TableCell>
              <TableCell style={{fontWeight:'bold', color:'#767c7c'}}>ROLE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {search(USERS).length>0 && 
            search(USERS).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Grid container>
                      <Grid item lg={1.5}>
                        <Avatar src={row.images} alt={row.name} />
                      </Grid>
                      <Grid item lg={10.5}>
                        <Typography style={{fontWeight:'bold',color:'blueviolet'}}>{row.name}</Typography>
                        <Typography color='GrayText' variant="body2">{row.email}</Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Typography color='blueviolet' variant="subtitle2">{row.jobTitle}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      style={{
                        fontWeight:'bolder',
                        fontSize: '0.75rem',
                        color:'black',
                        backgroundColor:((row.status === 'Active' && '#7db58e')||
                        (row.status === 'Inactive' && '#eeaa34') || 
                        (row.status === 'Offline' && '#ff3716')),
                        borderRadius: 8,
                        padding: '3px 10px',
                        display:'inline-block'
                      }}>
                      {row.status}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {row.age}
                  </TableCell>
                  <TableCell>
                    {row.role}
                  </TableCell>
                </TableRow>
              ))}
              {search(USERS).length===0 && 
              <p style={{fontWeight:"bolder",textAlign:"right"}}>
                No users found on that name or that title
              </p>}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={search(USERS).length}
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
