import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import useOnlineStatus from '../Utils/useOnlineStatus';
import Shimmer from './Shimmer';
import '../../index.css';

const BodyComponent = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try {

            setLoading(true);
            setError(null);

            const swiggyUrl =
                'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.33880&lng=76.39060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
const API_KEY = "4277810b"
            const proxyUrl =
    `https://corsproxy.io/?key=${API_KEY}&url=${encodeURIComponent(swiggyUrl)}`;

            const response = await fetch(proxyUrl);

            if (!response.ok) {
                throw new Error(
                    `API Error: ${response.status}`
                );
            }

            const json = await response.json();

            console.log("API Response:", json);

            const cards = json?.data?.cards || [];

            const restaurantCard = cards.find(
                (card) =>
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );

            const restaurantList =
                restaurantCard
                    ?.card
                    ?.card
                    ?.gridElements
                    ?.infoWithStyle
                    ?.restaurants || [];

            console.log("Restaurants:", restaurantList);

            setRestaurants(restaurantList);
            setFilteredRestaurants(restaurantList);

        } catch (error) {

            console.error(
                "Failed to fetch restaurants:",
                error
            );

            setError(error.message);

        } finally {

            setLoading(false);

        }
    };

    const filterTopRated = () => {

        const filteredData = restaurants.filter(
            (restaurant) =>
                restaurant?.info?.avgRating > 4
        );

        setFilteredRestaurants(filteredData);
    };

    const searchRestaurants = () => {

        const searchData = restaurants.filter(
            (restaurant) =>
                restaurant?.info?.name
                    ?.toLowerCase()
                    ?.includes(searchText.toLowerCase())
        );

        setFilteredRestaurants(searchData);
    };

    if (!onlineStatus) {

        return (
            <div className="offline-page">

                <div className="offline-card">

                    <div className="offline-icon">
                        📡
                    </div>

                    <h1>You're offline</h1>

                    <p>
                        Looks like your internet connection
                        is unavailable.
                    </p>

                    <button
                        className="offline-retry-btn"
                        onClick={() => window.location.reload()}
                    >
                        Try Again
                    </button>

                </div>

            </div>
        );
    }

    if (loading) {
        return <Shimmer />;
    }

    if (error) {

        return (
            <div className="error-page">

                <h2>
                    Unable to load restaurants
                </h2>

                <p>
                    {error}
                </p>

                <button onClick={fetchData}>
                    Try Again
                </button>

            </div>
        );
    }

    return (

        <div className="body">

            <div className="filter">

                <div className="search">

                    <input
                        value={searchText}
                        onChange={(e) =>
                            setSearchText(e.target.value)
                        }
                        className="search-box"
                        type="text"
                        placeholder="Search for restaurants..."
                    />

                    <button onClick={searchRestaurants}>
                        Search
                    </button>

                </div>

                <button
                    onClick={filterTopRated}
                    className="filter-btn"
                >
                    Top Rated Restaurant
                </button>

            </div>

            <div className="res-container">

                {filteredRestaurants.map((restaurant) => (

                    <RestaurantCard
                        resData={restaurant}
                        key={restaurant?.info?.id}
                    />

                ))}

            </div>

        </div>
    );
};

export default BodyComponent;