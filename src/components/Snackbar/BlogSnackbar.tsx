import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { actions } from "../../store/appRedux/appReduxSlice";

export default function BlogSnackbar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const message = useSelector((state: any) => state.app.message);

  useEffect(() => {
    if (message && message !== "") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [message]);

  const handleClose = () => dispatch(actions.removeSnackbarMessage());

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      autoHideDuration={3000}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
}
