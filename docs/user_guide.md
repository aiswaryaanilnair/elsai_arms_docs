---
sidebar_position: 3
---

# User Guide

![ARMS Guide](/img/how_to.png)

## Functionalities
Follow the steps given below to use ARMS in your project.

### Import

```bash
from elsai_arms.api import ElsaiARMS
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
- Input Tokens
- Output Tokens
- Total Tokens
- Model Name
- Latency
- Prompt & Response
- Estimated Cost
Metrics are recorded in real-time via OpenTelemetry and tied to the run.

#### Usage Example

```bash
@arms.monitor_llm_call
def get_response(prompt: str):
    return llm.invoke(prompt)
```

### Custom Metrics

To log domain-specific or internal metrics as a key value pair.
```bash
arms.log_custom_metric("Key", value)
```

### Setting Logger

Maintans a log of the project.
```bash
arms.info("Insert Log")
```

Error Logs:
```bash
arms.error("Error Log")
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