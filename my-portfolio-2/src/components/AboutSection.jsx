import { Code, User, Briefcase } from "lucide-react"



function AboutSection() {
  return (
    <section id="about">
        {" "}
      <div>
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div>
        <div>
          <h3>
            Passionate Web Developer & Tech Creator
          </h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Modi nisi facere aspernatur cupiditate,
              maxime est nobis dolorum officia voluptates. Rerum?
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Modi nisi facere aspernatur cupiditate,
              maxime est nobis dolorum officia voluptates. Rerum?
            </p>
            <div>
              <a href="#contact">
              {" "}
                Get In Touch
              </a>
              <a href="">
              {" "}
                Download CV
              </a>
            </div>
          </div>

          <div>
            <div>
              <div>
                <div>
                  <Code />
                </div>
                 <div>
                  <h4>Web Development</h4>
                  <p>
                    Creating responsive websites and web aplications
                    with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <User />
                </div>
                 <div >
                  <h4>UI/UX Design</h4>
                  <p>
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <Briefcase />
                </div>
                 <div>
                  <h4>Project Management</h4>
                  <p>
                    Leading projects from conception to completion with
                    agile methodologies.
                  </p>
                </div>
              </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default AboutSection