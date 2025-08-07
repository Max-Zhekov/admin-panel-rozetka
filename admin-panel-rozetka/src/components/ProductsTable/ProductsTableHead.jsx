import { TableCell, TableHead, TableRow } from "@mui/material";

const ProductsTableHead = () => {
  return (
    <TableHead>
      <TableRow
        sx={{
          backgroundColor: "#2e7d32",
          "& th": {
            color: "white",
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        }}>
        <TableCell>ID</TableCell>
        <TableCell>Category</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Quantity</TableCell>
        <TableCell>Price</TableCell>
        <TableCell align="center">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ProductsTableHead;
