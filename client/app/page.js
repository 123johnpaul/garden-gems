"use client"
import {useEffect,useState} from "react"
import API_BASE_URL from "../utils/api"

export default function Home() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch(`${API_BASE_URL}/`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, [])

  return (
    <div>
      {message}
      </div>
  );
}
