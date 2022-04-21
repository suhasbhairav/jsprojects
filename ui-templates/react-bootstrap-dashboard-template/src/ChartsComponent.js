import React, { useState, useEffect } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";

const ChartsComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData([{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }]);
  }, []);

  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default ChartsComponent;
