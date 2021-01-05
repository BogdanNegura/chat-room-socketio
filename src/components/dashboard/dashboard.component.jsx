import React from "react"
import { SideBar } from "../sidebar/sidebar.component"

const Dashboard = ({ id }) => {
  return (
    <div>
      <SideBar id={id}/>
    </div>
  )
}

export { Dashboard }