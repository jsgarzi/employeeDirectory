(this["webpackJsonpemployee-tracker"]=this["webpackJsonpemployee-tracker"]||[]).push([[0],{22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r=a(2),c=a(12),n=a.n(c),s=(a(22),a(13)),o=a(14),i=a(17),l=a(16),j=a(15),d=a.n(j),b=function(){return d.a.get("https://randomuser.me/api/?results=25&nat=us")},h=a(0);var u=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"#",children:"Employee Directory"}),Object(h.jsx)("div",{className:"navbar-nav ml-5 mr-auto mb-2 mb-lg-0",children:Object(h.jsx)("a",{className:"nav-link active","aria-current":"page",onClick:e.sort,children:"Sort"})}),Object(h.jsx)("form",{className:"d-flex",children:Object(h.jsx)("input",{onChange:e.search,className:"form-control me-2 mr-2",type:"search",placeholder:"Search","aria-label":"Search"})})]})})})},x=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={incomingData:[],exportingData:[]},e.sort=function(){var t=e.state.exportingData;console.log(e.state.exportingData[0].dob.age),console.log(e.state.exportingData[24].dob.age),t[0].dob.age>t[1].dob.age?t.sort((function(e,t){return e.dob.age-t.dob.age})):t.sort((function(e,t){return t.dob.age-e.dob.age})),e.setState({exportingData:t})},e.search=function(t){t.preventDefault();var a=t.target.value,r=e.state.incomingData.filter((function(e){if(e.name.first.toLowerCase().includes(a.toLowerCase())||e.name.last.toLowerCase().includes(a.toLowerCase()))return e}));e.setState({exportingData:r})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){return e.setState({incomingData:t.data.results,exportingData:t.data.results})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(u,{sort:this.sort,search:this.search}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"First Name"}),Object(h.jsx)("th",{scope:"col",children:"Last Name"}),Object(h.jsx)("th",{scope:"col",children:"Email"}),Object(h.jsx)("th",{scope:"col",children:"Location"}),Object(h.jsx)("th",{scope:"col",children:"Age"})]})}),Object(h.jsx)("tbody",{children:this.state.exportingData.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:t+1}),Object(h.jsx)("td",{children:e.name.first}),Object(h.jsx)("td",{children:e.name.last}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:e.location.state}),Object(h.jsx)("td",{children:e.dob.age})]})}))})]})]})}}]),a}(r.Component);var m=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(x,{})})};a(42);n.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.6c0262ec.chunk.js.map