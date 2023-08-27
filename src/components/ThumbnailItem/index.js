// Write your code here.
import './index.css'

const thumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onclickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnailListItem">
      <button
        type="button"
        className="thumbnailButton"
        onClick={onclickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default thumbnailItem
