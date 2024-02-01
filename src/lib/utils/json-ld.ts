import type {
  Thing,
  WithContext,
  Organization,
  WebSite,
  Blog,
  TechArticle,
  JobPosting,
  Recipe
} from 'schema-dts'

import data from './site-data'

// Job Schema Data
export let jobTitleData: string
export let jobDecriptionData: string
export let jobSallaryData: string

// Job Schema Data
export let recipeTitleData: string
export let recipeDecriptionData: string
export let recipeSallaryData: string

export type Schema = Thing | WithContext<Thing>

export function serializeSchema(thing: Schema): string {
  return `<script type="application/ld+json">${JSON.stringify(
    thing,
    null,
    2
  )}</script>`
}

export const websiteSchema: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: data.siteName,
  url: data.siteUrl,
  description: data.description,
  author: data.author,
  sameAs: [data.siteUrl, data.instagram]
}
console.log(websiteSchema)

export const blogSchema: WithContext<Blog> = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  url: `${data.siteUrl}/blog`,
  name: `Blog | ${data.siteName}`,
  description: data.description
}

export const articleSchema: WithContext<TechArticle> = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  url: data.siteUrl,
  name: data.siteName,
  description: data.description
}

export const jobPostingSchema: WithContext<JobPosting> = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  url: data.siteUrl,
  title: jobTitleData,
  description: jobDecriptionData,
  identifier: {
    '@type': 'PropertyValue',
    name: data.siteName,
    value: '1234567'
  },
  datePosted: '2017-01-18',
  validThrough: '2017-03-18T00:00',
  employmentType: 'CONTRACTOR',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Musclefirst',
    sameAs: `${data.siteUrl}`,
    logo: `${data.siteUrl}/assets/site/logo-32x32.png`
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta, Indonesia',
      postalCode: '11720',
      streetAddress: 'Ruko Mutiara Taman Palem, Cengkareng, Jakarta Barat 11730'
    }
  },
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'IDR',
    value: {
      '@type': 'QuantitativeValue',
      value: jobSallaryData,
      unitText: 'Month'
    }
  }
}

export const recipeSchema: WithContext<Recipe> = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  url: data.siteUrl,
  name: 'Non-alcoholic Pina Colada',
  image: [
    'https://example.com/photos/1x1/photo.jpg',
    'https://example.com/photos/4x3/photo.jpg',
    'https://example.com/photos/16x9/photo.jpg'
  ],
  author: {
    '@type': 'Person',
    name: 'Mary Stone'
  },
  datePublished: '2018-03-10',
  description: "This non-alcoholic pina colada is everyone's favorite!",
  recipeCuisine: 'American',
  prepTime: 'PT1M',
  cookTime: 'PT2M',
  totalTime: 'PT3M',
  keywords: 'non-alcoholic',
  recipeYield: '1 serving',
  recipeCategory: 'Drink',
  nutrition: {
    '@type': 'NutritionInformation',
    calories: '120 calories'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '18'
  },
  recipeIngredient: [
    '2 cups of pineapple juice',
    '5/8 cup cream of coconut',
    'ice'
  ]
}

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': data.siteUrl,
  url: data.siteUrl,
  name: data.siteName,
  legalName: data.siteName,
  alternateName: data.siteName,
  description: data.description,
  contactPoint: {
    '@type': 'ContactPoint',
    email: data.email,
    contactType: 'customer service'
  },
  sameAs: [data.siteUrl, data.instagram],
  logo: {
    '@type': 'ImageObject',
    name: 'Musclefirst Logo',
    url: `${data.siteUrl}/favicon.png`,
    width: '64',
    height: '64'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta, Indonesia',
    postalCode: '11720',
    streetAddress: 'Ruko Mutiara Taman Palem, Cengkareng, Jakarta Barat 11730'
  }
}
