import React from "react";

// style
import {
  ArticleContainer,
  ArticleHeader,
  ArticleContent,
} from "./ArticleComp.style";

// component
import { ImageCover } from "../ImageCover/ImageCover.component";
import { AuthorWithDate } from "../AuthorWithDate/AuthorWithDate.component";

export const ArticleComp = ({ ArticleData }) => {
  return (
    <ArticleContainer>
      <ArticleHeader>
        <p className="article-category">{ArticleData.category}</p>
        <h1>{ArticleData.title}</h1>
        <AuthorWithDate author={ArticleData.author} date={ArticleData.date} />
      </ArticleHeader>
      <ArticleContent>
        <ImageCover
          imageClass="image-container"
          imageUrl={ArticleData.imageUrl}
        />
        <span className="source-container">
          Source <p className="source-name">{ArticleData.source}</p>
        </span>
        <p className="content">{ArticleData.content}</p>
        {ArticleData.imageUrl2 ? (
          <ImageCover
            imageClass="image-container"
            imageUrl={ArticleData.imageUrl2}
          />
        ) : null}
        {ArticleData.content2 ? (
          <p className="content-2">{ArticleData.content2}</p>
        ) : null}
        {ArticleData.imageUrl3 ? (
          <ImageCover
            imageClass="image-container"
            imageUrl={ArticleData.imageUrl3}
          />
        ) : null}
        {ArticleData.content3 ? (
          <p className="content-3">{ArticleData.content3}</p>
        ) : null}
      </ArticleContent>
    </ArticleContainer>
  );
};
