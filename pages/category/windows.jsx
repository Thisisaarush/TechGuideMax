import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

// server api
import { ServerApi } from "../../lib/ServerApi";

// components
import { Story } from "../../components/Story/Story.component";
import { FeaturedVideos } from "../../components/FeaturedVideos/FeaturedVideos.component";
import { LatestStories } from "../../components/LatestStories/LatestStories.component";

// pre-rendering data
export const getStaticProps = async () => {
  const data = await ServerApi();
  const {
    FeaturedStoriesData,
    FeaturedVideosData,
    LatestStoriesData,
    TrendingData,
  } = data;
  return {
    props: {
      FeaturedStoriesData,
      FeaturedVideosData,
      LatestStoriesData,
      TrendingData,
    },
  };
};

const WindowsPage = ({
  FeaturedStoriesData,
  FeaturedVideosData,
  LatestStoriesData,
  TrendingData,
}) => {
  const filteredFeaturedStories = FeaturedStoriesData.filter((story) => {
    return story.category.toLowerCase() === "windows";
  });
  const filteredLatestStories = LatestStoriesData.filter((story) => {
    return story.category.toLowerCase() === "windows";
  });

  return (
    <>
      <Head>
        <title>Windows - TechGuideMax</title>
      </Head>

      <main>
        <WindowsPageContainer>
          <div className="header">
            <Image
              src="/icons/svgs/windows.svg"
              width={80}
              height={80}
              alt="category windows header"
            />
            <h1 className="category-title">Windows</h1>
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
        </WindowsPageContainer>
        <FeaturedVideos FeaturedVideosData={FeaturedVideosData} />
        <LatestStories
          LatestStoriesData={filteredLatestStories}
          TrendingData={TrendingData}
          title="Latest Stories for Windows"
        />
      </main>
    </>
  );
};
export default WindowsPage;

// styled components
const WindowsPageContainer = styled.div`
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

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 90%;
  }
`;
const StoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  @media screen and (${(props) => props.theme.tabSize}) {
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`;
