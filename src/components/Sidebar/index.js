import { Link, NavLink } from 'react-router-dom'
import LogoH from '../../assets/images/logo-s.png'
import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoH} alt="logo" />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink className="about-link" exact="true" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink className="contact-link" exact="true" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" /> 
            </NavLink>
        </nav>

        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/habeebuddin-mir"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/HabeebMir"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
    </ul>
    </div>
)

export default Sidebar