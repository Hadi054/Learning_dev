"use client";
import { useState } from "react";
export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  function HandleLikes() {
    setLikes(likes + 1);
  }
  return <button onClick={HandleLikes}>Like ({likes})</button>;
}
