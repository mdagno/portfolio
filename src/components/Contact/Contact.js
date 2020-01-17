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
      <div id="contact-info" style={this.props.windowWidth >= 1024 ? this.props.margin : null}>
        <h3 className="section-header">CONTACT ME</h3>
        <ul className="contact-list">
         <p>Location: Vienna, Virginia</p>
         <li>
          <a href="https://github.com/mdagno/" target="_blank" rel="noopener noreferrer">
          GitHub
          </a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/marlon-agno/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          </li>
          <li>
          <a href="mailto:mdj.agno@gmail.com" target="_blank" rel="noopener noreferrer">
            mdj.agno@gmail.com
           </a>
          </li>
        </ul>
      </div>
      </CSSTransition>
    )
  }

}

export default Contact;