import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text6">
                  Download Your Favorite Games Launcher
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text4">
                  Get ready to dive into your favorite games with our gaming
                  launcher. Experience seamless gameplay and easy access to all
                  your games in one place.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text5">Download Now</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <img alt={props.imageAlt} src={props.imageSrc} className="hero17-image" />
    </div>
  )
}

Hero17.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  content1: undefined,
  action1: undefined,
  heading1: undefined,
  imageAlt: 'image',
}

Hero17.propTypes = {
  imageSrc: PropTypes.string,
  content1: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  imageAlt: PropTypes.string,
}

export default Hero17
