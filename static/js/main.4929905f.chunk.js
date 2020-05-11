(this.webpackJsonpzonalmaps=this.webpackJsonpzonalmaps||[]).push([[0],{104:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(29),r=a.n(o),l=(a(96),a(26)),i=a(23),c=a(197),m=a(196),d=a(88),p=a(67),u=a(32),h=a(41),b=a(16),g=a(11),f=a(14),E=a(84),v=(a(104),function(){return s.a.createElement(p.a,{variant:"dark",bg:"dark",className:"rounded mb-4 flex-column flex-md-row"},s.a.createElement(b.LinkContainer,{to:"/"},s.a.createElement(p.a.Brand,{className:"align-self-start"},s.a.createElement(g.a,{icon:f.h,size:"lg",className:"mr-2"}),"Zonal Maps")),s.a.createElement(u.a,{className:"mr-auto flex-column flex-md-row"},s.a.createElement(b.LinkContainer,{exact:!0,to:"/"},s.a.createElement(u.a.Link,null,"How to use")),s.a.createElement(h.a,{title:"Examples",id:"basic-nav-dropdown"},s.a.createElement(b.LinkContainer,{to:"/example/1"},s.a.createElement(h.a.Item,null,"Example Map 1")),s.a.createElement(b.LinkContainer,{to:"/example/2"},s.a.createElement(h.a.Item,null,"Example Map 2")),s.a.createElement(b.LinkContainer,{to:"/example/3"},s.a.createElement(h.a.Item,null,"Example Map 3"))),s.a.createElement(b.LinkContainer,{to:"/embed"},s.a.createElement(u.a.Link,{active:!1},"Get embed code"))),s.a.createElement(u.a,{className:"align-self-start"},s.a.createElement(u.a.Link,{href:"https://github.com/evaldasstu/zonalmaps"},s.a.createElement(g.a,{icon:E.a,className:"mr-1"}),"GitHub")))}),y=a(3),w=a.n(y),x=a(200),k=a(85),S=a.n(k);a(186);function C(e,t){return"string"===typeof t?e+t:n.Children.toArray(t.props.children).reduce(C,e)}function z(e){var t=e.level,a=e.children,s=n.Children.toArray(a).reduce(C,"").toLowerCase().replace(/\W/g,"-");return Object(n.createElement)("h".concat(t),{id:s},a)}function N(e){var t=e.value,a=(new DOMParser).parseFromString(t,"text/html"),s=a.images[0].src.replace("public/",""),o=a.images[0].width;return Object(n.createElement)("img",{src:s,width:o,className:"img-fluid mb-4"})}z.propTypes={level:w.a.number.isRequired,children:w.a.arrayOf(w.a.object).isRequired},N.propTypes={value:w.a.string.isRequired};var j=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"How to use"),s.a.createElement(x.a,{className:"how-to-use"},s.a.createElement(x.a.Body,null,s.a.createElement(S.a,{source:'# Zonal Maps\n> https://evaldasstu.github.io/zonalmaps\n\n## Overview\n\nZonal Maps creates embeddable maps with location markers using data from [Google Sheets](https://www.google.com/sheets/about/) spreadsheets. It has a powerful **zoning feature** which allows assigning object sets to geographical areas and automatically displays boundaries of such zones.\n\nTo do: add zoning visual?\n\nThis project was developed to simplify a process of creating commercial real estate property maps and to provide an easy to learn and convenient way of content update.\n\nZonal Maps is built with [React](https://reactjs.org) and uses map data provided by [OpenStreetMap contributors](https://www.openstreetmap.org/copyright).\n\nTo do: add visuals.\n\n## Prepare a spreadsheet\n\n[Create a spreadsheet](https://sheet.new/) on Google Sheets. To do: add more.\n\n### Spreadsheet specification\n\nThe simplest possible spreadsheet that could be understood by Zonal Maps would look like this:\n\n<img src="./public/readme/spreadsheet-screenshot-927427.png" alt="Spreadsheet screenshot" width="175" />\n\nPasting a link to this spreadhsheat into [Get embed code](https://evaldasstu.github.io/zonalmaps/embed) form would result a map centered around a single marked point. `Coordinates` is the only required *attribute* in the spreadsheet, but there can be more of them.\n\nAttributes can be freely named, except `Coordinates` and `Zone`, which are [*special attributes*.](#special-attributes). All attributes must reside in spreadsheet\'s Row 1. Each subsequent row represents a location displayed on the map. There is no need for a list numbering attribute, as numbers are assigned automatically.\n\nThis is an example of a bit more complex spreadsheet, which includes [`Zone`](#zone), another special attribute:\n\n<img src="./public/readme/spreadsheet-screenshot-374628.png" alt="Spreadsheet screenshot" width="588" />\n\nIf there is a need for embedding maps into multilingual websites, additional sheet, called `Translations` will have to be created in the same spreadsheet. In this case, the main sheet will have to be named `Data`. Otherwise, it can keep *Sheet 1* or any other name. More on translating, check [Multilingual embeds](#multilingual-embeds) below.\n\n#### Special attributes\n\nSpecial attribute names are presented in uppercase form to keep consistency with custom attributes, however they are case\u2013insensitive. Special attributes are not displayed in location lists. \n\n| Special attribute | Required | Example value             |\n|:------------------|:---------|:--------------------------|\n| `Coordinates`     | +        | `54.698415, 25.271016`    | \n| `Zone`            |          | Central Business District |\n\n##### `Coordinates`\n\nGeographical coordinates are expected to be provided in Decimal degrees (DD) format. First number is for latitude, second is for longitude. For the example above, numbers for the example value have been conveniently copied from Google Maps, however four decimal places (`54.6984, 25.2710`) would suffice for most practical purposes. Space between latitude and longitude is optional, numbers must be comma\u2013separated.\n\n##### `Zone`\n\nThis attribute is used to assign objects to groups for displaying boundaries around geographic areas.\n\nTo do: add more.\n\n#### Spreadsheet\'s sheets\n\n| Sheet name     | Required | Notes                                              |\n|:---------------|:---------|:---------------------------------------------------|\n| `Data`         | +        | Can have any name when no other sheets are present | \n| `Translations` |          | See [Multilingual embeds](#multilingual-embeds)    |\n\n### Share the spreadsheet\n\nIn Google Sheets, choose **File** > **Share**, select **Copy link** and change **Restricted** to **Anyone with the link** to allow the spreadsheet to be publicly readable. The spreadsheet will have to remain public for the embed to work.\n\n## Get embed code\n\nNavigate to [Get Embed Code](https://evaldasstu.github.io/zonalmaps/embed) to access the embed code generator. To do: add more on pasting the link and something more.\n\n### Embed format\n\nExpanding **Customize embed** panel and choosing **Format** allows to choose from two different options: **iframe** and **oEmbed**.\n\n*Note:* In [WordPress](https://wordpress.org) websites, *iframe* method works out of the box. *oEmbed* can also be used, but one additional configuration step needs to be taken. Check [Embedding in WordPress](#embedding-in-wordpress) below for more info.\n\n#### iframe\n\n*iframe* embed is a versatile time\u2013tested format. It should be relatively easy to use such embed code by adding it if you have access to website\'s HTML code. `<style>` tag is included in the embed code to make the content responsively fit its container.\n\n##### iframe embed code example:\n\n> `<div class="zm"><iframe src="https://evaldasstu.github.io/zonalmaps/embed/1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM" frameborder="0"></iframe><style>.zm {position: relative; padding-bottom: 150%; height: 0; overflow: hidden; max-width: 100%} .zm iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%}</style></div>`\n\n#### oEmbed\n\n*oEmbed* is a newer standard which lets embedding content into compatible websites and platforms using a shorter and simpler code snippet, which is a simple URL of embeddable content. This method is supported in some environments, e.g. in [Squarespace](https://squarespace.com) websites. More on this open standard can be found [here](https://oembed.com/).\n\n##### oEmbed embed code example:\n\n> `https://evaldasstu.github.io/zonalmaps/embed/1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM`\n\n### Additional options\n\n#### Language\n\nBy default, Zonal Maps outputs a user interface in English. However, this can be changed by choosing **Customize embed** and selecting **Language**.\n\nSee [Multilingual embeds](#multilingual-embeds) for details.\n\n#### Display location list\n\nBy default, Zonal Maps displays a location list as a sortable table below the map. If this functionality is not needed, list display can be turned off by choosing **Customize embed** and unchecking **Display location list**.\n\n## Use embed code\n\n### Embedding in WordPress\n\n#### iframe format\n\nTo add an embed to a [WordPress](https://wordpress.org) website using Block Editor (default since version 5.0), add a **Custom HTML** block and paste the embed code.\n\nWhen using the Classic Editor or pre\u2013Gutenberg WordPress, switch to **Text** tab of the editor and paste the embed code.\n\n#### oEmbed format\n\nWordPress supports *oEmbed* format and automatically displays content from selected websites by converting URLs into content objects straight in the editor. However, it uses an internal whitelist of trusted websites for this feature. To enable *oEmbed* for Zonal Maps, add this line to `functions.php` file of your theme:\n\n> `wp_oembed_add_provider( \'https://evaldasstu.github.io/zonalmaps/embed/*\', \'https://evaldasstu.github.io/zonalmaps/oembed\', false );`\n\nTo do: check syntax.\n\n## Multilingual embeds\n\nIf there is a need to offer map versions in more than one language, it is possible to provide attribute translations in the same spreadsheet. In such case, the main sheet of the spreadsheet containing the list of locations will have to be named `Data`, while another sheet named `Translations` will have to be created.\n\nOpen [this spreadsheet](https://docs.google.com/spreadsheets/d/1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM/edit?usp=sharing), which is the source for [Example 1](https://evaldasstu.github.io/zonalmaps/example/1) and check `Translations` sheet to see how multilingual map versions can be implemented.\n\nWhen [Get embed code](https://evaldasstu.github.io/zonalmaps/embed) form is provided with a link to a spreadsheet containing multilingual attributes, **Language** option gets enabled in **Customize embed** setting panel. All languages that are set in the spreadsheet appear in the dropdown menu.\n\nTo do: more on locale and numbers?\n\n## Browser support\n\n| Desktop              | Mobile             |\n|:---------------------|:-------------------|\n| Chrome               | Chrome             |\n| Firefox              | Firefox            |\n| Safari 5+ (Mac only) | Safari 7+          |\n| Opera 12+            | Android Browser 5+ |\n| IE 10+               |                    |\n| Edge                 |                    |\n\n## Examples\n\n* [Link to Example Map 1](https://evaldasstu.github.io/zonalmaps/example/1)\n* [Link to Example Map 2](https://evaldasstu.github.io/zonalmaps/example/2)\n* [Link to Example Map 3](https://evaldasstu.github.io/zonalmaps/example/3)\n\n## Development\n\nProject source code is stored in a public GitHub repository at https://github.com/evaldasstu/zonalmaps.\n\nThis project is based on Create React App. Standard `npm start`, `npm test`, `npm run build` scripts are available in a Node.js development environment. More on this [here](https://create-react-app.dev/docs/available-scripts).\n\nTo do: add more on integration, branches, GitHub\'s encrypted secrets, Google Sheets API code.\n\n### Deployment\n\nProject\'s `package.json` is configured for deployment to GitHub Pages using `npm run deploy` script.\n\n## Acknowledgements\n\nZonal Maps runs using:\n\n* [React](https://reactjs.org)\n* [OpenStreetMap](https://openstreetmap.org) via [Leaflet](https://leafletjs.com)\n* [Google Sheets API](https://developers.google.com/sheets/api)\n\nAs well as with the help of [Bootstrap](https://getbootstrap.com), [Sass](https://sass-lang.com), [react-spring](https://www.react-spring.io/), [Jest](https://jestjs.io) and other packages. For full list, check the [dependency graph](https://github.com/evaldasstu/zonalmaps/network/dependencies).\n\n## License\n\nZonal Maps is open source software licensed under the MIT license.  \nCopyright \xa9 2020 Evaldas Stulgaitis\n',renderers:{heading:z,html:N}}))))},L=a(8),O=a(86),G=a(198),M=a(87),T=a(27),H=(a(187),{stretch:{mass:.2,tension:150,friction:10},fade:{tension:100}}),I=function(e){var t=e.children,a=e.isExpanded,o=function(){var e=Object(n.useRef)(),t=Object(n.useState)({left:0,top:0,width:0,height:0}),a=Object(L.a)(t,2),s=a[0],o=a[1],r=Object(n.useState)((function(){return new M.a((function(e){var t=Object(L.a)(e,1)[0];return o(t.contentRect)}))})),l=Object(L.a)(r,1)[0];return Object(n.useEffect)((function(){return e.current&&l.observe(e.current),function(){return l.disconnect()}}),[l]),[{ref:e},s]}(),r=Object(L.a)(o,2),l=r[0],i=r[1].height,c=Object(T.b)({from:{height:0},to:{height:a?i:0},config:H.stretch}).height,m=Object(T.b)({from:{opacity:0},to:{opacity:a?1:0},config:H.fade}).opacity;return s.a.createElement(T.a.div,{style:{height:c,opacity:m},className:"zm-animated-container"},s.a.createElement("div",{ref:l.ref},t))};I.defaultProps={children:null};var R=I,B=a(199),P=(a(188),{danger:s.a.createElement(g.a,{icon:f.d}),info:s.a.createElement(g.a,{icon:f.g,spin:!0}),warning:s.a.createElement(g.a,{icon:f.e}),success:s.a.createElement(g.a,{icon:f.a})}),F=function(e){var t=e.type,a=e.text;return s.a.createElement(B.a,{variant:t,className:"d-flex"},P[t],a)},Z=function(e){var t=e.type,a=e.text,o=e.dismiss,r=Object(n.useRef)(),l=Object(T.b)((function(){return{from:{right:"100%"},to:{right:"0%"},config:{duration:3e3},onRest:function(){r.current&&o()}}})),i=Object(L.a)(l,2),c=i[0],m=i[1];return s.a.createElement(B.a,{variant:t,ref:r,className:"d-flex",dismissible:!0,onClose:function(){m({config:{duration:200}})}},P[t],a,s.a.createElement(T.a.div,{className:"zm-progress-bar",style:c}))};Z.defaultProps={dismiss:function(){}};var D=a(66),U=(a(189),function(e){var t=e.embedCode,a=Object(n.useState)(!1),o=Object(L.a)(a,2),r=o[0],l=o[1],i=Object(n.useRef)();return s.a.createElement(s.a.Fragment,null,r&&s.a.createElement(R,{isExpanded:r},s.a.createElement(Z,{type:"success",text:"Embed code copied to clipboard.",dismiss:function(){return l(!1)}})),s.a.createElement("code",null,s.a.createElement(G.a.Label,{htmlFor:"embedCode",srOnly:"true"},"Embed code"),s.a.createElement(G.a.Control,{id:"embedCode",as:"textarea",value:t||"Waiting for a Google Sheets link...",rows:"5",readOnly:!0,ref:function(e){i=e}})),t?s.a.createElement(b.LinkContainer,{to:"#"},s.a.createElement(x.a.Link,{onClick:function(){i.select(),document.execCommand("copy"),l(!0)},className:"d-block mt-4"},"Copy to clipboard",s.a.createElement(g.a,{icon:D.a,size:"xs"}))):s.a.createElement(x.a.Link,{className:"d-block mt-4"},"Copy to clipboard",s.a.createElement(g.a,{icon:D.a,size:"xs"})))});U.defaultProps={embedCode:""};var A=U,J=function(e){var t=e.spreadsheetId,a=e.format,n=void 0===a?"iframe":a,s=e.language,o=void 0===s?"en":s,r=e.displayList,l=void 0===r?"true":r,i="".concat(window.location.origin).concat("/zonalmaps","/embed/").concat(t),c="";return l?"en"!==o&&(c="?lang=".concat(o)):c="?list=0",l||"en"===o||(c="?list=0&lang=".concat(o)),i="".concat(i).concat(c),i="iframe"===n?"".concat('<div class="zm"><iframe src="').concat(i).concat('" frameborder="0"></iframe><style>.zm {position: relative; padding-bottom: 150%; height: 0; overflow: hidden; max-width: 100%} .zm iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%}</style></div>'):i,t?i:null},W={invalidUrl:{type:"danger",text:"Input does not seem to be a valid Google Sheets URL."},progress:{type:"info",text:"Connecting to Google Sheets..."},warning:{type:"warning",text:"Input does not seem to be a valid Google Sheets URL."},success:{type:"success",text:"Spreadsheet data received successfully."}},_=function(){var e=Object(n.useState)(""),t=Object(L.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),l=Object(L.a)(r,2),i=l[0],c=l[1],p=Object(n.useState)(""),u=Object(L.a)(p,2),h=u[0],E=u[1],v=Object(n.useState)(!1),y=Object(L.a)(v,2),w=y[0],k=y[1],S=Object(n.useState)("iframe"),C=Object(L.a)(S,2),z=C[0],N=C[1],j=Object(n.useState)("en"),M=Object(L.a)(j,2),T=M[0],H=M[1],I=Object(n.useState)(!0),B=Object(L.a)(I,2),P=B[0],Z=B[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Get embed code"),s.a.createElement(x.a,null,s.a.createElement(x.a.Header,null,s.a.createElement("strong",null,"Step 1:")," Prepare a spreadsheet"),s.a.createElement(x.a.Body,null,s.a.createElement(x.a.Text,null,"Create a Google Sheets spreadsheet and fill it with data according to the"," ",s.a.createElement(O.HashLink,{to:"/#spreadsheet-specification"},"specification"),"."),s.a.createElement(x.a.Text,null,"Choose ",s.a.createElement("strong",null,"File")," > ",s.a.createElement("strong",null,"Share"),", select"," ",s.a.createElement("strong",null,"Copy link")," and change ",s.a.createElement("strong",null,"Restricted")," to"," ",s.a.createElement("strong",null,"Anyone with the link")," in Google Sheets to allow the spreadsheet to be publicly readable."))),s.a.createElement(x.a,{className:"mt-3"},s.a.createElement(x.a.Header,null,s.a.createElement("strong",null,"Step 2:")," Generate embed code"),s.a.createElement(x.a.Body,null,s.a.createElement(R,{isExpanded:Boolean(h)},h?s.a.createElement(F,{type:W[h].type,text:W[h].text}):null),s.a.createElement(G.a,{onSubmit:function(e){e.preventDefault()}},s.a.createElement(G.a.Label,{htmlFor:"spreadsheetUrl"},"Paste a public spreadsheet link here:"),s.a.createElement(G.a.Control,{id:"spreadsheetUrl",value:a,onChange:function(e){o(e.target.value);var t=RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(e.target.value);t=t?t[1]:null,e.target.value&&t?E("progress"):e.target.value&&!i?E("invalidUrl"):E(null),c(t)},type:"text",placeholder:"Enter URL"})),s.a.createElement(R,{isExpanded:w},s.a.createElement(x.a,{bg:"light border-0 mt-3"},s.a.createElement(x.a.Body,null,s.a.createElement(G.a,null,s.a.createElement(m.a,null,s.a.createElement(d.a,{xs:4,lg:"auto",className:"my-auto"},s.a.createElement(G.a.Label,{htmlFor:"format",className:"mb-0"},"Format:")),s.a.createElement(d.a,{xs:8,lg:3},s.a.createElement(G.a.Control,{id:"format",as:"select",onChange:function(e){return N(e.target.value)}},s.a.createElement("option",{value:"iframe"},"iframe"),s.a.createElement("option",{value:"oembed"},"oEmbed"))),s.a.createElement(d.a,{lg:!0}),s.a.createElement(d.a,{xs:12,className:"d-lg-none my-1"}),s.a.createElement(d.a,{xs:4,lg:"auto",className:"my-auto"},s.a.createElement(G.a.Label,{htmlFor:"language",className:"mb-0"},"Language:")),s.a.createElement(d.a,{xs:8,lg:3},s.a.createElement(G.a.Control,{id:"language",as:"select",onChange:function(e){return H(e.target.value)}},s.a.createElement("option",{value:"en"},"English"),s.a.createElement("option",{value:"lt"},"Lithuanian"))),s.a.createElement(d.a,{lg:!0}),s.a.createElement(d.a,{xs:12,className:"d-lg-none my-1"}),s.a.createElement(d.a,{xs:4,className:"my-auto d-lg-none py-2"},s.a.createElement(G.a.Label,{htmlFor:"displayList",className:"mb-0"},"List:")),s.a.createElement(d.a,{xs:8,lg:"auto",className:"my-auto py-2"},s.a.createElement(G.a.Check,{id:"displayList",type:"checkbox",label:"Display location list",checked:P,onChange:function(){Z(!P)}}))))))),s.a.createElement(b.LinkContainer,{to:"#"},s.a.createElement(x.a.Link,{onClick:function(){return k(!w)},className:"d-block mt-4"},"Customize embed",s.a.createElement(g.a,{icon:w?f.c:f.b,size:"xs"}))))),s.a.createElement(x.a,{className:"mt-3"},s.a.createElement(x.a.Header,null,s.a.createElement("strong",null,"Step 3:")," Copy generated code"),s.a.createElement(x.a.Body,null,s.a.createElement(A,{embedCode:J({spreadsheetId:i,format:z,language:T,displayList:P})}))))},q=function(){var e=Object(i.m)().embedParams;return s.a.createElement("div",{className:"temp-border"},"Embed params:",e)},Q=(a(190),function(){var e=Object(i.m)().exampleNo,t=[{title:"Example 1 Title",spreadsheetId:"1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM",spreadsheetPublishUrl:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg/pubhtml"},{title:"Example 2 Title",spreadsheetId:"1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM",spreadsheetPublishUrl:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg/pubhtml"},{title:"Example 3 Title",spreadsheetId:"1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM",spreadsheetPublishUrl:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg/pubhtml"}][e-1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Example ",e,s.a.createElement("br",null),s.a.createElement("small",{className:"text-muted"},t.title)),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:J({spreadsheetId:t.spreadsheetId})}}),s.a.createElement(x.a,{className:"mt-4"},s.a.createElement(x.a.Header,null,"Embed code"),s.a.createElement(x.a.Body,null,s.a.createElement(A,{embedCode:J({spreadsheetId:t.spreadsheetId})}))),s.a.createElement(x.a,{className:"mt-4"},s.a.createElement(x.a.Header,null,"Source spreadsheet"),s.a.createElement(x.a.Body,null,s.a.createElement("div",{className:"spreadsheetEmbed"},s.a.createElement("iframe",{title:"Source data",src:t.spreadsheetPublishUrl})),s.a.createElement(x.a.Link,{href:"#",className:"d-block mt-4"},"Open in Google Sheets",s.a.createElement(g.a,{icon:f.f,size:"xs"})))))}),X=function(){return s.a.createElement(l.BrowserRouter,{basename:"/zonalmaps"},s.a.createElement(i.g,null,s.a.createElement(i.d,{path:"/embed/:embedParams"},s.a.createElement(q,null)),s.a.createElement(i.d,{path:"/"},s.a.createElement(c.a,{className:"my-4"},s.a.createElement(m.a,{className:"justify-content-center"},s.a.createElement(d.a,{xl:10},s.a.createElement(v,null),s.a.createElement(i.g,null,s.a.createElement(i.d,{exact:!0,path:"/"},s.a.createElement(j,null)),s.a.createElement(i.d,{path:"/example/:exampleNo"},s.a.createElement(Q,null)),s.a.createElement(i.d,{exact:!0,path:"/embed"},s.a.createElement(_,null)))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a(191)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.4929905f.chunk.js.map