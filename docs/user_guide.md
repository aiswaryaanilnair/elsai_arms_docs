---
sidebar_position: 3
---

# User Guide

## Functionalities
Follow the steps given below to use ARMS in your project.

### Import

```bash
from elsai_arms.elsai_arms import ElsaiARMS
```

### Initialisation

```bash
arms = ElsaiARMS("project_name")
```

This sets up the monitoring environment for a new or existing project. It will:

- Check if the project exists
- If not, create a new project
- Load the latest project session data

### Monitor LLM Interactions

To capture LLM metrics such as latency, token usage, and cost. Metrics captured for each LLM call:

<div className="metrics-grid">
  <div className="metric-item">
    <span className="metric-text">Model</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">LLM Provider</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Input Tokens</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Output Tokens</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Total Tokens</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Latency (ms)</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Prompt</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Response</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Relevance Score</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Cost</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Tokens per Second</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Output Throughput</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Total Throughput</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Governance Metrics</span>
  </div>
</div>

Metrics are recorded in real-time via OpenTelemetry and tied to the run.

#### Governance Metrics Details

The Governance Metrics provide comprehensive monitoring for content safety and quality:

<div className="governance-metrics">
  <div className="governance-section">
    <h5>Content Safety</h5>
    <ul>
      <li><strong>Hate Speech Detection:</strong> Low/Medium/High risk assessment</li>
      <li><strong>Violence Detection:</strong> Low/Medium/High risk assessment</li>
      <li><strong>Safe Content:</strong> Overall safety rating</li>
    </ul>
  </div>
  
  <div className="governance-section">
    <h5>Prompt Injection Detection</h5>
    <ul>
      <li><strong>Injection Detected:</strong> Risk level of prompt manipulation</li>
      <li><strong>Clean Prompt:</strong> Assessment of prompt integrity</li>
    </ul>
  </div>
  
  <div className="governance-section">
    <h5>Response Quality</h5>
    <ul>
      <li><strong>Quality Rating:</strong> Overall response quality assessment</li>
    </ul>
  </div>
</div>

#### Usage Example

```bash
@arms.monitor_llm_call
def get_response(prompt: str):
    return llm.invoke(prompt)
```

### Monitor OCR Operations

To capture OCR metrics such as text extraction, confidence scores, and processing time. Metrics captured for each OCR call:

<div className="metrics-grid">
  <div className="metric-item">
    <span className="metric-text">Model Name</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Text Length</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Confidence Score (if available)</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Cost</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Timestamp</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Duration</span>
  </div>
</div>

<div className="ocr-models-section">
  <div className="models-header">
    <h4>OCR Models Supported</h4>
  </div>
  <div className="models-grid">
    <div className="model-item">
      <span className="model-name">EasyOCR</span>
    </div>
    <div className="model-item">
      <span className="model-name">Textract</span>
    </div>
    <div className="model-item">
      <span className="model-name">AZURE_DOCUMENT_INTELLIGENCE</span>
    </div>
    <div className="model-item">
      <span className="model-name">GOOGLE_VISION_AI</span>
    </div>
    <div className="model-item">
      <span className="model-name">PaddleOCR</span>
    </div>
    <div className="model-item">
      <span className="model-name">Tesseract</span>
    </div>
    <div className="model-item">
      <span className="model-name">Vision LLM</span>
    </div>
  </div>
</div>

#### Usage Example

```bash
@arms.monitor_ocr_call("OCR_name")
def extract_text(image_path: str):
    return ocr_model.extract(image_path)
```

### Monitor RAG Operations

To capture RAG metrics such as document retrieval, query processing, and relevance scoring. Metrics captured for each RAG call:

<div className="metrics-grid">
  <div className="metric-item">
    <span className="metric-text">Function Name</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Query</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Query Length</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Documents Count</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Result Count</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Timestamp</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Relevance Score</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Status</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Latency</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Cost</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Error Details</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Operation Type</span>
  </div>
</div>

#### Usage Example

```bash
@arms.monitor_rag_call
def retrieve_documents(query: str):
    return rag_system.search(query)
```

### Monitor Embedding Operations

To capture embedding metrics such as vector generation, quality scoring, and processing performance. Metrics captured for each embedding call:

<div className="metrics-grid">
  <div className="metric-item">
    <span className="metric-text">Function Name</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Input Length</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Dimensions</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Timestamp</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Quality Score</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Status</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Latency</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Cost</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Error Details</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Operation Type</span>
  </div>
</div>

#### Usage Example

```bash
@arms.monitor_embedding_call
def get_embedding(text: str):
    return embedding_model.encode(text)
```

### Monitor Agent Operations

To capture agent metrics such as multi-component execution, overall performance, and error handling. Metrics captured for each agent call:

<div className="metrics-grid">
  <div className="metric-item">
    <span className="metric-text">Agent Name</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Components Used (OCR, Embedding, LLM)</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Timestamp</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Status</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Latency</span>
  </div>
  <div className="metric-item">
    <span className="metric-text">Error Details</span>
  </div>
