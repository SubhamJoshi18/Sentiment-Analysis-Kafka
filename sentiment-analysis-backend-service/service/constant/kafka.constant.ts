export const sentimentTopicConfig = {
  name: "sentiment-analysis",
  partition: 2,
  replica: 2,
};

export const required_topics = [sentimentTopicConfig["name"]];
