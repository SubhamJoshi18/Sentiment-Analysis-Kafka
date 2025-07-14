from kafka import KafkaConsumer
from Config.TopicConfig import sentiment_topic_config
from Constant.KafkaConstant import BROKER_KAFKA
from Utils.EnvUtils import get_env_value


class KafkaManager:


    def __init__(self):
        self.sentiment_config = sentiment_topic_config


    def subscribe_sentiment_payload(self):
        try:
            consumer = KafkaConsumer(
                self.sentiment_config['name'],
                group_id=get_env_value('GROUP_ID'),
                bootstrap_servers=BROKER_KAFKA,
                auto_offset_reset='earliest',
                enable_auto_commit=True
            )

            print(f'Waiting For the Message in the Sentiment Analyzer Topic')
            for message in consumer:
                print(f"Received: {message.value.decode('utf-8')} from topic {message.topic} partition {message.partition}")
        except Exception as error:
            print(f'Error While Subscribing the Sentiment Payload,Error {error}')
            return



def get_kafka_manager():
    return KafkaManager()