import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Label } from '@mui/icons-material';
import ProductDetails from './ProductDetails';
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="success" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <AccountTreeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce Shop
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shoes
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            T-Shirts
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mobile Phones
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jeans
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Books
          </Typography>
          <Button color="inherit">
            <ShoppingCartIcon />Shopping Cart</Button>
        </Toolbar>
      </AppBar>
    </Box>    
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
