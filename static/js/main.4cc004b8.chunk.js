(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),c=n.n(l),u=n(1),i=n(2),o=n(4),s=n(3),h=(n(15),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("section",{className:"header"},r.a.createElement("h1",null,"RESTy"))}}]),n}(r.a.Component)),b=n(6),m=n.n(b),d=n(9),E=n(5),p=(n(17),function(e){return Object.keys(e.object).length?r.a.createElement("section",null,r.a.createElement("pre",null,r.a.createElement("code",null,e.object))):r.a.createElement("p",null,"GIMME SOME GOD DAMN POKEMON")}),f=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("section",{class:"urlSection"},r.a.createElement("p",{id:"update"},this.props.method," ",this.props.value),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p,{object:this.props.object})))}}]),n}(r.a.Component),j=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={value:"",method:"GET",object:""},e.handleSubmit=e.handleSubmit.bind(Object(E.a)(e)),e.handleMethod=e.handleMethod.bind(Object(E.a)(e)),e.handleChange=e.handleChange.bind(Object(E.a)(e)),e.handleObjectChange=e.handleObjectChange.bind(Object(E.a)(e)),e}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(d.a)(m.a.mark((function e(t){var n,a,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),e.t0=this.state.method,e.next="GET"===e.t0?4:"POST"===e.t0?14:"PUT"===e.t0?15:"DELETE"===e.t0?16:17;break;case 4:return n=this.state.value,e.next=7,fetch("".concat(n));case 7:return a=e.sent,e.next=10,a.json();case 10:return r=e.sent,l=JSON.stringify(r,null,2),this.handleObjectChange(l),e.abrupt("break",19);case 14:case 15:case 16:return e.abrupt("break",19);case 17:return console.log("Error"),e.abrupt("break",19);case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleMethod",value:function(e){this.setState({method:e})}},{key:"handleObjectChange",value:function(e){this.setState({object:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{class:"main"},r.a.createElement("section",{class:"form"},r.a.createElement("form",{class:"formField",onSubmit:this.handleSubmit},r.a.createElement("label",null,"URL:"),r.a.createElement("input",{type:"text",id:"url",placeholder:"URL",value:this.value,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"GO!"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("section",{class:"methods"},r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return e.handleMethod("GET")},id:"get"},"GET"),r.a.createElement("li",{onClick:function(){return e.handleMethod("POST")},id:"post"},"POST"),r.a.createElement("li",{onClick:function(){return e.handleMethod("PUT")},id:"put"},"PUT"),r.a.createElement("li",{onClick:function(){return e.handleMethod("DELETE")},id:"delete"},"DELETE"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("section",{id:"displayBox"},r.a.createElement(f,{method:this.state.method,value:this.state.value,handleSubmit:this.handleSubmit,handleChange:this.handleObjectChange,object:this.state.object})))}}]),n}(r.a.Component),O=(n(18),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("section",{class:"footer"},r.a.createElement("h3",null,"\xa9 2018 Garhett Morgan"))}}]),n}(r.a.Component)),v=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(j,null),r.a.createElement(O,null))}}]),n}(r.a.Component),k=(n(19),document.getElementById("root"));c.a.render(r.a.createElement(v,null),k)}],[[10,1,2]]]);
//# sourceMappingURL=main.4cc004b8.chunk.js.map