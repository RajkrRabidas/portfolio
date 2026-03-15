import { useState } from "react";
import ContactField from "./ContactField";
import { initialFormValues } from "../../constants/formConstants";

function ContactForm() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const messageClassName = formValues.message.trim()
    ? "contact-input filled"
    : "contact-input";

  return (
    <form
      name="sentMessage"
      id="contactForm"
      noValidate
      className="contacts-form"
      action="https://getform.io/f/bejedzea"
      method="POST"
    >
      <div className="contacts-content-container">
        <div className="contacts-form-container">
          <div className="contacts-form-row">
            <ContactField
              id="name"
              label="Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              message="Please enter your name."
            />
            <ContactField
              id="company"
              label="Company"
              name="company"
              value={formValues.company}
              onChange={handleChange}
            />
          </div>

          <div className="contacts-form-row">
            <ContactField
              id="email"
              label="E-mail"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              message="Please enter your email address."
            />
            <ContactField
              id="phone"
              label="Phone"
              name="phone"
              type="tel"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>

          <div className="contacts-form-row-2">
            <div className="input-container">
              <div className="control-group form-group">
                <div className="controls">
                  <textarea
                    id="message"
                    name="message"
                    rows={1}
                    className={messageClassName}
                    required
                    value={formValues.message}
                    onChange={handleChange}
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <span className="focus-border"></span>
                </div>
              </div>
            </div>
            <div className="send-icon-container">
              <button type="submit" className="send-icon-btn" id="sendMessageButton">
                <img id="send-icon" className="send-icon" src="/assets/send-icon.svg" alt="send" />
              </button>
            </div>
          </div>
          <div id="success" style={{ marginTop: "5%" }}></div>
        </div>

        <div className="contacts-info"></div>
      </div>
    </form>
  );
}

export default ContactForm;
