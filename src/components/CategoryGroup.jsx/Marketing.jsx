import { Link } from 'react-router-dom';
const datas = [
  { icon: "📣", Components: 6, name: "Announcements" },
  { icon: "🎌", Components: 6, name: "Banners" },
  { icon: "📰", Components: 13, name: "Blog Cards" },
  { icon: "👉", Components: 12, name: "Buttons" },
  { icon: "🏖️", Components: 10, name: "Cards" },
  { icon: "🛒", Components: 3, name: "Carts" },
  { icon: "👋", Components: 8, name: "CTAs" },
  { icon: "😲", Components: 10, name: "FAQs" },
  { icon: "⚽", Components: 26, name: "Footers" },
  { icon: "🗺️", Components: 8, name: "Header" },
  { icon: "💰", Components: 2, name: "Pricing" },
  { icon: "🧍‍♀️", Components: 10, name: "Product Cards" },
  { icon: "🛍️", Components: 6, name: "Product Collections" },
  { icon: "🧱", Components: 4, name: "Sections" }
];

function Marketing() {
  return (
    <section>
    <h1 className=' mt-2 md:mt-8 font-bfont text-xl md:text-2xl p-2 md:p-0 font-bold'>Marketing Components</h1>
    <div className='container gap-2  md:gap-4 grid p-2 md:p-0 md:grid-cols-3  md:mt-4'>
        {datas.map((data, i) => (
          <Link to={`/marketing/${data.name}`}>
            <div key={i} className='h-36 cursor-pointer border-2 border-gray-200 rounded-md p-6'>
                <span className=' text-xl font-bfont'>{data.icon}</span>
                <p className='mb-1 mt-4 text-sm font-bfont'><span>{data.Components}</span> Components</p>
                <h1 className='text-lg font-bfont font-semibold '>{data.name}</h1>
            </div>
            </Link>
        ))}
    </div>                                                                                                                       
   </section>
  )
}

export default Marketing