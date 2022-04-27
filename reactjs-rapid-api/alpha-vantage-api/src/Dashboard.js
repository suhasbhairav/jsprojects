import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState(null)

  const createDataForTable = (col1, col2, col3, col4, col5, col6) => {
      return {col1, col2, col3, col4, col5, col6};
  }

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
    let rows = Array()
    let row = Array()
    let headers = Array()
    console.log(response.data);
    //setData(response.data["Time Series (5min)"]);
        let rowData = response.data["Time Series (5min)"]
        /*Object.keys(rowData).map((header) => {
            headers.push(header)
        });*/

        Object.keys(rowData).map((header) => {
            //console.log(header);
            rows.push(createDataForTable(
                header,
                rowData[header]["1. open"],
                rowData[header]["2. high"],
                rowData[header]["3. low"],
                rowData[header]["4. close"],
                rowData[header]["5. volume"]
            ));     
        });
        console.log(rows);
        setData(rows);
    
  };

  useEffect(() => {
    getTSIntraday();
  }, []);

  return (
    <div>
        {data &&  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Time</TableCell>  
            <TableCell align="right">Open</TableCell>
            <TableCell align="right">Close</TableCell>
            <TableCell align="right">High</TableCell>
            <TableCell align="right">Low</TableCell>
            <TableCell align="right">Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">{row.col1}</TableCell>
              <TableCell align="right">{row.col2}</TableCell>
              <TableCell align="right">{row.col3}</TableCell>
              <TableCell align="right">{row.col4}</TableCell>
              <TableCell align="right">{row.col5}</TableCell>
              <TableCell align="right">{row.col6}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
    </div>
  );
};

export default Dashboard;
