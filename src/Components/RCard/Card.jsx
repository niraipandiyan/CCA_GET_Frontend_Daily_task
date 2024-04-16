import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import HeaderCard from "./sub/HeaderCard";

const data1 = [{ name: "L1", value: 25 }];

export default function Card(){
    return(
        <HeaderCard
        title="EC2"
        subtitle="30+ Instances"
        priceValue="$5,380.14"
        percentage="50%"
        trendingStatus={"up"}
      ></HeaderCard>
    )
}