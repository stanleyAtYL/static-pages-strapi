import React, { FC } from 'react';
import { Layout } from '@/layouts';
import { Resources } from '@/view';


import {GetStaticProps} from 'next'


type Props = {
  articles: Record<string, unknown>,
  categories: Record<string, unknown>,
  homepage: Record<string, unknown>,
}


const ResourcesPage = ({ articles, categories, homepage }: Props): JSX.Element => {
  // console.log(articles, categories, homepage);
  return (
    <Layout scene={'mortgage'}>
      <Resources articles={articles} categories={categories} homepage={homepage}/>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])
  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

// Helper to make GET requests to Strapi
async function fetchAPI(path):Promise<Record<string, unknown>> {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}


export default ResourcesPage;
