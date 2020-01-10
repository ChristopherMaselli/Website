import PropTypes from "prop-types"
import React from "react"

const Header = props => (
  <body class="is-preload">
    <header id="header">
      <a href="./" class="title">
        Home
      </a>
      <nav>
        <ul>
          <li>
            <a href="./Bioengineering" class="active">
              Bioengineering
            </a>
          </li>
          <li>
            <a href="./GameProject">Game Project</a>
          </li>
          <li>
            <a href="./InnovestSystems">Innovest Systems</a>
          </li>
          <li>
            <a href="./HelpdeskProject">Helpdesk Project</a>
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
