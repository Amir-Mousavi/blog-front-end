import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { actions } from "../../store/appRedux/appReduxSlice";

export default function Snackbar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const message = useSelector((state: any) => state.app.message);

  useEffect(() => {
    if (message && message !== "") {
      setOpen(true);

      setTimeout(() => {
        dispatch(actions.removeSnackbarMessage());
      }, 3000);
    } else {
      setOpen(false);
    }
  }, [message]);
}
