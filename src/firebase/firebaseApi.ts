import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function createUser(email: string, password: string) {
  const auth = getAuth();

  return createUserWithEmailAndPassword(auth, email, password);
}
