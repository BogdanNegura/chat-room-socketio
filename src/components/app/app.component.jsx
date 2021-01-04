import React from "react"
import { UseLocalStorage } from "../hooks/use-local-storage";
import { Login } from "../login";

const App = () => {

  const [id, setId] = UseLocalStorage()

  return (
    <>
      {id}
      <Login onIdSubmit={setId}/>
  
    </>
  )
}

export { App }
