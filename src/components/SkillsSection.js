import React from "react"

const SkillsSection = props => (
  <section>
    <span class={props.className}></span>
    <h3>{props.title}</h3>
    <p>{props.paragraphText}</p>
  </section>
)

export default SkillsSection
