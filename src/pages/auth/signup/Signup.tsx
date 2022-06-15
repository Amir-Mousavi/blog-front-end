import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { Form, Formik, FormikErrors } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createUserAction } from "../redux";

import { s } from "../auth.styled";

import { actions } from "../../../store/appRedux/appReduxSlice";
import { isEmailValid } from "../utils";

interface FormValue {
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: FormValue = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const onSubmit = async (values: FormValue) => {
    if (values.email === "" || values.password === "") {
      return null;
    }

    const result: any = await dispatch(
      createUserAction({ email: values.email, password: values.password })
    );

    if (result.error) {
      dispatch(actions.setSnackbarMessage(result.error.message));
    } else {
      navigate("/");
      dispatch(actions.setSnackbarMessage("Signup is done."));
    }
  };
  const validate = (values: FormValue) => {
    const errors: FormikErrors<FormValue> = {};

    if (values.email !== "" && !isEmailValid(values.email)) {
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

  function goToSignIn() {
    navigate("/signin");
  }

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
                  <Button onClick={goToSignIn}>Back to Signin</Button>
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
