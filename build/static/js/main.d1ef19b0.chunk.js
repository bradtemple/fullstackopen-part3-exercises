(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=(t(19),t(2)),l=function(e){var n=e.newFilter,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.addName,t=e.newName,a=e.handleNameChange,u=e.newNumber,o=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:u,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.removeName,t=e.personsToShow;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},e.name,": ",e.number,r.a.createElement("button",{onClick:function(){window.confirm("Delete ".concat(e.name,"?"))?n(e):console.log("".concat(e.name," not deleted"))}},"delete"))})))},s=t(3),d=t.n(s),f="/api/persons",h=function(){return d.a.get(f).then((function(e){return e.data}))},b=function(e){return d.a.post(f,e).then((function(e){return e.data}))},p=function(e){return d.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},v=function(e,n){return d.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notification"},n)},w=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},g=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),s=Object(c.a)(o,2),d=s[0],f=s[1],g=Object(a.useState)(""),N=Object(c.a)(g,2),j=N[0],O=N[1],C=Object(a.useState)(""),S=Object(c.a)(C,2),k=S[0],T=S[1],y=Object(a.useState)(null),F=Object(c.a)(y,2),D=F[0],J=F[1],L=Object(a.useState)(null),x=Object(c.a)(L,2),A=x[0],B=x[1];Object(a.useEffect)((function(){h().then((function(e){u(e)}))}),[]);var I=t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{message:D}),r.a.createElement(w,{message:A}),r.a.createElement(l,{handleFilterChange:function(e){T(e.target.value)},newFilter:k}),r.a.createElement("h3",null,"add a new"),r.a.createElement(i,{addName:function(e){if(e.preventDefault(),t.some((function(e){return e.name===d}))){if(window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===d})).id;v(n,{name:d,number:j}).then((function(e){u(t.map((function(t){return t.id!==n?t:e}))),J("Updated ".concat(d)),setTimeout((function(){J(null)}),5e3),f(""),O("")})).catch((function(e){B(e.response.data.error),setTimeout((function(){B(null)}),5e3),f(""),O("")}))}}else b({name:d,number:j}).then((function(e){u(t.concat(e)),J("Added ".concat(d)),setTimeout((function(){J(null)}),5e3),f(""),O("")})).catch((function(e){B(e.response.data.error),setTimeout((function(){B(null)}),5e3),console.log(e.response.data.error)}))},newName:d,handleNameChange:function(e){f(e.target.value)},newNumber:j,handleNumberChange:function(e){O(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(m,{personsToShow:I,removeName:function(e){var n=e.name,a=e.id;p(a).then((function(){J("Removed ".concat(n)),setTimeout((function(){J(null)}),5e3),u(t.filter((function(e){return e.id!==a})))}))}}))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d1ef19b0.chunk.js.map