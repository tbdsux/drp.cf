import Image from 'next/image'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <Layout title="Index">
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
          <div className="relative w-full h-64 mt-4">
            <Image src="/showcase.svg" alt="drp.cf showcase" layout="fill" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
