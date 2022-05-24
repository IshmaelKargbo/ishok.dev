import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className='-mt-16'>
          <h4 className="font-head md:text-sm text-sec mb-5 md:mb-12">Hi, my name is</h4>
          <h1 className="text-gray-200 md:title-text text-4xl font-semibold md:-mx-1 mb-3 md:my-8">Ishmael Kargbo</h1>
          <h3 className="md:sub-text font-semibold text-2xl mb-5 md:-mx-1">Let’s design that future together</h3>
          <p className="md:w-2/3 mb-10">I am a Full-stack developer specializing in building exceptional digital experiences. and enjoy working collaboratively in a remote and in office environment everyday with several Developers.</p>
          <button className="border-sec border text-sec md:py-3 md:px-10 px-6 py-3 text-sm md:text-lg rounded-md hover:bg-orange-200 hover:bg-opacity-10"><span>Get in touch</span></button>
        </div>
      </Layout>
    </>
  )
}

export default Home
