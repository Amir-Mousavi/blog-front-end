import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export function createUser(email: string, password: string) {
  const auth = getAuth();

  return createUserWithEmailAndPassword(auth, email, password);
}

export function signInUser(email: string, password: string) {
  const auth = getAuth();

  return signInWithEmailAndPassword(auth, email, password);
}
