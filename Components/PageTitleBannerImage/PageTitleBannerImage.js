import React from 'react'

export default function PageTitleBannerImage({imgUrl, alt}) {
  return (
    <div>
    <img
        className={`imagehero`}
        src={imgUrl}
        alt={alt}
      />
    </div>
  )
}
