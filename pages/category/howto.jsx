import React from "react";
import Head from "next/head";
import styled from "styled-components";

// server api
import { ServerApi } from "../../lib/ServerApi";

// components
import { Story } from "../../components/Story/Story.component";
import { HowToVideos } from "../../components/HowToVideos/HowToVideos.component";
import { LatestStories } from "../../components/LatestStories/LatestStories.component";
import { ImageCover } from "../../components/ImageCover/ImageCover.component";

// pre-rendering data
export const getStaticProps = async () => {
  const data = await ServerApi();
  const {
    FeaturedStoriesData,
    HowToVideosData,
    LatestStoriesData,
    TrendingData,
  } = data;
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
                author={story.author}
                date={story.date}
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

  @media screen and (${(props) => props.theme.mobileSize}) {
    .header {
      height: 40vh;
      .category-title {
        font-size: 2rem;
      }
    }
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    .header {
      height: 50vh;
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

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 90%;
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`;
