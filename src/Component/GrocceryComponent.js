import '../css/Grocery.css';
const GroceceryComponent = () => {
    return (
        <div className="grocery-page">
            <div className="grocery-hero">
                <div className="grocery-content">
                    <span className="grocery-badge">
                        🛒 Fresh & Fast
                    </span>

                    <h1>
                        Your Grocery,
                        <br />
                        <span>Delivered Fresh.</span>
                    </h1>

                    <p>
                        Everything you need for your kitchen,
                        delivered right to your doorstep.
                    </p>

                    <button className="grocery-btn">
                        Explore Groceries →
                    </button>
                </div>

                <div className="grocery-illustration">
                    🛒
                </div>
            </div>

            <div className="grocery-features">
                <div className="grocery-feature">
                    <div className="feature-icon">🥦</div>
                    <h3>Fresh Products</h3>
                    <p>Fresh fruits and vegetables every day.</p>
                </div>

                <div className="grocery-feature">
                    <div className="feature-icon">⚡</div>
                    <h3>Quick Delivery</h3>
                    <p>Get your groceries delivered quickly.</p>
                </div>

                <div className="grocery-feature">
                    <div className="feature-icon">🛍️</div>
                    <h3>Wide Selection</h3>
                    <p>Everything you need in one place.</p>
                </div>
            </div>
        </div>
    );
};

export default GroceceryComponent;