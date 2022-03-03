import Head from "next/head";

// strapi api
import {
  HeroSectionStrapiApi,
  FeaturedStoriesStrapiApi,
  FeaturedVideosStrapiApi,
  TrailersStrapiApi,
  HowToStrapiApi,
  LatestStoriesStrapiApi,
  TrendingStrapiApi,
} from "../lib/strapiApi";

// components
import { HeroSection } from "../components/HeroSection/HeroSection.component";
import { FeaturedStories } from "../components/FeaturedStories/FeaturedStories.component";
import { FeaturedVideos } from "../components/FeaturedVideos/FeaturedVideos.component";
import { Trailers } from "../components/Trailers/Trailers.component";
import { LatestStories } from "../components/LatestStories/LatestStories.component";
import { HowToVideos } from "../components/HowToVideos/HowToVideos.component";

// pre-rendering the data
export const getStaticProps = async () => {
  const HeroSection = await HeroSectionStrapiApi();
  const FeaturedStories = await FeaturedStoriesStrapiApi();
  const FeaturedVideos = await FeaturedVideosStrapiApi();
  const Trailers = await TrailersStrapiApi();
  const HowToVideos = await HowToStrapiApi();
  const LatestStories = await LatestStoriesStrapiApi();
  const Trending = await TrendingStrapiApi();

  const HeroSectionData = HeroSection.data;
  const FeaturedStoriesData = FeaturedStories.data;
  const FeaturedVideosData = FeaturedVideos.data;
  const TrailersData = Trailers.data;
  const HowToVideosData = HowToVideos.data;
  const LatestStoriesData = LatestStories.data;
  const TrendingData = Trending.data;

  return {
    props: {
      HeroSectionData,
      FeaturedStoriesData,
      FeaturedVideosData,
      TrailersData,
      HowToVideosData,
      LatestStoriesData,
      TrendingData,
    },
  };
};

export default function Home({
  HeroSectionData,
  FeaturedStoriesData,
  FeaturedVideosData,
  TrailersData,
  HowToVideosData,
  LatestStoriesData,
  TrendingData,
}) {
  return (
    <div>
      <Head>
        <title>Tech Guide Max</title>
        <meta
          name="description"
          content="The Best and Beautifully Organised Tech Content, helps & tips, How-to's & Entertainement Content with Buyer Guides. Which ultimately helps you find the best available deals and articles on the internet."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <main>
        <HeroSection HeroSectionData={HeroSectionData} />
        <FeaturedStories FeaturedStoriesData={FeaturedStoriesData} />
        <FeaturedVideos FeaturedVideosData={FeaturedVideosData} />
        <Trailers TrailersData={TrailersData} />
        <HowToVideos HowToVideosData={HowToVideosData} />
        <LatestStories
          LatestStoriesData={LatestStoriesData}
          TrendingData={TrendingData}
          title="Latest Stories"
        />
      </main>
    </div>
  );
}
