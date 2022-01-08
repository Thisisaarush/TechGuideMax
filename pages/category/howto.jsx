import React from "react";
import Head from "next/head";
import styled from "styled-components";

// data
import FeaturedStoriesData from "../../data/FeaturedStories.data.json";
import HowToVideosData from "../../data/HowTo.data.json";
import LatestStoriesData from "../../data/LatestStories.data.json";
import TrendingData from "../../data/Trending.data.json";

// components
import { Story } from "../../components/Story/Story.component";
import { HowToVideos } from "../../components/HowToVideos/HowToVideos.component";
import { LatestStories } from "../../components/LatestStories/LatestStories.component";
import { ImageCover } from "../../components/ImageCover/ImageCover.component";

// pre-rendering data
export const getStaticProps = async () => {
  return {
    props: {
      FeaturedStoriesData,
      HowToVideosData,
      LatestStoriesData,
      TrendingData,
    },
  };
};

const HowtoPage = ({
  FeaturedStoriesData,
  HowToVideosData,
  LatestStoriesData,
  TrendingData,
}) => {
  const filteredFeaturedStories = FeaturedStoriesData.filter((story) => {
    return story.category.toLowerCase() === "howto";
  });
  const filteredLatestStories = LatestStoriesData.filter((story) => {
    return story.category.toLowerCase() === "howto";
  });

  return (
    <>
      <Head>
        <title>How To - TechGuideMax</title>
      </Head>

      <main>
        <HowtoPageContainer>
          <div className="header">
            <ImageCover
              imageClass="image-container"
              imageUrl="/images/howto.jpg"
            />
            <h1 className="category-title">How To</h1>
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
        </HowtoPageContainer>
        <HowToVideos HowToVideosData={HowToVideosData} />
        <LatestStories
          LatestStoriesData={filteredLatestStories}
          TrendingData={TrendingData}
          title="How to Stories"
        />
      </main>
    </>
  );
};
export default HowtoPage;

// styled components
const HowtoPageContainer = styled.div`
  width: 100%;
  margin-inline: auto;
  .header {
    height: 90vh;
    margin-bottom: 5rem;
    position: relative;
    .category-title {
      letter-spacing: 4px;
      font-size: 3rem;
      margin-left: 1rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .image-container {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
`;
const StoriesContainer = styled.div`
  width: 80%;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;
