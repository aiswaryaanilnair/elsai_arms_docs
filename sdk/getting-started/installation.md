---
sidebar_position: 1
---

# Installation

Installation guide for Elsai ARMS. ElsaiARMS can be installed using the following methods:

## Prerequisites

Before installing ElsaiARMS, ensure you have:

<div className="prerequisites-container">
  <div className="prerequisites-box">
    <div className="prerequisites-content">
      <div className="prerequisites-list">
        <div className="prerequisite-item">
          <div className="prerequisite-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>Python 3.9 or higher</span>
        </div>
        <div className="prerequisite-item">
          <div className="prerequisite-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>pip package manager</span>
        </div>
        <div className="prerequisite-item">
          <div className="prerequisite-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>Database(MongoDB/DynamoDB)</span>
        </div>
      </div>
    </div>
  </div>
</div>

## Installation Methods

<div className="contact-info">
  <div className="contact-card">
    <div className="contact-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div className="contact-content">
      <h4>Need Help with SDK Setup?</h4>
      <p>Our team is here to assist you with the installation and configuration process.</p>
      <a href="mailto:support@elsaifoundry.ai" className="contact-button">
        Contact Support
      </a>
    </div>
  </div>
</div>

## Verify Installation

After installation, verify that ElsaiARMS is installed correctly:

import StyledCodeBlock from '@site/src/components/StyledCodeBlock';

<StyledCodeBlock code="pip show elsai-arms" />

## Upgrade to latest version

To upgrade to latest version of ElsaiARMS:

<StyledCodeBlock code="pip install --index-url https://arms-packages.elsaifoundry.ai/root/elsai-arms/ elsai-arms --upgrade" />

## Next Steps

Once installation is complete, proceed to the [Configuration](./configuration.md) guide to set up ElsaiARMS for your environment.

<style>{`
  .prerequisites-container {
    margin: 1.5rem 0;
  }

  .prerequisites-box {
    background: linear-gradient(135deg, #f5f9ff 0%, #e8f4fd 100%);
    border-left: 4px solid #1976d2;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(33, 150, 243, 0.08);
    overflow: hidden;
  }

  .prerequisites-content {
    padding: 1.5rem;
  }

  .prerequisites-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .prerequisite-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #1565c0;
    font-weight: 500;
  }

  .prerequisite-icon {
    color: #1976d2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Dark theme adjustments */
  [data-theme='dark'] .prerequisites-box {
    background: linear-gradient(135deg, #1e2a4a 0%, #16213e 100%);
    border-left-color: #64b5f6;
  }

  [data-theme='dark'] .prerequisite-item {
    color: #e3f2fd;
  }

  [data-theme='dark'] .prerequisite-icon {
    color: #90caf9;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .prerequisites-content {
      padding: 1.25rem;
    }
    
    .prerequisites-list {
      gap: 0.625rem;
    }
  }

  /* Contact section styles */
  .contact-info {
    margin: 2rem 0;
  }

  .contact-card {
    background: linear-gradient(135deg, #f5f9ff 0%, #e8f4fd 100%);
    border: 1px solid #bfdbfe;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.08);
    transition: all 0.3s ease;
  }

  .contact-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.12);
  }

  .contact-icon {
    color: #3b82f6;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }

  .contact-content h4 {
    margin: 0 0 0.5rem 0;
    color: #1d4ed8;
    font-size: 1.125rem;
    font-weight: 600;
  }

  .contact-content p {
    margin: 0 0 1rem 0;
    color: #6b7280;
    line-height: 1.5;
  }

  .contact-button {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white !important;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    font-size: 0.875rem;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
  }

  /* Ensure white text in light theme */
  [data-theme='light'] .contact-button,
  [data-theme='light'] .contact-button:hover {
    color: white !important;
  }

  /* Force white text with multiple selectors */
  .contact-button,
  .contact-button:hover,
  .contact-button:active,
  .contact-button:focus,
  .contact-button:visited {
    color: white !important;
    fill: white !important;
  }

  /* Override any inherited text color */
  .contact-button * {
    color: white !important;
  }

  /* Target the button text specifically */
  .contact-button span,
  .contact-button div,
  .contact-button a {
    color: white !important;
  }

  /* Use CSS custom property as fallback */
  .contact-button {
    --button-text-color: white !important;
    color: var(--button-text-color) !important;
  }

  .contact-button:hover {
    background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
    color: white !important;
    text-decoration: none;
  }

  /* Dark theme adjustments for contact section */
  [data-theme='dark'] .contact-card {
    background: linear-gradient(135deg, #1e2a4a 0%, #16213e 100%);
    border-color: #1e40af;
  }

  [data-theme='dark'] .contact-content h4 {
    color: #93c5fd;
  }

  [data-theme='dark'] .contact-content p {
    color: #d1d5db;
  }

  [data-theme='dark'] .contact-button {
    background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
    color: white !important;
  }

  [data-theme='dark'] .contact-button:hover {
    background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
    color: white !important;
  }

  /* Responsive design for contact section */
  @media (max-width: 768px) {
    .contact-card {
      flex-direction: column;
      text-align: center;
      padding: 1.25rem;
    }
    
    .contact-icon {
      margin: 0 auto 0.75rem auto;
    }
  }
`}</style>
