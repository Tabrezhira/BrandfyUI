import React, { useState } from 'react';

const searchableComponents = [
  {
    name: 'Alerts',
    terms: ['alert', 'notification', 'message'],
    link: '/application/Alerts',
    category: 'application',
  },
  {
    name: 'Badges',
    terms: ['badge', 'notification', 'status'],
    link: '/application/Badges',
    category: 'application',
  },
  {
    name: 'Breadcrumbs',
    terms: ['breadcrumb', 'navigation', 'link'],
    link: '/application/Breadcrumbs',
    category: 'application',
  },
  {
    name: 'Button Groups',
    terms: ['button', 'group', 'action'],
    link: '/application/ButtonGroups',
    category: 'application',
  },
  {
    name: 'Checkboxes',
    terms: ['checkbox', 'input', 'form'],
    link: '/application/Checkboxes',
    category: 'application',
  },
  {
    name: 'Details Lists',
    terms: ['data', 'details', 'list'],
    link: '/application/DetailsLists',
    category: 'application',
  },
  {
    name: 'Dividers',
    terms: ['divider', 'layout', 'separator'],
    link: '/application/Dividers',
    category: 'application',
  },
  {
    name: 'Dropdowns',
    terms: ['dropdown', 'menu', 'navigation'],
    link: '/application/Dropdowns',
    category: 'application',
  },
  {
    name: 'File Uploaders',
    terms: ['file', 'form', 'upload'],
    link: '/application/FileUploaders',
    category: 'application',
  },
  {
    name: 'Filters',
    terms: ['filter', 'search', 'sort'],
    link: '/application/Filters',
    category: 'application',
  },
  {
    name: 'Grids',
    terms: ['grid', 'layout', 'columns'],
    link: '/application/Grids',
    category: 'application',
  },
  {
    name: 'Inputs',
    terms: ['input', 'form', 'field'],
    link: '/application/Inputs',
    category: 'application',
  },
  {
    name: 'Media',
    terms: ['media', 'avatar', 'image'],
    link: '/application/Media',
    category: 'application',
  },
  {
    name: 'Modals',
    terms: ['modal', 'dialog', 'popup'],
    link: '/application/Modals',
    category: 'application',
  },
  {
    name: 'Pagination',
    terms: ['pagination', 'navigation', 'page'],
    link: '/application/Pagination',
    category: 'application',
  },
  {
    name: 'Quantity Inputs',
    terms: ['input', 'quantity', 'ecommerce'],
    link: '/application/QuantityInputs',
    category: 'application',
  },
  {
    name: 'Radio Groups',
    terms: ['radio', 'group', 'form'],
    link: '/application/RadioGroups',
    category: 'application',
  },
  {
    name: 'Selects',
    terms: ['select', 'dropdown', 'filter'],
    link: '/application/Selects',
    category: 'application',
  },
  {
    name: 'Side Menu',
    terms: ['navigation', 'menu', 'sidebar'],
    link: '/application/SideMenu',
    category: 'application',
  },
  {
    name: 'Stats',
    terms: ['stats', 'analytics', 'metric'],
    link: '/application/Stats',
    category: 'application',
  },
  {
    name: 'Steps',
    terms: ['step', 'progress', 'indicator'],
    link: '/application/Steps',
    category: 'application',
  },
  {
    name: 'Tables',
    terms: ['table', 'data', 'dashboard'],
    link: '/application/Tables',
    category: 'application',
  },
  {
    name: 'Textareas',
    terms: ['textarea', 'input', 'form'],
    link: '/application/Textareas',
    category: 'application',
  },
  {
    name: 'Timelines',
    terms: ['timeline', 'history', 'roadmap'],
    link: '/application/Timelines',
    category: 'application',
  },
  {
    name: 'Toggles',
    terms: ['toggle', 'switch', 'accessibility'],
    link: '/application/Toggles',
    category: 'application',
  },
  {
    name: 'Vertical Menu',
    terms: ['menu', 'navigation', 'sidebar'],
    link: '/application/VerticalMenu',
    category: 'application',
  },
];

function Search() {
  const [query, setQuery] = useState('');
  const filtered = searchableComponents.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.terms.some((term) => term.toLowerCase().includes(query.toLowerCase()))
  );

 return (
  <div className=" border-1  relative shadow-sm  border-gray-300 rounded-md p-1 md:p-0 md:px-6 px-6 py-2 flex items-center md:gap-2">
   {/* relative w-30 md:w-50 mx-auto    */}
    <input
      type="text"
      placeholder="Search components..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-30 md:w-50 border-none outline-none md:px-3  px-0 py-0 rounded-md  focus:ring-0"
      // w-30 md:w-50  border-none outline-none bg-transparent shadow-none focus:ring-0
    />

    {query && filtered.length > 0 && (
      <ul className="absolute top-16 left-1/2 -translate-x-1/2 w-60 bg-white border border-gray-300 shadow-sm rounded-md z-10">
        {filtered.map((comp) => (
          <li key={comp.name}>
            <a
              href={comp.link}
              className="flex items-center justify-between p-2 hover:bg-gray-100 transition"
            >
              <div className="flex items-center space-x-2">
                {comp.icon && <span className="text-xl">{comp.icon}</span>}
                <span className="font-semibold">{comp.name}</span>
              </div>
              <span className="text-xs text-gray-500 capitalize">
                {comp.category}
              </span>
            </a>
          </li>
        ))}
      </ul>
    )}

    {query && filtered.length === 0 && (
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-60 h-20 flex items-center justify-center font-bfont font-semibold bg-white border border-gray-300 shadow-sm rounded-md z-10">
        No results for "{query}"
      </div>
    )} 
  </div>
);

}

export default Search;
