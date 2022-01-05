import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";

// data
import HeroSectionData from "../../data/HeroSection.data.json";
import TrendingData from "../../data/Trending.data.json";

// components
import { ArticleComp } from "../../components/Article/ArticleComp.component";
import { Trending } from "../../components/Trending/Trending.component";
import { MoreStuff } from "../../components/MoreStuff/MoreStuff.component";

// pre-rendering dynamic routes
export const getStaticProps = async ({ params }) => {
  return {
    props: {
      HeroSection: HeroSectionData.find((data) => {
        return data.id.toString() === params.heroId;
      }),
      TrendingData,
    },
  };
};
export const getStaticPaths = async () => {
  const paths = HeroSectionData.map((data) => ({
    params: { heroId: data.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

const Article = ({ HeroSection, TrendingData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
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
        <MoreStuff />
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
`;
