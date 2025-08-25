---
sidebar_position: 2
---

# Configuration

Configuration setup for ElsaiARMS. The `elsai-arms` package requires minimal setup to get started and supports both MongoDB and DynamoDB as database backends.

## Environment Setup

Configuration is handled via environment variables using a `.env` file. These variables are loaded automatically when the application starts.

### Required Configuration

Before using `elsai-arms`, you need to set up a `.env` file in your project root directory with the following variables:

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
      <span className="config-badge">Required for all setups</span>
    </div>
    <div className="config-content">
      <div className="env-variable">
        <span className="var-name">ELSAI_ARMS_API_KEY</span>
        <span className="var-value">&lt;your_api_key&gt;</span>
      </div>
    </div>
  </div>

  <div className="config-section">
    <div className="config-header">
      <div className="config-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7V4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V17M4 7H8M4 7V11M8 7V11M8 7H12M12 7V11M12 7H16M16 7V11M16 7H20M20 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4>Database Configuration</h4>
      <span className="config-badge">Choose one option</span>
    </div>
    
    <div className="config-options">
      <div className="config-option">
        <div className="option-header">
          <h5>Option 1: MongoDB</h5>
        </div>
        <div className="option-content">
          <div className="env-variable">
            <span className="var-name">MONGO_URI</span>
            <span className="var-value">&lt;your_mongo_uri&gt;</span>
          </div>
          <div className="env-variable">
            <span className="var-name">MONGO_DB_NAME</span>
            <span className="var-value">&lt;your_database_name&gt;</span>
          </div>
        </div>
      </div>

      <div className="config-option">
        <div className="option-header">
          <h5>Option 2: DynamoDB</h5>
        </div>
        <div className="option-content">
          <div className="env-variable">
            <span className="var-name">AWS_ACCESS_KEY_ID</span>
            <span className="var-value">&lt;your_aws_access_key&gt;</span>
          </div>
          <div className="env-variable">
            <span className="var-name">AWS_SECRET_ACCESS_KEY</span>
            <span className="var-value">&lt;your_aws_secret_key&gt;</span>
          </div>
          <div className="env-variable">
            <span className="var-name">AWS_SESSION_TOKEN</span>
            <span className="var-value">&lt;your_aws_session_token&gt;</span>
          </div>
          <div className="env-variable">
            <span className="var-name">AWS_REGION</span>
            <span className="var-value">&lt;your_aws_region&gt;</span>
          </div>
          <div className="env-variable">
            <span className="var-name">DYNAMODB_TABLE_NAME</span>
            <span className="var-value">&lt;your_dynamodb_table_name&gt;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

### Configuration Details

#### ElsaiARMS API Key
- **Purpose**: Authenticates your application with ElsaiARMS services
- **Format**: String token provided during account setup
- **Example**: `ELSAI_ARMS_API_KEY=arms-1234567890abcdef`

#### MongoDB Configuration
- **MONGO_URI**: Connection string for your MongoDB instance
- **MONGO_DB_NAME**: Name of the database to store ElsaiARMS data

**Example MongoDB configurations:**

Local MongoDB:
```bash
MONGO_URI=mongodb://localhost:27017
MONGO_DB_NAME=arms-metrics
```

MongoDB Atlas (Cloud):
```bash
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
MONGO_DB_NAME=arms-metrics
```

Docker MongoDB:
```bash
MONGO_URI=mongodb://mongodb:27017
MONGO_DB_NAME=arms-metrics
```

#### DynamoDB Configuration
- **AWS_ACCESS_KEY_ID**: Your AWS access key for authentication
- **AWS_SECRET_ACCESS_KEY**: Your AWS secret access key
- **AWS_SESSION_TOKEN**: Temporary session token (if using temporary credentials)
- **AWS_REGION**: AWS region where your DynamoDB table is located
- **DYNAMODB_TABLE_NAME**: Name of the DynamoDB table to store ElsaiARMS data

**Example DynamoDB configurations:**

Standard AWS Credentials:
```bash
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_REGION=us-east-1
DYNAMODB_TABLE_NAME=arms-metrics
```

With Session Token (for temporary credentials):
```bash
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_SESSION_TOKEN=AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE2OPTk=
AWS_REGION=us-east-1
DYNAMODB_TABLE_NAME=arms-metrics
```

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
      - "8000:8000
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

## Next Steps

With configuration complete, you're ready to start using ElsaiARMS! Check out our [User Guide](docs/user_guide.md) to begin monitoring and governing your AI operations.

<style>{`
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

  /* Dark theme adjustments */
  [data-theme='dark'] .config-section {
    background: #1a1a1a;
    border-color: #333;
    color: #e1e1e1;
  }

  [data-theme='dark'] .config-header h4 {
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

  /* Responsive design */
  @media (max-width: 768px) {
    .config-section {
      padding: 1.25rem;
      margin-bottom: 1rem;
    }

    .config-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .config-badge {
      align-self: flex-start;
    }

    .env-variable {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }
`}</style>
