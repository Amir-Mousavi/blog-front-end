import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'

import { Formik, FormikValues } from 'formik';

import {s} from '../auth.styled'

export default function Signup() {
    const initialValues = {
        email: "",
        password: "",
        passwordConfirm: ""
    }

    const onSubmit =  () => {}
    const validate = (values:FormikValues) => {}

    return <s.AuthContainer
        justifyContent="center"
        alignItems="center"
    >
        <Stack >
            <Paper className="form-auth">
                <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                    {
                        ({ values, errors, handleSubmit }) => (
                            <Stack>

                            </Stack>
                        )
                    }
                </Formik>
            </Paper>
        </Stack>
    </s.AuthContainer>
}