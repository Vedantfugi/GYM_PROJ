import React, { useState } from 'react';
import axios from 'axios';


const CalorieCounter = () => {
  const [foodCalories, setFoodCalories] = useState(0);
  const [foodProtein, setFoodProtein] = useState(0);
  const [foodCarbs, setFoodCarbs] = useState(0);
  const [foodFats, setFoodFats] = useState(0);
  const [calculatedCalories, setCalculatedCalories] = useState(0);
  const [calculatedProtein, setCalculatedProtein] = useState(0);
  const [calculatedCarbs, setCalculatedCarbs] = useState(0);
  const [calculatedFats, setCalculatedFats] = useState(0);
  const [foodItem, setFoodItem] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [error, setError] = useState(null);

  const fetchFoodNutrition = async (food) => {
    const appId = '98465072'; 
    const appKey = 'c47e424180b76bc728c4c923937889d2'; 

    try {
      const response = await axios.post(
        `https://trackapi.nutritionix.com/v2/natural/nutrients`,
        {
          query: food,
        },
        {
          headers: {
            'x-app-id': appId,
            'x-app-key': appKey,
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.data.foods && response.data.foods.length > 0) {
        const foodData = response.data.foods[0];
        setFoodCalories((prevCalories) => prevCalories + foodData.nf_calories);
        setFoodProtein((prevProtein) => prevProtein + foodData.nf_protein);
        setFoodCarbs((prevCarbs) => prevCarbs + foodData.nf_total_carbohydrate);
        setFoodFats((prevFats) => prevFats + foodData.nf_total_fat);
      }
    } catch (error) {
      console.error('Error fetching food nutrition:', error);
      setError('Failed to fetch nutrition information. Please try again.');
    }
  };

  const handleAddFood = async () => {
    setError(null); 
    await fetchFoodNutrition(foodItem);
    setFoodItem('');
  };

  const handleCalculateNutrition = () => {
    setError(null);

  
    const weightKg = parseFloat(weight) * 0.453592; 
    const heightCm = parseFloat(height) * 2.54; 

    
    const BMR = 10 * weightKg + 6.25 * heightCm - 5 * 25;
    const TDEE = BMR * 1.55; 

   
    const protein = weightKg * 2.2; 
    const carbs = TDEE * 0.5 / 4; 
    const fats = TDEE * 0.3 / 9; 

    setCalculatedCalories(TDEE.toFixed(2));
    setCalculatedProtein(protein.toFixed(2));
    setCalculatedCarbs(carbs.toFixed(2));
    setCalculatedFats(fats.toFixed(2));
  };

  const handleReset = () => {
    setFoodCalories(0);
    setFoodProtein(0);
    setFoodCarbs(0);
    setFoodFats(0);
    setCalculatedCalories(0);
    setCalculatedProtein(0);
    setCalculatedCarbs(0);
    setCalculatedFats(0);
    setFoodItem('');
    setWeight('');
    setHeight('');
    setError(null);
  };

  return (
    <section className="calorie">
      <div className="overlay">
        <h2>Calorie & Macro Counter</h2>
        <div className="food-counter">
          <h3>Food Counter</h3>
          <div className="input-group">
            <input
              type="text"
              placeholder="Food Item"
              value={foodItem}
              onChange={(e) => setFoodItem(e.target.value)}
            />
            <button onClick={handleAddFood}>Add Food</button>
          </div>
          <div className="calorie-details">
            <h4>Calories: {foodCalories.toFixed(2)}</h4>
            <h4>Protein: {foodProtein.toFixed(2)}g</h4>
            <h4>Carbs: {foodCarbs.toFixed(2)}g</h4>
            <h4>Fats: {foodFats.toFixed(2)}g</h4>
          </div>
        </div>
        <div className="weight-counter">
          <h3>Weight & Height Counter</h3>
          <div className="input-group">
            <input
              type="number"
              placeholder="Weight (lbs)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <input
              type="number"
              placeholder="Height (inches)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <button onClick={handleCalculateNutrition}>Calculate</button>
            <button onClick={handleReset}>Reset</button>
          </div>
          <div className="calorie-details">
            <h4>Calories: {calculatedCalories}</h4>
            <h4>Protein: {calculatedProtein}g</h4>
            <h4>Carbs: {calculatedCarbs}g</h4>
            <h4>Fats: {calculatedFats}g</h4>
          </div>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </section>
  );
};

export default CalorieCounter;
