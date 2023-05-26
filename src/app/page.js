import Image from 'next/image'
import Banner from './Components/Banner'
import Demo from './Components/Demo'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Section from './Components/Section'
import Service from './Components/Service'
import Testimonials from './Components/Testimonials'

export default function Home() {
  return (
   <main className='overflow-x-hidden'>
    <Navbar />
    <Section />
    <Service />
    <Testimonials />
    <Banner />
    <Footer />
   </main>
  )
}
