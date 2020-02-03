import React from 'react';

import Icon from '../../../Icon';

const SVG_S = (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.9999 3.00005C9.99992 5.50006 4.99997 10 1 13.9993L3 16C3.43278 14.918 4.19335 13.7424 5.11956 12.5644C6.83157 13.2121 10.0297 14.0225 11.9999 12.0523C14.7921 9.26014 14.9993 1.00281 14.9993 1.00281C14.9993 1.00281 6.74207 1.20788 3.94996 3.99999C2.3068 5.64315 2.59762 8.14109 3.11521 9.91864C8.60701 4.75718 13 2.99999 13 2.99999L12.9999 3.00005Z"
  />
);

const SVG_M = (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M19.1419 4.85318C16.2904 7.22941 12.1743 11.5053 8.05563 15.7838C5.98418 17.9357 3.91211 20.0882 2 22L4 24C4.81618 22.6397 5.91995 21.1626 7.17217 19.6626C9.79804 20.296 14.211 20.785 17 17.996C21.9981 12.9979 21.9981 2 21.9981 2C21.9981 2 10.996 2 6.00002 6.99599C3.25302 9.74298 3.68599 14.0653 4.30482 16.7039C12.5092 8.67638 19.142 4.853 19.142 4.853L19.1419 4.85318Z"
  />
);

const Leaf = props => {
  let svg;

  if (props.size === 'xs')
    // TODO
    svg = SVG_S;
  else if (props.size === 's') svg = SVG_S;
  else if (props.size === 'm') svg = SVG_M;

  return <Icon {...props}>{svg}</Icon>;
};

export default Leaf;