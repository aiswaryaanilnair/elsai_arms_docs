---
sidebar_position: 4
---

# Tutorial

## Usage Example
#### Installation
```bash
!pip install --extra-index-url http://100.27.208.107:3141/root/elsai-arms/+simple/ --trusted-host 100.27.208.107 elsai-arms==1.0.0
```

#### Sample Code
```python
from elsai_arms.elsai_arms import ElsaiARMS
from elsai_model.azure_openai import AzureOpenAIConnector
import easyocr

arms = ElsaiARMS("Project_Name")

try:
    connector = AzureOpenAIConnector()
    llm = connector.connect_azure_open_ai("gpt-4o-mini")

    arms.info("Script started")

    @arms.monitor_llm_call
    def get_response(prompt: str):
        return llm.invoke(prompt)

    @arms.monitor_ocr_call(model_name="EasyOCR")
    def run_easyocr(image_path):
        reader = easyocr.Reader(['en'])
        return reader.readtext(image_path, detail=1)  

    @arms.monitor_embedding_call
    def get_embedding(text):
        //Code for generating embeddings
        embedding = ["Generated Embeddings"]
        return embedding

    @arms.monitor_rag_call
    def retrieve_documents(query, docs, top_k=2):
        //Code for RAG
        results=["RAG Results"]
        return results[:top_k]

    llm_result = get_response("Tell me a joke")
    ocr_result = run_easyocr("path_to_image.png")
    
    documents = ["Load Documents"]

    query = "Enter query"
    embedding = get_embedding(query)
    retrieved_docs = retrieve_documents(query, documents)

    arms.log_custom_metric("Number of response", 1)
    arms.info("Run completed")

    arms.end_run()

    print(arms.export())

except Exception as e:
    arms.error(f"An error occurred: {e}")
```
## Steps

<div className="tutorial-steps">
  <div className="step-item">
    <div className="step-number">1</div>
    <div className="step-content">
      <div className="step-title">Initialize Elsai ARMS in the application</div>
      <div className="step-code">
        <code>arms = ElsaiARMS("Project_Name")</code>
      </div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">2</div>
    <div className="step-content">
      <div className="step-title">The Project Manager checks if it's a new project or an existing project</div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">3</div>
    <div className="step-content">
      <div className="step-title">Project Manager creates a new project, if new, otherwise loads existing project</div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">4</div>
    <div className="step-content">
      <div className="step-title">A new run is initiated under the project</div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">5</div>
    <div className="step-content">
      <div className="step-title">To automatically capture LLM-specific metrics</div>
      <div className="step-code">
        <code>arms.monitor_llm_call()</code>
      </div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">6</div>
    <div className="step-content">
      <div className="step-title">To capture OCR metrics</div>
      <div className="step-code">
        <code>arms.monitor_ocr_call("OCR_name")</code>
      </div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">7</div>
    <div className="step-content">
      <div className="step-title">To monitor RAG performance</div>
      <div className="step-code">
        <code>arms.monitor_rag_call()</code>
      </div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">8</div>
    <div className="step-content">
      <div className="step-title">To monitor embedding metrics</div>
      <div className="step-code">
        <code>arms.monitor_embedding_call()</code>
      </div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">9</div>
    <div className="step-content">
      <div className="step-title">To monitor agent metrics</div>
      <div className="step-code">
        <code>arms.monitor_agent_call("Agent Name", components=[List of components])</code>
      </div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">10</div>
    <div className="step-content">
      <div className="step-title">To log custom metrics</div>
      <div className="step-code">
        <code>arms.log_custom_metric("Metric Name", metric_value)</code>
      </div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">11</div>
    <div className="step-content">
      <div className="step-title">To log operation</div>
      <div className="step-code">
        <code>arms.info("Log Operation")</code>
      </div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">12</div>
    <div className="step-content">
      <div className="step-title">To log warning</div>
      <div className="step-code">
        <code>arms.warning("Log Warning")</code>
      </div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">13</div>
    <div className="step-content">
      <div className="step-title">To log errors</div>
      <div className="step-code">
        <code>arms.error("Log Error")</code>
      </div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">14</div>
    <div className="step-content">
      <div className="step-title">Once metrics are logged, the exporter module is used to export logs in JSON format. To export data</div>
      <div className="step-code">
        <code>arms.export()</code>
      </div>
    </div>
  </div>

  <div className="step-item">
    <div className="step-number">15</div>
    <div className="step-content">
      <div className="step-title">Once the run is done, the project manager saves the run details and the project details are stored in MongoDB. To end run</div>
      <div className="step-code">
        <code>arms.end_run()</code>
      </div>
    </div>
  </div>
</div>

<style>{`
  .tutorial-steps {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .step-item {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    padding: 1.5rem;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
  }

  .step-item:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    border-color: #cbd5e0;
    transform: translateY(-1px);
  }

  .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: linear-gradient(135deg, #2c5282 0%, #1a365d 100%);
    color: white;
    border-radius: 50%;
    font-weight: 600;
    font-size: 1.1rem;
    flex-shrink: 0;
    box-shadow: 0 4px 8px rgba(44, 82, 130, 0.3);
  }

  .step-content {
    flex: 1;
    min-width: 0;
  }

  .step-title {
    color: #2d3748;
    font-weight: 500;
    font-size: 1.05rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }

  .step-code {
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 0.875rem 1rem;
    margin-top: 0.5rem;
  }

  .step-code code {
    color: #2d3748;
    font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
    font-size: 0.95rem;
    font-weight: 500;
    background: transparent;
    padding: 0;
    border-radius: 0;
  }

  /* Dark theme adjustments */
  [data-theme='dark'] .step-item {
    background: #1a202c;
    border-color: #4a5568;
  }

  [data-theme='dark'] .step-item:hover {
    border-color: #718096;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  [data-theme='dark'] .step-title {
    color: #e2e8f0;
  }

  [data-theme='dark'] .step-code {
    background: #2d3748;
    border-color: #4a5568;
  }

  [data-theme='dark'] .step-code code {
    color: #e2e8f0;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .tutorial-steps {
      gap: 1rem;
      margin: 1.5rem 0;
    }

    .step-item {
      padding: 1.25rem;
      gap: 1rem;
    }

    .step-number {
      width: 2.25rem;
      height: 2.25rem;
      font-size: 1rem;
    }

    .step-title {
      font-size: 1rem;
    }

    .step-code {
      padding: 0.75rem;
    }

    .step-code code {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .step-item {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1rem;
    }

    .step-number {
      margin-bottom: 0.5rem;
    }
  }
`}</style>
