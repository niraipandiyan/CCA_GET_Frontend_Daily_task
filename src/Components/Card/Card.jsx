import React, { useState } from "react";
import { Card, CardContent, Typography, CardHeader, Grid, Button } from "@mui/material";
import details from "./details.json";

export default function CardComp() {
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
    <div style={{ maxHeight: "490px", overflowY: "auto" }}>
      <Grid container columnGap={25} spacing={3}>
        {rowData.map((row, index) => (
          <Grid item key={row.instance_id} xs={12} sm={6} md={4} lg={3}>
            <Card
              style={{
                margin: 10,
                border: "1px solid #CB5EDC",
                borderRadius: "9px",
                height: "210px",
                width: "400px",
                backgroundImage: "linear-gradient(to bottom left, #F0EBE3 , #F2D7D9 )",
                boxShadow: "5px 2px 4px rgba(20, 20, 10, 10)",
                position: "relative", // Added for positioning the view button
              }}
            >
              <CardContent>
                <Typography variant="h5" style={{ fontWeight: "bold", textDecoration: "capitalize" }}>
                  {row.instance_name || "Not Available"}
                </Typography>
              </CardContent>
              <Button
                variant="outlined"
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#000000",
                  backgroundColor: row.state === "running" ? "#B0C5A4" : row.state === "stopped" ? "#D37676" : "#FFFFFF",
                  height: "26px",
                  width: "110px",
                  marginTop: "10px",
                  borderRadius: "999px",
                  border: "0.5px solid #9BB0C1",
                }}
              >
                {row.state}
              </Button>
              <CardContent>
                <Typography variant="h5">Metrics</Typography>
                {row.cpu && (
                  <Typography variant="body2" color="CaptionText" component="p">
                    CPU Utilization: {row.cpu}
                  </Typography>
                )}
                {row.disk && (
                  <Typography variant="body2" color="CaptionText" component="p">
                    Disk Utilization: {row.disk}
                  </Typography>
                )}
                {row.memory && (
                  <Typography variant="body2" color="CaptionText" component="p">
                    Memory Utilization: {row.memory}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
