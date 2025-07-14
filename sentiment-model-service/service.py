import sys
from Kafka.KafkaManager import get_kafka_manager

def start_model():
    try:
        kafka_instance = get_kafka_manager()
        kafka_instance.subscribe_sentiment_payload()
    except Exception as error:
        print(f'Error Starting the Model For the Sentiment Analyzer,Error {error}')
        sys.exit(1)

if __name__ == "__main__":
    start_model()