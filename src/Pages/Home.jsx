import Header from "../components/Home/Header"
import Hero from "../components/Home/Hero"
import Navbar from "../components/Home/Navbar"
import Category from "../components/Home/Category"


function Home() {
  return (
    <>
    <section className=" mx-auto">
        <Navbar />  
        <Header/>
        <Hero />
        <Category/>
    </section>

    </>
  )
}

export default Home