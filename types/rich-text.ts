import { graphql } from "gatsby"
import { PrismicRichTextProps } from "@prismicio/react"

interface RichText {
  html: string
  richText: PrismicRichTextProps["field"]
  text: string
}

export const query = graphql`
  fragment RichText on PrismicRichTextField {
    html
    richText
    text
  }
`

export default RichText
