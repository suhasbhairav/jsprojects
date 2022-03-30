import { AppBar, Box, IconButton, Button, Toolbar, Typography, Grid, Card, CardContent } from "@mui/material";
import "./App.css";
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows2 = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function App() {
  const [chartData, setChartData] = useState([
    {x:1, y: 100},
    {x:2, y: 200},
    {x:3, y: 300}
  ]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AspectRatioIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard Analytics
          </Typography>          
        </Toolbar>
      </AppBar>
    </Box>
    <div className="card-analytics">
      <Grid container spacing={1}>
        <Grid item xs={3} sm={3}>
          <Card>
            <CardContent>
              <Typography>
                Customers
              </Typography>
              <Typography>
                <PersonIcon />
              </Typography>
              <Typography>
                100
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Card>
            <CardContent>
              <Typography>
                Revenue
              </Typography>
              <Typography>
                <AttachMoneyIcon />
              </Typography>
              <Typography>
                $ 100,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Card>
            <CardContent>
              <Typography>
                Suppliers
              </Typography>
              <Typography>
                <PersonPinIcon />
              </Typography>
              <Typography>
                125
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Card>
            <CardContent>
              <Typography>
                Trucks
              </Typography>
              <Typography>
                <LocalShippingIcon />
              </Typography>
              <Typography>
                500
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid className="analytics-table" container spacing={1}>
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <Typography>
                Customer Information
              </Typography>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card>
            <CardContent>
              <Typography>
                Supplier Information
              </Typography>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid className="analytics-table" spacing={1}>
        <Grid item xs={12}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="a dense table" >
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default App;
