import Image from 'next/image'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <Layout title="drp.cf | Baguio - Dropping Area">
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

      <hr />

      {/* how does it work section */}
      <div className="py-16 bg-gray-50">
        <div className="w-5/6 mx-auto">
          <h3 className="font-bold text-4xl underline">How does it work?</h3>
          <div className="border-l-16 mt-10 py-1 px-8 ml-8 border-gray-300">
            <div className="my-8">
              <h3 className="text-5xl font-black text-emerald-600 tracking-wide">
                1. Give us your package
              </h3>
              <p className="ml-6 text-3xl mt-4 tracking-wide text-gray-800">
                The package (or order) should be wrapped perfectly. It should
                also include the{' '}
                <span className="font-bold underline">
                  receiver's fullname and contact number
                </span>
                .
              </p>
            </div>
            <div className="my-8">
              <h3 className="text-5xl font-black text-emerald-600 tracking-wide">
                2. We will store the package
              </h3>
              <p className="ml-6 text-3xl mt-4 tracking-wide text-gray-800">
                We will send a message (also) to the receiver about their
                package from the sender in order to inform them that it is
                within our care.
              </p>
            </div>
            <div className="my-8">
              <h3 className="text-5xl font-black text-emerald-600 tracking-wide">
                3. The receiver will get the package
              </h3>
              <p className="ml-6 text-3xl mt-4 tracking-wide text-gray-800">
                After{' '}
                <span className="font-bold underline">
                  atmost three (3) days
                </span>
                , the receiver should get the package (before or after) from the
                dropping area. Not doing so, will result in the package being
                disposed or returned to the sender.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
