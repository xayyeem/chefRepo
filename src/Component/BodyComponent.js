
import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const BodyComponent = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const[searchText, setSearchText] = useState("");

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
        const response = await fetch('https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.33880&lng=76.39060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await response.json();

        const cards = json?.data?.cards || [];

        const restaurantCard = cards.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        const restaurantList = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        console.log('Restaurant List:', restaurantList);
        setRestaurants(restaurantList);
        setFilteredRestaurants(restaurantList);

    } catch (error) {
        console.error('Error fetching restaurants:', error);
    }
};

    if(restaurants.length === 0){
        return <Shimmer/>
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