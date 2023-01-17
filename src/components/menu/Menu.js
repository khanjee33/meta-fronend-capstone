import React from 'react';
import './menu.css';

export default function Menu() {
  return (   
    <div class="section" >
  <div class="left-content">
    <div class="week-specials">This week's specials</div>
  </div>
  <div class="right-content">
    <div class="order-button">Online Menu</div>
  </div>
  <div class="card-container">
    <div class="card">
      <img src="/images/greek salad.jpg" class="card-img" alt="card image" />
      <div class="card-text">
        <h3 class="card-title">Greek Salad</h3>
        <div class="card-price-container">
          <p class="card-price">$10</p>
        </div>
        <p class="card-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        <p class="card-delivery">Last order for delivery: Jan 20</p>
      </div>
    </div>
    <div class="card">
      <img src="/images/bruchetta.svg" class="card-img" alt="card image"/>
      <div class="card-text">
        <h3 class="card-title">Bruchetta</h3>
        <div class="card-price-container">
          <p class="card-price">$15</p>
        </div>
        <p class="card-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
        <p class="card-delivery">Last order for delivery: Jan 21</p>
      </div>
    </div>
    <div class="card">
      <img src="/images/lemon dessert.jpg" class="card-img" alt="card image" />
      <div class="card-text">
        <h3 class="card-title">Lemon Dessert</h3>
        <div class="card-price-container">
          <p class="card-price">$20</p>
        </div>
        <div>
        <p class="card-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
        <p class="card-delivery">Last order for delivery: Jan 22</p>
        </div>
      </div>
    </div>
  </div>
  
</div>


  
    
    
  )
}
