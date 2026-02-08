import { Box, Grid, IconButton, Paper, Typography } from "@mui/material"
import type { Item } from "../../app/models/Basket"
import { Add, Close, Remove } from "@mui/icons-material"
import { useAddBasketItemMutation, useRemoveBasketItemMutation } from "./basketApi"
import { currencyFormat } from "../../lib/util"

  

  type Props ={
    item:Item
  }

export default function BasketItem({item}:Props) {
    const [removeBasketItem]=useRemoveBasketItemMutation();
    const [addBasketItem]=useAddBasketItemMutation();
  return (
     <Paper sx={{height:140,borderRadius:3,display:'flex',justifyContent:'space-between',alignItems:'center',mb:2 ,width:'100%'}}   >
        <Box display='flex' alignItems='center' >
             <Box component='img' src={item.pictureUrl} alt={item.name} sx={{height:100,width:100,objectFit:'cover',borderRadius:'4px',ml:4,mr:8}} />
             <Box display='flex' flexDirection='column' gap={1} >
                     <Typography variant="h6" sx={{textTransform:'uppercase'}} >
                        {item.name}
                     </Typography>
                     <Box display='flex' gap={3} alignItems='center'>
                        <Typography  sx={{fontSize:'1.1rem'}} >
                            {currencyFormat(item.price)} x {item.quantity}
                        </Typography>
                        <Typography  sx={{fontSize:'1.1rem'}} color='primary' >
                            {currencyFormat(item.price * item.quantity)}
                        </Typography>
                    </Box>
                    <Grid container spacing={2} alignItems='center'>
                         <IconButton color="error" size='small' sx={{border:1,borderRadius:1,minWidth:0}} onClick={()=>removeBasketItem({productId:item.productId,quantity:1})}><Remove /></IconButton>
                         <Typography variant="h6">{item.quantity}</Typography>
                         <IconButton color="success" size='small' sx={{border:1,borderRadius:1,minWidth:0}} onClick={()=>addBasketItem({product:item,quantity:1})}><Add /></IconButton>
                    </Grid>
             </Box>
        </Box>
          <IconButton color="error" size='small' sx={{border:1,borderRadius:3,minWidth:0,alignSelf:'start' ,mr:1,mt:1}} onClick={()=>removeBasketItem({productId:item.productId,quantity:item.quantity})}><Close /></IconButton>
     </Paper>
  )
}
