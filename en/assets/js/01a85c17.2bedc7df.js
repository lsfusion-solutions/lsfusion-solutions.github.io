"use strict";(self.webpackChunkmycompany_docs=self.webpackChunkmycompany_docs||[]).push([["565"],{8141:function(e,t,a){a.d(t,{CS:()=>f,iZ:()=>j,ci:()=>k,Ne:()=>y,cH:()=>_,nO:()=>u,wj:()=>s,n4:()=>c});var n=a("5893"),l=a("7294"),r=a("1934"),i=a("9685");function s(){let e=(0,i.Z)(),t=e?.data?.blogMetadata;if(!t)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}let o=l.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:r=!1}=e,i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}),[t,a])}({content:a,isBlogPostPage:r});return(0,n.jsx)(o.Provider,{value:i,children:t})}function u(){let e=(0,l.useContext)(o);if(null===e)throw new r.i6("BlogPostProvider");return e}var m=a("3187"),d=a("7262");let g=e=>new Date(e).toISOString();function h(e){let t=e.map(x);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:function(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function f(e){let{siteConfig:t}=(0,d.Z)(),{withBaseUrl:a}=(0,m.Cg)(),{metadata:{blogDescription:n,blogTitle:l,permalink:r}}=e,i=`${t.url}${r}`;return{"@context":"https://schema.org","@type":"Blog","@id":i,mainEntityOfPage:i,headline:l,description:n,blogPost:e.items.map(e=>(function(e,t,a){let{assets:n,frontMatter:l,metadata:r}=e,{date:i,title:s,description:o,lastUpdatedAt:c}=r,u=n.image??l.image,m=l.keywords??[],d=`${t.url}${r.permalink}`,f=c?g(c):void 0;return{"@type":"BlogPosting","@id":d,mainEntityOfPage:d,url:d,headline:s,name:s,description:o,datePublished:i,...f?{dateModified:f}:{},...h(r.authors),...p(u,a,s),...m?{keywords:m}:{}}})(e.content,t,a))}}function j(){let e=s(),{assets:t,metadata:a}=u(),{siteConfig:n}=(0,d.Z)(),{withBaseUrl:l}=(0,m.Cg)(),{date:r,title:i,description:o,frontMatter:c,lastUpdatedAt:f}=a,j=t.image??c.image,x=c.keywords??[],b=f?g(f):void 0,v=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:i,name:i,description:o,datePublished:r,...b?{dateModified:b}:{},...h(a.authors),...p(j,l,i),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function x(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}var b=a("6550"),v=a("3367"),N=a("9413"),C=a("3868");function _(e){let{pathname:t}=(0,b.TH)();return(0,l.useMemo)(()=>e.filter(e=>!e.unlisted||!!(0,C.Mg)(e.permalink,t)),[e,t])}function k(e){let t=Object.entries((0,N.vM)(e,e=>`${new Date(e.date).getFullYear()}`));return t.reverse(),t}function y(e){let{items:t,ulClassName:a,liClassName:l,linkClassName:r,linkActiveClassName:i}=e;return(0,n.jsx)("ul",{className:a,children:t.map(e=>(0,n.jsx)("li",{className:l,children:(0,n.jsx)(v.Z,{isNavLink:!0,to:e.permalink,className:r,activeClassName:i,children:e.title})},e.permalink))})}},187:function(e,t,a){a.d(t,{Z:()=>N});var n=a("5893"),l=a("7294"),r=a("7026"),i=a("3347"),s=a("7550"),o=a("7670"),c=a("8141"),u=a("6009"),m=a("6055");function d(e){let{year:t,yearGroupHeadingClassName:a,children:l}=e;return(0,n.jsxs)("div",{role:"group",children:[(0,n.jsx)(m.Z,{as:"h3",className:a,children:t}),l]})}let g=(0,l.memo)(function(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:l}=e;if(!(0,u.L)().blog.sidebar.groupByYear)return(0,n.jsx)(l,{items:t});{let e=(0,c.ci)(t);return(0,n.jsx)(n.Fragment,{children:e.map(e=>{let[t,r]=e;return(0,n.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,n.jsx)(l,{items:r})},t)})})}}),h=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:(0,r.Z)("sidebarItemList_Yudw","clean-list"),liClassName:"sidebarItem__DBe",linkClassName:"sidebarItemLink_mo7H",linkActiveClassName:"sidebarItemLinkActive_I1ZP"})},p=(0,l.memo)(function(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsxs)("nav",{className:(0,r.Z)("sidebar_re4s","thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,n.jsx)("div",{className:(0,r.Z)("sidebarItemTitle_pO2u","margin-bottom--md"),children:t.title}),(0,n.jsx)(g,{items:a,ListComponent:h,yearGroupHeadingClassName:"yearGroupHeading_rMGB"})]})})});var f=a("9018");let j=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function x(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)(g,{items:a,ListComponent:j,yearGroupHeadingClassName:"yearGroupHeading_QT03"})}let b=(0,l.memo)(function(e){return(0,n.jsx)(f.Zo,{component:x,props:e})});function v(e){let{sidebar:t}=e,a=(0,s.i)();return t?.items.length?"mobile"===a?(0,n.jsx)(b,{sidebar:t}):(0,n.jsx)(p,{sidebar:t}):null}function N(e){let{sidebar:t,toc:a,children:l,...s}=e,o=t&&t.items.length>0;return(0,n.jsx)(i.Z,{...s,children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(v,{sidebar:t}),(0,n.jsx)("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:l}),a&&(0,n.jsx)("div",{className:"col col--2",children:a})]})})})}},1093:function(e,t,a){a.r(t),a.d(t,{default:()=>p});var n=a("5893");a("7294");var l=a("7026"),r=a("7670");let i=()=>(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var s=a("357"),o=a("6171"),c=a("187"),u=a("2684"),m=a("6055");function d(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(m.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map(e=>(0,n.jsx)("li",{className:"tag_Nnez",children:(0,n.jsx)(u.Z,{...e})},e.permalink))}),(0,n.jsx)("hr",{})]})}function g(e){let{tags:t}=e,a=function(e){let t={};return Object.values(e).forEach(e=>{let a=e.label[0].toUpperCase();t[a]??=[],t[a].push(e)}),Object.entries(t).sort((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)}).map(e=>{let[t,a]=e;return{letter:t,tags:a.sort((e,t)=>e.label.localeCompare(t.label))}})}(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:a.map(e=>(0,n.jsx)(d,{letterEntry:e},e.letter))})}var h=a("2901");function p(e){let{tags:t,sidebar:a}=e,r=i();return(0,n.jsxs)(s.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogTagsListPage),children:[(0,n.jsx)(s.d,{title:r}),(0,n.jsx)(h.Z,{tag:"blog_tags_list"}),(0,n.jsxs)(c.Z,{sidebar:a,children:[(0,n.jsx)(m.Z,{as:"h1",children:r}),(0,n.jsx)(g,{tags:t})]})]})}},2684:function(e,t,a){a.d(t,{Z:()=>s});var n=a("5893");a("7294");var l=a("7026"),r=a("3367");let i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:a,count:s,description:o}=e;return(0,n.jsxs)(r.Z,{href:t,title:o,className:(0,l.Z)(i.tag,s?i.tagWithCount:i.tagRegular),children:[a,s&&(0,n.jsx)("span",{children:s})]})}}}]);