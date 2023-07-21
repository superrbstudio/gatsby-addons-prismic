import { graphql } from "gatsby"

export enum ImageLayout {
  none,
  cover,
  contain,
}

interface Image {
  alt: string
  fluid: {
    src: string
    base64?: string
    srcSet?: string
  }
}

export const query = graphql`
  fragment Image on PrismicImageField {
    alt
    gatsbyImageData(
      imgixParams: { q: 75, auto: "compress", fm: "webp" }
      breakpoints: [25, 750, 1080, 1366, 1920, 2560, 3840, 4096, 5120]
    )
  }
`

export default Image
