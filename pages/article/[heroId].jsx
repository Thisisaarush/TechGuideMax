import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";

// server api
import { ServerApi } from "../../lib/ServerApi";

// components
import { ArticleComp } from "../../components/Article/ArticleComp.component";
import { Trending } from "../../components/Trending/Trending.component";
import { MoreStuff } from "../../components/MoreStuff/MoreStuff.component";
import { Loading } from "../../components/Loading/Loading.component";

// pre-rendering dynamic routes
export const getStaticProps = async ({ params }) => {
  const data = await ServerApi();
  const { HeroSectionData, LatestStoriesData, TrendingData } = data;

  return {
    props: {
      HeroSection: HeroSectionData.find((data) => {
        return data.id.toString() === params.heroId;
      }),
      TrendingData,
      LatestStoriesData,
    },
  };
};
export const getStaticPaths = async () => {
  const data = await ServerApi();
  const { HeroSectionData } = data;

  const paths = HeroSectionData.map((data) => ({
    params: { heroId: data.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

const Article = ({ HeroSection, TrendingData, LatestStoriesData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{`${HeroSection.title} - TechGuideMax`}</title>
      </Head>

      <main>
        <ArticlePageContainer>
          <ArticleComp ArticleData={HeroSection} />
          <Trending TrendingData={TrendingData} margin="trending-margin" />
        </ArticlePageContainer>
        <MoreStuff MoreStuffData={LatestStoriesData} />
      </main>
    </>
  );
};

export default Article;

// styled components
export const ArticlePageContainer = styled.div`
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
      margin-top: 2rem;
    }
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    width: 95%;
    align-items: center;
    flex-direction: column;
    .trending-margin {
      margin-top: 2rem;
    }
  }
`;
