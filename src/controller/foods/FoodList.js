import { useEffect, useState } from 'react';

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch foods data from backend API
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch('/api/foods'); // Backend URL
        const data = await response.json();
        if (data.message === "success boljin") {
          setFoods(data.data); // Store food data
        }
      } catch (error) {
        console.error("Error fetching foods:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Food List</h1>
      {foods.length === 0 ? (
        <p>No food items available</p>
      ) : (
        <ul>
          {foods.map(food => (
            <li key={food._id}>
              <h2>{food.foodName}</h2>
              <p>{food.price}</p>
              <img src={food.image} alt={food.foodName} />
              <p>Category: {food.category ? food.category.categoryName : 'N/A'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodList;
