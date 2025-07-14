import json
import pandas as pd

class SentimentHandler:


    def handle_sentiment_data(self,message):
        content = ""

        if isinstance(message.value,bytes):
            content = message.value.decode('utf-8')

        parse_content = json.loads(content)
        print(f"Received: {parse_content} from topic {message.topic} partition {message.partition}")
        api_url =  list(parse_content.keys())
        data_content = parse_content[api_url[0]]['data']
        try:
            content_df = pd.DataFrame(
                data_content
            )
            print(content_df)
        except Exception as error:
            print(f'Error Handling the Sentiment Data,Error {error}')

        finally:
            print(f'Handle Has been Completed')
            return