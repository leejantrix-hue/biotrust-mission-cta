import React from 'react';
import PropTypes from 'prop-types';

const MissionCTA = ({ imageSrc, altText }) => {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '60px 40px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '60px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Column - 3D Bioreactor Image */}
        <div
          style={{
            flex: '1 1 45%',
            minWidth: '300px',
          }}
        >
          <img
            src={imageSrc}
            alt={altText}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
            }}
          />
        </div>

        {/* Right Column - Text Content */}
        <div
          style={{
            flex: '1 1 45%',
            minWidth: '300px',
          }}
        >
          {/* Pink/Magenta Pill Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#ff6b8a',
              color: '#ffffff',
              padding: '6px 16px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
              }}
            />
            Our Main Mission
          </div>

          {/* Large Bold Heading */}
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: '#1a1a1a',
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            We provide a first ever solution to scalable &amp; controllable cell
            therapy manufacturing.
          </h1>
        </div>
      </div>
    </section>
  );
};

MissionCTA.propTypes = {
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
};

MissionCTA.defaultProps = {
  imageSrc:
    'https://via.placeholder.com/600x400/cccccc/969696?text=Bioreactor+3D+Image',
  altText: '3D Bioreactor',
};

export default MissionCTA;