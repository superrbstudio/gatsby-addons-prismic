import { graphql } from "gatsby"

interface Link {
  document?: string
  lang?: string
  link_type?: string
  target?: string
  type?: string
  uid?: string
  url?: string
}

export const query = graphql`
  fragment Link on PrismicLinkField {
    lang
    link_type
    target
    type
    uid
    url
  }
`

export default Link
