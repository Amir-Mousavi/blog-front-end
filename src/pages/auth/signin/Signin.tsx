import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { TextField, Button } from "@mui/material";
import { Formik, FormikErrors, Form } from "formik";
import { useDispatch } from "react-redux";

import { s } from "../auth.styled";

interface FormValues {
  email: string;
  password: string;
}

export default function Signin() {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };
  const onSubmit = () => {};
  const validate = () => {};

  return (
    <s.AuthContainer justifyContent="center" alignItems="center">
      <Stack>
        <Paper className="form-auth">
          <Formik
            validate={validate}
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {({ values, errors, handleChange, isSubmitting, isValid }) => (
              <Stack>
                <h2>Sign in</h2>
                <Stack spacing={3}>
                  <Stack>
                    <TextField
                      name="email"
                      label="Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && <small>{errors.email}</small>}
                  </Stack>

                  <Stack>
                    <TextField
                      name="password"
                      label="Password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    {errors.password && <small>{errors.password}</small>}
                  </Stack>
                </Stack>

                <Button
                  className="btn-signup"
                  disabled={!isValid || isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Sign In
                </Button>
              </Stack>
            )}
          </Formik>
        </Paper>
      </Stack>
    </s.AuthContainer>
  );
}
