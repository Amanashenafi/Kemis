// CardsDresses.jsx

import React, { useEffect, useState } from 'react';

const CardsDresses = () => {
  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/dresses')
      .then(response => response.json())
      .then(data => setDresses(data))
      .catch(error => console.error('Error fetching dresses:', error));
  }, []);

  

  return (
    <div>
       <div className="row product__filter">
            {dresses.map(dress => (
                <div className={`col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix ${dress.category}`}>
                  <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg={dress.img_url}>
                          <span className="label">{dress.size}</span>
                          <ul className="product__hover">
                              <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>More</span></a></li>
                          </ul>
                      </div>
                      <div className="product__item__text">
                          <h6>{dress.name}</h6>
                          <a href="#" className="add-cart">+ Add To Cart</a>
                          <div className="rating">
                              {dress.category}
                          </div>
                          <h5>{dress.price} ETB</h5>
                          <div className="product__color__select">
                              <label className={`active ${dress.color}`} htmlFor="pc-2">
                                  <input type="radio" id="pc-2"/>
                              </label>
                          </div>
                      </div>
                  </div>
              </div>            
              ))}
      </div>
    </div>
  );
};

export default CardsDresses;
