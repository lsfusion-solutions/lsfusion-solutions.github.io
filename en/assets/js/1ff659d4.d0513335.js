"use strict";(self.webpackChunkmycompany_docs=self.webpackChunkmycompany_docs||[]).push([["6422"],{605:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"Installation","title":"Installation","description":"To install the solution, you will need a server running a Linux or Windows operating system that is connected to the Internet.","source":"@site/docs/Installation.md","sourceDirName":".","slug":"/Installation","permalink":"/en/Installation","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion-solutions/mycompany-docs/edit/main/docs/Installation.md","tags":[],"version":"current","lastUpdatedAt":1731495574000,"frontMatter":{"title":"Installation"},"sidebar":"docs","previous":{"title":"Development","permalink":"/en/Development"},"next":{"title":"MyCompany migration to another server","permalink":"/en/MyCompany_migration_to_another_server"}}'),i=t("5893"),r=t("65");let s={title:"Installation"},l=void 0,a={},c=[{value:"RHEL 8+ / CentOS 8+ / Fedora 35+",id:"rhel-8--centos-8--fedora-35",level:3},{value:"Ubuntu 18+ / Debian 9+",id:"ubuntu-18--debian-9",level:3},{value:"Windows installation",id:"windows-installation",level:3},{value:"Log in to MyCompany",id:"log-in-to-mycompany",level:3},{value:"Development",id:"development",level:3},{value:"Setting up the environment and client part",id:"setting-up-the-environment-and-client-part",level:4},{value:"Configuring the server part",id:"configuring-the-server-part",level:4},{value:"Building a jar file to run on the server",id:"building-a-jar-file-to-run-on-the-server",level:4}];function d(e){let n={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"To install the solution, you will need a server running a Linux or Windows operating system that is connected to the Internet."}),"\n",(0,i.jsx)(n.p,{children:"It must have a minimum of 4 gigabytes of RAM and open ports 8080 for web client operation and 7652 for desktop client operation."}),"\n",(0,i.jsx)(n.h3,{id:"rhel-8--centos-8--fedora-35",children:"RHEL 8+ / CentOS 8+ / Fedora 35+"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos8.sh)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ubuntu-18--debian-9",children:"Ubuntu 18+ / Debian 9+"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-ubuntu18.sh)\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can see the lsFusion server startup log in /var/log/lsfusion6-server/start.log ."}),"\n",(0,i.jsx)(n.p,{children:"To increase the amount of memory allocated to the application, you need to edit the -Xmx parameter in /etc/lsfusion6-server/lsfusion.conf and /etc/lsfusion6-client/lsfusion.conf. You must then restart the services."}),"\n",(0,i.jsx)(n.h3,{id:"windows-installation",children:"Windows installation"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download and run lsFusion platform installer (execution) : ",(0,i.jsx)(n.a,{href:"https://docs.lsfusion.org/Execution_auto/",children:"https://docs.lsfusion.org/Execution_auto/"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Download the assembled jar file with MyCompany logic from ",(0,i.jsx)(n.a,{href:"https://download.lsfusion.org/solutions/mycompany-6.0.jar",children:"https://download.lsfusion.org/solutions/mycompany-6.0.jar"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Put the downloaded jar file to the directory C:\\Program Files\\lsFusion 6\\Server\\lib."}),"\n",(0,i.jsx)(n.li,{children:"Restart lsFusion 6 Server service."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"log-in-to-mycompany",children:"Log in to MyCompany"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open MyCompany web interface in your browser ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"http://your-server-ip:8080",children:"http://your-server-ip:8080"})})]}),"\n",(0,i.jsx)(n.li,{children:"In the open window sign in using login admin without password."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(9205).Z+"",width:"531",height:"367"})}),"\n",(0,i.jsx)(n.h3,{id:"development",children:"Development"}),"\n",(0,i.jsx)(n.p,{children:"Since the project uses Maven, you can use the following algorithm to configure the development environment :"}),"\n",(0,i.jsx)(n.h4,{id:"setting-up-the-environment-and-client-part",children:"Setting up the environment and client part"}),"\n",(0,i.jsxs)(n.p,{children:["Install lsFusion development platform, except for the server part (Server), as described at ",(0,i.jsx)(n.a,{href:"https://docs.lsfusion.org/Development_auto/",children:"https://docs.lsfusion.org/Development_auto/"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"As a password for PostgreSQL preferably use 11111."}),"\n",(0,i.jsx)(n.h4,{id:"configuring-the-server-part",children:"Configuring the server part"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Do Get from VCS in the start menu or Git / Clone, using ",(0,i.jsx)(n.a,{href:"https://github.com/lsfusion-solutions/mycompany.git",children:"https://github.com/lsfusion-solutions/mycompany.git"})," as the source ."]}),"\n",(0,i.jsx)(n.li,{children:"Wait for IntelliJ IDEA to create the project and download all dependencies using Maven (may take a few minutes)."}),"\n",(0,i.jsx)(n.li,{children:"Check that Java Development Kit has been successfully found. To do this, go to File / Project Structure form and check that Project / SDK field is set."}),"\n",(0,i.jsxs)(n.li,{children:["Create the configuration for running the lsFusion server. To do this, in Run / Edit Configurations form you need to click ",(0,i.jsx)(n.strong,{children:"+"}),", and then select lsFusion Server. Verify that Working Directory points to the folder where pom.xml is located."]}),"\n",(0,i.jsxs)(n.li,{children:["Run server through Run / Run ",(0,i.jsx)(n.code,{children:"<configuration name>"})," menu item."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"building-a-jar-file-to-run-on-the-server",children:"Building a jar file to run on the server"}),"\n",(0,i.jsx)(n.p,{children:"After making changes to the application source code to build the final jar file, you need to :"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In File / Project Structure form you need to go to Artifacts item and press ",(0,i.jsx)(n.strong,{children:"+"})," button and select Jar / Empty project."]}),"\n",(0,i.jsx)(n.li,{children:"In Output Directory field choose the directory where you want to place the assembled jar file."}),"\n",(0,i.jsx)(n.li,{children:"From Available Elements list transfer the 'mycompany' compile output element to the jar file. Then press OK."}),"\n",(0,i.jsx)(n.li,{children:"Then select Build / Build artifacts in the menu item. Then select Build."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"With the artifact you can replace the old file, which is on the server in the folder /var/lib/lsfusion or C:\\Program Files\\lsFusion 6\\Server\\lib, and restart the service on the server."})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9205:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/Installation_1-f7adc5a7851d3e8ed0e44ac808e41dfb.png"},65:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var o=t(7294);let i={},r=o.createContext(i);function s(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);