import React from 'react'

type ResponsiveImageProps = {
  /** base path without extension: e.g. /images/project-one/project-one */
  srcBase: string
  alt: string
  className?: string
  sizes?: string
}

export default function ResponsiveImage({ srcBase, alt, className = '', sizes = '(max-width: 768px) 100vw, 50vw' }: ResponsiveImageProps) {
  const widths = [400, 800, 1200]

  const makeSrcSet = (ext: string) => widths.map((w) => `${srcBase}-${w}.${ext} ${w}w`).join(', ')

  return (
    <picture className={className}>
      <source type="image/avif" srcSet={makeSrcSet('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={makeSrcSet('webp')} sizes={sizes} />
      {/* fallback to jpeg */}
      <img src={`${srcBase}-800.jpeg`} srcSet={makeSrcSet('jpeg')} sizes={sizes} alt={alt} loading="lazy" className="w-full h-auto block" />
    </picture>
  )
}
