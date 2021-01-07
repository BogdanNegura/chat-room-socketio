import React, { useContext } from "react"
import { UseLocalStorage } from "../components/hooks/use-local-storage"

const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}

export function ConversationsProvider({ children }) {

    const [conversations, setConversations] = UseLocalStorage('conversations', [])

    const createConversation = (recipients) => {
        setConversations((prevConversations) => {
            return [...prevConversations, { recipients, messages: [] }]
        })
    }

    return (
        <ConversationsContext.Provider value={{ conversations, createConversation }}>
            {children}
        </ConversationsContext.Provider>
    )
} 