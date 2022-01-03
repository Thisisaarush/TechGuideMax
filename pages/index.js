import Head from "next/head";

// components
import { HeroSection } from "../components/HeroSection/HeroSection.component";
import { FeaturedStories } from "../components/FeaturedStories/FeaturedStories.component";
import { FeaturedVideos } from "../components/FeaturedVideos/FeaturedVideos.component";
import { Trailers } from "../components/Trailers/Trailers.component";
import { LatestStories } from "../components/LatestStories/LatestStories.component";

export default function Home() {
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
        <HeroSection />
        <FeaturedStories />
        <FeaturedVideos />
        <Trailers />
        <LatestStories />
      </main>
    </div>
  );
}
