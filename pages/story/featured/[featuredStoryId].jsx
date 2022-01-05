import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";

// data
import FeaturedStoriesData from "../../../data/FeaturedStories.data.json";
import TrendingData from "../../../data/Trending.data.json";

// components
import { ArticleComp } from "../../../components/Article/ArticleComp.component";
import { Trending } from "../../../components/Trending/Trending.component";
import { MoreStuff } from "../../../components/MoreStuff/MoreStuff.component";

// pre-rendering data
export const getStaticProps = async ({ params }) => {
  return {
    props: {
      FeaturedStory: FeaturedStoriesData.find((story) => {
        return story.id.toString() === params.featuredStoryId;
      }),
      TrendingData,
    },
  };
};
export const getStaticPaths = async () => {
  const paths = FeaturedStoriesData.map((story) => ({
    params: { featuredStoryId: story.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

const FeaturedStoryPage = ({ FeaturedStory, TrendingData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{`${FeaturedStory.title} - TechGuideMax`}</title>
      </Head>

      <main>
        <FeaturedStoryPageContainer>
          <ArticleComp ArticleData={FeaturedStory} />
          <Trending TrendingData={TrendingData} margin="trending-margin" />
        </FeaturedStoryPageContainer>
        <MoreStuff />
      </main>
    </>
  );
};

export default FeaturedStoryPage;

// styled components
const FeaturedStoryPageContainer = styled.div`
  width: 80%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-inline: auto;
  padding-bottom: 4rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: space-between;
  .trending-margin {
    margin-top: 12.9rem;
  }
`;
