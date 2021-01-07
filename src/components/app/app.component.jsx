import React from "react"
import { ContactsProvider } from "../../contexts/contacts-provider";
import { ConversationsProvider } from "../../contexts/conversations.provider";
import { Dashboard } from "../dashboard";
import { UseLocalStorage } from "../hooks/use-local-storage";
import { Login } from "../login";

const App = () => {

  const [id, setId] = UseLocalStorage()

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id}/>
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
      id ? dashboard : <Login onIdSubmit={setId}/>
  )
}

export { App }
