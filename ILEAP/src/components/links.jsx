import React from 'react'
import { Link } from 'react-router-dom'
const Links = () => {
  return (
    <>
      <Link to="/profile" className="dropdown-options">My Profile</Link>
      <Link to="/progress" className="dropdown-options">My Progress</Link>
      <Link to="/jobs" className="dropdown-options">Jobs/Internships</Link>
      <Link to="/resource-library" className="dropdown-options">Resource Library</Link>
      <Link to="/alumni-network"className="dropdown-options">Alumni Network</Link>
      <Link to="/analytics" className="dropdown-options">Analytics and Reporting</Link>
    </>
  );
}

export default Links