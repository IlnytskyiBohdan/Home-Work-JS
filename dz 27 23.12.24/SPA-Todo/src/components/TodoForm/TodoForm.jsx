import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";

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
      {({ isSubmitting, isValid }) => (
        <Form className="todo-form">
          <div>
            <Field
              as={TextField}
              name="todo"
              label="Enter a task"
              variant="outlined"
              className="todo-input blue-theme"
            />
            <ErrorMessage
              name="todo"
              component="div"
              className="error-message"
            />
          </div>

          <Button
            variant="outlined"
            type="submit"
            disabled={isSubmitting || !isValid}
            className="todo-button"
          >
            Add task
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
