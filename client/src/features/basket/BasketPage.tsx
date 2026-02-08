import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useFetchBasketQuery } from "./basketApi";
import BasketItem from "./BasketItem";
import OrderSummary from "../../app/shared/components/OrderSummary";


export default function BasketPage() {
    const {data,isLoading}=useFetchBasketQuery();
    if(isLoading) return <Typography variant="h3" >Loading basket...</Typography>
    if(!data || data.items.length === 0) return <Typography variant="h3" >Your basket is empty</Typography>

  return (
    <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
            {data.items.map(item=>(
               <BasketItem key={item.productId} item={item} />
            ))}
        </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <OrderSummary />
            </Grid>
   
    </Grid>
  )
}
