import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { editProduct } from "../../features/products/productsThunk";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  textAlign: "center",
};

const EditProductModal = ({ open, handleClose, product }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: product,
  });

  useEffect(() => {
    reset(product);
  }, [product, reset]);

  const onSubmit = (data) => {
    dispatch(editProduct({ id: product.id, updateData: data }));
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h2"
          sx={{ color: "#00BC52", fontWeight: "bold" }}>
          Edit Product
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "20px" }}>
          <TextField
            fullWidth
            margin="normal"
            label="Category"
            {...register("category", { required: true })}
            error={!!errors.category}
            helperText={errors.category && "Category is required"}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name && "Name is required"}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Quantity"
            type="number"
            {...register("quantity", { required: true })}
            error={!!errors.quantity}
            helperText={errors.quantity && "Quantity is required"}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Price"
            type="number"
            {...register("price", { required: true })}
            error={!!errors.price}
            helperText={errors.price && "Price is required"}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Photo"
            {...register("photo", { required: true })}
            error={!!errors.photo}
            helperText={errors.photo && "Photo is required"}
          />

          <TextField
            fullWidth
            margin="normal"
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            {...register("description", { required: true })}
            error={!!errors.description}
            helperText={errors.description && "Description is required"}
          />

          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{ mt: 2, mr: 2 }}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default EditProductModal;
