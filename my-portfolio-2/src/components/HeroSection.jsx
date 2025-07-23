import { ArrowDown } from "lucide-react"

function HeroSection() {
  return (
    <section id="hero">
      <div>
        <div>
          <h1 >
            <span >Hi, I'm</span>
            <span >
                {" "}
                Jan
            </span>
            <span >
                {" "}
                Lõndso
            </span>
          </h1>

          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam natus ducimus, quidem inventore quia ut aspernatur.
            Sunt illum maiores voluptas!
          </p>

          <div >
            <a href="#projects" >
                View My Work
            </a>
          </div>


        </div>

      </div>

      <div>
        <span >Scroll</span>
        <ArrowDown  />
      </div>
    </section>
  )
}

export default HeroSection