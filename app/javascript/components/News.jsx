import React from "react";
import { Item, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Item>
      <Item.Image size='medium' src={this.props.urlToImage} />

      <Item.Content>
        <Item.Header as='a'>{this.props.title}</Item.Header>
        <Item.Description>{this.props.description}</Item.Description>
        <a href={this.props.url} target="_blank"><button>Go To News Website</button></a> 
      </Item.Content>
    </Item>
    );
  }
}

export default News;
