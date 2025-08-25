---
sidebar_position: 5
---

# Conceptual Guide

<div className="concept-hero">
  <div className="hero-content">
    <p className="hero-description">
      The ARMS modules form the backbone of the system, handling all telemetry, logging, and data management operations. The key features include token usage and cost tracking per project, mongoDB backend for centralized data storage, JSON export capabilities for visualization, and custom metrics logging capabilities.
    </p>
  </div>
</div>

## Modules and Features

<div className="modules-container">
  <div className="module-section">
    <div className="module-header">
      <div className="module-icon">🔧</div>
      <h3>ElsaiARMS</h3>
    </div>
    
    <p className="module-description">
      Acts as the orchestrator and public interface for the entire ARMS framework. This class initializes all sub-modules and provides a high-level API to start monitoring, record token usage, and export metrics. The ElsaiARMS class manages:
    </p>
    
    <div className="feature-list">
      <div className="feature-item">Project lifecycle (Project Manager)</div>
      <div className="feature-item">Real-time monitoring (ARMS Wrapper)</div>
      <div className="feature-item">Token and cost tracking</div>
      <div className="feature-item">LLM metrics tracking</div>
      <div className="feature-item">OCR metrics tracking</div>
      <div className="feature-item">RAG metrics tracking</div>
      <div className="feature-item">Embedding metrics tracking</div>
      <div className="feature-item">Agent metrics tracking</div>
      <div className="feature-item">Custom logs handling</div>
      <div className="feature-item">Managing runs (Run Data)</div>
      <div className="feature-item">Exporting to structured JSON</div>
    </div>

    <div className="features-highlight">
      <h4>Key Features</h4>
      <ul>
        <li>Automatically handles telemetry, token logging, and cost tracking</li>
        <li>Simplifies data export and session lifecycle management</li>
        <li>Comprehensive monitoring across all AI/ML operations</li>
      </ul>
    </div>
  </div>

  <div className="module-section">
    <div className="module-header">
      <div className="module-icon">📁</div>
      <h3>Project Manager</h3>
    </div>
    
    <p className="module-description">
      Maintains metadata and persistent state related to each LLM project, such as project name, creation time, and session records. The project manager gets the log for each run from run data in Elsai ARMS and stores the details in a database. Handles:
    </p>
    
    <div className="feature-list">
      <div className="feature-item">Project creation and loading</div>
      <div className="feature-item">Data dictionary updates</div>
      <div className="feature-item">Serialization-ready format for export</div>
    </div>

    <div className="features-highlight">
      <h4>Key Features</h4>
      <ul>
        <li>Create Project: Creates a new project</li>
        <li>Load Project: Load existing project</li>
        <li>Save Project: Save project details in MongoDB</li>
      </ul>
    </div>
  </div>

  <div className="module-section">
    <div className="module-header">
      <div className="module-icon">📊</div>
      <h3>ARMS Wrapper</h3>
    </div>
    
    <p className="module-description">
      ARMS Wrapper is responsible for real-time observability of LLM-based operations. It acts as the system's telemetry layer, tracking and recording essential performance metrics that can later be analyzed to evaluate model responsiveness, usage patterns, and service reliability. The ARMS wrapper is connected to Token Metrics, Cost Metrics, LLM Monitor, OCR Monitor, RAG Monitor, Embedding Monitor, and Agent Monitor to record the metrics.
    </p>

    <div className="features-highlight">
      <h4>Key Features</h4>
      <ul>
        <li>Histogram-based latency tracking</li>
        <li>Counter for metrics</li>
        <li>Integrates easily with external observability platforms</li>
        <li>Unified monitoring across all AI/ML operations</li>
      </ul>
    </div>
  </div>

  <div className="module-section">
    <div className="module-header">
      <div className="module-icon">🔢</div>
      <h3>Token Metrics</h3>
    </div>
    
    <p className="module-description">
      Tracks input/output tokens used across all LLM interactions within a project session. Provides an overview of token usage for each project. Gets token details from LLM response metadata from LLM monitoring function.
    </p>

    <div className="features-highlight">
      <h4>Key Features</h4>
      <ul>
        <li>Computes total token usage</li>
        <li>Useful for token management and budget planning</li>
      </ul>
    </div>
  </div>

  <div className="module-section">
    <div className="module-header">
      <div className="module-icon">💰</div>
      <h3>Cost Metrics</h3>
    </div>
    
    <p className="module-description">
      Estimates the monetary cost of LLM usage based on the recorded token consumption and configured price rates. Provides an overview of the cost for projects. Calculates cost based on the token usage, which is accessed from LLM response metadata from LLM monitoring function.
    </p>

    <div className="features-highlight">
      <h4>Key Features</h4>
      <ul>
        <li>Tracks real-time cost as tokens are recorded</li>
        <li>Support model-specific pricing schemes</li>
      </ul>
    </div>
  </div>

  <div className="module-section">
    <div className="module-header">
      <div className="module-icon">🤖</div>
      <h3>LLM Monitoring</h3>
    </div>
    
    <p className="module-description">
      Captures performance and usage analytics of LLM interactions, providing comprehensive insights into language model operations and performance. LLM monitoring tracks the following key metrics:
    </p>
    
    <div className="metrics-grid">
      <div className="metric-category">
        <h5>Model Information</h5>
        <p>Model name, version, provider, and configuration details</p>
      </div>
      <div className="metric-category">
        <h5>Token Metrics</h5>
        <p>Input tokens, output tokens, total tokens, and token efficiency</p>
      </div>
      <div className="metric-category">
        <h5>Performance Metrics</h5>
        <p>Latency, throughput, response time, and processing speed</p>
      </div>
      <div className="metric-category">
        <h5>Quality Metrics</h5>
        <p>Response relevance, completion rates, and error handling</p>
      </div>
      <div className="metric-category">
        <h5>Cost Tracking</h5>
        <p>Per-request cost based on token consumption and model pricing</p>
      </div>
      <div className="metric-category">
        <h5>Operational Metrics</h5>
        <p>Request success rates, failure patterns, and system status</p>
      </div>
      <div className="metric-category">
        <h5>Content Analysis</h5>
        <p>Prompt complexity, response length, and content quality</p>
      </div>
      <div className="metric-category">
        <h5>Throughput Metrics</h5>
        <p>Tokens per second, output throughput, and total throughput</p>
      </div>
      <div className="metric-category">
        <h5>Governance Metrics</h5>
        <p>Content safety, prompt injection detection, and response quality assessment</p>
      </div>
      <div className="metric-category">
        <h5>Relevance Scoring</h5>
        <p>Content relevance and accuracy metrics</p>
      </div>
    </div>

    <div className="features-highlight">
      <h4>Key Features</h4>
      <ul>
        <li>Real-time LLM performance monitoring and alerting</li>
        <li>Model-specific performance comparison and benchmarking</li>
        <li>Token usage optimization and cost analysis</li>
        <li>Quality assessment and response validation</li>
        <li>Performance degradation detection and alerting</li>
        <li>Comprehensive cost tracking across different models and providers</li>
        <li>Error analysis and failure pattern detection</li>
        <li>Request/response content analysis and quality scoring</li>
        <li>Throughput performance analysis and optimization</li>
        <li>Governance and compliance monitoring</li>
        <li>Content safety and quality assurance</li>
      </ul>
    </div>
  </div>

  <div className="module-section">
    <div className="module-header">
      <div className="module-icon">👁️</div>
      <h3>OCR Monitoring</h3>
    </div>
    
    <p className="module-description">
      Captures performance and quality metrics of Optical Character Recognition operations, providing comprehensive insights into text extraction processes. OCR monitoring tracks the following key metrics:
    </p>
    
    <div className="metrics-grid">
      <div className="metric-category">
        <h5>Model Information</h5>
        <p>OCR engine used (EasyOCR, Textract, Azure Document Intelligence, Google Vision AI, PaddleOCR, Tesseract, Vision LLM)</p>
      </div>
      <div className="metric-category">
        <h5>Text Processing Metrics</h5>
        <p>Extracted text length, confidence scores, processing duration</p>
      </div>
      <div className="metric-category">
        <h5>Performance Metrics</h5>
        <p>Latency, throughput, error rates</p>
      </div>
      <div className="metric-category">
        <h5>Cost Tracking</h5>
        <p>Per-operation cost based on OCR service pricing</p>
      </div>
      <div className="metric-category">
        <h5>Quality Assessment</h5>
        <p>Confidence scores and accuracy metrics</p>
      </div>
    </div>

    <div className="features-highlight">
      <h4>Key Features</h4>
      <ul>
        <li>Real-time OCR performance monitoring</li>
        <li>Model-specific performance comparison</li>
        <li>Quality metrics for text extraction accuracy</li>
        <li>Cost optimization insights across different OCR providers</li>
        <li>Error tracking and failure analysis</li>
      </ul>
    </div>
  </div>

  <div className="module-section">
    <div className="module-header">
      <div className="module-icon">🔍</div>
      <h3>RAG Monitoring</h3>
    </div>
    
    <p className="module-description">
      Captures comprehensive metrics for Retrieval-Augmented Generation operations, monitoring the entire pipeline from document retrieval to response generation. RAG monitoring tracks:
    </p>
    
    <div className="metrics-grid">
      <div className="metric-category">
        <h5>Retrieval Metrics</h5>
        <p>Query processing, document count, relevance scoring</p>
      </div>
      <div className="metric-category">
        <h5>Performance Metrics</h5>
        <p>Latency, throughput, success rates</p>
      </div>
      <div className="metric-category">
        <h5>Quality Metrics</h5>
        <p>Relevance scores, result accuracy, user satisfaction</p>
      </div>
      <div className="metric-category">
        <h5>Operational Metrics</h5>
        <p>Function calls, error handling, system status</p>
      </div>
      <div className="metric-category">
        <h5>Cost Analysis</h5>
        <p>Per-query cost and resource utilization</p>
      </div>
    </div>

    <div className="features-highlight">
      <h4>Key Features</h4>
      <ul>
        <li>End-to-end RAG pipeline monitoring</li>
        <li>Relevance scoring and quality assessment</li>
        <li>Performance optimization insights</li>
        <li>Cost tracking across different RAG operations</li>
        <li>Error analysis and failure pattern detection</li>
      </ul>
    </div>
  </div>

  <div className="module-section">
    <div className="module-header">
      <div className="module-icon">📐</div>
      <h3>Embedding Monitoring</h3>
    </div>
    
    <p className="module-description">
      Tracks performance and quality metrics for vector embedding generation operations, essential for semantic search and AI applications. Embedding monitoring captures:
    </p>
    
    <div className="metrics-grid">
      <div className="metric-category">
        <h5>Input Metrics</h5>
        <p>Text length, complexity, preprocessing time</p>
      </div>
      <div className="metric-category">
        <h5>Output Metrics</h5>
        <p>Vector dimensions, quality scores, generation time</p>
      </div>
      <div className="metric-category">
        <h5>Performance Metrics</h5>
        <p>Latency, throughput, resource utilization</p>
      </div>
      <div className="metric-category">
        <h5>Quality Assessment</h5>
        <p>Embedding quality scores and consistency</p>
      </div>
      <div className="metric-category">
        <h5>Cost Tracking</h5>
        <p>Per-embedding operation costs</p>
      </div>
    </div>

    <div className="features-highlight">
      <h4>Key Features</h4>
      <ul>
        <li>Real-time embedding performance monitoring</li>
        <li>Quality assessment and consistency tracking</li>
        <li>Performance optimization recommendations</li>
        <li>Cost analysis across different embedding models</li>
        <li>Resource utilization monitoring</li>
      </ul>
    </div>
  </div>

  <div className="module-section">
    <div className="module-header">
      <div className="module-icon">⚙️</div>
      <h3>Agent Monitoring</h3>
    </div>
    
    <p className="module-description">
      Provides comprehensive oversight of multi-component AI agent operations, tracking performance across OCR, embedding, and LLM components. Agent monitoring captures:
    </p>
    
    <div className="metrics-grid">
      <div className="metric-category">
        <h5>Component Metrics</h5>
        <p>Individual performance of OCR, embedding, and LLM operations</p>
      </div>
      <div className="metric-category">
        <h5>Pipeline Metrics</h5>
        <p>End-to-end processing time, success rates</p>
      </div>
      <div className="metric-category">
        <h5>Coordination Metrics</h5>
        <p>Component interaction patterns, data flow efficiency</p>
      </div>
      <div className="metric-category">
        <h5>Performance Metrics</h5>
        <p>Overall latency, throughput, resource utilization</p>
      </div>
      <div className="metric-category">
        <h5>Error Tracking</h5>
        <p>Component-specific failures and recovery patterns</p>
      </div>
    </div>

    <div className="features-highlight">
      <h4>Key Features</h4>
      <ul>
        <li>Multi-component performance monitoring</li>
        <li>Pipeline efficiency analysis</li>
        <li>Component interaction optimization</li>
        <li>End-to-end performance tracking</li>
        <li>Failure analysis and recovery insights</li>
      </ul>
    </div>
  </div>

  <div className="module-section">
    <div className="module-header">
      <div className="module-icon">📤</div>
      <h3>Exporter</h3>
    </div>
    
    <p className="module-description">
      Formats all accumulated project data into a structured exportable format, JSON.
    </p>

    <div className="features-highlight">
      <h4>Key Features</h4>
      <ul>
        <li>Modular formatting logic</li>
        <li>Merges multiple sources (e.g., tokens + cost + latency + OCR + RAG + Embedding + Agent metrics)</li>
        <li>Structured output with computed summaries</li>
        <li>Comprehensive coverage of all monitoring domains</li>
      </ul>
    </div>
  </div>
