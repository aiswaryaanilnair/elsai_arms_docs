---
sidebar_position: 3
---

import StyledCodeBlock from '@site/src/components/StyledCodeBlock';

# User Guide

<div className="guide-header">
  <div className="header-content">
    <p>Complete guide to implementing and using ElsaiARMS in your AI projects</p>
  </div>
</div>


## Core Functionalities

### Import and Initialization

<div className="code-section">
  <div className="code-header">
    <h4>Import the Library</h4>
  </div>
  <StyledCodeBlock code="from elsai_arms.elsai_arms import ElsaiARMS" />
</div>

<div className="code-section">
  <div className="code-header">
    <h4>Initialize ARMS</h4>
  </div>
  <StyledCodeBlock code="arms = ElsaiARMS('project_name')" />
  <div className="code-description">
    <p>This sets up the monitoring environment for a new or existing project. It will:</p>
    <ul>
      <li>Check if the project exists</li>
      <li>Create a new project if needed</li>
      <li>Load the latest project session data</li>
    </ul>
  </div>
</div>

### LLM Monitoring

<div className="monitoring-section">
  <div className="section-header">
    <h3>LLM Interaction Monitoring</h3>
    <p>Capture comprehensive metrics for each LLM call including latency, token usage, cost, and governance metrics.</p>
  </div>
  
  <div className="metrics-grid">
    <div className="metric-category">
      <h5>Basic Metrics</h5>
      <div className="metric-list">
        <span className="metric-tag">Model</span>
        <span className="metric-tag">LLM Provider</span>
        <span className="metric-tag">Input Tokens</span>
        <span className="metric-tag">Output Tokens</span>
        <span className="metric-tag">Total Tokens</span>
      </div>
    </div>
    
    <div className="metric-category">
      <h5>Performance Metrics</h5>
      <div className="metric-list">
        <span className="metric-tag">Latency (ms)</span>
        <span className="metric-tag">Tokens per Second</span>
        <span className="metric-tag">Output Throughput</span>
        <span className="metric-tag">Total Throughput</span>
      </div>
    </div>
    
    <div className="metric-category">
      <h5>Content & Cost</h5>
      <div className="metric-list">
        <span className="metric-tag">Prompt</span>
        <span className="metric-tag">Response</span>
        <span className="metric-tag">Relevance Score</span>
        <span className="metric-tag">Cost</span>
      </div>
    </div>
  </div>

  <div className="governance-section">
    <h4>Governance & Safety Metrics</h4>
    <div className="governance-grid">
      <div className="governance-card">
        <h6>Content Safety</h6>
        <ul>
          <li><strong>Hate Speech:</strong> Risk assessment (Low/Medium/High)</li>
          <li><strong>Violence:</strong> Risk assessment (Low/Medium/High)</li>
          <li><strong>Overall Safety:</strong> Comprehensive rating</li>
        </ul>
      </div>
      
      <div className="governance-card">
        <h6>Prompt Security</h6>
        <ul>
          <li><strong>Injection Detection:</strong> Prompt manipulation risk</li>
          <li><strong>Integrity Check:</strong> Prompt validation status</li>
        </ul>
      </div>
      
      <div className="governance-card">
        <h6>Quality Assessment</h6>
        <ul>
          <li><strong>Response Quality:</strong> Overall assessment score</li>
          <li><strong>Relevance:</strong> Query-response alignment</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="usage-example">
    <h5>Implementation Example</h5>
    <StyledCodeBlock code={`@arms.monitor_llm_call
def get_response(prompt: str):
    return llm.invoke(prompt)`} />
  </div>

  <div className="usage-example">
    <h5>Streaming LLM Monitoring</h5>
    <p>For async streaming LLM calls, use the <code>monitor_llm_astream</code> decorator:</p>
    <StyledCodeBlock code={`from langchain_core.messages import HumanMessage
from langchain_openai import ChatOpenAI

async def main():
    @arms.monitor_llm_astream
    async def run_astream(prompt, llm):
        return llm.astream_events([HumanMessage(content=prompt)])

    llm = ChatOpenAI(model="gpt-4o-mini", streaming=True)

    async for event in run_astream("Explain quantum computing in simple terms.", llm=llm):
        if event["event"] == "on_chat_model_stream":
            print(event["data"]["chunk"].content, end="", flush=True)`} />
  </div>
