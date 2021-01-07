import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useContacts } from "../../contexts/contacts-provider"
import { useConversations } from "../../contexts/conversations.provider"

const NewConversationModal = ({ closeModal }) => {
  const [selectedContactIds, setSelectedContactsIds] = useState([]) 
  const { contacts } = useContacts()
  const { createConversation } = useConversations()

  const handleCheckboxChange = (contactId) => {
    setSelectedContactsIds(prevSelectedContactsIds => {
      if (prevSelectedContactsIds.includes(contactId)) {
        return prevSelectedContactsIds.filter(prevId => {
          return contactId !== prevId
        })
      } else {
        return [...prevSelectedContactsIds, contactId]
      }
    })}

    const handleSubmit = e => {
      e.preventDefault()

      createConversation(setSelectedContactsIds)
      closeModal()
    }
    
    return (
      <>
        <Modal.Header closeButton>Create Conversation</Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
              {contacts.map(contact => (
                <Form.Group controlId={contact.id} key={contact.id}>
                  <Form.Check
                    type="checkbox"
                    value={selectedContactIds.includes(contact.id)}
                    label={contact.name}
                    onChange={() => handleCheckboxChange(contact.id)}
                  />
                </Form.Group>
              ))}
            <Button type="submit">Create</Button>
            </Form>
        </Modal.Body>
      </>
    )
}

export { NewConversationModal }