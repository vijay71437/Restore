
import { useParams } from "react-router-dom";
import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import { useGetProductQuery } from "./catalogAPI";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const {data:product, isLoading} = useGetProductQuery(id ? parseInt(id!):0);



  if (!product ||isLoading) return <Typography>Loading...</Typography>;

  const productDetails = [
    { label: "Name", value: product.name },
    { label: "Description", value: product.description },
    { label: "Type", value: product.type },
    { label: "Brand", value: product.brand },
    { label: "Quantity in stock", value: product.quantityInStock },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={6}>
        {/* Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src={product.pictureUrl}
            alt={product.name}
            style={{ width: "100%" }}
          />
        </Grid>

        {/* Details */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h3">{product.name}</Typography>
          <Divider sx={{ mb: 2 }} />

          <Typography variant="h4" color="secondary" gutterBottom>
            ${(product.price / 100).toFixed(2)}
          </Typography>

          <TableContainer>
            <Table sx={{ "& td": { fontSize: "1rem" } }}>
              <TableBody>
                {productDetails.map((detail, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {detail.label}
                    </TableCell>
                    <TableCell>{detail.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Actions */}
          <Grid container spacing={2} mt={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                type="number"
                label="Quantity in basket"
                fullWidth
                defaultValue={1}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{ height: 56 }}
              >
                Add to basket
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
} 
