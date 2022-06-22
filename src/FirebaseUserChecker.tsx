import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

import { updateUserAction } from "./pages/auth/redux/authReduxSlice";

export default function FirebaseUserChecker() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user: User | null) => {
      if (
        window.location.pathname.includes("signin") ||
        window.location.pathname.includes("signup")
      ) {
        return;
      }

      if (user) {
        dispatch(updateUserAction(JSON.stringify(user)));
      } else {
        // Go to login page
        navigate("/signin");
      }
    });
  }, [navigate, dispatch]);

  return null;
}
