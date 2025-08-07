import { TableRow, TableCell, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductsTableRow = ({ product }) => {
  return (
    <TableRow>
      <TableCell>{product.id}</TableCell>
      <TableCell>{product.category}</TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.quantity}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell align="center">
        <IconButton>
          <EditIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton>
          <DeleteIcon sx={{ color: "black" }} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ProductsTableRow;
