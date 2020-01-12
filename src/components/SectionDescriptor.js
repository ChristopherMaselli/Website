import React from "react"

const SectionDescriptor = React.forwardRef((props, ref) => {
  return (
    <section id={props.id} class={props.className} ref={ref}>
      <div class="inner">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <main>{props.children}</main>
      </div>
    </section>
  )
})

export default SectionDescriptor
