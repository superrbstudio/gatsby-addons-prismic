import React, { memo } from "react"
import { RichText as RichTextType } from "../../types"
import { PrismicRichText } from "@prismicio/react"
import { linkResolver } from "ProjectRoot/src/utils/linkResolver"
import { Link } from "gatsby"

interface Props {
  field: RichTextType["richText"]
  className?: string
}

const RichText = ({ field, className = "" }: Props) => {
  return (
    <div className={className}>
      <PrismicRichText
        field={field}
        linkResolver={linkResolver}
        internalLinkComponent={({ href, ...props }) => (
          <Link to={href} {...props} />
        )}
      />
    </div>
  )
}

export default memo(RichText)
