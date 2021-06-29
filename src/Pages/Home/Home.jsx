import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid text-white " id="home"></div>
        <div className="container ">
          <img
            className="Background__img_home"
            src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
          />
          <div className="container">
          <h1 className="title mt-3">CARPOOL</h1>
         
              <p className="text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem magnam dolorem eaque dolore obcaecati quibusdam
                nobis qui omnis, fuga culpa voluptate quos nulla at libero
                nostrum suscipit asperiores ducimus tempora?Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Dolor maiores nihil fuga
                hic voluptates, doloribus aliquam architecto dolores error
                beatae consectetur, nostrum accusamus laborum expedita, soluta
                aliquid nam at. Omnis?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Labore odio nobis, consequatur autem dolorum
                aperiam pariatur earum, blanditiis ea nostrum animi qui
                reprehenderit optio voluptatem ex vitae esse. Sunt, aut!
              </p>
          
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
