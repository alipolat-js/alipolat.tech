import Head from 'next/head'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import About from '../components/About'
import Services from '../components/Services'
import CustomerComments from '../components/CustomerComments'
import References from '../components/References'
import ContactForm from '../components/ContactForm'
import ForDevs from '../components/ForDevs'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ali POLAT | Freelancer | Full Stack Developer</title>
        <meta property='og:title' content="Ali POLAT" />
        <meta name="description" content="I am a Full Stack Developer with experience developing frontend and backend systems" />
        <meta property='og:descriptipn' content="I am a Full Stack Developer with experience developing frontend and backend systems" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="author" content="Ali POLAT"></meta>
        <meta name="theme-color" content="#162229"></meta>
      </Head>

      <Navbar />

      <HomeSection />

      <About />

      <Services />

      <CustomerComments />

      <References />

      <ContactForm />

      <Contact />

      <ForDevs />

      <Footer />
    </>
  )
}