from kafka import KafkaConsumer
from Handler.SentimentHandler import SentimentHandler
from Config.TopicConfig import sentiment_topic_config
from Constant.KafkaConstant import BROKER_KAFKA
from Utils.EnvUtils import get_env_value



class KafkaManager:


    def __init__(self):
        self.sentiment_handler = SentimentHandler()
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
                self.sentiment_handler.handle_sentiment_data(message)
        except Exception as error:
            print(f'Error While Subscribing the Sentiment Payload,Error {error}')
            return



def get_kafka_manager():
    return KafkaManager()