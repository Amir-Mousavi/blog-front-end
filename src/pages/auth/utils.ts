export function isEmailValid(email: string) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
}

export function getFirebaseErrorMessageByCode(code: string): string {
  switch (code) {
    case "auth/invalid-email":
      return "The email address is not valid";

    case "auth/user-not-found":
      return "User not found!";

    case "auth/wrong-password":
      return "Wrong password";

    default:
      return "";
  }
}
