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
  const url = process.env.NEXT_PUBLIC_STRAPI_URL;

  return (
    <ArticleContainer>
      <ArticleHeader>
        <p className="article-category">{ArticleData.attributes.category}</p>
        <h1>{ArticleData.attributes.title}</h1>
        <AuthorWithDate
          author={ArticleData.attributes.author}
          date={ArticleData.attributes.date}
        />
      </ArticleHeader>
      <ArticleContent>
        <ImageCover
          imageClass="image-container"
          imageUrl={`${url}${ArticleData.attributes.imageUrl.data.attributes.formats.medium.url}`}
        />
        <span className="source-container">
          Source <p className="source-name">{ArticleData.attributes.source}</p>
        </span>
        <p className="content">{ArticleData.attributes.content}</p>
        {ArticleData.attributes.imageUrl2 ? (
          <ImageCover
            imageClass="image-container"
            imageUrl={`${url}${ArticleData.attributes.imageUrl2.data.attributes.formats.medium.url}`}
          />
        ) : null}
        {ArticleData.attributes.content2 ? (
          <p className="content-2">{ArticleData.attributes.content2}</p>
        ) : null}
        {ArticleData.attributes.imageUrl3 ? (
          <ImageCover
            imageClass="image-container"
            imageUrl={`${url}${ArticleData.attributes.imageUrl3.data.attributes.formats.medium.url}`}
          />
        ) : null}
        {ArticleData.attributes.content3 ? (
          <p className="content-3">{ArticleData.attributes.content3}</p>
        ) : null}
      </ArticleContent>
    </ArticleContainer>
  );
};
