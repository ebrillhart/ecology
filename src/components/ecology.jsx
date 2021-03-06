import React from "react";
import API from "./api";
import Overview from "./overview";

export default class Ecology extends React.Component {
  renderAPI(source) {
    if (source) {
      return (
        <div className="Documentation">
          <API source={this.props.source}/>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="Ecology">
        <div className="Overview">
          <Overview
            markdown={this.props.overview}
            scope={this.props.scope}
            customRenderers={this.props.customRenderers}
            playgroundtheme={this.props.playgroundtheme}/>
        </div>
        {this.renderAPI(this.props.source)}
      </div>
    );
  }
}

Ecology.propTypes = {
  overview: React.PropTypes.string,
  playgroundtheme: React.PropTypes.string,
  customRenderers: React.PropTypes.object,
  source: React.PropTypes.object,
  scope: React.PropTypes.object
};
