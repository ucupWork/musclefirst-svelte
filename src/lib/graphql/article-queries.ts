import { gql } from 'graphql-request';

const ARTICLE_FRAGMENT = gql`
  fragment ArticleDetails on Article {
    id
    title
    slug
    date
    description {
      html
      markdown
      text
    }
    excerpt {
      html
      markdown
      text
    }
    hashtag
    imageTitle
    image {
      url
      imageArticle {
        title
      }
    }
    author {
      name
    }
    published
    setToMain
    summary {
      html
      markdown
      text
    }
    seoSection {
      cononicalUrl
      focusKeypharse
      metaRobots
      seoFollowLinks
      seoMetaDescription
      seoSlug
      seoTitle
    }
    seoSocialSection {
      facebookTitle
      facebookDescription
      twitterDescription
      twitterTitle
      twitterImage {
        url
      }
      facebookImage {
        url
      }
    }
  }
`;

export const articlesQuery = gql`
  ${ARTICLE_FRAGMENT}
  query GetArticles {
    articles(last: 99999999) {
      ...ArticleDetails
    }
  }
`;

export const articleQuery = gql`
  ${ARTICLE_FRAGMENT}
  query GetArticle($slug: String!) {
    article(where: { slug: $slug }) {
      ...ArticleDetails
    }
  }
`;

export const recentArticlesQuery = gql`
  query GetRecentArticles {
    articles(last: 3) {
        id
        title
        slug
        date
        setToMain
        imageTitle
        image {
          url
        }
        createdAt
    }
  }
`;

// -----------------------------------

export const snippetsQuery = gql`
  query GetSnippets($slug: String!) {
    articles(where: { _search: $slug }, first: 10, stage: PUBLISHED) {
      title
      slug
      date
      excerpt {
        html
        markdown
        text
      }
      imageTitle
      image {
        url
      }
      createdAt
    }
  }
`;

export const categoriesQuery = gql`
  query GetGategories {
    categories {
      name
      slug
    }
  }
`;

export const authorQuery = gql`
  query GetAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      id
      name
      photo
    }
  }
`;

export const articlesCategoryQuery = gql`
  query GetArticlesCategoryEdges($slug: String!) {
    articles(where: {categories_some: {slug: $slug}}) {
      author {
        id
        name
      }
      createdAt
      id
      imageTitle
      setToMain
      title
      image {
        url
      }
      excerpt {
        html
        markdown
        text
      }
      categories {
        name
        slug
      }
      slug
    }
  }
`;

export const articlesCategoryEdgesQuery = gql`
  query GetArticlesCategoryEdges($slug: String!) {
    articlesConnection(where: {categories_some: {slug: $slug}}) {
      edges {
        cursor
        node {
          author {
            id
            name
          }
          createdAt
          id
          imageTitle
          setToMain
          title
          image {
            url
          }
          excerpt {
            html
            markdown
            text
          }
          categories {
            name
            slug
          }
          slug
        }
      }
    }
  }
`;

export const articlesEdgesQuery = gql`
  query GetArticlesEdges {
    articlesConnection {
      edges {
        node {
          id
          title
          slug
          date
          hashtag
          excerpt {
            html
            markdown
            text
          }
          summary {
            html
            markdown
            text
          }
          description {
            html
            markdown
            text
          }
          author {
            name
          }
          categories {
            name
            slug
          }
          imageTitle
          image {
            url
          }
          published
          setToMain
          featuredArticle
          seoSection {
            seoTitle
            seoMetaDescription
            seoSlug
            cononicalUrl
            focusKeypharse
            metaRobots
          }
          seoSocialSection {
            facebookTitle
            facebookImage {
              url
            }
            facebookDescription
            twitterTitle
            twitterImage {
              url
            }
            twitterDescription
          }
          createdAt
          createdBy {
            name
          }
        }
      }
    }
  }
`;

export const categoriesArticlesQuery = gql`
  query GetCategoriesArticles($slug: String!, $categories: [String!]) {
    articles(
      where: {
        slug_not: $slug
        AND: { categories_some: { slug_in: $categories } }
      }
      last: 5
    ) {
      title
      slug
      date
      excerpt {
        html
        markdown
        text
      }
      imageTitle
      image {
        url
      }
      createdAt
    }
  }
`;

export const allArticlesQuery = gql`
  query GetInfoArticles {
    articles(last: 99999999, orderBy: createdAt_DESC) {
      id
      title
      slug
      date
      setToMain
      imageTitle
      image {
        url
      }
      createdAt
    }
  }
`;

export const infoArticlesQuery = gql`
  query GetInfoArticles {
    articles(where: {categories_some: {slug: "info"}}, last: 3) {
      id
      title
      slug
      date
      setToMain
      imageTitle
      image {
        url
      }
      createdAt
    }
  }
`;

export const infoAllArticlesQuery = gql`
  query GetInfoAllArticles {
    articles(where: {categories_some: {slug: "info"}}, last: 99999999, orderBy: createdAt_DESC) {
      id
      title
      slug
      date
      setToMain
      imageTitle
      image {
        url
      }
      createdAt
    }
  }
`;

export const funFactArticlesQuery = gql`
  query GetFunFactArticles {
    articles(where: {categories_some: {slug: "fact"}}, last: 3) {
      id
      title
      slug
      date
      setToMain
      imageTitle
      image {
        url
      }
      createdAt
    }
  }
`;

export const funFactAllArticlesQuery = gql`
  query GetFunFactAllArticles {
    articles(where: {categories_some: {slug: "fact"}}, last: 99999999, orderBy: createdAt_DESC) {
      id
      title
      slug
      date
      setToMain
      imageTitle
      image {
        url
      }
      createdAt
    }
  }
`;