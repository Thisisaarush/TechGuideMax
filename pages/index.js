import Head from "next/head";

// server api
import { ServerApi } from "../lib/ServerApi";

// components
import { HeroSection } from "../components/HeroSection/HeroSection.component";
import { FeaturedStories } from "../components/FeaturedStories/FeaturedStories.component";
import { FeaturedVideos } from "../components/FeaturedVideos/FeaturedVideos.component";
import { Trailers } from "../components/Trailers/Trailers.component";
import { LatestStories } from "../components/LatestStories/LatestStories.component";
import { HowToVideos } from "../components/HowToVideos/HowToVideos.component";

// pre-rendering the data
export const getStaticProps = async () => {
  const data = await ServerApi();
  const {
    HeroSectionData,
    FeaturedStoriesData,
    FeaturedVideosData,
    TrailersData,
    HowToVideosData,
    LatestStoriesData,
    TrendingData,
  } = data;

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
