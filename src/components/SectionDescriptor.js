import React from "react"

const SectionDescriptor = props => {
  return (
    <section id={props.id} class={props.className}>
      <div class="inner">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <main>{props.children}</main>
      </div>
    </section>
  )
}

export default SectionDescriptor