</div>

## Functional Flow

<div className="flow-section">
  <div className="flow-header">
    <h3>System Architecture Flow</h3>
    <p>Understanding how ARMS components interact and process data</p>
  </div>
  
  <div className="flow-diagram">
    <div className="flow-step">
      <div className="step-number">A</div>
      <div className="step-content">Initialize ARMS</div>
    </div>
    <div className="flow-arrow">→</div>
    <div className="flow-step">
      <div className="step-number">B</div>
      <div className="step-content">Load/Create Project</div>
    </div>
    <div className="flow-arrow">→</div>
    <div className="flow-step">
      <div className="step-number">C</div>
      <div className="step-content">Begin Run</div>
    </div>
    <div className="flow-arrow">→</div>
    <div className="flow-step">
      <div className="step-number">D</div>
      <div className="step-content">Monitor Operations</div>
    </div>
  </div>
  
  <div className="monitoring-branches">
    <div className="branch-item">
      <div className="branch-arrow">↳</div>
      <div className="branch-step">E: LLM Monitoring</div>
    </div>
    <div className="branch-item">
      <div className="branch-arrow">↳</div>
      <div className="branch-step">F: OCR Monitoring</div>
    </div>
    <div className="branch-item">
      <div className="branch-arrow">↳</div>
      <div className="branch-step">G: RAG Monitoring</div>
    </div>
    <div className="branch-item">
      <div className="branch-arrow">↳</div>
      <div className="branch-step">H: Embedding Monitoring</div>
    </div>
    <div className="branch-item">
      <div className="branch-arrow">↳</div>
      <div className="branch-step">I: Agent Monitoring</div>
    </div>
  </div>
  
  <div className="flow-continuation">
    <div className="flow-step">
      <div className="step-number">J</div>
      <div className="step-content">Token & Cost Logging</div>
    </div>
    <div className="flow-arrow">→</div>
    <div className="flow-step">
      <div className="step-number">K</div>
      <div className="step-content">Custom Metrics Logging</div>
    </div>
    <div className="flow-arrow">→</div>
    <div className="flow-step">
      <div className="step-number">L</div>
      <div className="step-content">End Run & Save</div>
    </div>
  </div>
