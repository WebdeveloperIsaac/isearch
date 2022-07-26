import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  //key value type url and text saving madi then map madko
  { url: '/image', text: '🖼️ Images' },
  { url: '/videos', text: '🎥 Videos' },
  { url: '/news', text: '📰 News' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text }) => (//url arrray declared agiradhu mapping
      <NavLink to={url}  className="m-2 mb-0" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">{text}</NavLink>
    ))}
  </div>
);