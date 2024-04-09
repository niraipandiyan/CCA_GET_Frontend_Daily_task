import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
} from "recharts";

import { Box } from "@mui/material";

const DataComponent = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/ce654693-2ba0-4528-b9f5-6d2d61be1bb4"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "75%", sm: "400px", md: "600px", lg: "800px" },
        height: { xs: "150px", sm: "180px", md: "260px", lg: "300px" },
        margin: "auto",
        padding: "5px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <h2 style={{ textAlign: "center", background: "linear-gradient(90deg, #CB5EDC 40%, #278EF1 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Cost spent</h2>
        <BarChart
          data={data}
        >
          <defs>
            <linearGradient
              id="colorUv"
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              spreadMethod="reflect"
            >
              <stop offset="0" stopColor="#CB5EDC" />
              <stop offset="1" stopColor="#278EF1" />
            </linearGradient>
          </defs>
          <XAxis 
          dataKey="service" 
          tickLine={false} 
          axisLine={false}
          interval={0}
          style={{ fontFamily:"monospace",fontSize: 10 }} />
          <YAxis
            dataKey="Cost"
            tickLine={false}
            axisLine={false}
            style={{ fontWeight: "bolder", fontFamily:"monospace" }}
          />
          <CartesianGrid vertical={false} fill="none" />
          <Tooltip />
          <Bar
            on
            barSize={25}
            onMouseEnter={false}
            radius={3}
            type="monotone"
            dataKey="Cost"
            fill="url(#colorUv)"
            stackId="1"
            activeBar={<Rectangle fill="#4584ED" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default DataComponent;
