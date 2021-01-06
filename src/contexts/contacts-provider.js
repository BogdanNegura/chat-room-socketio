import React, { useContext } from "react"
import { UseLocalStorage } from "../components/hooks/use-local-storage"

const ContactsContext = React.createContext()

export function useContacts() {
    return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {

    const [contacts, setContacts] = UseLocalStorage('contacts', [])

    const createContact = ({ id, name }) => {
        setContacts((prevContacts) => {
            return [...prevContacts, { id, name }]
        })
    }

    return (
        <ContactsContext.Provider value={{ contacts, createContact }}>
            {children}
        </ContactsContext.Provider>
    )
} 