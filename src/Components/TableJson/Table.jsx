import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import details from "./details.json";
import { styled } from "@mui/system";

// Styled components for custom styling
const StyledTableContainer = styled(TableContainer)({
  width: "100%",
  height: "80%",
  overflow: "auto",
  boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
  borderRadius: "8px",
  border: "0.5px solid #DDDDDD",
});

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#BED7DC", // Table header background color
  fontWeight: "bold",
  boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
  fontFamily: "monospace",
});

const StyledPagination = styled(TablePagination)`
  .MuiTablePagination-caption {
    font-family: "monospace" !important; /* Ensure monospace font */
  }
`;

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F1EEDC", // Alternating row background color
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#E5DDC5", // Alternating row background color
  },
});

export default function Tab() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    console.log("Page:", page);
    console.log("Rows per page:", rowsPerPage);
    console.log(
      "Sliced details:",
      details.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
    setPage(0);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "500px", width: "1200px" }}>
        <div>
          <StyledTableContainer
            style={{ margin: "auto", marginTop: "10px" }}
            component={Paper}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Region</StyledTableCell>
                  <StyledTableCell>Instance Name</StyledTableCell>
                  <StyledTableCell>Instance ID</StyledTableCell>
                  <StyledTableCell>Instance Type</StyledTableCell>
                  <StyledTableCell>State</StyledTableCell>
                  <StyledTableCell>Metric Type</StyledTableCell>
                  <StyledTableCell>Average Utilization</StyledTableCell>
                  <StyledTableCell>Last Activity Time</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {details
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <StyledTableRow
                      key={
                        row.last_activity_time +
                        row.instance_id +
                        row.instance_name +
                        row.average_utilization
                      }
                    >
                      <TableCell
                        style={{
                          border: "1px solid #DDDDDD",
                          fontFamily: "monospace",
                          boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
                          whiteSpace: "nowrap", // Prevent line breaks within the cell
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {row.region}
                      </TableCell>
                      <TableCell
                        style={{
                          border: "1px solid #DDDDDD",
                          fontFamily: "monospace",
                          boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
                        }}
                      >
                        {row.instance_name !== null
                          ? row.instance_name
                          : "Not Available"}
                      </TableCell>
                      <TableCell
                        style={{
                          fontFamily: "monospace",
                          boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
                          whiteSpace: "nowrap", // Prevent line breaks within the cell
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {row.instance_id}
                      </TableCell>
                      <TableCell
                        style={{
                          fontFamily: "monospace",
                          boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
                        }}
                      >
                        {row.instance_type}
                      </TableCell>
                      <TableCell
                        style={{
                          fontFamily: "monospace",
                          boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
                          fontWeight: "bolder",
                          fontSize: "0.75rem",
                          color: "black",
                          backgroundColor:
                            (row.state === "running" && "#7db58e") ||
                            (row.state === "stopped" && "#D37676"),
                          borderRadius: 8,
                          padding: "3px 5px",
                          marginTop: "25px",
                          marginLeft: "8px",
                          display: "inline-block",
                        }}
                      >
                        {row.state}
                      </TableCell>
                      <TableCell
                        style={{
                          fontFamily: "monospace",
                          boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
                        }}
                      >
                        {row.metric_type}
                      </TableCell>
                      <TableCell
                        style={{
                          fontFamily: "monospace",
                          boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
                        }}
                      >
                        {row.average_utilization !== null
                          ? row.average_utilization
                          : "NA"}
                      </TableCell>
                      <TableCell
                        style={{
                          fontFamily: "monospace",
                          boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
                        }}
                      >
                        {row.last_activity_time !== null
                          ? row.last_activity_time
                          : "NA"}
                      </TableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              sx={{
                backgroundColor: "#B3C8CF",
                border: "1px solid #BED7DC",
                fontFamily: "monospace",
              }}
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={details.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              slotProps={{
                select: {
                  style: { fontFamily: "monospace", fontWeight: "bold" },
                },
                actions: {
                  style: { fontFamily: "monospace" },
                },
              }}
            />
          </StyledTableContainer>
        </div>
      </div>
    </div>
  );
}
