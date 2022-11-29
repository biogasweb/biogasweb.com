import React from "react";
import PropTypes from "prop-types";

export default function Hero(props) {
  const {
    // height = 400,
    title,
    subheading,
    // position = "top left",
  } = props;

  return (
    <div>
      <section
        className="hero is-primary is-medium"
        style={{
          borderBottomLeftRadius: "3rem",
          borderBottomRightRadius: "3rem",
        }}
      >
        <div className="container has-text-centered">
        {(title || subheading) && (
        <div className="hero-body">
            <h1 
              className="title is-1 is-bold is-family-sans-serif"
              style={{
                color: "#682680",
                paddingLeft: "8rem",
                paddingRight: "8rem",      
              }}
            >
              {title}
            </h1>
          </div>
        )}
        
        </div>
        
      </section>
      <section
        className="container has-text-centered my-6"
        style={{
          paddingLeft: "8rem",
          paddingRight: "8rem",
        }}
      >
      <h2 
        className="subtitle is-family-sans-serif"
        style={{
          color: "#682680",
        }}
      >
        {subheading}
      </h2>
</section>
</div>
  );
}

Hero.propTypes = {
  // img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  // height: PropTypes.number,
  subheading: PropTypes.string,
};
