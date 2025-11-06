---
sidebar_position: 1
---

# Getting Started

Welcome to ElsaiARMS SaaS! This guide will help you get up and running quickly. Follow these steps to start monitoring your AI applications.

## Quick Start Flow

<div className="flow-container">
  <div className="flow-step">
    <div className="step-number">1</div>
    <div className="step-content">
      <h3>Install ElsaiARMS</h3>
      <p>Install the ElsaiARMS package in your Python environment using pip.</p>
      <a href="./installation" className="step-link">Go to Installation →</a>
    </div>
  </div>

  <div className="flow-arrow">↓</div>

  <div className="flow-step">
    <div className="step-number">2</div>
    <div className="step-content">
      <h3>Configure Your API Key</h3>
      <p>Set up your API key to connect to the ElsaiARMS cloud dashboard.</p>
      <a href="./configuration" className="step-link">Go to Configuration →</a>
    </div>
  </div>

  <div className="flow-arrow">↓</div>

  <div className="flow-step">
    <div className="step-number">3</div>
    <div className="step-content">
      <h3>Use Your API Key</h3>
      <p>Learn how to integrate ElsaiARMS into your AI applications using your API key and start tracking metrics.</p>
      <div className="step-links">
        <div className="link-item">
          <a href="../user_guide" className="step-link">View User Guide →</a>
          <span className="link-description">Detailed explanations for each feature</span>
        </div>
        <div className="link-item">
          <a href="../tutorial" className="step-link">View Tutorial →</a>
          <span className="link-description">Sample code examples</span>
        </div>
      </div>
    </div>
  </div>

  <div className="flow-arrow">↓</div>

  <div className="flow-step">
    <div className="step-number">4</div>
    <div className="step-content">
      <h3>View Monitored Logs</h3>
      <p>Access your cloud dashboard to view real-time monitoring data, analytics, and performance insights.</p>
      <a href="https://arms.elsaifoundry.ai/dashboard" target="_blank" className="step-link">Open Dashboard →</a>
    </div>
  </div>
</div>

## What You'll Learn

<div className="content-section">
  <div className="content-card">
    <div className="card-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <h4>Installation & Setup</h4>
    <p className="feature-text">
      Learn how to install ElsaiARMS and configure it with your API key to connect to the cloud dashboard.
    </p>
  </div>

  <div className="content-card">
    <div className="card-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 3V9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <h4>Monitoring Features</h4>
    <p className="feature-text">
      Discover how to monitor LLM calls, RAG operations, embeddings, OCR, and custom metrics in your applications.
    </p>
  </div>

  <div className="content-card">
    <div className="card-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <h4>Cloud Dashboard</h4>
    <p className="feature-text">
      Access real-time monitoring, analytics, cost tracking, and performance insights through the cloud-hosted dashboard.
    </p>
  </div>
</div>

## Next Steps

Ready to get started? Begin with the [Installation Guide](./installation) to set up ElsaiARMS in your environment.

<style>{`
  .flow-container {
    max-width: 800px;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .flow-step {
    background: white;
    border: 2px solid #e1e5e9;
    border-radius: 12px;
    padding: 2rem;
    width: 100%;
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
  }

  .flow-step:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--ifm-color-primary-light);
  }

  .flow-step .step-number {
    background: linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-light) 100%);
    color: white;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  }

  .flow-step .step-content {
    flex: 1;
  }

  .flow-step h3 {
    margin: 0 0 0.5rem 0;
    color: #2c3e50;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .flow-step p {
    margin: 0 0 1rem 0;
    color: #6c757d;
    font-size: 1rem;
    line-height: 1.6;
  }

  .step-link {
    display: inline-block;
    color: var(--ifm-color-primary);
    text-decoration: none;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border: 2px solid var(--ifm-color-primary);
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .step-link:hover {
    background: var(--ifm-color-primary);
    color: white;
  }

  .step-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .link-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
    min-width: 200px;
  }

  .link-description {
    font-size: 0.85rem;
    color: #6c757d;
    font-style: italic;
    margin-top: 0.25rem;
  }

  .flow-arrow {
    color: var(--ifm-color-primary);
    font-size: 2rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .content-section {
    max-width: 900px;
    margin: 3rem auto 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .content-card {
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    position: relative;
    text-align: center;
  }

  .content-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--ifm-color-primary-light);
  }

  .content-card h4 {
    margin: 0 0 1rem 0;
    color: #2c3e50;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .card-icon {
    color: var(--ifm-color-primary);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-icon svg {
    transition: transform 0.3s ease;
  }

  .content-card:hover .card-icon svg {
    transform: scale(1.1);
  }

  .feature-text {
    font-size: 1rem;
    line-height: 1.7;
    color: #6c757d;
    margin: 0;
    font-weight: 400;
  }

  /* Dark theme adjustments */
  [data-theme='dark'] .flow-step {
    background: #1a1a1a;
    border-color: #333;
  }

  [data-theme='dark'] .flow-step:hover {
    border-color: var(--ifm-color-primary-light);
  }

  [data-theme='dark'] .flow-step h3 {
    color: #e1e1e1;
  }

  [data-theme='dark'] .flow-step p {
    color: #cbd5e0;
  }

  [data-theme='dark'] .content-card {
    background: #1a1a1a;
    border-color: #333;
    color: #e1e1e1;
  }

  [data-theme='dark'] .content-card h4 {
    color: #e1e1e1;
  }

  [data-theme='dark'] .feature-text {
    color: #cbd5e0;
  }

  [data-theme='dark'] .link-description {
    color: #9ca3af;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .flow-container {
      margin: 2rem auto;
    }

    .flow-step {
      padding: 1.5rem;
      flex-direction: column;
      text-align: center;
    }

    .flow-step .step-number {
      align-self: center;
    }

    .step-links {
      flex-direction: column;
      width: 100%;
      gap: 1rem;
    }

    .link-item {
      width: 100%;
      min-width: unset;
    }

    .step-link {
      width: 100%;
      text-align: center;
    }

    .flow-arrow {
      font-size: 1.5rem;
    }

    .content-section {
      grid-template-columns: 1fr;
      margin-top: 2rem;
    }

    .content-card {
      padding: 1.5rem;
    }

    .card-icon {
      margin-bottom: 1rem;
    }

    .card-icon svg {
      width: 40px;
      height: 40px;
    }
  }
`}</style>