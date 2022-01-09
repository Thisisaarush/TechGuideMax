import React from "react";
import Image from "next/image";
import styled from "styled-components";

export const Loading = () => {
  return (
    <LoadingContainer>
      <Image
        src="/icons/svgs/loading.svg"
        width={100}
        height={100}
        alt="loading"
      />
    </LoadingContainer>
  );
};

// styled components
const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
