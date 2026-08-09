import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, cloudinaryImageId, sla, costForTwo } = resData?.info || {};
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant"
      />

      <div className="res-content">
        <h3>{name}</h3>
        <p>{avgRating} ⭐</p>
        <p>{cuisines?.join(", ")}</p>
        <p>{sla?.deliveryTime} mins</p>
        <p>{costForTwo} mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;