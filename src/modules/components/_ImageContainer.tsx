interface ImageProps {
  url: string
  caption: string
}

const ImageContainer = (props: ImageProps) => {
  const { url, caption } = props
  return (
    <div className="image-container">
      <img src={url} alt={caption} />
      <p>{caption}</p>
    </div>
  )
}

export default ImageContainer
