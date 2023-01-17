import React from 'react';
import "./footer.css";

export default function Footer() {
  return (
    <footer>
    <div class="footer-container">
        <div class="logo-section">
            <img src="logo.png" alt="Logo" />
        </div>
        <div class="link-section">
            <div class="nav-links">
                <h3>Navigation</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="contact-links">
                <h3>Contact</h3>
                <ul>
                    <li>Email: info@example.com</li>
                    <li>Phone: +1 (555) 555-5555</li>
                    <li>Address: 123 Main Street, Anytown USA</li>
                </ul>
            </div>
            <div class="social-links">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

  )
}
