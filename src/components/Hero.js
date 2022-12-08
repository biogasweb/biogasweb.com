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
        className="section hero is-primary"
        style={{
          borderBottomLeftRadius: "3rem",
          borderBottomRightRadius: "3rem",
        }}
      >
        <div className="container has-text-centered">
          {(title || subheading) && (
            <div className="columns is-centered is-gapless hero-body">
              <div className="column is-12-mobile is-7-tablet">
                <h1
                  className="title is-1 is-bold is-family-sans-serif"
                  style={{
                    color: "#682680",
                    // paddingLeft: "8rem",
                    // paddingRight: "8rem",
                  }}
                >
                  {title}
                </h1>
              </div>
            </div>
          )}
        </div>
      </section>
      <section
        className="section mt-4-mobile mt-6-desktop"
        // style={{
        //   paddingLeft: "8rem",
        //   paddingRight: "8rem",
        // }}
      >
        <div className="container has-text-centered">
          <div className="columns is-centered is-gapless">
            <div className="column is-11-mobile is-6-tablet">
              <h2
                className="subtitle is-family-sans-serif"
                style={{
                  color: "#682680",
                }}
              >
                {subheading}
              </h2>
            </div>
          </div>
        </div>
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
