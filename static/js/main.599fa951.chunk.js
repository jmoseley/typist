(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e){e.exports={apiKey:"AIzaSyCTrTNKkca5ooAwm0nOMvIh3EHOkbvIn90",authDomain:"typist-dev.firebaseapp.com",databaseURL:"https://typist-dev.firebaseio.com",projectId:"typist-dev",storageBucket:"typist-dev.appspot.com",messagingSenderId:"451704177467"}},22:function(e,t,a){e.exports=a(47)},31:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(19),i=a.n(s),o=a(13),l=(a(12),a(31),a(11)),c=a(5),d=a(6),u=a(9),h=a(7),m=a(10),g=a(20),p=a.n(g),f=a(2),w=a.n(f),y=a(8),v=a.n(y),b=(a(41),function(e){var t=e.done,a=e.letter,n=e.isCurrent;return r.a.createElement("span",{className:w()("letter",{done:t,current:n})},a)}),k=(a(43),function(e){var t=e.letters,a=e.index;return r.a.createElement("div",{className:"text"},t.map(function(e,t){return r.a.createElement(b,Object.assign({key:t,isCurrent:t===a},e))}))}),E=function(e){var t=e.wordsPerMinute;return r.a.createElement("pre",null,"[",t.join(", "),"]")},S=function(e){var t=e.location;return r.a.createElement("sup",null,"on index ",t)},j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={email:"",password:"",loading:!1,error:{}},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"signup",value:function(){var e=this,t=this.state,a=t.email,n=t.password;console.log({email:a,password:n}),a&&n&&(this.setState({loading:!0,error:{}}),v.a.auth().createUserWithEmailAndPassword(a,n).then(function(t){e.setState({loading:!1}),e.props.signupSuccess()}).catch(function(t){console.log("error",t),e.setState({error:t,loading:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:w()("email-signup")},r.a.createElement("div",{className:w()("u-form-group")},r.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement("div",{className:w()("u-form-group")},r.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement("div",{className:w()("u-form-group")},r.a.createElement("button",{onClick:function(){return e.signup()}},this.state.loading?"Please wait...":"Signup")),r.a.createElement("div",{className:w()("u-form-group error")},this.state.error.message))}}]),t}(r.a.Component),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={email:"",password:"",loading:!1,error:{}},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"signin",value:function(){var e=this,t=this.state,a=t.email,n=t.password;a&&n&&(this.setState({loading:!0,error:{}}),v.a.auth().signInWithEmailAndPassword(a,n).then(function(t){e.setState({loading:!1}),e.props.signinSuccess()}).catch(function(t){console.log("error",t),e.setState({error:t,loading:!1})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:w()("email-signin")},r.a.createElement("div",{className:w()("u-form-group")},r.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement("div",{className:w()("u-form-group")},r.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement("div",{className:w()("u-form-group")},r.a.createElement("button",{onClick:function(){return e.signin()}},this.state.loading?"Please wait...":"Signin")),r.a.createElement("div",{className:w()("u-form-group error")},this.state.error.message))}}]),t}(r.a.Component),P=["th","and","to","of","a","i","in","was","he","that","it","his","her","you","as","had","with","for","she","not","at","but","be","my","on","have","him","is","said","me","which","by","so","this","all","from","they","no","were","if","would","or","when","what","there","been","one","could","very","an","who","them","mr","we","now","more","out","do","are","up","their","your","will","little","than","then","some","into","any","well","much","about","time","know","should","man","did","like","upon","such","never","only","good","how","before","other","see","must","am","own","come","down","say","after","think","made","might","being","mrs","again","great","two","can","go","over","too","here","came","old","thought","himself","where","our","may","first","way","has","though","without","went","us","away","day","make","these","young","nothing","long","shall","sir","back","don","house","ever","yet","take","every","hand","most","last","eyes","its","miss","having","off","looked","even","while","dear","look","many","life","still","mind","quite","another","those","just","head","tell","better","always","saw","seemed","put","face","let","took","poor","place","why","done","herself","found","through","same","going","under","enough","soon","home","give","indeed","left","get","once","mother","heard","myself","rather","love","knew","got","lady","room","something","yes","thing","father","perhaps","sure","heart","oh","right","against","three","men","night","people","door","told","round","because","woman","till","felt","between","both","side","seen","morning","began","whom","however","asked","things","part","almost","moment","looking","want","far","hands","gone","world","few","towards","gave","friend","name","best","word","turned","kind","cried","since","anything","next","find","half","hope","called","nor","words","hear","brought","set","each","replied","wish","voice","whole","together","manner","new","believe","course","least","years","answered","among","stood","sat","speak","leave","work","keep","taken","end","less","present","family","often","wife","whether","master","coming","mean","returned","evening","light","money","cannot","whose","boy","days","near","matter","suppose","gentleman","used","says","really","rest","business","full","help","child","sort","passed","lay","small","behind","girl","feel","fire","care","alone","open","person","call","given","i","sometimes","making","short","else","large","within","chapter","true","country","times","ask","answer","air","kept","hour","letter","happy","reason","pretty","husband","certain","others","ought","does","known","it","bed","table","that","ready","read","already","pleasure","either","means","spoke","taking","friends","talk","hard","walked","turn","strong","thus","yourself","high","along","above","feeling","glad","children","doubt","nature","themselves","black","hardly","town","sense","saying","deal","account","use","white","bad","everything","can","neither","wanted","mine","close","return","dark","fell","subject","bear","appeared","fear","state","thinking","also","point","therefore","fine","case","doing","held","certainly","walk","lost","question","company","continued","fellow","truth","water","possible","hold","afraid","bring","honour","low","ground","added","five","remember","except","power","seeing","dead","i","usual","able","second","arms","late","opinion","window","brother","live","four","none","death","arm","road","hair","sister","entered","sent","married","longer","immediately","god","women","hours","ten","understand","son","horse","wonder","cold","beyond","please","fair","became","sight","met","afterwards","eye","year","show","general","itself","silence","lord","wrong","turning","daughter","stay","forward","o","interest","thoughts","followed","won","different","opened","several","idea","received","change","laid","strange","nobody","fact","during","feet","tears","run","purpose","character","body","ran","past","order","need","pleased","trouble","whatever","dinner","happened","sitting","getting","there","besides","soul","ill","early","rose","aunt","hundred","minutes","across","carried","sit","observed","suddenly","creature","conversation","worse","six","quiet","chair","doctor","tone","standing","living","sorry","stand","meet","instead","wished","ah","lived","try","red","smile","sound","expected","silent","common","meant","tried","until","mouth","distance","occasion","cut","marry","likely","length","story","visit","deep","seems","street","remained","become","led","speaking","natural","giving","further","struck","week","loved","drew","seem","church","knows","object","ladies","marriage","book","appearance","pay","i","obliged","particular","pass","thank","form","knowing","lips","knowledge","former","blood","sake","fortune","necessary","presence","feelings","corner","beautiful","talking","spirit","ago","foot","circumstances","wind","presently","comes","attention","wait","play","easy","real","clear","worth","cause","send","spirits","chance","didn","view","pleasant","party","beginning","horses","stopped","notice","duty","he","age","figure","leaving","sleep","entirely","twenty","fall","promise","months","broken","heavy","secret","thousand","happiness","comfort","minute","act","human","fancy","strength","showed","pounds","nearly","probably","captain","piece","school","write","laughed","reached","repeated","walking","father","heaven","beauty","shook","sun","waiting","moved","bit","desire","news","front","effect","laugh","uncle","fit","miles","handsome","caught","hat","regard","gentlemen","supposed","easily","impossible","glass","resolved","grew","consider","green","considered","unless","stop","forth","expect","perfectly","altogether","surprise","sudden","free","exactly","grave","carriage","believed","service","angry","putting","carry","everybody","mentioned","looks","scarcely","society","affection","exclaimed","dress","die","earth","latter","garden","step","perfect","countenance","liked","dare","pain","companion","journey","paper","opportunity","makes","honest","arrived","you","bright","pity","directly","cry","trust","fast","ye","warm","danger","trees","breakfast","rich","engaged","proper","talked","respect","fixed","hill","wall","determined","wild","shut","top","plain","scene","sweet","especially","public","acquaintance","forget","history","pale","pray","books","afternoon","man","otherwise","mention","position","speech","gate","boys","yours","drink","slowly","broke","clothes","fond","pride","watch","sooner","settled","paid","reply","tea","lie","running","died","gentle","particularly","allowed","outside","placed","joy","hearing","note","condition","follow","begin","neck","serious","hurt","kindness","mere","farther","changed","o","passing","girls","force","situation","greater","expression","eat","reading","spoken","raised","anybody","started","following","although","sea","proud","future","quick","safe","temper","laughing","ears","difficulty","meaning","servant","sad","advantage","appear","offer","breath","opposite","number","miserable","law","rising","favour","save","twice","single","blue","noise","stone","mistress","surprised","allow","spot","burst","keeping","line","understood","court","finding","direction","anxious","pocket","around","conduct","loss","fresh","below","hall","satisfaction","land","telling","passion","floor","break","lying","waited","closed","meeting","trying","seat","king","confidence","offered","stranger","somebody","matters","noble","pardon","private","sharp","evil","weeks","justice","hot","cast","letters","youth","lives","health","finished","hoped","holding","touch","spite","delight","bound","consequence","rain","wouldn","third","hung","ways","weather","written","difference","kitchen","she","mother","persons","quarter","promised","hopes","brown","nay","seven","simple","wood","beside","middle","ashamed","lose","dreadful","move","generally","cousin","surely","satisfied","bent","shoulder","art","field","quickly","thrown","tired","share","pair","to","aware","colour","writing","whenever","quietly","fool","forced","touched","smiling","taste","dog","spent","steps","worst","legs","watched","ay","thee","eight","worthy","wrote","manners","proceeded","frightened","somewhat","born","greatest","charge","degree","shame","places","ma","couldn","tongue","according","box","wine","filled","servants","calling","fallen","368"],O=(a(45),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={size:5,stats:{keys:[],success:[],fails:[]},text:"",index:0,letters:[],typed:"",start:new Date,wpm:[],activePage:"app"},a.keyPressHandler=function(e){var t="number"===typeof e.which?e.which:e.keyCode,n=String.fromCharCode(t);a.register(n)},a.keyDownHandler=function(e){var t="number"===typeof e.which?e.which:e.keyCode;8===t&&a.backspace(),27===t&&a.completed()},a.generateText=function(){var e=a.state.size,t=P.filter(function(e){return e.length>=3}),n=p()(t,e).join(" "),r=n.split("").map(function(e){return{letter:e,done:!1}});a.setState({text:n,letters:r})},a.backspace=function(){var e=a.state.index;0!==e&&a.setState({index:e-1})},a.completed=function(){this.generateText(),this.setState({index:0,typed:"",start:new Date})},a.calcTime=function(e,t){var n=a.state.size,r=e.getTime()/1e3,s=t.getTime()/1e3,i=Math.round(s-r);return Math.round(60*n/i)},a.register=function(e){var t={key:e,ts:+new Date},n=a.state,r=n.stats,s=n.text,i=n.index,o=n.letters,c=n.typed,d=s.substr(i,1),u={stats:Object(l.a)({},r,{keys:r.keys.concat(t)})};if(e!==d)u.stats=Object(l.a)({},r,u.stats,{fails:r.fails.concat(t)});else{var h=o.map(function(e,t){return t===i?Object(l.a)({},e,{done:!0}):e});u.letters=h,u.index=i+1,u.typed="".concat(c).concat(e),u.stats=Object(l.a)({},r,u.stats,{success:r.success.concat(t)});var m=!1;if(i===s.length-1){var g=a.state,p=g.start,f=g.wpm,w=a.calcTime(p,new Date);u.wpm=f.concat(w),m=!0}a.setState(u,function(){return m&&a.completed()})}},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keypress",this.keyPressHandler),document.addEventListener("keydown",this.keyDownHandler),this.completed()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.keyPressHandler),document.removeEventListener("keydown",this.keyDownHandler)}},{key:"changeActivePage",value:function(e){this.setState({activePage:e})}},{key:"signupSuccess",value:function(){this.changeActivePage("app")}},{key:"signinSuccess",value:function(){this.changeActivePage("app")}},{key:"signout",value:function(){v.a.auth().signOut()}},{key:"render",value:function(){var e=this,t=this.props.user,a=this.state,n=a.letters,s=a.index,i=a.wpm,o=function(t){var a=t.title,n=t.keyword,s=t.active,i=t.left;t.onPress;return r.a.createElement("li",{className:w()("menu-item",{active:s===n,left:i}),onClick:function(){return e.changeActivePage(n)}},a)};return r.a.createElement("div",null,r.a.createElement("div",{className:w()("navbar")},r.a.createElement("ul",{className:w()("menu")},r.a.createElement(o,{title:"Typist",keyword:"app",left:!0,active:this.state.activePage}),!t.uid&&r.a.createElement(o,{title:"Signup",keyword:"signup",active:this.state.activePage}),!t.uid&&r.a.createElement(o,{title:"Signin",keyword:"signin",active:this.state.activePage}),t.uid&&r.a.createElement("li",{className:w()("menu-item"),onClick:function(){return e.signout()}},"Logout"),t.uid&&r.a.createElement("li",{className:w()("menu-item"),onClick:function(){}},t.displayName||t.email))),"signup"===this.state.activePage&&r.a.createElement(j,{signupSuccess:function(){return e.signupSuccess()}}),"signin"===this.state.activePage&&r.a.createElement(x,{signinSuccess:function(){return e.signinSuccess()}}),"app"===this.state.activePage&&r.a.createElement("div",{className:"App"},r.a.createElement(k,{letters:n,index:s}),r.a.createElement(E,{wordsPerMinute:i}),r.a.createElement(S,{location:s})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(21);o.initializeApp(C),o.auth().onAuthStateChanged(function(e){i.a.render(r.a.createElement(O,{user:e||{}}),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.599fa951.chunk.js.map