import { graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

export enum ImageLayout {
  none,
  cover,
  contain,
}

interface Image {
  alt: string
  gatsbyImageData: IGatsbyImageData
  url: string
}

export const query = graphql`
  fragment Image on PrismicImageField {
    alt
    gatsbyImageData(
      imgixParams: { q: 75, auto: "compress", fm: "webp" }
      breakpoints: [25, 750, 1080, 1366, 1920, 2560, 3840, 4096, 5120]
    )
    url
  }
`

export default Image
