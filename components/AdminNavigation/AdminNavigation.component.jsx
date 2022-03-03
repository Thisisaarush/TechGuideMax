import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const AdminNavigation = () => {
  return (
    <AdminNavigationContainer>
      <Link href="/admin/hero">
        <a>
          <h4>Hero Section</h4>
        </a>
      </Link>
      <Link href="/admin/featuredStories">
        <a>
          <h4>Featured Stories</h4>
        </a>
      </Link>
      <Link href="/admin/featuredVideos">
        <a>
          <h4>Featured Videos</h4>
        </a>
      </Link>
      <Link href="/admin/trailers">
        <a>
          <h4>Trailers & Clips</h4>
        </a>
      </Link>
      <Link href="/admin/howto">
        <a>
          <h4>How To Videos</h4>
        </a>
      </Link>
      <Link href="/admin/latestStories">
        <a>
          <h4>Latest Stories</h4>
        </a>
      </Link>
      <Link href="/admin/trending">
        <a>
          <h4>Trending</h4>
        </a>
      </Link>
    </AdminNavigationContainer>
  );
};

// styled components
const AdminNavigationContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem 0;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  h4 {
    font-weight: ${(props) => props.theme.fontWeightRegular};
    background-color: ${(props) => props.theme.secondaryColor};
    color: black;
    padding: 0.5rem 1.5rem;
  }
`;
