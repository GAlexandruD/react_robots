(this.webpackJsonpreact_robots=this.webpackJsonpreact_robots||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),o=(n(12),n(2)),i=n(3),h=n(5),l=n(4),u=(n(13),n(14),n(0)),b=function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"1px solid grey",height:"800px"},children:e.children})},j=function(e){var t=e.id,n=e.name,r=e.email;return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"Profile"}),Object(u.jsx)("h1",{children:n}),Object(u.jsx)("p",{children:r})]})},d=function(e){var t=e.props;return t.map((function(e,n){return Object(u.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))},f=function(e){var t=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t})})},p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Ooopps! That is not good."}):this.props.children}}]),n}(r.Component),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({search_field:t.target.value})},e.state={active_robots:[],search_field:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({active_robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.active_robots.filter((function(t){return t.name.toLowerCase().includes(e.state.search_field.toLowerCase())}));return 0===this.state.active_robots.length?Object(u.jsx)("h1",{className:"tc",children:"Loading..."}):Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",id:"title",children:"Robofriends"}),Object(u.jsx)(f,{searchChange:this.onSearchChange}),Object(u.jsx)(b,{children:Object(u.jsx)(p,{children:Object(u.jsx)(d,{props:t})})})]})}}]),n}(r.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.e7bb38d5.chunk.js.map