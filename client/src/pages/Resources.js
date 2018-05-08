import React, { Component } from "react";
import ResourceCard from "../components/ResPage/ResourceCard";
import techlogo from "../tech_image.json";
import Footer from "../components/Footer";

class Resources extends Component {
  render() {
    return (
      <div className="resources">
        <div>
          {techlogo.map(logo => (
            <ResourceCard 
              key={logo.id}
              image={logo.image}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Resources;