</div>

### OCR Monitoring

<div className="monitoring-section">
  <div className="section-header">
    <h3>OCR Operation Monitoring</h3>
    <p>Track text extraction performance, confidence scores, and processing efficiency across multiple OCR models.</p>
  </div>
  
  <div className="metrics-grid">
    <div className="metric-category">
      <h5>Operation Metrics</h5>
      <div className="metric-list">
        <span className="metric-tag">Model Name</span>
        <span className="metric-tag">Text Length</span>
        <span className="metric-tag">Confidence Score</span>
      </div>
    </div>
    
    <div className="metric-category">
      <h5>Performance Metrics</h5>
      <div className="metric-list">
        <span className="metric-tag">Cost</span>
        <span className="metric-tag">Timestamp</span>
        <span className="metric-tag">Duration</span>
      </div>
    </div>
  </div>

  <div className="models-section">
    <h4>Supported OCR Models</h4>
    <div className="models-grid">
      <div className="model-card">
        <span className="model-name">EasyOCR</span>
        <span className="model-type">Open Source</span>
      </div>
      <div className="model-card">
        <span className="model-name">AWS Textract</span>
        <span className="model-type">Cloud Service</span>
      </div>
      <div className="model-card">
        <span className="model-name">Azure Document Intelligence</span>
        <span className="model-type">Cloud Service</span>
      </div>
      <div className="model-card">
        <span className="model-name">Google Vision AI</span>
        <span className="model-type">Cloud Service</span>
      </div>
      <div className="model-card">
        <span className="model-name">PaddleOCR</span>
        <span className="model-type">Open Source</span>
      </div>
      <div className="model-card">
        <span className="model-name">Tesseract</span>
        <span className="model-type">Open Source</span>
      </div>
      <div className="model-card">
        <span className="model-name">Vision LLM</span>
        <span className="model-type">AI-Powered</span>
      </div>
    </div>
  </div>

  <div className="usage-example">
    <h5>Implementation Example</h5>
    <StyledCodeBlock code={`@arms.monitor_ocr_call("OCR_name")
def extract_text(image_path: str):
    return ocr_model.extract(image_path)`} />
  </div>
</div>

### RAG Monitoring

<div className="monitoring-section">
  <div className="section-header">
    <h3>RAG Operation Monitoring</h3>
    <p>Track document retrieval, query processing, and relevance scoring for your RAG systems.</p>
  </div>
  
  <div className="metrics-grid">
    <div className="metric-category">
      <h5>Query Metrics</h5>
      <div className="metric-list">
        <span className="metric-tag">Function Name</span>
        <span className="metric-tag">Query</span>
        <span className="metric-tag">Query Length</span>
      </div>
    </div>
    
    <div className="metric-category">
      <h5>Retrieval Metrics</h5>
      <div className="metric-list">
        <span className="metric-tag">Documents Count</span>
        <span className="metric-tag">Result Count</span>
        <span className="metric-tag">Relevance Score</span>
      </div>
    </div>
    
    <div className="metric-category">
      <h5>Performance Metrics</h5>
      <div className="metric-list">
        <span className="metric-tag">Timestamp</span>
        <span className="metric-tag">Status</span>
        <span className="metric-tag">Latency</span>
        <span className="metric-tag">Cost</span>
      </div>
    </div>
    
    <div className="metric-category">
      <h5>Error Handling</h5>
      <div className="metric-list">
        <span className="metric-tag">Error Details</span>
        <span className="metric-tag">Operation Type</span>
      </div>
    </div>
  </div>

  <div className="usage-example">
    <h5>Implementation Example</h5>
    <StyledCodeBlock code={`@arms.monitor_rag_call
def retrieve_documents(query: str):
    return rag_system.search(query)`} />
  </div>
</div>

### Embedding Monitoring

