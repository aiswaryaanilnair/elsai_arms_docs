---
id: configuration
title: Configuration
sidebar_label: Configuration
sidebar_position: 3
---

import ConfigDetailsDropdown from '@site/src/components/ConfigDetailsDropdown';
import StyledCodeBlock from '@site/src/components/StyledCodeBlock';

# Configuration

ElsaiARMS SaaS is designed to be simple to configure and deploy. With just one required environment variable, you can get started monitoring your AI applications in minutes.

## Required Configuration

<div className="config-container">
  <div className="config-section">
    <div className="config-header">
      <div className="config-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4>ElsaiARMS API Key</h4>
      <div className="config-badge">Required</div>
    </div>
    <div className="config-content">
      <p>Your SaaS deployment requires only one environment variable:</p>
      <div className="env-variable">
        <span className="var-name">ELSAI_ARMS_API_KEY</span>
        <span className="var-value">arms-1234567890abcdef</span>
      </div>
      <p className="config-note">This API key authenticates your application with ElsaiARMS cloud services and provides access to all monitoring features.</p>
    </div>
  </div>
</div>

### Quick Start

<div className="quick-start">
  <div className="start-step">
    <div className="step-number">1</div>
    <div className="step-content">
      <h5>Get Your API Key</h5>
      <div className="step-description">
        <p>Sign up for ElsaiARMS SaaS and receive your unique API key</p>
      </div>
    </div>
  </div>

  <div className="start-step">
    <div className="step-number">2</div>
    <div className="step-content">
      <h5>Set Environment Variable</h5>
      <div className="step-description">
        <p>Configure your API key in your environment:</p>
        <StyledCodeBlock code="export ELSAI_ARMS_API_KEY=your-api-key-here" />
      </div>
    </div>
  </div>

  <div className="start-step">
    <div className="step-number">3</div>
    <div className="step-content">
      <h5>Access Dashboard</h5>
      <div className="step-description">
        <p>Log into your cloud dashboard at:</p>
        <StyledCodeBlock code="https://arms.elsaifoundry.ai/dashboard" />
      </div>
    </div>
  </div>
</div>

### Dashboard Features

<div className="dashboard-features">
  <div className="feature-grid">
    <div className="feature-card">
      <h5>Real-time Monitoring</h5>
      <p>Live updates of all system metrics and operations</p>
    </div>
    <div className="feature-card">
      <h5>Performance Analytics</h5>
      <p>Comprehensive analysis of LLM, RAG, and system performance</p>
    </div>
    <div className="feature-card">
      <h5>Cost Tracking</h5>
      <p>Monitor and optimize your AI infrastructure costs</p>
    </div>
    <div className="feature-card">
      <h5>Performance Benchmarking</h5>
      <p>Compare your AI performance against industry standards and competitors</p>
    </div>
    <div className="feature-card">
      <h5>Cost Forecasting</h5>
      <p>Predict and plan for future AI infrastructure costs and budgets</p>
    </div>
    <div className="feature-card">
      <h5>Governance</h5>
      <p>Establish policies and controls for responsible AI development and deployment</p>
    </div>
  </div>
</div>

### Benefits

<div className="customization-section">
  <div className="customization-item">
    <h5>Zero Infrastructure</h5>
    <p>No need to manage servers, databases, or deployment infrastructure</p>
  </div>
  
  <div className="customization-item">
    <h5>Automatic Scaling</h5>
    <p>Cloud services automatically scale based on your usage and requirements</p>
  </div>
  
  <div className="customization-item">
    <h5>Managed Security</h5>
    <p>Enterprise-grade security, compliance, and backup management</p>
  </div>
</div>


## SaaS Architecture

<div className="app-components">
  <div className="component-section">
    <div className="component-header">
      <div className="component-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4>Cloud-Hosted Dashboard</h4>
      <div className="component-badge">SaaS</div>
    </div>
    <div className="component-content">
      <p>A fully managed, cloud-hosted dashboard that provides real-time monitoring, analytics, and management capabilities for your AI applications.</p>
      
      <div className="feature-list">
        <div className="feature-item">Real-time Metrics</div>
        <div className="feature-item">Interactive Charts</div>
        <div className="feature-item">User Management</div>
        <div className="feature-item">Project Analytics</div>
      </div>
    </div>
  </div>

  <div className="component-section">
    <div className="component-header">
      <div className="component-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4>Business Intelligence & Analytics</h4>
      <div className="component-badge">Insights</div>
    </div>
    <div className="component-content">
      <p>Advanced analytics and reporting tools that provide actionable insights into your AI operations, helping you make data-driven decisions and optimize performance.</p>
      
      <div className="feature-list">
        <div className="feature-item">Performance Metrics</div>
        <div className="feature-item">Cost Analysis</div>
        <div className="feature-item">Usage Trends</div>
        <div className="feature-item">Alert Management</div>
      </div>
    </div>
  </div>
</div>


## Environment Variables

Set your API key in your environment:

<StyledCodeBlock code={`# Set your ElsaiARMS API key
export ELSAI_ARMS_API_KEY=your-api-key-here

# Or add to your .env file
echo "ELSAI_ARMS_API_KEY=your-api-key-here" >> .env`} />

