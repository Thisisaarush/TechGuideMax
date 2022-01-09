import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";

// data
import TrendingData from "../../data/Trending.data.json";

// components
import { ArticleComp } from "../../components/Article/ArticleComp.component";
import { Trending } from "../../components/Trending/Trending.component";
import { MoreStuff } from "../../components/MoreStuff/MoreStuff.component";
import { Loading } from "../../components/Loading/Loading.component";

// pre-rendering dynamic routes
export const getStaticProps = async ({ params }) => {
  return {
    props: {
      TrendingSection: TrendingData.find((data) => {
        return data.id.toString() === params.trendingId;
      }),
      TrendingData,
    },
  };
};
export const getStaticPaths = async () => {
  const paths = TrendingData.map((data) => ({
    params: { trendingId: data.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

const TrendingPage = ({ TrendingSection, TrendingData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{`${TrendingSection.title} - TechGuideMax`}</title>
      </Head>

      <main>
        <TrendingPageContainer>
          <ArticleComp ArticleData={TrendingSection} />
          <Trending TrendingData={TrendingData} margin="trending-margin" />
        </TrendingPageContainer>
        <MoreStuff />
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
`;
