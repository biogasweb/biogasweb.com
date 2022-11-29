import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <main className="columns is-multiline is-mobile">
    {gridItems.map((item, i) => (
      <article key={item.text} className="media">
        {i % 2 === 0 ? (
          <div className="column" style={{ display: "flex", alignItems: "center"}}>
            <figure className="media-left">
              <div className=""
                style={{
                  // width: "240px",
                  // display: "inline-block",
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </figure>
            <div className="media-content">
              <div className="column content">
                <h3 className="is-family-sans-serif"
                  style={{
                    color: "#682680",
                  }}
                >{item.head}</h3>
                <p>{item.text}</p>
              </div>
            </div>
            </div>) : (
          <div style={{ display: "flex", alignItems: "center"}}>
            <div className="media-content">
              <div className="column content">
                <h3 className="is-family-sans-serif"
                  style={{
                    color: "#682680",
                  }}
                >{item.head}</h3>
                <div dangerouslySetInnerHTML={{__html: item.text}} />
              </div>
            </div>
            <figure className="media-left">
              <div className="column"
                style={{
                  // width: "240px",
                  // display: "inline-block",
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </figure>
          </div>
        )}
      </article>
    ))}
  </main>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
