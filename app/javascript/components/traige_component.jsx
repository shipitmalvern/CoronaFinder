import React from "react"
import PropTypes from "prop-types"
import Card from 'terra-card/lib/Card';

class TraigeComponent extends React.Component{
  constructor(props){
    super(props)
  }
    render(){
      return(
      <Card>
        <Card.Body isContentCentered hasPaddingVertical={true} hasPaddingHorizontal={true} >
          {this.props.label}
        </Card.Body>
        <Card.Body hasPaddingVertical={true} hasPaddingHorizontal={true}>
          {this.props.value}
        </Card.Body>
      </Card>
      )
    }
  }

export default TraigeComponent;