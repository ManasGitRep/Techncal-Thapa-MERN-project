import { useState } from "react";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  //lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact us</h1>
        </div>
        {/* conatact page main */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/login.jpg" alt="we are always ready to help" />
          </div>
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.335179190941!2d75.89370334999997!3d22.75293915000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1721821973376!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
