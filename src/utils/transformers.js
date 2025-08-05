export function componentPreviewJsx(componentHtml) {
  return componentHtml
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/viewBox=/g, 'viewBox=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-dasharray=/g, 'strokeDasharray=')
    .replace(/stroke-dashoffset=/g, 'strokeDashoffset=')
    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/stroke-opacity=/g, 'strokeOpacity=')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/<!--/g, '{/*')
    .replace(/-->/g, '*/}')
}

export function componentPreviewHtml(componentJsx) {
  return componentJsx
    .replace(/className=/g, 'class=')
    .replace(/htmlFor=/g, 'for=')
    .replace(/viewBox=/g, 'viewBox=') // stays same
    .replace(/fillRule=/g, 'fill-rule=')
    .replace(/fillOpacity=/g, 'fill-opacity=')
    .replace(/clipRule=/g, 'clip-rule=')
    .replace(/strokeLinecap=/g, 'stroke-linecap=')
    .replace(/strokeLinejoin=/g, 'stroke-linejoin=')
    .replace(/strokeWidth=/g, 'stroke-width=')
    .replace(/strokeDasharray=/g, 'stroke-dasharray=')
    .replace(/strokeDashoffset=/g, 'stroke-dashoffset=')
    .replace(/strokeMiterlimit=/g, 'stroke-miterlimit=')
    .replace(/strokeOpacity=/g, 'stroke-opacity=')
    .replace(/tabIndex=/g, 'tabindex=')
    .replace(/\{\s*\/\*/g, '<!--') // comment start
    .replace(/\*\/\s*\}/g, '-->'); // comment end
}


export function componentPreviewVue(componentHtml) {
  const newComponentHtml = `<template>\n${componentHtml}</template>`

  return newComponentHtml
    .split('\n')
    .map((codeLine) => {
      if (codeLine.includes('<template>') || codeLine.includes('</template>')) {
        return codeLine.trim()
      }

      return `  ${codeLine}`
    })
    .join('\n')
}


export function componentJsxToVue(componentJsx) {
  // Step 1: Replace JSX-specific attributes with Vue equivalents
  let html = componentJsx
    .replace(/className=/g, 'class=')
    .replace(/htmlFor=/g, 'for=')
    .replace(/\{\/\*/g, '<!--')  // JSX comment start
    .replace(/\*\/\}/g, '-->')   // JSX comment end
    .replace(/\{(.*?)\}/g, '{{ $1 }}'); // JSX expressions

  // Step 2: Wrap inside <template> tag and indent properly
  const vueTemplate = `<template>\n${html}</template>`;

  return vueTemplate
    .split('\n')
    .map((line) => {
      if (line.includes('<template>') || line.includes('</template>')) {
        return line.trim();
      }
      return `  ${line}`;
    })
    .join('\n');
}
