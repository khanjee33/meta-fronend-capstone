import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
  return (
    <footer>
<h2>Follow us!</h2>
<div className="socialicons">
<a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
<a href="#"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
<a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>

</div>
    </footer>
  );
  }

export default Footer;