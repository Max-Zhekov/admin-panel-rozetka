import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsThunk";
import { deleteProduct } from "../../features/products/productsThunk";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  CircularProgress,
} from "@mui/material";
import ProductsTableHead from "./ProductsTableHead";
import ProductsTableRow from "./ProductsTableRow";
import DeleteProductModal from "../modals/DeleteProductModal";
import EditProductModal from "../modals/EditProductModal";
import { useNavigate } from "react-router-dom";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading, error, needReload, rejected } = useSelector(
    (state) => state.products
  );

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    if (needReload || firstRun) {
      dispatch(fetchProducts());
      setFirstRun(false);
    }

    if (rejected) {
      navigate("/");
    }
  }, [dispatch, needReload, firstRun, rejected]);

  const handleOpenDeleteModal = (id) => {
    setSelectedProductId(id);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedProductId(null);
  };

  const handleConfirmDelete = () => {
    if (selectedProductId) {
      dispatch(deleteProduct(selectedProductId));
    }
    handleCloseDeleteModal();
  };

  const handleOpenEditModal = (product) => {
    setProductToEdit(product);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setProductToEdit(null);
    setEditModalOpen(false);
  };

  if (loading) return <CircularProgress sx={{ m: 4 }} />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
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
              <ProductsTableRow
                key={product.id}
                product={product}
                onAskDelete={handleOpenDeleteModal}
                onAskEdit={handleOpenEditModal}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <DeleteProductModal
        open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />

      {productToEdit && (
        <EditProductModal
          open={editModalOpen}
          handleClose={handleCloseEditModal}
          product={productToEdit}
        />
      )}
    </>
  );
};

export default ProductsTable;
