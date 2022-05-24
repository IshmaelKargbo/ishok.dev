import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Ishmael Kargbo"
        description="I'm a Full-stack developer from Sierra Leone"
        canonical="https://www.ishok.dev/"
        twitter={{
          handle: '@ishodev',
          site: '@Ishok',
          cardType: 'me.jpeg',
        }}
      />
      <Layout>
        <div className='-mt-16 md:mt-0'>
          <h4 className="font-head md:text-sm text-sec mb-5 md:mb-12">Hi, my name is</h4>
          <h1 className="text-gray-200 md:title-text text-4xl font-semibold md:-mx-1 mb-3 md:my-8">Ishmael Kargbo</h1>
          <h3 className="md:sub-text font-semibold text-2xl mb-12 md:-mx-1">Let’s design that future together</h3>
          <p className="md:w-2/3 mb-10">I am a Full-stack developer specializing in building exceptional digital experiences. and enjoy working collaboratively in a remote and in office environment everyday with several Developers.</p>
          <a href="mailto:ishmaelkargbo5@outlook.com?subject=Get in touch with you"><button className="border-sec border text-sec md:py-3 md:px-10 px-6 py-3 text-sm md:text-lg rounded-md hover:bg-orange-200 hover:bg-opacity-10"><span>Get in touch</span></button></a>
        </div>
      </Layout>
    </>
  )
}

export default Home
