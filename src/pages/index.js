import React from "react"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"
import WelcomeSection from "../components/WelcomeSection"
import StorySection from "../components/StorySection"
import SkillsSection from "../components/SkillsSection"
import SectionDescriptor from "../components/SectionDescriptor"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import "../components/css/main.css"
import "../components/css/noscript.css"
import "../components/css/fontawesome-all.min.css"

import SEO from "../components/seo"

const IndexPage = () => {
  const [reff, inView] = useInView({
    threshold: 0.5,
  })

  const [reff2, inView2] = useInView({
    threshold: 0.25,
  })

  const [reff3, inView3] = useInView({
    threshold: 0.5,
  })

  const [reff4, inView4] = useInView({
    threshold: 0.5,
  })

  return (
    <body class="is-preload">
      <SEO title="Home" />

      <section id="sidebar">
        <div class="inner">
          <nav>
            <ul>
              <li>
                <Link
                  to="/#intro"
                  class={inView ? "scrolly active" : "scrolly"}
                >
                  Welcome
                </Link>
              </li>
              <li>
                <Link to="/#one" class={inView2 ? "scrolly active" : "scrolly"}>
                  My Story
                </Link>
              </li>
              <li>
                <Link to="/#two" class={inView3 ? "scrolly active" : "scrolly"}>
                  My Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/#three"
                  class={inView4 ? "scrolly active" : "scrolly"}
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <div id="wrapper">
        <WelcomeSection ref={reff} />

        <section id="one" class="wrapper style2 spotlights" ref={reff2}>
          <StorySection
            title="The Start:"
            img="../../bioengineering.jpg"
            dataPosition="center center"
            bodyParagraph="After graduating at Lehigh University with a degree in Bioengineering, I started my career with Progenitor Cell Therapy (PCT). Performing various roles both in and out of a laboratory environment gave me a solid grasp of the fundamentals of Bioengineering, and after working in an operations capacity for 2.5 years in various roles, I decided it was time to move on."
            link={`/Bioengineering`}
          />

          <StorySection
            title="The Game:"
            img="../../gameproject.png"
            dataPosition="top center"
            bodyParagraph="I developed a fascination for programming, and lack of a computer science/software engineering degree would not stop me from delving into the field. During my off time while at PCT, I focused my efforts on a new project. My brother and I worked together to build a quality, fully functional, online multiplayer game in a Unity/C# framework. This project became my mentorship and taught me the fundamentals of object oriented programming."
            link={`GameProject`}
          />

          <StorySection
            title="The Switch:"
            dataPosition="25% 25%"
            img="../../innovest.png"
            bodyParagraph="Realizing my potential lay most strongly in the software development field, I decided to make a choice. After a successful 2.5 years in the Bioengineering field, I decided to make software development my career. The change was nothing short of liberating. Innovest Systems LLC became the first step of my new journey. I managed code as a T-SQL engineer and gained significant experience in the world of software engineering."
            link={`InnovestSystems`}
          />

          <StorySection
            title="The Second Project:"
            dataPosition="25% 25%"
            img="../../helpdesk.png"
            bodyParagraph="Wanting to expand my skills further, and familiarize myself with new areas of software development, I took on a full-stack Helpdesk Project. A fully-functional full-stack application, this project taught me the fundamentals of web development. With a front-end built on a React.js framework, and an API/Backend built through ASP.NET/SQL, the project expanded my proficiencies to many new platforms."
            link={`HelpdeskProject`}
          />

          <StorySection
            title="The Website:"
            dataPosition="25% 25%"
            img="../../website.png"
            bodyParagraph="After completion of the Helpdesk project, my learnings in front-end applications prompted the creation of my personal website. Built in a Gatsby-React framework, with a Github-hosted custom domain-name, the project was a learning experience in itself. From the animation-work to the modularization of it’s pages, the website represents my desire to grow my skills and develop in my new career."
            link={`Website`}
          />
        </section>

        <SectionDescriptor
          id="two"
          className="wrapper style3 fade-up"
          title="Skills"
          description="My strongest platforms and languages picked up through project-work experience."
          ref={reff3}
        >
          <div class="features">
            <SkillsSection
              className="icon solid major fa-code"
              title="C#"
              paragraphText="Primary language for Backend operations. Learned from the Game Project."
            />

            <SkillsSection
              className="icon solid major fa-lock"
              title="React.js"
              paragraphText="Front-End framework used to create interactive UI designs."
            />

            <SkillsSection
              className="icon solid major fa-cog"
              title="SQL/T-SQL"
              paragraphText="Strong SQL skills learned from time at Innovest systems. often used to Get, Post, Put, and Delete items from Database."
            />

            <SkillsSection
              className="icon solid major fa-desktop"
              title="HTML/CSS"
              paragraphText="Primary languages for front-end operations, combine with a React framework to create beautiful web-design."
            />

            <SkillsSection
              className="icon solid major fa-link"
              title="ASP.NET/MVC"
              paragraphText="Primary framework for backend API functionality. Currently most experienced with MVC (Model View Controller) setup."
            />

            <SkillsSection
              className="icon major fa-gem"
              title="Unity"
              paragraphText="Primary framework for coding C# aspects of any game projects. Utilized for the game project and plan to do so for my next project."
            />
          </div>
        </SectionDescriptor>

        <SectionDescriptor
          id="three"
          className="wrapper style1 fade-up"
          title="Get in touch"
          description="(Functional use coming soon! Please use email attached)"
          ref={reff4}
        >
          <ContactSection />
        </SectionDescriptor>
      </div>

      <Footer />
    </body>
  )
}

export default IndexPage
