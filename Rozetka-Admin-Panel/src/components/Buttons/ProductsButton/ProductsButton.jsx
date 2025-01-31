import CustomButton from "../CustomButton/CustomButton";

const ProductsButton = ({ label, startIcon, onClick }) => {
  return (
    <CustomButton
      color='inherit'
      variant='contained'
      onClick={onClick}
      startIcon={startIcon}
      sx={{
        backgroundColor: "white",
        color: "green",
        width: "200px",
        height: "50px",
        "&:hover": { backgroundColor: "#f5f5f5" },
      }}>
      {label}
    </CustomButton>
  );
};

export default ProductsButton;
