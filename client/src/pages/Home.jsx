import { useLoaderData } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

export default function Home() {
  const items = useLoaderData();
  const { token } = useAuth();

  return token ? (
    items.map((item) => <p key={item.id}>{item.title}</p>)
  ) : (
    <p>This content is reserved to logged in users</p>
  );
}
