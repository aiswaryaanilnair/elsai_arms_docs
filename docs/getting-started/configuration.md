---
sidebar_position: 2
---

# Configuration

Configuration setup for ElsaiARMS. The `elsai-arms` package requires minimal setup to get started.

## Environment Setup

Configuration is handled via environment variables using a `.env` file. These variables are loaded automatically when the application starts.

### Required Configuration

Before using `elsai-arms`, you need to set up a `.env` file in your project root directory with the following variables:

```bash
ELSAI_ARMS_API_KEY=<your_api_key>

MONGO_URI=<your_mongo_uri>
DB_NAME=<your_database_name>
```

### Configuration Details

#### ElsaiARMS API Key
- **Purpose**: Authenticates your application with ElsaiARMS services
- **Format**: String token provided during account setup
- **Example**: `ELSAI_ARMS_API_KEY=sk-arms-1234567890abcdef`

#### MongoDB Configuration
- **MONGO_URI**: Connection string for your MongoDB instance
- **DB_NAME**: Name of the database to store ElsaiARMS data

**Example MongoDB configurations:**

Local MongoDB:
```bash
MONGO_URI=mongodb://localhost:27017
DB_NAME=elsai_arms_db
```

MongoDB Atlas (Cloud):
```bash
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
DB_NAME=elsai_arms_db
```

Docker MongoDB:
```bash
MONGO_URI=mongodb://mongodb:27017
DB_NAME=elsai_arms_db
```

## Docker Setup

If you're using Docker, you can link a MongoDB container and update the URI accordingly:

```yaml
# docker-compose.yml
version: '3.12'
services:
  mongodb:
    image: mongo:latest
    container_name: elsai-arms-mongodb
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
    volumes:
      - mongodb_data:/data/db

  elsai-arms:
    build: .
    container_name: elsai-arms-app
    depends_on:
      - mongodb
    environment:
      - MONGO_URI=mongodb://admin:password@mongodb:27017
      - DB_NAME=elsai_arms_db
      - ELSAI_ARMS_API_KEY=${ELSAI_ARMS_API_KEY}

volumes:
  mongodb_data:
```

## Next Steps

With configuration complete, you're ready to start using ElsaiARMS! Check out our [User Guide](docs/user_guide.md) to begin monitoring and governing your AI operations.