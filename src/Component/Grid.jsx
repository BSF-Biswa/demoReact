import React from 'react';
import ind5 from '../assets/Images/ind5.jpg';
import ind6 from '../assets/Images/ind6.jpg';
import ind7 from '../assets/Images/ind7.jpg';

export default function Grid() {
  return (
    <div class="container mt-5">
          <div class="row">
              <div class="col-lg-4">
                <div class="card" style={{width: "18rem;"}}>
                  <img src={ind5} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">INDIAN ARMY</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card" style={{width: "18rem;"}}>
                  <img src={ind6} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">INDIAN NAVY</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
              <div class="card" style={{width: "18rem;"}}>
                  <img src={ind7} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">INDIAN AIR FORCE</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
              </div>
          </div>
</div>
  )
}

