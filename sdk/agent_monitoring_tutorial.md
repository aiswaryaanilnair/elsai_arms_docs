---
sidebar_position: 5
---

import StyledCodeBlock from '@site/src/components/StyledCodeBlock';

# Agent Monitoring Tutorial

This tutorial demonstrates how to monitor LangChain agents and graphs using ElsaiARMS callbacks.

## Overview

ElsaiARMS provides a LangChain callback that automatically tracks agent execution, tool usage, LLM interactions, and performance metrics. Simply add the callback to your LangChain graph or agent invocation.

## Prerequisites

- ElsaiARMS installed and configured
- LangChain and LangGraph installed
- MongoDB connection configured (for On-Prem version)

## Basic Usage

### Step 1: Initialize ElsaiARMS

<StyledCodeBlock code={`from elsai_arms.elsai_arms import ElsaiARMS

# Initialize ElsaiARMS
arms = ElsaiARMS("Agent_Project")`} />

### Step 2: Create Your LangChain Graph

<StyledCodeBlock code={`from langchain_core.messages import HumanMessage
from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated
import operator

# Define your graph state
class State(TypedDict):
    messages: Annotated[list, operator.add]

# Create your graph nodes
def agent_node(state: State):
    # Your agent logic here
    return {"messages": [HumanMessage(content="Agent response")]}

# Build the graph
graph = StateGraph(State)
graph.add_node("agent", agent_node)
graph.set_entry_point("agent")
graph.add_edge("agent", END)
graph = graph.compile()`} />

### Step 3: Add ElsaiARMS Callback

<StyledCodeBlock code={`# Invoke the graph with ElsaiARMS callback
messages = [HumanMessage(content="What is the weather today?")]

result = graph.invoke(
    {"messages": messages},
    config={"callbacks": [arms.langchain_callback]}
)`} />

## Complete Example

Here's a complete example of monitoring a LangChain agent:

<StyledCodeBlock code={`from elsai_arms.elsai_arms import ElsaiARMS
from langchain_core.messages import HumanMessage, AIMessage
from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated
import operator

# Initialize ElsaiARMS
arms = ElsaiARMS("Weather_Agent_Project")

# Define state
class State(TypedDict):
    messages: Annotated[list, operator.add]

# Define agent node
def weather_agent(state: State):
    # Simulate agent processing
    user_message = state["messages"][-1].content
    response = f"Processing weather query: {user_message}"
    return {"messages": [AIMessage(content=response)]}

# Build graph
graph = StateGraph(State)
graph.add_node("agent", weather_agent)
graph.set_entry_point("agent")
graph.add_edge("agent", END)
graph = graph.compile()

# Run with monitoring
try:
    arms.info("Starting weather agent")
    
    messages = [HumanMessage(content="What's the weather in New York?")]
    result = graph.invoke(
        {"messages": messages},
        config={"callbacks": [arms.langchain_callback]}
    )
    
    arms.info("Agent execution completed")
    arms.end_run()
    
    # Export monitoring data
    print(arms.export())
    
except Exception as e:
    arms.error(f"Agent error: {e}")`} />

## What Gets Monitored

When you use the LangChain callback, ElsaiARMS automatically tracks:

- **Agent Execution**: Start time, end time, duration
- **LLM Calls**: All LLM interactions within the agent
- **Token Usage**: Input and output tokens for each LLM call
- **Tool Calls**: Tools invoked by the agent
- **Cost**: Estimated cost for all LLM operations
- **Performance**: Latency and throughput metrics
- **Errors**: Any errors during agent execution

## Advanced Usage

### Using with Multiple Callbacks

You can combine ElsaiARMS callback with other LangChain callbacks:

<StyledCodeBlock code={`from langchain.callbacks import StdOutCallbackHandler

result = graph.invoke(
    {"messages": messages},
    config={
        "callbacks": [
            arms.langchain_callback,
            StdOutCallbackHandler()
        ]
    }
)`} />

### Monitoring Agent Chains

For complex agent workflows with multiple steps:

<StyledCodeBlock code={`# Each invoke will be tracked separately
step1_result = graph.invoke(
    {"messages": messages1},
    config={"callbacks": [arms.langchain_callback]}
)

step2_result = graph.invoke(
    {"messages": messages2},
    config={"callbacks": [arms.langchain_callback]}
)`} />

## Viewing Results

After running your agent, you can:

1. **Export Data**: Use `arms.export()` to get JSON data
2. **Check MongoDB**: View stored data in your MongoDB database
3. **Review Metrics**: Analyze agent performance, token usage, and costs

## Next Steps

- Learn more about monitoring features in the [User Guide](./user_guide)
- See the main [Tutorial](./tutorial) for other monitoring examples
- Check the [Configuration Guide](./getting-started/configuration) for setup instructions

