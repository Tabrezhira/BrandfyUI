import { useEffect, useState } from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import {
  // componentPreviewHtml,
  componentJsxToVue,
  componentPreviewJsx,
} from './transformers.js';
import ReactDOMServer from 'react-dom/server';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/plugins/html';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';

function Display({
  Component,
  name,
  previewDark,
  previewWidth,
  previewHeight,
  plainCode,
  
}) {
  const [viewportSize, setViewportSize] = useState('full');
  const [currentSize, setCurrentSize] = useState('100%');
  const [codeFormat, setCodeFormat] = useState('HTML');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formattedHtml, setFormattedHtml] = useState('');
  const [codeView, setCodeView] = useState(false);
  const [copyText, setCopyText] = useState('Copy');
  const iframeTheme = previewDark ? 'bg-gray-900' : 'bg-white';

  // const jsxElement = <Component />;
  // const staticHtml = ReactDOMServer.renderToStaticMarkup(jsxElement);

  const sizes = {
    mobile: 'w-[340px]',
    small: 'w-[640px]',
    medium: 'w-[768px]',
    large: 'w-[1024px]',
    full: 'w-full',
  };

  // Update current size based on viewportSize
  useEffect(() => {
    const sizeMap = {
      mobile: '340px',
      small: '640px',
      medium: '768px',
      large: '1024px',
      full: '100%',
    };
    setCurrentSize(sizeMap[viewportSize] || '100%');
  }, [viewportSize]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  // Collect styles from document on mount
  useEffect(() => {
    const styleTags = Array.from(document.querySelectorAll('style'));
    const linkTags = Array.from(
      document.querySelectorAll('link[rel="stylesheet"]')
    );

    let allStyles = styleTags.map((tag) => tag.innerHTML).join('');

    Promise.all(
      linkTags.map((link) =>
        fetch(link.href)
          .then((res) => res.text())
          .catch((err) => console.error('Error loading stylesheet:', err))
      )
    )
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

  // Convert and format code based on codeFormat
  useEffect(() => {
    let htmlConverted = '';
    switch (codeFormat) {
      case 'HTML':
        htmlConverted = plainCode;
        break;
      case 'Vue':
        htmlConverted = componentJsxToVue(plainCode);
        break;
      case 'JSX':
        htmlConverted = componentPreviewJsx(plainCode);
        break;
      default:
        console.warn('Unknown format:', codeFormat);
        return;
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
  }, [codeFormat, Component]);

  return (
    <section className="container mx-auto mt-2  md:px-0">
      <h1 className="font-bfont text-2xl  md:mx-0 font-bold mb-4 mt-5">
        {name}
      </h1>
      <div className="flex flex-1 w-full  md:mx-0 items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCodeView(!codeView)}
            className="border-1 font-bfont text-md font-medium text-center shadow border-gray-400 py-2 px-6 rounded-md"
          >
            {codeView ? 'Code' : 'View'}
          </button>
          <button
            onClick={handleCopy}
            className="border-1 font-bfont text-md font-medium text-center shadow border-gray-400 py-2 px-6 rounded-md"
          >
            {copyText}
          </button>
          <div className="relative dropdown-container">
            <button
              className="relative border-1 font-bfont text-md font-medium text-center shadow border-gray-400 py-2 px-6 rounded-md flex items-center gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {codeFormat}
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
                {['HTML', 'JSX', 'Vue'].map((format) => (
                  <li
                    key={format}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100"
                    onClick={() => {
                      setCodeFormat(format);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {format}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="lg:flex items-center hidden justify-center text-center gap-2">
          <p className="text-sm font-bfont">
            @<span className="pl-1 text-sm font-bfont">{currentSize}</span>
          </p>
          {Object.keys(sizes).map((size) => (
            <button
              key={size}
              className={`border-1 font-bfont text-md font-medium text-center shadow border-gray-400 py-2 px-4 rounded-md ${
                viewportSize === size ? 'bg-teal-600 text-white' : 'bg-white'
              }`}
              onClick={() => setViewportSize(size)}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </button>
          ))}
        </div>
      </div>
      {!codeView && (
        <div
          className={`  flex justify-center mx-auto border-1 rounded-md border-gray-400 mt-4 overflow-hidden overflow-x-auto transition-all duration-300 ease-in-out ${previewHeight} w-[${currentSize}]`}
        >
          <iframe
            key={name}
            className={`w-full rounded-md ring ring-gray-300 duration-500 lg:transition-[max-width] ${iframeTheme} ${previewHeight} overflow-hidden`}
            loading="lazy"
            srcDoc={Component}
            style={{ maxWidth: previewWidth }}
            title={name}
          ></iframe>
        </div>
      )}
      {codeView && (
        <div
          className={`flex justify-center mx-auto border-1 rounded-md border-gray-400 mt-4 overflow-x-auto transition-all duration-300 ease-in-out h-100 w-full  `}
        >
          {formattedHtml ? (
            <SyntaxHighlighter
              language="html"
              style={atomOneDark}
              customStyle={{
                width: '100%',
              
                padding: '16px',
                fontSize: '14px',
                background: '#282c34',
                overflowX: 'auto',
              }}
              showLineNumbers
            >
              {formattedHtml}
            </SyntaxHighlighter>
          ) : (
            <p>Loading formatted HTML...</p>
          )}
        </div>
      )}
      <p className="mt-2 font-bfont text-sm text-gray-500">
        Created by{' '}
        <span className=" border-b-1 text-gray-700 font-semibold border-gray-400 ">
          <Link to="https://github.com/Tabrezhira">TabrezHakimji</Link>
        </span>
      </p>
    </section>
  );
}

export default Display;
