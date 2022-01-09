import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

// data
import FeaturedStoriesData from "../../data/FeaturedStories.data.json";
import FeaturedVideosData from "../../data/FeaturedVideos.data.json";
import LatestStoriesData from "../../data/LatestStories.data.json";
import TrendingData from "../../data/Trending.data.json";

// components
import { Story } from "../../components/Story/Story.component";
import { FeaturedVideos } from "../../components/FeaturedVideos/FeaturedVideos.component";
import { LatestStories } from "../../components/LatestStories/LatestStories.component";

// pre-rendering data
export const getStaticProps = async () => {
  return {
    props: {
      FeaturedStoriesData,
      FeaturedVideosData,
      LatestStoriesData,
      TrendingData,
    },
  };
};

const ApplePage = ({
  FeaturedStoriesData,
  FeaturedVideosData,
  LatestStoriesData,
  TrendingData,
}) => {
  const filteredFeaturedStories = FeaturedStoriesData.filter((story) => {
    return story.category.toLowerCase() === "apple";
  });
  const filteredLatestStories = LatestStoriesData.filter((story) => {
    return story.category.toLowerCase() === "apple";
  });

  return (
    <>
      <Head>
        <title>Apple - TechGuideMax</title>
      </Head>

      <main>
        <ApplePageContainer>
          <div className="header">
            <Image
              src="/icons/svgs/apple.svg"
              width={80}
              height={80}
              alt="category apple header"
            />
            <h1 className="category-title">Apple</h1>
          </div>
          <StoriesContainer>
            {filteredFeaturedStories.map((story) => (
              <Story
                title={story.title}
                imageUrl={story.imageUrl}
                id={story.id}
                key={story.id}
              />
            ))}
          </StoriesContainer>
        </ApplePageContainer>
        <FeaturedVideos FeaturedVideosData={FeaturedVideosData} />
        <LatestStories
          LatestStoriesData={filteredLatestStories}
          TrendingData={TrendingData}
          title="Latest Apple Stories"
        />
      </main>
    </>
  );
};
export default ApplePage;

// styled components
const ApplePageContainer = styled.div`
  width: 80%;
  margin-inline: auto;
  margin-top: 5rem;
  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    .category-title {
      margin-left: 1rem;
    }
  }
`;
const StoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;