<div className="monitoring-section">
  <div className="section-header">
    <h3>Embedding Operation Monitoring</h3>
    <p>Monitor vector generation quality, processing performance, and cost efficiency.</p>
  </div>
  
  <div className="metrics-grid">
    <div className="metric-category">
      <h5>Input Metrics</h5>
      <div className="metric-list">
        <span className="metric-tag">Function Name</span>
        <span className="metric-tag">Input Length</span>
        <span className="metric-tag">Dimensions</span>
      </div>
    </div>
    
    <div className="metric-category">
      <h5>Quality Metrics</h5>
      <div className="metric-list">
        <span className="metric-tag">Quality Score</span>
        <span className="metric-tag">Status</span>
      </div>
    </div>
    
    <div className="metric-category">
      <h5>Performance Metrics</h5>
      <div className="metric-list">
        <span className="metric-tag">Timestamp</span>
        <span className="metric-tag">Latency</span>
        <span className="metric-tag">Cost</span>
      </div>
    </div>
    
    <div className="metric-category">
      <h5>Error Handling</h5>
      <div className="metric-list">
        <span className="metric-tag">Error Details</span>
        <span className="metric-tag">Operation Type</span>
      </div>
    </div>
  </div>

  <div className="usage-example">
    <h5>Implementation Example</h5>
    <StyledCodeBlock code={`@arms.monitor_embedding_call
def get_embedding(text: str):
    return embedding_model.encode(text)`} />
  </div>
</div>

### Agent Monitoring

<div className="monitoring-section">
  <div className="section-header">
    <h3>Agent Operation Monitoring</h3>
    <p>Monitor LangChain agents and graphs by adding the ElsaiARMS callback to track agent execution, tool usage, and overall performance.</p>
  </div>
  
  <div className="metrics-grid">
    <div className="metric-category">
      <h5>Agent Information</h5>
      <div className="metric-list">
        <span className="metric-tag">Agent Name</span>
        <span className="metric-tag">Tool Calls</span>
        <span className="metric-tag">Execution Steps</span>
      </div>
    </div>
    
    <div className="metric-category">
      <h5>Performance Metrics</h5>
      <div className="metric-list">
        <span className="metric-tag">Timestamp</span>
        <span className="metric-tag">Status</span>
        <span className="metric-tag">Latency</span>
        <span className="metric-tag">Total Tokens</span>
      </div>
    </div>
    
    <div className="metric-category">
      <h5>LLM Interactions</h5>
      <div className="metric-list">
        <span className="metric-tag">LLM Calls</span>
        <span className="metric-tag">Token Usage</span>
        <span className="metric-tag">Cost</span>
      </div>
    </div>
  </div>

  <div className="usage-example">
    <h5>Implementation Example</h5>
    <StyledCodeBlock code={`from langchain_core.messages import HumanMessage
from langgraph.graph import StateGraph

# Initialize your LangChain graph
graph = StateGraph(...)

# Invoke the graph with ElsaiARMS callback
messages = [HumanMessage(content="Your query here")]
result = graph.invoke(
    {"messages": messages},
    config={"callbacks": [arms.langchain_callback]}
)`} />
  </div>
</div>

## Additional Features

### Custom Metrics

<div className="feature-section">
  <h4>Log Domain-Specific Metrics</h4>
  <p>Track custom business metrics and internal KPIs as key-value pairs.</p>
  <StyledCodeBlock code="arms.log_custom_metric('Metric Name', metric_value)" />
</div>

### Built-in Logging

<div className="feature-section">
  <h4>Comprehensive Logging System</h4>
  <p>ElsaiARMS provides built-in logging for tracking important events and errors during project execution.</p>
  
  <div className="logging-examples">
    <div className="log-example">
      <h6>Info Logs</h6>
      <StyledCodeBlock code="arms.info('Log Operation')" />
    </div>
    
    <div className="log-example">
      <h6>Warning Logs</h6>
      <StyledCodeBlock code="arms.warning('Log Warning')" />
    </div>

    <div className="log-example">
      <h6>Error Logs</h6>
      <StyledCodeBlock code="arms.error('Log Error')" />
    </div>
  </div>
</div>

### Data Export

