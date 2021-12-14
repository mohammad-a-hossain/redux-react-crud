import React from 'react'
import { Link } from 'react-router-dom'


export default function Navber() {
    return (
        <nav className="navbar navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/components/Table">crud with redux</Link>
    <Link className="btn btn-light ml-auto bg-info " to="/components/AddContact">add </Link>
  </div>
</nav>

    )
}
