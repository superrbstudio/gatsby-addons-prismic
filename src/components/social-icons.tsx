import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SiteConfig } from '../../types'

const SocialIcons = () => {
  const data = useStaticQuery(graphql`
    query SiteConfigQuery {
      siteConfig: prismicSiteConfig {
        ...SiteConfig
      }
    }
  `)

  const siteConfig: SiteConfig = data?.siteConfig
  if (!siteConfig) {
    return null
  }

  return (
    <nav class="social-icons">
      <ul class="social-icons__list">
        {siteConfig.data.facebook_username && (
          <li class="social-icons__list-facebook"><a href={siteConfig.data.facebook_username} target="_blank"><span>Facebook</span></a></li>
        )}
        {siteConfig.data.instagram_username && (
          <li class="social-icons__list-instagram"><a href={siteConfig.data.instagram_username} target="_blank"><span>Instagram</span></a></li>
        )}
        {siteConfig.data.twitter_username && (
          <li class="social-icons__list-twitter"><a href={siteConfig.data.twitter_username} target="_blank"><span>Twitter</span></a></li>
        )}
        {siteConfig.data.linkedin_username && (
          <li class="social-icons__list-linkedin"><a href={siteConfig.data.linkedin_username} target="_blank"><span>LinkedIn</span></a></li>
        )}
        {siteConfig.data.tiktok_username && (
          <li class="social-icons__list-tiktok"><a href={siteConfig.data.tiktok_username} target="_blank"><span>TikTok</span></a></li>
        )}
        {siteConfig.data.dribbble_username && (
          <li class="social-icons__list-dribbble"><a href={siteConfig.data.dribbble_username} target="_blank"><span>Dribbble</span></a></li>
        )}
        {siteConfig.data.youtube_username && (
          <li class="social-icons__list-youtube"><a href={siteConfig.data.youtube_username} target="_blank"><span>YouTube</span></a></li>
        )}
        {siteConfig.data.vimeo_username && (
          <li class="social-icons__list-vimeo"><a href={siteConfig.data.vimeo_username} target="_blank"><span>Vimeo</span></a></li>
        )}
        {siteConfig.data.discord_username && (
          <li class="social-icons__list-discord"><a href={siteConfig.data.discord_username} target="_blank"><span>Discord</span></a></li>
        )}
        {siteConfig.data.reddit_username && (
          <li class="social-icons__list-reddit"><a href={siteConfig.data.reddit_username} target="_blank"><span>Reddit</span></a></li>
        )}
        {siteConfig.data.behance_username && (
          <li class="social-icons__list-behance"><a href={siteConfig.data.behance_username} target="_blank"><span>Behance</span></a></li>
        )}
      </ul>
    </nav>
  )
}

export default SocialIcons