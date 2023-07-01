"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={authors:"kanekotic",title:"Replace Docker Desktop with Podman in OSX",tags:["devops","docker","softwaredevelopment"],description:"a how to tutorial migrate from docker desktop to podman in OSX",draft:!1,published:new Date("2023-07-01T08:34:37.867Z"),cover_image:"https://raw.githubusercontent.com/kanekotic/kanekotic-page/main/static/img/docker-desktop.png",series:"OSX How To..."},i=void 0,l={permalink:"/blog/2023/06/30/replacement-docker-desktop-with-podman-in-osx",editUrl:"https://github.com/kanekotic/kanekotic-page/tree/main/blog/2023-06-30-replacement-docker-desktop-with-podman-in-osx.md",source:"@site/blog/2023-06-30-replacement-docker-desktop-with-podman-in-osx.md",title:"Replace Docker Desktop with Podman in OSX",description:"a how to tutorial migrate from docker desktop to podman in OSX",date:"2023-06-30T00:00:00.000Z",formattedDate:"June 30, 2023",tags:[{label:"devops",permalink:"/blog/tags/devops"},{label:"docker",permalink:"/blog/tags/docker"},{label:"softwaredevelopment",permalink:"/blog/tags/softwaredevelopment"}],readingTime:2.825,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/kanekotic",imageURL:"https://github.com/kanekotic.png",key:"kanekotic"}],frontMatter:{authors:"kanekotic",title:"Replace Docker Desktop with Podman in OSX",tags:["devops","docker","softwaredevelopment"],description:"a how to tutorial migrate from docker desktop to podman in OSX",draft:!1,published:"2023-07-01T08:34:37.867Z",cover_image:"https://raw.githubusercontent.com/kanekotic/kanekotic-page/main/static/img/docker-desktop.png",series:"OSX How To..."},nextItem:{title:"Continious Delivery Bootcamp:  Continuous Integration",permalink:"/blog/2023/04/24/continious-delivery-bootcamp-continuous-integration"}},s={authorsImageUrls:[void 0]},c=[{value:"Why would I do this?",id:"why-would-i-do-this",level:2},{value:"What is podman?",id:"what-is-podman",level:2},{value:"Migration Steps",id:"migration-steps",level:2},{value:"1. Clean-up Docker Desktop (Optional)",id:"1-clean-up-docker-desktop-optional",level:3},{value:"2\ufeff. Install Homebrew",id:"2-install-homebrew",level:3},{value:"3\ufeff. Install Podman",id:"3-install-podman",level:3},{value:"4. Use podman-mac-help",id:"4-use-podman-mac-help",level:3},{value:"5. Install Podman Desktop (Optional)",id:"5-install-podman-desktop-optional",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"why-would-i-do-this"},"Why would I do this?"),(0,a.kt)("p",null,"D\ufeffocker-desktop is a paid product, their licensing mode is by user, and it provides value not for the software side but for their cloud offering (registry, etc). For this, if the intent of you're a company is to use containers locally to facilitate software development,  the cost tends to be high."),(0,a.kt)("h2",{id:"what-is-podman"},"What is podman?"),(0,a.kt)("p",null,"Podman (short for Pod Manager) is an open-source, Linux-native tool designed to develop, manage, and run containers and container images. It offers a Docker-compatible command-line interface (CLI) that does not rely on a daemon, but directly interacts with the Image registry, container, and image storage, and container process operations."),(0,a.kt)("h2",{id:"migration-steps"},"Migration Steps"),(0,a.kt)("h3",{id:"1-clean-up-docker-desktop-optional"},"1. Clean-up Docker Desktop (Optional)"),(0,a.kt)("p",null," \ufeffyou will need to run the next ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker-archive/toolbox/blob/master/osx/uninstall.sh"},"bash script")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\n# Uninstall Script\n\nif [ "${USER}" != "root" ]; then\n    echo "$0 must be run as root!"\n    exit 2\nfi\n\nwhile true; do\n  read -p "Remove all Docker Machine VMs? (Y/N): " yn\n  case $yn in\n    [Yy]* ) docker-machine rm -f $(docker-machine ls -q); break;;\n    [Nn]* ) break;;\n    * ) echo "Please answer yes or no."; exit 1;;\n  esac\ndone\n\necho "Removing Applications..."\nrm -rf /Applications/Docker.app\n\necho "Removing docker binaries..."\nrm -f /usr/local/bin/docker\nrm -f /usr/local/bin/docker-machine\nrm -r /usr/local/bin/docker-machine-driver*\nrm -f /usr/local/bin/docker-compose\n\necho "Removing boot2docker.iso"\nrm -rf /usr/local/share/boot2docker\n\necho "Forget packages"\npkgutil --forget io.docker.pkg.docker\npkgutil --forget io.docker.pkg.dockercompose\npkgutil --forget io.docker.pkg.dockermachine\npkgutil --forget io.boot2dockeriso.pkg.boot2dockeriso\n\necho "All Done!"\n')),(0,a.kt)("h3",{id:"2-install-homebrew"},"2\ufeff. Install Homebrew"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," is the defacto command line package manager for OSX, if you don't have it is very recommendable to have it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("h3",{id:"3-install-podman"},"3\ufeff. Install Podman"),(0,a.kt)("p",null,"On Mac, each Podman machine is backed by a\xa0",(0,a.kt)("a",{parentName:"p",href:"https://www.qemu.org/"},"QEMU"),"\xa0based virtual machine. Once installed, the podman command can be run directly from the Unix shell in\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Terminal"),", where it remotely communicates with the podman service running in the Machine VM."),(0,a.kt)("p",null,"For Mac, Podman is provided through\xa0",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),". Once you have set up brew, you can use the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"brew install"),"\xa0command to install Podman:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew install podman\n")),(0,a.kt)("p",null,"Next, create and start your first Podman machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"podman machine init\npodman machine start\n")),(0,a.kt)("p",null,"You can then verify the installation information using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"podman info\n")),(0,a.kt)("p",null,"At this point, podman should have created a proxy file in ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/docker"),", if it does not exist you will have to create it with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim /usr/local/bin/docker\n")),(0,a.kt)("p",null,"a\ufeffdd in that file the content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/sh\n[ -e /etc/containers/nodocker ] || \\\necho "Emulate Docker CLI using podman. Create /etc/containers/nodocker to quiet msg." >&2\nexec podman "$@"\n')),(0,a.kt)("p",null,"t\ufeffhe script needs to be made executable by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"chmod +x /usr/local/bin/docker\n")),(0,a.kt)("p",null,"y\ufeffou should now be able to run a docker as normal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it docker.io/hello-world\n")),(0,a.kt)("h3",{id:"4-use-podman-mac-help"},"4. Use podman-mac-help"),(0,a.kt)("p",null,"Y\ufeffou should consider using\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"podman-mac-help"),"\xa0to migrate transparently to Podman on macOS."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Continue using familiar Docker commands."),(0,a.kt)("li",{parentName:"ul"},"Take advantage of the benefits of Podman on macOS."),(0,a.kt)("li",{parentName:"ul"},"Your tools, such as\xa0",(0,a.kt)("a",{parentName:"li",href:"https://maven.apache.org/"},"Maven"),"\xa0or\xa0",(0,a.kt)("a",{parentName:"li",href:"https://www.testcontainers.org/"},"Testcontainers"),", communicate with Podman without reconfiguration.")),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"podman-mac-helper"),"\xa0tool provides a compatibility layer that allows you to use most Docker commands with Podman on macOS. The service redirects\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"/var/run/docker"),"\xa0to the fixed user-assigned UNIX socket location."),(0,a.kt)("p",null,"T\ufeffo enable this, you just need to run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo podman-mac-helper install\n")),(0,a.kt)("h3",{id:"5-install-podman-desktop-optional"},"5. Install Podman Desktop (Optional)"),(0,a.kt)("p",null,"Finally, to have a better compatibility and a UI to work with as with docker desktop, you can install ",(0,a.kt)("a",{parentName:"p",href:"https://podman-desktop.io/"},"Podman desktop"),"b\ufeffy running: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install podman-desktop\n")))}d.isMDXComponent=!0}}]);