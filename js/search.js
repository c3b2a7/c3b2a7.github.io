// build time:Thu Feb 17 2022 12:45:03 GMT+0000 (Coordinated Universal Time)
(function(){var e=window||this,t=e.BLOG.even,n=e.BLOG.$,i=n("#search"),s=n("#search-wrap"),r=n("#key"),a=n("#back"),o=n("#search-panel"),c=n("#search-result"),u=n("#search-tpl").innerHTML,l=(e.BLOG.ROOT+"/content.json").replace(/\/{2}/g,"/"),f;function d(e){if(!f){var t=new XMLHttpRequest;t.open("GET",l,true);t.onload=function(){if(this.status>=200&&this.status<300){var t=JSON.parse(this.response);f=t instanceof Array?t:t.posts;e(f)}else{console.error(this.statusText)}};t.onerror=function(){console.error(this.statusText)};t.send()}else{e(f)}}function p(e,t){return e.replace(/\{\w+\}/g,function(e){var n=e.replace(/\{|\}/g,"");return t[n]||""})}var h=e.BLOG.noop;var v=n("html");var L={show:function(){e.innerWidth<760?v.classList.add("lock-size"):h;o.classList.add("in")},hide:function(){e.innerWidth<760?v.classList.remove("lock-size"):h;o.classList.remove("in")}};function g(t){var n="";if(t.length){n=t.map(function(t){return p(u,{title:t.title,path:(e.BLOG.ROOT+"/"+t.path).replace(/\/{2,}/g,"/"),date:new Date(t.date).toLocaleDateString(),tags:t.tags.map(function(e){return"<span>#"+e.name+"</span>"}).join("")})}).join("")}else{n='<li class="tips"><i class="icon icon-coffee icon-3x"></i><p>Results not found!</p></li>'}c.innerHTML=n}function m(e,t){t.lastIndex=0;return t.test(e)}function O(e,t){return m(e.title,t)||e.tags.some(function(e){return m(e.name,t)})||m(e.text,t)}function w(e){var t=this.value.trim();if(!t){return}var n=new RegExp(t.replace(/[ ]/g,"|"),"gmi");d(function(e){var t=e.filter(function(e){return O(e,n)});g(t);L.show()});e.preventDefault()}i.addEventListener(t,function(){s.classList.toggle("in");r.value="";s.classList.contains("in")?r.focus():r.blur()});a.addEventListener(t,function(){s.classList.remove("in");L.hide()});document.addEventListener(t,function(e){if(e.target.id!=="key"&&t==="click"){L.hide()}});r.addEventListener("input",w);r.addEventListener(t,w)}).call(this);
//rebuild by neat 