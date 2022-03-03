export const HeroSectionStrapiApi = async () => {
  const res = await fetch(
    "http://localhost:1337/api/hero-sections?populate=imageUrl"
  );
  const data = res.json();
  return data;
};

export const FeaturedStoriesStrapiApi = async () => {
  const res = await fetch(
    "http://localhost:1337/api/featured-stories?populate=imageUrl,imageUrl2,imageUrl3"
  );
  const data = res.json();
  return data;
};

export const FeaturedVideosStrapiApi = async () => {
  const res = await fetch(
    "http://localhost:1337/api/featured-videos?populate=imageUrl"
  );
  const data = res.json();
  return data;
};

export const TrailersStrapiApi = async () => {
  const res = await fetch(
    "http://localhost:1337/api/trailers?populate=imageUrl"
  );
  const data = res.json();
  return data;
};

export const HowToStrapiApi = async () => {
  const res = await fetch(
    "http://localhost:1337/api/how-tos?populate=imageUrl"
  );
  const data = res.json();
  return data;
};

export const LatestStoriesStrapiApi = async () => {
  const res = await fetch(
    "http://localhost:1337/api/latest-stories?populate=imageUrl,imageUrl2,imageUrl3"
  );
  const data = res.json();
  return data;
};

export const TrendingStrapiApi = async () => {
  const res = await fetch(
    "http://localhost:1337/api/trendings?populate=imageUrl,imageUrl2,imageUrl3"
  );
  const data = res.json();
  return data;
};
