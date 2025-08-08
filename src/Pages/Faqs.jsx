const faq = [
  {
    question: "What is BrandfyUI?",
    answer: "BrandfyUI is a free, open source library of Tailwind CSS components designed to accelerate your web development workflows."
  },
  {
    question: "Is BrandfyUI free to use?",
    answer: "Absolutely! BrandfyUI is 100% free with no hidden costs."
  },
  {
    question: "How do I use BrandfyUI components?",
    answer: "Using BrandfyUI is straightforward: browse our collection, find a component you need, copy the code, and paste it directly into your project."
  },
  {
    question: "Do I need to install BrandfyUI?",
    answer: "No installation required! BrandfyUI is not a package. Just copy the component code you want to use."
  },
  {
    question: "Is attribution required when using BrandfyUI?",
    answer: "No attribution is needed, though it's always appreciated."
  },
  {
    question: "How can I support the BrandfyUI project?",
    answer: "The easiest way to support BrandfyUI is by starring the project on GitHub. Every star helps!"
  },
  {
    question: "Where can I get help with BrandfyUI?",
    answer: "For support, please create an issue on the GitHub repository."
  },
  {
    question: "How frequently is BrandfyUI updated?",
    answer: "Updates are regular with new components, collections, and features to keep the library fresh and relevant."
  },
  {
    question: "Does BrandfyUI offer React components?",
    answer: "While the components are written in HTML, you can view and copy them as JSX for your React projects."
  },
  {
    question: "Are Vue components available in BrandfyUI?",
    answer: "Yes, the HTML components can be viewed and copied as Vue components to fit your project needs."
  },
  {
    question: "Which Tailwind CSS version is BrandfyUI compatible with?",
    answer: "BrandfyUI currently uses Tailwind CSS v3.1.10."
  },
  {
    question: "Why might components look different in my project?",
    answer: "Differences in appearance may be due to varying Tailwind CSS versions. Check your version first, and if issues persist, please open a GitHub issue."
  },
  {
    question: "Are dark mode versions available?",
    answer: "Many components include dark mode variations, though not all components have this feature."
  },
  {
    question: "Can I request new features or components?",
    answer: "Feature requests are welcomed! Please submit them through GitHub issues."
  },
  {
    question: "Can BrandfyUI be used in commercial projects?",
    answer: "Yes, BrandfyUI is free to use in any project including commercial applications."
  },
  {
    question: "Should I update my copied components when BrandfyUI updates?",
    answer: "Once you copy a component, it's yours to modify and maintain. We don't recommend trying to keep them synchronized with future BrandfyUI updates."
  }
];


function Faqs() {
  return (
    <section className='container w-xl pr-5 pl-4 md:pr-0 md:pl-0 md:px-0 mx-auto mt-7  min-h-[calc(100vh-360px)] md:min-h-[calc(100vh-440px)]'>
      <h1 className=' font-bfont text-4xl font-black my-12'>FAQs</h1>
      <div className=' flex flex-col gap-12'>
        {faq.map((item,i) => (
        <div key={i} className='flex flex-col gap-4'>
          <h1 className=' font-bfont text-2xl font-bold'>{item.question}</h1>
          <p className=' font-bfont font-light'>{item.answer}</p>
        </div>
        ))}

      </div>
    </section>
  )
}

export default Faqs