import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = (props: any) => (
  <ContentLoader
    speed={1}
    width={450}
    height={85}
    viewBox="0 0 450 85"
    backgroundColor="#ebebeb"
    foregroundColor="#c7c7c7"
    {...props}
  >
    <rect x="5" y="3" rx="5" ry="5" width="440" height="78" />
  </ContentLoader>
)

export default LoadingBlock