import { gql } from "graphql-request";
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
const articlesQuery = gql`
  ${ARTICLE_FRAGMENT}
  query GetArticles {
    articles(last: 99999999) {
      ...ArticleDetails
    }
  }
`;
const articleQuery = gql`
  ${ARTICLE_FRAGMENT}
  query GetArticle($slug: String!) {
    article(where: { slug: $slug }) {
      ...ArticleDetails
    }
  }
`;
const recentArticlesQuery = gql`
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
gql`
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
const categoriesQuery = gql`
  query GetGategories {
    categories {
      name
      slug
    }
  }
`;
gql`
  query GetAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      id
      name
      photo
    }
  }
`;
const articlesCategoryQuery = gql`
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
gql`
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
gql`
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
gql`
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
const allArticlesQuery = gql`
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
const infoArticlesQuery = gql`
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
const infoAllArticlesQuery = gql`
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
const funFactArticlesQuery = gql`
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
const funFactAllArticlesQuery = gql`
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
export {
  articleQuery as a,
  articlesCategoryQuery as b,
  categoriesQuery as c,
  articlesQuery as d,
  infoArticlesQuery as e,
  funFactAllArticlesQuery as f,
  funFactArticlesQuery as g,
  allArticlesQuery as h,
  infoAllArticlesQuery as i,
  recentArticlesQuery as r
};
