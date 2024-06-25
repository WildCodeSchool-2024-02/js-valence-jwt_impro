import { useLoaderData } from "react-router-dom";

export default function Home() {
  const items = useLoaderData();

  return items.map((item) => <p key={item.id}>{item.title}</p>);
}
