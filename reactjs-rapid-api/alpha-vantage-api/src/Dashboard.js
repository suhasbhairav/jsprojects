import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const getTSIntraday = async () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        symbol: "MSFT",
        function: "TIME_SERIES_INTRADAY",
        interval: "5min",
        output_size: "compact",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        "X-RapidAPI-Key": "768a7a35f5mshbe332da2ffe63acp19162djsn465cb64e6088",
      },
    };

    let response = await axios(options);
    setData(response.data["Time Series (5min)"]);
    console.log(response.data["Time Series (5min)"]);
    
  };

  useEffect(() => {
    getTSIntraday();
  }, []);

  return (
    <div>
        {data && Object.keys(data).map((header) =>
            <div>{header}: {
                Object.keys(data[header]).map((subData) => 
                    data[header][subData]
                )
            }</div>
        )}
    </div>
  );
};

export default Dashboard;
