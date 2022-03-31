
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function App() {
  return (
    <div>
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
          <Button color="inherit">
            <ShoppingCartIcon />Shopping Cart</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div >
    <Grid className="shop-items" container spacing={2}>
    <Grid item xs={3}>      
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
    </Grid>
    <Grid className="shop-items" container spacing={2}>
    <Grid item xs={3}>      
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
    </Grid>
    <Grid className="shop-items" container spacing={2}>
    <Grid item xs={3}>      
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
    </Grid>
    <Grid className="shop-items" container spacing={2}>
    <Grid item xs={3}>      
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branded shoes with amazing comfort. This is a top-seller in its category.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
      </Grid>
    </Grid>      
        
    </div>
    </div>
  );
}

export default App;
