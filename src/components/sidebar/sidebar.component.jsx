import React, { useState } from "react"
import { Tab, Nav, Button, Modal } from "react-bootstrap"
import { Contacts } from "../contacts/contacts.component"
import { Conversations } from "../conversations"
import { NewContactModal } from "../new-contact-modal/new-contact-modal.conponent"
import { NewConversationModal } from "../new-conversation-modal/new-conversation-modal.component"

const CONVERSATION_KEY = "conversations"
const CONTACTS_KEY = "contacts"

const SideBar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY)
  const [modalOpen, setModalOpen] = useState(false)
  const conversationOpen = activeKey === CONVERSATION_KEY

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Container className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations/>
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts/>
          </Tab.Pane>
        </Tab.Container>
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationOpen ? 
          <NewConversationModal closeModal={closeModal}/> : 
          <NewContactModal closeModal={closeModal}/>
        }
      </Modal>
    </div>
  )
}

export { SideBar }