(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,n){e.exports={button:"FeedbackOptions_button__1mhUT"}},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(9),i=n.n(o),r=(n(16),n(10)),s=n(3),l=n(4),d=n(6),u=n(5),b=n(2),j=n.n(b),h=n(0),p=function(e){var t=e.title,n=e.good,a=e.neutral,c=e.bad,o=e.total,i=e.positivePercent;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:t}),Object(h.jsxs)("ul",{className:j.a.List,children:[Object(h.jsxs)("li",{className:j.a.Item,children:["Good: ",n]}),Object(h.jsxs)("li",{className:j.a.Item,children:["Neutral: ",a]}),Object(h.jsxs)("li",{className:j.a.Item,children:["Bad: ",c]}),Object(h.jsxs)("li",{className:j.a.Item,children:["Total: ",o]}),Object(h.jsxs)("li",{className:j.a.Item,children:["Positive feedback: ",i,"%"]})]})]})},f=n(8),O=n.n(f),v=function(e){e.title;var t=e.children;return Object(h.jsxs)("section",{className:O.a.Section,children:[Object(h.jsx)("h1",{className:O.a.title,children:"Please leave feedback"}),t]})};v.defaultProps={children:" "};var k=v,m=n(11),x=n.n(m),g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).options=e.props.options,e.leaveFeedback=e.props.leaveFeedback,e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)(h.Fragment,{children:this.options.map((function(t){return Object(h.jsx)("button",{className:x.a.button,type:"button",onClick:function(){return e.leaveFeedback(t)},children:t},t)}))})}}]),n}(a.Component),_=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.onBtnClick=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(e,t,n){return e+t+n},e.countPositiveFeedbackPercentage=function(e,t,n){var a=e+t+n;return(0===a?0:e/a*100).toFixed()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(h.jsxs)(k,{title:"Please leave feedback",children:[Object(h.jsx)(g,{options:["good","neutral","bad"],leaveFeedback:this.onBtnClick}),0===this.countTotalFeedback(t,n,a)?Object(h.jsx)("p",{children:"No feedback given"}):Object(h.jsx)(p,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(t,n,a),positivePercent:this.countPositiveFeedbackPercentage(t,n,a)})]})}}]),n}(a.Component);_.defaultProps={good:0,neutral:0,bad:0},i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={List:"Statistics_List__3nAxf",Item:"Statistics_Item__2IJ2P"}},8:function(e,t,n){e.exports={Section:"Section_Section__1SQig",title:"Section_title__2So1o"}}},[[18,1,2]]]);
//# sourceMappingURL=main.74e9056a.chunk.js.map