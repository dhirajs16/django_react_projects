import React from "react";
import { Link, useLocation } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import AddIcon from '@mui/icons-material/Add'

const navItems = [
  { to: "/", name: "Home", icon: <HomeIcon className="pb-1 mr-2" /> },
  { to: "/about", name: "About", icon: <LibraryBooksIcon className="pb-1 mr-2" /> },
  { to: "/create", name: "Create", icon: <AddIcon className="pb-1 mr-2" /> },
]

const Sidebar = () => {
  const location = useLocation()
  const baseClass = "text-2xl px-7 py-2 mt-3 rounded-2xl transition ease-in"
  const activeClass = "bg-slate-700 text-white"
  const linkClass = (path) =>
    location.pathname === path ? `${baseClass} ${activeClass}` : `${baseClass} hover:bg-slate-700 hover:text-white`

  return (
    <div className="flex flex-col justify-start gap-1 px-3">
      {navItems.map((item) => (
        <Link key={item.to} to={item.to} className={linkClass(item.to)}>
          {item.icon}
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
