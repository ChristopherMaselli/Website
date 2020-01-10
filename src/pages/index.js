import React from "react"
import { Link } from "gatsby"
import WelcomeSection from "../components/WelcomeSection"
import StorySection from "../components/StorySection"
import SkillsSection from "../components/SkillsSection"
import SectionDescriptor from "../components/SectionDescriptor"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import "../components/css/main.css"
import "../components/css/noscript.css"
import "../components/css/fontawesome-all.min.css"

//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <body class="is-preload">
    <SEO title="Home" />

    <section id="sidebar">
      <div class="inner">
        <nav>
          <ul>
            <li>
              <a href="#intro">Welcome</a>
            </li>
            <li>
              <a href="#one">My Story</a>
            </li>
            <li>
              <a href="#two">My Projects</a>
            </li>
            <li>
              <a href="#three">Get in touch</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <div id="wrapper">
      <WelcomeSection />

      <section id="one" class="wrapper style2 spotlights">
        <StorySection
          title="The Choice"
          img="images/pic01.jpg"
          dataPosition="center center"
          bodyParagraph="After working as a Bioengineer for 3 long years, I knew it wasnt for
        me. I fell in love with programming after a 2 year long coding project
        with my brother, and as I did, I realized this was the career I was
        really meant for."
          link={`/firstjob`}
        />

        <StorySection
          title="The Game"
          img="images/pic02.jpg"
          dataPosition="top center"
          bodyParagraph="(Things about the game go here)"
          link="generic.html"
        />

        <StorySection
          title="The first Job"
          dataPosition="25% 25%"
          img="images/pic03.jpg"
          bodyParagraph="(Things about the job go here)"
          link="generic.html"
        />

        <StorySection
          title="The second Project"
          dataPosition="25% 25%"
          img="images/pic04.jpg"
          bodyParagraph="(Things about the Helpdesk system go here)"
          link="generic.html"
        />
      </section>

      <SectionDescriptor
        id="two"
        className="wrapper style3 fade-up"
        title="What we do"
        description="            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
      turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
      lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
      imperdiet est velit quis lorem."
      >
        <div class="features">
          <SkillsSection
            className="icon solid major fa-code"
            title="Aliquam sed nullam"
            paragraphText="Phasellus convallis elit id ullam corper amet et pulvinar. Duis
            aliquam turpis mauris, sed ultricies erat dapibus."
          />

          <SkillsSection
            className="icon solid major fa-lock"
            title="Aliquam sed nullam"
            paragraphText="Phasellus convallis elit id ullam corper amet et pulvinar. Duis
            aliquam turpis mauris, sed ultricies erat dapibus."
          />

          <SkillsSection
            className="icon solid major fa-cog"
            title="Aliquam sed nullam"
            paragraphText="Phasellus convallis elit id ullam corper amet et pulvinar. Duis
            aliquam turpis mauris, sed ultricies erat dapibus."
          />

          <SkillsSection
            className="icon solid major fa-desktop"
            title="Aliquam sed nullam"
            paragraphText="Phasellus convallis elit id ullam corper amet et pulvinar. Duis
            aliquam turpis mauris, sed ultricies erat dapibus."
          />

          <SkillsSection
            className="icon solid major fa-link"
            title="Aliquam sed nullam"
            paragraphText="Phasellus convallis elit id ullam corper amet et pulvinar. Duis
            aliquam turpis mauris, sed ultricies erat dapibus."
          />

          <SkillsSection
            className="icon major fa-gem"
            title="Aliquam sed nullam"
            paragraphText="Phasellus convallis elit id ullam corper amet et pulvinar. Duis
            aliquam turpis mauris, sed ultricies erat dapibus."
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
        description="Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
          turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
          lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
          imperdiet est velit quis lorem."
      >
        <ContactSection />
      </SectionDescriptor>
    </div>

    <Footer />

    <p>
      <a href="/page-2/">Go to page 2</a>
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </body>
)

export default IndexPage
