import Stack from "@mui/material/Stack";
// @ts-ignore
import styled from "styled-components";

export const s: any = {
  AuthContainer: styled(Stack)`
    height: 100vh;

    .form-auth {
      width: 300px;
      height: 400px;
      padding: 20px;
    }

    .error-message {
      color: red;
    }

    .btn-signup {
    }

    .btn-signIn {
      margin-top: 120px;
    }
  `,
};
