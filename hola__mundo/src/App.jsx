import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

export function App() {
  const users = [
    { name: "Miguel Duran", userName: "minudev", initialIsFollow: true },
    { name: "PepeWicho Galvan", userName: "Pepe Wicho", initialIsFollow: false },
    { name: "Desconocido", userName: "CrazyVideosOnly", initialIsFollow: true }
  ];

  return (
    <section className="App">
      {users.map(({ userName, name, initialIsFollow }) => (
        <TwitterFollowCard
          name={name}
          userName={userName}
          initialIsFollow={initialIsFollow}
          key={userName}
        />
      ))}
    </section>
  );
}
