import React from "react";
import { Header, Segment } from 'semantic-ui-react'

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
    <Header as='h2' attached='top'>
    {this.props.label}
    </Header>
    <Segment attached>
    {this.props.value}
    </Segment>
  </div>
    );
  }
}

export default Result;
