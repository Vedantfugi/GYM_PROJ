import React from 'react';

function Meal({ userData }) {
  return (
    <div>
      <h2>Your Personalized Meal Plan</h2>
      <p>Welcome, {userData.username}!</p>
      {/* Additional meal plan details can be displayed based on userData */}
    </div>
  );
}

export default Meal;
