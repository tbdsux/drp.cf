import Image from 'next/image'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { HowTos } from '../util/how-to'

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

      <hr />

      {/* how does it work section */}
      <div className="py-16 bg-emerald-500">
        <div className="text-center w-5/6 mx-auto">
          <div className="flex items-center justify-center">
            <h3 className="font-bold text-6xl text-center underline uppercase text-white mr-6">
              How does
              <br /> it work?
            </h3>
            <Image src="/how-it-works.svg" height="300" width="300" />
          </div>
          <p className="text-lg text-white">
            We notify immediately (through SMS) the receiver of the package once
            we receive it.
          </p>
          <div className="mt-10 py-1 px-8 border-gray-300 grid grid-cols-3 gap-8">
            {HowTos.map((howto) => (
              <div
                key={howto.method}
                className="p-6 border rounded-md text-center bg-white"
              >
                <h2 className="text-7xl font-black text-gray-500">
                  {howto.method}
                </h2>
                <h3 className="text-4xl font-bold text-emerald-600 tracking-wide my-4">
                  {howto.process}
                </h3>
                <p className="text-2xl font-light tracking-wide text-gray-800">
                  {howto.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="#"
              type="buttom"
              className="mx-auto bg-gray-100 hover:bg-white py-3 px-8 text-emerald-500 text-xl rounded-full"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default Home
