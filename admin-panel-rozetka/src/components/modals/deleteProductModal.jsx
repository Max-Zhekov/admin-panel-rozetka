import { Modal, Box, Typography, Button } from "@mui/material";

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

const DeleteProductModal = ({ open, handleClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          variant="h6"
          sx={{
            color: "#00BC52",
            fontWeight: "bold",
            mb: 4,
          }}>
          Are u sure you want to delete this product?
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              backgroundColor: "#d9d9d9",
              color: "#fff",
              fontWeight: "bold",
              px: 4,
              "&:hover": {
                backgroundColor: "#bfbfbf",
              },
            }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={onConfirm}
            sx={{
              backgroundColor: "red",
              color: "#fff",
              fontWeight: "bold",
              px: 4,
              "&:hover": {
                backgroundColor: "#cc0000",
              },
            }}>
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteProductModal;
