import type { NextPage } from 'next'
import { HomeAbout, HomeCourts, HomeRegister, HomeTestimonials } from '../components/home'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div>
          <h4 className="font-head text-sm text-sec mb-5">Hi, my name is</h4>
          <h1 className="text-gray-200 title-text font-semibold -mx-1">Ishmael Kargbo</h1>
          <h3 className="sub-text font-semibold -mt-8 mb-5">Let’s design that future together</h3>
          <p className="w-2/3 mb-10">I am a Full-stack developer specializing in building exceptional digital experiences. and enjoy working collaboratively in a remote and in office environment everyday with several Developers.</p>
          <button className="border-sec border text-sec py-3 px-10 rounded-md hover:bg-orange-200 hover:bg-opacity-10"><span>Get in touch</span></button>
        </div>
      </Layout>
    </>
  )
}

export default Home