<div className="feature-section">
  <h4>Export Monitoring Data</h4>
  <p>Export comprehensive project data for analysis, reporting, or integration with external systems.</p>
  <StyledCodeBlock code="arms.export()" />
</div>

### Session Management

<div className="feature-section">
  <h4>End Project Session</h4>
  <p>Finalize and complete your monitoring session for successful project runs.</p>
  <StyledCodeBlock code="arms.end_run()" />
</div>

<style>{`
  /* Guide Header */
  .guide-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    padding: 2.5rem;
    margin: 2rem 0;
    text-align: center;
    color: white;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  }

  .guide-header h1 {
    margin: 0 0 1rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .guide-header p {
    margin: 0;
    font-size: 1.2rem;
    opacity: 0.95;
    font-weight: 300;
  }

  /* Steps Container */
  .steps-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2.5rem 0;
  }

  .step-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
  }

  .step-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: var(--ifm-color-primary-light);
  }

  .step-number {
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

  .step-content h4 {
    margin: 0 0 0.5rem 0;
    color: #2c3e50;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .step-content p {
    margin: 0;
    color: #6c757d;
    font-size: 0.95rem;
  }

  .step-content a {
    color: var(--ifm-color-primary);
    text-decoration: none;
    font-weight: 500;
  }

  .step-content a:hover {
    text-decoration: underline;
  }

  /* Code Sections */
  .code-section {
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    margin: 1.5rem 0;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }

  .code-header {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #e1e5e9;
  }

  .code-header h4 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .code-block {
    background: #2d3748;
    padding: 1.5rem;
    margin: 0;
    border-radius: 0 0 12px 12px;
  }

  .code-block code {
    color: #60a5fa;
    font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
    font-size: 0.95rem;
    line-height: 1.6;
    font-weight: 500;
  }

  .code-description {
    padding: 1.5rem;
    background: #f8f9fa;
  }

  .code-description p {
    margin: 0 0 1rem 0;
    color: #495057;
    font-size: 1rem;
  }

  .code-description ul {
    margin: 0;
    padding-left: 1.5rem;
  }

  .code-description li {
    color: #495057;
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  /* Monitoring Sections */
  .monitoring-section {
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 16px;
    padding: 2rem;
    margin: 2.5rem 0;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .section-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid #f0f0f0;
  }

  .section-header h3 {
    margin: 0 0 1rem 0;
    color: #2c3e50;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .section-header p {
    margin: 0;
    color: #6c757d;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  /* Metrics Grid */
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .metric-category {
    background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;
  }

  .metric-category:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    border-color: var(--ifm-color-primary-light);
  }

  .metric-category h5 {
    margin: 0 0 1rem 0;
    color: #1a365d;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e2e8f0;
  }

  .metric-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .metric-tag {
    background: white;
    color: #2d3748;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease;
  }

  .metric-tag:hover {
    background: var(--ifm-color-primary-light);
    color: white;
    border-color: var(--ifm-color-primary-light);
  }

  /* Governance Section */
  .governance-section {
    background: linear-gradient(135deg, #f0f7ff 0%, #e6f3ff 100%);
    border: 1px solid #b3d9ff;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 2rem 0;
  }

  .governance-section h4 {
    margin: 0 0 1.5rem 0;
    color: #1a365d;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
  }

  .governance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .governance-card {
    background: white;
    border: 1px solid #d1e7ff;
    border-radius: 8px;
    padding: 1.25rem;
    box-shadow: 0 2px 8px rgba(0, 123, 255, 0.1);
  }

  .governance-card h6 {
    margin: 0 0 1rem 0;
    color: #1a365d;
    font-size: 1rem;
    font-weight: 600;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }

  .governance-card ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  .governance-card li {
    color: #2d3748;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    font-size: 0.9rem;
  }

  .governance-card strong {
    color: #1a365d;
    font-weight: 600;
  }

  /* Models Section */
  .models-section {
    background: linear-gradient(135deg, #f8faff 0%, #f0f7ff 100%);
    border: 1px solid #d1e7ff;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 2rem 0;
  }

  .models-section h4 {
    margin: 0 0 1.5rem 0;
    color: #1a365d;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
  }

  .models-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .model-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .model-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.15);
    border-color: #007bff;
  }

  .model-name {
    display: block;
    color: #2d3748;
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  .model-type {
    display: block;
    color: #6c757d;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Usage Examples */
  .usage-example {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border: 1px solid #e1e5e9;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1.5rem 0;
  }

  .usage-example h5 {
    margin: 0 0 1rem 0;
    color: #2c3e50;
    font-size: 1.1rem;
    font-weight: 600;
  }

  /* Feature Sections */
  .feature-section {
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  .feature-section h4 {
    margin: 0 0 1rem 0;
    color: #2c3e50;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .feature-section p {
    margin: 0 0 1rem 0;
    color: #6c757d;
    line-height: 1.6;
  }

  .logging-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .log-example {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 1.25rem;
  }

  .log-example h6 {
    margin: 0 0 1rem 0;
    color: #495057;
    font-size: 1rem;
    font-weight: 600;
  }

  /* Dark theme adjustments */
  [data-theme='dark'] .guide-header {
    background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
  }

  [data-theme='dark'] .step-item,
  [data-theme='dark'] .code-section,
  [data-theme='dark'] .monitoring-section,
  [data-theme='dark'] .feature-section {
    background: #1a1a1a;
    border-color: #333;
    color: #e1e1e1;
  }

  [data-theme='dark'] .step-content h4,
  [data-theme='dark'] .code-header h4,
  [data-theme='dark'] .section-header h3,
  [data-theme='dark'] .feature-section h4 {
    color: #e1e1e1;
  }

  [data-theme='dark'] .step-content p,
  [data-theme='dark'] .section-header p,
  [data-theme='dark'] .feature-section p {
    color: #cbd5e0;
  }

  [data-theme='dark'] .metric-category {
    background: linear-gradient(135deg, #1e2a4a 0%, #16213e 100%);
    border-color: #4a5568;
  }

  [data-theme='dark'] .metric-category h5 {
    color: #e2e8f0;
    border-bottom-color: #4a5568;
  }

  [data-theme='dark'] .metric-tag {
    background: #2d3748;
    color: #e2e8f0;
    border-color: #4a5568;
  }

  [data-theme='dark'] .metric-tag:hover {
    background: var(--ifm-color-primary-light);
    color: white;
  }

  [data-theme='dark'] .governance-section,
  [data-theme='dark'] .models-section {
    background: linear-gradient(135deg, #1a2a4a 0%, #0f1a2e 100%);
    border-color: #2d5a8b;
  }

  [data-theme='dark'] .governance-section h4,
  [data-theme='dark'] .models-section h4 {
    color: #e2e8f0;
  }

  [data-theme='dark'] .governance-card,
  [data-theme='dark'] .model-card {
    background: #2d3748;
    border-color: #4a5568;
  }

  [data-theme='dark'] .governance-card h6 {
    color: #e2e8f0;
    border-bottom-color: #4a5568;
  }

  [data-theme='dark'] .governance-card li {
    color: #e2e8f0;
  }

  [data-theme='dark'] .governance-card strong {
    color: #90cdf4;
  }

  [data-theme='dark'] .model-name {
    color: #e2e8f0;
  }

  [data-theme='dark'] .model-type {
    color: #a0aec0;
  }

  [data-theme='dark'] .usage-example {
    background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
    border-color: #4a5568;
  }

  [data-theme='dark'] .usage-example h5 {
    color: #e1e1e1;
  }

  [data-theme='dark'] .log-example {
    background: #2d3748;
    border-color: #4a5568;
  }

  [data-theme='dark'] .log-example h6 {
    color: #d1d5db;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .guide-header {
      padding: 2rem 1.5rem;
    }

    .guide-header h1 {
      font-size: 2rem;
    }

    .guide-header p {
      font-size: 1.1rem;
    }

    .step-item {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }

    .step-number {
      align-self: center;
    }

    .metrics-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .governance-grid {
      grid-template-columns: 1fr;
    }

    .models-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .logging-examples {
      grid-template-columns: 1fr;
    }
  }
`}</style>