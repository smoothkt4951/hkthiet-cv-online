import React, { Component } from 'react';
import { Zoom } from "react-slideshow-image";
import Dialog from 'react-dialog'
import ReactModal from 'react-modal';
import image1 from "./images/background1.jpg";
import image2 from "./images/background2.jpg";
import image3 from "./images/background3.jpg";
import image4 from "./images/background4.jpg";
import image5 from "./images/background5.jpg";

// style was imported in index.css
import "react-slideshow-image/dist/styles.css";
import { Hidden } from '@material-ui/core';
const images = [image1, image2, image3, image4, image5];

const Arrows = {
  prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></div>,
  nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></div>
};


const SlideshowProjects01 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}

const SlideshowProjects02 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects03 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects04 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects05 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects06 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects07 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects08 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects09 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects010 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects011 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
export default class Projects extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //       isDialogOpen: false
  //   }
  // }

  // openDialog = () => this.setState({ isDialogOpen: true })

  // handleClose = () => this.setState({ isDialogOpen: false })
  constructor () {
    super();
    this.state = {
      showModal: false,
      hiddenSlideShow: 'inline'
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true , hiddenSlideShow: 'none'});
  }
  
  handleCloseModal () {
    this.setState({ hiddenSlideShow: 'inline', showModal: false});
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <h1><span>Projects</span></h1>

        <h1><span>Web Application</span></h1>

        <div  className="row">
          <div className="twelve columns collapsed">
            <h2>E-COMMERCE WEBSITE</h2>
            <div className="three columns">
              <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	CRUD features to manage list of products.</li>
                    <li>•	Sign-in, Sign-up, Sign-out and User Profile for manage user information.</li>
                    <li>•	Making HTTP calls using Axios and calling multipart API with file upload.</li>
                    <li>•	Using ExpressJS on the server-side and MongoDB for database management.</li>
                    <li>•	Using ReactJS with Material UI library on the client-side.</li>
                    <li>•	API Specification using Swagger 2.0.</li>
                    <li>•	Unit testing for API using Mocha & Chai and NYC for Coverage reporter.</li>
                    <li>•	Built Docker Compose for the API, Database and working on how to deploy a complete application</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>
        
            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects01 />
            </div>
          </div>
        </div>
        
        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>Chat application</h2>
            <div className="three columns">
              <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	CRUD features to manage list of products.</li>
                    <li>•	Sign-in, Sign-up, Sign-out and User Profile for manage user information.</li>
                    <li>•	Making HTTP calls using Axios and calling multipart API with file upload.</li>
                    <li>•	Using ExpressJS on the server-side and MongoDB for database management.</li>
                    <li>•	Using ReactJS with Material UI library on the client-side.</li>
                    <li>•	API Specification using Swagger 2.0.</li>
                    <li>•	Unit testing for API using Mocha & Chai and NYC for Coverage reporter.</li>
                    <li>•	Built Docker Compose for the API, Database and working on how to deploy a complete application</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>
            </div>

            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects02 />
            </div>
          </div>
        </div>

        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>FILES MANAGEMENT  WEBSITE</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	CRUD features to manage list of products.</li>
                    <li>•	Sign-in, Sign-up, Sign-out and User Profile for manage user information.</li>
                    <li>•	Making HTTP calls using Axios and calling multipart API with file upload.</li>
                    <li>•	Using ExpressJS on the server-side and MongoDB for database management.</li>
                    <li>•	Using ReactJS with Material UI library on the client-side.</li>
                    <li>•	API Specification using Swagger 2.0.</li>
                    <li>•	Unit testing for API using Mocha & Chai and NYC for Coverage reporter.</li>
                    <li>•	Built Docker Compose for the API, Database and working on how to deploy a complete application</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
            <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>          </div>
            
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects03 />
            </div>
          </div>
        </div>

        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>This CV Online with Love</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	CRUD features to manage list of products.</li>
                    <li>•	Sign-in, Sign-up, Sign-out and User Profile for manage user information.</li>
                    <li>•	Making HTTP calls using Axios and calling multipart API with file upload.</li>
                    <li>•	Using ExpressJS on the server-side and MongoDB for database management.</li>
                    <li>•	Using ReactJS with Material UI library on the client-side.</li>
                    <li>•	API Specification using Swagger 2.0.</li>
                    <li>•	Unit testing for API using Mocha & Chai and NYC for Coverage reporter.</li>
                    <li>•	Built Docker Compose for the API, Database and working on how to deploy a complete application</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}} >
              <SlideshowProjects04/>
            </div>
          </div>
        </div>

        <h1 style={{marginTop:'120px'}} ><span>Research</span></h1>
        <div className="row">
          <div className="twelve columns collapsed">
            <h2>KUBERNETES NOTEBOOK </h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	CRUD features to manage list of products.</li>
                    <li>•	Sign-in, Sign-up, Sign-out and User Profile for manage user information.</li>
                    <li>•	Making HTTP calls using Axios and calling multipart API with file upload.</li>
                    <li>•	Using ExpressJS on the server-side and MongoDB for database management.</li>
                    <li>•	Using ReactJS with Material UI library on the client-side.</li>
                    <li>•	API Specification using Swagger 2.0.</li>
                    <li>•	Unit testing for API using Mocha & Chai and NYC for Coverage reporter.</li>
                    <li>•	Built Docker Compose for the API, Database and working on how to deploy a complete application</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects05 />
            </div>
          </div>
        </div>

        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>MASSIVE DATA PROCESSING</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	CRUD features to manage list of products.</li>
                    <li>•	Sign-in, Sign-up, Sign-out and User Profile for manage user information.</li>
                    <li>•	Making HTTP calls using Axios and calling multipart API with file upload.</li>
                    <li>•	Using ExpressJS on the server-side and MongoDB for database management.</li>
                    <li>•	Using ReactJS with Material UI library on the client-side.</li>
                    <li>•	API Specification using Swagger 2.0.</li>
                    <li>•	Unit testing for API using Mocha & Chai and NYC for Coverage reporter.</li>
                    <li>•	Built Docker Compose for the API, Database and working on how to deploy a complete application</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects06 />
            </div>
          </div>
        </div>

        <h1 style={{marginTop:'120px'}}><span>AI ML</span></h1>

        <div className="row">
          <div className="twelve columns collapsed">
            <h2>Room Ocupancy Detection</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	CRUD features to manage list of products.</li>
                    <li>•	Sign-in, Sign-up, Sign-out and User Profile for manage user information.</li>
                    <li>•	Making HTTP calls using Axios and calling multipart API with file upload.</li>
                    <li>•	Using ExpressJS on the server-side and MongoDB for database management.</li>
                    <li>•	Using ReactJS with Material UI library on the client-side.</li>
                    <li>•	API Specification using Swagger 2.0.</li>
                    <li>•	Unit testing for API using Mocha & Chai and NYC for Coverage reporter.</li>
                    <li>•	Built Docker Compose for the API, Database and working on how to deploy a complete application</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects07 />
            </div>
          </div>
        </div>


        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>Echocardiogram</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	CRUD features to manage list of products.</li>
                    <li>•	Sign-in, Sign-up, Sign-out and User Profile for manage user information.</li>
                    <li>•	Making HTTP calls using Axios and calling multipart API with file upload.</li>
                    <li>•	Using ExpressJS on the server-side and MongoDB for database management.</li>
                    <li>•	Using ReactJS with Material UI library on the client-side.</li>
                    <li>•	API Specification using Swagger 2.0.</li>
                    <li>•	Unit testing for API using Mocha & Chai and NYC for Coverage reporter.</li>
                    <li>•	Built Docker Compose for the API, Database and working on how to deploy a complete application</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects08 />
            </div>
          </div>
        </div>


        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>Number Bounding Boxes Detection</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	CRUD features to manage list of products.</li>
                    <li>•	Sign-in, Sign-up, Sign-out and User Profile for manage user information.</li>
                    <li>•	Making HTTP calls using Axios and calling multipart API with file upload.</li>
                    <li>•	Using ExpressJS on the server-side and MongoDB for database management.</li>
                    <li>•	Using ReactJS with Material UI library on the client-side.</li>
                    <li>•	API Specification using Swagger 2.0.</li>
                    <li>•	Unit testing for API using Mocha & Chai and NYC for Coverage reporter.</li>
                    <li>•	Built Docker Compose for the API, Database and working on how to deploy a complete application</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects09 />
            </div>
          </div>
        </div>

        <h1 style={{marginTop:'120px'}}><span>Others</span></h1>

        <div className="row">
          <div className="twelve columns collapsed">
            <h2>Cralwing Viet Nam News</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects010 />
            </div>
          </div>
        </div>

        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>Soduku Problem</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects011 />
            </div>
          </div>
        </div>

  </section>
        );
  }
}