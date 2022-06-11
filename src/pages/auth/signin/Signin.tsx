import { useDispatch } from "react-redux";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { TextField, Button } from "@mui/material";
import { Formik, FormikErrors, Form } from "formik";

import { useNavigate } from "react-router-dom";

import { s } from "../auth.styled";
import { getFirebaseErrorMessageByCode, isEmailValid } from "../utils";

import { signInAction } from "../redux";
import { actions } from "../../../store/appRedux/appReduxSlice";

interface FormValues {
  email: string;
  password: string;
}

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues: FormValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (values: FormValues) => {
    if (values.email === "" || values.password === "") {
      return null;
    }

    const result: any = await dispatch(
      signInAction({ email: values.email, password: values.password })
    );

    if (result.error) {
      // @ts-ignore
      dispatch(
        actions.setSnackbarMessage(
          getFirebaseErrorMessageByCode(result.error.code)
        )
      );
    } else {
      dispatch(actions.setSnackbarMessage("Sign in is done."));
      navigate("/");
    }
  };
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (values.email !== "" && !isEmailValid(values.email)) {
      errors.email = "The email address is not valid";
    }

    return errors;
  };

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
              <Form>
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
                      {errors.email && (
                        <small className="error-message">{errors.email}</small>
                      )}
                    </Stack>

                    <Stack>
                      <TextField
                        name="password"
                        label="Password"
                        type="password"
                        value={values.password}
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
                    Sign In
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
