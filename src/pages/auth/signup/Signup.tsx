import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import { Formik, FormikErrors, Form } from "formik";

import { s } from "../auth.styled";
import { TextField, Button } from "@mui/material";

interface FormValue {
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function Signup() {
  const initialValues: FormValue = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const onSubmit = (values: FormValue) => {
    console.log({ values });
    return Promise.resolve();
  };
  const validate = (values: FormValue) => {
    const errors: FormikErrors<FormValue> = {};

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
            {({ values, errors, handleChange, isValid, isSubmitting }) => (
              <Form>
                <h2>Signup</h2>
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
                        <small className="error-message">
                          {errors.password}
                        </small>
                      )}
                    </Stack>
                  </Stack>
                  <Button
                    className="btn-signup"
                    disabled={!isValid || isSubmitting}
                    type="submit"
                    variant="contained"
                  >
                    Signup
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Paper>
      </Stack>
    </s.AuthContainer>
  );
}
