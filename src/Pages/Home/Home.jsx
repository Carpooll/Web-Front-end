import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid Background__img_home text-white ">
        </div>
        <div className="container">
            <h1 className="title mt-3">CARPOOL</h1>
          <div className="row">
            <div className="col">
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
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
