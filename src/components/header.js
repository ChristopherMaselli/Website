import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import "../components/css/main.css"

const Header = props => (
  <body class="is-preload">
    <header id="header">
      <Link to="../" class="title">
        Home
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/Bioengineering" activeClassName="active">
              Bioengineering
            </Link>
          </li>
          <li>
            <Link to="/GameProject" activeClassName="active">
              Game Project
            </Link>
          </li>
          <li>
            <Link to="/InnovestSystems" activeClassName="active">
              Innovest Systems
            </Link>
          </li>
          <li>
            <Link to="/HelpdeskProject" activeClassName="active">
              Helpdesk Project
            </Link>
          </li>
          <li>
            <Link to="/Website" activeClassName="active">
              Website
            </Link>
          </li>
          <li>
            <Link to="/SonyMusicEntertainment" activeClassName="active">
              Sony Music Entertainment
            </Link>
          </li>
          <li>
            <Link to="/GameProjectHostingWebsite" activeClassName="active">
              Game-Project Hosting Website
            </Link>
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
