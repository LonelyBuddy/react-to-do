(this["webpackJsonpreact-to-do"]=this["webpackJsonpreact-to-do"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(7),i=n.n(o),r=(n(13),n(6)),l=n(8),d=n(2),s=n(0),u=Object(c.createContext)(),a=[{id:1,content:"work out",completed:!1}],j=1,b=function(t){var e=t.children,n=Object(c.useState)(a),o=Object(d.a)(n,2),i=o[0],b=o[1],f={todoList:i,getLengthOfTodoItems:function(){return i.length},addTodoItem:function(t){j++,b([].concat(Object(l.a)(i),[{id:j,content:t,completed:!1}]))},deleteTodoItem:function(t){b((function(e){return e.filter((function(e){return e.id!==t}))}))},completeTodoItem:function(t){b((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e}))}))}};return Object(s.jsx)(u.Provider,{value:f,children:e})},f=function(){return Object(c.useContext)(u)},h=(n(15),function(){return Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{children:"TODO"}),Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",children:Object(s.jsx)("path",{fill:"#FFF",fillRule:"evenodd",d:"M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"})})]})}),m=(n(16),function(){var t=f().addTodoItem,e=Object(c.useState)(""),n=Object(d.a)(e,2),o=n[0],i=n[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.length>0&&(t(o),i(""))},children:[Object(s.jsx)("span",{className:"circle-box"}),Object(s.jsx)("input",{placeholder:"Create a new todo...",type:"text",value:o,onChange:function(t){return i(t.target.value)}})]})}),O=(n(17),function(t){var e=t.toggleClass,n=t.isCompleted,c=t.id,o=f().completeTodoItem;return Object(s.jsx)("div",{onClick:function(){o(c),e()},className:"todo__complete-btn ".concat(n?"completed":null),children:Object(s.jsx)("div",{className:"btn-bg-filler ".concat(n?"completed":null),children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"9",children:Object(s.jsx)("path",{fill:"none",stroke:"#FFF",strokeWidth:"2",d:"M1 4.304L3.696 7l6-6"})})})})}),x=(n(18),function(t){var e=t.id,n=f().deleteTodoItem;return Object(s.jsx)("svg",{className:"todo__delete-btn",onClick:function(){return n(e)},xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",children:Object(s.jsx)("path",{fill:"#494C6B",fillRule:"evenodd",d:"M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"})})}),p=(n(19),function(t){var e=t.todoItem,n=t.isCompleted;return Object(s.jsx)("div",{className:"todo__content ".concat(n?"cross-out":null),children:e})}),g=(n(20),function(t){var e=t.id,n=t.todoItem,o=Object(c.useState)(!1),i=Object(d.a)(o,2),r=i[0],l=i[1];return Object(s.jsxs)("li",{className:"todo",children:[Object(s.jsx)(O,{toggleClass:function(){l(!r)},isCompleted:r,id:e}),Object(s.jsx)(p,{todoItem:n,isCompleted:r}),Object(s.jsx)(x,{id:e})]})}),v=(n(21),function(){var t=f().todoList;return Object(s.jsx)("ul",{className:"todos",children:t.map((function(t){var e=t.id,n=t.content;return Object(s.jsx)(g,{todoItem:n,id:e},e)}))})}),w=function(){return Object(s.jsxs)("main",{children:[Object(s.jsx)(h,{}),Object(s.jsxs)(b,{children:[Object(s.jsx)(m,{}),Object(s.jsx)(v,{})]})]})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),i(t),r(t)}))};i.a.render(Object(s.jsx)(w,{}),document.getElementById("root")),C()}],[[22,1,2]]]);
//# sourceMappingURL=main.b9ed2a06.chunk.js.map