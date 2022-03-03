import React from "react";
import Head from "next/head";
import styled from "styled-components";

// strapi api
import {
  FeaturedStoriesStrapiApi,
  LatestStoriesStrapiApi,
  TrendingStrapiApi,
  TrailersStrapiApi,
} from "../../lib/strapiApi";

// components
import { Story } from "../../components/Story/Story.component";
import { Trailers } from "../../components/Trailers/Trailers.component";
import { LatestStories } from "../../components/LatestStories/LatestStories.component";
import { ImageCover } from "../../components/ImageCover/ImageCover.component";

// pre-rendering data
export const getStaticProps = async () => {
  const FeaturedStories = await FeaturedStoriesStrapiApi();
  const LatestStories = await LatestStoriesStrapiApi();
  const Trending = await TrendingStrapiApi();
  const Trailers = await TrailersStrapiApi();

  const FeaturedStoriesData = FeaturedStories.data;
  const LatestStoriesData = LatestStories.data;
  const TrendingData = Trending.data;
  const TrailersData = Trailers.data;

  return {
    props: {
      FeaturedStoriesData,
      TrailersData,
      LatestStoriesData,
      TrendingData,
    },
  };
};

const EntertainmentPage = ({
  FeaturedStoriesData,
  TrailersData,
  LatestStoriesData,
  TrendingData,
}) => {
  const filteredFeaturedStories = FeaturedStoriesData.filter((story) => {
    return story.attributes.category.toLowerCase() === "entertainment";
  });
  const filteredLatestStories = LatestStoriesData.filter((story) => {
    return story.attributes.category.toLowerCase() === "entertainment";
  });

  const url = "http://localhost:1337";

  return (
    <>
      <Head>
        <title>Entertainment - TechGuideMax</title>
      </Head>

      <main>
        <EntertainmentPageContainer>
          <div className="header">
            <ImageCover
              imageClass="image-container"
              imageUrl="/images/entertainment.jpg"
            />
            <h1 className="category-title">Entertainment</h1>
          </div>
          <StoriesContainer>
            {filteredFeaturedStories.map((story) => (
              <Story
                title={story.attributes.title}
                imageUrl={`${url}${story.attributes.imageUrl.data.attributes.formats.small.url}`}
                id={story.id}
                key={story.id}
                author={story.attributes.author}
                date={story.attributes.date}
              />
            ))}
          </StoriesContainer>
        </EntertainmentPageContainer>
        <Trailers TrailersData={TrailersData} />
        <LatestStories
          LatestStoriesData={filteredLatestStories}
          TrendingData={TrendingData}
          title="Entertainment Stories"
        />
      </main>
    </>
  );
};
export default EntertainmentPage;

// styled components
const EntertainmentPageContainer = styled.div`
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
