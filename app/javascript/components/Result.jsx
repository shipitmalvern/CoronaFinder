import React from "react";
import { Item } from "semantic-ui-react";

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Item>
          <Item.Content verticalAlign="middle">
            <Item.Header>{this.props.label}</Item.Header>
            <Item.Description>{this.props.value}</Item.Description>
          </Item.Content>
        </Item>
    );
  }
}

export default Result;
