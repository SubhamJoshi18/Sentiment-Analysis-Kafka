interface IGenericTopic {
  name: string;
  partition: string;
  replica: number;
}

interface ISentimentAnalysis extends IGenericTopic {}

export { ISentimentAnalysis, IGenericTopic };
