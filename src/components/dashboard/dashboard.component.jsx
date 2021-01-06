import React from "react"
import { SideBar } from "../sidebar/sidebar.component"

const Dashboard = ({ id }) => {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <SideBar id={id}/>
    </div>
  )
}

export { Dashboard }