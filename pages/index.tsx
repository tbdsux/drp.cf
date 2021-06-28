import Image from "next/image";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { HowTos } from "../util/how-to";

const Home = () => {
  return (
    <Layout title="drp.cf | Dropping Area">
      <Navbar />

      {/* showcase */}
      <div className="py-24 w-5/6 mx-auto">
        <div className="text-center w-full md:w-5/6 xl:w-3/4 mx-auto">
          <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-coolGray-500">
            Your{" "}
            <span className="text-emerald-500 font-black uppercase">
              one-stop
            </span>{" "}
            <span className="underline text-coolGray-800">
              <br />
              dropping center
            </span>{" "}
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

      {/* services section */}
      <div className="w-5/6 mx-auto py-20" id="services">
        <h1 className="text-6xl font-black">What do we offer?</h1>
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <Image
            src="/services.svg"
            height="400"
            width="400"
            alt="Dropping Area Service"
          />
          <div className="w-full md:w-3/4 lg:w-3/5 ml-3">
            <h3 className="text-5xl font-black text-emerald-500">
              Dropping Area Service
            </h3>
            <p className="ml-2 mt-4 text-3xl font-light tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              perferendis! <br />
              Vel, ducimus saepe suscipit in quo illum odio aut voluptates!
            </p>
          </div>
        </div>
      </div>

      {/* how does it work section */}
      <div className="py-16 bg-emerald-500">
        <div className="text-center w-5/6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <h3 className="font-bold text-4xl md:text-6xl text-center underline uppercase text-emerald-900 mr-6">
              How does
              <br /> it work?
            </h3>
            <Image
              src="/how-it-works.svg"
              height="300"
              width="300"
              alt="How it works."
            />
          </div>
          <p className="text-lg text-white">
            We notify immediately (through SMS) the receiver of the package once
            we receive it.
          </p>
          <div className="mt-10 py-1 xl:px-8 border-gray-300 grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8">
            {HowTos.map((howto) => (
              <div
                key={howto.method}
                className="p-6 border rounded-md text-center bg-white"
              >
                <h2 className="text-5xl md:text-6xl xl:text-7xl font-black text-gray-500">
                  {howto.method}
                </h2>
                <h3 className="text-3xl lg:text-4xl font-bold text-emerald-600 tracking-wide my-4">
                  {howto.process}
                </h3>
                <p className="text-xl lg:text-2xl font-light tracking-wide text-gray-800">
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

      <hr />

      {/* about us section */}
      <div className="w-5/6 mx-auto py-12 text-center" id="team">
        <h1 className="text-4xl font-black tracking-wide">Who we are?</h1>
        <div className="py-10 w-full sm:w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto">
          <h2 className="text-3xl font-black text-emerald-500">drp.cf</h2>
          <p className="text-2xl tracking-wide mt-3 text-gray-700">
            drp.cf is a Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt itaque corporis quo aspernatur minus, eos facere tenetur,
            ipsa necessitatibus, possimus quod numquam non doloremque?
            Repellendus eligendi exercitationem obcaecati?
          </p>
        </div>
        <Image src="/team.svg" height="300" width="300" alt="Who we are." />

        <hr />

        <div className="mt-6">
          <ul className="grid grid-cols-1 lg:grid-cols-3">
            <li className="my-2 lg:my-0">
              <h4 className="text-xl font-bold uppercase text-coolGray-600">
                Email
              </h4>
              <p className="text-lg mt-1 tracking-wide text-coolGray-800 underline">
                contact@drpcfwebsite.com
              </p>
            </li>
            <li className="my-2 lg:my-0">
              <h4 className="text-xl font-bold uppercase text-coolGray-600">
                Address
              </h4>
              <p className="text-lg mt-1 tracking-wide text-coolGray-800 underline">
                #123 Street, Barangay, Municipality
              </p>
            </li>
            <li className="my-2 lg:my-0">
              <h4 className="text-xl font-bold uppercase text-coolGray-600">
                Phone Number
              </h4>
              <p className="text-lg mt-1 tracking-wide text-coolGray-800 underline">
                +012 (3456) 789
              </p>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Home;