## Next Steps

1. **Sign up for ElsaiARMS** to get your API key
2. **Set your environment variable** with the API key
3. **Access your cloud dashboard** at https://arms.elsaifoundry.ai/dashboard
4. **Start monitoring** your AI applications immediately

For installation instructions, see the [Installation Guide](./installation).

<style>{`
  /* Configuration Container Styling */
  .config-container {
    margin: 2rem 0;
  }

  .config-section {
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
  }

  .config-section:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--ifm-color-primary-light);
  }

  .config-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #f0f0f0;
  }

  .config-icon {
    color: var(--ifm-color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .config-header h4 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.25rem;
    font-weight: 600;
    flex-grow: 1;
  }

  .config-badge {
    background: linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-light) 100%);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .config-content {
    margin-top: 1rem;
  }

  .config-note {
    margin-top: 1rem;
    padding: 0.75rem;
    background: #f8f9fa;
    border-left: 4px solid var(--ifm-color-primary);
    border-radius: 4px;
    font-style: italic;
    color: #6c757d;
  }

  .env-variable {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    transition: all 0.2s ease;
  }

  .env-variable:hover {
    border-color: var(--ifm-color-primary);
    box-shadow: 0 2px 4px rgba(6, 23, 95, 0.1);
  }

  .var-name {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9rem;
    font-weight: 600;
    color: #2c3e50;
  }

  .var-value {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.85rem;
    color: #6c757d;
    font-style: italic;
  }

  /* App Components Styling */
  .app-components {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
  }

  .component-section {
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
  }

  .component-section:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: var(--ifm-color-primary-light);
  }

  .component-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #f0f0f0;
  }

  .component-icon {
    color: var(--ifm-color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .component-header h4 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.25rem;
    font-weight: 600;
    flex-grow: 1;
  }

  .component-badge {
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .component-content p {
    color: #4a5568;
    font-size: 1.05rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .feature-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.75rem;
  }

  .feature-item {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 0.875rem 1rem;
    color: #2d3748;
    font-weight: 500;
    font-size: 0.95rem;
    text-align: center;
  }

  /* Quick Start Section */
  .quick-start {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .start-step {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
  }

  .start-step:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--ifm-color-primary-light);
  }

  .step-number {
    background: linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-light) 100%);
    color: white;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  .step-content {
    flex-grow: 1;
  }

  .step-content h5 {
    margin: 0 0 0.75rem 0;
    color: #2c3e50;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .step-description p {
    margin: 0 0 0.75rem 0;
    color: #4a5568;
    font-size: 1rem;
    line-height: 1.5;
  }



  /* Dashboard Features */
  .dashboard-features {
    margin: 2rem 0;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .feature-card {
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    text-align: center;
  }

  .feature-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--ifm-color-primary-light);
  }

  .feature-card h5 {
    margin: 0 0 0.75rem 0;
    color: #2c3e50;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .feature-card p {
    margin: 0;
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  /* Customization Section */
  .customization-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .customization-item {
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
  }

  .customization-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--ifm-color-primary-light);
  }

  .customization-item h5 {
    margin: 0 0 0.75rem 0;
    color: #2c3e50;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .customization-item p {
    margin: 0;
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  /* Dark theme adjustments */
  [data-theme='dark'] .config-section,
  [data-theme='dark'] .component-section,
  [data-theme='dark'] .start-step,
  [data-theme='dark'] .feature-card,
  [data-theme='dark'] .customization-item {
    background: #1a1a1a;
    border-color: #333;
    color: #e1e1e1;
  }

  [data-theme='dark'] .config-header h4,
  [data-theme='dark'] .component-header h4,
  [data-theme='dark'] .step-content h5,
  [data-theme='dark'] .feature-card h5,
  [data-theme='dark'] .customization-item h5 {
    color: #e1e1e1;
  }

  [data-theme='dark'] .config-note {
    background: #2d3748;
    border-left-color: var(--ifm-color-primary);
    color: #cbd5e0;
  }

  [data-theme='dark'] .env-variable {
    background: #1a1a1a;
    border-color: #4a5568;
  }

  [data-theme='dark'] .env-variable:hover {
    border-color: var(--ifm-color-primary-light);
  }

  [data-theme='dark'] .var-name {
    color: #e1e1e1;
  }

  [data-theme='dark'] .var-value {
    color: #9ca3af;
  }

  [data-theme='dark'] .component-content p,
  [data-theme='dark'] .step-description p,
  [data-theme='dark'] .feature-card p,
  [data-theme='dark'] .customization-item p {
    color: #cbd5e0;
  }

  [data-theme='dark'] .feature-item {
    background: #2d3748;
    border-color: #4a5568;
    color: #d1d5db;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .config-section,
    .component-section,
    .start-step,
    .feature-card,
    .customization-item {
      padding: 1.25rem;
      margin-bottom: 1rem;
    }

    .config-header,
    .component-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .config-badge,
    .component-badge {
      align-self: flex-start;
    }

    .env-variable {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .feature-grid {
      grid-template-columns: 1fr;
    }

    .customization-section {
      grid-template-columns: 1fr;
    }

    .start-step {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .step-number {
      align-self: flex-start;
    }
  }
`}</style>