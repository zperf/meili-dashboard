import * as React from 'react'
const SvgKey = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.426 6.364a2.318 2.318 0 0 1 2.316-2.316 2.318 2.318 0 0 1 0 4.633 2.318 2.318 0 0 1-2.316-2.317Zm3.088 0a.772.772 0 1 0-1.544 0 .772.772 0 0 0 1.544 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.564 6.364c0 .147.005.293.016.437L1.52 13.86a2.317 2.317 0 0 0-.678 1.638v2.448a2.317 2.317 0 0 0 2.316 2.317h3.089a.772.772 0 0 0 .772-.772v-2.317h2.317a.772.772 0 0 0 .772-.772v-2.316h2.316a.772.772 0 0 0 .546-.226l1.334-1.334a6.18 6.18 0 0 0 6.614-6.162A6.18 6.18 0 0 0 14.742.187a6.18 6.18 0 0 0-6.178 6.177Zm4.908 4.811-1.367 1.367H9.337a.772.772 0 0 0-.773.772v2.316H6.248a.772.772 0 0 0-.772.772v2.317H3.159a.772.772 0 0 1-.772-.772v-2.45c0-.204.082-.4.226-.545l7.318-7.318c.17-.17.251-.41.219-.649a4.635 4.635 0 0 1 4.592-5.254 4.635 4.635 0 0 1 4.633 4.633 4.635 4.635 0 0 1-5.255 4.592.772.772 0 0 0-.648.22Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgKey
