# Eyego Backend Internship - User Activity Microservice

## Project Overview

This repository contains a **scalable event-driven microservice** built with **Node.js**, **Express**, and **Kafka** for real-time processing of user activity logs.  

The service is designed following **Domain-Driven Design (DDD)** principles and includes:

- Kafka **Producer** & **Consumer** for event streaming.
- MongoDB database with **proper indexing** for efficient log storage and retrieval.
- REST API to **fetch processed logs** with **pagination** and **filtering**.
- **Dockerized** service ready for deployment.
- Optional deployment using **Kubernetes** on **Google Cloud**, **AWS Free Tier**, or any other server.

---

## Architecture

The microservice is structured following **DDD principles**:

1. **Domain Layer**  
   - Core entities: `UserActivityLog`  
   - Business logic: processing and validation of events  

2. **Application Layer**  
   - Services to handle commands/events  
   - REST controllers exposing API endpoints  

3. **Infrastructure Layer**  
   - Kafka integration (Producer & Consumer)  
   - MongoDB connection and repositories  
   - Docker & Kubernetes configuration  

4. **API Layer**  
   - REST API for fetching logs  
   - Supports pagination and filtering  

**Flow:**  
1. Events are published to Kafka by the **Producer**.  
2. **Consumer** listens and processes events in real-time.  
3. Processed logs are stored in **MongoDB**.  
4. Logs can be retrieved through the REST API with filtering and pagination.

---

## Getting Started


### Installation

1. Clone the repository:

```
git clone https://github.com/devnoranhamdy/Activity-Logs-System.git
cd user-activity-service
```

2. Install dependencies:

```
npm install
```
3. Configure environment variables:  
Create a `.env` file with the following:

```
KAFKA_BROKER=localhost:9092
KAFKA_CLIENT_ID=user-activity-service
KAFKA_TOPIC=user-activity-logs
MONGO_URI=
PORT=5000
```

### Running Locally

1. Start MongoDB & Kafka (via Docker Compose):

```
docker-compose up --build -d
```
2. Run the service:

```
npm run dev
```
