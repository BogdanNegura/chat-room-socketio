import React from "react"
import { Dashboard } from "../dashboard";
import { UseLocalStorage } from "../hooks/use-local-storage";
import { Login } from "../login";

const App = () => {

  const [id, setId] = UseLocalStorage()

  return (
      id ? <Dashboard id={id}/> : <Login onIdSubmit={setId}/>
  )
}

export { App }
