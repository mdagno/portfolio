import React from 'react';
import './Contact.css';
import { CSSTransition } from 'react-transition-group';

class Contact extends React.Component {
  state = {
    appear: false,
  }

  componentDidMount() {
    this.setState({appear: true})
  }
  render() {
    return(
      <CSSTransition
      in={this.state.appear}
      appear={true}
      timeout={200}
      classNames="my-node"
      >
      <div id="contact-info" style={this.props.windowWidth > 768 ? this.props.margine : null}>
        <h3 className="section-header">Contact Me</h3>
        <ul>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>E-mail</li>
          <li>Resume</li>
        </ul>
      </div>
      </CSSTransition>
    )
  }

}

export default Contact;