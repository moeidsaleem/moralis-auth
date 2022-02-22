import Login from "../components/login.component";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  return <div>{isAuthenticated ? <h1>You are logged in!</h1> : <Login />}</div>;
}
