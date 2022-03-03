import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";

// strapi api
import { LatestStoriesStrapiApi, TrendingStrapiApi } from "../../lib/strapiApi";

// components
import { ArticleComp } from "../../components/Article/ArticleComp.component";
import { Trending } from "../../components/Trending/Trending.component";
import { MoreStuff } from "../../components/MoreStuff/MoreStuff.component";
import { Loading } from "../../components/Loading/Loading.component";

// pre-rendering dynamic routes
export const getStaticProps = async ({ params }) => {
  const LatestStories = await LatestStoriesStrapiApi();
  const Trending = await TrendingStrapiApi();

  const LatestStoriesData = LatestStories.data;
  const TrendingData = Trending.data;

  return {
    props: {
      TrendingSection: TrendingData.find((data) => {
        return data.id.toString() === params.trendingId;
      }),
      TrendingData,
      LatestStoriesData,
    },
  };
};
export const getStaticPaths = async () => {
  const Trending = await TrendingStrapiApi();
  const TrendingData = Trending.data;

  const paths = TrendingData.map((data) => ({
    params: { trendingId: data.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

const TrendingPage = ({ TrendingSection, TrendingData, LatestStoriesData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{`${TrendingSection.attributes.title} - TechGuideMax`}</title>
      </Head>

      <main>
        <TrendingPageContainer>
          <ArticleComp ArticleData={TrendingSection} />
          <Trending TrendingData={TrendingData} margin="trending-margin" />
        </TrendingPageContainer>
        <MoreStuff MoreStuffData={LatestStoriesData} />
      </main>
    </>
  );
};

export default TrendingPage;

// styled components
export const TrendingPageContainer = styled.div`
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
