import { AppBar, Box, IconButton, Button, Toolbar, Typography, Grid, Card, CardContent } from "@mui/material";
import "./App.css";
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function App() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
    </div>
    </div>
  );
}

export default App;
