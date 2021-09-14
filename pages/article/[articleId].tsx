import React, { FC } from 'react';
import { Article } from '@/view';
import { useRouter } from 'next/router';
import { Layout } from '@/layouts';

import {GetStaticProps, GetStaticPaths} from 'next'

type Props = {
  articles: Record<string, unknown>,
  categories: Record<string, unknown>,
  homepage: Record<string, unknown>,
}


const ArticlePage = ({ articles, categories, homepage }: Props): JSX.Element => {
  console.log(articles, categories, homepage);
  const router = useRouter();
  const { articleId } = router.query;
  // console.log(articleId);
  return (
    <Layout scene={'mortgage'} showLocale={false}>
      <Article articleId={articleId as string} articles={articles} categories={categories} homepage={homepage} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}


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



export default ArticlePage;
