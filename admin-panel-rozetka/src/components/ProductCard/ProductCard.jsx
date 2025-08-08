import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        border: "2px solid #34B267",
        borderRadius: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 1,
        backgroundColor: "#fff",
        maxWidth: "200px",
      }}>
      <CardMedia
        component="img"
        height="140"
        image={product.photo}
        alt={product.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/no-photo.jpg";
        }}
        sx={{
          objectFit: "contain",
          margin: "0 auto",
          maxHeight: 180,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      />

      <CardContent sx={{ p: 1, flexGrow: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{ textAlign: "center", fontWeight: 500, minHeight: 40 }}>
          {product.name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 1,
            alignItems: "center",
          }}>
          <Typography sx={{ fontWeight: 700, color: "orange", fontSize: 18 }}>
            {product.price}$
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            Кількість: {product.quantity}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#00BC52",
            fontWeight: 600,
            fontSize: 14,
          }}>
          <ShoppingCartIcon sx={{ fontSize: 20, mr: 1 }} />
          Готовий до відправки
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
