---
sidebar_position: 1
---

# Introduction

## Overview

**Elsai ARMS (Agent Resource Management System)** is a backend framework designed to monitor and manage the usage, cost, and performance of AI-powered projects using large language models. It provides centralized tracking for token consumption, execution metrics, and cost analysis, making it ideal for teams running multiple AI agents or pipelines. By storing data in MongoDB and supporting exportable JSON reports, it enables easy integration with analytics or observability tools.

## Elsai Agent Resource Monitoring System

Elsai ARMS is a lightweight monitoring and cost-tracking system for LLM-based agents and applications. Designed for observability, it enables project-based tracking and reporting. It is a modular telemetry and monitoring framework designed to track LLM usage, performance, and cost metrics in real-time. At its core, it integrates with OpenTelemetry via the TelemetryWrapper to log token usage (Token Metrics), latency (LLM Monitor), and estimated costs (Cost Metrics). Projects are managed using a Project Manager that interfaces with MongoDB for persistent storage, while an Exporter module serializes the logged data into JSON for reporting. 

## Key Features

- Token usage tracking
- Cost tracking
- Execution logs
- Performance metrics
- LLM Monitoring
- Success/error analysis
- RAG (Retrieval-Augmented Generation) metrics
- Embedding generation tracking
- OCR (Optical Character Recognition) processing
- System performance monitoring

import CollapsibleMetrics from '@site/src/components/CollapsibleMetrics';

<CollapsibleMetrics 
  title="Project Metrics"
  metrics={[
    { field: "Time of Creation", description: "Timestamp when the project or a processing run was initiated." },
    { field: "Total Tokens", description: "Cumulative sum of tokens processed (input + output) across all runs." },
    { field: "Total Cost per Model", description: "Aggregated cost grouped by model (e.g., GPT-4, Claude, etc.)." },
    { field: "Average Frequency", description: "Average number of runs per day/hour/week." },
    { field: "Success Rate", description: "Percentage of successful runs out of all runs." },
    { field: "Number of Successful Runs", description: "Total number of runs that ended successfully (no crash)." }
  ]}
/>

<CollapsibleMetrics
  title="LLM Metrics"
  metrics={[
    { field: "Model", description: "Name of the model used (e.g., gpt-4o-mini-2024-07-18)." },
    { field: "LLM Provider", description: "Provider of the LLM service (e.g., OpenAI, Anthropic, Google)." },
    { field: "Input Tokens", description: "Number of tokens in the input prompt." },
    { field: "Output Tokens", description: "Number of tokens in the generated response." },
    { field: "Total Tokens", description: "Sum of input and output tokens." },
    { field: "Latency (ms)", description: "Response time in milliseconds." },
    { field: "Prompt", description: "The input text sent to the LLM." },
    { field: "Response", description: "The generated response from the LLM." },
    { field: "Relevance Score", description: "Score indicating how relevant the response is to the query." },
    { field: "Cost", description: "Monetary cost of the LLM call." },
    { field: "Tokens per Second", description: "Processing speed in tokens per second." },
    { field: "Output Throughput", description: "Output generation speed in tokens per second." },
    { field: "Total Throughput", description: "Overall processing speed including input and output." },
    { field: "Governance Metrics", description: "Content safety, prompt injection detection, and response quality assessment." }
  ]}
/>

<CollapsibleMetrics 
  title="RAG Metrics"
  metrics={[
    { field: "Function Name", description: "Name of the RAG function called (e.g., retrieve_documents)." },
    { field: "Query", description: "The search query used for document retrieval." },
    { field: "Query Length", description: "Number of characters in the query." },
    { field: "Docs Count", description: "Total number of documents available for retrieval." },
    { field: "Result Count", description: "Number of documents returned in results." },
    { field: "Timestamp", description: "When the RAG operation was performed." },
    { field: "Relevance Score", description: "Quality metric for retrieval relevance (0.0 to 1.0)." },
    { field: "Status", description: "Success/failure status of the operation." },
    { field: "Latency", description: "Time taken for the RAG operation (in ms)." },
    { field: "Cost", description: "Cost associated with the RAG operation." },
    { field: "Error", description: "Error details if the operation failed." },
    { field: "Operation Type", description: "Type of RAG operation performed." }
  ]}
/>

<CollapsibleMetrics 
  title="Embedding Metrics"
  metrics={[
    { field: "Function Name", description: "Name of the embedding function called (e.g., get_embedding)." },
    { field: "Input Length", description: "Number of characters in the input text." },
    { field: "Dimensions", description: "Number of dimensions in the generated embedding vector." },
    { field: "Timestamp", description: "When the embedding operation was performed." },
    { field: "Quality Score", description: "Quality metric for the generated embedding (0.0 to 1.0)." },
    { field: "Status", description: "Success/failure status of the operation." },
    { field: "Latency", description: "Time taken for the embedding operation (in ms)." },
    { field: "Cost", description: "Cost associated with the embedding operation." },
    { field: "Error", description: "Error details if the operation failed." },
    { field: "Operation Type", description: "Type of embedding operation performed." }
  ]}
/>

<CollapsibleMetrics 
  title="OCR Metrics"
  metrics={[
    { field: "Document Type", description: "Type of document processed (e.g., PDF, image, scanned document)." },
    { field: "OCR Engine", description: "OCR service or library used for text extraction." },
    { field: "Extracted Text", description: "The text content extracted from the document." },
    { field: "Confidence Score", description: "OCR confidence level for the extracted text." },
    { field: "Processing Time", description: "Time taken to process the document." },
    { field: "Page Count", description: "Number of pages in the document." },
    { field: "Text Quality", description: "Quality assessment of the extracted text." }
  ]}
/>

<CollapsibleMetrics 
  title="Run Metrics"
  metrics={[
    { field: "LLM Details", description: "Summary of all LLM calls made in this run (can include model, tokens, cost)." },
    { field: "Custom Metrics", description: "User-defined values like accuracy, classification labels, relevance score, etc." },
    { field: "Logs", description: "Event logs or trace logs emitted during the run (info, warning, error). May include stages, retries, failures, etc." },
    { field: "Start Time", description: "The exact timestamp when the run or process began execution." },
    { field: "End Time", description: "The exact timestamp when the run or process completed execution." },
    { field: "Execution Duration", description: "The total time taken from the start to the end of the run, typically measured in seconds." },
    { field: "Success Status", description: "SUCCESS/FAILED indicating whether the run met its goal." }
  ]}
/>

<CollapsibleMetrics 
  title="System Metrics"
  metrics={[
    { field: "Metrics Source", description: "Source of system metrics (e.g., \"otel + psutil\")." },
    { field: "Process Status", description: "Current status of the running process." },
    { field: "CPU Threads", description: "Number of CPU threads currently in use." },
    { field: "Memory Usage", description: "Current memory consumption in bytes." },
    { field: "CPU Utilization", description: "Current CPU usage percentage." },
    { field: "Disk Space", description: "Total, used, and free disk space in bytes." },
    { field: "Network Stats", description: "Network packets, errors, connections, and I/O statistics." },
    { field: "OpenTelemetry Metrics", description: "Detailed OTEL metrics including LLM latency, system resources, and process information." },
    { field: "Collection Duration", description: "Time taken to collect all system metrics." }
  ]}
/>