</div>

## Monitoring Integration

<div className="integration-section">
  <div className="integration-header">
    <h3>Unified Monitoring Framework</h3>
    <p>The ARMS framework provides unified monitoring across all AI/ML operations, ensuring comprehensive observability</p>
  </div>
  
  <div className="integration-grid">
    <div className="integration-item">
      <h4>Unified Metrics Collection</h4>
      <p>All monitoring modules feed into a centralized metrics system</p>
    </div>
    <div className="integration-item">
      <h4>Cross-Component Analysis</h4>
      <p>Correlation between different operation types for holistic insights</p>
    </div>
    <div className="integration-item">
      <h4>Performance Optimization</h4>
      <p>Data-driven recommendations for improving system efficiency</p>
    </div>
    <div className="integration-item">
      <h4>Cost Management</h4>
      <p>Comprehensive cost tracking across all AI/ML operations</p>
    </div>
    <div className="integration-item">
      <h4>Quality Assurance</h4>
      <p>Quality metrics and performance benchmarks for all operations</p>
    </div>
  </div>
</div>

<style>{`
  .concept-hero {
    background: linear-gradient(135deg, #f8faff 0%, #f0f7ff 100%);
    border: 1px solid #d1e7ff;
    border-radius: 16px;
    padding: 2rem;
    margin: 2rem 0;
    box-shadow: 0 8px 24px rgba(0, 123, 255, 0.1);
  }

  .hero-content {
    text-align: center;
  }

  .hero-description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #2d3748;
    margin: 0;
    font-weight: 400;
  }

  .modules-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
  }

  .module-section {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .module-section:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .module-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #f7fafc;
  }

  .module-icon {
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }

  .module-header h3 {
    margin: 0;
    color: #1a365d;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .module-description {
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  .feature-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .feature-item {
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 0.875rem 1rem;
    color: #2d3748;
    font-weight: 500;
    font-size: 0.95rem;
  }

  .features-highlight {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border: 1px solid #bae6fd;
    border-radius: 8px;
    padding: 1.5rem;
  }

  .features-highlight h4 {
    margin: 0 0 1rem 0;
    color: #0369a1;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .features-highlight ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  .features-highlight li {
    color: #0c4a6e;
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
  }

  .metric-category {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1rem;
    transition: all 0.3s ease;
  }

  .metric-category:hover {
    border-color: #cbd5e0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .metric-category h5 {
    margin: 0 0 0.5rem 0;
    color: #1a365d;
    font-size: 1rem;
    font-weight: 600;
  }

  .metric-category p {
    margin: 0;
    color: #4a5568;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .flow-section {
    background: linear-gradient(135deg, #f8faff 0%, #f0f7ff 100%);
    border: 1px solid #d1e7ff;
    border-radius: 16px;
    padding: 2rem;
    margin: 2rem 0;
    box-shadow: 0 8px 24px rgba(0, 123, 255, 0.1);
  }

  .flow-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .flow-header h3 {
    margin: 0 0 0.5rem 0;
    color: #1a365d;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .flow-header p {
    margin: 0;
    color: #4a5568;
    font-size: 1rem;
  }

  .flow-diagram {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .flow-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .step-number {
    width: 2.5rem;
    height: 2.5rem;
    background: linear-gradient(135deg, #2c5282 0%, #1a365d 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.1rem;
    box-shadow: 0 4px 8px rgba(44, 82, 130, 0.3);
  }

  .step-content {
    color: #2d3748;
    font-weight: 500;
    font-size: 0.9rem;
    text-align: center;
    max-width: 120px;
  }

  .flow-arrow {
    color: #2c5282;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .monitoring-branches {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 1.5rem 0;
    padding: 1.5rem;
    background: white;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
  }

  .branch-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .branch-arrow {
    color: #2c5282;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .branch-step {
    color: #2d3748;
    font-weight: 500;
    font-size: 0.95rem;
  }

  .flow-continuation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .integration-section {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border: 1px solid #bae6fd;
    border-radius: 16px;
    padding: 2rem;
    margin: 2rem 0;
    box-shadow: 0 8px 24px rgba(0, 123, 255, 0.1);
  }

  .integration-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .integration-header h3 {
    margin: 0 0 0.5rem 0;
    color: #0369a1;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .integration-header p {
    margin: 0;
    color: #0c4a6e;
    font-size: 1rem;
  }

  .integration-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .integration-item {
    background: white;
    border: 1px solid #bae6fd;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .integration-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 123, 255, 0.15);
  }

  .integration-item h4 {
    margin: 0 0 0.75rem 0;
    color: #0369a1;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .integration-item p {
    margin: 0;
    color: #0c4a6e;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  /* Dark theme adjustments */
  [data-theme='dark'] .concept-hero {
    background: linear-gradient(135deg, #1a2a4a 0%, #0f1a2e 100%);
    border-color: #2d5a8b;
  }

  [data-theme='dark'] .hero-description {
    color: #e2e8f0;
  }

  [data-theme='dark'] .module-section {
    background: #1a202c;
    border-color: #4a5568;
  }

  [data-theme='dark'] .module-header h3 {
    color: #e2e8f0;
  }

  [data-theme='dark'] .module-description {
    color: #cbd5e0;
  }

  [data-theme='dark'] .feature-item {
    background: #2d3748;
    border-color: #4a5568;
    color: #e2e8f0;
  }

  [data-theme='dark'] .features-highlight {
    background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%);
    border-color: #0369a1;
  }

  [data-theme='dark'] .features-highlight h4 {
    color: #7dd3fc;
  }

  [data-theme='dark'] .features-highlight li {
    color: #bae6fd;
  }

  [data-theme='dark'] .metric-category {
    background: #2d3748;
    border-color: #4a5568;
  }

  [data-theme='dark'] .metric-category h5 {
    color: #e2e8f0;
  }

  [data-theme='dark'] .metric-category p {
    color: #cbd5e0;
  }

  [data-theme='dark'] .flow-section {
    background: linear-gradient(135deg, #1a2a4a 0%, #0f1a2e 100%);
    border-color: #2d5a8b;
  }

  [data-theme='dark'] .flow-header h3 {
    color: #e2e8f0;
  }

  [data-theme='dark'] .flow-header p {
    color: #cbd5e0;
  }

  [data-theme='dark'] .step-content {
    color: #e2e8f0;
  }

  [data-theme='dark'] .monitoring-branches {
    background: #1a202c;
    border-color: #4a5568;
  }

  [data-theme='dark'] .branch-step {
    color: #e2e8f0;
  }

  [data-theme='dark'] .integration-section {
    background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%);
    border-color: #0369a1;
  }

  [data-theme='dark'] .integration-header h3 {
    color: #7dd3fc;
  }

  [data-theme='dark'] .integration-header p {
    color: #bae6fd;
  }

  [data-theme='dark'] .integration-item {
    background: #1a202c;
    border-color: #0369a1;
  }

  [data-theme='dark'] .integration-item h4 {
    color: #7dd3fc;
  }

  [data-theme='dark'] .integration-item p {
    color: #bae6fd;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .concept-hero {
      padding: 1.5rem;
      margin: 1.5rem 0;
    }

    .hero-description {
      font-size: 1rem;
    }

    .module-section {
      padding: 1.5rem;
    }

    .module-header {
      flex-direction: column;
      text-align: center;
      gap: 0.75rem;
    }

    .feature-list {
      grid-template-columns: 1fr;
    }

    .metrics-grid {
      grid-template-columns: 1fr;
    }

    .flow-diagram {
      flex-direction: column;
      gap: 1.5rem;
    }

    .flow-arrow {
      transform: rotate(90deg);
    }

    .flow-continuation {
      flex-direction: column;
      gap: 1.5rem;
    }

    .integration-grid {
      grid-template-columns: 1fr;
    }
  }
`}</style>
