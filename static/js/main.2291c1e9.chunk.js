(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={form:"ContactForm_form__vJWvo",lable:"ContactForm_lable__2lXba",input:"ContactForm_input__aQ6U0",button:"ContactForm_button__1aNnG"}},,,function(t,e,n){t.exports={list:"ContactList_list__X_bKY",listItem:"ContactList_listItem__15qbU"}},,,function(t,e,n){t.exports={filterInput:"Filter_filterInput__1UOMy",text:"Filter_text__3AxgG"}},,,,function(t,e,n){t.exports={title:"Notification_title__2UIyk"}},,function(t,e,n){t.exports=n(19)},,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),l=n(12),u=n(2),i=n(3),s=n(6),m=n(5),f=n(21),b=n(10),p=n(1),h=n.n(p),v=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.onInputSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number;t.props.onAddContact(a,r),t.setState({name:"",number:""})},t.onInputChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(b.a)({},a,r))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return r.a.createElement("section",{className:h.a.section},r.a.createElement("form",{className:h.a.form,onSubmit:this.onInputSubmit},r.a.createElement("label",{className:h.a.lable},"Name",r.a.createElement("input",{className:h.a.input,type:"text",value:e,onChange:this.onInputChange,name:"name"}),"Number",r.a.createElement("input",{className:h.a.input,type:"number",value:n,onChange:this.onInputChange,name:"number"})),r.a.createElement("button",{className:h.a.button,type:"submit"},"Add contact")))}}]),n}(a.Component),C=n(4),_=n.n(C),d=function(t){var e=t.name,n=t.number,a=t.onRemove;return r.a.createElement("li",{className:_.a.listItem},e," : ",n,r.a.createElement("button",{type:"button",onClick:a},"Delete"))},E=function(t){var e=t.contacts,n=t.onRemoveContact;return r.a.createElement("ul",{className:_.a.list},e.map((function(t){var e=t.name,a=t.number,o=t.id;return r.a.createElement(d,{key:o,name:e,number:a,onRemove:function(){return n(o)}})})))},g=n(7),y=n.n(g),N=function(t){var e=t.onSearchFilter;return r.a.createElement("div",null,r.a.createElement("p",{className:y.a.text},"Find contacts by name"),r.a.createElement("input",{className:y.a.filterInput,type:"text",onChange:function(t){return e(t.target.value)}}))},x=n(11),F=n.n(x),I=function(t){var e=t.title;return r.a.createElement("h2",{className:F.a.title},e)},O=(n(18),function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addContact=function(e,n){if(t.state.contacts.some((function(t){return t.name.toLowerCase()===e.toLowerCase()})))alert("".concat(e," is already exists!"));else{var a={id:Object(f.a)(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[a])}}))}},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.searchFilter=function(e){t.setState({filter:e})},t.getContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getContacts();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(v,{onAddContact:this.addContact}),r.a.createElement("h2",null,"Contacts"),e.length>0?r.a.createElement(N,{value:t,onSearchFilter:this.searchFilter}):r.a.createElement(I,{title:"Please add contact"}),r.a.createElement(E,{contacts:e,onRemoveContact:this.removeContact}))}}]),n}(a.Component));c.a.render(r.a.createElement(O,null),document.querySelector("#root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.2291c1e9.chunk.js.map