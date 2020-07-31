import React from 'react';
import { ReactComponent as Location } from '../assets/icons/location.svg';
import { ReactComponent as Sun } from '../assets/icons/sun.svg';
import { ReactComponent as Cloud } from '../assets/icons/cloud.svg';
import { ReactComponent as Shower } from '../assets/icons/shower.svg';
import { ReactComponent as Snow } from '../assets/icons/snow.svg';
import { ReactComponent as Thunderstorm } from '../assets/icons/thunderstorm.svg';
import { ReactComponent as Drizzle } from '../assets/icons/drizzle.svg';
import { ReactComponent as Mist } from '../assets/icons/mist.svg';
import { ReactComponent as Tornado } from '../assets/icons/tornado.svg';
import { ReactComponent as Squall } from '../assets/icons/squall.svg';
import { ReactComponent as Plus } from '../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../assets/icons/minus.svg';

/**
 * Renders a SVG icon
 * @param {string} props.name Icon name
 * @param {object} props.attr Attributes for a SVG element. (All props other than props.name)
 * @returns Icon component to display a SVG
 * @usage e.g. <Icon name="location" width="30" height="30" className="location" />
 */

const Icon = ({ name, ...attr }) => {
  switch (name) {
    case 'location':
      return <Location {...attr} />;
    case 'clear':
      return <Sun {...attr} />;
    case 'clouds':
      return <Cloud {...attr} />;
    case 'rain':
      return <Shower {...attr} />;
    case 'snow':
      return <Snow {...attr} />;
    case 'thunderstorm':
      return <Thunderstorm {...attr} />;
    case 'drizzle':
      return <Drizzle {...attr} />;
    case 'mist':
      return <Mist {...attr} />;
    case 'smoke':
    case 'haze':
    case 'dust':
    case 'fog':
    case 'sand':
    case 'ash':
    case 'tornado':
      return <Tornado {...attr} />;
    case 'squall':
      return <Squall {...attr} />;
    case 'plus':
      return <Plus {...attr} />;
    case 'minus':
      return <Minus {...attr} />;
    default:
      return <span {...attr} />;
  }
};

export default Icon;
