import { Dialog, DialogActions, DialogContent, DialogTitle, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "../Buttons/CustomButton/CustomButton";
import InputText from "../InputText/InputText";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ProductForm = ({ open, onClose, onSubmit, product }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (product) {
      reset(product);
    } else {
      reset({
        category: "",
        name: "",
        quantity: "",
        price: "",
        image: "",
        description: "",
      });
    }
  }, [open, product, reset]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <Box
        sx={{
          backgroundColor: "#E0E0E0",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <DialogTitle sx={{ color: "gray", fontWeight: "bold" }}>
          {product ? "Edit product" : "Add product"}
        </DialogTitle>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ backgroundColor: "#E0E0E0" }}>
        <InputText
          label='Category'
          name='category'
          register={register}
          errors={errors}
          sx={{ mb: 2 }}
          validation={{
            required: "Category is required",
            pattern: {
              value: /^[a-zA-Zа-яА-ЯёЁ\s]+$/,
              message: "Only letters are allowed",
            },
          }}
        />
        <InputText
          label='Name'
          name='name'
          register={register}
          errors={errors}
          sx={{ mb: 2 }}
          validation={{
            required: "Name is required",
            pattern: {
              value: /^[a-zA-Zа-яА-ЯёЁ0-9\s.,!?-]*$/,
              message: "Invalid characters in description",
            },
          }}
        />
        <InputText
          label='Quantity'
          name='quantity'
          register={register}
          errors={errors}
          sx={{ mb: 2 }}
          validation={{
            required: "Quantity is required",
            pattern: {
              value: /^\d+$/,
              message: "Only numbers are allowed",
            },
          }}
        />
        <InputText
          label='Price'
          name='price'
          register={register}
          errors={errors}
          sx={{ mb: 2 }}
          validation={{
            required: "Quantity is required",
            pattern: {
              value: /^\d+$/,
              message: "Only numbers are allowed",
            },
          }}
        />
        <InputText
          label='Image'
          name='image'
          register={register}
          errors={errors}
          sx={{ mb: 2 }}
          type='file'
        />
        <InputText
          label='Description'
          name='description'
          register={register}
          errors={!errors}
          sx={{ mb: 2 }}
          multiline
          minRows={4}
          validation={{
            pattern: {
              value: /^[a-zA-Zа-яА-ЯёЁ0-9\s.,!?-]*$/,
              message: "Invalid characters in description",
            },
          }}
        />
      </DialogContent>

      <DialogActions
        sx={{ justifyContent: "center", backgroundColor: "#E0E0E0", paddingBottom: 3 }}>
        <CustomButton
          variant='contained'
          color='inherit'
          onClick={onClose}
          sx={{ backgroundColor: "#8D8D8D", color: "white", width: 160 }}>
          Cancel
        </CustomButton>
        <CustomButton
          type='submit'
          variant='contained'
          color='success'
          onClick={handleSubmit(onSubmit)}
          sx={{ width: 160 }}>
          Submit
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;
