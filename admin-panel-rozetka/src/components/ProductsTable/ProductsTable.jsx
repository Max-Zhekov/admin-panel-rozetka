import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsThunk";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  CircularProgress,
} from "@mui/material";
import ProductsTableHead from "./ProductsTableHead";
import ProductsTableRow from "./ProductsTableRow";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <CircularProgress sx={{ m: 4 }} />;
  if (error) return <p style={{ color: red }}>{error}</p>;

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 4 }}>
      <Table>
        <ProductsTableHead />
        <TableBody
          sx={{
            "& tr:nth-of-type(odd)": {
              backgroundColor: "#4caf50",
              color: "#fff",
            },
            "& tr:nth-of-type(even)": {
              backgroundColor: "#e0e0e0",
              color: "#000",
            },
            "& td": { color: "inherit", fontWeight: 500 },
          }}>
          {items.map((product) => (
            <ProductsTableRow key={product.id} product={product} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
