import React from 'react';
import Typed from 'react-typed';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faFile } from '@fortawesome/free-solid-svg-icons';
import MediaIcon from './MediaIcon';
import './landing.css';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="mainInfo">
          <h1 id="heading">
            <Typed
              startDelay={500}
              strings={["Hi I'm Jessica Lim"]}
              typeSpeed={60}
            />
          </h1>
          <p className="blurb">
            blah blah blah paragraph on how i am cool
          </p>
        </div>
        <div className="iconBar">
          <MediaIcon icon={faGithubSquare} />
          <br/>
          <MediaIcon icon={faLinkedin} />
          <br/>
          <MediaIcon icon={faEnvelopeSquare} />
          <br/>
          <MediaIcon icon={faFile} />
        </div>
      </div>
    );
  }
}

export default LandingPage;
