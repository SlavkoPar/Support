(this.webpackJsonpsupport=this.webpackJsonpsupport||[]).push([[0],{137:function(e,t,n){e.exports=n(294)},146:function(e,t,n){},147:function(e,t,n){},160:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),u=n(55),s=n(30),i=n(23),c=n(29),l=n(40),d=n(124),m=n(10),p=n(2),E=n(3),f=n.n(E);!function(e){e.GET_ALL_QUESTIONS="GET_ALL_QUESTIONS",e.GET_QUESTION="GET_QUESTION",e.ADD_QUESTION="ADD_QUESTION",e.EDIT_QUESTION="EDIT_QUESTION",e.REMOVE_QUESTION="REMOVE_QUESTION",e.STORE_QUESTION="STORE_QUESTION",e.CANCEL_QUESTION="CANCEL_QUESTION",e.ADD_GROUP="ADD_GROUP",e.EDIT_GROUP="EDIT_GROUP",e.REMOVE_GROUP="REMOVE_GROUP",e.STORE_GROUP="STORE_GROUP",e.STORE_QUESTIONS_TO_LOCAL_STORAGE="STORE_QUESTIONS_TO_LOCAL_STORAGE"}(r||(r={}));var g,v=function(){return"localStorage"in window},S=function(){return new Promise((function(e,t){setTimeout((function(){e({status:200,"content-type":"application/json",data:{results:1}})}),50)}))},h=function(e){return new Promise((function(t,n){setTimeout((function(){var n=void 0,r=!0,a=!1,o=void 0;try{for(var u,s=I[Symbol.iterator]();!(r=(u=s.next()).done);r=!0){if(void 0!==(n=u.value.questions.find((function(t){return t.questionId===e}))))break}}catch(i){a=!0,o=i}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}t({status:200,"content-type":"application/json",data:{results:n}})}),100)}))},O=function(){return new Promise((function(e,t){setTimeout((function(){e({status:200,"content-type":"application/json",data:{results:I}})}),250)}))},w=function(e){return new Promise((function(t,n){setTimeout((function(){t({status:200,"content-type":"application/json",data:{results:e}})}),50)}))},b="SUPPORT_QUESTIONS",I=[],q=[{groupId:11,title:"General settings",questions:[{groupId:11,questionId:101,text:"Why promocode hasn't been applied?",words:[],answers:[111,112,114]}]},{groupId:22,title:"Taxes",questions:[{groupId:22,questionId:201,text:"Which promocode do we apply?",words:[],answers:[]},{groupId:22,questionId:202,text:"Which promocode for client do we apply?",words:[],answers:[111]}]},{groupId:33,title:"Client settings",questions:[{groupId:33,questionId:301,text:"Does client has promocode?",words:[],answers:[222]},{groupId:33,questionId:302,text:"What promocode do we use?",words:[],answers:[114]},{groupId:33,questionId:303,text:"Why taxes are less than 5%?",words:[],answers:[111,114]},{groupId:33,questionId:304,text:"When do we do something?",words:[],answers:[113]}]}],y={groupId:0,questionId:0,text:"",words:[],answers:[]},x={groupId:0,title:"",questions:[]},T={questionGroups:[],question:void 0,loading:!1,formMode:"display",groupIdEditing:0};!function(e){e.GET_ALL_ANSWERS="GET_ALL_ANSWERS",e.GET_ANSWER="GET_ANSWER",e.ADD_ANSWER="ADD_ANSWER",e.EDIT_ANSWER="EDIT_ANSWER",e.REMOVE_ANSWER="REMOVE_ANSWER",e.STORE_ANSWER="STORE_ANSWER",e.CANCEL_ANSWER="CANCEL_ANSWER",e.STORE_ANSWERS_TO_LOCAL_STORAGE="STORE_ANSWERS_TO_LOCAL_STORAGE"}(g||(g={}));var _=function(){return"localStorage"in window},R=function(){return new Promise((function(e,t){setTimeout((function(){e({status:200,"content-type":"application/json",data:{results:C}})}),50)}))},A=function(e){return new Promise((function(t,n){setTimeout((function(){t({status:200,"content-type":"application/json",data:{results:e}})}),50)}))},N=function(e){return new Promise((function(t,n){setTimeout((function(){t({status:200,"content-type":"application/json",data:{results:e}})}),50)}))},G=function(e){return new Promise((function(t,n){setTimeout((function(){t({status:200,"content-type":"application/json",data:{results:e}})}),50)}))},j="SUPPORT_ANSWERS",C=[],M=[{answerId:111,text:"You should do the following",options:[]},{answerId:112,text:"Also do the rest of important",options:[]},{answerId:113,text:"Try something else",options:[]},{answerId:114,text:"Contact our support",options:[]}],k={answerId:0,text:"",options:[]},L={answers:[],loading:!1,formMode:"display"},U=Object(l.c)({questionState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.GET_ALL_QUESTIONS:var n=!0,a=!1,o=void 0;try{for(var u,s=t.questionGroups[Symbol.iterator]();!(n=(u=s.next()).done);n=!0){var i=u.value,c=!0,l=!1,d=void 0;try{for(var E,f=i.questions[Symbol.iterator]();!(c=(E=f.next()).done);c=!0){var g=E.value;g.words=g.text.split(" ")}}catch(v){l=!0,d=v}finally{try{c||null==f.return||f.return()}finally{if(l)throw d}}}}catch(v){a=!0,o=v}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return Object(p.a)({},e,{questionGroups:t.questionGroups});case r.GET_QUESTION:return Object(p.a)({},e,{question:t.question});case r.ADD_QUESTION:return Object(p.a)({},e,{formMode:"add",question:Object(p.a)({},y,{groupId:t.groupId,questionId:t.questionId})});case r.EDIT_QUESTION:return Object(p.a)({},e,{formMode:"edit",question:Object(p.a)({},t.question)});case r.STORE_QUESTION:return"add"===e.formMode?Object(p.a)({},e,{formMode:"edit",questionGroups:e.questionGroups.map((function(e){return e.groupId!==t.question.groupId?Object(p.a)({},e,{questions:Object(m.a)(e.questions)}):Object(p.a)({},e,{questions:[].concat(Object(m.a)(e.questions),[Object(p.a)({},t.question)])})}))}):Object(p.a)({},e,{formMode:"edit",questionGroups:e.questionGroups.map((function(e){return e.groupId!==t.question.groupId?Object(p.a)({},e,{questions:Object(m.a)(e.questions)}):Object(p.a)({},e,{questions:e.questions.map((function(e){return e.questionId!==t.question.questionId?e:Object(p.a)({},t.question)}))})}))});case r.CANCEL_QUESTION:return Object(p.a)({},e,{formMode:"display"});case r.REMOVE_QUESTION:return Object(p.a)({},e,{formMode:"display",questionGroups:e.questionGroups.map((function(e){return e.groupId!==t.groupId?Object(p.a)({},e,{questions:Object(m.a)(e.questions)}):Object(p.a)({},e,{questions:e.questions.filter((function(e){return e.questionId!==t.questionId}))})}))});case r.ADD_GROUP:return Object(p.a)({},e,{groupIdEditing:t.groupId,questionGroups:[].concat(Object(m.a)(e.questionGroups),[Object(p.a)({},x,{title:"New Section",groupId:t.groupId})])});case r.EDIT_GROUP:return Object(p.a)({},e,{groupIdEditing:t.group.groupId});case r.STORE_GROUP:return Object(p.a)({},e,{groupIdEditing:0,questionGroups:e.questionGroups.map((function(e){return e.groupId!==t.group.groupId?e:Object(p.a)({},e,{title:t.group.title})}))});case r.REMOVE_GROUP:return Object(p.a)({},e,{questionGroups:e.questionGroups.reduce((function(e,n){return n.groupId!==t.groupId&&e.push(Object(p.a)({},n,{questions:Object(m.a)(n.questions)})),e}),[])});case r.STORE_QUESTIONS_TO_LOCAL_STORAGE:return localStorage.setItem(b,JSON.stringify(e.questionGroups)),e;default:return e}},answerState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.GET_ALL_ANSWERS:return Object(p.a)({},e,{answers:t.answers});case g.GET_ANSWER:return Object(p.a)({},e,{answer:t.answer});case g.ADD_ANSWER:return Object(p.a)({},e,{formMode:"add",answer:Object(p.a)({},k,{answerId:0===e.answers.length?1:Math.max.apply(Math,Object(m.a)(e.answers.map((function(e){return e.answerId}))))+1})});case g.EDIT_ANSWER:return Object(p.a)({},e,{formMode:"edit",answer:t.answer});case g.STORE_ANSWER:var n=[];return n="add"===e.formMode?[].concat(Object(m.a)(e.answers),[t.answer]):e.answers.map((function(e){return e.answerId===t.answer.answerId?t.answer:e})),Object(p.a)({},e,{formMode:"edit",answers:n});case g.CANCEL_ANSWER:return Object(p.a)({},e,{formMode:"display"});case g.REMOVE_ANSWER:return Object(p.a)({},e,{formMode:"display",answers:e.answers.filter((function(e){return e.answerId!==t.answerId}))});case g.STORE_ANSWERS_TO_LOCAL_STORAGE:return localStorage.setItem(j,JSON.stringify(e.answers)),e;default:return e}}});n(146),n(147);var Q=n(135),W=n(125),D=n(126),P=n(134),F=n(127),V=n(136),B=n(128),H=n.n(B),J=n(129),z=n.n(J),$=n(130),Y=n.n($);n(160);var K=H.a,X=function(e){function t(e){var n;return Object(W.a)(this,t),(n=Object(P.a)(this,Object(F.a)(t).call(this,e))).state=void 0,n.onSuggestionsClearRequested=function(){n.setState({suggestions:[]})},n.anyWord=function(e,t){var n=!0,r=!1,a=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var s=o.value,i=!0,c=!1,l=void 0;try{for(var d,m=t[Symbol.iterator]();!(i=(d=m.next()).done);i=!0){var p=d.value;if(s.test(p))return!0}}catch(E){c=!0,l=E}finally{try{i||null==m.return||m.return()}finally{if(c)throw l}}}}catch(E){r=!0,a=E}finally{try{n||null==u.return||u.return()}finally{if(r)throw a}}return!1},n.state={value:"",suggestions:n.getSuggestions(""),highlighted:""},n}return Object(V.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.value,r=t.suggestions;return a.createElement(K,{onSuggestionsClearRequested:this.onSuggestionsClearRequested,multiSection:!0,suggestions:r,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested.bind(this),onSuggestionSelected:this.onSuggestionSelected.bind(this),getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,renderSectionTitle:this.renderSectionTitle,getSectionSuggestions:this.getSectionSuggestions,onSuggestionHighlighted:this.onSuggestionHighlighted.bind(this),highlightFirstSuggestion:!0,renderSuggestionsContainer:this.renderSuggestionsContainer,inputProps:{placeholder:"Type 'promocode'",value:n,onChange:function(t,n){return e.onChange(t,n)}}})}},{key:"onSuggestionSelected",value:function(e,t){var n=t.suggestion;this.props.onSelectQuestion(n.questionId)}},{key:"renderSuggestion",value:function(e,t){var n=z()(e.text,t.query),r=Y()(e.text,n);return a.createElement("span",null,r.map((function(e,t){var n=e.highlight?"react-autosuggest__suggestion-match":void 0;return a.createElement("span",{className:n,key:t},e.text)})))}},{key:"renderSectionTitle",value:function(e){return a.createElement("strong",null,e.title)}},{key:"renderInputComponent",value:function(e){e.onChange,e.onBlur;var t=Object(Q.a)(e,["onChange","onBlur"]);return a.createElement("div",null,a.createElement("input",t))}},{key:"renderSuggestionsContainer",value:function(e){var t=e.containerProps,n=e.children;e.query;return a.createElement("div",t,a.createElement("span",null,n))}},{key:"onChange",value:function(e,t){var n=t.newValue;t.method;this.setState({value:n})}},{key:"onSuggestionsFetchRequested",value:function(e){var t=e.value;this.setState({suggestions:this.getSuggestions(t)})}},{key:"getSuggestions",value:function(e){var t=this,n=e.trim().replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(""===n)return[];var r=n.split(" ").map((function(e){return new RegExp(e,"i")}));return this.props.questionGroups.map((function(e){return{groupId:e.groupId,title:e.title,questions:e.questions.filter((function(e){return t.anyWord(r,e.words)}))}})).filter((function(e){return e.questions.length>0}))}},{key:"getSuggestionValue",value:function(e){return e.text}},{key:"getSectionSuggestions",value:function(e){return e.questions}},{key:"onSuggestionHighlighted",value:function(e){this.setState({highlighted:e.suggestion})}}]),t}(a.Component),Z=n(38),ee=n(19),te=n(12),ne=n(13),re=function(e){var t=e.questionAnswers,n=e.canEdit,r=e.formMode;return a.createElement("div",{className:"name-container"},0===t.length&&a.createElement("div",null,"No answers yet"),t.length>0&&a.createElement(a.Fragment,null,a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Answers"),n&&"display"!==r&&a.createElement("th",null))),a.createElement("tbody",null,t.map((function(e){return a.createElement("tr",{key:e.answerId},a.createElement("td",{className:"name"},e.text),n&&"display"!==r&&a.createElement("td",null,a.createElement("button",{className:"button-remove",title:"Remove Answer",onClick:function(){}},"  ",a.createElement(te.a,{icon:ne.b,color:"lightblue"}))))})))),n&&"display"!==r&&a.createElement("button",{className:"assign-answer",onClick:function(){}},"Assign another Answer to Question")))},ae=function(e){var t=Object(Z.a)({enableReinitialize:!0,initialValues:{groupId:e.question.groupId,questionId:e.question.questionId,text:e.question.text,answers:e.question.answers},validationSchema:ee.object({text:ee.string().max(150,"Must be 150 characters or less").required("Required")}),onSubmit:function(t){e.saveForm(t,e.formMode)}});return o.a.createElement("form",{onSubmit:t.handleSubmit},o.a.createElement("label",{htmlFor:"text"}),o.a.createElement("input",{id:"questionId",name:"questionId",type:"text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.questionId,disabled:!0,style:{width:"50px"}}),t.touched.questionId&&t.errors.questionId?o.a.createElement("div",null,t.errors.questionId):null,o.a.createElement("label",{htmlFor:"text"}),o.a.createElement("input",{id:"text",name:"text",type:"text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.text,multiple:!0}),t.touched.text&&t.errors.text?o.a.createElement("div",null,t.errors.text):null,o.a.createElement("br",null),o.a.createElement(re,{question:e.question,questionAnswers:e.questionAnswers,canEdit:e.canEdit,formMode:e.formMode}),e.canEdit&&o.a.createElement("button",{onClick:function(){return e.cancel()}},"Cancel"),e.canEdit&&o.a.createElement("button",{type:"submit"},"Save"))},oe=function(e){var t=Object(Z.a)({enableReinitialize:!0,initialValues:{groupId:e.question.groupId,questionId:e.question.questionId,text:e.question.text,answers:e.question.answers},validationSchema:ee.object({text:ee.string().max(150,"Must be 150 characters or less").required("Required")}),onSubmit:function(e){}});return o.a.createElement("form",{onSubmit:t.handleSubmit},o.a.createElement("label",{htmlFor:"text"}),o.a.createElement("input",{id:"questionId",name:"questionId",type:"text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.questionId,disabled:!0,style:{width:"50px"}}),t.touched.questionId&&t.errors.questionId?o.a.createElement("div",null,t.errors.questionId):null,o.a.createElement("label",{htmlFor:"text"}),o.a.createElement("input",{id:"text",name:"text",type:"text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.text,disabled:!0}),t.touched.text&&t.errors.text?o.a.createElement("div",null,t.errors.text):null,o.a.createElement("br",null),o.a.createElement(re,{question:e.question,questionAnswers:e.questionAnswers,canEdit:e.canEdit,formMode:e.formMode}),e.canEdit&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return e.edit()}},"Edit"),o.a.createElement("button",{onClick:function(){return e.remove()}},"Remove")))},ue=n(39);function se(){var e=Object(a.useState)({id:0,isHovered:!1}),t=Object(ue.a)(e,2),n=t[0],r=t[1],o=Object(a.useRef)(null),u=function(e){return r({id:parseInt(e),isHovered:!0})},s=function(e){return r({id:parseInt(e),isHovered:!1})};return Object(a.useEffect)((function(){var e=o.current;if(e)return e.addEventListener("mouseenter",(function(){return u(e.id)})),e.addEventListener("mouseleave",(function(){return s(e.id)})),function(){e.removeEventListener("mouseenter",(function(){return u(e.id)})),e.removeEventListener("mouseleave",(function(){return s(e.id)}))}}),[o.current]),[o,n]}var ie=function(e){var t=se(),n=Object(ue.a)(t,2),r=n[0],o=n[1],u=e.question,s=e.onSelectQuestion,i=e.edit,c=e.remove;return a.createElement("div",{id:u.questionId.toString(),ref:r,key:u.questionId,className:"name"},a.createElement("button",{className:"question-button",onClick:function(){return s(u.questionId)}},u.text),o.isHovered&&o.id===u.questionId&&a.createElement("button",{className:"button-edit",title:"Edit Answer",onClick:function(){return i(u.groupId,u.questionId)}},a.createElement(te.a,{icon:ne.a,color:"lightblue"})),o.isHovered&&o.id===u.questionId&&a.createElement("button",{className:"button-remove",title:"Remove Answer",onClick:function(){return c(u.groupId,u.questionId)}},a.createElement(te.a,{icon:ne.b,color:"lightblue"})))},ce=function(e){var t=se(),n=Object(ue.a)(t,2),r=n[0],o=n[1],u=e.questionGroup,s=e.editGroup,i=e.removeGroup;return a.createElement("div",{id:u.groupId.toString(),ref:r,key:u.groupId,className:"name"},u.title,o.isHovered&&o.id===u.groupId&&a.createElement("button",{className:"button-edit",title:"Edit Section",onClick:function(){return s(u.groupId)}},a.createElement(te.a,{icon:ne.a,color:"lightblue"})),o.isHovered&&o.id===u.groupId&&0===u.questions.length&&a.createElement("button",{className:"button-remove",title:"Remove Section",onClick:function(){return i(u.groupId)}},a.createElement(te.a,{icon:ne.b,color:"lightblue"})))},le=function(e){var t=e.questionGroups,n=e.question,r=e.questionAnswers,o=e.formMode,u=e.groupIdEditing,s=e.onSelectQuestion,i=e.add,c=e.edit,l=e.remove,d=e.cancel,m=e.saveForm,E=e.canEdit,f=e.addGroup,g=e.editGroup,v=e.removeGroup,S=e.storeGroup,h=Object(a.useRef)(null);return setTimeout((function(){null!==h.current&&(h.current.select(),h.current.focus())}),100),a.createElement("div",{className:"name-container"},a.createElement("div",{className:"two-columns"},a.createElement("div",{className:"a"},a.createElement(X,{questionGroups:t,onSelectQuestion:s})),a.createElement("div",{className:"b"})),a.createElement("hr",null),a.createElement("h4",{style:{textAlign:"center"}},"Maintenance (visible only for Admins) "),a.createElement("div",{className:"two-columns"},a.createElement("div",{className:"a"},a.createElement("h3",null,"All Questions by sections"),t&&t.map((function(e){return a.createElement("div",{key:e.groupId,style:{paddingBottom:"5px"}},a.createElement("div",null,u===e.groupId&&a.createElement("input",{ref:h,name:"groupTitle",type:"text",onBlur:function(t){return S(Object(p.a)({},e,{title:t.target.value}))},defaultValue:e.title}),u!==e.groupId&&a.createElement(ce,{questionGroup:e,editGroup:g,removeGroup:v})),a.createElement("div",null,e.questions.map((function(e){return a.createElement(ie,{question:e,onSelectQuestion:s,edit:c,remove:l})})),a.createElement("div",{style:{marginLeft:"5%"}},a.createElement("button",{className:"button-add",title:"Add a new Question",onClick:function(){return i(e.groupId)}},"Add a new Question"))))})),a.createElement("div",{style:{marginLeft:"1%"}},a.createElement("button",{className:"button-add-group",title:"Add a new Section",onClick:function(){return f()}},"Add a new Section"))),a.createElement("div",{className:"b"},t&&n&&a.createElement("div",{style:{border:"1px solid silver",borderRadius:"5px",padding:"10px"}},a.createElement("h4",{style:{marginTop:0}},"Question"),"display"===o?a.createElement(oe,{question:n,questionAnswers:r,formMode:o,canEdit:E,edit:function(){return c(n.groupId,n.questionId)},remove:function(){return l(n.groupId,n.questionId)}}):a.createElement(ae,{question:n,questionAnswers:r,formMode:o,cancel:d,saveForm:function(e){return m(e,o)},canEdit:E})))))},de=function(e){var t=e.questionGroups,n=e.question,r=e.questionAnswers,o=e.formMode,u=e.onSelectQuestion,s=e.cancel,i=e.saveForm,c=e.canEdit;return a.createElement("div",{className:"name-container"},a.createElement("div",{className:"two-columns"},a.createElement("div",{className:"a"},a.createElement(X,{questionGroups:t,onSelectQuestion:u})),a.createElement("div",{className:"b"},t&&n&&a.createElement("div",{style:{border:"1px solid silver",borderRadius:"5px",padding:"10px"}},a.createElement("h4",{style:{marginTop:0}},"Question"),a.createElement(ae,{question:n,questionAnswers:r,formMode:o,cancel:s,saveForm:function(e){return i(e,o)},canEdit:c})))))},me=function(e,t){if(void 0===e||0===e.answers.length||void 0===t)return[];var n=e.answers;return t.filter((function(e){return n.includes(e.answerId)}))},pe=function(e,t){return{questionGroups:e.questionState.questionGroups,question:e.questionState.question,questionAnswers:me(e.questionState.question,e.answerState.answers),answers:e.answerState.answers,formMode:e.questionState.formMode,groupIdEditing:e.questionState.groupIdEditing,canEdit:t.canEdit}},Ee=function(e){return{onSelectQuestion:function(t){return e(function(e){return function(t){var n;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.awrap(h(e));case 3:n=a.sent,t({type:r.GET_QUESTION,question:n.data.results}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}}),null,null,[[0,7]])}}(t))},add:function(t){return e((n=t,function(e){var t,a,o,u,s,i,c,l,d,p;return f.a.async((function(E){for(;;)switch(E.prev=E.next){case 0:return E.prev=0,E.next=3,f.a.awrap(O());case 3:for(t=E.sent,a=t.data.results,o=0,u=!0,s=!1,i=void 0,E.prev=9,c=a[Symbol.iterator]();!(u=(l=c.next()).done);u=!0)d=l.value,(p=Math.max.apply(Math,Object(m.a)(d.questions.map((function(e){return e.questionId})))))>o&&(o=p);E.next=17;break;case 13:E.prev=13,E.t0=E.catch(9),s=!0,i=E.t0;case 17:E.prev=17,E.prev=18,u||null==c.return||c.return();case 20:if(E.prev=20,!s){E.next=23;break}throw i;case 23:return E.finish(20);case 24:return E.finish(17);case 25:e({type:r.ADD_QUESTION,groupId:n,questionId:o+1}),E.next=31;break;case 28:E.prev=28,E.t1=E.catch(0),console.error(E.t1);case 31:case"end":return E.stop()}}),null,null,[[0,28],[9,13,17,25],[18,,20,24]])}));var n},edit:function(t,n){return e(function(e,t){return function(e){var n;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.awrap(h(t));case 3:n=a.sent,e({type:r.EDIT_QUESTION,question:n.data.results}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}}),null,null,[[0,7]])}}(0,n))},remove:function(t,n){return e(function(e,t){return function(n){return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.awrap(S());case 3:n({type:r.REMOVE_QUESTION,groupId:e,questionId:t}),v()&&n({type:r.STORE_QUESTIONS_TO_LOCAL_STORAGE}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}}),null,null,[[0,7]])}}(t,n))},saveForm:function(t,n){return e(function(e,t){return function(n){return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,"add"!==t){a.next=7;break}return a.next=4,f.a.awrap(S());case 4:n({type:r.STORE_QUESTION,question:e}),a.next=10;break;case 7:return a.next=9,f.a.awrap(S());case 9:n({type:r.STORE_QUESTION,question:e});case 10:v()&&n({type:r.STORE_QUESTIONS_TO_LOCAL_STORAGE}),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),console.error(a.t0);case 16:case"end":return a.stop()}}),null,null,[[0,13]])}}(t,n))},cancel:function(){return e((function(e){try{e({type:r.CANCEL_QUESTION})}catch(t){console.error(t)}}))},addGroup:function(){return e((function(e){var t,n,a;return f.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,f.a.awrap(O());case 3:t=o.sent,n=t.data.results,a=Math.max.apply(Math,Object(m.a)(n.map((function(e){return e.groupId})))),e({type:r.ADD_GROUP,groupId:a+1}),v()&&e({type:r.STORE_QUESTIONS_TO_LOCAL_STORAGE}),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(0),console.error(o.t0);case 13:case"end":return o.stop()}}),null,null,[[0,10]])}))},editGroup:function(t){return e(function(e){return function(t){var n,a;return f.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,f.a.awrap(O());case 3:n=o.sent,a=n.data.results,t({type:r.EDIT_GROUP,group:a.find((function(t){return t.groupId===e}))}),o.next=11;break;case 8:o.prev=8,o.t0=o.catch(0),console.error(o.t0);case 11:case"end":return o.stop()}}),null,null,[[0,8]])}}(t))},removeGroup:function(t){return e(function(e){return function(t){return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.awrap(S());case 3:t({type:r.REMOVE_GROUP,groupId:e}),v()&&t({type:r.STORE_QUESTIONS_TO_LOCAL_STORAGE}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])}}(t))},storeGroup:function(t){return e(function(e){return function(t){return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.awrap(w(e));case 3:t({type:r.STORE_GROUP,group:e}),v()&&t({type:r.STORE_QUESTIONS_TO_LOCAL_STORAGE}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])}}(t))}}},fe={questions:Object(c.b)(pe,Ee)(le),promoter:Object(c.b)(pe,Ee)(de)},ge=function(){return a.createElement(a.Fragment,null,a.createElement("h2",{style:{textAlign:"center"}},"Questions & Answers"),a.createElement(fe.promoter,{canEdit:!1}))},ve=function(e){var t=Object(Z.a)({enableReinitialize:!0,initialValues:{fromMode:e.formMode,answerId:e.answer.answerId,text:e.answer.text,options:e.answer.options},validationSchema:ee.object({text:ee.string().max(150,"Must be 150 characters or less").required("Required")}),onSubmit:function(t){e.saveForm(t,e.formMode)}});return o.a.createElement("form",{onSubmit:t.handleSubmit},"add"!==e.formMode&&o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:"answerId"}),o.a.createElement("input",{id:"answerId",name:"answerId",type:"text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.answerId,readOnly:!0}),t.touched.answerId&&t.errors.answerId?o.a.createElement("div",null,t.errors.answerId):null),o.a.createElement("label",{htmlFor:"text"}),o.a.createElement("input",{id:"text",name:"text",type:"text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.text}),t.touched.text&&t.errors.text?o.a.createElement("div",null,t.errors.text):null,o.a.createElement("button",{onClick:function(){return e.cancel()}},"Cancel"),o.a.createElement("button",{type:"submit"},"Save"))},Se=function(e){Object(i.f)().slug;var t=e.answers,n=e.answer,r=e.formMode,o=e.add,u=e.edit,s=e.remove,c=e.cancel,l=e.saveForm;return a.createElement("div",{className:"name-container"},"",0===t.length&&a.createElement("div",null,"No answers at all"),t.length>0&&a.createElement("div",{className:"two-columns"},a.createElement("div",{className:"a"},a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Id"),a.createElement("th",null,"Answer"),a.createElement("th",null),a.createElement("th",null))),a.createElement("tbody",null,t.map((function(e){return a.createElement("tr",{key:e.answerId},a.createElement("td",{className:"name"},e.answerId),a.createElement("td",{className:"name"},e.text),a.createElement("td",null,a.createElement("button",{className:"button-edit",title:"Add a new Answer",onClick:function(){return u(e.answerId)}},a.createElement(te.a,{icon:ne.a,color:"lightblue"}))),a.createElement("td",null,a.createElement("button",{className:"button-remove",title:"Remove Answer",onClick:function(){return s(e.answerId)}},a.createElement(te.a,{icon:ne.b,color:"lightblue"}))))})))),a.createElement("button",{onClick:function(){return o()}},"Add new")),a.createElement("div",{className:"b"},"add"===r&&a.createElement("div",{style:{border:"1px solid silver",borderRadius:"5px",padding:"10px"}},a.createElement("h4",{style:{marginTop:0}},"New Answer"),a.createElement(ve,{answer:n,formMode:r,cancel:c,saveForm:function(e){return l(e,r)}})),"edit"===r&&a.createElement("div",{style:{border:"1px solid silver",borderRadius:"5px",padding:"10px"}},a.createElement("h4",{style:{marginTop:0}},"Edit Answer"),a.createElement(ve,{answer:n,formMode:r,cancel:c,saveForm:function(e){return l(e,r)}})))))},he=Object(c.b)((function(e){return{answers:e.answerState.answers,answer:e.answerState.answer,formMode:e.answerState.formMode}}),(function(e){return{add:function(){return e((function(e){try{e({type:g.ADD_ANSWER})}catch(t){console.error(t)}}))},edit:function(t){return e(function(e){return function(t){var n,r;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.awrap(R());case 3:n=a.sent,r=n.data.results,t({type:g.EDIT_ANSWER,answer:r.find((function(t){return t.answerId===e}))}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.error(a.t0);case 11:case"end":return a.stop()}}),null,null,[[0,8]])}}(t))},remove:function(t){return e(function(e){return function(t){return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.awrap(G(e));case 3:t({type:g.REMOVE_ANSWER,answerId:e}),_()&&t({type:g.STORE_ANSWERS_TO_LOCAL_STORAGE}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])}}(t))},saveForm:function(t,n){return e(function(e,t){return function(n){return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,"add"!==t){r.next=7;break}return r.next=4,f.a.awrap(A(e));case 4:n({type:g.STORE_ANSWER,answer:e}),r.next=10;break;case 7:return r.next=9,f.a.awrap(N(e));case 9:n({type:g.STORE_ANSWER,answer:e});case 10:_()&&n({type:g.STORE_ANSWERS_TO_LOCAL_STORAGE}),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),console.error(r.t0);case 16:case"end":return r.stop()}}),null,null,[[0,13]])}}(t,n))},cancel:function(){return e((function(e){try{e({type:g.CANCEL_ANSWER})}catch(t){console.error(t)}}))}}}))(Se),Oe=Object(l.d)(U,void 0,Object(l.a)(d.a));Oe.dispatch((function(e){var t,n;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,v()&&null!==(t=localStorage.getItem(b))?(console.log("localStorage:",t),JSON.parse(t).map((function(e){return I.push(e)}))):q.map((function(e){return I.push(e)})),a.next=4,f.a.awrap(O());case 4:n=a.sent,e({type:r.GET_ALL_QUESTIONS,questionGroups:n.data.results}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.error(a.t0);case 11:case"end":return a.stop()}}),null,null,[[0,8]])})),Oe.dispatch((function(e){var t,n;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,_()&&null!==(t=localStorage.getItem(j))?(console.log("localStorage:",t),JSON.parse(t).map((function(e){return C.push(e)}))):M.map((function(e){return C.push(e)})),r.next=4,f.a.awrap(R());case 4:n=r.sent,e({type:g.GET_ALL_ANSWERS,answers:n.data.results}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),null,null,[[0,8]])})),u.render(o.a.createElement((function(e){return o.a.createElement(c.a,{store:e.store},o.a.createElement(s.a,null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(s.b,{to:"/"},"Supporter")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/questions"},"Questions")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/answers/pera"},"Answers")),o.a.createElement("li",{className:"push-right"},o.a.createElement(s.b,{to:"/answers/pera"},"Sign In")))),o.a.createElement("div",null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/"},o.a.createElement(ge,null)),o.a.createElement(i.a,{path:"/questions"},o.a.createElement(fe.questions,{canEdit:!0})),o.a.createElement(i.a,{path:"/answers/:slug"},o.a.createElement(he,null))))))}),{store:Oe}),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.c55800fe.chunk.js.map