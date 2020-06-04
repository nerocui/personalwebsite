import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg width="14" height="21" viewBox="0 -3 14 21" xmlns="http://www.w3.org/2000/svg" {...this.props}><title>star</title><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z" fill={this.props.fill} fillRule="evenodd" /></svg>;
  }
}