import { SearchOff } from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function NotFound() {
  return (
 <Paper 
 sx={{height:400,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',p:6}}>
    <SearchOff sx={{fontSize:100}}  color='primary' />
     <Typography variant="h3"  gutterBottom>
        Oops - we couldn't find what you are looking for
     </Typography>
    <Button fullWidth component={Link} to='/catalog' >
        Go back to shop
    </Button>
 </Paper>
  )
}
