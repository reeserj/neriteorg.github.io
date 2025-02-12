"use strict";(self.webpackChunknerite_docs=self.webpackChunknerite_docs||[]).push([[568],{7151:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"technical-documentation/technical-docs-and-code-repository","title":"Technical Docs & Code Repository","description":"Docusaurus can manage multiple versions of your docs.","source":"@site/docs/technical-documentation/technical-docs-and-code-repository.md","sourceDirName":"technical-documentation","slug":"/technical-documentation/technical-docs-and-code-repository","permalink":"/docs/technical-documentation/technical-docs-and-code-repository","draft":false,"unlisted":false,"editUrl":"https://github.com/NeriteOrg/neriteorg.github.io/docs/technical-documentation/technical-docs-and-code-repository.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Technical Documentation","permalink":"/docs/category/technical-documentation"},"next":{"title":"Friendly Fork Program","permalink":"/docs/technical-documentation/friendly-fork-program"}}');var i=o(4848),c=o(8453);const r={sidebar_position:1},d="Technical Docs & Code Repository",t={},a=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"technical-docs--code-repository",children:"Technical Docs & Code Repository"})}),"\n",(0,i.jsx)(n.p,{children:"Docusaurus can manage multiple versions of your docs."}),"\n",(0,i.jsx)(n.h2,{id:"create-a-docs-version",children:"Create a docs version"}),"\n",(0,i.jsx)(n.p,{children:"Release a version 1.0 of your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"docs"})," folder is copied into ",(0,i.jsx)(n.code,{children:"versioned_docs/version-1.0"})," and ",(0,i.jsx)(n.code,{children:"versions.json"})," is created."]}),"\n",(0,i.jsx)(n.p,{children:"Your docs now have 2 versions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1.0"})," at ",(0,i.jsx)(n.code,{children:"http://localhost:3000/docs/"})," for the version 1.0 docs"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"current"})," at ",(0,i.jsx)(n.code,{children:"http://localhost:3000/docs/next/"})," for the ",(0,i.jsx)(n.strong,{children:"upcoming, unreleased docs"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"add-a-version-dropdown",children:"Add a Version Dropdown"}),"\n",(0,i.jsx)(n.p,{children:"To navigate seamlessly across versions, add a version dropdown."}),"\n",(0,i.jsxs)(n.p,{children:["Modify the ",(0,i.jsx)(n.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"The docs version dropdown appears in your navbar:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Docs Version Dropdown",src:o(6343).A+"",width:"370",height:"302"})}),"\n",(0,i.jsx)(n.h2,{id:"update-an-existing-version",children:"Update an existing version"}),"\n",(0,i.jsx)(n.p,{children:"It is possible to edit versioned docs in their respective folder:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"versioned_docs/version-1.0/hello.md"})," updates ",(0,i.jsx)(n.code,{children:"http://localhost:3000/docs/hello"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"docs/hello.md"})," updates ",(0,i.jsx)(n.code,{children:"http://localhost:3000/docs/next/hello"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},6343:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var s=o(6540);const i={},c=s.createContext(i);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);