</div>

#### Usage Example

```bash
@arms.monitor_agent_call("Agent_Name", components=["ocr", "embedding", "llm"])
def process_document(image_path: str):
    text = extract_text(image_path)
    embedding = get_embedding(text)
    response = get_response(text)
    return response
```

### Custom Metrics

To log domain-specific or internal metrics as a key value pair.
```bash
arms.log_custom_metric("Metric Name", metric_value) 
```

### Setting Logger

Elsai ARMS provides built-in logging for tracking important events and errors during your project's execution.
#### Info Logs
Use `.info()` to log standard messages:
```bash
arms.info("Log Operation")
```

#### Error Logs
Use `.error()` to log error messages:
```bash
arms.error("Log Error")
```

### Exporting Metrics

To export the monitored data for the entire project as a JSON.
```bash
arms.export()
```

### End Run
This finalizes the session for a successful run.
```bash
arms.end_run()
```

<style>{`
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
  }

  .metric-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
    border: 1px solid #e1e5e9;
    border-radius: 8px;
    padding: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .metric-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: var(--ifm-color-primary-light);
    background: linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%);
  }

  .metric-icon {
    font-size: 1.25rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .metric-text {
    color: #2c3e50;
    font-weight: 500;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  /* OCR Models Section Styling */
  .ocr-models-section {
    background: linear-gradient(135deg, #f8faff 0%, #f0f7ff 100%);
    border: 1px solid #d1e7ff;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.08);
  }

  .models-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .models-icon {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
    color: white;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
  }

  .models-header h4 {
    margin: 0;
    color: #1a365d;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .models-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.875rem;
  }

  .model-item {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 0.875rem 1rem;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .model-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 123, 255, 0.15);
    border-color: #007bff;
    background: linear-gradient(135deg, #f8faff 0%, #f0f7ff 100%);
  }

  .model-name {
    color: #2d3748;
    font-weight: 500;
    font-size: 0.95rem;
    font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  }

  /* Dark theme adjustments */
  [data-theme='dark'] .metric-item {
    background: linear-gradient(135deg, #1e2a4a 0%, #16213e 100%);
    border-color: #4a5568;
  }

  [data-theme='dark'] .metric-item:hover {
    background: linear-gradient(135deg, #16213e 0%, #0f1419 100%);
    border-color: var(--ifm-color-primary-light);
  }

  [data-theme='dark'] .metric-icon {
    background: #2d3748;
    color: #e2e8f0;
  }

  [data-theme='dark'] .metric-text {
    color: #e1e1e1;
  }

  [data-theme='dark'] .ocr-models-section {
    background: linear-gradient(135deg, #1a2a4a 0%, #0f1a2e 100%);
    border-color: #2d5a8b;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
  }

  [data-theme='dark'] .models-header h4 {
    color: #e2e8f0;
  }

  [data-theme='dark'] .model-item {
    background: #2d3748;
    border-color: #4a5568;
  }

  [data-theme='dark'] .model-item:hover {
    background: linear-gradient(135deg, #1a2a4a 0%, #0f1a2e 100%);
    border-color: #007bff;
  }

  [data-theme='dark'] .model-name {
    color: #e2e8f0;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .metrics-grid {
      grid-template-columns: 1fr;
      gap: 0.75rem;
      margin: 1rem 0;
    }

    .metric-item {
      padding: 0.875rem;
    }

    .metric-text {
      font-size: 0.9rem;
    }

    .ocr-models-section {
      padding: 1.25rem;
      margin: 1rem 0;
    }

    .models-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 0.75rem;
    }

    .model-item {
      padding: 0.75rem;
    }

    .model-name {
      font-size: 0.9rem;
    }
  }

  /* Governance Metrics Styling */
  .governance-metrics {
    background: linear-gradient(135deg, #f8faff 0%, #f0f7ff 100%);
    border: 1px solid #d1e7ff;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.08);
  }

  .governance-section {
    margin-bottom: 1.5rem;
  }

  .governance-section:last-child {
    margin-bottom: 0;
  }

  .governance-section h5 {
    color: #1a365d;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.75rem 0;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }

  .governance-section ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  .governance-section li {
    color: #2d3748;
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  .governance-section strong {
    color: #1a365d;
    font-weight: 600;
  }

  /* Dark theme adjustments for governance metrics */
  [data-theme='dark'] .governance-metrics {
    background: linear-gradient(135deg, #1a2a4a 0%, #0f1a2e 100%);
    border-color: #2d5a8b;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
  }

  [data-theme='dark'] .governance-section h5 {
    color: #e2e8f0;
    border-bottom-color: #4a5568;
  }

  [data-theme='dark'] .governance-section li {
    color: #e2e8f0;
  }

  [data-theme='dark'] .governance-section strong {
    color: #90cdf4;
  }
`}</style>