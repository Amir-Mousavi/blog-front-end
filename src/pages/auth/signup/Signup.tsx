import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'

import {s} from '../auth.styled'

export default function Signup() {
    return <s.AuthContainer
        justifyContent="center"
        alignItems="center"
    >
        <Stack >
            <Paper className="form-auth">
                form
            </Paper>
        </Stack>
    </s.AuthContainer>
}