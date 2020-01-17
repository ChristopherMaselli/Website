import React from "react"
import { Link } from "gatsby"

const WelcomeSection = React.forwardRef((props, ref) => (
  <section id="intro" class="wrapper style1 fullscreen fade-up" ref={ref}>
    <div class="inner">
      <h1>Welcome!</h1>
      <p>
        ChristopherFMaselli.com!
        <br />
        Scroll down to learn more about me.
      </p>
      <ul class="actions">
        <li>
          <Link to="#one" class="button scrolly">
            My Story
          </Link>
        </li>
      </ul>
    </div>
  </section>
))

export default WelcomeSection
