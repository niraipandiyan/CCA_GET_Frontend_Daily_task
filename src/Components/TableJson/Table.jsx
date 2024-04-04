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
  height: "500px",
  overflow: "auto",
  boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
  borderRadius: "8px",
  border: "0.5px solid #DDDDDD",
});

const FixedTableHeader = styled(TableHead)({
  position: "sticky",
  top: 0,
  zIndex: 100,
  backgroundColor: "#BED7DC",
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
  const groupedData = details.reduce((res, curr) => {
    if (!res[curr.instance_id]) {
      res[curr.instance_id] = {
        instance_id: curr.instance_id,
        region: curr.region,
        instance_name: curr.instance_name,
        instance_type: curr.instance_type,
        state: curr.state,
        last_activity_time: curr.last_activity_time,
      };
    }
    res[curr.instance_id][curr.metric_type] = curr.average_utilization;
    return res;
  }, {});

  const rowData = Object.values(groupedData);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div>
          <StyledTableContainer style={{ margin: "auto" }} component={Paper}>
            <Table>
              <FixedTableHeader>
                <TableRow>
                  <StyledTableCell>Region</StyledTableCell>
                  <StyledTableCell>Instance Name</StyledTableCell>
                  <StyledTableCell>Instance ID</StyledTableCell>
                  <StyledTableCell>Instance Type</StyledTableCell>
                  <StyledTableCell>State</StyledTableCell>
                  <StyledTableCell>CPU</StyledTableCell>
                  <StyledTableCell>Disk</StyledTableCell>
                  <StyledTableCell>Memory</StyledTableCell>
                  <StyledTableCell>Last Activity Time</StyledTableCell>
                </TableRow>
              </FixedTableHeader>
              <TableBody>
                {rowData.map((row) => (
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
                      {row.cpu || "NA"}
                    </TableCell>
                    <TableCell
                      style={{
                        fontFamily: "monospace",
                        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
                      }}
                    >
                      {row.disk || "NA"}
                    </TableCell>
                    <TableCell
                      style={{
                        fontFamily: "monospace",
                        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
                      }}
                    >
                      {row.memory || "NA"}
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
          </StyledTableContainer>
        </div>
      </div>
    </div>
  );
}
