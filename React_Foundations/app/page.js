import LikeButton from "./likebutton";
function Header({ title }) {
  return title ? <h1>{title}</h1> : <h1>HI</h1>;
}
export default function HomePage() {
  const names = ["Jiniya", "Miniya", "Suniya"];
  return (
    <div>
      <Header title="Develop. Ship. Preview" />
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
