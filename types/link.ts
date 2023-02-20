import { graphql } from "gatsby"

interface Link {
  document?: string
  lang?: string
  link_type?: string
  type?: string
  uid?: string
  url?: string
}

export const query = graphql`
  fragment Link on PrismicLinkType {
    lang
    link_type
    type
    uid
    url
  }
`

export default Link
