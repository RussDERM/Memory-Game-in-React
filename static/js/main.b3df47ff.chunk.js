(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(29)},19:function(e,t,a){},2:function(e){e.exports=[{id:1,icon:"fas fa-dice-d6 fa-10x",count:0},{id:2,icon:"fas fa-dice-d20 fa-10x",count:0},{id:3,icon:"fas fa-chess-rook fa-10x",count:0},{id:4,icon:"fas fa-chess-queen fa-10x",count:0},{id:5,icon:"fas fa-chess-pawn fa-10x",count:0},{id:6,icon:"fas fa-chess-knight fa-10x",count:0},{id:7,icon:"fas fa-chess-king fa-10x",count:0},{id:8,icon:"fas fa-chess-bishop fa-10x",count:0},{id:9,icon:"fas fa-spider fa-10x",count:0},{id:10,icon:"fas fa-crow fa-10x",count:0},{id:11,icon:"fas fa-cloud-moon fa-10x",count:0},{id:12,icon:"fas fa-skull-crossbones fa-10x",count:0},{id:13,icon:"fas fa-radiation-alt fa-10x",count:0},{id:14,icon:"fas fa-ghost fa-10x",count:0},{id:15,icon:"fas fa-gamepad fa-10x",count:0},{id:16,icon:"fas fa-exclamation-circle fa-10x",count:0}]},21:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),i=a.n(c),s=(a(19),a(20),a(1)),r=a.n(s),l=a(8),f=a(9),u=a(11),d=a(10),h=a(12),m=a(2),g=(a(21),a(3));var v=function(e){return o.a.createElement("div",{className:"tile",onClick:function(){return e.handleClick(e.id)}},o.a.createElement("i",{style:{color:g({luminosity:"bright"})},className:e.icon}))},x=(a(23),a(3)),E=a.n(x)()(),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={tiles:m,score:0,highscore:0},a.handleClick=function(e){console.log("click! "+e),a.state.tiles.find(function(t,n){if(t.id===e)return 0===m[n].count?(m[n].count=m[n].count+1,a.setState({score:a.state.score+1},function(){16===this.state.score&&alert("You Win!"),console.log(this.state.score)}),a.state.tiles.sort(function(){return Math.random()-.5}),!0):(a.gameOver(),a.setState({score:0}),console.log("game over"),!0)})},a.gameOver=function(){return a.state.score>a.state.highscore&&a.setState({highscore:a.state.score}),a.state.tiles.forEach(function(e){e.count=0}),a.state.tiles.sort(function(){return Math.random()-.5}),alert("Game Over!"),!0},a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.state.tiles;return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{className:"hello"},o.a.createElement("div",{className:"helloTile"},"Hello. ",o.a.createElement("br",null)," This is a simple memory game. Try and click each icon, but only once.")),o.a.createElement(r.a,{className:"score"},o.a.createElement("div",{className:"scoreTile"},"SCORE: ",this.state.score),o.a.createElement("div",{className:"scoreTile"},"HIGHSCORE: ",this.state.highscore)),o.a.createElement(r.a,{className:"gameContainer"},t.map(function(t){return o.a.createElement(v,{key:t.id,id:t.id,icon:t.icon,count:t.count,color:E,handleClick:e.handleClick})})))}}]),t}(o.a.Component);var p=function(){return o.a.createElement(r.a,null,o.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.b3df47ff.chunk.js.map