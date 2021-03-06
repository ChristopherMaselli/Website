import React from "react"
import { Link } from "gatsby"

const StorySection = React.forwardRef((props, ref) => (
  <section ref={ref}>
    <Link to={props.link} class="image">
      <img
        src={props.img}
        alt=""
        data-position={props.dataPosition}
        className="homePageImage"
      />
    </Link>
    <div class="content">
      <div class="inner">
        <h2>{props.title}</h2>
        <p>{props.bodyParagraph}</p>
        <ul class="actions">
          <li>
            <Link to={props.link} class="button">
              Learn more
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
))

export default StorySection
