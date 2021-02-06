const Navbar = () => {
  return (
    <nav className="py-5 w-5/6 mx-auto flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-black text-emerald-500 tracking-wider">
          drp.cf
        </h1>
      </div>

      <ul className="flex">
        <li>
          <a
            href="#"
            className="px-4 py-2 text-lg hover:bg-emerald-200 text-coolGray-700"
          >
            Our Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-4 py-2 text-lg hover:bg-emerald-200 text-coolGray-700"
          >
            Who We Are
          </a>
        </li>
      </ul>

      <a
        href="#"
        className="text-lg py-2 px-6 bg-emerald-500 text-white hover:bg-emerald-600 rounded-full"
      >
        <i className="lni lni-package mr-2"></i>
        Check Package
      </a>
    </nav>
  )
}

export default Navbar
