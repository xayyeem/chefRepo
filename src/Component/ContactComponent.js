import "../css/Contact.css";

const ContactComponent = () => {
    return (
        <div className="contact-page">

            {/* Hero */}
            <section className="contact-hero">
                <span>GET IN TOUCH</span>

                <h1>
                    We'd love to hear from you.
                </h1>

                <p>
                    Have a question, suggestion, or feedback?
                    Reach out to us and we'll be happy to help.
                </p>
            </section>


            {/* Contact Content */}
            <section className="contact-container">

                <div className="contact-info">

                    <h2>Contact Us</h2>

                    <p className="contact-description">
                        Whether you have a question about our restaurants,
                        want to share feedback, or simply want to say hello,
                        we're here for you.
                    </p>


                    <div className="contact-item">

                        <div className="contact-icon">
                            📧
                        </div>

                        <div>
                            <h3>Email</h3>
                            <p>support@foodapp.com</p>
                        </div>

                    </div>


                    <div className="contact-item">

                        <div className="contact-icon">
                            📞
                        </div>

                        <div>
                            <h3>Phone</h3>
                            <p>+91 98765 43210</p>
                        </div>

                    </div>


                    <div className="contact-item">

                        <div className="contact-icon">
                            📍
                        </div>

                        <div>
                            <h3>Location</h3>
                            <p>India</p>
                        </div>

                    </div>

                </div>


                {/* Contact Form */}
                <div className="contact-form">

                    <h2>Send us a message</h2>

                    <form>

                        <div className="form-group">
                            <label>Name</label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>


                        <div className="form-group">
                            <label>Email</label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>


                        <div className="form-group">
                            <label>Message</label>

                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                            />
                        </div>


                        <button type="submit" className="contact-btn">
                            Send Message
                        </button>

                    </form>

                </div>

            </section>

        </div>
    );
};

export default ContactComponent;