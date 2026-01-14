import React from 'react'

export default function About(props) {
  // Get developer info from environment variables
  const githubUsername = process.env.REACT_APP_GITHUB_USERNAME || 'krn1904';
  const githubRepoUrl = process.env.REACT_APP_GITHUB_REPO_URL || 'https://github.com/krn1904/TextUtils';

  const containerStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
  };

  const accordionStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    border: props.mode === 'dark' ? '1px solid #6c757d' : '1px solid #dee2e6'
  };

  const buttonStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    borderColor: props.mode === 'dark' ? '#6c757d' : '#dee2e6',
    boxShadow: 'none'
  };

  return (
    <div className="container my-5" style={containerStyle}>
      <h1 className="mb-4">About TextUtils</h1>
      <p className="lead mb-4">
        TextUtils is a simple yet powerful text manipulation utility designed to help you analyze and transform your text with ease.
      </p>
      
      <div className="accordion" id="accordionAbout" style={accordionStyle}>
        {/* About TextUtils Section */}
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header" id="headingOne" style={accordionStyle}>
            <button 
              className="accordion-button" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseOne" 
              aria-expanded="true" 
              aria-controls="collapseOne" 
              style={buttonStyle}
            >
              <strong>📖 What is TextUtils?</strong>
            </button>
          </h2>
          <div 
            id="collapseOne" 
            className="accordion-collapse collapse show" 
            aria-labelledby="headingOne" 
            data-bs-parent="#accordionAbout"
            style={accordionStyle}
          >
            <div className="accordion-body" style={accordionStyle}>
              <p>
                <strong>TextUtils</strong> is a free online text manipulation tool that allows you to perform various operations on your text quickly and efficiently. 
                Whether you need to convert text case, count words and characters, or analyze reading time, TextUtils has got you covered.
              </p>
              <p className="mb-0">
                All processing happens directly in your browser - no data is sent to any server, ensuring your privacy and security. 
                It's perfect for students, writers, developers, and anyone who works with text regularly.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header" id="headingTwo" style={accordionStyle}>
            <button 
              className="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseTwo" 
              aria-expanded="false" 
              aria-controls="collapseTwo" 
              style={buttonStyle}
            >
              <strong>✨ Features</strong>
            </button>
          </h2>
          <div 
            id="collapseTwo" 
            className="accordion-collapse collapse" 
            aria-labelledby="headingTwo" 
            data-bs-parent="#accordionAbout"
            style={accordionStyle}
          >
            <div className="accordion-body" style={accordionStyle}>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <strong>🔤 Case Conversion:</strong> Convert your text to UPPERCASE or lowercase instantly
                </li>
                <li className="mb-2">
                  <strong>📊 Text Analysis:</strong> Get real-time word count, character count, and reading time estimates
                </li>
                <li className="mb-2">
                  <strong>🧹 Text Clearing:</strong> Clear all text with a single click
                </li>
                <li className="mb-2">
                  <strong>👁️ Live Preview:</strong> See your text changes in real-time as you type
                </li>
                <li className="mb-2">
                  <strong>🌓 Dark Mode:</strong> Easy on the eyes with dark mode support for comfortable usage
                </li>
                <li className="mb-0">
                  <strong>🔒 Privacy First:</strong> All operations are performed locally in your browser - no data is sent to servers
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header" id="headingThree" style={accordionStyle}>
            <button 
              className="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseThree" 
              aria-expanded="false" 
              aria-controls="collapseThree" 
              style={buttonStyle}
            >
              <strong>🛠️ Technologies Used</strong>
            </button>
          </h2>
          <div 
            id="collapseThree" 
            className="accordion-collapse collapse" 
            aria-labelledby="headingThree" 
            data-bs-parent="#accordionAbout"
            style={accordionStyle}
          >
            <div className="accordion-body" style={accordionStyle}>
              <p>TextUtils is built with modern web technologies to ensure a fast, responsive, and reliable experience:</p>
              <ul>
                <li><strong>React 18:</strong> A powerful JavaScript library for building user interfaces</li>
                <li><strong>React Router:</strong> For seamless navigation between pages</li>
                <li><strong>Bootstrap 5:</strong> For responsive and beautiful UI components</li>
                <li><strong>JavaScript ES6+:</strong> Modern JavaScript features for clean and efficient code</li>
                <li><strong>CSS3:</strong> For custom styling and animations</li>
              </ul>
              <p className="mb-0">
                The application is deployed using GitHub Pages and follows React best practices for component-based architecture and state management.
              </p>
            </div>
          </div>
        </div>

        {/* Developer Info Section - Placeholder for user's info */}
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header" id="headingFour" style={accordionStyle}>
            <button 
              className="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseFour" 
              aria-expanded="false" 
              aria-controls="collapseFour" 
              style={buttonStyle}
            >
              <strong>👨‍💻 Developer Information</strong>
            </button>
          </h2>
          <div 
            id="collapseFour" 
            className="accordion-collapse collapse" 
            aria-labelledby="headingFour" 
            data-bs-parent="#accordionAbout"
            style={accordionStyle}
          >
            <div className="accordion-body" style={accordionStyle}>
              <p>
                TextUtils is developed and maintained by{' '}
                <strong>
                  <a 
                    href={`https://github.com/${githubUsername}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: props.mode === 'dark' ? '#4da3ff' : '#0d6efd' }}
                  >
                    {githubUsername}
                  </a>
                </strong>.
              </p>
              <p className="mb-0">
                <strong>🔗 Project Repository:</strong>{' '}
                <a 
                  href={githubRepoUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: props.mode === 'dark' ? '#4da3ff' : '#0d6efd' }}
                >
                  {githubRepoUrl}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
