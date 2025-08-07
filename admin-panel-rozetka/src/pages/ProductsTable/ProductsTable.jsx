import s from "./productsTable.module.css";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import ProductsTable from "../../components/ProductsTable/ProductsTable"; // ✅ ВАЖНО

const ProductsTablePage = () => {
  const navigate = useNavigate();

  const handlePreviewClick = () => {
    navigate("/productsPreview");
  };

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <img src="./logo-products.svg" alt="Logo" />
      </div>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          padding: "30px 70px",
        }}>
        <Button
          variant="contained"
          startIcon={
            <PersonOutlineIcon
              sx={{ fill: "#000", width: "25px", height: "25px" }}
            />
          }
          onClick={handlePreviewClick}
          sx={{
            background: "#fff",
            color: "#05BC52",
            fontWeight: "700",
            fontSize: "16px",
          }}>
          Preview
        </Button>

        <Button
          variant="contained"
          startIcon={
            <AddIcon sx={{ fill: "#000", width: "25px", height: "25px" }} />
          }
          sx={{
            background: "#fff",
            color: "#05BC52",
            fontWeight: "700",
            fontSize: "16px",
          }}>
          Add product
        </Button>
      </Stack>

      <ProductsTable />
    </div>
  );
};

export default ProductsTablePage;
