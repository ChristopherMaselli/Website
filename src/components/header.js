import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <body class="is-preload">
    <header id="header">
      <a href="index.html" class="title">
        Home
      </a>
      <nav>
        <ul>
          <li>
            <a href="firstjob.html" class="active">
              Bioengineering
            </a>
          </li>
          <li>
            <a href="gameproject.html">Game Project</a>
          </li>
          <li>
            <a href="elements.html">Innovest Systems</a>
          </li>
          <li>
            <a href="elements.html">Helpdesk Project</a>
          </li>
        </ul>
      </nav>
    </header>
  </body>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
