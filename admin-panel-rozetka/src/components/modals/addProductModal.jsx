import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/products/productsThunk";

import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const addProductModal = ({ open, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    console.log(data);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Product
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "20px" }}>
          <TextField
            fullWidth
            margin="normal"
            label="Category"
            variant="outlined"
            {...register("category", { required: true })}
            error={!!errors.category}
            helperText={errors.category && "Category is required"}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Name"
            variant="outlined"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name && "Name is required"}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Quantity"
            variant="outlined"
            {...register("quantity", { required: true })}
            error={!!errors.quantity}
            helperText={errors.quantity && "Quantity is required"}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Price"
            variant="outlined"
            {...register("price", { required: true })}
            error={!!errors.price}
            helperText={errors.price && "Price is required"}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Photo"
            variant="outlined"
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
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default addProductModal;
