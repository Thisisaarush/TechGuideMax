import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";

// server api
import { ServerApi } from "../../../lib/ServerApi";

// components
import { ArticleComp } from "../../../components/Article/ArticleComp.component";
import { Trending } from "../../../components/Trending/Trending.component";
import { MoreStuff } from "../../../components/MoreStuff/MoreStuff.component";
import { Loading } from "../../../components/Loading/Loading.component";

// pre-rendering data
export const getStaticProps = async ({ params }) => {
  const data = await ServerApi();
  const { LatestStoriesData, TrendingData } = data;
  return {
    props: {
      LatestStory: LatestStoriesData.find((story) => {
        return story.id.toString() === params.latestStoryId;
      }),
      TrendingData,
      LatestStoriesData,
    },
  };
};
export const getStaticPaths = async () => {
  const data = await ServerApi();
  const { LatestStoriesData } = data;

  const paths = LatestStoriesData.map((story) => ({
    params: { latestStoryId: story.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

const LatestStoryPage = ({ LatestStory, TrendingData, LatestStoriesData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{`${LatestStory.title} - TechGuideMax`}</title>
      </Head>

      <main>
        <LatestStoryPageContainer>
          <ArticleComp ArticleData={LatestStory} />
          <Trending TrendingData={TrendingData} margin="trending-margin" />
        </LatestStoryPageContainer>
        <MoreStuff MoreStuffData={LatestStoriesData} />
      </main>
    </>
  );
};

export default LatestStoryPage;

// styled components
const LatestStoryPageContainer = styled.div`
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
