---
sidebar_position: 5
---

# Conceptual Guide

The ARMS modules form the backbone of the system, handling all telemetry, logging, and data management operations. The key features include token usage and cost tracking per project, mongoDB backend for centralized data storage, JSON export capabilities for visualization, and custom metrics logging capabilities. 

## Modules and Features
### ElsaiARMS 

Acts as the orchestrator and public interface for the entire ARMS framework. This class initializes all sub-modules and provides a high-level API to start monitoring, record token usage, and export metrics. The ElsaiARMS class manages: 
- Project lifecycle (Project Manager) 
- Real-time monitoring (ARMS Wrapper) 
- Token and cost tracking 
- LLM metrics tracking 
- Custom logs handling 
- Managing runs (Run Data) 
- Exporting to structured JSON 

#### Features: 

- Automatically handles telemetry, token logging, and cost tracking. 
- Simplifies data export and session lifecycle management. 

### Project Manager 

Maintains metadata and persistent state related to each LLM project, such as project name, creation time, and session records. The project manager gets the log for each run from run data in Elsai ARMS and stores the details in a database. Handles: 
- Project creation and loading 
- Data dictionary updates 
- Serialization-ready format for export 

#### Features: 

- Create Project: Creates a new project 
- Load Project: Load existing project 
- Save Project: Save project details in MongoDB 

### ARMS Wrapper 

ARMS Wrapper is responsible for real-time observability of LLM-based operations. It acts as the system’s telemetry layer, tracking and recording essential performance metrics that can later be analyzed to evaluate model responsiveness, usage patterns, and service reliability. The ARMS wrapper is connected to Token Metrics, Cost Metrics, and LLM Monitor to record the metrics. 

#### Features: 
- Histogram-based latency tracking 
- Counter for metrics 
- Integrates easily with external observability platforms 

### Token Metrics 

Tracks input/output tokens used across all LLM interactions within a project session. Provides an overview of token usage for each project. Gets token details from LLM response metadata from LLM monitoring function. 

#### Features: 

- Computes total token usage 
- Useful for token management and budget planning 

### Cost Metrics 

Estimates the monetary cost of LLM usage based on the recorded token consumption and configured price rates. Provides an overview of the cost for projects. Calculates cost based on the token usage, which is accessed from LLM response metadata from LLM monitoring function. 

#### Features: 
- Tracks real-time cost as tokens are recorded 
- Support model-specific pricing schemes 

### LLM Monitoring 

Captures performance and usage analytics of LLM interactions — including latency, token usage, and cost. From the response metadata, LLM monitoring captures the following metrics: 
- Model Name 
- Input Tokens 
- Output Tokens 
- Total Tokens 
- Latency 
- Prompt 
- Response 

#### Features: 

- Consolidates telemetry, token, and cost data 
- Provides all metric details for individual LLM calls 

### Exporter 

Formats all accumulated project data into a structured exportable format, JSON. 

#### Features: 
- Modular formatting logic 
- Merges multiple sources (e.g., tokens + cost + latency) 
- Structured output with computed summaries 

## Functional Flow

```bash
A[Initialize ARMS] --> B[Load/Create Project];
B --> C[Begin Run];
C --> D[Monitor LLM];
D --> E[Token & Cost Logging];
E --> F[Custom Metrics Logging];
F --> G[End Run & Save];
```
