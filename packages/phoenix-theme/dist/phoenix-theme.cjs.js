var e=require("react"),t=require("prop-types"),n=require("styled-components"),r=require("react-helmet");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(e),a=o(t),l=Object.freeze({white:"#ffffff",whiteLight:"#e8e8e8",gray:"#dddddd",grayMedium:"#eeeeee",grayBold:"#efefef",pinkishGrey:"#bbbbbb",pinkishGreyMedium:"#d0d0d0",turquoiseGreen:"#00ff7f",turquoiseGreenLight:"#c6ffd4",black:"#000000",blackMedium:"#191919",greyishBrown:"#454545",greybolt:"#545a62",warmGrey:"#777777",warmGreyMedium:"#888888",mintyGreen:"#07ea7d",greenBlue:"#00cc83",ice:"#f0fff7",seaGreen:"#4ef399",seaGreenLight:"#f0fff7",error:"#e6231b",sunflowerYellow:"#ffce00",checkbox:"#43f596",facebookBlue:"#4367b4"});function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c=Object.freeze({space:[2,4,8,12,16,24,32,40,48],fontSizes:[12,14,16,18,24,32],colors:l}),d={Colors:l,Theme:Object.freeze(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c))},u=n.css(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}*[hidden]{display:none;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}a{text-decoration:none;color:inherit;}button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;text-align:inherit;outline:none;line-height:inherit;-webkit-appearance:none;}*,*:before,*:after{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}*,*:before,*:after{user-select:none;}p,h1,h2,h3,h4,h5,h6,blockquote,pre,ul,ol,li,table,tr,th,td,input,textarea{user-select:text;}"]);function f(){var e,t,n=(e=["\n  /* Resetting Styles */\n\t","\n\n  /* General */\n\thtml{\n\t\tfont-size: 16px;\n\t}\n  body{\n\t\tfont-family: 'Overpass', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\t\tfont-size: 1em;\n\t}\n\n\tinput::-webkit-outer-spin-button,\n\tinput::-webkit-inner-spin-button {\n\t\t-webkit-appearance: none;\n\t}\n\tdiv::-webkit-scrollbar {\n    -webkit-appearance: none;\n    background: #eeeeee;\n    width: 15px;\n  }\n  div::-webkit-scrollbar-thumb {\n    border-radius: 0;\n    background-color: #777777;\n    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n  }\n  div.thin-scrollbar::-webkit-scrollbar {\n    -webkit-appearance: none;\n    background: transparent;\n    width: 4px;\n  }\n  div.thin-scrollbar::-webkit-scrollbar-thumb {\n    border-radius: 3px;\n    background-color: #d0d0d0;\n    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n  }\n\tul::-webkit-scrollbar {\n    -webkit-appearance: none;\n    background: #eeeeee;\n    width: 7px;\n  }\n  ul::-webkit-scrollbar-thumb {\n    border-radius: 0;\n    background-color: #777777;\n    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return f=function(){return n},n}var p=n.createGlobalStyle(f(),u),h=function(e){var t=e.children;return i.default.createElement(n.ThemeProvider,{theme:d.Theme},i.default.createElement(r.Helmet,null,i.default.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400;600;700;800;900&display=swap",rel:"stylesheet"})),i.default.createElement(p,null),t)};h.propTypes={children:a.default.node.isRequired},module.exports=h;