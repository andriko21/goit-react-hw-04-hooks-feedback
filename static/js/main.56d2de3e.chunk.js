(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,c){e.exports={List:"Statistics_List__3nAxf",Item:"Statistics_Item__2IJ2P"}},,,function(e,t,c){e.exports={Section:"Section_Section__1SQig",title:"Section_title__2So1o"}},,function(e,t,c){e.exports={button:"FeedbackOptions_button__1mhUT"}},,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),i=c.n(s),r=(c(12),c(3)),o=c(2),l=c.n(o),b=c(0),u=function(e){var t=e.title,c=e.good,n=e.neutral,a=e.bad,s=e.total,i=e.positivePercent;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("ul",{className:l.a.List,children:[Object(b.jsxs)("li",{className:l.a.Item,children:["Good: ",c]}),Object(b.jsxs)("li",{className:l.a.Item,children:["Neutral: ",n]}),Object(b.jsxs)("li",{className:l.a.Item,children:["Bad: ",a]}),Object(b.jsxs)("li",{className:l.a.Item,children:["Total: ",s]}),Object(b.jsxs)("li",{className:l.a.Item,children:["Positive feedback: ",i,"%"]})]})]})},d=c(5),j=c.n(d),h=function(e){e.title;var t=e.children;return Object(b.jsxs)("section",{className:j.a.Section,children:[Object(b.jsx)("h1",{className:j.a.title,children:"Please leave feedback"}),t]})};h.defaultProps={children:" "};var f=h,O=c(7),x=c.n(O),m=function(e){var t=e.options,c=e.leaveFeedback;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)("button",{className:x.a.button,type:"button",onClick:function(){return c(e)},children:e},e)}))})},k=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(r.a)(s,2),o=i[0],l=i[1],d=Object(n.useState)(0),j=Object(r.a)(d,2),h=j[0],O=j[1],x=function(e,t,c){return e+t+c};return Object(b.jsxs)(f,{title:"Please leave feedback",children:[Object(b.jsx)(m,{options:["good","neutral","bad"],leaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":O((function(e){return e+1}));break;default:alert("error")}}}),0===x(c,o,h)?Object(b.jsx)("p",{children:"No feedback given"}):Object(b.jsx)(u,{good:c,neutral:o,bad:h,total:x(c,o,h),positivePercent:function(e,t,c){var n=e+t+c;return(0===n?0:e/n*100).toFixed()}(c,o,h)})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.56d2de3e.chunk.js.map