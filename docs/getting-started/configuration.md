---
id: configuration
title: Configuration
sidebar_label: Configuration
sidebar_position: 3
---

import ConfigDetailsDropdown from '@site/src/components/ConfigDetailsDropdown';

# Configuration

ElsaiARMS supports both MongoDB and DynamoDB as database backends, giving you flexibility in choosing the storage solution that best fits your infrastructure and requirements.

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
      <h4>Common Configuration</h4>
      <div className="config-badge">Required</div>
    </div>
    <div className="config-content">
      <p>All deployments require the following environment variable:</p>
      <div className="env-variable">
        <span className="var-name">ELSAI_ARMS_API_KEY</span>
        <span className="var-value">arms-1234567890abcdef</span>
      </div>
    </div>
  </div>

  <div className="config-section">
    <div className="config-header">
      <div className="config-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7V4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 11H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4>Database Configuration</h4>
      <div className="config-badge">Choose One</div>
    </div>
    <div className="config-content">
      <p>Select either MongoDB or DynamoDB as your database backend:</p>
      
      <div className="config-options">
        <div className="config-option">
          <div className="option-header">
            <h5>MongoDB</h5>
          </div>
          <div className="option-content">
            <div className="env-variable">
              <span className="var-name">MONGO_URI</span>
              <span className="var-value">mongodb://localhost:27017</span>
            </div>
            <div className="env-variable">
              <span className="var-name">MONGO_DB_NAME</span>
              <span className="var-value">elsai_arms_db</span>
            </div>
          </div>
        </div>

        <div className="config-option">
          <div className="option-header">
            <h5>DynamoDB</h5>
          </div>
          <div className="option-content">
            <div className="env-variable">
              <span className="var-name">AWS_ACCESS_KEY_ID</span>
              <span className="var-value">AKIAIOSFODNN7EXAMPLE</span>
            </div>
            <div className="env-variable">
              <span className="var-name">AWS_SECRET_ACCESS_KEY</span>
              <span className="var-value">wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</span>
            </div>
            <div className="env-variable">
              <span className="var-name">AWS_SESSION_TOKEN</span>
              <span className="var-value">AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE2OPTk=</span>
            </div>
            <div className="env-variable">
              <span className="var-name">AWS_REGION</span>
              <span className="var-value">us-east-1</span>
            </div>
            <div className="env-variable">
              <span className="var-name">DYNAMODB_TABLE_NAME</span>
              <span className="var-value">arms-metrics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Frontend Dashboard & Application

<div className="app-components">
  <div className="component-section">
    <div className="component-header">
      <div className="component-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4>Frontend Dashboard</h4>
      <div className="component-badge">React</div>
    </div>
    <div className="component-content">
      <p>A modern React-based dashboard that provides real-time monitoring, analytics, and management capabilities for your ElsaiARMS deployment.</p>
      
      <div className="feature-list">
        <div className="feature-item">Real-time Metrics</div>
        <div className="feature-item">Interactive Charts</div>
        <div className="feature-item">User Management</div>
        <div className="feature-item">Custom Dashboards</div>
      </div>
    </div>
  </div>

  <div className="component-section">
    <div className="component-header">
      <div className="component-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4>Backend API</h4>
      <div className="component-badge">FastAPI</div>
    </div>
    <div className="component-content">
      <p>A high-performance FastAPI backend that handles all monitoring operations, data processing, and provides RESTful APIs for the frontend dashboard.</p>
      
      <div className="feature-list">
        <div className="feature-item">RESTful APIs</div>
        <div className="feature-item">Real-time Processing</div>
        <div className="feature-item">Data Validation</div>
        <div className="feature-item">Authentication</div>
      </div>
    </div>
  </div>
</div>

### Quick Start

