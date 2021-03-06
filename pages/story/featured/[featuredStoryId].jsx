import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";

// strapi api
import {
  FeaturedStoriesStrapiApi,
  LatestStoriesStrapiApi,
  TrendingStrapiApi,
} from "../../../lib/strapiApi";

// components
import { ArticleComp } from "../../../components/Article/ArticleComp.component";
import { Trending } from "../../../components/Trending/Trending.component";
import { MoreStuff } from "../../../components/MoreStuff/MoreStuff.component";
import { Loading } from "../../../components/Loading/Loading.component";

// pre-rendering data
export const getStaticProps = async ({ params }) => {
  const FeaturedStories = await FeaturedStoriesStrapiApi();
  const LatestStories = await LatestStoriesStrapiApi();
  const Trending = await TrendingStrapiApi();

  const FeaturedStoriesData = FeaturedStories.data;
  const LatestStoriesData = LatestStories.data;
  const TrendingData = Trending.data;

  return {
    props: {
      FeaturedStory: FeaturedStoriesData.find((story) => {
        return story.id.toString() === params.featuredStoryId;
      }),
      LatestStoriesData,
      TrendingData,
    },
  };
};
export const getStaticPaths = async () => {
  const FeaturedStories = await FeaturedStoriesStrapiApi();
  const FeaturedStoriesData = FeaturedStories.data;

  const paths = FeaturedStoriesData.map((story) => ({
    params: { featuredStoryId: story.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

const FeaturedStoryPage = ({
  FeaturedStory,
  TrendingData,
  LatestStoriesData,
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{`${FeaturedStory.attributes.title} - TechGuideMax`}</title>
      </Head>

      <main>
        <FeaturedStoryPageContainer>
          <ArticleComp ArticleData={FeaturedStory} />
          <Trending TrendingData={TrendingData} margin="trending-margin" />
        </FeaturedStoryPageContainer>
        <MoreStuff MoreStuffData={LatestStoriesData} />
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

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 95%;
    flex-direction: column;
    .trending-margin {
      margin-top: 3rem;
    }
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    .trending-margin {
      margin-top: 3rem;
    }
  }
`;
