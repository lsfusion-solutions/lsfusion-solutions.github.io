"use strict";(self.webpackChunkmycompany_docs=self.webpackChunkmycompany_docs||[]).push([[5553],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=n(3117),r=(n(7294),n(3905));const i={title:"Installation"},a=void 0,l={unversionedId:"Installation",id:"Installation",title:"Installation",description:"To install the solution, you will need a server running a Linux or Windows operating system that is connected to the Internet.",source:"@site/docs/Installation.md",sourceDirName:".",slug:"/Installation",permalink:"/en/Installation",draft:!1,editUrl:"https://github.com/lsfusion-solutions/mycompany-docs/edit/main/docs/Installation.md",tags:[],version:"current",lastUpdatedAt:1673947776,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Development",permalink:"/en/Development"},next:{title:"MyCompany migration to another server",permalink:"/en/MyCompany_migration_to_another_server"}},s={},u=[{value:"RHEL 8+ / CentOS 8+ / Fedora 35+",id:"rhel-8--centos-8--fedora-35",level:3},{value:"RHEL 7 / CentOS 7",id:"rhel-7--centos-7",level:3},{value:"Ubuntu 18+ / Debian 9+",id:"ubuntu-18--debian-9",level:3},{value:"Windows installation",id:"windows-installation",level:3},{value:"Log in to MyCompany",id:"log-in-to-mycompany",level:3},{value:"Development",id:"development",level:3},{value:"Setting up the environment and client part",id:"setting-up-the-environment-and-client-part",level:4},{value:"Configuring the server part",id:"configuring-the-server-part",level:4},{value:"Building a jar file to run on the server",id:"building-a-jar-file-to-run-on-the-server",level:4}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To install the solution, you will need a server running a Linux or Windows operating system that is connected to the Internet."),(0,r.kt)("p",null,"It must have a minimum of 4 gigabytes of RAM and open ports 8080 for web client operation and 7652 for desktop client operation."),(0,r.kt)("h3",{id:"rhel-8--centos-8--fedora-35"},"RHEL 8+ / CentOS 8+ / Fedora 35+"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos8.sh)\n")),(0,r.kt)("h3",{id:"rhel-7--centos-7"},"RHEL 7 / CentOS 7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos7.sh)\n")),(0,r.kt)("h3",{id:"ubuntu-18--debian-9"},"Ubuntu 18+ / Debian 9+"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-ubuntu18.sh)\n")),(0,r.kt)("p",null,"You can see the lsFusion server startup log in /var/log/lsfusion5-server/start.log ."),(0,r.kt)("p",null,"To increase the amount of memory allocated to the application, you need to edit the -Xmx parameter in /etc/lsfusion5-server/lsfusion.conf and /etc/lsfusion5-client/lsfusion.conf. You must then restart the services."),(0,r.kt)("h3",{id:"windows-installation"},"Windows installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and run lsFusion platform installer (execution) : ",(0,r.kt)("a",{parentName:"li",href:"https://docs.lsfusion.org/ru/Execution_auto/"},"https://docs.lsfusion.org/ru/Execution_auto/"),"."),(0,r.kt)("li",{parentName:"ol"},"Download the assembled jar file with MyCompany logic from ",(0,r.kt)("a",{parentName:"li",href:"https://download.lsfusion.org/solutions/mycompany-1.0.jar"},"https://download.lsfusion.org/solutions/mycompany-1.0.jar"),"."),(0,r.kt)("li",{parentName:"ol"},"Put the downloaded jar file to the directory C:\\Program Files\\lsFusion 5\\Server\\lib."),(0,r.kt)("li",{parentName:"ol"},"Restart lsFusion 5 Server service.")),(0,r.kt)("h3",{id:"log-in-to-mycompany"},"Log in to MyCompany"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open MyCompany web interface in your browser ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("u",null,(0,r.kt)("a",{parentName:"strong",href:"http://your-server-ip:8080"},"http://your-server-ip:8080")))),(0,r.kt)("li",{parentName:"ol"},"In the open window sign in using login admin without password.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7489).Z,width:"531",height:"367"})),(0,r.kt)("h3",{id:"development"},"Development"),(0,r.kt)("p",null,"Since the project uses Maven, you can use the following algorithm to configure the development environment :"),(0,r.kt)("h4",{id:"setting-up-the-environment-and-client-part"},"Setting up the environment and client part"),(0,r.kt)("p",null,"Install lsFusion development platform, except for the server part (Server), as described at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.lsfusion.org/Development_auto/"},"https://docs.lsfusion.org/Development_auto/"),"."),(0,r.kt)("p",null,"As a password for PostgreSQL preferably use 11111."),(0,r.kt)("h4",{id:"configuring-the-server-part"},"Configuring the server part"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Do Get from VCS in the start menu or Git / Clone, using ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lsfusion-solutions/mycompany.git"},"https://github.com/lsfusion-solutions/mycompany.git")," as the source ."),(0,r.kt)("li",{parentName:"ol"},"Wait for IntelliJ IDEA to create the project and download all dependencies using Maven (may take a few minutes)."),(0,r.kt)("li",{parentName:"ol"},"Check that Java Development Kit has been successfully found. To do this, go to File / Project Structure form and check that Project / SDK field is set."),(0,r.kt)("li",{parentName:"ol"},"Create the configuration for running the lsFusion server. To do this, in Run / Edit Configurations form you need to click ",(0,r.kt)("strong",{parentName:"li"},"+"),", and then select lsFusion Server. Verify that Working Directory points to the folder where pom.xml is located."),(0,r.kt)("li",{parentName:"ol"},"Run server through Run / Run <configuration name",">"," menu item.")),(0,r.kt)("h4",{id:"building-a-jar-file-to-run-on-the-server"},"Building a jar file to run on the server"),(0,r.kt)("p",null,"After making changes to the application source code to build the final jar file, you need to :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In File / Project Structure form you need to go to Artifacts item and press ",(0,r.kt)("strong",{parentName:"li"},"+")," button and select Jar / Empty project."),(0,r.kt)("li",{parentName:"ol"},"In Output Directory field choose the directory where you want to place the assembled jar file."),(0,r.kt)("li",{parentName:"ol"},"From Available Elements list transfer the 'mycompany' compile output element to the jar file. Then press OK."),(0,r.kt)("li",{parentName:"ol"},"Then select Build / Build artifacts in the menu item. Then select Build.")),(0,r.kt)("p",null,"With the artifact you can replace the old file, which is on the server in the folder /var/lib/lsfusion or C:\\Program Files\\lsFusion 5\\Server\\lib, and restart the service on the server."))}p.isMDXComponent=!0},7489:function(e,t,n){t.Z=n.p+"assets/images/Installation_1-f7adc5a7851d3e8ed0e44ac808e41dfb.png"}}]);