(this["webpackJsonpreact-card-app"]=this["webpackJsonpreact-card-app"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},59:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n.n(r),s=n(22),i=n.n(s),l=(n(36),n(37),n(11)),o=n.n(l),d=n(12),j=n(23),u=n(24),h=n(25),x=n(29),m=n(28),p=n(26),b=n.n(p),f=n(27),O=n.n(f),g=(n(59),n(63)),v=function(e){var t=e.filterText,n=e.onChange;return Object(a.jsx)(g.a.Control,{className:"mb-2 mr-sm-2",id:"searchInput",placeholder:"Search Name",value:t,onChange:n})},C=n(64),y=function(e){var t=e.data,n=t.imageUrl,r=t.name,c=t.text,s=t.setName,i=t.type;return Object(a.jsxs)(C.a,{children:[Object(a.jsx)(C.a.Img,{variant:"top",src:n,style:{maxWidth:"250px"}}),Object(a.jsxs)(C.a.Body,{children:[Object(a.jsx)(C.a.Title,{children:r}),Object(a.jsxs)(C.a.Text,{children:["Text: ",c]}),Object(a.jsxs)(C.a.Text,{children:["Set: ",s]}),Object(a.jsxs)(C.a.Text,{children:["Type: ",i]})]})]})},T=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={filter:"",error:null,items:[],nextUrl:null,hasMoreItems:!0},e.loadCards=Object(j.a)(o.a.mark((function t(){var n,a,r,c,s,i,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.state.nextUrl||"https://api.elderscrollslegends.io/v1/cards",e.state.nextUrl||(a={params:{pageSize:20}}),t.next=5,b.a.get(n,a);case 5:r=t.sent,c=r.data,s=c.cards,i=c._links,l=s.map((function(e){return{name:e.name,text:e.text,imageUrl:e.imageUrl,type:e.type,setName:e.set.name}})),e.setState((function(e){return{items:[].concat(Object(d.a)(e.items),Object(d.a)(l)),nextUrl:i.next,hasMoreItems:void 0!==i.next}})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),e.setState({error:t.t0});case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),e.handleFilterChange=function(t){e.setState({filter:t.target.value})},e}return Object(h.a)(n,[{key:"render",value:function(){var e,t=this.state,n=t.filter,r=t.error,c=t.items,s=t.nextUrl,i=t.hasMoreItems,l=""===n.trim()?c:c.filter((function(e){var t=e.name;return new RegExp("".concat(n),"i").test(t)}));return 0===l.length&&s&&(e=Object(a.jsx)("div",{children:"No Names Found"})),r?Object(a.jsxs)("div",{children:["Error: ",r]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{filterText:n,onChange:this.handleFilterChange}),Object(a.jsx)(O.a,{pageStart:0,loadMore:this.loadCards,hasMore:i&&""===n,loader:Object(a.jsx)("div",{className:"loader",children:"Loading..."},0),children:Object(a.jsxs)("div",{className:"card-container",children:[l.map((function(e,t){return Object(a.jsx)(y,{data:e},t)})),e]})})]})}}]),n}(c.a.Component);var N=function(){return Object(a.jsx)("div",{className:"app-container",children:Object(a.jsx)(T,{})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(61);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.305bd9de.chunk.js.map