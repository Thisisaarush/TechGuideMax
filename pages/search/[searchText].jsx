import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";

// data
import FeaturedStoriesData from "../../data/FeaturedStories.data.json";
import LatestStoriesData from "../../data/LatestStories.data.json";

// components
import { Story } from "../../components/Story/Story.component";
import { StoryHorizontal } from "../../components/StoryHorizontal/StoryHorizontal.component";
import { Loading } from "../../components/Loading/Loading.component";

// pre-rendering data
export const getStaticProps = async () => {
  return {
    props: {
      FeaturedStoriesData,
      LatestStoriesData,
    },
  };
};
export const getStaticPaths = async () => {
  const paths =
    FeaturedStoriesData.map((story) => ({
      params: { searchText: story.title },
    })) ||
    LatestStoriesData.map((story) => ({
      params: { searchText: story.title },
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
    return story.title.toLowerCase().includes(router.query.searchText);
  });
  const filteredLatestStories = LatestStoriesData.filter((story) => {
    return story.title.toLowerCase().includes(router.query.searchText);
  });

  if (router.isFallback) {
    return <Loading />;
  }

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
                    title={story.title}
                    imageUrl={story.imageUrl}
                    id={story.id}
                    key={story.id}
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
                    title={story.title}
                    imageUrl={story.imageUrl}
                    author={story.author}
                    date={story.date}
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
`;
const FeaturedStoriesContainer = styled.div``;
const LatestStoriesContainer = styled.div`
  margin-bottom: 5rem;
`;
const FeaturedStories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 5rem;
`;
const LatestStories = styled.div`
  width: 80%;
`;
