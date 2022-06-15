import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

export default function () {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        // replace redux user object
      } else {
        // Go to login page
        navigate("/signin");
      }
    });
  }, [navigate]);

  return null;
}
