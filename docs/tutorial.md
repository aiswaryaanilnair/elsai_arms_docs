---
sidebar_position: 4
---

# Tutorial

## Usage Example
#### Installation
```bash
!pip install --extra-index-url http://100.27.208.107:3141/root/elsai-arms/+simple/ --trusted-host 100.27.208.107 elsai-arms==0.1.0
```

#### Sample Code
```python
from elsai_arms.elsai_arms import ElsaiARMS
from elsai_core.model import AzureOpenAIConnector

arms = ElsaiARMS("Project_Name")

try:
    connector = AzureOpenAIConnector()
    llm = connector.connect_azure_open_ai("gpt-4o-mini")

    arms.info("Script started")

    @arms.monitor_llm_call
    def get_response(prompt: str):
        return llm.invoke(prompt)

    result = get_response("Tell me a joke")

    arms.log_custom_metric("Number of response", 1)
    arms.info("Run completed")

    arms.end_run()

    print(arms.export())

except Exception as e:
    arms.error(f"An error occurred: {e}")
```
## Steps
1. Initialize Elsai ARMS in the application: 
```bash
arms = ElsaiARMS(“Project_Name”) 
```
2. The Project Manager checks if it's a new project or an existing project. 

3. Project Manager creates a new project, if new, otherwise loads existing project. 

4. A new run is initiated under the project. 

5. To automatically capture LLM-specific metrics: 
```bash
arms. monitor_llm_call() 
```
6. To log custom metrics: 
```bash
arms.log_custom_metric(“Metric Name”, metric_value) 
```
7. To implement loggers:
```bash
arms.info("Log Operation")
```
8. To log errors:
```bash
arms.error("Log Error")
```
9. Once metrics are logged, the exporter module is used to export logs in JSON format. To export data:
```bash
arms.export()
```
10. Once the run is done, the project manager saves the run details and the project details are stored in MongoDB. To end run: 
```bash
arms.end_run() 
```