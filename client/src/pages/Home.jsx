import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

export default function Home() {
  const [items, setItems] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onLoad = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/items`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const results = await response.json();
          setItems(results);
        }
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };
    onLoad();
  }, []);

  return token ? (
    items.map((item) => <p key={item.id}>{item.title}</p>)
  ) : (
    <p>This content is reserved to logged in users</p>
  );
}
