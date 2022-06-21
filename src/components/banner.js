import React from 'react';
import { Link } from 'react-router-dom';

const banner = () => {
  return (
    <section id="home" class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
							<span class="wow fadeInLeft" data-wow-delay=".2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft"}}>Welcome Friends..!!</span>
              <h1 class="wow fadeInUp" data-wow-delay=".4s"style={{visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft"}}>
								Let's Create a Blog..
							</h1>
              <p class="wow fadeInUp" data-wow-delay=".6s" style={{visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft"}}>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
              </p>
              {/* <Link to="javascript:void(0)" class="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s" style={{visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft"}}>Buy Now</Link> */}
            </div>
					</div>
					<div class="col-lg-6">
						<div class="hero-img wow fadeInUp" data-wow-delay=".5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft"}}>
							<img src="https://i.imgur.com/p86R9mm.jpg" alt=""/>
						</div>
					</div>
        </div>
			</div>
    </section>
  )
}

export default banner;
