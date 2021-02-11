const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="py-6 bg-gray-50">
        <div className="flex items-center justify-between w-5/6 mx-auto">
          <h1 className="text-2xl text-emerald-500 font-black tracking-wide">
            drp.cf
          </h1>
          <p>
            Copyrights &copy; {new Date().getFullYear()} | drp.cf |{' '}
            <a
              href="https://github.com/TheBoringDude/drp.cf"
              target="_blank"
              className="hover:underline"
              title="See Github Repo"
            >
              Github
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
