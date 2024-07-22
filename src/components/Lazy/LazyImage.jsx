import { LazyLoadImage } from 'react-lazy-load-image-component' 
import logo from '../../assets/logo.webp'

export const Logo = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={logo}
        alt="Logo"
        height={height}
        width={width}
      />
    </div>
  )
}