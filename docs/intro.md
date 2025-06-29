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

### Project Metrics
| Field                  | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Time of Creation**    | Timestamp when the project or a processing run was initiated.              |
| **Total Tokens**        | Cumulative sum of tokens processed (input + output) across all runs.       |
| **Total Cost per Model**| Aggregated cost grouped by model (e.g., GPT-4, Claude, etc.)               |
| **Average Frequency**   | Average number of runs per day/hour/week.                                  |
| **Success Rate**        | Percentage of successful runs out of all runs.                             |
| **Number of Successful Runs** | Total number of runs that ended successfully (no crash). |

### LLM Metrics
| Field                | Description                                                                      |
|----------------------|----------------------------------------------------------------------------------|
| **Model**            | Name of the model used (e.g., gpt-4, claude-3-sonnet).                |
| **Input Tokens**     | Number of tokens in the prompt sent to the LLM.                                  |
| **Output Tokens**    | Number of tokens generated by the LLM in the response.                          |
| **Total Tokens**     | Sum of input and output tokens.                                                  |
| **Latency**          | Time taken from request to response (in ms).                                |
| **Prompt**           | The actual prompt sent to the LLM.                                         |
| **Response**         | The LLM’s generated response.                                |
| **Cost**             | Calculated cost for this call, based on token pricing of the model.              |

### Run Metrics
| Field                | Description                                                                      |
|----------------------|----------------------------------------------------------------------------------|
| **LLM Details**       | Summary of all LLM calls made in this run (can include model, tokens, cost).    |
| **Custom Metrics**    | User-defined values like accuracy, classification labels, relevance score, etc.  |
| **Logs**              | Event logs or trace logs emitted during the run (info, warning, error). May include stages, retries, failures, etc. |
| **Start Time**        | The exact timestamp when the run or process began execution.                                                         |
| **End Time**          | The exact timestamp when the run or process completed execution.                                                           |
| **Execution Duration**| The total time taken from the start to the end of the run, typically measured in seconds .                                 |
| **Success Status**    | SUCCESS/FAILED indicating whether the run met its goal.      |
