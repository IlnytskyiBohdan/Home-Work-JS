import { Formik, Form, Field } from "formik";
import { TextField, Button, Box } from "@mui/material";
import * as Yup from "yup";

const validationSchema = Yup.object({
  todo: Yup.string().min(5, "Minimum of 5 characters").required("Required field"),
});

const TodoForm = ({ addTodo }) => {
  return (
    <Formik
      initialValues={{ todo: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addTodo(values.todo);
        resetForm();
      }}
    >
      {({ isSubmitting, isValid, touched, errors }) => (
        <Form>
          <Box sx={{ display: "flex", gap: 1, maxWidth: 600, mx: "auto" }}>
            <Field
              as={TextField}
              name="todo"
              label="Enter a task"
              variant="outlined"
              fullWidth
              error={touched.todo && Boolean(errors.todo)}
              helperText={touched.todo && errors.todo}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting || !isValid}
              sx={{ alignSelf: "center", width: "25%" }}
            >
              Add task
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
