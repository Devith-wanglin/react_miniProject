import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logo from "../assets/logoPNG.png"
const links = [
  {
    label: "Home",
    path:"/"
  },
  {
    label:"About",
    path: "about"
  },
  {
    label:"Service",
    path: "service"
  },
  {
    label:"Contact",
    path: "contact"
  },
]
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 md:flex md:gap-2">
          {links.map((link) => {
            return (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 sm:text-base"
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-gray-200 px-4 pb-4 pt-2 md:hidden">
          {links.map((link) => {
            return (
              <li key={link.label}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </header>
  )
}

export default NavBar
