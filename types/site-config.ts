import { graphql } from "gatsby"

interface SiteConfig {
  data: {
    company_name: string
    email_address: string
    phone_number: string
    facebook_username: string
    instagram_username: string
    twitter_username: string
    linkedin_username: string
    tiktok_username: string
    dribbble_username: string
    youtube_username: string
    vimeo_username: string
    discord_username: string
    reddit_username: string
    behance_username: string
    spotify_username: string
  }
}

export const query = graphql`
  fragment SiteConfig on PrismicSiteConfig {
    data {
      company_name
      email_address
      phone_number
      facebook_username
      instagram_username
      twitter_username
      linkedin_username
      tiktok_username
      dribbble_username
      youtube_username
      vimeo_username
      discord_username
      reddit_username
      behance_username
      spotify_username
    }
  }
`

export default SiteConfig
