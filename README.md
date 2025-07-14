# 📰 Real-Time News Sentiment Analysis Pipeline

A real-time distributed system that ingests breaking news headlines, performs sentiment analysis, stores structured results in **MongoDB**, caches data in **Redis**, logs activity for monitoring in **Elasticsearch + Kibana**, and displays insights through a **Frontend Dashboard**.

---

## 🌐 Overview

This project integrates **Apache Kafka**, **Python**, **MongoDB**, **Redis**, **Elasticsearch**, and a modern **frontend UI** to analyze and visualize sentiment trends in live news streams.

---

## 🧠 Features

- 🔁 Real-time data stream via Kafka
- 🧠 Sentiment analysis with NLP (TextBlob, Transformers, or NLTK)
- 🗂️ Persistent storage in MongoDB
- ⚡ High-speed caching with Redis
- 📊 Centralized logging with Kibana (via Elasticsearch)
- 🖥️ Interactive dashboard (React)

---

## 🏗️ Architecture Diagram

```mermaid
graph TD;
    A[News API / RSS Feed] --> B[Kafka Producer (Node.js)];
    B --> C[Kafka Topic (news-stream)];
    C --> D[Kafka Consumer (Python)];
    D --> E[Sentiment Analysis Engine];
    E --> F[MongoDB];
    E --> G[Redis Cache];
    E --> H[Elasticsearch];
    H --> I[Kibana];
    F --> J[Frontend Dashboard];
    G --> J;
