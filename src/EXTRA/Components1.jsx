import { useEffect, useState } from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import {
  componentPreviewHtml,
  componentJsxToVue,
  componentPreviewJsx,
} from '../utils/transformers.js';
import ReactDOMServer from 'react-dom/server';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/plugins/html';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Components1({ Component, name }) {
  const [viewportSize, setViewportSize] = useState('full');
  const [CurrentSize, setCurrentSize] = useState('');
  const [codeFormate, setCodeFormate] = useState('HTML');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [styles, setStyles] = useState('');
  const [formattedHtml, setFormattedHtml] = useState('');
  const [codeView, setCodeView] = useState(false);
  const [copyText, setCopyText] = useState('Copy');

  const jsxElement = <Component />;
  const staticHtml = ReactDOMServer.renderToStaticMarkup(jsxElement);


  const sizes = {
    mobile: 'w-[340px]',
    small: 'w-[640px]',
    medium: 'w-[768px]',
    large: 'w-[1024px]',
    full: 'w-full',
  };

  useEffect(() => {
    if (viewportSize === 'mobile') {
      setCurrentSize('340px');
    } else if (viewportSize === 'small') {
      setCurrentSize('640px');
    } else if (viewportSize === 'medium') {
      setCurrentSize('768px');
    } else if (viewportSize === 'large') {
      setCurrentSize('1024px');
    } else {
      setCurrentSize('100%');
    }
  }, [viewportSize]);
  +(
    // Close dropdown when clicking outside
    useEffect(() => {
      const closeDropdown = (e) => {
        if (!e.target.closest('.dropdown-container')) {
          setIsDropdownOpen(false);
        }
      };

      document.addEventListener('click', closeDropdown);
      return () => document.removeEventListener('click', closeDropdown);
    }, [])
  );

  useEffect(() => {
    // Get all style tags from the parent document
    const styleTags = document.querySelectorAll('style');
    const linkTags = document.querySelectorAll('link[rel="stylesheet"]');

    let allStyles = '';

    // Collect styles from style tags
    styleTags.forEach((tag) => {
      allStyles += tag.innerHTML;
    });

    // Collect styles from link tags
    Promise.all(
      Array.from(linkTags).map((link) =>
        fetch(link.href)
          .then((res) => res.text())
          .catch((err) => console.error('Error loading stylesheet:', err))
      )
    ).then((styles) => {
      allStyles += styles.join('');
      setStyles(allStyles);
    });
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedHtml);
      setCopyText('Copied!');
      setTimeout(() => setCopyText('Copy'), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      setCopyText('Failed');
    }
  };

  useEffect(() => {
    let htmlConverted ='';
    switch (codeFormate) {
      case 'HTML':
        htmlConverted = componentPreviewHtml(staticHtml);
        break;

      case 'Vue':
         htmlConverted = componentJsxToVue(staticHtml);
        break;

      case 'JSX':
         htmlConverted = componentPreviewJsx(staticHtml);
        break;
            default:
      console.warn('Unknown format:', codeFormate);
      return; // exit early if no valid format
    }
    if (!htmlConverted) return;
    async function formatHtml() {
      const pretty = await prettier.format(htmlConverted, {
        parser: 'html',
        plugins: [parserHtml],
      });
      setFormattedHtml(pretty);
    }

    formatHtml();
  }, [codeFormate,Component]);

  return (
    <section className="container mx-auto px-2 md:px-0 ">
      <h1 className=" font-bfont text-2xl  mx-2 md:mx-0 font-bold mb-4 mt-5">
        {name}
      </h1>
      <div className="flex flex-1 w-full  mx-2 md:mx-0 items-center justify-between ">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => {
              setCodeView(!codeView);
            }}
            className="border-1 font-bfont text-md font-medium  text-center shadow border-gray-400 py-2 px-6 rounded-md"
          >
            {codeView ? 'Code' : 'View'}
          </button>
          <button
            onClick={handleCopy}
            className="border-1 font-bfont text-md font-medium  text-center shadow border-gray-400 py-2 px-6 rounded-md"
          >
            {copyText}
          </button>
          <div className="relative dropdown-container">
            <button
              className="relative border-1 font-bfont text-md font-medium text-center shadow border-gray-400 py-2 px-6 rounded-md flex items-center gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {codeFormate}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-11 border-1 font-bfont text-md font-medium text-center shadow-lg border-gray-200 rounded-md bg-white min-w-[120px] py-1 z-10">
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100"
                  onClick={() => {
                    setCodeFormate('HTML');
                    setIsDropdownOpen(false);
                  }}
                >
                  HTML
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100"
                  onClick={() => {
                    setCodeFormate('JSX');
                    setIsDropdownOpen(false);
                  }}
                >
                  JSX
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-50 transition-colors duration-150"
                  onClick={() => {
                    setCodeFormate('Vue');
                    setIsDropdownOpen(false);
                  }}
                >
                  Vue
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="lg:flex items-center hidden justify-center text-center gap-2">
          <p className=" text-sm font-bfont">
            @<span className="pl-1 text-sm font-bfont ">{CurrentSize}</span>
          </p>
          {Object.keys(sizes).map((size) => (
            <button
              key={size}
              className={`border-1  font-bfont text-md font-medium  text-center shadow border-gray-400 py-2 px-4 rounded-md
                ${viewportSize === size ? 'bg-teal-600 text-white' : 'bg-white'}`}
              onClick={() => setViewportSize(size)}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </button>
          ))}
        </div>
      </div>
      {!codeView && (
        <div
          className={`
          flex justify-center mx-auto border-1 rounded-md border-gray-400 mt-4 
          overflow-x-auto transition-all duration-300 ease-in-out
          h-100 w-[${CurrentSize}]
        `}
        >
          <Frame
            style={{
              width: '100%',
              height: '100%',
              border: '1px solid #ddd',
              borderRadius: '0.375rem',
              backgroundColor: 'white',
            }}
            head={
              <>
                <style dangerouslySetInnerHTML={{ __html: styles }} />
              </>
            }
          >
            <FrameContextConsumer>{() => <Component />}</FrameContextConsumer>
          </Frame>
        </div>
      )}
      {codeView && (
        <div
          className={`
          flex justify-center mx-auto border-1 rounded-md border-gray-400 mt-4 
          overflow-x-auto transition-all duration-300 ease-in-out
          h-100 w-full
        `}
        >
          {formattedHtml ? (
            <SyntaxHighlighter
              language="html"
              style={atomOneDark}
              customStyle={{
                borderRadius: '10px',
                padding: '16px',
                fontSize: '14px',
                background: '#282c34', // Optional: override dark background
                overflowX: 'auto',
              }}
              showLineNumbers={true} // Optional: add line numbers
            >
              {formattedHtml}
            </SyntaxHighlighter>
          ) : (
            <p>Loading formatted HTML...</p>
          )}
        </div>
      )}
    </section>
  );
}

export default Components1;
