import React from "react"

const StorySection = props => (
  <section>
    <a href="#" class="image">
      <img src={props.img} alt="" data-position={props.dataPosition} />
    </a>
    <div class="content">
      <div class="inner">
        <h2>{props.title}</h2>
        <p>{props.bodyParagraph}</p>
        <ul class="actions">
          <li>
            <a href={props.link} class="button">
              Learn more
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default StorySection
