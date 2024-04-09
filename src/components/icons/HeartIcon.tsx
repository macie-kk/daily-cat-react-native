import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { colors } from '../../theme'

/* SVGR has dropped some elements not supported by react-native-svg: title */
const HeartIcon = (props: SvgProps) => (
  <Svg width="59" height="52" viewBox="0 0 59 52" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.1736 49.033C20.7434 45.1812 14.3132 39.9198 9.88725 34.8551C5.94563 30.3641 3.42366 25.6927 2.37144 20.9067C2.00401 19.2676 1.88709 16.0223 2.12092 14.5144C3.07292 8.72848 7.46549 3.9916 13.3111 2.43449C15.0314 1.97556 18.5889 1.94278 20.1755 2.36893C21.5284 2.72952 23.6996 3.71296 24.969 4.54888C26.1715 5.31924 27.8083 6.81078 28.6266 7.87617C29.2446 8.67931 29.2446 8.67931 29.6455 8.15481C30.4638 7.04025 32.3511 5.35202 33.7708 4.41776C38.6978 1.22159 44.6103 1.18881 49.5874 4.35219C54.5478 7.49919 57.17 13.1048 56.4184 18.9562C55.4664 26.4959 50.8567 33.7405 42.3889 41.0343C37.9128 44.8861 30.3803 50 29.2112 50C28.9607 50 28.0588 49.5575 27.1736 49.033Z"
      stroke={props.stroke || colors.red}
      strokeWidth="4"
      fill={props.fill || colors.red}
    />
  </Svg>
)
export default HeartIcon
