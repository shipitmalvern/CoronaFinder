import React from "react"
import PropTypes from "prop-types"
import Card from 'terra-card/lib/Card';

class TraigeComponent extends React.Component{

    render(){
      return(
      <Card>
        <Card.Body isContentCentered >
          {this.props.label}
        </Card.Body>
        <Card.Body >
          {this.props.value}
        </Card.Body>
      </Card>
      )
    }
  }

export default TraigeComponent;