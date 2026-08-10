import { useEffect } from "react";

const RestaurantMenuComponent = () => {

   const fetchMenuData = async () => {
    try {
        const url =
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.33880&lng=76.39060&restaurantId=302706&catalog_qa=undefined&submitAction=ENTER";

        const response = await fetch(url);

        // Wait 2 seconds after response arrives
        await new Promise(resolve => setTimeout(resolve, 2000));

        const data = await response.json();

        console.log("Menu data:", data);

    } catch (error) {
        console.error("Error:", error);
    }
};

    useEffect(() => {
        fetchMenuData();
    }, []);

    return (
        <div>
            <h1>Restaurant Menu Component</h1>
            <h1>Menu</h1>
            <ul>
                <li>Item 1</li>
            </ul>
        </div>
    );
};

export default RestaurantMenuComponent;