import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";

const validationSchema = Yup.object({
  task: Yup.string().required("Task is required").min(5, "Minimum 5 characters"),
});

export default function TodoForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ task: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values.task);
        resetForm();
      }}
    >
      {({ errors, touched, isValid }) => (
        <Form className="todo-form">
          <div className="todo-input">
            <Field
              name="task"
              label="Add Task"
              as={CustomInput}
              error={touched.task && Boolean(errors.task)}
              helperText={touched.task && errors.task}
            />
          </div>
          <CustomButton
            type="submit"
            disabled={!isValid}
            className="add-button"
          >
            Add
          </CustomButton>
        </Form>
      )}
    </Formik>
  );
}
