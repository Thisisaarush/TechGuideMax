import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";

// strapi api
import {
  FeaturedStoriesStrapiApi,
  LatestStoriesStrapiApi,
} from "../../lib/strapiApi";

// components
import { Story } from "../../components/Story/Story.component";
import { StoryHorizontal } from "../../components/StoryHorizontal/StoryHorizontal.component";
import { Loading } from "../../components/Loading/Loading.component";

// pre-rendering data
export const getStaticProps = async () => {
  const FeaturedStories = await FeaturedStoriesStrapiApi();
  const LatestStories = await LatestStoriesStrapiApi();

  const FeaturedStoriesData = FeaturedStories.data;
  const LatestStoriesData = LatestStories.data;

  return {
    props: {
      FeaturedStoriesData,
      LatestStoriesData,
    },
  };
};
export const getStaticPaths = async () => {
  const FeaturedStories = await FeaturedStoriesStrapiApi();
  const LatestStories = await LatestStoriesStrapiApi();

  const FeaturedStoriesData = FeaturedStories.data;
  const LatestStoriesData = LatestStories.data;

  const paths =
    FeaturedStoriesData.map((story) => ({
      params: { searchText: story.attributes.title },
    })) ||
    LatestStoriesData.map((story) => ({
      params: { searchText: story.attributes.title },
    }));

  return {
    paths,
    fallback: true,
  };
};

const SearchPage = ({ FeaturedStoriesData, LatestStoriesData }) => {
  const router = useRouter();
  // filtering stories for search queries
  const filteredFeaturedStories = FeaturedStoriesData.filter((story) => {
    return story.attributes.title
      .toLowerCase()
      .includes(router.query.searchText);
  });
  const filteredLatestStories = LatestStoriesData.filter((story) => {
    return story.attributes.title
      .toLowerCase()
      .includes(router.query.searchText);
  });

  if (router.isFallback) {
    return <Loading />;
  }

  const url = process.env.NEXT_PUBLIC_STRAPI_URL;

  return (
    <>
      <Head>
        <title>Search Results - TechGuideMax</title>
      </Head>

      <main></main>
      <SearchPageContainer>
        <h1>{`Search Results for - "${router.query.searchText}"`}</h1>
        <FeaturedStoriesContainer>
          {filteredFeaturedStories.length ? (
            <h2>{`Top Stories for "${router.query.searchText}"`}</h2>
          ) : null}
          <FeaturedStories>
            {filteredFeaturedStories.length
              ? filteredFeaturedStories.map((story) => (
                  <Story
                    title={story.attributes.title}
                    imageUrl={`${url}${story.attributes.imageUrl.data.attributes.formats.small.url}`}
                    id={story.id}
                    key={story.id}
                    author={story.attributes.author}
                    date={story.attributes.date}
                  />
                ))
              : null}
          </FeaturedStories>
        </FeaturedStoriesContainer>
        <LatestStoriesContainer>
          {filteredLatestStories.length ? (
            <h2>{`Latest Articles for "${router.query.searchText}"`}</h2>
          ) : null}
          <LatestStories>
            {filteredLatestStories.length
              ? filteredLatestStories.map((story) => (
                  <StoryHorizontal
                    title={story.attributes.title}
                    imageUrl={`${url}${story.attributes.imageUrl.data.attributes.formats.small.url}`}
                    author={story.attributes.author}
                    date={story.attributes.date}
                    id={story.id}
                    key={story.id}
                  />
                ))
              : null}
          </LatestStories>
        </LatestStoriesContainer>
      </SearchPageContainer>
    </>
  );
};

export default SearchPage;

// styled components
const SearchPageContainer = styled.div`
  min-height: 100vh;
  width: 80%;
  margin-inline: auto;
  margin-top: 5rem;
  h1 {
    text-align: center;
    margin-bottom: 5rem;
  }
  h2 {
    font-weight: ${(props) => props.theme.fontWeightMedium};
    margin-bottom: 2rem;
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 90%;
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    width: 90%;
  }
`;
const FeaturedStoriesContainer = styled.div`
  @media screen and (${(props) => props.theme.tabSize}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LatestStoriesContainer = styled.div`
  margin-bottom: 5rem;
`;
const FeaturedStories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 5rem;

  @media screen and (${(props) => props.theme.tabSize}) {
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`;
const LatestStories = styled.div`
  width: 80%;

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 95%;
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    width: 95%;
  }
`;
