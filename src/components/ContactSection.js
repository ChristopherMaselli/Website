import React from "react"

const ContactSection = React.forwardRef((props, ref) => (
  <div class="split style1" ref={ref}>
    <section>
      <form method="post" action="#">
        <div class="fields">
          <div class="field half">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div class="field half">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="5"></textarea>
          </div>
        </div>
        <ul class="actions">
          <li>
            <a href="" class="button submit">
              Send Message
            </a>
          </li>
        </ul>
      </form>
    </section>
    <section>
      <ul class="contact">
        <li>
          <h3>Address</h3>
          <span>
            455 East 14th Street
            <br />
            New York, NY 10009
            <br />
            USA
          </span>
        </li>
        <li>
          <h3>Email</h3>
          <a href="#">Christopherfmaselli@gmail.com</a>
        </li>
        <li>
          <h3>Phone</h3>
          <span>(201) 961-4859</span>
        </li>
        <li>
          <h3>Social</h3>
          <ul class="icons">
            <li>
              <a href="#" class="icon brands fa-twitter">
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands fa-facebook-f">
                <span class="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands fa-github">
                <span class="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands fa-instagram">
                <span class="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands fa-linkedin-in">
                <span class="label">LinkedIn</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
))

export default ContactSection
