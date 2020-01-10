import React from "react"

const Footer = () => (
  <footer id="footer" class="wrapper style1-alt">
    <div class="inner">
      <ul class="menu">
        <li>&copy; Untitled. All rights reserved.</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </ul>
    </div>
  </footer>
)

export default Footer
