import '../css/About.css'
const AboutComponent = () => {
    return (
        <div className="about-page">

            <section className="about-hero">
                <div className="about-hero-content">
                    <span className="about-tag">ABOUT US</span>

                    <h1>
                        Good food,
                        <br />
                        good mood.
                    </h1>

                    <p>
                        We make it easier for you to discover great restaurants
                        and delicious food around you.
                    </p>
                </div>
            </section>


            <section className="about-container">

                <div className="about-section">
                    <div className="about-text">
                        <span className="section-tag">WHO WE ARE</span>

                        <h2>
                            Your food journey starts here
                        </h2>

                        <p>
                            Our goal is simple — help you discover amazing
                            restaurants and make choosing what to eat easier.
                            From quick bites to your favourite meals, we bring
                            restaurant information together in one place.
                        </p>

                        <p>
                            Browse restaurants, explore cuisines, check ratings,
                            and find something delicious for every mood.
                        </p>
                    </div>

                    <div className="about-card">
                        <div className="about-card-icon">
                            🍔
                        </div>

                        <h3>Discover</h3>

                        <p>
                            Find restaurants and explore different cuisines
                            around you.
                        </p>
                    </div>
                </div>


                <div className="about-features">

                    <div className="feature-card">
                        <div className="feature-icon">🔎</div>

                        <h3>Easy Discovery</h3>

                        <p>
                            Search and discover restaurants without the hassle.
                        </p>
                    </div>


                    <div className="feature-card">
                        <div className="feature-icon">⭐</div>

                        <h3>Top Rated</h3>

                        <p>
                            Find highly rated restaurants and popular food
                            options.
                        </p>
                    </div>


                    <div className="feature-card">
                        <div className="feature-icon">❤️</div>

                        <h3>Made For Food Lovers</h3>

                        <p>
                            A simple experience designed around your love for
                            good food.
                        </p>
                    </div>

                </div>


                <section className="about-cta">

                    <h2>
                        Hungry already?
                    </h2>

                    <p>
                        Explore restaurants and find your next favourite meal.
                    </p>

                    <a href="/" className="about-btn">
                        Explore Restaurants
                    </a>

                </section>

            </section>

        </div>
    );
};

export default AboutComponent;