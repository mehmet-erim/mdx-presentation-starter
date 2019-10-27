import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn, faMedium, faMediumM } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/flexboxgrid.min.css';

const styles = {
  header: {
    color: '#7e5050',
    textShadow: 'rgba(0, 0, 0, 0.5) 2px 1px',
    marginTop: 0,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.67em',
    fontWeight: 'bold',
  },
};

export default () => (
  <div style={{ textAlign: 'center', color: '#6e6e6e' }} className="row">
    <div className="col-xs-12">
      <h1 style={styles.header}>Presentation Title</h1>
      <div style={{ minHeight: '270px' }}>
        <img
          style={{ borderRadius: '50%', backgroundColor: 'rgb(239, 239, 239)' }}
          src={'https://avatars3.githubusercontent.com/u/34455572?s=400&v=4'}
          width={250}
          height={'auto'}
        />
      </div>
    </div>
    <div className="col-xs-12">
      <h3 style={{ marginBottom: 0 }}>Mehmet Erim</h3>
      <h4 style={{ marginTop: '5px' }}>
        Javascript Developer <br />
        Volosoft
      </h4>
    </div>
    <div className="row col-xs-12" style={styles.footer}>
      <div className="col-xs-12 col-md-6 col-lg-3">
        <FontAwesomeIcon style={{ marginTop: '5px', color: '#333' }} icon={faGithub} />
        &nbsp; mehmet-erim
      </div>
      <div className="col-xs-12 col-md-6 col-lg-3">
        <FontAwesomeIcon style={{ marginTop: '5px', color: 'rgb(29, 161, 242)' }} icon={faTwitter} />
        &nbsp; mehmeterim_
      </div>
      <div className="col-xs-12 col-md-6 col-lg-3">
        <FontAwesomeIcon style={{ marginTop: '5px', color: '#0077b5' }} icon={faLinkedinIn} />
        &nbsp; mehmet-erim
      </div>
      <div className="col-xs-12 col-md-6 col-lg-3">
        <FontAwesomeIcon style={{ marginTop: '5px', color: '#333' }} icon={faMediumM} />
        &nbsp; mehmeterim
      </div>
    </div>
  </div>
);
