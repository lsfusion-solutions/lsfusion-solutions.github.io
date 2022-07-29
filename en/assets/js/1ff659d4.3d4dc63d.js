"use strict";(self.webpackChunkmycompany_docs=self.webpackChunkmycompany_docs||[]).push([[5553],{3905:function(t,n,e){e.d(n,{Zo:function(){return u},kt:function(){return d}});var o=e(7294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,o,l=function(t,n){if(null==t)return{};var e,o,l={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var i=o.createContext({}),p=function(t){var n=o.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):r(r({},n),t)),e},u=function(t){var n=p(t.components);return o.createElement(i.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(t,n){var e=t.components,l=t.mdxType,a=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=p(e),d=l,y=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return e?o.createElement(y,r(r({ref:n},u),{},{components:e})):o.createElement(y,r({ref:n},u))}));function d(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var a=e.length,r=new Array(a);r[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=t,s.mdxType="string"==typeof t?t:l,r[1]=s;for(var p=2;p<a;p++)r[p]=e[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,e)}m.displayName="MDXCreateElement"},7784:function(t,n,e){e.r(n),e.d(n,{assets:function(){return i},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var o=e(3117),l=(e(7294),e(3905));const a={title:"Installation"},r=void 0,s={unversionedId:"Installation",id:"Installation",title:"Installation",description:"To install the solution, you will need a server running a Linux or Windows operating system that is connected to the Internet.",source:"@site/docs/Installation.md",sourceDirName:".",slug:"/Installation",permalink:"/en/Installation",draft:!1,editUrl:"https://github.com/lsfusion-solutions/mycompany-docs/edit/main/docs/Installation.md",tags:[],version:"current",lastUpdatedAt:1649866059,formattedLastUpdatedAt:"Apr 13, 2022",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Development",permalink:"/en/Development"},next:{title:"MyCompany migration to another server",permalink:"/en/MyCompany_migration_to_another_server"}},i={},p=[{value:"CentOS 8 installation",id:"centos-8-installation",level:3},{value:"Ubuntu 18/ Debian 9 installation",id:"ubuntu-18-debian-9-installation",level:3},{value:"Centos 7 installation",id:"centos-7-installation",level:3},{value:"Windows installation",id:"windows-installation",level:3},{value:"Log in to MyCompany",id:"log-in-to-mycompany",level:3}],u={toc:p};function c(t){let{components:n,...a}=t;return(0,l.kt)("wrapper",(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To install the solution, you will need a server running a Linux or Windows operating system that is connected to the Internet."),(0,l.kt)("p",null,"It must have a minimum of 2 gigabytes of RAM and open ports 8080 for web client operation and 7652 for desktop client operation."),(0,l.kt)("p",null,"(The commands listed below are provided to install in a Centos7 environment with root privileges)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Install Server and Client lsFusion:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@centos7: localectl set-locale LANG=ru_RU.UTF-8\n\nroot@centos7: source <(curl -s https://download.lsfusion.org/yum/install-lsfusion4)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Install MyCompany business logic:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'root@centos7: yum install -y wget\n\nroot@centos7: wget http://download.lsfusion.org/solutions/mycompany-1.0.jar -O /var/lib/lsfusion/mycompany.jar\n\nroot@centos7: echo "logics.topModule = MyCompanyRu" >> /etc/lsfusion4-server/settings.properties\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Restart lsFusion Server:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@centos7: systemctl stop lsfusion4-serverroot@centos7: systemctl start lsfusion4-server\n")),(0,l.kt)("p",null,"You can use the scripts below."),(0,l.kt)("h3",{id:"centos-8-installation"},"CentOS 8 installation"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://download.lsfusion.org/solutions/install-mycompany-centos8.sh"},"install-mycompany-centos8.sh")),(0,l.kt)("p",null,"Download the installation script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'root@centos8: dnf install -y wget  \n\nroot@centos8: wget "https://download.lsfusion.org/solutions/install-mycompany-centos8.sh" -P /tmp\n')),(0,l.kt)("p",null,"Allow to run the downloaded installation script :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@centos8: chmod +x /tmp/install-mycompany-centos8.sh\n")),(0,l.kt)("p",null,"Run script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@centos8: /tmp/install-mycompany-centos8.sh\n")),(0,l.kt)("h3",{id:"ubuntu-18-debian-9-installation"},"Ubuntu 18/ Debian 9 installation"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://download.lsfusion.org/solutions/install-mycompany-ubuntu18.sh"},"install-mycompany-ubuntu18.sh")),(0,l.kt)("p",null,"Download the installation script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'root@ubuntu18: wget "https://download.lsfusion.org/solutions/install-mycompany-ubuntu18.sh" -P /tmp\n')),(0,l.kt)("p",null,"Allow the downloaded file to run with the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@ubuntu18: chmod +x /tmp/install-mycompany-ubuntu18.sh\n")),(0,l.kt)("p",null,"Run the installation script with the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@ubuntu18: /tmp/install-mycompany-ubuntu18.sh\n")),(0,l.kt)("h3",{id:"centos-7-installation"},"Centos 7 installation"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://download.lsfusion.org/solutions/install-mycompany-centos7.sh"},"install-mycompany-centos7.sh")),(0,l.kt)("p",null,"Download the installation script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'root@centos7: yum install -y wget\n\nroot@centos7: wget "https://mycompany-docs.lsfusion.org/download/attachments/1802288/install-mycompany-centos7.sh" -P /tmp\n')),(0,l.kt)("p",null,"Allow the downloaded file to run with the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@centos7: chmod +x /tmp/install-mycompany-centos7.sh\n")),(0,l.kt)("p",null,"Run the installation script with the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@centos7:/tmp/install-mycompany-centos7.sh\n")),(0,l.kt)("h3",{id:"windows-installation"},"Windows installation"),(0,l.kt)("p",null,"Download and run the installer ",(0,l.kt)("a",{parentName:"p",href:"https://download.lsfusion.org/solutions/MyCompany-1.0-x64.exe"},"MyCompany-1.0-x64.exe")," or ",(0,l.kt)("a",{parentName:"p",href:"https://download.lsfusion.org/solutions/MyCompany-1.0.exe"},"MyCompany-1.0.exe")),(0,l.kt)("h3",{id:"log-in-to-mycompany"},"Log in to MyCompany"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open MyCompany web interface in your browser ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("u",null,(0,l.kt)("a",{parentName:"strong",href:"http://your-server-ip:8080"},"http://your-server-ip:8080")))),(0,l.kt)("li",{parentName:"ol"},"In the open window sign in using login admin without password.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:e(6800).Z,width:"531",height:"367"})))}c.isMDXComponent=!0},6800:function(t,n,e){n.Z=e.p+"assets/images/Installation_1-f7adc5a7851d3e8ed0e44ac808e41dfb.png"}}]);