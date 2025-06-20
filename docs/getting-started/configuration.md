---
sidebar_position: 1
---

# Configuration

Configuration setup for Elsai ARMS. The `elsai-arms` package requires minimal setup. 

## Environment Setup
Configuration is handled via environment variables using a `.env` file. These variables are loaded automatically when the application starts.
Before using `elsai-arms`, you need to set up a `.env` file for ARMS and MongoDB configuration:

```env
ELSAI_ARMS_API_KEY = <your_api_key>
MONGO_URI = <your_mongo_uri>
DB_NAME = <your_database_name>
``` 

The database credentials are used to connect to your MongoDB instance. If you're using Docker, you can link a MongoDB container and update the URI accordingly.

## Project and Run Structure
Each API key and project combination creates a unique document in the MongoDB collection. The structure looks like this:

`api_key`: Identifier for the user or agent.

`project`: Name of the tracked project.

`runs`: Array of individual run logs with metadata.

`metrics`: Aggregated data like token usage, cost, success rate, execution time.

This structure supports real-time and historical monitoring across runs.