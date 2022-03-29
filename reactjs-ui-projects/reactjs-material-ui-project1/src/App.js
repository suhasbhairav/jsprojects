import { AppBar, Box, IconButton, Button, Toolbar, Typography } from "@mui/material";
import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

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
    </div>
  );
}

export default App;
