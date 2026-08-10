
import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import useOnlineStatus from '../Utils/useOnlineStatus';
import Shimmer from './Shimmer';
import '../../index.css'

const BodyComponent = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const[searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    const filterTopRated = () => {
        const filteredData = restaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4
        );
        setFilteredRestaurants(filteredData);
    };
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
    try {
        setLoading(true);
        setError(null);

        const swiggyUrl =
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.33880&lng=76.39060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

        const proxyUrl =
            `https://corsproxy.io/?url=${encodeURIComponent(swiggyUrl)}`;

        console.log("Calling:", proxyUrl);

        const response = await fetch(proxyUrl);

        if (!response.ok) {
            throw new Error(
                `Restaurant API failed with status ${response.status}`
            );
        }

        const json = await response.json();

        console.log("Swiggy Response:", json);

        const cards = json?.data?.cards || [];

        const restaurantCard = cards.find(
            (card) =>
                card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurantList =
            restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        console.log("Restaurant List:", restaurantList);

        setRestaurants(restaurantList);
        setFilteredRestaurants(restaurantList);

        if (restaurantList.length === 0) {
            setError("No restaurants found.");
        }

    } catch (error) {
        console.error("Error fetching restaurants:", error);
        setError(error.message);
    } finally {
        setLoading(false);
    }
};
    if(restaurants.length === 0){
        return <Shimmer/>
    }
    if (!onlineStatus) {
    return (
        <div className="offline-page">
            <div className="offline-card">
                <div className="offline-icon">
                    📡
                </div>

                <h1>You're offline</h1>

                <p>
                    Looks like your internet connection is unavailable.
                    Please check your connection and try again.
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

    return(
        <div className='body'>
            {/* <div className = 'search'> search</div> */}
                  <div className="filter">
                    <div className="search">
                        <input value={searchText} onChange={(e)=>{
                            setSearchText(e.target.value);
                        }} className='search-box' type="text" placeholder="Search for restaurants..." />
                        <button onClick={()=>{
                            const searchData = restaurants.filter((restaurant)=>restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
                            setFilteredRestaurants(searchData);
                        }}>search</button>
                    </div>
                    <button onClick={filterTopRated} className="filter-btn">
                    Top rated Restaurant
                    </button>
                </div>
                <div className='res-container'>
                    {
                        filteredRestaurants.map((restaurant, index)=>{
                            return <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
                        })
                    }
                </div>
        </div>
    )
}

export default BodyComponent;  