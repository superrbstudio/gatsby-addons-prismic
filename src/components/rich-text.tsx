import React, { ForwardedRef, forwardRef, memo } from "react"
import { RichText as RichTextType } from "../../types"
import { PrismicRichText } from "@prismicio/react"
import { linkResolver } from "ProjectRoot/src/utils/linkResolver"
import { Link } from "gatsby"

interface Props {
  field: RichTextType["richText"]
  className?: string
}

const RichText = forwardRef(
  ({ field, className = "" }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={className} ref={ref}>
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
)

export default memo(RichText)
