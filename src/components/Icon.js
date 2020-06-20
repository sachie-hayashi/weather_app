import React from 'react';
import {ReactComponent as Location} from '../assets/icons/location.svg';
import {ReactComponent as Sun} from '../assets/icons/sun.svg';
import {ReactComponent as Cloud} from '../assets/icons/cloud.svg';
import {ReactComponent as Shower} from '../assets/icons/shower.svg';
import {ReactComponent as Snow} from '../assets/icons/snow.svg';

/**
 * Renders a SVG icon
 * @param {string} props.name Icon name - 'location', 'sun', 'cloud', 'shower', 'snow'
 * @param {object} props.attr Attributes for a SVG element. (All props other than props.name)
 * @returns Icon component to display a SVG
 * @usage e.g. <Icon name="location" width="30" height="30" />
 */

const Icon = ({name, ...attr}) => {
  switch (name) {
    case 'location':
      return <Location {...attr} />;
    case 'sun':
      return <Sun {...attr} />;
    case 'cloud':
      return <Cloud {...attr} />;
    case 'shower':
      return <Shower {...attr} />
    case 'snow':
      return <Snow {...attr} />
    default:
      // do nothing
  }
}

export default Icon;