import LeftNavbar from "./LeftNavbar"
import RightNavbar from "./RightNavbar"

export const navLinks = [
  {
    id: '1',
    label: 'รายวิชา'
  },
  {
    id: '2',
    label: 'ถ่ายทอดสด'
  },
  {
    id: '3',
    label: 'กระทู้คำถาม'
  },
]

const Navbar = () => {
  return (
    <nav className="py-8 flex items-center justify-between">

      <section className="flex items-center gap-12">
        <LeftNavbar />
      </section>

      <section className="flex items-center gap-4">
        <RightNavbar />
      </section>
    </nav>
  )
}

export default Navbar