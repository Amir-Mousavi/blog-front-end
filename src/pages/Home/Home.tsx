import Button from "@mui/material/Button";

import { logout } from "../../firebase";
export default function Home() {
  const onLogoutClick = () => logout();

  return (
    <div>
      <Button onClick={onLogoutClick}>Logout</Button>
    </div>
  );
}
