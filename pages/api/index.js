// mongodb api
import { MongoApi } from "../../lib/mongoApi";

export default async function HomeScreenApiHandler(req, res) {
  const data = await MongoApi();
  const {
    HeroSectionData,
    FeaturedStoriesData,
    FeaturedVideosData,
    TrailersData,
    HowToVideosData,
    TrendingData,
    LatestStoriesData,
  } = data;

  res.status(200).json({
    HeroSectionData,
    FeaturedStoriesData,
    FeaturedVideosData,
    TrailersData,
    HowToVideosData,
    TrendingData,
    LatestStoriesData,
  });
}
