const { MongoClient } = require("mongodb");

// .env variables
const db = process.env.MONGO_DATABASE;
const cluster = process.env.MONGO_CLUSTER;
const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${user}:${password}@${cluster}.a2533.mongodb.net/${db}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

export const MongoApi = async () => {
  try {
    await client.connect();
    const database = client.db("TechGuideMaxDB");

    const heroSection = database.collection("HeroSection");
    const featuredStories = database.collection("FeaturedStories");
    const featuredVideos = database.collection("FeaturedVideos");
    const howTo = database.collection("HowTo");
    const latestStories = database.collection("LatestStories");
    const trailers = database.collection("Trailers");
    const trending = database.collection("Trending");

    const HeroSectionData = await heroSection.find({}).toArray();
    const FeaturedStoriesData = await featuredStories.find({}).toArray();
    const FeaturedVideosData = await featuredVideos.find({}).toArray();
    const HowToVideosData = await howTo.find({}).toArray();
    const LatestStoriesData = await latestStories.find({}).toArray();
    const TrailersData = await trailers.find({}).toArray();
    const TrendingData = await trending.find({}).toArray();

    return {
      HeroSectionData,
      FeaturedStoriesData,
      FeaturedVideosData,
      HowToVideosData,
      LatestStoriesData,
      TrailersData,
      TrendingData,
    };
  } catch (e) {
    console.log("Failed Connecting to Database");
  } finally {
    await client.close();
  }
};
