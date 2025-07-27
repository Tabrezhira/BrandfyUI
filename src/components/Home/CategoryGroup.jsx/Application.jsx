import React from 'react'

const datas = [
  { icon: "📣", Components: 5, name: "Alerts" },
  { icon: "🐷", Components: 10, name: "Badges" },
  { icon: "📦", Components: 10, name: "Breadcrumbs" },
  { icon: "👉", Components: 6, name: "Button Groups" },
  { icon: "✅", Components: 6, name: "Checkboxes" },
  { icon: "🧾", Components: 8, name: "Details Lists" },
  { icon: "🪛", Components: 12, name: "Dividers" },
  { icon: "💧", Components: 6, name: "Dropdowns" },
  { icon: "🎂", Components: 4, name: "File Uploaders" },
  { icon: "📊", Components: 4, name: "Filters" },
  { icon: "📦", Components: 10, name: "Grids" },
  { icon: "🍇", Components: 8, name: "Inputs" },
  { icon: "📺", Components: 8, name: "Media" },
  { icon: "💭", Components: 12, name: "Modals" },
  { icon: "🧊", Components: 6, name: "Pagination" },
  { icon: "➕", Components: 8, name: "Quantity Inputs" },
  { icon: "📻", Components: 5, name: "Radio Groups" },
  { icon: "🧧", Components: 6, name: "Selects" },
  { icon: "🎮", Components: 3, name: "Side Menu" },
  { icon: "📈", Components: 12, name: "Stats" },
  { icon: "🪜", Components: 6, name: "Steps" },
  { icon: "📋", Components: 10, name: "Tables" },
  { icon: "🪶", Components: 6, name: "Textareas" },
  { icon: "⏱️", Components: 6, name: "Timelines" },
  { icon: "🎚️", Components: 8, name: "Toggles" },
  { icon: "🥋", Components: 18, name: "Vertical Menu" }
];


function Application() {

  return (
   <section>
    <h1 className=' font-bfont text-2xl p-2 md:p-0 font-bold'>Application Components</h1>
    <div className='container gap-2 md:gap-4 grid p-2 md:p-0 md:grid-cols-3 mt-4'>
        {datas.map((data, i) => (
            <div className='h-36 border-1 border-gray-300 rounded-md p-6'>
                <span className=' text-xl font-bfont'>{data.icon}</span>
                <p className='mb-1 mt-4 text-sm font-bfont'><span>{data.Components}</span> Components</p>
                <h1 className='text-lg font-bfont font-semibold '>{data.name}</h1>
            </div>
        ))}
    </div>                                                                                                                       
   </section>
  )
}

export default Application