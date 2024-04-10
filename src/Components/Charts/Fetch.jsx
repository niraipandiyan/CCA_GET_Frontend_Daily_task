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
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Box, FormControl, MenuItem, Select } from "@mui/material";

const COLORS = ["#E5DDC5", "#F1EEDC", "#BED7DC", "#B3C8CF","#D6DAC8","#76ABAE"];

const DataComponent = () => {
  const [data, setData] = useState("");
  const [chartType, setChartType] = useState("bar"); // State to manage selected chart type
  const [state, setState] = useState({
    activeIndex: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/6fdb4482-707c-44b9-9a1b-e1725361a864"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);


  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "50%",
        margin: "auto",
        padding: "5px",
      }}
    >
      <FormControl sx={{ 
        position:"absolute", 
        right: { xs: "0px", sm: "20px"},
        height: "4px",
        zIndex: "1",
        "& .MuiInputBase-root": {
          fontSize:{xs:"8px",sm:"14px"}, // adjust font size
          padding: "1px 2px", // adjust padding
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", // add box shadow
          borderRadius: "3px", // add border radius
          height:{xs:"18px",sm:"20px"},
          width:{xs:"60px",sm:"70px",lg:"115px"}
        },
        "& .MuiSelect-icon": {
          top: "calc(50% - 12px)", // adjust icon position vertically
          color: "gray", // change icon color
        }}}>
        <Select
          labelId="chart-type-label"
          id="chart-type-select"
          value={chartType}
          onChange={handleChartTypeChange}
        >
          <MenuItem value="bar">Bar Chart</MenuItem>
          <MenuItem value="pie">Pie Chart</MenuItem>
        </Select>
      </FormControl>
      {chartType === "pie" && <h1 style={{textAlign:"center",
      backgroundImage: "linear-gradient(to right,#76ABAE 40%, #D6DAC8 60%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"}}>Cost Spend</h1>}
      {chartType === "bar" && <h1 style={{textAlign:"center",
      backgroundImage: "linear-gradient(to right,#CB5EDC 40%, #278EF1 60%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"}}>Cost Spend</h1>}
      <ResponsiveContainer width="100%" height={300}>
        {chartType === "bar" && (
          <BarChart data={data}>
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
              dataKey="name"
              tickLine={false}
              axisLine={false}
              interval={0}
              style={{ fontFamily: "monospace", fontSize: 10 }}
            />
            <YAxis
              dataKey="cost"
              tickLine={false}
              axisLine={false}
              style={{ fontWeight: "bolder", fontFamily: "monospace" }}
            />
            <CartesianGrid vertical={false} fill="none" />
            <Tooltip />
            <Bar
              barSize={25}
              onMouseEnter={false}
              radius={3}
              type="monotone"
              dataKey="cost"
              fill="url(#colorUv)"
              stackId="1"
              activeBar={<Rectangle fill="#4584ED" />}
            />
          </BarChart>
        )}

        {chartType === "pie" && (
          <PieChart>
            <Tooltip
            animationEasing="linear"
            wrapperStyle={{
              position: "absolute",
              borderRadius: "10px",
              boxShadow: "0px 0px 5px 0px rgba(0,0.6,0.5,0.2)",
              maxWidth: "300px",
              fontSize:"12px",
              fontWeight:"bold",
              fontFamily:"monospace",
              border:"5px solid #77B0AA",
            }}/>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="50%"
              outerRadius="100%"
              fill="#8884d8"
              paddingAngle={0}
              legendType="circle"
              dataKey="cost"
            >
              {data.map((entry, index) => (
                <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]}
               />
              ))}
            </Pie>
            <Legend
              width="180px"
              iconSize="12px"
              height="110px"
              layout="vertical"
              align="right"
              verticalAlign="middle"
              wrapperStyle={{
                position: "absolute",
                padding: "10px",
                backgroundColor: "#77B0AA",
                border:"1px solid #77B0AA",
                borderRadius: "25px",
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
                maxWidth: "300px",
                fontSize:"15px",
                fontWeight:"bold",
                fontFamily:"monospace",
                color:"#D6DAC8"
              }}
            />
          </PieChart>
        )}
      </ResponsiveContainer>
    </Box>
  );
};

export default DataComponent;
