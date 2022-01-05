import Head from "next/head";

// data
import FeaturedStoriesData from "../data/FeaturedStories.data.json";
import FeaturedVideosData from "../data/FeaturedVideos.data.json";
import HeroSectionData from "../data/HeroSection.data.json";
import LatestStoriesData from "../data/LatestStories.data.json";
import TrailersData from "../data/Trailers.data.json";
import TrendingData from "../data/Trending.data.json";

// components
import { HeroSection } from "../components/HeroSection/HeroSection.component";
import { FeaturedStories } from "../components/FeaturedStories/FeaturedStories.component";
import { FeaturedVideos } from "../components/FeaturedVideos/FeaturedVideos.component";
import { Trailers } from "../components/Trailers/Trailers.component";
import { LatestStories } from "../components/LatestStories/LatestStories.component";

// pre-rendering the data
export const getStaticProps = async () => {
  return {
    props: {
      FeaturedStoriesData,
      FeaturedVideosData,
      HeroSectionData,
      LatestStoriesData,
      TrailersData,
      TrendingData,
    },
  };
};

export default function Home({
  FeaturedStoriesData,
  FeaturedVideosData,
  HeroSectionData,
  LatestStoriesData,
  TrailersData,
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
        <LatestStories
          LatestStoriesData={LatestStoriesData}
          TrendingData={TrendingData}
        />
      </main>
    </div>
  );
}
