import { TableRow, TableCell, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductsTableRow = ({ product, onAskDelete, onAskEdit }) => {
  return (
    <TableRow>
      <TableCell>{product.id}</TableCell>
      <TableCell>{product.category}</TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.quantity}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell align="center">
        <IconButton onClick={() => onAskEdit(product)}>
          <EditIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton onClick={() => onAskDelete(product.id)}>
          <DeleteIcon sx={{ color: "black" }} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ProductsTableRow;