<div className="quick-start">
  <div className="start-step">
    <div className="step-number">1</div>
    <div className="step-content">
      <h5>Start the Backend</h5>
      <div className="step-description">
        <p>Run the FastAPI backend server:</p>
        <div className="code-block">
          <code>python app.py</code>
        </div>
      </div>
    </div>
  </div>

  <div className="start-step">
    <div className="step-number">2</div>
    <div className="step-content">
      <h5>Start the Frontend</h5>
      <div className="step-description">
        <p>In a new terminal, start the React dashboard:</p>
        <div className="code-block">
          <code>npm start</code>
        </div>
      </div>
    </div>
  </div>

  <div className="start-step">
    <div className="step-number">3</div>
    <div className="step-content">
      <h5>Access Dashboard</h5>
      <div className="step-description">
        <p>Open your browser and navigate to:</p>
        <div className="code-block">
          <code>http://localhost:3000</code>
        </div>
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
      <h5>Alert Management</h5>
      <p>Configure and manage system alerts and notifications</p>
    </div>
    <div className="feature-card">
      <h5>User Management</h5>
      <p>Role-based access control and user permissions</p>
    </div>
    <div className="feature-card">
      <h5>Custom Reports</h5>
      <p>Generate and schedule custom reports for stakeholders</p>
    </div>
  </div>
</div>

### Customization Options

<div className="customization-section">
  <div className="customization-item">
    <h5>Branding</h5>
    <p>Customize logos, colors, and themes to match your brand</p>
  </div>
  
  <div className="customization-item">
    <h5>Dashboard Layouts</h5>
    <p>Create different dashboard views for executives, developers, and operations teams</p>
  </div>
  
  <div className="customization-item">
    <h5>Automated Reporting</h5>
    <p>Schedule automated reports and notifications for stakeholders and management</p>
  </div>
</div>

### Configuration Details

<ConfigDetailsDropdown>
  <div className="config-details-section">
    <h5>ElsaiARMS API Key</h5>
    <ul>
      <li><strong>Purpose</strong>: Authenticates your application with ElsaiARMS services</li>
      <li><strong>Format</strong>: String token provided during account setup</li>
      <li><strong>Example</strong>: <code>ELSAI_ARMS_API_KEY=arms-1234567890abcdef</code></li>
    </ul>
  </div>

  <div className="config-details-section">
    <h5>MongoDB Configuration</h5>
    <ul>
      <li><strong>MONGO_URI</strong>: Connection string for your MongoDB instance</li>
      <li><strong>MONGO_DB_NAME</strong>: Name of the database to store ElsaiARMS data</li>
    </ul>
    
    <h6>Example MongoDB configurations:</h6>
    
    <div className="config-example">
      <h6>Local MongoDB:</h6>
      <div className="code-block">
        <code>MONGO_URI=mongodb://localhost:27017</code><br/>
        <code>MONGO_DB_NAME=elsai_arms_db</code>
      </div>
    </div>
    
    <div className="config-example">
      <h6>MongoDB Atlas (Cloud):</h6>
      <div className="code-block">
        <code>MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority</code><br/>
        <code>MONGO_DB_NAME=elsai_arms_db</code>
      </div>
    </div>
    
    <div className="config-example">
      <h6>Docker MongoDB:</h6>
      <div className="code-block">
        <code>MONGO_URI=mongodb://mongodb:27017</code><br/>
        <code>MONGO_DB_NAME=elsai_arms_db</code>
      </div>
    </div>
  </div>

  <div className="config-details-section">
    <h5>DynamoDB Configuration</h5>
    <ul>
      <li><strong>AWS_ACCESS_KEY_ID</strong>: Your AWS access key for authentication</li>
      <li><strong>AWS_SECRET_ACCESS_KEY</strong>: Your AWS secret access key</li>
      <li><strong>AWS_SESSION_TOKEN</strong>: Temporary session token (if using temporary credentials)</li>
      <li><strong>AWS_REGION</strong>: AWS region where your DynamoDB table is located</li>
      <li><strong>DYNAMODB_TABLE_NAME</strong>: Name of the DynamoDB table to store ElsaiARMS data</li>
    </ul>
    
    <h6>Example DynamoDB configurations:</h6>
    
    <div className="config-example">
      <h6>Standard AWS Credentials:</h6>
      <div className="code-block">
        <code>AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE</code><br/>
        <code>AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</code><br/>
        <code>AWS_REGION=us-east-1</code><br/>
        <code>DYNAMODB_TABLE_NAME=arms-metrics</code>
      </div>
    </div>
    
    <div className="config-example">
      <h6>With Session Token (for temporary credentials):</h6>
      <div className="code-block">
        <code>AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE</code><br/>
        <code>AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</code><br/>
        <code>AWS_SESSION_TOKEN=AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE2OPTk=</code><br/>
        <code>AWS_REGION=us-east-1</code><br/>
        <code>DYNAMODB_TABLE_NAME=arms-metrics</code>
      </div>
    </div>
  </div>
