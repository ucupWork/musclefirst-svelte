import{d as e}from"./graphql-client-47f6858c.js";const t=e.gql`
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
`,i=e.gql`
  ${t}
  query GetArticles {
    articles(last: 99999999) {
      ...ArticleDetails
    }
  }
`,l=e.gql`
  ${t}
  query GetArticle($slug: String!) {
    article(where: { slug: $slug }) {
      ...ArticleDetails
    }
  }
`,a=e.gql`
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
`;e.gql`
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
`;const s=e.gql`
  query GetGategories {
    categories {
      name
      slug
    }
  }
`;e.gql`
  query GetAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      id
      name
      photo
    }
  }
`;const o=e.gql`
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
`;e.gql`
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
`;e.gql`
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
`;e.gql`
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
`;const c=e.gql`
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
`,g=e.gql`
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
`,u=e.gql`
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
`,n=e.gql`
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
`,m=e.gql`
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
`;export{l as a,o as b,s as c,i as d,g as e,m as f,n as g,c as h,u as i,a as r};
