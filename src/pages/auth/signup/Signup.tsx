import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import { Formik, FormikValues } from "formik";

import { s } from "../auth.styled";
import { TextField } from "@mui/material";

export default function Signup() {
  const initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const onSubmit = () => {};
  const validate = (values: FormikValues) => {
    const errors: any = {};

    if (
      values.email !== "" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "The email address is not valid!";
    }

    if (
      values.password !== "" &&
      values.passwordConfirm !== "" &&
      values.password !== values.passwordConfirm
    ) {
      errors.password = "Passwords are not match";
    }

    return errors;
  };

  return (
    <s.AuthContainer justifyContent="center" alignItems="center">
      <Stack>
        <Paper className="form-auth">
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
          >
            {({ values, errors, handleSubmit, handleChange }) => (
              <Stack spacing={3}>
                <Stack>
                  <TextField
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors?.email && (
                    <small className="error-message">{errors.email}</small>
                  )}
                </Stack>

                <Stack spacing={2}>
                  <TextField
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <Stack>
                    <TextField
                      name="passwordConfirm"
                      type="password"
                      label="Confirm password"
                      value={values.passwordConfirm}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <small className="error-message">{errors.password}</small>
                    )}
                  </Stack>
                </Stack>
              </Stack>
            )}
          </Formik>
        </Paper>
      </Stack>
    </s.AuthContainer>
  );
}
