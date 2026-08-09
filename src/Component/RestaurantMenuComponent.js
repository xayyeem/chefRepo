import { useEffect } from "react";

const RestaurantMenuComponent = () => {

    const fetchMenuData = async () => {
        try {
            const swiggyUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.33880&lng=76.39060&restaurantId=364440&catalog_qa=undefined&submitAction=ENTER";

            const data = await fetch(`https://corsproxy.io/?url=${encodeURIComponent(swiggyUrl)}`);

            const text = await data.text();

            if (!text || text.trim() === "") {
                console.error("Empty response — Swiggy blocked the request");
                return;
            }

            const json = JSON.parse(text);
            console.log("Menu:", json);

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