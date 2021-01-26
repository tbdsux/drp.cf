import Image from 'next/image'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <Layout title="drp.cf | Dropping Area">
      <Navbar />

      {/* showcase */}
      <div className="py-24 w-5/6 mx-auto">
        <div className="text-center w-full md:w-5/6 xl:w-3/4 mx-auto">
          <p className="text-7xl font-bold text-coolGray-500">
            Your{' '}
            <span className="text-emerald-500 font-black uppercase">
              one-stop
            </span>{' '}
            <span className="underline text-coolGray-800">
              <br />
              dropping center
            </span>{' '}
            for your packages.
          </p>
          {/* social icons */}
          <div className="pt-8 pb-4">
            <ul className="flex items-center justify-center">
              <li className="px-2">
                <a
                  href="#"
                  title="drp.cf Facebook Page"
                  className="text-4xl text-emerald-500 opacity-80 hover:opacity-100"
                >
                  <i className="lni lni-facebook-filled"></i>
                </a>
              </li>
              <li className="px-2">
                <a
                  href="#"
                  title="drp.cf Instagram Page"
                  className="text-4xl text-emerald-500 opacity-80 hover:opacity-100"
                >
                  <i className="lni lni-instagram-filled"></i>
                </a>
              </li>
              <li className="px-2">
                <a
                  href="#"
                  title="drp.cf Twitter Page"
                  className="text-4xl text-emerald-500 opacity-80 hover:opacity-100"
                >
                  <i className="lni lni-twitter-filled"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="relative w-full h-64 mt-4">
            <Image src="/showcase.svg" alt="drp.cf showcase" layout="fill" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
