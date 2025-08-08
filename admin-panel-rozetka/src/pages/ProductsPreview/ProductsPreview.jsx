import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsThunk";
import { Grid, CircularProgress, Box } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsPreview = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#34B267",
        px: 3,
        py: 4,
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 4,
        }}>
        <img
          src="./logo-products.svg"
          alt="Rozetka Logo"
          style={{ height: 40, marginRight: 12 }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}>
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductsPreview;
