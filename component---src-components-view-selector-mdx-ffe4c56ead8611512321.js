(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{WxI8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return d}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt");var a=n("/FXl"),o=n("TjRS"),i=n("ZFoC"),r=n("B0Kd"),c=n("kW9T");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/ViewSelector.mdx"}});var s={_frontmatter:p},b=o.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(b,l({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"ViewSelector"),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The ViewSelector component allows you to choose your account, property, and view via dropdown menus."),Object(a.b)("p",null,"This component is rendered by the ",Object(a.b)("a",l({parentName:"p"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"Google Analytics Embed API")," into a container on the page."),Object(a.b)("p",null,"This component wraps the ",Object(a.b)("a",l({parentName:"p"},{href:"https://devboldly.github.io/react-use-analytics-api/useViewSelector"}),Object(a.b)("inlineCode",{parentName:"a"},"useViewSelector"))," hook from ",Object(a.b)("a",l({parentName:"p"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"react-use-analytics-api"),"."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"import { ViewSelector } from 'react-analytics-charts';\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"const viewSelectionHandler = viewId => console.log(viewId);\n...\n<ViewSelector gapi={gapi} onChange={viewSelectionHandler} />\n")),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(i.d,{of:c.a,mdxType:"Props"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: Expand each prop for more information.")),Object(a.b)("h2",{id:"styling"},"Styling"),Object(a.b)("p",null,"The view selector ",Object(a.b)("inlineCode",{parentName:"p"},"div")," has the class name ",Object(a.b)("inlineCode",{parentName:"p"},"gapi-view-selector-container"),". Inspect the DOM to see what Google renders there."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-css"}),".gapi-view-selector-container {\n  /* Custom styles */\n}\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"The following live example shows standalone use of a ViewSelector, including full authorization flow."),Object(a.b)("p",null,"You can also use this example to quickly determine the ",Object(a.b)("inlineCode",{parentName:"p"},"viewId")," you'd like to provide to a chart or an ",Object(a.b)("a",l({parentName:"p"},{href:"/react-analytics-charts/AnalyticsDashboard"}),"AnalyticsDashboard"),"."),Object(a.b)("div",{style:{border:"solid 2px #67788a",padding:"20px"}},Object(a.b)(r.a,{mdxType:"ViewSelectorExample"})),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"import { useAnalyticsApi } from 'react-use-analytics-api';\nimport * as React from 'react';\nimport { AuthorizeButton, SignOutButton, ViewSelector } from 'react-analytics-charts';\n\nexport function ViewSelectorExample() {\n  const [viewId, setViewId] = React.useState('');\n  const { gapi, authorized } = useAnalyticsApi();\n\n  const viewIdStyles = { border: 'solid 2px orange', margin: '10px', padding: '5px' };\n\n  return (\n    <div>\n      {!authorized && (\n        <AuthorizeButton\n          gapi={gapi}\n          authOptions={{ clientId: '123456789012-abc123def456ghi789jkl012mno345p.apps.googleusercontent.com' }}\n        />\n      )}\n      {authorized && (\n        <div>\n          <h2>\n            Selected view ID:\n            <code style={viewIdStyles}>{viewId}</code>\n          </h2>\n          <p>\n            <SignOutButton gapi={gapi} />\n          </p>\n          <ViewSelector gapi={gapi} onChange={viewId => setViewId(viewId)} />\n        </div>\n      )}\n    </div>\n  );\n}\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/ViewSelector.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-view-selector-mdx-ffe4c56ead8611512321.js.map