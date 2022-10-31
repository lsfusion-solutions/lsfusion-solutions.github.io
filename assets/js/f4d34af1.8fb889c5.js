"use strict";(self.webpackChunkmycompany_docs=self.webpackChunkmycompany_docs||[]).push([[7689],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43764:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});var r=n(83117),o=(n(67294),n(3905));const l={title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},a=void 0,i={unversionedId:"Installation",id:"Installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",description:"\u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u043e\u0434 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b Linux \u0438\u043b\u0438 Windows \u0441 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043a \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Installation.md",sourceDirName:".",slug:"/Installation",permalink:"/Installation",draft:!1,editUrl:"https://github.com/lsfusion-solutions/mycompany-docs/edit/main/i18n/ru/docusaurus-plugin-content-docs/current/Installation.md",tags:[],version:"current",lastUpdatedAt:1667225817,formattedLastUpdatedAt:"31 \u043e\u043a\u0442. 2022 \u0433.",frontMatter:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},sidebar:"docs",previous:{title:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430",permalink:"/Development"},next:{title:"\u041f\u0435\u0440\u0435\u043d\u043e\u0441 MyCompany \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440.",permalink:"/MyCompany_migration_to_another_server"}},u={},s=[{value:"RHEL 8+ / CentOS 8+ / Fedora 35+",id:"rhel-8--centos-8--fedora-35",level:3},{value:"RHEL 7 / CentOS 7",id:"rhel-7--centos-7",level:3},{value:"Ubuntu 18+ / Debian 9+",id:"ubuntu-18--debian-9",level:3},{value:"Windows",id:"windows",level:3},{value:"\u0412\u043e\u0439\u0442\u0438 \u0432 MyCompany",id:"\u0432\u043e\u0439\u0442\u0438-\u0432-mycompany",level:3},{value:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430",id:"\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u0447\u0430\u0441\u0442\u0438",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f-\u0438-\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439-\u0447\u0430\u0441\u0442\u0438",level:4},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439-\u0447\u0430\u0441\u0442\u0438",level:4},{value:"\u0421\u0431\u043e\u0440\u043a\u0430 jar-\u0444\u0430\u0439\u043b\u0430 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",id:"\u0441\u0431\u043e\u0440\u043a\u0430-jar-\u0444\u0430\u0439\u043b\u0430-\u0434\u043b\u044f-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435",level:4}],p={toc:s};function c(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u043e\u0434 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b Linux \u0438\u043b\u0438 Windows \u0441 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043a \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442."),(0,o.kt)("p",null,"\u041d\u0430 \u043d\u0435\u043c \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0433\u0438\u0433\u0430\u0431\u0430\u0439\u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 \u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u044b \u043f\u043e\u0440\u0442\u044b 8080 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u0435\u0431-\u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 7652 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0434\u0435\u0441\u043a\u0442\u043e\u043f-\u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,o.kt)("h3",{id:"rhel-8--centos-8--fedora-35"},"RHEL 8+ / CentOS 8+ / Fedora 35+"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos8-ru.sh)\n")),(0,o.kt)("h3",{id:"rhel-7--centos-7"},"RHEL 7 / CentOS 7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos7-ru.sh)\n")),(0,o.kt)("h3",{id:"ubuntu-18--debian-9"},"Ubuntu 18+ / Debian 9+"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-ubuntu18-ru.sh)\n")),(0,o.kt)("p",null,"\u041b\u043e\u0433 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 lsFusion \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 /var/log/lsfusion5-server/start.log ."),(0,o.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u043c\u044f\u0442\u0438, \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u043c\u0443\u044e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e, \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 -Xmx \u0432 \u0444\u0430\u0439\u043b\u0430\u0445 /etc/lsfusion5-server/lsfusion.conf \u0438 /etc/lsfusion5-client/lsfusion.conf. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u043b\u0443\u0436\u0431\u044b."),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("p",null,"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0449\u0438\u043a \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c ",(0,o.kt)("a",{parentName:"p",href:"https://download.lsfusion.org/solutions/MyCompany-1.0-x64.exe"},"MyCompany-1.0-x64.exe")," \u0438\u043b\u0438 ",(0,o.kt)("a",{parentName:"p",href:"https://download.lsfusion.org/solutions/MyCompany-1.0.exe"},"MyCompany-1.0.exe")),(0,o.kt)("h3",{id:"\u0432\u043e\u0439\u0442\u0438-\u0432-mycompany"},"\u0412\u043e\u0439\u0442\u0438 \u0432 MyCompany"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 web-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 MyCompany ",(0,o.kt)("a",{parentName:"li",href:"http://ip-%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B0:8080"},"http://ip-\u0432\u0430\u0448\u0435\u0433\u043e-\u0441\u0435\u0440\u0432\u0435\u0440\u0430:8080")),(0,o.kt)("li",{parentName:"ol"},"\u0412 \u043e\u0442\u043a\u0440\u044b\u0432\u0448\u0435\u043c\u0441\u044f \u043e\u043a\u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0434 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c ",(0,o.kt)("strong",{parentName:"li"},"admin")," \u0431\u0435\u0437 \u043f\u0430\u0440\u043e\u043b\u044f")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(67940).Z,width:"531",height:"367"})),(0,o.kt)("h3",{id:"\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430"},"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430"),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f Maven, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u0449\u0438\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0440\u0435\u0434\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 :"),(0,o.kt)("h4",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f-\u0438-\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439-\u0447\u0430\u0441\u0442\u0438"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u0447\u0430\u0441\u0442\u0438"),(0,o.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443 lsFusion \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 (Server), \u043a\u0430\u043a \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.lsfusion.org/ru/next/Development_auto/"},"https://docs.lsfusion.org/ru/next/Development_auto/"),"."),(0,o.kt)("p",null,"\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043b\u044f PostgreSQL \u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c 11111. "),(0,o.kt)("h4",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439-\u0447\u0430\u0441\u0442\u0438"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u0421\u0434\u0435\u043b\u0430\u0442\u044c Get from VCS \u0432 \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u043e\u043c \u043c\u0435\u043d\u044e \u0438\u043b\u0438 Git / Clone, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lsfusion-solutions/mycompany.git"},"https://github.com/lsfusion-solutions/mycompany.git")," ."),(0,o.kt)("li",{parentName:"ol"},"\u0414\u043e\u0436\u0434\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043a\u0430 IntelliJ IDEA \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043f\u0440\u043e\u0435\u043a\u0442 \u0438 \u0441\u043a\u0430\u0447\u0430\u0435\u0442 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 Maven \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 (\u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043d\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0438\u043d\u0443\u0442)."),(0,o.kt)("li",{parentName:"ol"},"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0447\u0442\u043e \u0431\u044b\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043d\u0430\u0439\u0434\u0435\u043d Java Development Kit. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0439\u0442\u0438 \u0432 \u0444\u043e\u0440\u043c\u0443 File / Project Structure \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0447\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043f\u043e\u043b\u0435 Project / SDK. "),(0,o.kt)("li",{parentName:"ol"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 lsFusion. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u0432 \u0444\u043e\u0440\u043c\u0435 Run / Edit Configurations \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,o.kt)("strong",{parentName:"li"},"+"),", \u0430 \u0437\u0430\u0442\u0435\u043c \u0432\u044b\u0431\u0440\u0430\u0442\u044c lsFusion Server. \u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0447\u0442\u043e Working Directory \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u043f\u0430\u043f\u043a\u0443, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f pom.xml."),(0,o.kt)("li",{parentName:"ol"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440 \u0447\u0435\u0440\u0435\u0437 \u043f\u0443\u043d\u043a\u0442 \u043c\u0435\u043d\u044e Run / Run <\u0438\u043c\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438>. ")),(0,o.kt)("h4",{id:"\u0441\u0431\u043e\u0440\u043a\u0430-jar-\u0444\u0430\u0439\u043b\u0430-\u0434\u043b\u044f-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435"},"\u0421\u0431\u043e\u0440\u043a\u0430 jar-\u0444\u0430\u0439\u043b\u0430 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u0438\u0442\u043e\u0433\u043e\u0432\u043e\u0433\u043e jar-\u0444\u0430\u0439\u043b\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u0412 \u0444\u043e\u0440\u043c\u0435 File / Project Structure \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0439\u0442\u0438 \u0432 \u043f\u0443\u043d\u043a\u0442 Artifacts \u0438 \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,o.kt)("strong",{parentName:"li"},"+")," \u0438 \u0432\u044b\u0431\u0440\u0430\u0442\u044c Jar / Empty project."),(0,o.kt)("li",{parentName:"ol"},"\u0412 \u043f\u043e\u043b\u0435 Output Directory \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0439 jar-\u0444\u0430\u0439\u043b. "),(0,o.kt)("li",{parentName:"ol"},"\u0418\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 Available Elements \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u0432 jar \u0444\u0430\u0439\u043b \u044d\u043b\u0435\u043c\u0435\u043d\u0442 'mycompany' compile output. \u0417\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u0430\u0442\u044c \u041e\u041a."),(0,o.kt)("li",{parentName:"ol"},"\u0417\u0430\u0442\u0435\u043c \u0432 \u043f\u0443\u043d\u043a\u0442\u0435 \u043c\u0435\u043d\u044e \u0432\u044b\u0431\u0440\u0430\u0442\u044c Build / Build artifacts. \u0414\u0430\u043b\u044c\u0448\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0443\u043d\u043a\u0442 Build.")),(0,o.kt)("p",null,"\u0421\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u0444\u0430\u0439\u043b\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0441\u0442\u0430\u0440\u044b\u0439 \u0444\u0430\u0439\u043b, \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0438\u0439\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0432 \u043f\u0430\u043f\u043a\u0435 /var/lib/lsfusion, \u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u043b\u0443\u0436\u0431\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435."))}c.isMDXComponent=!0},67940:function(e,t,n){t.Z=n.p+"assets/images/Installation_1-548315431227dbeaf21632e2e6ab8d56.png"}}]);