</ConfigDetailsDropdown>

## Docker Setup

If you're using Docker, you can choose between MongoDB and DynamoDB:

### MongoDB Docker Setup
```yaml
# docker-compose.yml
version: '3.12'
services:
  mongodb:
    image: mongo:latest
    container_name: elsai-arms-mongodb
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
    volumes:
      - mongodb_data:/data/db

  elsai-arms:
    build: .
    container_name: elsai-arms-app
    depends_on:
      - mongodb
    environment:
      - MONGO_URI=mongodb://admin:password@mongodb:27017
      - MONGO_DB_NAME=arms-metrics
      - ELSAI_ARMS_API_KEY=${ELSAI_ARMS_API_KEY}

volumes:
  mongodb_data:
```

### DynamoDB Docker Setup
```yaml
# docker-compose.yml
version: '3.12'
services:
  dynamodb-local:
    image: amazon/dynamodb-local:latest
    container_name: elsai-arms-dynamodb
    ports:
      - "8000:8000"
    command: "-jar DynamoDBLocal.jar -sharedDb -dbPath ./data"

  elsai-arms:
    build: .
    container_name: elsai-arms-app
    depends_on:
      - dynamodb-local
    environment:
      - AWS_ACCESS_KEY_ID=dummy
      - AWS_SECRET_ACCESS_KEY=dummy
      - AWS_REGION=us-east-1
      - DYNAMODB_TABLE_NAME=arms-metrics
      - ELSAI_ARMS_API_KEY=${ELSAI_ARMS_API_KEY}
```

## Environment Variables

Create a `.env` file in your project root with the required configuration:

```bash
# Common Configuration
ELSAI_ARMS_API_KEY=arms-1234567890abcdef

# MongoDB Configuration (choose one)
MONGO_URI=mongodb://localhost:27017
MONGO_DB_NAME=arms-metrics

# OR DynamoDB Configuration (choose one)
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_SESSION_TOKEN=AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE2OPTk=
AWS_REGION=us-east-1
DYNAMODB_TABLE_NAME=arms-metrics
```

## Next Steps

1. **Choose your database backend** (MongoDB or DynamoDB)
2. **Set up your environment variables** in a `.env` file
3. **Start the backend server** with `python app.py`
4. **Launch the frontend dashboard** with `npm start`
5. **Access your dashboard** at `http://localhost:3000`

For detailed setup instructions, see the [Installation Guide](./installation.md).

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

  .config-options {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .config-option {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 1.25rem;
    transition: all 0.3s ease;
  }

  .config-option:hover {
    background: #f0f2f5;
    border-color: var(--ifm-color-primary-light);
  }

  .option-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .option-header h5 {
    margin: 0;
    color: #495057;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .option-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
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

  .code-block {
    background: #2d3748;
    border: 1px solid #4a5568;
    border-radius: 6px;
    padding: 1rem;
    margin: 0;
  }

  .code-block code {
    color: #60a5fa;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.4;
    font-weight: 600;
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

  [data-theme='dark'] .config-option {
    background: #2d3748;
    border-color: #4a5568;
  }

  [data-theme='dark'] .config-option:hover {
    background: #374151;
    border-color: var(--ifm-color-primary-light);
  }

  [data-theme='dark'] .option-header h5 {
    color: #d1d5db;
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