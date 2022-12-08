import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <main className="columns is-vcentered is-multiline">
    {gridItems.map((item, i) => (
      <article key={item.text} className="media">
        {i % 2 === 0 ? (
          <div className="column is-10 is-offset-1 has-text-centered-mobile is-flex-tablet is-align-items-center">
            <figure className="media-left">
              <PreviewCompatibleImage imageInfo={item} />
            </figure>
            <div className="media-content">
              <div className="column content">
                <h3
                  className="is-family-sans-serif"
                  style={{
                    color: "#682680",
                  }}
                >
                  {item.head}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            </div>
          </div>
        ) : (
          <div className="column is-10 is-offset-1 has-text-centered-mobile is-flex-tablet is-align-items-center">
            <div className="media-content">
              <div className="column content">
                <h3
                  className="is-family-sans-serif"
                  style={{
                    color: "#682680",
                  }}
                >
                  {item.head}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            </div>
            <figure className="media-left">
              <PreviewCompatibleImage imageInfo={item} />
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
