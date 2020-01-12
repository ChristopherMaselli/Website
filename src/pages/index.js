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
    threshold: 0.25,
  })

  const [ref2, inView2] = useInView({
    threshold: 0.25,
  })

  const [ref3, inView3] = useInView({
    threshold: 0.25,
  })

  const [ref4, inView4] = useInView({
    threshold: 0.25,
  })

  const [refMain, inViewMain] = useInView({
    threshold: 0.25,
  })

  const ref = React.createRef(reff)

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
                  My Projects
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
        <WelcomeSection />

        <section id="one" class="wrapper style2 spotlights">
          <StorySection
            title="The Start"
            img="../../bioengineering.jpg"
            dataPosition="center center"
            bodyParagraph="(Coming Soon)"
            link={`/Bioengineering`}
          />

          <StorySection
            title="The Game"
            img="../../game.png"
            dataPosition="top center"
            bodyParagraph="(Coming Soon)"
            link={`GameProject`}
          />

          <StorySection
            title="The Switch"
            dataPosition="25% 25%"
            img="../../innovest.png"
            bodyParagraph="(Coming Soon)"
            link={`InnovestSystems`}
          />

          <StorySection
            title="The Second Project"
            dataPosition="25% 25%"
            img="../../helpdesk.png"
            bodyParagraph="(Coming Soon)"
            link={`HelpdeskProject`}
          />

          <StorySection
            title="The Website"
            dataPosition="25% 25%"
            img="../../website.png"
            bodyParagraph="(Coming Soon)"
            link={`Website`}
          />
        </section>

        <SectionDescriptor
          id="two"
          className="wrapper style3 fade-up"
          title="Skills"
          description="(Coming Soon)"
        >
          <div class="features">
            <SkillsSection
              className="icon solid major fa-code"
              title="(Coming Soon)"
              paragraphText="(Coming Soon)"
            />

            <SkillsSection
              className="icon solid major fa-lock"
              title="(Coming Soon)"
              paragraphText="(Coming Soon)"
            />

            <SkillsSection
              className="icon solid major fa-cog"
              title="(Coming Soon)"
              paragraphText="(Coming Soon)"
            />

            <SkillsSection
              className="icon solid major fa-desktop"
              title="(Coming Soon)"
              paragraphText="(Coming Soon)"
            />

            <SkillsSection
              className="icon solid major fa-link"
              title="(Coming Soon)"
              paragraphText="(Coming Soon)"
            />

            <SkillsSection
              className="icon major fa-gem"
              title="(Coming Soon)"
              paragraphText="(Coming Soon)"
            />
          </div>

          <ul class="actions">
            <li>
              <a href="generic.html" class="button">
                Learn more
              </a>
            </li>
          </ul>
        </SectionDescriptor>

        <SectionDescriptor
          id="three"
          className="wrapper style1 fade-up"
          title="Get in touch"
          description="(Coming Soon)"
        >
          <ContactSection ref={reff} />
        </SectionDescriptor>
      </div>

      <Footer />
    </body>
  )
}

export default IndexPage
