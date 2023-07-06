// import "./styles.css";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  Label,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ResponsiveContainer } from "recharts";
const data = [
  {
    index:0,
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    index:1,

    name: "Page B",
    uv: 3000,
    pv: 4398,
  },
  {index:3,
    name: "Page C",
    uv: 2000,
    pv: 5800,
  },
  {index:4,
    name: "Page D",
    uv: 2780,
    pv: 2908,
  },
  {index:5,
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {index:6,
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {index:7,
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
  {index:8,
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {index:9,
    name: "Page B",
    uv: 3500,
    pv: 2398,
  },
  {index:10,
    name: "Page C",
    uv: 2600,
    pv: 9800,
  },
  {index:11,
    name: "Page D",
    uv: 3780,
    pv: 3908,
  },
  {index:12,
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {index:13,
    name: "Page F",
    uv: 4390,
    pv: 3800,
  },
  { index:14,
    name: "Page K",
    uv: 3490,
    pv: 3300,
  },
  {index:15,
    name: "Page L",
    uv: 3490,
    pv: 4300,
  },
  {index:16,
    name: "Page M",
    uv: 5490,
    pv: 2300,
  },
];

export default function MixedChart() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleMouseEnter = (_, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(-1);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if ( typeof payload[0] !== 'undefined') {
      let index = Object.values(payload[0].payload)
      setActiveIndex(index[0]-1)
    }
    // if (active && payload && payload.length) {
      return <div className="custom-tooltip" >

      </div>;
    // }
  };

  const LineCustomizedLabel = (props) => {
    const { x, y, stroke, value,index } = props;
    return (
      <text
        x={x}
        y={y}
        dy={-15}
        fill="white"
        fontSize={10}
        textAnchor="middle"
      >
        {activeIndex ===index? value:''}
      </text>
    );
  };
  const BarCustomizedLabel = (props) => {
    const { x, y, width, height, value,index } = props;
    const radius = 10;

    return (
      <g>
        <text
          x={x + width / 2}
          y={y - radius - 5}
          fill="white"
          textAnchor="middle"
          dominantBaseline="top"
        >
        {activeIndex ===index? value:''}

        </text>
      </g>
    );
  };
  return (
    <div onMouseLeave={handleMouseLeave}>
      <ResponsiveContainer aspect={8}>
        <LineChart
          width={500}
          height={300}
          data={data}
          syncId="anyId"

          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          onMouseEnter={handleMouseEnter}
        >
          <Tooltip   content={<CustomTooltip />} />
          <Line
            dot={false}
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="#8884d8"
          >
            <LabelList content={<LineCustomizedLabel />} />
          </Line>
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer aspect={7}>
        <BarChart
          width={500}
          height={300}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis display="none" scale="point" />
          <Tooltip
            contentStyle={{
              display: "none",
            }}
          />
          <Bar
            dataKey="pv"
            stroke="#82ca9d"
            fill="#82ca9d"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <LabelList dataKey="pv" content={BarCustomizedLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
