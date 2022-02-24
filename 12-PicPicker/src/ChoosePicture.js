import React from 'react';
import PropTypes from 'prop-types';

// Normal way to display a prop using a variable:
export class ChoosePicture extends React.Component {
  render() {
    return (
      <div>
        <h1>Cute Pictures</h1>
        <img src={this.props.src} alt="cute" /><br/>
        <button type="button" onClick={this.props.start} >Start</button>
        <button type="button" onClick={this.props.stop}>Stop</button>
      </div>
    );
  }
}

// for developer alert (in console)
ChoosePicture.propTypes = {
  src: PropTypes.string.isRequired
};

ChoosePicture.defaultProps = { src:'https://i.picsum.photos/id/111/200/300.jpg?hmac=bXXQTtXTex0m2Ogp23o7VFcNHAllTfE-8eSPYK2GeGM'} ;
// if there is no props passed here, it uses this default prop.


// Stateless functional component way to display a prop using a variable:
/*export const ChoosePicture = (props) => {
  let src = props.src;
    return (
      <div>
        <h1>Cute Pictures</h1>
        <img src={src} alt="cute" />
      </div>
    );
}*/