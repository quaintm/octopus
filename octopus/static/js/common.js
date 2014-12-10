(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){



 module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}
}(typeof window!=="undefined"?window:this,function(window,noGlobal){


var arr=[];var slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var

document=window.document,version="2.1.1", jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},
 rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={ jquery:version,constructor:jQuery, selector:"", length:0,toArray:function(){return slice.call(this);},
 get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]): slice.call(this);},
pushStack:function(elems){ var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context; return ret;},
each:function(callback,args){return jQuery.each(this,callback,args);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor(null);},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false; if(typeof target==="boolean"){deep=target; target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};} 
if(i===length){target=this;i--;}
for(;i<length;i++){ if((options=arguments[i])!=null){ for(name in options){src=target[name];copy=options[name]; if(target===copy){continue;} 
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};} 
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}} 
return target;};jQuery.extend({ expando:"jQuery"+(version+Math.random()).replace(/\D/g,""), isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},
isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function(obj){return obj!=null&&obj===obj.window;},isNumeric:function(obj){ 
return!jQuery.isArray(obj)&&obj-parseFloat(obj)>=0;},isPlainObject:function(obj){
 if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
if(obj.constructor&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}
 
return true;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},type:function(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;}, globalEval:function(code){var script,indirect=eval;code=jQuery.trim(code);if(code){

if(code.indexOf("use strict")===1){script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script);}else{
 indirect(code);}}},
camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();}, each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break;}}}else{for(i in obj){value=callback.apply(obj[i],args);if(value===false){break;}}}
}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}}
return obj;}, trim:function(text){return text==null?"":(text+"").replace(rtrim,"");}, makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;
 for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;}, map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[]; if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}
}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}} 
return concat.apply([],ret);}, guid:1,
proxy:function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}

if(!jQuery.isFunction(fn)){return undefined;} 
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));}; proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,
support:support});jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}
if(obj.nodeType===1&&length){return true;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
var Sizzle=(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate, setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains, expando="sizzle"+-(new Date()),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;}, strundefined=typeof undefined,MAX_NEGATIVE=1<<31, hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice, indexOf=arr.indexOf||function(elem){var i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
 whitespace="[\\x20\\t\\r\\n\\f]", characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

 identifier=characterEncoding.replace("w","w#"), attributes="\\["+whitespace+"*("+characterEncoding+")(?:"+whitespace+
"*([*^$|!~]?=)"+whitespace+
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\(("+
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+
".*"+")\\)|)", rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/, rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g, runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;

return high!==high||escapedWhitespace?escaped:high<0? String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);
 arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length? function(target,els){push_native.apply(target,slice.call(els));}:
 function(target,els){var j=target.length,i=0; while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var match,elem,m,nodeType, i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;results=results||[];if(!selector||typeof selector!=="string"){return results;}
if((nodeType=context.nodeType)!==1&&nodeType!==9){return[];}
if(documentIsHTML&&!seed){ if((match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);
if(elem&&elem.parentNode){
 if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{ if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}
}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}} 
if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;newContext=context;newSelector=nodeType===9&&selector;

 
if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&");}else{context.setAttribute("id",nid);}
nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i]);}
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;newSelector=groups.join(",");}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(!old){context.removeAttribute("id");}}}}} 
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){ delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{ if(div.parentNode){div.parentNode.removeChild(div);} 
div=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE); if(diff){return diff;} 
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length; while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!==strundefined&&context;}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};setDocument=Sizzle.setDocument=function(node){var hasCompare,doc=node?node.ownerDocument||node:preferredDoc,parent=doc.defaultView; if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;} 
document=doc;docElem=doc.documentElement; documentIsHTML=!isXML(doc);

 if(parent&&parent!==parent.top){ if(parent.addEventListener){parent.addEventListener("unload",function(){setDocument();},false);}else if(parent.attachEvent){parent.attachEvent("onunload",function(){setDocument();});}}

support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");}); support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length;}); support.getElementsByClassName=rnative.test(doc.getElementsByClassName)&&assert(function(div){div.innerHTML="<div class='a'></div><div class='a i'></div>";
 div.firstChild.className="i";
 return div.getElementsByClassName("i").length===2;});

 support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!doc.getElementsByName||!doc.getElementsByName(expando).length;}); if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!==strundefined&&documentIsHTML){var m=context.getElementById(id);
 return m&&m.parentNode?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{
 delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");return node&&node.value===attrId;};};} 
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!==strundefined){return context.getElementsByTagName(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag); if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;}; Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!==strundefined&&documentIsHTML){return context.getElementsByClassName(className);}};
rbuggyMatches=[];


 
rbuggyQSA=[];if((support.qsa=rnative.test(doc.querySelectorAll))){
 assert(function(div){


 div.innerHTML="<select msallowclip=''><option selected=''></option></select>";

 if(div.querySelectorAll("[msallowclip^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
 
if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}

 
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}});assert(function(div){
 var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");
 if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");} 
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");} 
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){
support.disconnectedMatch=matches.call(div,"div");
 matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);

 contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;}; sortOrder=hasCompare?function(a,b){ if(a===b){hasDuplicate=true;return 0;} 
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;} 
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b): 1; if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){ if(a===doc||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}
if(b===doc||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;} 
return sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0;}
return compare&4?-1:1;}:function(a,b){ if(a===b){hasDuplicate=true;return 0;}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b]; if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);} 
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);} 
while(ap[i]===bp[i]){i++;}
return i? siblingCheck(ap[i],bp[i]): ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return doc;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){ if((elem.ownerDocument||elem)!==document){setDocument(elem);} 
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr); if(ret||support.disconnectedMatch||
 elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){ if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){ if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0; hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
 
sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){ while((node=elem[i++])){ ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){
if(typeof elem.textContent==="string"){return elem.textContent;}else{ for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;} 
return ret;};Expr=Sizzle.selectors={ cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape); match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){ if(!match[3]){Sizzle.error(match[0]);}
 
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;} 
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){ match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!==strundefined&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){ outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){ if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break;}}
}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1];}else{ while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){ if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff];}
if(node===elem){break;}}}} 
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){


 var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);

 if(fn[expando]){return fn(argument);} 
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){

 var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),

"lang":markFunction(function(lang){ if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){
 var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){
 if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){
 
for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&
((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){ if(!matched||(match=rcomma.exec(soFar))){if(match){ soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false; if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched, type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);} 
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}

 
return parseOnly?soFar.length:soFar?Sizzle.error(selector): tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first? function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}: function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName]; if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((oldCache=outerCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){ return(newCache[2]=oldCache[2]);}else{ outerCache[dir]=newCache; if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length, elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]), matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]: results:matcherIn; if(matcher){matcher(matcherIn,matcherOut,context,xml);} 
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml); i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){ temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){ temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);} 
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}
}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){return(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches); if(matcher[expando]){ j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext, elems=seed||byElement&&Expr.find["TAG"]("*",outermost), dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context!==document&&context;}


 
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;}} 
if(bySet){ if((elem=!matcher&&elem)){matchedCount--;} 
if(seed){unmatched.push(elem);}}} 
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){ if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}} 
setMatched=condense(setMatched);} 
push.apply(results,setMatched); if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}} 
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,match ){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){ if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}} 
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers)); cached.selector=selector;}
return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[]; if(match.length===1){ tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);} 
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i]; if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){ if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){ tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}

(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;
support.detectDuplicates=!!hasDuplicate;setDocument();
support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1;});
if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}

if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}

if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);var risSimple=/^.[^:#\[\.,]*$/;function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}
qualifier=jQuery.filter(qualifier,elements);}
return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>=0)!==not;});}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,len=this.length,ret=[],self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,
typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});
var rootjQuery,

rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context){var match,elem;if(!selector){return this;} 
if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){ match=[null,selector,null];}else{match=rquickExpr.exec(selector);} 
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;
 jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){ if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);
 if(elem&&elem.parentNode){ this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}
}else if(!context||context.jquery){return(context||rootjQuery).find(selector);
}else{return this.constructor(context).find(selector);}
}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;
}else if(jQuery.isFunction(selector)){return typeof rootjQuery.ready!=="undefined"?rootjQuery.ready(selector): selector(jQuery);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/, guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.extend({dir:function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}
matched.push(elem);}}
return matched;},sibling:function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}
return matched;}});jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){ if(cur.nodeType<11&&(pos?pos.index(cur)>-1: cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}
return this.pushStack(matched.length>1?jQuery.unique(matched):matched);},
 index:function(elem){ if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;} 
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);} 
return indexOf.call(this, elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}
if(this.length>1){ if(!guaranteedUnique[name]){jQuery.unique(matched);} 
if(rparentsprev.test(name)){matched.reverse();}}
return this.pushStack(matched);};});var rnotwhite=(/\S+/g);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){
options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var
memory, fired, firing,firingStart, firingLength,firingIndex, list=[], stack=!options.once&&[], fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false; break;}}
firing=false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list=[];}else{self.disable();}}}, self={ add:function(){if(list){ var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&type!=="string"){ add(arg);}});})(arguments);
if(firing){firingLength=list.length;
}else if(memory){firingStart=start;fire(memory);}}
return this;}, remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1); if(firing){if(index<=firingLength){firingLength--;}
if(index<=firingIndex){firingIndex--;}}}});}
return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length);}, empty:function(){list=[];firingLength=0;return this;}, disable:function(){list=stack=memory=undefined;return this;},disabled:function(){return!list;}, lock:function(){stack=undefined;if(!memory){self.disable();}
return this;},locked:function(){return!stack;}, fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.slice():args];if(firing){stack.push(args);}else{fire(args);}}
return this;}, fire:function(){self.fireWith(this,arguments);return this;}, fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i]; deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},
 promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={}; promise.pipe=promise.then; jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3]; promise[tuple[1]]=list.add; if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;}); promise.promise(deferred); if(func){func.call(deferred,deferred);}
return deferred;}, when:function(subordinate ){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length, remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(), updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts; if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else{--remaining;}}} 
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});var readyList;jQuery.fn.ready=function(fn){ jQuery.ready.promise().done(fn);return this;};jQuery.extend({isReady:false,
 readyWait:1, holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}}, ready:function(wait){ if(wait===true?--jQuery.readyWait:jQuery.isReady){return;} 
jQuery.isReady=true; if(wait!==true&&--jQuery.readyWait>0){return;} 
readyList.resolveWith(document,[jQuery]); if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});function completed(){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);jQuery.ready();}
jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();
 if(document.readyState==="complete"){ setTimeout(jQuery.ready);}else{ document.addEventListener("DOMContentLoaded",completed,false); window.addEventListener("load",completed,false);}}
return readyList.promise(obj);};jQuery.ready.promise();
var access=jQuery.access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null; if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw);}
}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
if(bulk){ if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
return chainable?elems: bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};jQuery.acceptData=function(owner){



 return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);};function Data(){ Object.defineProperty(this.cache={},0,{get:function(){return{};}});this.expando=jQuery.expando+Math.random();}
Data.uid=1;Data.accepts=jQuery.acceptData;Data.prototype={key:function(owner){if(!Data.accepts(owner)){return 0;}
var descriptor={}, unlock=owner[this.expando]; if(!unlock){unlock=Data.uid++; try{descriptor[this.expando]={value:unlock};Object.defineProperties(owner,descriptor);
}catch(e){descriptor[this.expando]=unlock;jQuery.extend(owner,descriptor);}} 
if(!this.cache[unlock]){this.cache[unlock]={};}
return unlock;},set:function(owner,data,value){var prop,
 unlock=this.key(owner),cache=this.cache[unlock]; if(typeof data==="string"){cache[data]=value;}else{ if(jQuery.isEmptyObject(cache)){jQuery.extend(this.cache[unlock],data);}else{for(prop in data){cache[prop]=data[prop];}}}
return cache;},get:function(owner,key){
var cache=this.cache[this.key(owner)];return key===undefined?cache:cache[key];},access:function(owner,key,value){var stored;




if(key===undefined||((key&&typeof key==="string")&&value===undefined)){stored=this.get(owner,key);return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key));}



this.set(owner,key,value);
return value!==undefined?value:key;},remove:function(owner,key){var i,name,camel,unlock=this.key(owner),cache=this.cache[unlock];if(key===undefined){this.cache[unlock]={};}else{ if(jQuery.isArray(key)){

name=key.concat(key.map(jQuery.camelCase));}else{camel=jQuery.camelCase(key); if(key in cache){name=[key,camel];}else{ name=camel;name=name in cache?[name]:(name.match(rnotwhite)||[]);}}
i=name.length;while(i--){delete cache[name[i]];}}},hasData:function(owner){return!jQuery.isEmptyObject(this.cache[owner[this.expando]]||{});},discard:function(owner){if(owner[this.expando]){delete this.cache[owner[this.expando]];}}};var data_priv=new Data();var data_user=new Data();var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;function dataAttr(elem,key,data){var name;
 if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){} 
data_user.set(elem,key,data);}else{data=undefined;}}
return data;}
jQuery.extend({hasData:function(elem){return data_user.hasData(elem)||data_priv.hasData(elem);},data:function(elem,name,data){return data_user.access(elem,name,data);},removeData:function(elem,name){data_user.remove(elem,name);},
_data:function(elem,name,data){return data_priv.access(elem,name,data);},_removeData:function(elem,name){data_priv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes; if(key===undefined){if(this.length){data=data_user.get(elem);if(elem.nodeType===1&&!data_priv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
data_priv.set(elem,"hasDataAttrs",true);}}
return data;} 
if(typeof key==="object"){return this.each(function(){data_user.set(this,key);});}
return access(this,function(value){var data,camelKey=jQuery.camelCase(key);



if(elem&&value===undefined){
 data=data_user.get(elem,key);if(data!==undefined){return data;}
 
data=data_user.get(elem,camelKey);if(data!==undefined){return data;}
 
data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return data;}
return;}
this.each(function(){
var data=data_user.get(this,camelKey);
data_user.set(this,camelKey,value);

if(key.indexOf("-")!==-1&&data!==undefined){data_user.set(this,key,value);}});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){data_user.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=data_priv.get(elem,type); if(data){if(!queue||jQuery.isArray(data)){queue=data_priv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);}; if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){
 if(type==="fx"){queue.unshift("inprogress");} 
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}}, _queueHooks:function(elem,type){var key=type+"queueHooks";return data_priv.get(elem,key)||data_priv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){data_priv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data); jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},
promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=data_priv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function(elem,el){ elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};var rcheckableType=(/^(?:checkbox|radio)$/i);(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");
 
input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);
 support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;
div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var strundefined=typeof undefined;support.focusinBubbles="onfocusin"in window;var
rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}
function returnFalse(){return false;}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.get(elem);if(!elemData){return;} 
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;} 
if(!handler.guid){handler.guid=jQuery.guid++;} 
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){
 return typeof jQuery!==strundefined&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};} 
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort(); if(!type){continue;} 
special=jQuery.event.special[type]||{}; type=(selector?special.delegateType:special.bindType)||type; special=jQuery.event.special[type]||{}; handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn); if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0; if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}} 
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);} 
jQuery.event.global[type]=true;}}, remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.hasData(elem)&&data_priv.get(elem);if(!elemData||!(events=elemData.events)){return;} 
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort(); if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"); origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}

if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}} 
if(jQuery.isEmptyObject(events)){delete elemData.handle;data_priv.remove(elem,"events");}},trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document; if(elem.nodeType===3||elem.nodeType===8){return;} 
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type; event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null; event.result=undefined;if(!event.target){event.target=elem;} 
data=data==null?[event]:jQuery.makeArray(data,[event]); special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}} 
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type; handle=(data_priv.get(cur,"events")||{})[event.type]&&data_priv.get(cur,"handle");if(handle){handle.apply(cur,data);} 
handle=ontype&&cur[ontype];if(handle&&handle.apply&&jQuery.acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type; if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){ tmp=elem[ontype];if(tmp){elem[ontype]=null;} 
jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},dispatch:function(event){ event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(data_priv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{}; args[0]=event;event.delegateTarget=this; if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;} 
handlerQueue=jQuery.event.handlers.call(this,event,handlers); i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){
if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}} 
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;

if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!==this;cur=cur.parentNode||this){if(cur.disabled!==true||event.type!=="click"){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length;}
if(matches[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}} 
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
return handlerQueue;}, props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){ if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button; if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
 
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},fix:function(event){if(event[jQuery.expando]){return event;} 
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];} 
if(!event.target){event.target=document;}

if(event.target.nodeType===3){event.target=event.target.parentNode;}
return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{ noBubble:true},focus:{ trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{ trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}}, _default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}},simulate:function(type,elem,event,bubble){
var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else{jQuery.event.dispatch.call(elem,e);}
if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}};jQuery.Event=function(src,props){ if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);} 
if(src&&src.type){this.originalEvent=src;this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&& src.returnValue===false?returnTrue:returnFalse;}else{this.type=src;} 
if(props){jQuery.extend(this,props);} 
this.timeStamp=src&&src.timeStamp||jQuery.now(); this[jQuery.expando]=true;};
jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&e.preventDefault){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&e.stopPropagation){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation();}
this.stopPropagation();}};
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj; if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});
if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){ var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
data_priv.access(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);data_priv.remove(doc,fix);}else{data_priv.access(doc,fix,attaches);}}};});}
jQuery.fn.extend({on:function(types,selector,data,fn,one){var origFn,type; if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){this.on(type,selector,data,types[type],one);}
return this;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return this;}
if(one===1){origFn=fn;fn=function(event){ jQuery().off(event);return origFn.apply(this,arguments);}; fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){ handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});var
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i, rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={ option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;
function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
return elem;}
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){data_priv.set(elems[i],"globalEval",!refElements||data_priv.get(refElements[i],"globalEval"));}}
function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}
if(data_priv.hasData(src)){pdataOld=data_priv.access(src);pdataCur=data_priv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}} 
if(data_user.hasData(src)){udataOld=data_user.access(src);udataCur=jQuery.extend({},udataOld);data_user.set(dest,udataCur);}}
function getAll(context,tag){var ret=context.getElementsByTagName?context.getElementsByTagName(tag||"*"):context.querySelectorAll?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;}
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);
 if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){ destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}} 
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}} 
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));} 
return clone;},buildFragment:function(elems,context,scripts,selection){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){ if(jQuery.type(elem)==="object"){
 jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||fragment.appendChild(context.createElement("div")); tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2]; j=wrap[0];while(j--){tmp=tmp.lastChild;}
 
jQuery.merge(nodes,tmp.childNodes); tmp=fragment.firstChild;
 tmp.textContent="";}}} 
fragment.textContent="";i=0;while((elem=nodes[i++])){
 if(selection&&jQuery.inArray(elem,selection)!==-1){continue;}
contains=jQuery.contains(elem.ownerDocument,elem); tmp=getAll(fragment.appendChild(elem),"script"); if(contains){setGlobalEval(tmp);} 
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
return fragment;},cleanData:function(elems){var data,elem,type,key,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(jQuery.acceptData(elem)){key=elem[data_priv.expando];if(key&&(data=data_priv.cache[key])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
if(data_priv.cache[key]){ delete data_priv.cache[key];}}} 
delete data_user.cache[elem[data_user.expando]];}}});jQuery.fn.extend({text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},remove:function(selector,keepData ){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem));}
if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"));}
elem.parentNode.removeChild(elem);}}
return this;},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){ jQuery.cleanData(getAll(elem,false)); elem.textContent="";}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;} 
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{}; if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var arg=arguments[0]; this.domManip(arguments,function(elem){arg=this.parentNode;jQuery.cleanData(getAll(this));if(arg){arg.replaceChild(elem,this);}});return arg&&(arg.length||arg.nodeType)?this:this.remove();},detach:function(selector){return this.remove(selector,true);},domManip:function(args,callback){ args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value); if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}
self.domManip(args,callback);});}
if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;
for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true); if(hasScripts){
 jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(this[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument; jQuery.map(scripts,restoreScript); for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!data_priv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){ if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}
return this;}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);
 push.apply(ret,elems.get());}
return this.pushStack(ret);};});var iframe,elemdisplay={};function actualDisplay(name,doc){var style,elem=jQuery(doc.createElement(name)).appendTo(doc.body), display=window.getDefaultComputedStyle&&(style=window.getDefaultComputedStyle(elem[0]))? style.display:jQuery.css(elem[0],"display"); elem.detach();return display;}
function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc); if(display==="none"||!display){ iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement); doc=iframe[0].contentDocument; doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();} 
elemdisplay[nodeName]=display;}
return display;}
var rmargin=(/^margin/);var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){return elem.ownerDocument.defaultView.getComputedStyle(elem,null);};function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);
 if(computed){ret=computed.getPropertyValue(name)||computed[name];}
if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}

 
if(rnumnonpx.test(ret)&&rmargin.test(name)){ width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth; style.minWidth=style.maxWidth=style.width=ret;ret=computed.width; style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret!==undefined?
ret+"":ret;}
function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
(function(){var pixelPositionVal,boxSizingReliableVal,docElem=document.documentElement,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;"+"position:absolute";container.appendChild(div);
function computePixelPositionAndBoxSizingReliable(){div.style.cssText=
"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute";div.innerHTML="";docElem.appendChild(container);var divStyle=window.getComputedStyle(div,null);pixelPositionVal=divStyle.top!=="1%";boxSizingReliableVal=divStyle.width==="4px";docElem.removeChild(container);}
 
if(window.getComputedStyle){jQuery.extend(support,{pixelPosition:function(){
computePixelPositionAndBoxSizingReliable();return pixelPositionVal;},boxSizingReliable:function(){if(boxSizingReliableVal==null){computePixelPositionAndBoxSizingReliable();}
return boxSizingReliableVal;},reliableMarginRight:function(){



var ret,marginDiv=div.appendChild(document.createElement("div")); marginDiv.style.cssText=div.style.cssText=
"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";docElem.appendChild(container);ret=!parseFloat(window.getComputedStyle(marginDiv,null).marginRight);docElem.removeChild(container);return ret;}});}})();jQuery.swap=function(elem,options,callback,args){var ret,name,old={}; for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]); for(name in options){elem.style[name]=old[name];}
return ret;};var
 
rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),rrelNum=new RegExp("^([+-])=("+pnum+")","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"];function vendorPropName(style,name){ if(name in style){return name;} 
var capName=name[0].toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name;}}
return origName;}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches? Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")? 4: name==="width"?1:0,val=0;for(;i<4;i+=2){ if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}
if(isBorderBox){ if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);} 
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{ val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles); if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
return val;}
function getWidthOrHeight(elem,name,extra){ var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";

 if(val<=0||val==null){ val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
 
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]); val=parseFloat(val)||0;} 
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=data_priv.get(elem,"olddisplay");display=elem.style.display;if(show){
 if(!values[index]&&display==="none"){elem.style.display="";}

 
if(elem.style.display===""&&isHidden(elem)){values[index]=data_priv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else{hidden=isHidden(elem);if(display!=="none"||!hidden){data_priv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}
 
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
jQuery.extend({
 cssHooks:{opacity:{get:function(elem,computed){if(computed){ var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}}, cssNumber:{"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},
 cssProps:{"float":"cssFloat"}, style:function(elem,name,value,extra){ if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;} 
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));
 hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]; if(value!==undefined){type=typeof value; if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name)); type="number";} 
if(value==null||value!==value){return;}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";} 
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";} 
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{ if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;} 
return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name); name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));
 hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]; if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);} 
if(val===undefined){val=curCSS(elem,name,styles);} 
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];} 
if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){
 return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0);}};});jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){
 return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={}, parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop];}


result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){
 if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;}};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"), start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start&&start[3]!==unit){ unit=unit||start[3]; parts=parts||[]; start=+target||1;do{ scale=scale||".5"; start=start/scale;jQuery.style(tween.elem,prop,start+unit);
}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations);} 
if(parts){start=tween.start=+start||+target||0;tween.unit=unit; tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2];}
return tween;}]};function createFxNow(){setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
function genFx(type,includeWidth){var which,i=0,attrs={height:type}; includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){ return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=data_priv.get(elem,"fxshow"); if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){
 anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});} 
if(elem.nodeType===1&&("height"in props||"width"in props)){


 opts.overflow=[style.overflow,style.overflowX,style.overflowY];
 display=jQuery.css(elem,"display");checkDisplay=display==="none"?data_priv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block";}}
if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});} 
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){ if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}else{display=undefined;}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=data_priv.access(elem,"fxshow",{});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;data_priv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}
}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks; for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){ delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,
 length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
 
if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue})); return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.split(" ");}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback);}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else{animationPrefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";} 
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){ return this.filter(isHidden).css("opacity",0).show()
.end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){ var anim=Animation(this,jQuery.extend({},prop),optall); if(empty||data_priv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=data_priv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}

 
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=data_priv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0; data.finish=true; jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);} 
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}} 
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}} 
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i]; if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200, _default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";
support.checkOn=input.value!=="";
 support.optSelected=opt.selected;
select.disabled=true;support.optDisabled=!opt.disabled;
 input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType; if(!elem||nType===3||nType===8||nType===2){return;} 
if(typeof elem.getAttribute===strundefined){return jQuery.prop(elem,name,value);}
 
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);}else if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,value+"");return value;}}else if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{ret=jQuery.find.attr(elem,name); return ret==null?undefined:ret;}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){ elem[propName]=false;}
elem.removeAttribute(name);}}},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){
 var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}}});boolHook={set:function(elem,value,name){if(value===false){ jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){ handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}
return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType; if(!elem||nType===3||nType===8||nType===2){return;}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){ name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){return hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value);}else{return hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name];}},propHooks:{tabIndex:{get:function(elem){return elem.hasAttribute("tabindex")||rfocusable.test(elem.nodeName)||elem.href?elem.tabIndex:-1;}}}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}
return null;}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;jQuery.fn.extend({addClass:function(value){var classes,elem,cur,clazz,j,finalValue,proceed=typeof value==="string"&&value,i=0,len=this.length;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
finalValue=jQuery.trim(cur);if(elem.className!==finalValue){elem.className=finalValue;}}}}
return this;},removeClass:function(value){var classes,elem,cur,clazz,j,finalValue,proceed=arguments.length===0||typeof value==="string"&&value,i=0,len=this.length;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while((clazz=classes[j++])){ while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ");}}
finalValue=value?jQuery.trim(cur):"";if(elem.className!==finalValue){elem.className=finalValue;}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
return this.each(function(){if(type==="string"){ var className,i=0,self=jQuery(this),classNames=value.match(rnotwhite)||[];while((className=classNames[i++])){ if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}
}else if(type===strundefined||type==="boolean"){if(this.className){ data_priv.set(this,"__className__",this.className);}
this.className=this.className||value===false?"":data_priv.get(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true;}}
return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"? ret.replace(rreturn,""): ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;} 
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()]; if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:jQuery.trim(jQuery.text(elem));}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0; for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){ value=jQuery(option).val(); if(one){return value;} 
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if((option.selected=jQuery.inArray(option.value,values)>=0)){optionSet=true;}} 
if(!optionSet){elem.selectedIndex=-1;}
return values;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){
 return elem.getAttribute("value")===null?"on":elem.value;};}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){ jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);},bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});var nonce=jQuery.now();var rquery=(/\?/);
jQuery.parseJSON=function(data){return JSON.parse(data+"");};jQuery.parseXML=function(data){var xml,tmp;if(!data||typeof data!=="string"){return null;} 
try{tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}catch(e){xml=undefined;}
if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;};var
 
ajaxLocParts,ajaxLocation,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,prefilters={},transports={}, allTypes="*/".concat("*");
try{ajaxLocation=location.href;}catch(e){
 ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){ while((dataType=dataTypes[i++])){ if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}

function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes; while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}} 
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}} 
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{ for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}} 
finalDataType=finalDataType||firstDataType;}

 
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={}, dataTypes=s.dataTypes.slice(); if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift(); while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;} 
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){ if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){ conv=converters[prev+" "+current]||converters["* "+current]; if(!conv){for(conv2 in converters){ tmp=conv2.split(" ");if(tmp[1]===current){ conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){ if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){ if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({ active:0, lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
 converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},

flatOptions:{url:true,context:true}},
ajaxSetup:function(target,settings){return settings? ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings): ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports), ajax:function(url,options){ if(typeof url==="object"){options=url;url=undefined;} 
options=options||{};var transport, cacheURL, responseHeadersString,responseHeaders, timeoutTimer, parts, fireGlobals, i, s=jQuery.ajaxSetup({},options), callbackContext=s.context||s, globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event, deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"), statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={}, state=0, strAbort="canceled", jqXHR={readyState:0, getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;}, getAllResponseHeaders:function(){return state===2?responseHeadersString:null;}, setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;}, overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;}, statusCode:function(map){var code;if(map){if(state<2){for(code in map){ statusCode[code]=[statusCode[code],map[code]];}}else{ jqXHR.always(map[jqXHR.status]);}}
return this;}, abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}}; deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail; 
s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//"); s.type=options.method||options.type||s.method||s.type; s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""]; if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))));} 
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);} 
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR); if(state===2){return jqXHR;} 
fireGlobals=s.global; if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");} 
s.type=s.type.toUpperCase(); s.hasContent=!rnoContent.test(s.type);
 cacheURL=s.url; if(!s.hasContent){ if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data); delete s.data;} 
if(s.cache===false){s.url=rts.test(cacheURL)? cacheURL.replace(rts,"$1_="+nonce++): cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}} 
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);} 
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]); for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);} 
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){ return jqXHR.abort();} 
strAbort="abort"; for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);} 
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR); if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1; if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);} 
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){ if(state<2){done(-1,e);}else{throw e;}}} 
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText; if(state===2){return;} 
state=2; if(timeoutTimer){clearTimeout(timeoutTimer);}

transport=undefined; responseHeadersString=headers||""; jqXHR.readyState=status>0?4:0; isSuccess=status>=200&&status<300||status===304; if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess); if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}} 
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{
 error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}} 
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+""; if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);} 
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);} 
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]); if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){ if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback});};});jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){ wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){
 return elem.offsetWidth<=0&&elem.offsetHeight<=0;};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}

jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){ value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){ jQuery.each(a,function(){add(this.name,this.value);});}else{
for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}} 
return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){ var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type; return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=function(){try{return new XMLHttpRequest();}catch(e){}};var xhrId=0,xhrCallbacks={},xhrSuccessStatus={ 0:200,
 1223:204},xhrSupported=jQuery.ajaxSettings.xhr();
if(window.ActiveXObject){jQuery(window).on("unload",function(){for(var key in xhrCallbacks){xhrCallbacks[key]();}});}
support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback; if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr(),id=++xhrId;xhr.open(options.type,options.url,options.async,options.username,options.password); if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}} 
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}


if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";} 
for(i in headers){xhr.setRequestHeader(i,headers[i]);} 
callback=function(type){return function(){if(callback){delete xhrCallbacks[id];callback=xhr.onload=xhr.onerror=null;if(type==="abort"){xhr.abort();}else if(type==="error"){complete( xhr.status,xhr.statusText);}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,

typeof xhr.responseText==="string"?{text:xhr.responseText}:undefined,xhr.getAllResponseHeaders());}}};}; xhr.onload=callback();xhr.onerror=callback("error"); callback=xhrCallbacks[id]=callback("abort");try{xhr.send(options.hasContent&&options.data||null);}catch(e){ if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";}});jQuery.ajaxTransport("script",function(s){ if(s.crossDomain){var script,callback;return{send:function(_,complete){script=jQuery("<script>").prop({async:true,charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data"); if(jsonProp||s.dataTypes[0]==="jsonp"){ callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback; if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;} 
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];}; s.dataTypes[0]="json"; overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){ window[callbackName]=overwritten; if(s[callbackName]){ s.jsonpCallback=originalSettings.jsonpCallback; oldCallbacks.push(callbackName);} 
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;}); return"script";}});

jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){keepScripts=context;context=false;}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[]; if(parsed){return[context.createElement(parsed[1])];}
parsed=jQuery.buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};var _load=jQuery.fn.load;jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
var selector,type,response,self=this,off=url.indexOf(" ");if(off>=0){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);} 
if(jQuery.isFunction(params)){ callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";} 
if(self.length>0){jQuery.ajax({url:url, type:type,dataType:"html",data:params}).done(function(responseText){ response=arguments;self.html(selector?
 jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector): responseText);}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR]);});}
return this;};jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};var docElem=window.document.documentElement;function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}
jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={}; if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1; if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(!doc){return;}
docElem=doc.documentElement; if(!jQuery.contains(docElem,elem)){return box;}

if(typeof elem.getBoundingClientRect!==strundefined){box=elem.getBoundingClientRect();}
win=getWindow(doc);return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft};},position:function(){if(!this[0]){return;}
var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0}; if(jQuery.css(elem,"position")==="fixed"){ offset=elem.getBoundingClientRect();}else{ offsetParent=this.offsetParent(); offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();} 
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);} 
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent||docElem;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}
if(win){win.scrollTo(!top?val:window.pageXOffset,top?val:window.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length,null);};});


jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop); return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){ jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){
 return elem.document.documentElement["client"+name];} 
if(elem.nodeType===9){doc=elem.documentElement; return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined? jQuery.css(elem,type,extra): jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.size=function(){return this.length;};jQuery.fn.andSelf=jQuery.fn.addBack;








if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
 
_jQuery=window.jQuery, _$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};

if(typeof noGlobal===strundefined){window.jQuery=window.$=jQuery;}
return jQuery;}));if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';
function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false
} 
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function($){'use strict';
var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.2.0'
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')
}
var $parent=$(selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.hasClass('alert')?$this:$this.parent()}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){ $parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(150):removeElement()}

function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert


$.fn.alert.noConflict=function(){$.fn.alert=old
return this}

$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';
var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.2.0'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state=state+'Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
$el[val](data[state]==null?this.options[state]:data[state]) 
setTimeout($.proxy(function(){if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked')&&this.$element.hasClass('active'))changed=false
else $parent.find('.active').removeClass('active')}
if(changed)$input.prop('checked',!this.$element.hasClass('active')).trigger('change')}
if(changed)this.$element.toggleClass('active')}

function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button


$.fn.button.noConflict=function(){$.fn.button=old
return this}

$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
Plugin.call($btn,'toggle')
e.preventDefault()})}(jQuery);+function($){'use strict';
var Carousel=function(element,options){this.$element=$(element).on('keydown.bs.carousel',$.proxy(this.keydown,this))
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=this.sliding=this.interval=this.$active=this.$items=null
this.options.pause=='hover'&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
Carousel.VERSION='3.2.0'
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true}
Carousel.prototype.keydown=function(e){switch(e.which){case 37:this.prev();break
case 39:this.next();break
default:return}
e.preventDefault()}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',$(this.$items[pos]))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||$active[type]()
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var fallback=type=='next'?'first':'last'
var that=this
if(!$next.length){if(!this.options.wrap)return
$next=this.$element.find('.item')[fallback]()}
if($next.hasClass('active'))return(this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')}
var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
 $active.addClass(direction)
$next.addClass(direction)
$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd($active.css('transition-duration').slice(0,-1)*1000)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)}
isCycling&&this.cycle()
return this}

function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel


$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}

$(document).on('click.bs.carousel.data-api','[data-slide], [data-slide-to]',function(e){var href
var $this=$(this)
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')) 
if(!$target.hasClass('carousel'))return
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
Plugin.call($target,options)
if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()})
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';
var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.transitioning=null
if(this.options.parent)this.$parent=$(this.options.parent)
if(this.options.toggle)this.toggle()}
Collapse.VERSION='3.2.0'
Collapse.DEFAULTS={toggle:true}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var actives=this.$parent&&this.$parent.find('> .panel > .in')
if(actives&&actives.length){var hasData=actives.data('bs.collapse')
if(hasData&&hasData.transitioning)return
Plugin.call(actives,'hide')
hasData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')[dimension](0)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse').removeClass('in')
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(350)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}

function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&option=='show')option=!option
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse


$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}

$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var href
var $this=$(this)
var target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'') 
var $target=$(target)
var data=$target.data('bs.collapse')
var option=data?'toggle':$this.data()
var parent=$this.attr('data-parent')
var $parent=parent&&$(parent)
if(!data||!data.transitioning){if($parent)$parent.find('[data-toggle="collapse"][data-parent="'+parent+'"]').not($this).addClass('collapsed')
$this[$target.hasClass('in')?'addClass':'removeClass']('collapsed')}
Plugin.call($target,option)})}(jQuery);+function($){'use strict';
var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.2.0'
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){ $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus')
$parent.toggleClass('open').trigger('shown.bs.dropdown',relatedTarget)}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27)/.test(e.keyCode))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if(!isActive||(isActive&&e.keyCode==27)){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.divider):visible a'
var $items=$parent.find('[role="menu"]'+desc+', [role="listbox"]'+desc)
if(!$items.length)return
var index=$items.index($items.filter(':focus'))
if(e.keyCode==38&&index>0)index-- if(e.keyCode==40&&index<$items.length-1)index++ if(!~index)index=0
$items.eq(index).trigger('focus')}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $parent=getParent($(this))
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$parent.removeClass('open').trigger('hidden.bs.dropdown',relatedTarget)})}
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')
}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}

function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown


$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}

$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle+', [role="menu"], [role="listbox"]',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';
var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$backdrop=this.isShown=null
this.scrollbarWidth=0
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.2.0'
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.$body.addClass('modal-open')
this.setScrollbar()
this.escape()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)
}
that.$element.show().scrollTop(0)
if(transition){that.$element[0].offsetWidth
}
that.$element.addClass('in').attr('aria-hidden',false)
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$element.find('.modal-dialog')
.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(300):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.$body.removeClass('modal-open')
this.resetScrollbar()
this.escape()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal')
.on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keyup.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keyup.dismiss.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this))
if(doAnimate)this.$backdrop[0].offsetWidth
 this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(150):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(150):callbackRemove()}else if(callback){callback()}}
Modal.prototype.checkScrollbar=function(){if(document.body.clientWidth>=window.innerWidth)return
this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
if(this.scrollbarWidth)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right','')}
Modal.prototype.measureScrollbar=function(){ var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}

function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal


$.fn.modal.noConflict=function(){$.fn.modal=old
return this}

$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,''))) 
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
 $target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';
var Tooltip=function(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.2.0'
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$(this.options.viewport.selector||this.options.viewport)
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(document.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var $parent=this.$element.parent()
var parentDim=this.getPosition($parent)
placement=placement=='bottom'&&pos.top+pos.height+actualHeight-parentDim.scroll>parentDim.height?'top':placement=='top'&&pos.top-parentDim.scroll-actualHeight<0?'bottom':placement=='right'&&pos.right+actualWidth>parentDim.width?'left':placement=='left'&&pos.left-actualWidth<parentDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(150):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
 
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10) 
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top=offset.top+marginTop
offset.left=offset.left+marginLeft

 
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in') 
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var arrowDelta=delta.left?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowPosition=delta.left?'left':'top'
var arrowOffsetPosition=delta.left?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],arrowPosition)}
Tooltip.prototype.replaceArrow=function(delta,dimension,position){this.arrow().css(position,delta?(50*(1-delta/dimension)+'%'):'')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(){var that=this
var $tip=this.tip()
var e=$.Event('hide.bs.'+this.type)
this.$element.removeAttr('aria-describedby')
function complete(){if(that.hoverState!='in')$tip.detach()
that.$element.trigger('hidden.bs.'+that.type)}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(150):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
return $.extend({},(typeof el.getBoundingClientRect=='function')?el.getBoundingClientRect():null,{scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop(),width:isBody?$(window).width():$element.outerWidth(),height:isBody?$(window).height():$element.outerHeight()},isBody?{top:0,left:0}:$element.offset())}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){ delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){ delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){ delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.width){ delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){return(this.$tip=this.$tip||$(this.options.template))}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide()
this.$element=null
this.options=null}}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
self.tip().hasClass('in')?self.leave(self):self.enter(self)}
Tooltip.prototype.destroy=function(){clearTimeout(this.timeout)
this.hide().$element.off('.'+this.type).removeData('bs.'+this.type)}

function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&option=='destroy')return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip


$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';
var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.2.0'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})

Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content').empty()[ this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')

if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
Popover.prototype.tip=function(){if(!this.$tip)this.$tip=$(this.options.template)
return this.$tip}

function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&option=='destroy')return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover


$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';
function ScrollSpy(element,options){var process=$.proxy(this.process,this)
this.$body=$('body')
this.$scrollElement=$(element).is('body')?$(window):$(element)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||'')+' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy',process)
this.refresh()
this.process()}
ScrollSpy.VERSION='3.2.0'
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
ScrollSpy.prototype.refresh=function(){var offsetMethod='offset'
var offsetBase=0
if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()}
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
var self=this
this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0])
self.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
if(activeTarget&&scrollTop<=offsets[0]){return activeTarget!=(i=targets[0])&&this.activate(i)}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}

function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy


$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}

$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';
var Tab=function(element){this.element=$(element)}
Tab.VERSION='3.2.0'
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')
}
if($this.parent('li').hasClass('active'))return
var previous=$ul.find('.active:last a')[0]
var e=$.Event('show.bs.tab',{relatedTarget:previous})
$this.trigger(e)
if(e.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.closest('li'),$ul)
this.activate($target,$target.parent(),function(){$this.trigger({type:'shown.bs.tab',relatedTarget:previous})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&$active.hasClass('fade')
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active')
element.addClass('active')
if(transition){element[0].offsetWidth
 element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu')){element.closest('li.dropdown').addClass('active')}
callback&&callback()}
transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(150):next()
$active.removeClass('in')}

function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab


$.fn.tab.noConflict=function(){$.fn.tab=old
return this}

$(document).on('click.bs.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault()
Plugin.call($(this),'show')})}(jQuery);+function($){'use strict';
var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=this.unpin=this.pinnedOffset=null
this.checkPosition()}
Affix.VERSION='3.2.0'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0,target:window}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var scrollHeight=$(document).height()
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.unpin!=null&&(scrollTop+this.unpin<=position.top)?false:offsetBottom!=null&&(position.top+this.$element.height()>=scrollHeight-offsetBottom)?'bottom':offsetTop!=null&&(scrollTop<=offsetTop)?'top':false
if(this.affixed===affix)return
if(this.unpin!=null)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace('affix','affixed')))
if(affix=='bottom'){this.$element.offset({top:scrollHeight-this.$element.height()-offsetBottom})}}

function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix


$.fn.affix.noConflict=function(){$.fn.affix=old
return this}

$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom)data.offset.bottom=data.offsetBottom
if(data.offsetTop)data.offset.top=data.offsetTop
Plugin.call($spy,data)})})}(jQuery);(function(window,document,$,undefined){(function(factory){"use strict"; if(typeof define==='function'&&define.amd)
{define('datatables',['jquery'],factory);}
else if(jQuery&&!jQuery.fn.dataTable)
{factory(jQuery);}}
(function($){"use strict";var DataTable;




var _ext; var _Api; var _api_register; var _api_registerPlural;
var _re_new_lines=/[\r\n]/g;var _re_html=/<.*?>/g;var _re_formatted_numeric=/[',$£€¥%]/g;var _re_date_start=/^[\d\+\-a-zA-Z]/;var _empty=function(d){return!d||d==='-'?true:false;};var _intVal=function(s){var integer=parseInt(s,10);return!isNaN(integer)&&isFinite(s)?integer:null;};var _isNumber=function(d,formatted){if(formatted&&typeof d==='string'){d=d.replace(_re_formatted_numeric,'');}
return!d||d==='-'||(!isNaN(parseFloat(d))&&isFinite(d));}; var _isHtml=function(d){return!d||typeof d==='string';};var _htmlNumeric=function(d,formatted){if(_empty(d)){return true;}
var html=_isHtml(d);return!html?null:_isNumber(_stripHtml(d),formatted)?true:null;};var _pluck=function(a,prop,prop2){var out=[];var i=0,ien=a.length;
 if(prop2!==undefined){for(;i<ien;i++){if(a[i]&&a[i][prop]){out.push(a[i][prop][prop2]);}}}
else{for(;i<ien;i++){if(a[i]){out.push(a[i][prop]);}}}
return out;};var _pluck_order=function(a,order,prop,prop2)
{var out=[];var i=0,ien=order.length;
 if(prop2!==undefined){for(;i<ien;i++){out.push(a[order[i]][prop][prop2]);}}
else{for(;i<ien;i++){out.push(a[order[i]][prop]);}}
return out;};var _range=function(len,start)
{var out=[];var end;if(start===undefined){start=0;end=len;}
else{end=start;start=len;}
for(var i=start;i<end;i++){out.push(i);}
return out;};var _stripHtml=function(d){return d.replace(_re_html,'');};var _unique=function(src)
{

var
out=[],val,i,ien=src.length,j,k=0;again:for(i=0;i<ien;i++){val=src[i];for(j=0;j<k;j++){if(out[j]===val){continue again;}}
out.push(val);k++;}
return out;};function _fnHungarianMap(o)
{var
hungarian='a aa ao as b fn i m o s ',match,newKey,map={};$.each(o,function(key,val){match=key.match(/^([^A-Z]+?)([A-Z])/);if(match&&hungarian.indexOf(match[1]+' ')!==-1)
{newKey=key.replace(match[0],match[2].toLowerCase());map[newKey]=key;if(match[1]==='o')
{_fnHungarianMap(o[key]);}}});o._hungarianMap=map;}
function _fnCamelToHungarian(src,user,force)
{if(!src._hungarianMap)
{_fnHungarianMap(src);}
var hungarianKey;$.each(user,function(key,val){hungarianKey=src._hungarianMap[key];if(hungarianKey!==undefined&&(force||user[hungarianKey]===undefined))
{user[hungarianKey]=user[key];if(hungarianKey.charAt(0)==='o')
{_fnCamelToHungarian(src[hungarianKey],user[key]);}}});}
function _fnLanguageCompat(oLanguage)
{var oDefaults=DataTable.defaults.oLanguage;var zeroRecords=oLanguage.sZeroRecords;if(!oLanguage.sEmptyTable&&zeroRecords&&oDefaults.sEmptyTable==="No data available in table")
{_fnMap(oLanguage,oLanguage,'sZeroRecords','sEmptyTable');}
if(!oLanguage.sLoadingRecords&&zeroRecords&&oDefaults.sLoadingRecords==="Loading...")
{_fnMap(oLanguage,oLanguage,'sZeroRecords','sLoadingRecords');}}
var _fnCompatMap=function(o,knew,old){if(o[knew]!==undefined){o[old]=o[knew];}};function _fnCompatOpts(init)
{_fnCompatMap(init,'ordering','bSort');_fnCompatMap(init,'orderMulti','bSortMulti');_fnCompatMap(init,'orderClasses','bSortClasses');_fnCompatMap(init,'orderCellsTop','bSortCellsTop');_fnCompatMap(init,'order','aaSorting');_fnCompatMap(init,'orderFixed','aaSortingFixed');_fnCompatMap(init,'paging','bPaginate');_fnCompatMap(init,'pagingType','sPaginationType');_fnCompatMap(init,'pageLength','iDisplayLength');_fnCompatMap(init,'searching','bFilter');}
function _fnCompatCols(init)
{_fnCompatMap(init,'orderable','bSortable');_fnCompatMap(init,'orderData','aDataSort');_fnCompatMap(init,'orderSequence','asSorting');_fnCompatMap(init,'orderDataType','sortDataType');}
function _fnBrowserDetect(settings)
{var browser=settings.oBrowser; var n=$('<div/>').css({position:'absolute',top:0,left:0,height:1,width:1,overflow:'hidden'}).append($('<div/>').css({position:'absolute',top:1,left:1,width:100,overflow:'scroll'}).append($('<div class="test"/>').css({width:'100%',height:10}))).appendTo('body');var test=n.find('.test');

 browser.bScrollOversize=test[0].offsetWidth===100;
browser.bScrollbarLeft=test.offset().left!==1;n.remove();}
function _fnAddColumn(oSettings,nTh)
{var oDefaults=DataTable.defaults.column;var iCol=oSettings.aoColumns.length;var oCol=$.extend({},DataTable.models.oColumn,oDefaults,{"sSortingClass":oSettings.oClasses.sSortable,"sSortingClassJUI":oSettings.oClasses.sSortJUI,"nTh":nTh?nTh:document.createElement('th'),"sTitle":oDefaults.sTitle?oDefaults.sTitle:nTh?nTh.innerHTML:'',"aDataSort":oDefaults.aDataSort?oDefaults.aDataSort:[iCol],"mData":oDefaults.mData?oDefaults.mData:iCol});oSettings.aoColumns.push(oCol);if(oSettings.aoPreSearchCols[iCol]===undefined||oSettings.aoPreSearchCols[iCol]===null)
{oSettings.aoPreSearchCols[iCol]=$.extend(true,{},DataTable.models.oSearch);}
else
{var oPre=oSettings.aoPreSearchCols[iCol];if(oPre.bRegex===undefined)
{oPre.bRegex=true;}
if(oPre.bSmart===undefined)
{oPre.bSmart=true;}
if(oPre.bCaseInsensitive===undefined)
{oPre.bCaseInsensitive=true;}}
_fnColumnOptions(oSettings,iCol,null);}
function _fnColumnOptions(oSettings,iCol,oOptions)
{var oCol=oSettings.aoColumns[iCol];var oClasses=oSettings.oClasses;if(oOptions!==undefined&&oOptions!==null)
{ _fnCompatCols(oOptions); _fnCamelToHungarian(DataTable.defaults.column,oOptions);if(oOptions.mDataProp!==undefined&&!oOptions.mData)
{oOptions.mData=oOptions.mDataProp;}
oCol._sManualType=oOptions.sType;
 if(oOptions.className&&!oOptions.sClass)
{oOptions.sClass=oOptions.className;}
$.extend(oCol,oOptions);_fnMap(oCol,oOptions,"sWidth","sWidthOrig");if(typeof oOptions.iDataSort==='number')
{oCol.aDataSort=[oOptions.iDataSort];}
_fnMap(oCol,oOptions,"aDataSort");}
var mDataSrc=oCol.mData;var mData=_fnGetObjectDataFn(mDataSrc);var mRender=oCol.mRender?_fnGetObjectDataFn(oCol.mRender):null;var attrTest=function(src){return typeof src==='string'&&src.indexOf('@')!==-1;};oCol._bAttrSrc=$.isPlainObject(mDataSrc)&&(attrTest(mDataSrc.sort)||attrTest(mDataSrc.type)||attrTest(mDataSrc.filter));oCol.fnGetData=function(oData,sSpecific){var innerData=mData(oData,sSpecific);if(oCol.mRender&&(sSpecific&&sSpecific!==''))
{return mRender(innerData,sSpecific,oData);}
return innerData;};oCol.fnSetData=_fnSetObjectDataFn(mDataSrc);if(!oSettings.oFeatures.bSort)
{oCol.bSortable=false;}
var bAsc=$.inArray('asc',oCol.asSorting)!==-1;var bDesc=$.inArray('desc',oCol.asSorting)!==-1;if(!oCol.bSortable||(!bAsc&&!bDesc))
{oCol.sSortingClass=oClasses.sSortableNone;oCol.sSortingClassJUI="";}
else if(bAsc&&!bDesc)
{oCol.sSortingClass=oClasses.sSortableAsc;oCol.sSortingClassJUI=oClasses.sSortJUIAscAllowed;}
else if(!bAsc&&bDesc)
{oCol.sSortingClass=oClasses.sSortableDesc;oCol.sSortingClassJUI=oClasses.sSortJUIDescAllowed;}}
function _fnAdjustColumnSizing(settings)
{if(settings.oFeatures.bAutoWidth!==false)
{var columns=settings.aoColumns;_fnCalculateColumnWidths(settings);for(var i=0,iLen=columns.length;i<iLen;i++)
{columns[i].nTh.style.width=columns[i].sWidth;}}
var scroll=settings.oScroll;if(scroll.sY!==''||scroll.sX!=='')
{_fnScrollDraw(settings);}
_fnCallbackFire(settings,null,'column-sizing',[settings]);}
function _fnVisibleToColumnIndex(oSettings,iMatch)
{var aiVis=_fnGetColumns(oSettings,'bVisible');return typeof aiVis[iMatch]==='number'?aiVis[iMatch]:null;}
function _fnColumnIndexToVisible(oSettings,iMatch)
{var aiVis=_fnGetColumns(oSettings,'bVisible');var iPos=$.inArray(iMatch,aiVis);return iPos!==-1?iPos:null;}
function _fnVisbleColumns(oSettings)
{return _fnGetColumns(oSettings,'bVisible').length;}
function _fnGetColumns(oSettings,sParam)
{var a=[];$.map(oSettings.aoColumns,function(val,i){if(val[sParam]){a.push(i);}});return a;}
function _fnColumnTypes(settings)
{var columns=settings.aoColumns;var data=settings.aoData;var types=DataTable.ext.type.detect;var i,ien,j,jen,k,ken;var col,cell,detectedType,cache; for(i=0,ien=columns.length;i<ien;i++){col=columns[i];cache=[];if(!col.sType&&col._sManualType){col.sType=col._sManualType;}
else if(!col.sType){for(j=0,jen=types.length;j<jen;j++){for(k=0,ken=data.length;k<ken;k++){
if(cache[k]===undefined){cache[k]=_fnGetCellData(settings,k,i,'type');}
detectedType=types[j](cache[k]);


 if(!detectedType||detectedType==='html'){break;}}
 
if(detectedType){col.sType=detectedType;break;}} 
if(!col.sType){col.sType='string';}}}}
function _fnApplyColumnDefs(oSettings,aoColDefs,aoCols,fn)
{var i,iLen,j,jLen,k,kLen,def; if(aoColDefs)
{for(i=aoColDefs.length-1;i>=0;i--)
{def=aoColDefs[i];var aTargets=def.targets!==undefined?def.targets:def.aTargets;if(!$.isArray(aTargets))
{aTargets=[aTargets];}
for(j=0,jLen=aTargets.length;j<jLen;j++)
{if(typeof aTargets[j]==='number'&&aTargets[j]>=0)
{while(oSettings.aoColumns.length<=aTargets[j])
{_fnAddColumn(oSettings);}
fn(aTargets[j],def);}
else if(typeof aTargets[j]==='number'&&aTargets[j]<0)
{fn(oSettings.aoColumns.length+aTargets[j],def);}
else if(typeof aTargets[j]==='string')
{for(k=0,kLen=oSettings.aoColumns.length;k<kLen;k++)
{if(aTargets[j]=="_all"||$(oSettings.aoColumns[k].nTh).hasClass(aTargets[j]))
{fn(k,def);}}}}}} 
if(aoCols)
{for(i=0,iLen=aoCols.length;i<iLen;i++)
{fn(i,aoCols[i]);}}}
function _fnAddData(oSettings,aDataIn,nTr,anTds)
{var iRow=oSettings.aoData.length;var oData=$.extend(true,{},DataTable.models.oRow,{src:nTr?'dom':'data'});oData._aData=aDataIn;oSettings.aoData.push(oData);var nTd,sThisType;var columns=oSettings.aoColumns;for(var i=0,iLen=columns.length;i<iLen;i++)
{

 if(nTr){_fnSetCellData(oSettings,iRow,i,_fnGetCellData(oSettings,iRow,i));}
columns[i].sType=null;}
oSettings.aiDisplayMaster.push(iRow);if(!oSettings.oFeatures.bDeferRender)
{_fnCreateTr(oSettings,iRow,nTr,anTds);}
return iRow;}
function _fnAddTr(settings,trs)
{var row; if(!(trs instanceof $)){trs=$(trs);}
return trs.map(function(i,el){row=_fnGetRowElements(settings,el);return _fnAddData(settings,row.data,el,row.cells);});}
function _fnNodeToDataIndex(oSettings,n)
{return(n._DT_RowIndex!==undefined)?n._DT_RowIndex:null;}
function _fnNodeToColumnIndex(oSettings,iRow,n)
{return $.inArray(n,oSettings.aoData[iRow].anCells);}
function _fnGetRowData(oSettings,iRow,sSpecific,aiColumns)
{var out=[];for(var i=0,iLen=aiColumns.length;i<iLen;i++)
{out.push(_fnGetCellData(oSettings,iRow,aiColumns[i],sSpecific));}
return out;}
function _fnGetCellData(oSettings,iRow,iCol,sSpecific)
{var oCol=oSettings.aoColumns[iCol];var oData=oSettings.aoData[iRow]._aData;var sData=oCol.fnGetData(oData,sSpecific);if(sData===undefined)
{if(oSettings.iDrawError!=oSettings.iDraw&&oCol.sDefaultContent===null)
{_fnLog(oSettings,0,"Requested unknown parameter "+
(typeof oCol.mData=='function'?'{function}':"'"+oCol.mData+"'")+" for row "+iRow,4);oSettings.iDrawError=oSettings.iDraw;}
return oCol.sDefaultContent;}
if((sData===oData||sData===null)&&oCol.sDefaultContent!==null)
{sData=oCol.sDefaultContent;}
else if(typeof sData==='function')
{ return sData();}
if(sData===null&&sSpecific=='display')
{return'';}
return sData;}
function _fnSetCellData(oSettings,iRow,iCol,val)
{var oCol=oSettings.aoColumns[iCol];var oData=oSettings.aoData[iRow]._aData;oCol.fnSetData(oData,val);} 
var __reArray=/\[.*?\]$/;var __reFn=/\(\)$/;function _fnSplitObjNotation(str)
{return $.map(str.match(/(\\.|[^\.])+/g),function(s){return s.replace('\\.','.');});}
function _fnGetObjectDataFn(mSource)
{if($.isPlainObject(mSource))
{var o={};$.each(mSource,function(key,val){if(val){o[key]=_fnGetObjectDataFn(val);}});return function(data,type,extra){return o[o[type]!==undefined?type:'_'](data,type,extra);};}
else if(mSource===null)
{return function(data,type){return data;};}
else if(typeof mSource==='function')
{return function(data,type,extra){return mSource(data,type,extra);};}
else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1||mSource.indexOf('(')!==-1))
{var fetchData=function(data,type,src){var arrayNotation,funcNotation,out,innerSrc;if(src!=="")
{var a=_fnSplitObjNotation(src);for(var i=0,iLen=a.length;i<iLen;i++)
{ arrayNotation=a[i].match(__reArray);funcNotation=a[i].match(__reFn);if(arrayNotation)
{ a[i]=a[i].replace(__reArray,''); if(a[i]!==""){data=data[a[i]];}
out=[]; a.splice(0,i+1);innerSrc=a.join('.'); for(var j=0,jLen=data.length;j<jLen;j++){out.push(fetchData(data[j],type,innerSrc));}
 
var join=arrayNotation[0].substring(1,arrayNotation[0].length-1);data=(join==="")?out:out.join(join);
 break;}
else if(funcNotation)
{ a[i]=a[i].replace(__reFn,'');data=data[a[i]]();continue;}
if(data===null||data[a[i]]===undefined)
{return undefined;}
data=data[a[i]];}}
return data;};return function(data,type){return fetchData(data,type,mSource);};}
else
{return function(data,type){return data[mSource];};}}
function _fnSetObjectDataFn(mSource)
{if($.isPlainObject(mSource))
{return _fnSetObjectDataFn(mSource._);}
else if(mSource===null)
{return function(data,val){};}
else if(typeof mSource==='function')
{return function(data,val){mSource(data,'set',val);};}
else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1||mSource.indexOf('(')!==-1))
{var setData=function(data,val,src){var a=_fnSplitObjNotation(src),b;var aLast=a[a.length-1];var arrayNotation,funcNotation,o,innerSrc;for(var i=0,iLen=a.length-1;i<iLen;i++)
{ arrayNotation=a[i].match(__reArray);funcNotation=a[i].match(__reFn);if(arrayNotation)
{a[i]=a[i].replace(__reArray,'');data[a[i]]=[]; b=a.slice();b.splice(0,i+1);innerSrc=b.join('.'); for(var j=0,jLen=val.length;j<jLen;j++)
{o={};setData(o,val[j],innerSrc);data[a[i]].push(o);}
 
return;}
else if(funcNotation)
{ a[i]=a[i].replace(__reFn,'');data=data[a[i]](val);}
 
if(data[a[i]]===null||data[a[i]]===undefined)
{data[a[i]]={};}
data=data[a[i]];} 
if(aLast.match(__reFn))
{ data=data[aLast.replace(__reFn,'')](val);}
else
{
 data[aLast.replace(__reArray,'')]=val;}};return function(data,val){return setData(data,val,mSource);};}
else
{return function(data,val){data[mSource]=val;};}}
function _fnGetDataMaster(settings)
{return _pluck(settings.aoData,'_aData');}
function _fnClearTable(settings)
{settings.aoData.length=0;settings.aiDisplayMaster.length=0;settings.aiDisplay.length=0;}
function _fnDeleteIndex(a,iTarget,splice)
{var iTargetIndex=-1;for(var i=0,iLen=a.length;i<iLen;i++)
{if(a[i]==iTarget)
{iTargetIndex=i;}
else if(a[i]>iTarget)
{a[i]--;}}
if(iTargetIndex!=-1&&splice===undefined)
{a.splice(iTargetIndex,1);}}
function _fnInvalidateRow(settings,rowIdx,src,column)
{var row=settings.aoData[rowIdx];var i,ien;if(src==='dom'||((!src||src==='auto')&&row.src==='dom')){ row._aData=_fnGetRowElements(settings,row.nTr).data;}
else{ var cells=row.anCells;for(i=0,ien=cells.length;i<ien;i++){cells[i].innerHTML=_fnGetCellData(settings,rowIdx,i,'display');}}
row._aSortData=null;row._aFilterData=null;
 var cols=settings.aoColumns;if(column!==undefined){cols[column].sType=null;}
else{for(i=0,ien=cols.length;i<ien;i++){cols[i].sType=null;}} 
_fnRowAttributes(row);}
function _fnGetRowElements(settings,row)
{var
d=[],tds=[],td=row.firstChild,name,col,o,i=0,contents,columns=settings.aoColumns;var attr=function(str,data,td){if(typeof str==='string'){var idx=str.indexOf('@');if(idx!==-1){var src=str.substring(idx+1);o['@'+src]=td.getAttribute(src);}}};while(td){name=td.nodeName.toUpperCase();if(name=="TD"||name=="TH"){col=columns[i];contents=$.trim(td.innerHTML);if(col&&col._bAttrSrc){o={display:contents};attr(col.mData.sort,o,td);attr(col.mData.type,o,td);attr(col.mData.filter,o,td);d.push(o);}
else{d.push(contents);}
tds.push(td);i++;}
td=td.nextSibling;}
return{data:d,cells:tds};}
function _fnCreateTr(oSettings,iRow,nTrIn,anTds)
{var
row=oSettings.aoData[iRow],rowData=row._aData,cells=[],nTr,nTd,oCol,i,iLen;if(row.nTr===null)
{nTr=nTrIn||document.createElement('tr');row.nTr=nTr;row.anCells=cells;nTr._DT_RowIndex=iRow;_fnRowAttributes(row);for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{oCol=oSettings.aoColumns[i];nTd=nTrIn?anTds[i]:document.createElement(oCol.sCellType);cells.push(nTd); if(!nTrIn||oCol.mRender||oCol.mData!==i)
{nTd.innerHTML=_fnGetCellData(oSettings,iRow,i,'display');}
if(oCol.sClass!==null)
{nTd.className+=' '+oCol.sClass;} 
if(oCol.bVisible&&!nTrIn)
{nTr.appendChild(nTd);}
else if(!oCol.bVisible&&nTrIn)
{nTd.parentNode.removeChild(nTd);}
if(oCol.fnCreatedCell)
{oCol.fnCreatedCell.call(oSettings.oInstance,nTd,_fnGetCellData(oSettings,iRow,i,'display'),rowData,iRow,i);}}
_fnCallbackFire(oSettings,'aoRowCreatedCallback',null,[nTr,rowData,iRow]);}}
function _fnRowAttributes(row)
{var tr=row.nTr;var data=row._aData;if(tr){if(data.DT_RowId){tr.id=data.DT_RowId;}
if(data.DT_RowClass){ var a=data.DT_RowClass.split(' ');row.__rowc=row.__rowc?_unique(row.__rowc.concat(a)):a;$(tr).removeClass(row.__rowc.join(' ')).addClass(data.DT_RowClass);}
if(data.DT_RowData){$(tr).data(data.DT_RowData);}}}
function _fnBuildHead(oSettings)
{var i,ien,cell,row,column;var thead=oSettings.nTHead;var tfoot=oSettings.nTFoot;var createHeader=$('th, td',thead).length===0;var classes=oSettings.oClasses;var columns=oSettings.aoColumns;if(createHeader){row=$('<tr/>').appendTo(thead);}
for(i=0,ien=columns.length;i<ien;i++){column=columns[i];cell=$(column.nTh).addClass(column.sClass);if(createHeader){cell.appendTo(row);} 
if(oSettings.oFeatures.bSort){cell.addClass(column.sSortingClass);if(column.bSortable!==false){cell.attr('tabindex',oSettings.iTabIndex).attr('aria-controls',oSettings.sTableId);_fnSortAttachListener(oSettings,column.nTh,i);}}
if(column.sTitle!=cell.html()){cell.html(column.sTitle);}
_fnRenderer(oSettings,'header')(oSettings,cell,column,i,classes);}
if(createHeader){_fnDetectHeader(oSettings.aoHeader,thead);}
$(thead).find('>tr').attr('role','row');$(thead).find('>tr>th, >tr>td').addClass(classes.sHeaderTH);$(tfoot).find('>tr>th, >tr>td').addClass(classes.sFooterTH);


 if(tfoot!==null){var cells=oSettings.aoFooter[0];for(i=0,ien=cells.length;i<ien;i++){column=columns[i];column.nTf=cells[i].cell;if(column.sClass){$(column.nTf).addClass(column.sClass);}}}}
function _fnDrawHead(oSettings,aoSource,bIncludeHidden)
{var i,iLen,j,jLen,k,kLen,n,nLocalTr;var aoLocal=[];var aApplied=[];var iColumns=oSettings.aoColumns.length;var iRowspan,iColspan;if(!aoSource)
{return;}
if(bIncludeHidden===undefined)
{bIncludeHidden=false;}
for(i=0,iLen=aoSource.length;i<iLen;i++)
{aoLocal[i]=aoSource[i].slice();aoLocal[i].nTr=aoSource[i].nTr;for(j=iColumns-1;j>=0;j--)
{if(!oSettings.aoColumns[j].bVisible&&!bIncludeHidden)
{aoLocal[i].splice(j,1);}}
aApplied.push([]);}
for(i=0,iLen=aoLocal.length;i<iLen;i++)
{nLocalTr=aoLocal[i].nTr;if(nLocalTr)
{while((n=nLocalTr.firstChild))
{nLocalTr.removeChild(n);}}
for(j=0,jLen=aoLocal[i].length;j<jLen;j++)
{iRowspan=1;iColspan=1;if(aApplied[i][j]===undefined)
{nLocalTr.appendChild(aoLocal[i][j].cell);aApplied[i][j]=1;while(aoLocal[i+iRowspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i+iRowspan][j].cell)
{aApplied[i+iRowspan][j]=1;iRowspan++;}
while(aoLocal[i][j+iColspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i][j+iColspan].cell)
{for(k=0;k<iRowspan;k++)
{aApplied[i+k][j+iColspan]=1;}
iColspan++;}
aoLocal[i][j].cell.rowSpan=iRowspan;aoLocal[i][j].cell.colSpan=iColspan;}}}}
function _fnDraw(oSettings)
{var aPreDraw=_fnCallbackFire(oSettings,'aoPreDrawCallback','preDraw',[oSettings]);if($.inArray(false,aPreDraw)!==-1)
{_fnProcessingDisplay(oSettings,false);return;}
var i,iLen,n;var anRows=[];var iRowCount=0;var asStripeClasses=oSettings.asStripeClasses;var iStripes=asStripeClasses.length;var iOpenRows=oSettings.aoOpenRows.length;var oLang=oSettings.oLanguage;var iInitDisplayStart=oSettings.iInitDisplayStart;var bServerSide=_fnDataSource(oSettings)=='ssp';var aiDisplay=oSettings.aiDisplay;oSettings.bDrawing=true;if(iInitDisplayStart!==undefined&&iInitDisplayStart!==-1)
{oSettings._iDisplayStart=bServerSide?iInitDisplayStart:iInitDisplayStart>=oSettings.fnRecordsDisplay()?0:iInitDisplayStart;oSettings.iInitDisplayStart=-1;}
var iDisplayStart=oSettings._iDisplayStart;var iDisplayEnd=oSettings.fnDisplayEnd();if(oSettings.bDeferLoading)
{oSettings.bDeferLoading=false;oSettings.iDraw++;_fnProcessingDisplay(oSettings,false);}
else if(!bServerSide)
{oSettings.iDraw++;}
else if(!oSettings.bDestroying&&!_fnAjaxUpdate(oSettings))
{return;}
if(aiDisplay.length!==0)
{var iStart=bServerSide?0:iDisplayStart;var iEnd=bServerSide?oSettings.aoData.length:iDisplayEnd;for(var j=iStart;j<iEnd;j++)
{var iDataIndex=aiDisplay[j];var aoData=oSettings.aoData[iDataIndex];if(aoData.nTr===null)
{_fnCreateTr(oSettings,iDataIndex);}
var nRow=aoData.nTr;if(iStripes!==0)
{var sStripe=asStripeClasses[iRowCount%iStripes];if(aoData._sRowStripe!=sStripe)
{$(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);aoData._sRowStripe=sStripe;}}
_fnCallbackFire(oSettings,'aoRowCallback',null,[nRow,aoData._aData,iRowCount,j]);anRows.push(nRow);iRowCount++;}}
else
{var sZero=oLang.sZeroRecords;if(oSettings.iDraw==1&&_fnDataSource(oSettings)=='ajax')
{sZero=oLang.sLoadingRecords;}
else if(oLang.sEmptyTable&&oSettings.fnRecordsTotal()===0)
{sZero=oLang.sEmptyTable;}
anRows[0]=$('<tr/>',{'class':iStripes?asStripeClasses[0]:''}).append($('<td />',{'valign':'top','colSpan':_fnVisbleColumns(oSettings),'class':oSettings.oClasses.sRowEmpty}).html(sZero))[0];}
_fnCallbackFire(oSettings,'aoHeaderCallback','header',[$(oSettings.nTHead).children('tr')[0],_fnGetDataMaster(oSettings),iDisplayStart,iDisplayEnd,aiDisplay]);_fnCallbackFire(oSettings,'aoFooterCallback','footer',[$(oSettings.nTFoot).children('tr')[0],_fnGetDataMaster(oSettings),iDisplayStart,iDisplayEnd,aiDisplay]);var body=$(oSettings.nTBody);body.children().detach();body.append($(anRows));_fnCallbackFire(oSettings,'aoDrawCallback','draw',[oSettings]);oSettings.bSorted=false;oSettings.bFiltered=false;oSettings.bDrawing=false;}
function _fnReDraw(settings,holdPosition)
{var
features=settings.oFeatures,sort=features.bSort,filter=features.bFilter;if(sort){_fnSort(settings);}
if(filter){_fnFilterComplete(settings,settings.oPreviousSearch);}
else{ settings.aiDisplay=settings.aiDisplayMaster.slice();}
if(holdPosition!==true){settings._iDisplayStart=0;}
_fnDraw(settings);}
function _fnAddOptionsHtml(oSettings)
{var nHolding=$('<div></div>')[0];oSettings.nTable.parentNode.insertBefore(nHolding,oSettings.nTable);oSettings.nTableWrapper=$('<div id="'+oSettings.sTableId+'_wrapper" class="'+oSettings.oClasses.sWrapper+'" role="grid"></div>')[0];oSettings.nTableReinsertBefore=oSettings.nTable.nextSibling;var nInsertNode=oSettings.nTableWrapper;var aDom=oSettings.sDom.split('');var nTmp,iPushFeature,cOption,nNewNode,cNext,sAttr,j;for(var i=0;i<aDom.length;i++)
{iPushFeature=0;cOption=aDom[i];if(cOption=='<')
{nNewNode=$('<div></div>')[0];cNext=aDom[i+1];if(cNext=="'"||cNext=='"')
{sAttr="";j=2;while(aDom[i+j]!=cNext)
{sAttr+=aDom[i+j];j++;}
if(sAttr=="H")
{sAttr=oSettings.oClasses.sJUIHeader;}
else if(sAttr=="F")
{sAttr=oSettings.oClasses.sJUIFooter;}
if(sAttr.indexOf('.')!=-1)
{var aSplit=sAttr.split('.');nNewNode.id=aSplit[0].substr(1,aSplit[0].length-1);nNewNode.className=aSplit[1];}
else if(sAttr.charAt(0)=="#")
{nNewNode.id=sAttr.substr(1,sAttr.length-1);}
else
{nNewNode.className=sAttr;}
i+=j;}
nInsertNode.appendChild(nNewNode);nInsertNode=nNewNode;}
else if(cOption=='>')
{nInsertNode=nInsertNode.parentNode;}
else if(cOption=='l'&&oSettings.oFeatures.bPaginate&&oSettings.oFeatures.bLengthChange)
{nTmp=_fnFeatureHtmlLength(oSettings);iPushFeature=1;}
else if(cOption=='f'&&oSettings.oFeatures.bFilter)
{nTmp=_fnFeatureHtmlFilter(oSettings);iPushFeature=1;}
else if(cOption=='r'&&oSettings.oFeatures.bProcessing)
{nTmp=_fnFeatureHtmlProcessing(oSettings);iPushFeature=1;}
else if(cOption=='t')
{nTmp=_fnFeatureHtmlTable(oSettings);iPushFeature=1;}
else if(cOption=='i'&&oSettings.oFeatures.bInfo)
{nTmp=_fnFeatureHtmlInfo(oSettings);iPushFeature=1;}
else if(cOption=='p'&&oSettings.oFeatures.bPaginate)
{nTmp=_fnFeatureHtmlPaginate(oSettings);iPushFeature=1;}
else if(DataTable.ext.feature.length!==0)
{var aoFeatures=DataTable.ext.feature;for(var k=0,kLen=aoFeatures.length;k<kLen;k++)
{if(cOption==aoFeatures[k].cFeature)
{nTmp=aoFeatures[k].fnInit(oSettings);if(nTmp)
{iPushFeature=1;}
break;}}}
if(iPushFeature==1&&nTmp!==null)
{if(typeof oSettings.aanFeatures[cOption]!=='object')
{oSettings.aanFeatures[cOption]=[];}
oSettings.aanFeatures[cOption].push(nTmp);nInsertNode.appendChild(nTmp);}}
nHolding.parentNode.replaceChild(oSettings.nTableWrapper,nHolding);}
function _fnDetectHeader(aLayout,nThead)
{var nTrs=$(nThead).children('tr');var nTr,nCell;var i,k,l,iLen,jLen,iColShifted,iColumn,iColspan,iRowspan;var bUnique;var fnShiftCol=function(a,i,j){var k=a[i];while(k[j]){j++;}
return j;};aLayout.splice(0,aLayout.length);for(i=0,iLen=nTrs.length;i<iLen;i++)
{aLayout.push([]);}
for(i=0,iLen=nTrs.length;i<iLen;i++)
{nTr=nTrs[i];iColumn=0;nCell=nTr.firstChild;while(nCell){if(nCell.nodeName.toUpperCase()=="TD"||nCell.nodeName.toUpperCase()=="TH")
{iColspan=nCell.getAttribute('colspan')*1;iRowspan=nCell.getAttribute('rowspan')*1;iColspan=(!iColspan||iColspan===0||iColspan===1)?1:iColspan;iRowspan=(!iRowspan||iRowspan===0||iRowspan===1)?1:iRowspan;iColShifted=fnShiftCol(aLayout,i,iColumn);bUnique=iColspan===1?true:false;for(l=0;l<iColspan;l++)
{for(k=0;k<iRowspan;k++)
{aLayout[i+k][iColShifted+l]={"cell":nCell,"unique":bUnique};aLayout[i+k].nTr=nTr;}}}
nCell=nCell.nextSibling;}}}
function _fnGetUniqueThs(oSettings,nHeader,aLayout)
{var aReturn=[];if(!aLayout)
{aLayout=oSettings.aoHeader;if(nHeader)
{aLayout=[];_fnDetectHeader(aLayout,nHeader);}}
for(var i=0,iLen=aLayout.length;i<iLen;i++)
{for(var j=0,jLen=aLayout[i].length;j<jLen;j++)
{if(aLayout[i][j].unique&&(!aReturn[j]||!oSettings.bSortCellsTop))
{aReturn[j]=aLayout[i][j].cell;}}}
return aReturn;}
function _fnBuildAjax(oSettings,data,fn)
{ _fnCallbackFire(oSettings,'aoServerParams','serverParams',[data]); if(data&&data.__legacy){var tmp={};var rbracket=/(.*?)\[\]$/;$.each(data,function(key,val){var match=val.name.match(rbracket);if(match){ var name=match[0];if(!tmp[name]){tmp[name]=[];}
tmp[name].push(val.value);}
else{tmp[val.name]=val.value;}});data=tmp;}
var ajaxData;var ajax=oSettings.ajax;var instance=oSettings.oInstance;if($.isPlainObject(ajax)&&ajax.data)
{ajaxData=ajax.data;var newData=$.isFunction(ajaxData)?ajaxData(data): ajaxData;
 
data=$.isFunction(ajaxData)&&newData?newData:$.extend(true,data,newData);
delete ajax.data;}
var baseAjax={"data":data,"success":function(json){var error=json.error||json.sError;if(error){oSettings.oApi._fnLog(oSettings,0,error);}
oSettings.json=json;_fnCallbackFire(oSettings,null,'xhr',[oSettings,json]);fn(json);},"dataType":"json","cache":false,"type":oSettings.sServerMethod,"error":function(xhr,error,thrown){var log=oSettings.oApi._fnLog;if(error=="parsererror"){log(oSettings,0,'Invalid JSON response',1);}
else{log(oSettings,0,'Ajax error',7);}}};if(oSettings.fnServerData)
{ oSettings.fnServerData.call(instance,oSettings.sAjaxSource,data,fn,oSettings);}
else if(oSettings.sAjaxSource||typeof ajax==='string')
{ oSettings.jqXHR=$.ajax($.extend(baseAjax,{url:ajax||oSettings.sAjaxSource}));}
else if($.isFunction(ajax))
{ oSettings.jqXHR=ajax.call(instance,data,fn,oSettings);}
else
{ oSettings.jqXHR=$.ajax($.extend(baseAjax,ajax)); ajax.data=ajaxData;}}
function _fnAjaxUpdate(oSettings)
{if(oSettings.bAjaxDataGet)
{oSettings.iDraw++;_fnProcessingDisplay(oSettings,true);var iColumns=oSettings.aoColumns.length;var aoData=_fnAjaxParameters(oSettings);_fnBuildAjax(oSettings,aoData,function(json){_fnAjaxUpdateDraw(oSettings,json);},oSettings);return false;}
return true;}
function _fnAjaxParameters(settings)
{var
columns=settings.aoColumns,columnCount=columns.length,features=settings.oFeatures,preSearch=settings.oPreviousSearch,preColSearch=settings.aoPreSearchCols,i,data=[],dataProp,column,columnSearch,sort=_fnSortFlatten(settings),displayStart=settings._iDisplayStart,displayLength=features.bPaginate!==false?settings._iDisplayLength:-1;var param=function(name,value){data.push({'name':name,'value':value});}; param('sEcho',settings.iDraw);param('iColumns',columnCount);param('sColumns',_pluck(columns,'sName').join(','));param('iDisplayStart',displayStart);param('iDisplayLength',displayLength); var d={draw:settings.iDraw,columns:[],order:[],start:displayStart,length:displayLength,search:{value:preSearch.sSearch,regex:preSearch.bRegex}};for(i=0;i<columnCount;i++){column=columns[i];columnSearch=preColSearch[i];dataProp=typeof column.mData=="function"?'function':column.mData;d.columns.push({data:dataProp,name:column.sName,searchable:column.bSearchable,orderable:column.bSortable,search:{value:columnSearch.sSearch,regex:columnSearch.bRegex}});param("mDataProp_"+i,dataProp);if(features.bFilter){param('sSearch_'+i,columnSearch.sSearch);param('bRegex_'+i,columnSearch.bRegex);param('bSearchable_'+i,column.bSearchable);}
if(features.bSort){param('bSortable_'+i,column.bSortable);}}
$.each(sort,function(i,val){d.order.push({column:val.col,dir:val.dir});param('iSortCol_'+i,val.col);param('sSortDir_'+i,val.dir);});if(features.bFilter){param('sSearch',preSearch.sSearch);param('bRegex',preSearch.bRegex);}
if(features.bSort){param('iSortingCols',sort.length);}
data.__legacy=true;return settings.sAjaxSource||DataTable.ext.legacy.ajax?data:d;}
function _fnAjaxUpdateDraw(settings,json)
{ var compat=function(old,modern){return json[old]!==undefined?json[old]:json[modern];};var draw=compat('sEcho','draw');var recordsTotal=compat('iTotalRecords','recordsTotal');var rocordsFiltered=compat('iTotalDisplayRecords','recordsFiltered');if(draw){ if(draw*1<settings.iDraw){return;}
settings.iDraw=draw*1;}
_fnClearTable(settings);settings._iRecordsTotal=parseInt(recordsTotal,10);settings._iRecordsDisplay=parseInt(rocordsFiltered,10);var data=_fnAjaxDataSrc(settings,json);for(var i=0,ien=data.length;i<ien;i++){_fnAddData(settings,data[i]);}
settings.aiDisplay=settings.aiDisplayMaster.slice();settings.bAjaxDataGet=false;_fnDraw(settings);if(!settings._bInitComplete){_fnInitComplete(settings,json);}
settings.bAjaxDataGet=true;_fnProcessingDisplay(settings,false);}
function _fnAjaxDataSrc(oSettings,json)
{var dataSrc=$.isPlainObject(oSettings.ajax)&&oSettings.ajax.dataSrc!==undefined?oSettings.ajax.dataSrc:oSettings.sAjaxDataProp;
 if(dataSrc==='data'){return json.aaData||json[dataSrc];}
return dataSrc!==""?_fnGetObjectDataFn(dataSrc)(json):json;}
function _fnFeatureHtmlFilter(settings)
{var classes=settings.oClasses;var tableId=settings.sTableId;var previousSearch=settings.oPreviousSearch;var features=settings.aanFeatures;var input='<input type="search" class="'+classes.sFilterInput+'"/>';var str=settings.oLanguage.sSearch;str=str.match(/_INPUT_/)?str.replace('_INPUT_',input):str+input;var filter=$('<div/>',{'id':!features.f?tableId+'_filter':null,'class':classes.sFilter}).append($('<label/>').append(str));var jqFilter=$('input[type="search"]',filter).val(previousSearch.sSearch.replace('"','&quot;')).bind('keyup.DT search.DT input.DT paste.DT cut.DT',function(e){var n=features.f;var val=!this.value?"":this.value;if(val!=previousSearch.sSearch){_fnFilterComplete(settings,{"sSearch":val,"bRegex":previousSearch.bRegex,"bSmart":previousSearch.bSmart,"bCaseInsensitive":previousSearch.bCaseInsensitive}); settings._iDisplayStart=0;_fnDraw(settings);}}).bind('keypress.DT',function(e){if(e.keyCode==13){return false;}}).attr('aria-controls',tableId); $(settings.nTable).on('filter.DT',function(){
try{if(jqFilter[0]!==document.activeElement){jqFilter.val(previousSearch.sSearch);}}
catch(e){}});return filter[0];}
function _fnFilterComplete(oSettings,oInput,iForce)
{var oPrevSearch=oSettings.oPreviousSearch;var aoPrevSearch=oSettings.aoPreSearchCols;var fnSaveFilter=function(oFilter){oPrevSearch.sSearch=oFilter.sSearch;oPrevSearch.bRegex=oFilter.bRegex;oPrevSearch.bSmart=oFilter.bSmart;oPrevSearch.bCaseInsensitive=oFilter.bCaseInsensitive;};
_fnColumnTypes(oSettings);if(_fnDataSource(oSettings)!='ssp')
{_fnFilter(oSettings,oInput.sSearch,iForce,oInput.bRegex,oInput.bSmart,oInput.bCaseInsensitive);fnSaveFilter(oInput);for(var i=0;i<aoPrevSearch.length;i++)
{_fnFilterColumn(oSettings,aoPrevSearch[i].sSearch,i,aoPrevSearch[i].bRegex,aoPrevSearch[i].bSmart,aoPrevSearch[i].bCaseInsensitive);}
_fnFilterCustom(oSettings);}
else
{fnSaveFilter(oInput);}
oSettings.bFiltered=true;_fnCallbackFire(oSettings,null,'search',[oSettings]);}
function _fnFilterCustom(oSettings)
{var afnFilters=DataTable.ext.search;var aiFilterColumns=_fnGetColumns(oSettings,'bSearchable');for(var i=0,iLen=afnFilters.length;i<iLen;i++)
{var iCorrector=0;for(var j=0,jLen=oSettings.aiDisplay.length;j<jLen;j++)
{var iDisIndex=oSettings.aiDisplay[j-iCorrector];var bTest=afnFilters[i](oSettings,_fnGetRowData(oSettings,iDisIndex,'filter',aiFilterColumns),iDisIndex);if(!bTest)
{oSettings.aiDisplay.splice(j-iCorrector,1);iCorrector++;}}}}
function _fnFilterColumn(settings,searchStr,colIdx,regex,smart,caseInsensitive)
{if(searchStr===''){return;}
var data;var display=settings.aiDisplay;var rpSearch=_fnFilterCreateSearch(searchStr,regex,smart,caseInsensitive);for(var i=display.length-1;i>=0;i--){data=settings.aoData[display[i]]._aFilterData[colIdx];if(!rpSearch.test(data)){display.splice(i,1);}}}
function _fnFilter(settings,input,force,regex,smart,caseInsensitive)
{var rpSearch=_fnFilterCreateSearch(input,regex,smart,caseInsensitive);var prevSearch=settings.oPreviousSearch.sSearch;var displayMaster=settings.aiDisplayMaster;var display,invalidated,i; if(DataTable.ext.search.length!==0){force=true;} 
invalidated=_fnFilterData(settings); if(input.length<=0){settings.aiDisplay=displayMaster.slice();}
else{ if(invalidated||force||prevSearch.length>input.length||input.indexOf(prevSearch)!==0||settings.bSorted

){settings.aiDisplay=displayMaster.slice();} 
display=settings.aiDisplay;for(i=display.length-1;i>=0;i--){if(!rpSearch.test(settings.aoData[display[i]]._sFilterRow)){display.splice(i,1);}}}}
function _fnFilterCreateSearch(sSearch,bRegex,bSmart,bCaseInsensitive)
{var asSearch,sRegExpString=bRegex?sSearch:_fnEscapeRegex(sSearch);if(bSmart)
{asSearch=sRegExpString.split(' ');sRegExpString='^(?=.*?'+asSearch.join(')(?=.*?')+').*$';}
return new RegExp(sRegExpString,bCaseInsensitive?"i":"");}
function _fnEscapeRegex(sVal)
{var acEscape=['/','.','*','+','?','|','(',')','[',']','{','}','\\','$','^','-'];var reReplace=new RegExp('(\\'+acEscape.join('|\\')+')','g');return sVal.replace(reReplace,'\\$1');}
var __filter_div=$('<div>')[0];var __filter_div_textContent=__filter_div.textContent!==undefined;function _fnFilterData(settings)
{var columns=settings.aoColumns;var column;var i,j,ien,jen,filterData,cellData,row;var fomatters=DataTable.ext.type.search;var wasInvalidated=false;for(i=0,ien=settings.aoData.length;i<ien;i++){row=settings.aoData[i];if(!row._aFilterData){filterData=[];for(j=0,jen=columns.length;j<jen;j++){column=columns[j];if(column.bSearchable){cellData=_fnGetCellData(settings,i,j,'filter');cellData=fomatters[column.sType]?fomatters[column.sType](cellData):cellData!==null?cellData:'';}
else{cellData='';}

 
if(cellData.indexOf&&cellData.indexOf('&')!==-1){__filter_div.innerHTML=cellData;cellData=__filter_div_textContent?__filter_div.textContent:__filter_div.innerText;cellData=cellData.replace(/[\r\n]/g,'');}
filterData.push(cellData);}
row._aFilterData=filterData;row._sFilterRow=filterData.join('  ');wasInvalidated=true;}}
return wasInvalidated;}
function _fnFeatureHtmlInfo(settings)
{var
tid=settings.sTableId,nodes=settings.aanFeatures.i,n=$('<div/>',{'class':settings.oClasses.sInfo,'id':!nodes?tid+'_info':null});if(!nodes){ settings.aoDrawCallback.push({"fn":_fnUpdateInfo,"sName":"information"});n.attr('role','alert').attr('aria-live','polite').attr('aria-relevant','all'); $(settings.nTable).attr('aria-describedby',tid+'_info');}
return n[0];}
function _fnUpdateInfo(settings)
{var nodes=settings.aanFeatures.i;if(nodes.length===0){return;}
var
lang=settings.oLanguage,start=settings._iDisplayStart+1,end=settings.fnDisplayEnd(),max=settings.fnRecordsTotal(),total=settings.fnRecordsDisplay(),out=total?lang.sInfo:lang.sInfoEmpty;if(total!==max){out+=' '+lang.sInfoFiltered;} 
out+=lang.sInfoPostFix;out=_fnInfoMacros(settings,out);var callback=lang.fnInfoCallback;if(callback!==null){out=callback.call(settings.oInstance,settings,start,end,max,total,out);}
$(nodes).html(out);}
function _fnInfoMacros(settings,str)
{
 var
formatter=settings.fnFormatNumber,start=settings._iDisplayStart+1,len=settings._iDisplayLength,vis=settings.fnRecordsDisplay(),all=len===-1;return str.replace(/_START_/g,formatter.call(settings,start)).replace(/_END_/g,formatter.call(settings,settings.fnDisplayEnd())).replace(/_MAX_/g,formatter.call(settings,settings.fnRecordsTotal())).replace(/_TOTAL_/g,formatter.call(settings,vis)).replace(/_PAGE_/g,formatter.call(settings,all?1:Math.ceil(start/len))).replace(/_PAGES_/g,formatter.call(settings,all?1:Math.ceil(vis/len)));}
function _fnInitialise(settings)
{var i,iLen,iAjaxStart=settings.iInitDisplayStart;var columns=settings.aoColumns,column;var features=settings.oFeatures;if(!settings.bInitialised){setTimeout(function(){_fnInitialise(settings);},200);return;}
_fnAddOptionsHtml(settings);_fnBuildHead(settings);_fnDrawHead(settings,settings.aoHeader);_fnDrawHead(settings,settings.aoFooter);_fnProcessingDisplay(settings,true);if(features.bAutoWidth){_fnCalculateColumnWidths(settings);}
for(i=0,iLen=columns.length;i<iLen;i++){column=columns[i];if(column.sWidth){column.nTh.style.width=_fnStringToCss(column.sWidth);}}



_fnReDraw(settings); var dataSrc=_fnDataSource(settings);if(dataSrc!='ssp'){ if(dataSrc=='ajax'){_fnBuildAjax(settings,[],function(json){var aData=_fnAjaxDataSrc(settings,json); for(i=0;i<aData.length;i++){_fnAddData(settings,aData[i]);}


settings.iInitDisplayStart=iAjaxStart;_fnReDraw(settings);_fnProcessingDisplay(settings,false);_fnInitComplete(settings,json);},settings);}
else{_fnProcessingDisplay(settings,false);_fnInitComplete(settings);}}}
function _fnInitComplete(settings,json)
{settings._bInitComplete=true;
 if(json){_fnAdjustColumnSizing(settings);}
_fnCallbackFire(settings,'aoInitComplete','init',[settings,json]);}
function _fnLengthChange(settings,val)
{var len=parseInt(val,10);settings._iDisplayLength=len;_fnLengthOverflow(settings); _fnCallbackFire(settings,null,'length',[settings,len]);}
function _fnFeatureHtmlLength(settings)
{var
classes=settings.oClasses,tableId=settings.sTableId,menu=settings.aLengthMenu,d2=$.isArray(menu[0]),lengths=d2?menu[0]:menu,language=d2?menu[1]:menu;var select=$('<select/>',{'name':tableId+'_length','aria-controls':tableId,'class':classes.sLengthSelect});for(var i=0,ien=lengths.length;i<ien;i++){select[0][i]=new Option(language[i],lengths[i]);}
var div=$('<div><label/></div>').addClass(classes.sLength);if(!settings.aanFeatures.l){div[0].id=tableId+'_length';} 
var a=settings.oLanguage.sLengthMenu.split(/(_MENU_)/);div.children().append(a[0]).append(select).append(a[2]);select.val(settings._iDisplayLength).bind('change.DT',function(e){_fnLengthChange(settings,$(this).val());_fnDraw(settings);}); $(settings.nTable).bind('length',function(e,s,len){select.val(len);});return div[0];}
function _fnFeatureHtmlPaginate(settings)
{var
type=settings.sPaginationType,plugin=DataTable.ext.pager[type],modern=typeof plugin==='function',redraw=function(settings){_fnDraw(settings);},node=$('<div/>').addClass(settings.oClasses.sPaging+type)[0],features=settings.aanFeatures;if(!modern){plugin.fnInit(settings,node,redraw);}
if(!features.p)
{node.id=settings.sTableId+'_paginate';settings.aoDrawCallback.push({"fn":function(settings){if(modern){var
start=settings._iDisplayStart,len=settings._iDisplayLength,visRecords=settings.fnRecordsDisplay(),all=len===-1,page=all?0:Math.ceil(start/len),pages=all?1:Math.ceil(visRecords/len),buttons=plugin(page,pages),i,ien;for(i=0,ien=features.p.length;i<ien;i++){_fnRenderer(settings,'pageButton')(settings,features.p[i],i,buttons,page,pages);}}
else{plugin.fnUpdate(settings,redraw);}},"sName":"pagination"});}
return node;}
function _fnPageChange(settings,action,redraw)
{var
start=settings._iDisplayStart,len=settings._iDisplayLength,records=settings.fnRecordsDisplay();if(records===0||len===-1)
{start=0;}
else if(typeof action==="number")
{start=action*len;if(start>records)
{start=0;}}
else if(action=="first")
{start=0;}
else if(action=="previous")
{start=len>=0?start-len:0;if(start<0)
{start=0;}}
else if(action=="next")
{if(start+len<records)
{start+=len;}}
else if(action=="last")
{start=Math.floor((records-1)/len)*len;}
else
{_fnLog(settings,0,"Unknown paging action: "+action,5);}
var changed=settings._iDisplayStart!==start;settings._iDisplayStart=start;_fnCallbackFire(settings,null,'page',[settings]);if(redraw){_fnDraw(settings);}
return changed;}
function _fnFeatureHtmlProcessing(settings)
{return $('<div/>',{'id':!settings.aanFeatures.r?settings.sTableId+'_processing':null,'class':settings.oClasses.sProcessing}).html(settings.oLanguage.sProcessing).insertBefore(settings.nTable)[0];}
function _fnProcessingDisplay(settings,show)
{if(settings.oFeatures.bProcessing){$(settings.aanFeatures.r).css('visibility',show?'visible':'hidden');}
_fnCallbackFire(settings,null,'processing',[settings,show]);}
function _fnFeatureHtmlTable(settings)
{var scroll=settings.oScroll;if(scroll.sX===''&&scroll.sY===''){return settings.nTable;}
var scrollX=scroll.sX;var scrollY=scroll.sY;var classes=settings.oClasses;var table=$(settings.nTable);var caption=table.children('caption');var captionSide=caption.length?caption[0]._captionSide:null;var headerClone=$(table[0].cloneNode(false));var footerClone=$(table[0].cloneNode(false));var footer=table.children('tfoot');var _div='<div/>';var size=function(s){return!s?null:_fnStringToCss(s);};if(!footer.length){footer=null;}
var scroller=$(_div,{'class':classes.sScrollWrapper}).append($(_div,{'class':classes.sScrollHead}).css({overflow:'hidden',position:'relative',border:0,width:scrollX?size(scrollX):'100%'}).append($(_div,{'class':classes.sScrollHeadInner}).css({'box-sizing':'content-box',width:scroll.sXInner||'100%'}).append(headerClone.removeAttr('id').css('margin-left',0).append(table.children('thead')))).append(captionSide==='top'?caption:null)).append($(_div,{'class':classes.sScrollBody}).css({overflow:'auto',height:size(scrollY),width:size(scrollX)}).append(table));if(footer){scroller.append($(_div,{'class':classes.sScrollFoot}).css({overflow:'hidden',border:0,width:scrollX?size(scrollX):'100%'}).append($(_div,{'class':classes.sScrollFootInner}).append(footerClone.removeAttr('id').css('margin-left',0).append(table.children('tfoot')))).append(captionSide==='bottom'?caption:null));}
var children=scroller.children();var scrollHead=children[0];var scrollBody=children[1];var scrollFoot=footer?children[2]:null; if(scrollX){$(scrollBody).scroll(function(e){var scrollLeft=this.scrollLeft;scrollHead.scrollLeft=scrollLeft;if(footer){scrollFoot.scrollLeft=scrollLeft;}});}
settings.nScrollHead=scrollHead;settings.nScrollBody=scrollBody;settings.nScrollFoot=scrollFoot; settings.aoDrawCallback.push({"fn":_fnScrollDraw,"sName":"scrolling"});return scroller[0];}
function _fnScrollDraw(settings)
{
 var
scroll=settings.oScroll,scrollX=scroll.sX,scrollXInner=scroll.sXInner,scrollY=scroll.sY,barWidth=scroll.iBarWidth,divHeader=$(settings.nScrollHead),divHeaderStyle=divHeader[0].style,divHeaderInner=divHeader.children('div'),divHeaderInnerStyle=divHeaderInner[0].style,divHeaderTable=divHeaderInner.children('table'),divBodyEl=settings.nScrollBody,divBody=$(divBodyEl),divBodyStyle=divBodyEl.style,divFooter=$(settings.nScrollFoot),divFooterInner=divFooter.children('div'),divFooterTable=divFooterInner.children('table'),header=$(settings.nTHead),table=$(settings.nTable),tableEl=table[0],tableStyle=tableEl.style,footer=settings.nTFoot?$(settings.nTFoot):null,browser=settings.oBrowser,ie67=browser.bScrollOversize,headerTrgEls,footerTrgEls,headerSrcEls,footerSrcEls,headerCopy,footerCopy,headerWidths=[],footerWidths=[],idx,correction,sanityWidth,zeroOut=function(nSizer){var style=nSizer.style;style.paddingTop="0";style.paddingBottom="0";style.borderTopWidth="0";style.borderBottomWidth="0";style.height=0;}; table.children('thead, tfoot').remove(); headerCopy=header.clone().prependTo(table);headerTrgEls=header.find('tr'); headerSrcEls=headerCopy.find('tr');headerCopy.find('th, td').removeAttr('tabindex');if(footer){footerCopy=footer.clone().prependTo(table);footerTrgEls=footer.find('tr'); footerSrcEls=footerCopy.find('tr');}

 
if(!scrollX)
{divBodyStyle.width='100%';divHeader[0].style.width='100%';}
$.each(_fnGetUniqueThs(settings,headerCopy),function(i,el){idx=_fnVisibleToColumnIndex(settings,i);el.style.width=settings.aoColumns[idx].sWidth;});if(footer){_fnApplyToChildren(function(n){n.style.width="";},footerSrcEls);}


if(scroll.bCollapse&&scrollY!==""){divBodyStyle.height=(divBody.offsetHeight+header[0].offsetHeight)+"px";} 
sanityWidth=table.outerWidth();if(scrollX===""){ tableStyle.width="100%";

if(ie67&&(table.find('tbody').height()>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll")){tableStyle.width=_fnStringToCss(table.outerWidth()-barWidth);}}
else
{ if(scrollXInner!==""){ tableStyle.width=_fnStringToCss(scrollXInner);}
else if(sanityWidth==divBody.width()&&divBody.height()<table.height()){ tableStyle.width=_fnStringToCss(sanityWidth-barWidth);if(table.outerWidth()>sanityWidth-barWidth){ tableStyle.width=_fnStringToCss(sanityWidth);}}
else{ tableStyle.width=_fnStringToCss(sanityWidth);}}

sanityWidth=table.outerWidth();

 
_fnApplyToChildren(zeroOut,headerSrcEls); _fnApplyToChildren(function(nSizer){headerWidths.push(_fnStringToCss($(nSizer).css('width')));},headerSrcEls); _fnApplyToChildren(function(nToSize,i){nToSize.style.width=headerWidths[i];},headerTrgEls);$(headerSrcEls).height(0);if(footer)
{_fnApplyToChildren(zeroOut,footerSrcEls);_fnApplyToChildren(function(nSizer){footerWidths.push(_fnStringToCss($(nSizer).css('width')));},footerSrcEls);_fnApplyToChildren(function(nToSize,i){nToSize.style.width=footerWidths[i];},footerTrgEls);$(footerSrcEls).height(0);}
 
_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML="";nSizer.style.width=headerWidths[i];},headerSrcEls);if(footer)
{_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML="";nSizer.style.width=footerWidths[i];},footerSrcEls);}
 
if(table.outerWidth()<sanityWidth)
{correction=((divBodyEl.scrollHeight>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll"))?sanityWidth+barWidth:sanityWidth;if(ie67&&(divBodyEl.scrollHeight>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll")){tableStyle.width=_fnStringToCss(correction-barWidth);} 
if(scrollX===""||scrollXInner!==""){_fnLog(settings,1,'Possible column misalignment',6);}}
else
{correction='100%';} 
divBodyStyle.width=_fnStringToCss(correction);divHeaderStyle.width=_fnStringToCss(correction);if(footer){settings.nScrollFoot.style.width=_fnStringToCss(correction);}
if(!scrollY){if(ie67){divBodyStyle.height=_fnStringToCss(tableEl.offsetHeight+barWidth);}}
if(scrollY&&scroll.bCollapse){divBodyStyle.height=_fnStringToCss(scrollY);var iExtra=(scrollX&&tableEl.offsetWidth>divBodyEl.offsetWidth)?barWidth:0;if(tableEl.offsetHeight<divBodyEl.offsetHeight){divBodyStyle.height=_fnStringToCss(tableEl.offsetHeight+iExtra);}}
var iOuterWidth=table.outerWidth();divHeaderTable[0].style.width=_fnStringToCss(iOuterWidth);divHeaderInnerStyle.width=_fnStringToCss(iOuterWidth);
var bScrolling=table.height()>divBodyEl.clientHeight||divBody.css('overflow-y')=="scroll";var padding='padding'+(browser.bScrollbarLeft?'Left':'Right');divHeaderInnerStyle[padding]=bScrolling?barWidth+"px":"0px";if(footer){divFooterTable[0].style.width=_fnStringToCss(iOuterWidth);divFooterInner[0].style.width=_fnStringToCss(iOuterWidth);divFooterInner[0].style[padding]=bScrolling?barWidth+"px":"0px";}
divBody.scroll();if(settings.bSorted||settings.bFiltered){divBodyEl.scrollTop=0;}}
function _fnApplyToChildren(fn,an1,an2)
{var index=0,i=0,iLen=an1.length;var nNode1,nNode2;while(i<iLen){nNode1=an1[i].firstChild;nNode2=an2?an2[i].firstChild:null;while(nNode1){if(nNode1.nodeType===1){if(an2){fn(nNode1,nNode2,index);}
else{fn(nNode1,index);}
index++;}
nNode1=nNode1.nextSibling;nNode2=an2?nNode2.nextSibling:null;}
i++;}}
var __re_html_remove=/<.*?>/g;function _fnCalculateColumnWidths(oSettings)
{var
table=oSettings.nTable,columns=oSettings.aoColumns,scroll=oSettings.oScroll,scrollY=scroll.sY,scrollX=scroll.sX,scrollXInner=scroll.sXInner,columnCount=columns.length,visibleColumns=_fnGetColumns(oSettings,'bVisible'),headerCells=$('th',oSettings.nTHead),tableWidthAttr=table.getAttribute('width'),tableContainer=table.parentNode,userInputs=false,i,column,columnIdx,width,outerWidth;for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];if(column.sWidth!==null){column.sWidth=_fnConvertToWidth(column.sWidthOrig,tableContainer);userInputs=true;}}
if(!userInputs&&!scrollX&&!scrollY&&columnCount==_fnVisbleColumns(oSettings)&&columnCount==headerCells.length){for(i=0;i<columnCount;i++){columns[i].sWidth=_fnStringToCss(headerCells.eq(i).width());}}
else
{

 var tmpTable=$(table.cloneNode(false)).css('visibility','hidden').removeAttr('id').append($(oSettings.nTHead).clone(false)).append($(oSettings.nTFoot).clone(false)).append($('<tbody><tr/></tbody>'));tmpTable.find('tfoot th, tfoot td').css('width','');var tr=tmpTable.find('tbody tr'); headerCells=_fnGetUniqueThs(oSettings,tmpTable.find('thead')[0]);for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];headerCells[i].style.width=column.sWidthOrig!==null&&column.sWidthOrig!==''?_fnStringToCss(column.sWidthOrig):'';} 
if(oSettings.aoData.length){for(i=0;i<visibleColumns.length;i++){columnIdx=visibleColumns[i];column=columns[columnIdx];$(_fnGetWidestNode(oSettings,columnIdx)).clone(false).append(column.sContentPadding).appendTo(tr);}} 
tmpTable.appendTo(tableContainer);

 if(scrollX&&scrollXInner){tmpTable.width(scrollXInner);}
else if(scrollX){tmpTable.css('width','auto');if(tmpTable.width()<tableContainer.offsetWidth){tmpTable.width(tableContainer.offsetWidth);}}
else if(scrollY){tmpTable.width(tableContainer.offsetWidth);}
else if(tableWidthAttr){tmpTable.width(tableWidthAttr);} 
_fnScrollingWidthAdjust(oSettings,tmpTable[0]);


 if(scrollX)
{var total=0;for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];outerWidth=$(headerCells[i]).outerWidth();total+=column.sWidthOrig===null?outerWidth:parseInt(column.sWidth,10)+outerWidth-$(headerCells[i]).width();}
tmpTable.width(_fnStringToCss(total));table.style.width=_fnStringToCss(total);} 
for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];width=$(headerCells[i]).width();if(width){column.sWidth=_fnStringToCss(width);}}
table.style.width=_fnStringToCss(tmpTable.css('width')); tmpTable.remove();}



if(tableWidthAttr){table.style.width=_fnStringToCss(tableWidthAttr);if(!oSettings._reszEvt){$(window).bind('resize.DT-'+oSettings.sInstance,_fnThrottle(function(){_fnAdjustColumnSizing(oSettings);}));oSettings._reszEvt=true;}}}
function _fnThrottle(fn){var
frequency=200,last,timer;return function(){var
now=+new Date(),args=arguments;if(last&&now<last+frequency){clearTimeout(timer);timer=setTimeout(function(){last=now;fn();},frequency);}
else{last=now;fn();}};}
function _fnConvertToWidth(width,parent)
{if(!width){return 0;}
var n=$('<div/>').css('width',_fnStringToCss(width)).appendTo(parent||document.body);var val=n[0].offsetWidth;n.remove();return val;}
function _fnScrollingWidthAdjust(settings,n)
{var scroll=settings.oScroll;if(scroll.sX||scroll.sY){

 var correction=!scroll.sX?scroll.iBarWidth:0;n.style.width=_fnStringToCss($(n).outerWidth()-correction);}}
function _fnGetWidestNode(settings,colIdx)
{var idx=_fnGetMaxLenString(settings,colIdx);if(idx<0){return null;}
var data=settings.aoData[idx];return!data.nTr? $('<td/>').html(_fnGetCellData(settings,idx,colIdx,'display'))[0]:data.anCells[colIdx];}
function _fnGetMaxLenString(settings,colIdx)
{var s,max=-1,maxIdx=-1;for(var i=0,ien=settings.aoData.length;i<ien;i++){s=_fnGetCellData(settings,i,colIdx,'display')+'';s=s.replace(__re_html_remove,'');if(s.length>max){max=s.length;maxIdx=i;}}
return maxIdx;}
function _fnStringToCss(s)
{if(s===null){return'0px';}
if(typeof s=='number'){return s<0?'0px':s+'px';} 
return s.match(/\d$/)?s+'px':s;}
function _fnScrollBarWidth()
{ if(!DataTable.__scrollbarWidth){var inner=$('<p/>').css({width:'100%',height:200,padding:0})[0];var outer=$('<div/>').css({position:'absolute',top:0,left:0,width:200,height:150,padding:0,overflow:'hidden',visibility:'hidden'}).append(inner).appendTo('body');var w1=inner.offsetWidth;outer.css('overflow','scroll');var w2=inner.offsetWidth;if(w1===w2){w2=outer[0].clientWidth;}
outer.remove();DataTable.__scrollbarWidth=w1-w2;}
return DataTable.__scrollbarWidth;}
function _fnSortFlatten(settings)
{var
i,iLen,k,kLen,aSort=[],aiOrig=[],aoColumns=settings.aoColumns,aDataSort,iCol,sType,srcCol,fixed=settings.aaSortingFixed,fixedObj=$.isPlainObject(fixed),nestedSort=[],add=function(a){if(a.length&&!$.isArray(a[0])){ nestedSort.push(a);}
else{ nestedSort.push.apply(nestedSort,a);}};
 if($.isArray(fixed)){add(fixed);}
if(fixedObj&&fixed.pre){add(fixed.pre);}
add(settings.aaSorting);if(fixedObj&&fixed.post){add(fixed.post);}
for(i=0;i<nestedSort.length;i++)
{srcCol=nestedSort[i][0];aDataSort=aoColumns[srcCol].aDataSort;for(k=0,kLen=aDataSort.length;k<kLen;k++)
{iCol=aDataSort[k];sType=aoColumns[iCol].sType||'string';aSort.push({src:srcCol,col:iCol,dir:nestedSort[i][1],index:nestedSort[i][2],type:sType,formatter:DataTable.ext.type.order[sType+"-pre"]});}}
return aSort;}
function _fnSort(oSettings)
{var
i,ien,iLen,j,jLen,k,kLen,sDataType,nTh,aiOrig=[],oExtSort=DataTable.ext.type.order,aoData=oSettings.aoData,aoColumns=oSettings.aoColumns,aDataSort,data,iCol,sType,oSort,formatters=0,sortCol,displayMaster=oSettings.aiDisplayMaster,aSort=_fnSortFlatten(oSettings);

_fnColumnTypes(oSettings);for(i=0,ien=aSort.length;i<ien;i++){sortCol=aSort[i]; if(sortCol.formatter){formatters++;} 
_fnSortData(oSettings,sortCol.col);}
if(_fnDataSource(oSettings)!='ssp'&&aSort.length!==0)
{
 for(i=0,iLen=displayMaster.length;i<iLen;i++){aiOrig[displayMaster[i]]=i;}
if(formatters===aSort.length){ displayMaster.sort(function(a,b){var
x,y,k,test,sort,len=aSort.length,dataA=aoData[a]._aSortData,dataB=aoData[b]._aSortData;for(k=0;k<len;k++){sort=aSort[k];x=dataA[sort.col];y=dataB[sort.col];test=x<y?-1:x>y?1:0;if(test!==0){return sort.dir==='asc'?test:-test;}}
x=aiOrig[a];y=aiOrig[b];return x<y?-1:x>y?1:0;});}
else{

displayMaster.sort(function(a,b){var
x,y,k,l,test,sort,fn,len=aSort.length,dataA=aoData[a]._aSortData,dataB=aoData[b]._aSortData;for(k=0;k<len;k++){sort=aSort[k];x=dataA[sort.col];y=dataB[sort.col];fn=oExtSort[sort.type+"-"+sort.dir]||oExtSort["string-"+sort.dir];test=fn(x,y);if(test!==0){return test;}}
x=aiOrig[a];y=aiOrig[b];return x<y?-1:x>y?1:0;});}}
oSettings.bSorted=true;}
function _fnSortAria(settings)
{var label;var nextSort;var columns=settings.aoColumns;var aSort=_fnSortFlatten(settings);var oAria=settings.oLanguage.oAria;
for(var i=0,iLen=columns.length;i<iLen;i++)
{var col=columns[i];var asSorting=col.asSorting;var sTitle=col.sTitle.replace(/<.*?>/g,"");var jqTh=$(col.nTh).removeAttr('aria-sort');if(col.bSortable){if(aSort.length>0&&aSort[0].col==i){jqTh.attr('aria-sort',aSort[0].dir=="asc"?"ascending":"descending");nextSort=asSorting[aSort[0].index+1]||asSorting[0];}
else{nextSort=asSorting[0];}
label=sTitle+(nextSort==="asc"?oAria.sSortAscending:oAria.sSortDescending);}
else{label=sTitle;}
jqTh.attr('aria-label',label);}}
function _fnSortListener(settings,colIdx,append,callback)
{var col=settings.aoColumns[colIdx];var sorting=settings.aaSorting;var asSorting=col.asSorting;var nextSortIdx;var next=function(a){var idx=a._idx;if(idx===undefined){idx=$.inArray(a[1],asSorting);}
return idx+1>=asSorting.length?0:idx+1;}; if(append&&settings.oFeatures.bSortMulti){var sortIdx=$.inArray(colIdx,_pluck(sorting,'0'));if(sortIdx!==-1){ nextSortIdx=next(sorting[sortIdx]);sorting[sortIdx][1]=asSorting[nextSortIdx];sorting[sortIdx]._idx=nextSortIdx;}
else{ sorting.push([colIdx,asSorting[0],0]);sorting[sorting.length-1]._idx=0;}}
else if(sorting.length&&sorting[0][0]==colIdx){ nextSortIdx=next(sorting[0]);sorting.length=1;sorting[0][1]=asSorting[nextSortIdx];sorting[0]._idx=nextSortIdx;}
else{ sorting.length=0;sorting.push([colIdx,asSorting[0]]);sorting[0]._idx=0;} 
_fnReDraw(settings); if(typeof callback=='function'){callback(settings);}}
function _fnSortAttachListener(settings,attachTo,colIdx,callback)
{var col=settings.aoColumns[colIdx];_fnBindAction(attachTo,{},function(e){if(col.bSortable===false){return;}
_fnProcessingDisplay(settings,true);setTimeout(function(){_fnSortListener(settings,colIdx,e.shiftKey,callback);
 if(_fnDataSource(settings)!=='ssp'){_fnProcessingDisplay(settings,false);}},0);});}
function _fnSortingClasses(settings)
{var oldSort=settings.aLastSort;var sortClass=settings.oClasses.sSortColumn;var sort=_fnSortFlatten(settings);var features=settings.oFeatures;var i,ien,colIdx;if(features.bSort&&features.bSortClasses){ for(i=0,ien=oldSort.length;i<ien;i++){colIdx=oldSort[i].src; $(_pluck(settings.aoData,'anCells',colIdx)).removeClass(sortClass+(i<2?i+1:3));} 
for(i=0,ien=sort.length;i<ien;i++){colIdx=sort[i].src;$(_pluck(settings.aoData,'anCells',colIdx)).addClass(sortClass+(i<2?i+1:3));}}
settings.aLastSort=sort;}
 
function _fnSortData(settings,idx)
{ var column=settings.aoColumns[idx];var customSort=DataTable.ext.order[column.sSortDataType];var customData;if(customSort){customData=customSort.call(settings.oInstance,settings,idx,_fnColumnIndexToVisible(settings,idx));} 
var row,cellData;var formatter=DataTable.ext.type.order[column.sType+"-pre"];for(var i=0,ien=settings.aoData.length;i<ien;i++){row=settings.aoData[i];if(!row._aSortData){row._aSortData=[];}
if(!row._aSortData[idx]||customSort){cellData=customSort?customData[i]: _fnGetCellData(settings,i,idx,'sort');row._aSortData[idx]=formatter?formatter(cellData):cellData;}}}
function _fnSaveState(oSettings)
{if(!oSettings.oFeatures.bStateSave||oSettings.bDestroying)
{return;}
var i,iLen;var oState={"iCreate":new Date().getTime(),"iStart":oSettings._iDisplayStart,"iLength":oSettings._iDisplayLength,"aaSorting":$.extend(true,[],oSettings.aaSorting),"oSearch":$.extend(true,{},oSettings.oPreviousSearch),"aoSearchCols":$.extend(true,[],oSettings.aoPreSearchCols),"abVisCols":[]};for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{oState.abVisCols.push(oSettings.aoColumns[i].bVisible);}
_fnCallbackFire(oSettings,"aoStateSaveParams",'stateSaveParams',[oSettings,oState]);oSettings.fnStateSaveCallback.call(oSettings.oInstance,oSettings,oState);}
function _fnLoadState(oSettings,oInit)
{var i,ien;var columns=oSettings.aoColumns;if(!oSettings.oFeatures.bStateSave)
{return;}
var oData=oSettings.fnStateLoadCallback.call(oSettings.oInstance,oSettings);if(!oData)
{return;}
var abStateLoad=_fnCallbackFire(oSettings,'aoStateLoadParams','stateLoadParams',[oSettings,oData]);if($.inArray(false,abStateLoad)!==-1)
{return;}
if(oData.iCreate<new Date().getTime()-(oSettings.iStateDuration*1000)){return;} 
if(columns.length!==oData.aoSearchCols.length){return;}
oSettings.oLoadedState=$.extend(true,{},oData);oSettings._iDisplayStart=oData.iStart;oSettings.iInitDisplayStart=oData.iStart;oSettings._iDisplayLength=oData.iLength;oSettings.aaSorting=[];var savedSort=oData.aaSorting;for(i=0,ien=savedSort.length;i<ien;i++){oSettings.aaSorting.push(savedSort[i][0]>=columns.length?[0,savedSort[i][1]]:savedSort[i]);}
$.extend(oSettings.oPreviousSearch,oData.oSearch);$.extend(true,oSettings.aoPreSearchCols,oData.aoSearchCols);for(i=0,ien=oData.abVisCols.length;i<ien;i++){columns[i].bVisible=oData.abVisCols[i];}
_fnCallbackFire(oSettings,'aoStateLoaded','stateLoaded',[oSettings,oData]);}
function _fnSettingsFromNode(table)
{var settings=DataTable.settings;var idx=$.inArray(table,_pluck(settings,'nTable'));return idx!==-1?settings[idx]:null;}
function _fnLog(settings,level,msg,tn)
{msg='DataTables warning: '+
(settings!==null?'table id='+settings.sTableId+' - ':'')+msg;if(tn){msg+='. For more information about this error, please see '+'http://datatables.net/tn/'+tn;}
if(!level){ var ext=DataTable.ext;var type=ext.sErrMode||ext.errMode;if(type=='alert'){alert(msg);}
else{throw new Error(msg);}}
else if(window.console&&console.log){console.log(msg);}}
function _fnMap(ret,src,name,mappedName)
{if($.isArray(name)){$.each(name,function(i,val){if($.isArray(val)){_fnMap(ret,src,val[0],val[1]);}
else{_fnMap(ret,src,val);}});return;}
if(mappedName===undefined){mappedName=name;}
if(src[name]!==undefined){ret[mappedName]=src[name];}}
function _fnExtend(out,extender,breakRefs)
{var val;for(var prop in extender){if(extender.hasOwnProperty(prop)){val=extender[prop];if($.isPlainObject(val)){if(!$.isPlainObject(out[prop])){out[prop]={};}
$.extend(true,out[prop],val);}
else if(breakRefs&&prop!=='data'&&prop!=='aaData'&&$.isArray(val)){out[prop]=val.slice();}
else{out[prop]=val;}}}
return out;}
function _fnBindAction(n,oData,fn)
{$(n).bind('click.DT',oData,function(e){n.blur(); fn(e);}).bind('keypress.DT',oData,function(e){if(e.which===13){fn(e);}}).bind('selectstart.DT',function(){return false;});}
function _fnCallbackReg(oSettings,sStore,fn,sName)
{if(fn)
{oSettings[sStore].push({"fn":fn,"sName":sName});}}
function _fnCallbackFire(settings,callbackArr,event,args)
{var ret=[];if(callbackArr){ret=$.map(settings[callbackArr].slice().reverse(),function(val,i){return val.fn.apply(settings.oInstance,args);});}
if(event!==null){$(settings.nTable).trigger(event+'.dt',args);}
return ret;}
function _fnLengthOverflow(settings)
{var
start=settings._iDisplayStart,end=settings.fnDisplayEnd(),len=settings._iDisplayLength;if(end===settings.fnRecordsDisplay())
{start=end-len;}
if(len===-1||start<0)
{start=0;}
settings._iDisplayStart=start;}
function _fnRenderer(settings,type)
{var renderer=settings.renderer;var host=DataTable.ext.renderer[type];if($.isPlainObject(renderer)&&renderer[type]){
return host[renderer[type]]||host._;}
else if(typeof renderer==='string'){ return host[renderer]||host._;} 
return host._;}
function _fnDataSource(settings)
{if(settings.oFeatures.bServerSide){return'ssp';}
else if(settings.ajax||settings.sAjaxSource){return'ajax';}
return'dom';}
DataTable=function(options)
{this.$=function(sSelector,oOpts)
{return this.api(true).$(sSelector,oOpts);};this._=function(sSelector,oOpts)
{return this.api(true).rows(sSelector,oOpts).data();};this.api=function(traditional)
{return traditional?new _Api(_fnSettingsFromNode(this[_ext.iApiIndex])):new _Api(this);};this.fnAddData=function(data,redraw)
{var api=this.api(true);var rows=$.isArray(data)&&($.isArray(data[0])||$.isPlainObject(data[0]))?api.rows.add(data):api.row.add(data);if(redraw===undefined||redraw){api.draw();}
return rows.flatten().toArray();};this.fnAdjustColumnSizing=function(bRedraw)
{var api=this.api(true).columns.adjust();var settings=api.settings()[0];var scroll=settings.oScroll;if(bRedraw===undefined||bRedraw){api.draw(false);}
else if(scroll.sX!==""||scroll.sY!==""){_fnScrollDraw(settings);}};this.fnClearTable=function(bRedraw)
{var api=this.api(true).clear();if(bRedraw===undefined||bRedraw){api.draw();}};this.fnClose=function(nTr)
{this.api(true).row(nTr).child.hide();};this.fnDeleteRow=function(target,callback,redraw)
{var api=this.api(true);var rows=api.rows(target);var settings=rows.settings()[0];var data=settings.aoData[rows[0][0]];rows.remove();if(callback){callback.call(this,settings,data);}
if(redraw===undefined||redraw){api.draw();}
return data;};this.fnDestroy=function(remove)
{this.api(true).destroy(remove);};this.fnDraw=function(complete)
{
this.api(true).draw(!complete);};this.fnFilter=function(sInput,iColumn,bRegex,bSmart,bShowGlobal,bCaseInsensitive)
{var api=this.api(true);if(iColumn===null||iColumn===undefined){api.search(sInput,bRegex,bSmart,bCaseInsensitive);}
else{api.column(iColumn).search(sInput,bRegex,bSmart,bCaseInsensitive);}
api.draw();};this.fnGetData=function(src,col)
{var api=this.api(true);if(src!==undefined){var type=src.nodeName?src.nodeName.toLowerCase():'';return col!==undefined||type=='td'||type=='th'?api.cell(src,col).data():api.row(src).data();}
return api.data().toArray();};this.fnGetNodes=function(iRow)
{var api=this.api(true);return iRow!==undefined?api.row(iRow).node():api.rows().nodes().toArray();};this.fnGetPosition=function(node)
{var api=this.api(true);var nodeName=node.nodeName.toUpperCase();if(nodeName=='TR'){return api.row(node).index();}
else if(nodeName=='TD'||nodeName=='TH'){var cell=api.cell(node).index();return[cell.row,cell.columnVisible,cell.column];}
return null;};this.fnIsOpen=function(nTr)
{return this.api(true).row(nTr).child.isShown();};this.fnOpen=function(nTr,mHtml,sClass)
{return this.api(true).row(nTr).child(mHtml,sClass).show();};this.fnPageChange=function(mAction,bRedraw)
{var api=this.api(true).page(mAction);if(bRedraw===undefined||bRedraw){api.draw(false);}};this.fnSetColumnVis=function(iCol,bShow,bRedraw)
{var api=this.api(true).column(iCol).visible(bShow);if(bRedraw===undefined||bRedraw){api.columns.adjust().draw();}};this.fnSettings=function()
{return _fnSettingsFromNode(this[_ext.iApiIndex]);};this.fnSort=function(aaSort)
{this.api(true).order(aaSort).draw();};this.fnSortListener=function(nNode,iColumn,fnCallback)
{this.api(true).order.listener(nNode,iColumn,fnCallback);};this.fnUpdate=function(mData,mRow,iColumn,bRedraw,bAction)
{var api=this.api(true);if(iColumn===undefined||iColumn===null){api.row(mRow).data(mData);}
else{api.cell(mRow,iColumn).data(mData);}
if(bAction===undefined||bAction){api.columns.adjust();}
if(bRedraw===undefined||bRedraw){api.draw();}
return 0;};this.fnVersionCheck=_ext.fnVersionCheck;function _fnExternApiFunc(fn)
{return function(){var args=[_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return DataTable.ext.internal[fn].apply(this,args);};}
this.oApi=this.internal={_fnExternApiFunc:_fnExternApiFunc,_fnBuildAjax:_fnBuildAjax,_fnAjaxUpdate:_fnAjaxUpdate,_fnAjaxParameters:_fnAjaxParameters,_fnAjaxUpdateDraw:_fnAjaxUpdateDraw,_fnAjaxDataSrc:_fnAjaxDataSrc,_fnAddColumn:_fnAddColumn,_fnColumnOptions:_fnColumnOptions,_fnAdjustColumnSizing:_fnAdjustColumnSizing,_fnVisibleToColumnIndex:_fnVisibleToColumnIndex,_fnColumnIndexToVisible:_fnColumnIndexToVisible,_fnVisbleColumns:_fnVisbleColumns,_fnGetColumns:_fnGetColumns,_fnColumnTypes:_fnColumnTypes,_fnApplyColumnDefs:_fnApplyColumnDefs,_fnHungarianMap:_fnHungarianMap,_fnCamelToHungarian:_fnCamelToHungarian,_fnLanguageCompat:_fnLanguageCompat,_fnBrowserDetect:_fnBrowserDetect,_fnAddData:_fnAddData,_fnAddTr:_fnAddTr,_fnNodeToDataIndex:_fnNodeToDataIndex,_fnNodeToColumnIndex:_fnNodeToColumnIndex,_fnGetRowData:_fnGetRowData,_fnGetCellData:_fnGetCellData,_fnSetCellData:_fnSetCellData,_fnSplitObjNotation:_fnSplitObjNotation,_fnGetObjectDataFn:_fnGetObjectDataFn,_fnSetObjectDataFn:_fnSetObjectDataFn,_fnGetDataMaster:_fnGetDataMaster,_fnClearTable:_fnClearTable,_fnDeleteIndex:_fnDeleteIndex,_fnInvalidateRow:_fnInvalidateRow,_fnGetRowElements:_fnGetRowElements,_fnCreateTr:_fnCreateTr,_fnBuildHead:_fnBuildHead,_fnDrawHead:_fnDrawHead,_fnDraw:_fnDraw,_fnReDraw:_fnReDraw,_fnAddOptionsHtml:_fnAddOptionsHtml,_fnDetectHeader:_fnDetectHeader,_fnGetUniqueThs:_fnGetUniqueThs,_fnFeatureHtmlFilter:_fnFeatureHtmlFilter,_fnFilterComplete:_fnFilterComplete,_fnFilterCustom:_fnFilterCustom,_fnFilterColumn:_fnFilterColumn,_fnFilter:_fnFilter,_fnFilterCreateSearch:_fnFilterCreateSearch,_fnEscapeRegex:_fnEscapeRegex,_fnFilterData:_fnFilterData,_fnFeatureHtmlInfo:_fnFeatureHtmlInfo,_fnUpdateInfo:_fnUpdateInfo,_fnInfoMacros:_fnInfoMacros,_fnInitialise:_fnInitialise,_fnInitComplete:_fnInitComplete,_fnLengthChange:_fnLengthChange,_fnFeatureHtmlLength:_fnFeatureHtmlLength,_fnFeatureHtmlPaginate:_fnFeatureHtmlPaginate,_fnPageChange:_fnPageChange,_fnFeatureHtmlProcessing:_fnFeatureHtmlProcessing,_fnProcessingDisplay:_fnProcessingDisplay,_fnFeatureHtmlTable:_fnFeatureHtmlTable,_fnScrollDraw:_fnScrollDraw,_fnApplyToChildren:_fnApplyToChildren,_fnCalculateColumnWidths:_fnCalculateColumnWidths,_fnThrottle:_fnThrottle,_fnConvertToWidth:_fnConvertToWidth,_fnScrollingWidthAdjust:_fnScrollingWidthAdjust,_fnGetWidestNode:_fnGetWidestNode,_fnGetMaxLenString:_fnGetMaxLenString,_fnStringToCss:_fnStringToCss,_fnScrollBarWidth:_fnScrollBarWidth,_fnSortFlatten:_fnSortFlatten,_fnSort:_fnSort,_fnSortAria:_fnSortAria,_fnSortListener:_fnSortListener,_fnSortAttachListener:_fnSortAttachListener,_fnSortingClasses:_fnSortingClasses,_fnSortData:_fnSortData,_fnSaveState:_fnSaveState,_fnLoadState:_fnLoadState,_fnSettingsFromNode:_fnSettingsFromNode,_fnLog:_fnLog,_fnMap:_fnMap,_fnBindAction:_fnBindAction,_fnCallbackReg:_fnCallbackReg,_fnCallbackFire:_fnCallbackFire,_fnLengthOverflow:_fnLengthOverflow,_fnRenderer:_fnRenderer,_fnDataSource:_fnDataSource,_fnRowAttributes:_fnRowAttributes};$.extend(DataTable.ext.internal,this.internal);for(var fn in DataTable.ext.internal){if(fn){this[fn]=_fnExternApiFunc(fn);}}
var _that=this;var emptyInit=options===undefined;var len=this.length;if(emptyInit){options={};}
this.each(function(){
 var o={};var oInit=len>1? _fnExtend(o,options,true):options;var i=0,iLen,j,jLen,k,kLen;var sId=this.getAttribute('id');var bInitHandedOff=false;var defaults=DataTable.defaults;if(this.nodeName.toLowerCase()!='table')
{_fnLog(null,0,'Non-table node initialisation ('+this.nodeName+')',2);return;}
_fnCompatOpts(defaults);_fnCompatCols(defaults.column);_fnCamelToHungarian(defaults,defaults,true);_fnCamelToHungarian(defaults.column,defaults.column,true);_fnCamelToHungarian(defaults,oInit);var allSettings=DataTable.settings;for(i=0,iLen=allSettings.length;i<iLen;i++)
{if(allSettings[i].nTable==this)
{var bRetrieve=oInit.bRetrieve!==undefined?oInit.bRetrieve:defaults.bRetrieve;var bDestroy=oInit.bDestroy!==undefined?oInit.bDestroy:defaults.bDestroy;if(emptyInit||bRetrieve)
{return allSettings[i].oInstance;}
else if(bDestroy)
{allSettings[i].oInstance.fnDestroy();break;}
else
{_fnLog(allSettings[i],0,'Cannot reinitialise DataTable',3);return;}}
if(allSettings[i].sTableId==this.id)
{allSettings.splice(i,1);break;}}
if(sId===null||sId==="")
{sId="DataTables_Table_"+(DataTable.ext._unique++);this.id=sId;}
var oSettings=$.extend(true,{},DataTable.models.oSettings,{"nTable":this,"oApi":_that.internal,"oInit":oInit,"sDestroyWidth":$(this)[0].style.width,"sInstance":sId,"sTableId":sId});allSettings.push(oSettings);
 oSettings.oInstance=(_that.length===1)?_that:$(this).dataTable(); _fnCompatOpts(oInit);if(oInit.oLanguage)
{_fnLanguageCompat(oInit.oLanguage);} 
if(oInit.aLengthMenu&&!oInit.iDisplayLength)
{oInit.iDisplayLength=$.isArray(oInit.aLengthMenu[0])?oInit.aLengthMenu[0][0]:oInit.aLengthMenu[0];}

oInit=_fnExtend($.extend(true,{},defaults),oInit); _fnMap(oSettings.oFeatures,oInit,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]);_fnMap(oSettings,oInit,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);_fnMap(oSettings.oScroll,oInit,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);_fnMap(oSettings.oLanguage,oInit,"fnInfoCallback");_fnCallbackReg(oSettings,'aoDrawCallback',oInit.fnDrawCallback,'user');_fnCallbackReg(oSettings,'aoServerParams',oInit.fnServerParams,'user');_fnCallbackReg(oSettings,'aoStateSaveParams',oInit.fnStateSaveParams,'user');_fnCallbackReg(oSettings,'aoStateLoadParams',oInit.fnStateLoadParams,'user');_fnCallbackReg(oSettings,'aoStateLoaded',oInit.fnStateLoaded,'user');_fnCallbackReg(oSettings,'aoRowCallback',oInit.fnRowCallback,'user');_fnCallbackReg(oSettings,'aoRowCreatedCallback',oInit.fnCreatedRow,'user');_fnCallbackReg(oSettings,'aoHeaderCallback',oInit.fnHeaderCallback,'user');_fnCallbackReg(oSettings,'aoFooterCallback',oInit.fnFooterCallback,'user');_fnCallbackReg(oSettings,'aoInitComplete',oInit.fnInitComplete,'user');_fnCallbackReg(oSettings,'aoPreDrawCallback',oInit.fnPreDrawCallback,'user'); if(oInit.bJQueryUI)
{$.extend(oSettings.oClasses,DataTable.ext.oJUIClasses,oInit.oClasses);if(oInit.sDom===defaults.sDom&&defaults.sDom==="lfrtip")
{oSettings.sDom='<"H"lfr>t<"F"ip>';}
if(!oSettings.renderer){oSettings.renderer='jqueryui';}
else if($.isPlainObject(oSettings.renderer)&&!oSettings.renderer.header){oSettings.renderer.header='jqueryui';}}
else
{$.extend(oSettings.oClasses,DataTable.ext.classes,oInit.oClasses);}
$(this).addClass(oSettings.oClasses.sTable);if(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!=="")
{oSettings.oScroll.iBarWidth=_fnScrollBarWidth();}
if(oSettings.oScroll.sX===true){ oSettings.oScroll.sX='100%';}
if(oSettings.iInitDisplayStart===undefined)
{oSettings.iInitDisplayStart=oInit.iDisplayStart;oSettings._iDisplayStart=oInit.iDisplayStart;}
if(oInit.iDeferLoading!==null)
{oSettings.bDeferLoading=true;var tmp=$.isArray(oInit.iDeferLoading);oSettings._iRecordsDisplay=tmp?oInit.iDeferLoading[0]:oInit.iDeferLoading;oSettings._iRecordsTotal=tmp?oInit.iDeferLoading[1]:oInit.iDeferLoading;}
if(oInit.oLanguage.sUrl!=="")
{oSettings.oLanguage.sUrl=oInit.oLanguage.sUrl;$.getJSON(oSettings.oLanguage.sUrl,null,function(json){_fnLanguageCompat(json);_fnCamelToHungarian(defaults.oLanguage,json);$.extend(true,oSettings.oLanguage,oInit.oLanguage,json);_fnInitialise(oSettings);});bInitHandedOff=true;}
else
{$.extend(true,oSettings.oLanguage,oInit.oLanguage);}
if(oInit.asStripeClasses===null)
{oSettings.asStripeClasses=[oSettings.oClasses.sStripeOdd,oSettings.oClasses.sStripeEven];}
var stripeClasses=oSettings.asStripeClasses;var rowOne=$('tbody tr:eq(0)',this);if($.inArray(true,$.map(stripeClasses,function(el,i){return rowOne.hasClass(el);}))!==-1){$('tbody tr',this).removeClass(stripeClasses.join(' '));oSettings.asDestroyStripes=stripeClasses.slice();}
var anThs=[];var aoColumnsInit;var nThead=this.getElementsByTagName('thead');if(nThead.length!==0)
{_fnDetectHeader(oSettings.aoHeader,nThead[0]);anThs=_fnGetUniqueThs(oSettings);}
if(oInit.aoColumns===null)
{aoColumnsInit=[];for(i=0,iLen=anThs.length;i<iLen;i++)
{aoColumnsInit.push(null);}}
else
{aoColumnsInit=oInit.aoColumns;}
for(i=0,iLen=aoColumnsInit.length;i<iLen;i++)
{_fnAddColumn(oSettings,anThs?anThs[i]:null);}
_fnApplyColumnDefs(oSettings,oInit.aoColumnDefs,aoColumnsInit,function(iCol,oDef){_fnColumnOptions(oSettings,iCol,oDef);});if(rowOne.length){var a=function(cell,name){return cell.getAttribute('data-'+name)?name:null;};$.each(_fnGetRowElements(oSettings,rowOne[0]).cells,function(i,cell){var col=oSettings.aoColumns[i];if(col.mData===i){var sort=a(cell,'sort')||a(cell,'order');var filter=a(cell,'filter')||a(cell,'search');if(sort!==null||filter!==null){col.mData={_:i+'.display',sort:sort!==null?i+'.@data-'+sort:undefined,type:sort!==null?i+'.@data-'+sort:undefined,filter:filter!==null?i+'.@data-'+filter:undefined};_fnColumnOptions(oSettings,i);}}});}
if(oInit.bStateSave)
{oSettings.oFeatures.bStateSave=true;_fnLoadState(oSettings,oInit);_fnCallbackReg(oSettings,'aoDrawCallback',_fnSaveState,'state_save');}
 
if(oInit.aaSorting===undefined)
{for(i=0,iLen=oSettings.aaSorting.length;i<iLen;i++)
{oSettings.aaSorting[i][1]=oSettings.aoColumns[i].asSorting[0];}}
_fnSortingClasses(oSettings);if(oSettings.oFeatures.bSort)
{_fnCallbackReg(oSettings,'aoDrawCallback',function(){if(oSettings.bSorted){var aSort=_fnSortFlatten(oSettings);var sortedColumns={};$.each(aSort,function(i,val){sortedColumns[val.src]=val.dir;});_fnCallbackFire(oSettings,null,'order',[oSettings,aSort,sortedColumns]);_fnSortingClasses(oSettings);_fnSortAria(oSettings);}});}
_fnBrowserDetect(oSettings); var captions=$(this).children('caption').each(function(){this._captionSide=$(this).css('caption-side');});var thead=$(this).children('thead');if(thead.length===0)
{thead=$('<thead/>').appendTo(this);}
oSettings.nTHead=thead[0];var tbody=$(this).children('tbody');if(tbody.length===0)
{tbody=$('<tbody/>').appendTo(this);}
oSettings.nTBody=tbody[0];var tfoot=$(this).children('tfoot');if(tfoot.length===0&&captions.length>0&&(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!==""))
{
 tfoot=$('<tfoot/>').appendTo(this);}
if(tfoot.length===0||tfoot.children().length===0){$(this).addClass(oSettings.oClasses.sNoFooter);}
else if(tfoot.length>0){oSettings.nTFoot=tfoot[0];_fnDetectHeader(oSettings.aoFooter,oSettings.nTFoot);}
if(oInit.aaData)
{for(i=0;i<oInit.aaData.length;i++)
{_fnAddData(oSettings,oInit.aaData[i]);}}
else if(oSettings.bDeferLoading||_fnDataSource(oSettings)=='dom')
{_fnAddTr(oSettings,$(oSettings.nTBody).children('tr'));}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings.bInitialised=true;if(bInitHandedOff===false)
{_fnInitialise(oSettings);}});_that=null;return this;};var __apiStruct=[];var __arrayProto=Array.prototype;var _toSettings=function(mixed)
{var idx,jq;var settings=DataTable.settings;var tables=$.map(settings,function(el,i){return el.nTable;});if(mixed.nTable&&mixed.oApi){ return[mixed];}
else if(mixed.nodeName&&mixed.nodeName.toLowerCase()==='table'){ idx=$.inArray(mixed,tables);return idx!==-1?[settings[idx]]:null;}
else if(typeof mixed==='string'){ jq=$(mixed);}
else if(mixed instanceof $){jq=mixed;}
if(jq){return jq.map(function(i){idx=$.inArray(this,tables);return idx!==-1?settings[idx]:null;});}};DataTable.Api=_Api=function(context,data)
{if(!this instanceof _Api){throw'DT API must be constructed as a new object';}
var settings=[];var ctxSettings=function(o){var a=_toSettings(o);if(a){settings.push.apply(settings,a);}};if($.isArray(context)){for(var i=0,ien=context.length;i<ien;i++){ctxSettings(context[i]);}}
else{ctxSettings(context);} 
this.context=_unique(settings); if(data){this.push.apply(this,data);} 
this.selector={rows:null,cols:null,opts:null};_Api.extend(this,this,__apiStruct);};_Api.prototype={concat:__arrayProto.concat,context:[],
each:function(fn)
{if(__arrayProto.forEach){ __arrayProto.forEach.call(this,fn,this);}
else{for(var i=0,ien=this.length;i<ien;i++){ fn.call(this,this[i],i,this);}}
return this;},filter:function(fn)
{var a=[];if(__arrayProto.filter){a=__arrayProto.filter.call(this,fn,this);}
else{for(var i=0,ien=this.length;i<ien;i++){if(fn.call(this,this[i],i,this)){a.push(this[i]);}}}
return new _Api(this.context,a);},flatten:function()
{var a=[];return new _Api(this.context,a.concat.apply(a,this));},join:__arrayProto.join,indexOf:__arrayProto.indexOf||function(obj,start)
{for(var i=(start||0),ien=this.length;i<ien;i++){if(this[i]===obj){return i;}}
return-1;},iterator:function(flatten,type,fn){var
a=[],ret,i,ien,j,jen,context=this.context,rows,items,item,selector=this.selector; if(typeof flatten==='string'){fn=type;type=flatten;flatten=false;}
for(i=0,ien=context.length;i<ien;i++){if(type==='table'){ret=fn(context[i],i);if(ret!==undefined){a.push(ret);}}
else if(type==='columns'||type==='rows'){ ret=fn(context[i],this[i],i);if(ret!==undefined){a.push(ret);}}
else if(type==='column'||type==='column-rows'||type==='row'||type==='cell'){ items=this[i];if(type==='column-rows'){rows=_selector_row_indexes(context[i],selector.opts);}
for(j=0,jen=items.length;j<jen;j++){item=items[j];if(type==='cell'){ret=fn(context[i],item.row,item.column,i,j);}
else{ret=fn(context[i],item,i,j,rows);}
if(ret!==undefined){a.push(ret);}}}}
if(a.length){var api=new _Api(context,flatten?a.concat.apply([],a):a);var apiSelector=api.selector;apiSelector.rows=selector.rows;apiSelector.cols=selector.cols;apiSelector.opts=selector.opts;return api;}
return this;},lastIndexOf:__arrayProto.lastIndexOf||function(obj,start)
{return this.indexOf.apply(this.toArray.reverse(),arguments);},length:0,map:function(fn)
{var a=[];if(__arrayProto.map){a=__arrayProto.map.call(this,fn,this);}
else{for(var i=0,ien=this.length;i<ien;i++){a.push(fn.call(this,this[i],i));}}
return new _Api(this.context,a);},pluck:function(prop)
{return this.map(function(el){return el[prop];});},pop:__arrayProto.pop,push:__arrayProto.push, reduce:__arrayProto.reduce||function(fn,init)
{var
value,isSet=false;if(arguments.length>1){value=init;isSet=true;}
for(var i=0,ien=this.length;i<ien;i++){if(!this.hasOwnProperty(i)){continue;}
value=isSet?fn(value,this[i],i,this):this[i];isSet=true;}
return value;},reduceRight:__arrayProto.reduceRight||function(fn,init)
{var
value,isSet=false;if(arguments.length>1){value=init;isSet=true;}
for(var i=this.length-1;i>=0;i--){if(!this.hasOwnProperty(i)){continue;}
value=isSet?fn(value,this[i],i,this):this[i];isSet=true;}
return value;},reverse:__arrayProto.reverse, selector:null,shift:__arrayProto.shift,sort:__arrayProto.sort,splice:__arrayProto.splice,toArray:function()
{return __arrayProto.slice.call(this);},to$:function()
{return $(this);},toJQuery:function()
{return $(this);},unique:function()
{return new _Api(this.context,_unique(this));},unshift:__arrayProto.unshift};_Api.extend=function(scope,obj,ext)
{ if(!obj||(!(obj instanceof _Api)&&!obj.__dt_wrapper)){return;}
var
i,ien,j,jen,struct,inner,methodScoping=function(fn,struc){return function(){var ret=fn.apply(scope,arguments); _Api.extend(ret,ret,struc.methodExt);return ret;};};for(i=0,ien=ext.length;i<ien;i++){struct=ext[i]; obj[struct.name]=typeof struct.val==='function'?methodScoping(struct.val,struct):struct.val;obj[struct.name].__dt_wrapper=true; _Api.extend(scope,obj[struct.name],struct.propExt);}};





_Api.register=_api_register=function(name,val)
{if($.isArray(name)){for(var j=0,jen=name.length;j<jen;j++){_Api.register(name[j],val);}
return;}
var
i,ien,heir=name.split('.'),struct=__apiStruct,key,method;var find=function(src,name){for(var i=0,ien=src.length;i<ien;i++){if(src[i].name===name){return src[i];}}
return null;};for(i=0,ien=heir.length;i<ien;i++){method=heir[i].indexOf('()')!==-1;key=method?heir[i].replace('()',''):heir[i];var src=find(struct,key);if(!src){src={name:key,val:{},methodExt:[],propExt:[]};struct.push(src);}
if(i===ien-1){src.val=val;}
else{struct=method?src.methodExt:src.propExt;}} 
if(_Api.ready){DataTable.api.build();}};_Api.registerPlural=_api_registerPlural=function(pluralName,singularName,val){_Api.register(pluralName,val);_Api.register(singularName,function(){var ret=val.apply(this,arguments);if(ret===this){ return this;}
else if(ret instanceof _Api){
return ret.length?$.isArray(ret[0])?new _Api(ret.context,ret[0]):ret[0]:undefined;} 
return ret;});};var __table_selector=function(selector,a)
{ if(typeof selector==='number'){return[a[selector]];} 
var nodes=$.map(a,function(el,i){return el.nTable;});return $(nodes).filter(selector).map(function(i){ var idx=$.inArray(this,nodes);return a[idx];}).toArray();};_api_register('tables()',function(selector){ return selector?new _Api(__table_selector(selector,this.context)):this;});_api_register('table()',function(selector){var tables=this.tables(selector);var ctx=tables.context; if(ctx.length){ctx.length=1;}
return tables;});_api_registerPlural('tables().nodes()','table().node()',function(){return this.iterator('table',function(ctx){return ctx.nTable;});});_api_registerPlural('tables().body()','table().body()',function(){return this.iterator('table',function(ctx){return ctx.nTBody;});});_api_registerPlural('tables().header()','table().header()',function(){return this.iterator('table',function(ctx){return ctx.nTHead;});});_api_registerPlural('tables().footer()','table().footer()',function(){return this.iterator('table',function(ctx){return ctx.nTFoot;});});_api_register('draw()',function(resetPaging){return this.iterator('table',function(settings){_fnReDraw(settings,resetPaging===false);});});_api_register('page()',function(action){if(action===undefined){return this.page.info().page;} 
return this.iterator('table',function(settings){_fnPageChange(settings,action);});});_api_register('page.info()',function(action){if(this.context.length===0){return undefined;}
var
settings=this.context[0],start=settings._iDisplayStart,len=settings._iDisplayLength,visRecords=settings.fnRecordsDisplay(),all=len===-1;return{"page":all?0:Math.floor(start/len),"pages":all?1:Math.ceil(visRecords/len),"start":start,"end":settings.fnDisplayEnd(),"length":len,"recordsTotal":settings.fnRecordsTotal(),"recordsDisplay":visRecords};});_api_register('page.len()',function(len){
if(len===undefined){return this.context.length!==0?this.context[0]._iDisplayLength:undefined;} 
return this.iterator('table',function(settings){_fnLengthChange(settings,len);});});var __reload=function(settings,holdPosition,callback){if(_fnDataSource(settings)=='ssp'){_fnReDraw(settings,holdPosition);}
else{ _fnBuildAjax(settings,[],function(json){_fnClearTable(settings);var data=_fnAjaxDataSrc(settings,json);for(var i=0,ien=data.length;i<ien;i++){_fnAddData(settings,data[i]);}
_fnReDraw(settings,holdPosition);if(callback){callback(json);}});}};_api_register('ajax.json()',function(){var ctx=this.context;if(ctx.length>0){return ctx[0].json;}
});_api_register('ajax.reload()',function(callback,resetPaging){return this.iterator('table',function(settings){__reload(settings,resetPaging===false,callback);});});_api_register('ajax.url()',function(url){var ctx=this.context;if(url===undefined){ if(ctx.length===0){return undefined;}
ctx=ctx[0];return ctx.ajax?$.isPlainObject(ctx.ajax)?ctx.ajax.url:ctx.ajax:ctx.sAjaxSource;} 
return this.iterator('table',function(settings){if($.isPlainObject(settings.ajax)){settings.ajax.url=url;}
else{settings.ajax=url;}


});});_api_register('ajax.url().load()',function(callback,resetPaging){
 return this.iterator('table',function(ctx){__reload(ctx,resetPaging===false,callback);});});var _selector_run=function(selector,select)
{var
out=[],res,a,i,ien,j,jen;if(!$.isArray(selector)){selector=[selector];}
for(i=0,ien=selector.length;i<ien;i++){a=selector[i]&&selector[i].split?selector[i].split(','):[selector[i]];for(j=0,jen=a.length;j<jen;j++){res=select(typeof a[j]==='string'?$.trim(a[j]):a[j]);if(res&&res.length){out.push.apply(out,res);}}}
return out;};var _selector_opts=function(opts)
{if(!opts){opts={};}
 
if(opts.filter&&!opts.search){opts.search=opts.filter;}
return{search:opts.search||'none',order:opts.order||'current',page:opts.page||'all'};};var _selector_first=function(inst)
{ for(var i=0,ien=inst.length;i<ien;i++){if(inst[i].length>0){
 inst[0]=inst[i];inst.length=1;inst.context=[inst.context[i]];return inst;}} 
inst.length=0;return inst;};var _selector_row_indexes=function(settings,opts)
{var
i,ien,tmp,a=[],displayFiltered=settings.aiDisplay,displayMaster=settings.aiDisplayMaster;var
search=opts.search, order=opts.order,page=opts.page;


 
if(page=='current')
{for(i=settings._iDisplayStart,ien=settings.fnDisplayEnd();i<ien;i++){a.push(displayFiltered[i]);}}
else if(order=='current'||order=='applied'){a=search=='none'?displayMaster.slice(): search=='applied'?displayFiltered.slice(): $.map(displayMaster,function(el,i){ return $.inArray(el,displayFiltered)===-1?el:null;});}
else if(order=='index'||order=='original'){for(i=0,ien=settings.aoData.length;i<ien;i++){if(search=='none'){a.push(i);}
else{ tmp=$.inArray(i,displayFiltered);if((tmp===-1&&search=='removed')||(tmp===1&&search=='applied'))
{a.push(i);}}}}
return a;};var __row_selector=function(settings,selector,opts)
{return _selector_run(selector,function(sel){var selInt=_intVal(sel);

if(selInt!==null&&!opts){return[selInt];}
var rows=_selector_row_indexes(settings,opts);if(selInt!==null&&$.inArray(selInt,rows)!==-1){ return[selInt];}
else if(!sel){ return rows;} 
var nodes=[];for(var i=0,ien=rows.length;i<ien;i++){nodes.push(settings.aoData[rows[i]].nTr);}
if(sel.nodeName){ if($.inArray(sel,nodes)!==-1){return[sel._DT_RowIndex];
}} 
return $(nodes).filter(sel).map(function(){return this._DT_RowIndex;}).toArray();});};_api_register('rows()',function(selector,opts){ if(selector===undefined){selector='';}
else if($.isPlainObject(selector)){opts=selector;selector='';}
opts=_selector_opts(opts);var inst=this.iterator('table',function(settings){return __row_selector(settings,selector,opts);});inst.selector.rows=selector;inst.selector.opts=opts;return inst;});_api_registerPlural('rows().nodes()','row().node()',function(){return this.iterator('row',function(settings,row){ return settings.aoData[row].nTr||undefined;});});_api_register('rows().data()',function(){return this.iterator(true,'rows',function(settings,rows){return _pluck_order(settings.aoData,rows,'_aData');});});_api_registerPlural('rows().cache()','row().cache()',function(type){return this.iterator('row',function(settings,row){var r=settings.aoData[row];return type==='search'?r._aFilterData:r._aSortData;});});_api_registerPlural('rows().invalidate()','row().invalidate()',function(src){return this.iterator('row',function(settings,row){_fnInvalidateRow(settings,row,src);});});_api_registerPlural('rows().indexes()','row().index()',function(){return this.iterator('row',function(settings,row){return row;});});_api_registerPlural('rows().remove()','row().remove()',function(){var that=this;return this.iterator('row',function(settings,row,thatIdx){var data=settings.aoData;data.splice(row,1); for(var i=0,ien=data.length;i<ien;i++){if(data[i].nTr!==null){data[i].nTr._DT_RowIndex=i;}} 
var displayIndex=$.inArray(row,settings.aiDisplay); _fnDeleteIndex(settings.aiDisplayMaster,row);_fnDeleteIndex(settings.aiDisplay,row);_fnDeleteIndex(that[thatIdx],row,false);
 
_fnLengthOverflow(settings);});});_api_register('rows.add()',function(rows){var newRows=this.iterator('table',function(settings){var row,i,ien;var out=[];for(i=0,ien=rows.length;i<ien;i++){row=rows[i];if(row.nodeName&&row.nodeName.toUpperCase()==='TR'){out.push(_fnAddTr(settings,row)[0]);}
else{out.push(_fnAddData(settings,row));}}
return out;}); var modRows=this.rows(-1);modRows.pop();modRows.push.apply(modRows,newRows);return modRows;});_api_register('row()',function(selector,opts){return _selector_first(this.rows(selector,opts));});_api_register('row().data()',function(data){var ctx=this.context;if(data===undefined){ return ctx.length&&this.length?ctx[0].aoData[this[0]]._aData:undefined;} 
ctx[0].aoData[this[0]]._aData=data; _fnInvalidateRow(ctx[0],this[0],'data');return this;});_api_register('row.add()',function(row){
 if(row instanceof $&&row.length){row=row[0];}
var rows=this.iterator('table',function(settings){if(row.nodeName&&row.nodeName.toUpperCase()==='TR'){return _fnAddTr(settings,row)[0];}
return _fnAddData(settings,row);}); return this.row(rows[0]);});var __details_add=function(ctx,row,data,klass)
{ var rows=[];var addRow=function(r,k){if(!r.nodeName||r.nodeName.toUpperCase()!=='tr'){r=$('<tr><td></td></tr>').find('td').html(r).parent();}
$('td',r).addClass(k)[0].colSpan=_fnVisbleColumns(ctx);rows.push(r[0]);};if($.isArray(data)||data instanceof $){for(var i=0,ien=data.length;i<ien;i++){addRow(data[i],klass);}}
else{addRow(data,klass);}
if(row._details){row._details.remove();}
row._details=$(rows); if(row._detailsShow){row._details.insertAfter(row.nTr);}};var __details_display=function(show){var ctx=this.context;if(ctx.length&&this.length){var row=ctx[0].aoData[this[0]];if(row._details){row._detailsShow=show;if(show){row._details.insertAfter(row.nTr);}
else{row._details.remove();}
__details_events(ctx[0]);}}
return this;};var __details_events=function(settings)
{var table=$(settings.nTable);table.off('draw.DT_details');table.off('column-visibility.DT_details');if(_pluck(settings.aoData,'_details').length>0){ table.on('draw.DT_details',function(){table.find('tbody tr').each(function(){ var rowIdx=_fnNodeToDataIndex(settings,this);var row=settings.aoData[rowIdx];if(row._detailsShow){row._details.insertAfter(this);}});}); table.on('column-visibility.DT_details',function(e,settings,idx,vis){
var row,visible=_fnVisbleColumns(settings);for(var i=0,ien=settings.aoData.length;i<ien;i++){row=settings.aoData[i];if(row._details){row._details.children('td[colspan]').attr('colspan',visible);}}});}};

 _api_register('row().child()',function(data,klass){var ctx=this.context;if(data===undefined){ return ctx.length&&this.length?ctx[0].aoData[this[0]]._details:undefined;}
else if(ctx.length&&this.length){ __details_add(ctx[0],ctx[0].aoData[this[0]],data,klass);}
return this;});_api_register(['row().child.show()','row().child().show()'],function(){__details_display.call(this,true);});_api_register(['row().child.hide()','row().child().hide()'],function(){__details_display.call(this,false);});_api_register('row().child.isShown()',function(){var ctx=this.context;if(ctx.length&&this.length){ return ctx[0].aoData[this[0]]._detailsShow||false;}
return false;});

var __re_column_selector=/^(.*):(name|visIdx|visible)$/;var __column_selector=function(settings,selector,opts)
{var
columns=settings.aoColumns,names=_pluck(columns,'sName'),nodes=_pluck(columns,'nTh');return _selector_run(selector,function(s){var selInt=_intVal(s);if(s===''){ return _range(settings.aoColumns.length);}
else if(selInt!==null){ return[selInt>=0?selInt: columns.length+selInt
];}
else{var match=s.match(__re_column_selector);if(match){switch(match[2]){case'visIdx':case'visible':var idx=parseInt(match[1],10); if(idx<0){ var visColumns=$.map(columns,function(col,i){return col.bVisible?i:null;});return[visColumns[visColumns.length+idx]];} 
return[_fnVisibleToColumnIndex(settings,idx)];case'name': return $.map(names,function(name,i){return name===match[1]?i:null;});}}
else{ return $(nodes).filter(s).map(function(){return $.inArray(this,nodes);}).toArray();}}});};var __setColumnVis=function(settings,column,vis){var
cols=settings.aoColumns,col=cols[column],data=settings.aoData,row,cells,i,ien,tr; if(vis===undefined){return col.bVisible;}
 
if(col.bVisible===vis){return;}
if(vis){
 var insertBefore=$.inArray(true,_pluck(cols,'bVisible'),column+1);for(i=0,ien=data.length;i<ien;i++){tr=data[i].nTr;cells=data[i].anCells;if(tr){ tr.insertBefore(cells[column],cells[insertBefore]||null);}}}
else{ $(_pluck(settings.aoData,'anCells',column)).remove();col.bVisible=false;_fnDrawHead(settings,settings.aoHeader);_fnDrawHead(settings,settings.aoFooter);_fnSaveState(settings);} 
col.bVisible=vis;_fnDrawHead(settings,settings.aoHeader);_fnDrawHead(settings,settings.aoFooter); _fnAdjustColumnSizing(settings); if(settings.oScroll.sX||settings.oScroll.sY){_fnScrollDraw(settings);}
_fnCallbackFire(settings,null,'column-visibility',[settings,column,vis]);_fnSaveState(settings);};_api_register('columns()',function(selector,opts){ if(selector===undefined){selector='';}
else if($.isPlainObject(selector)){opts=selector;selector='';}
opts=_selector_opts(opts);var inst=this.iterator('table',function(settings){return __column_selector(settings,selector,opts);});inst.selector.cols=selector;inst.selector.opts=opts;return inst;});_api_registerPlural('columns().header()','column().header()',function(selector,opts){return this.iterator('column',function(settings,column){return settings.aoColumns[column].nTh;});});_api_registerPlural('columns().footer()','column().footer()',function(selector,opts){return this.iterator('column',function(settings,column){return settings.aoColumns[column].nTf;});});_api_registerPlural('columns().data()','column().data()',function(){return this.iterator('column-rows',function(settings,column,i,j,rows){var a=[];for(var row=0,ien=rows.length;row<ien;row++){a.push(_fnGetCellData(settings,rows[row],column,''));}
return a;});});_api_registerPlural('columns().cache()','column().cache()',function(type){return this.iterator('column-rows',function(settings,column,i,j,rows){return _pluck_order(settings.aoData,rows,type==='search'?'_aFilterData':'_aSortData',column);});});_api_registerPlural('columns().nodes()','column().nodes()',function(){return this.iterator('column-rows',function(settings,column,i,j,rows){return _pluck_order(settings.aoData,rows,'anCells',column);});});_api_registerPlural('columns().visible()','column().visible()',function(vis){return this.iterator('column',function(settings,column){return __setColumnVis(settings,column,vis);});});_api_registerPlural('columns().indexes()','column().index()',function(type){return this.iterator('column',function(settings,column){return type==='visible'?_fnColumnIndexToVisible(settings,column):column;});});_api_register('columns.adjust()',function(){return this.iterator('table',function(settings){_fnAdjustColumnSizing(settings);});}); _api_register('column.index()',function(type,idx){if(this.context.length!==0){var ctx=this.context[0];if(type==='fromVisible'||type==='toData'){return _fnColumnIndexToVisible(ctx,idx);}
else if(type==='fromData'||type==='toVisible'){return _fnVisibleToColumnIndex(ctx,idx);}}});_api_register('column()',function(selector,opts){return _selector_first(this.columns(selector,opts));});var __cell_selector=function(settings,selector,opts)
{var data=settings.aoData;var rows=_selector_row_indexes(settings,opts);var cells=_pluck_order(data,rows,'anCells');var allCells=$([].concat.apply([],cells));var row;var columns=settings.aoColumns.length;var a,i,ien,j;return _selector_run(selector,function(s){if(!s){ a=[];for(i=0,ien=rows.length;i<ien;i++){row=rows[i];for(j=0;j<columns;j++){a.push({row:row,column:j});}}
return a;} 
return allCells.filter(s).map(function(i,el){row=el.parentNode._DT_RowIndex;return{row:row,column:$.inArray(el,data[row].anCells)};});});};_api_register('cells()',function(rowSelector,columnSelector,opts){ if($.isPlainObject(rowSelector)){opts=rowSelector;rowSelector=null;}
if($.isPlainObject(columnSelector)){opts=columnSelector;columnSelector=null;} 
if(columnSelector===null||columnSelector===undefined){return this.iterator('table',function(settings){return __cell_selector(settings,rowSelector,_selector_opts(opts));});} 
var columns=this.columns(columnSelector,opts);var rows=this.rows(rowSelector,opts);var a,i,ien,j,jen;var cells=this.iterator('table',function(settings,idx){a=[];for(i=0,ien=rows[idx].length;i<ien;i++){for(j=0,jen=columns[idx].length;j<jen;j++){a.push({row:rows[idx][i],column:columns[idx][j]});}}
return a;});$.extend(cells.selector,{cols:columnSelector,rows:rowSelector,opts:opts});return cells;});_api_registerPlural('cells().nodes()','cell().node()',function(){return this.iterator('cell',function(settings,row,column){return settings.aoData[row].anCells[column];});});_api_register('cells().data()',function(){return this.iterator('cell',function(settings,row,column){return _fnGetCellData(settings,row,column);});});_api_registerPlural('cells().cache()','cell().cache()',function(type){type=type==='search'?'_aFilterData':'_aSortData';return this.iterator('cell',function(settings,row,column){return settings.aoData[row][type][column];});});_api_registerPlural('cells().indexes()','cell().index()',function(){return this.iterator('cell',function(settings,row,column){return{row:row,column:column,columnVisible:_fnColumnIndexToVisible(settings,column)};});});_api_register(['cells().invalidate()','cell().invalidate()'],function(src){var selector=this.selector;

this.rows(selector.rows,selector.opts).invalidate(src);return this;});_api_register('cell()',function(rowSelector,columnSelector,opts){return _selector_first(this.cells(rowSelector,columnSelector,opts));});_api_register('cell().data()',function(data){var ctx=this.context;var cell=this[0];if(data===undefined){ return ctx.length&&cell.length?_fnGetCellData(ctx[0],cell[0].row,cell[0].column):undefined;} 
_fnSetCellData(ctx[0],cell[0].row,cell[0].column,data);_fnInvalidateRow(ctx[0],cell[0].row,'data',cell[0].column);return this;});_api_register('order()',function(order,dir){var ctx=this.context;if(order===undefined){ return ctx.length!==0?ctx[0].aaSorting:undefined;} 
if(typeof order==='number'){ order=[[order,dir]];}
else if(!$.isArray(order[0])){order=Array.prototype.slice.call(arguments);}
return this.iterator('table',function(settings){settings.aaSorting=order.slice();});});_api_register('order.listener()',function(node,column,callback){return this.iterator('table',function(settings){_fnSortAttachListener(settings,node,column,callback);});});_api_register(['columns().order()','column().order()'],function(dir){var that=this;return this.iterator('table',function(settings,i){var sort=[];$.each(that[i],function(j,col){sort.push([col,dir]);});settings.aaSorting=sort;});});_api_register('search()',function(input,regex,smart,caseInsen){var ctx=this.context;if(input===undefined){ return ctx.length!==0?ctx[0].oPreviousSearch.sSearch:undefined;} 
return this.iterator('table',function(settings){if(!settings.oFeatures.bFilter){return;}
_fnFilterComplete(settings,$.extend({},settings.oPreviousSearch,{"sSearch":input+"","bRegex":regex===null?false:regex,"bSmart":smart===null?true:smart,"bCaseInsensitive":caseInsen===null?true:caseInsen}),1);});});_api_register(['columns().search()','column().search()'],function(input,regex,smart,caseInsen){return this.iterator('column',function(settings,column){var preSearch=settings.aoPreSearchCols;if(input===undefined){ return preSearch[column].sSearch;} 
if(!settings.oFeatures.bFilter){return;}
$.extend(preSearch[column],{"sSearch":input+"","bRegex":regex===null?false:regex,"bSmart":smart===null?true:smart,"bCaseInsensitive":caseInsen===null?true:caseInsen});_fnFilterComplete(settings,settings.oPreviousSearch,1);});});DataTable.versionCheck=DataTable.fnVersionCheck=function(version)
{var aThis=DataTable.version.split('.');var aThat=version.split('.');var iThis,iThat;for(var i=0,iLen=aThat.length;i<iLen;i++){iThis=parseInt(aThis[i],10)||0;iThat=parseInt(aThat[i],10)||0; if(iThis===iThat){continue;} 
return iThis>iThat;}
return true;};DataTable.isDataTable=DataTable.fnIsDataTable=function(table)
{var t=$(table).get(0);var is=false;$.each(DataTable.settings,function(i,o){if(o.nTable===t||o.nScrollHead===t||o.nScrollFoot===t){is=true;}});return is;};DataTable.tables=DataTable.fnTables=function(visible)
{return jQuery.map(DataTable.settings,function(o){if(!visible||(visible&&$(o.nTable).is(':visible'))){return o.nTable;}});};_api_register('$()',function(selector,opts){var
rows=this.rows(opts).nodes(), jqRows=$(rows);return $([].concat(jqRows.filter(selector).toArray(),jqRows.find(selector).toArray()));}); $.each(['on','one','off'],function(i,key){_api_register(key+'()',function(){var args=Array.prototype.slice.call(arguments); if(args[0].indexOf('.dt')===-1){args[0]+='.dt';}
var inst=$(this.tables().nodes());inst[key].apply(inst,args);return this;});});_api_register('clear()',function(){return this.iterator('table',function(settings){_fnClearTable(settings);});});_api_register('settings()',function(){return new _Api(this.context,this.context);});_api_register('data()',function(){return this.iterator('table',function(settings){return _pluck(settings.aoData,'_aData');}).flatten();});_api_register('destroy()',function(remove){remove=remove||false;return this.iterator('table',function(settings){var orig=settings.nTableWrapper.parentNode;var classes=settings.oClasses;var table=settings.nTable;var tbody=settings.nTBody;var thead=settings.nTHead;var tfoot=settings.nTFoot;var jqTable=$(table);var jqTbody=$(tbody);var jqWrapper=$(settings.nTableWrapper);var rows=$.map(settings.aoData,function(r){return r.nTr;});var i,ien;
 settings.bDestroying=true; _fnCallbackFire(settings,"aoDestroyCallback","destroy",[settings]); if(!remove){new _Api(settings).columns().visible(true);} 
jqWrapper.unbind('.DT').find(':not(tbody *)').unbind('.DT');$(window).unbind('.DT-'+settings.sInstance); if(table!=thead.parentNode){jqTable.children('thead').remove();jqTable.append(thead);}
if(tfoot&&table!=tfoot.parentNode){jqTable.children('tfoot').remove();jqTable.append(tfoot);} 
jqTable.remove();jqWrapper.remove();settings.aaSorting=[];settings.aaSortingFixed=[];_fnSortingClasses(settings);$(rows).removeClass(settings.asStripeClasses.join(' '));$('th, td',thead).removeClass(classes.sSortable+' '+
classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone);if(settings.bJUI){$('th span.'+classes.sSortIcon+', td span.'+classes.sSortIcon,thead).remove();$('th, td',thead).each(function(){var wrapper=$('div.'+classes.sSortJUIWrapper,this);$(this).append(wrapper.contents());wrapper.remove();});}
if(!remove){orig.insertBefore(table,settings.nTableReinsertBefore);} 
jqTbody.children().detach();jqTbody.append(rows); jqTable.css('width',settings.sDestroyWidth).removeClass(classes.sTable);
 ien=settings.asDestroyStripes.length;if(ien){jqTbody.children().each(function(i){$(this).addClass(settings.asDestroyStripes[i%ien]);});}
var idx=$.inArray(settings,DataTable.settings);if(idx!==-1){DataTable.settings.splice(idx,1);}});});DataTable.version="1.10.0-dev";DataTable.settings=[];DataTable.models={};DataTable.models.oSearch={"bCaseInsensitive":true,"sSearch":"","bRegex":false,"bSmart":true};DataTable.models.oRow={"nTr":null,"anCells":null,"_aData":[],"_aSortData":null,"_aFilterData":null,"_sFilterRow":null,"_sRowStripe":"","src":null};DataTable.models.oColumn={"aDataSort":null,"asSorting":null,"bSearchable":null,"bSortable":null,"bVisible":null,"_sManualType":null,"_bAttrSrc":false,"fnCreatedCell":null,"fnGetData":null,"fnSetData":null,"mData":null,"mRender":null,"nTh":null,"nTf":null,"sClass":null,"sContentPadding":null,"sDefaultContent":null,"sName":null,"sSortDataType":'std',"sSortingClass":null,"sSortingClassJUI":null,"sTitle":null,"sType":null,"sWidth":null,"sWidthOrig":null};DataTable.defaults={"aaData":null,"aaSorting":[[0,'asc']],"aaSortingFixed":[],"ajax":null,"aLengthMenu":[10,25,50,100],"aoColumns":null,"aoColumnDefs":null,"aoSearchCols":[],"asStripeClasses":null,"bAutoWidth":true,"bDeferRender":false,"bDestroy":false,"bFilter":true,"bInfo":true,"bJQueryUI":false,"bLengthChange":true,"bPaginate":true,"bProcessing":false,"bRetrieve":false,"bScrollCollapse":false,"bServerSide":false,"bSort":true,"bSortMulti":true,"bSortCellsTop":false,"bSortClasses":true,"bStateSave":false,"fnCreatedRow":null,"fnDrawCallback":null,"fnFooterCallback":null,"fnFormatNumber":function(toFormat){return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sInfoThousands);},"fnHeaderCallback":null,"fnInfoCallback":null,"fnInitComplete":null,"fnPreDrawCallback":null,"fnRowCallback":null,"fnServerData":null,"fnServerParams":null,"fnStateLoadCallback":function(settings){try{return JSON.parse(localStorage.getItem('DataTables_'+settings.sInstance+'_'+window.location.pathname));}catch(e){}},"fnStateLoadParams":null,"fnStateLoaded":null,"fnStateSaveCallback":function(settings,data){try{localStorage.setItem('DataTables_'+settings.sInstance+'_'+window.location.pathname,JSON.stringify(data));}catch(e){}},"fnStateSaveParams":null,"iStateDuration":7200,"iDeferLoading":null,"iDisplayLength":10,"iDisplayStart":0,"iTabIndex":0,"oClasses":{},"oLanguage":{"oAria":{"sSortAscending":": activate to sort column ascending","sSortDescending":": activate to sort column descending"},"oPaginate":{"sFirst":"First","sLast":"Last","sNext":"Next","sPrevious":"Previous"},"sEmptyTable":"No data available in table","sInfo":"Showing _START_ to _END_ of _TOTAL_ entries","sInfoEmpty":"Showing 0 to 0 of 0 entries","sInfoFiltered":"(filtered from _MAX_ total entries)","sInfoPostFix":"","sInfoThousands":",","sLengthMenu":"Show _MENU_ entries","sLoadingRecords":"Loading...","sProcessing":"Processing...","sSearch":"Search:","sUrl":"","sZeroRecords":"No matching records found"},"oSearch":$.extend({},DataTable.models.oSearch),"sAjaxDataProp":"data","sAjaxSource":null,"sDom":"lfrtip","sPaginationType":"simple_numbers","sScrollX":"","sScrollXInner":"","sScrollY":"","sServerMethod":"GET","renderer":null};_fnHungarianMap(DataTable.defaults);DataTable.defaults.column={"aDataSort":null,"iDataSort":-1,"asSorting":['asc','desc'],"bSearchable":true,"bSortable":true,"bVisible":true,"fnCreatedCell":null,"mData":null,"mRender":null,"sCellType":"td","sClass":"","sContentPadding":"","sDefaultContent":null,"sName":"","sSortDataType":"std","sTitle":null,"sType":null,"sWidth":null};_fnHungarianMap(DataTable.defaults.column);DataTable.models.oSettings={"oFeatures":{"bAutoWidth":null,"bDeferRender":null,"bFilter":null,"bInfo":null,"bLengthChange":null,"bPaginate":null,"bProcessing":null,"bServerSide":null,"bSort":null,"bSortMulti":null,"bSortClasses":null,"bStateSave":null},"oScroll":{"bCollapse":null,"iBarWidth":0,"sX":null,"sXInner":null,"sY":null},"oLanguage":{"fnInfoCallback":null},"oBrowser":{"bScrollOversize":false,"bScrollbarLeft":false},"ajax":null,"aanFeatures":[],"aoData":[],"aiDisplay":[],"aiDisplayMaster":[],"aoColumns":[],"aoHeader":[],"aoFooter":[],"oPreviousSearch":{},"aoPreSearchCols":[],"aaSorting":null,"aaSortingFixed":[],"asStripeClasses":null,"asDestroyStripes":[],"sDestroyWidth":0,"aoRowCallback":[],"aoHeaderCallback":[],"aoFooterCallback":[],"aoDrawCallback":[],"aoRowCreatedCallback":[],"aoPreDrawCallback":[],"aoInitComplete":[],"aoStateSaveParams":[],"aoStateLoadParams":[],"aoStateLoaded":[],"sTableId":"","nTable":null,"nTHead":null,"nTFoot":null,"nTBody":null,"nTableWrapper":null,"bDeferLoading":false,"bInitialised":false,"aoOpenRows":[],"sDom":null,"sPaginationType":"two_button","iStateDuration":0,"aoStateSave":[],"aoStateLoad":[],"oLoadedState":null,"sAjaxSource":null,"sAjaxDataProp":null,"bAjaxDataGet":true,"jqXHR":null,"json":undefined,"fnServerData":null,"aoServerParams":[],"sServerMethod":null,"fnFormatNumber":null,"aLengthMenu":null,"iDraw":0,"bDrawing":false,"iDrawError":-1,"_iDisplayLength":10,"_iDisplayStart":0,"_iRecordsTotal":0,"_iRecordsDisplay":0,"bJUI":null,"oClasses":{},"bFiltered":false,"bSorted":false,"bSortCellsTop":null,"oInit":null,"aoDestroyCallback":[],"fnRecordsTotal":function()
{return _fnDataSource(this)=='ssp'?this._iRecordsTotal*1:this.aiDisplayMaster.length;},"fnRecordsDisplay":function()
{return _fnDataSource(this)=='ssp'?this._iRecordsDisplay*1:this.aiDisplay.length;},"fnDisplayEnd":function()
{var
len=this._iDisplayLength,start=this._iDisplayStart,calc=start+len,records=this.aiDisplay.length,features=this.oFeatures,paginate=features.bPaginate;if(features.bServerSide){return paginate===false||len===-1?start+records:Math.min(start+len,this._iRecordsDisplay);}
else{return!paginate||calc>records||len===-1?records:calc;}},"oInstance":null,"sInstance":null,"iTabIndex":0,"nScrollHead":null,"nScrollFoot":null,"aLastSort":[],"oPlugins":{}};DataTable.ext=_ext={classes:{},errMode:"alert",feature:[],search:[],internal:{},legacy:{ajax:false},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,


fnVersionCheck:DataTable.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:DataTable.version};
$.extend(_ext,{afnFiltering:_ext.filter,aTypes:_ext.type.detect,ofnSearch:_ext.type.search,oSort:_ext.type.order,afnSortData:_ext.order,aoFeatures:_ext.feature,oApi:_ext.internal,oStdClasses:_ext.classes,oPagination:_ext.pager});$.extend(DataTable.ext.classes,{"sTable":"dataTable","sNoFooter":"no-footer","sPageButton":"paginate_button","sPageButtonActive":"current","sPageButtonDisabled":"disabled","sStripeOdd":"odd","sStripeEven":"even","sRowEmpty":"dataTables_empty","sWrapper":"dataTables_wrapper","sFilter":"dataTables_filter","sInfo":"dataTables_info","sPaging":"dataTables_paginate paging_","sLength":"dataTables_length","sProcessing":"dataTables_processing","sSortAsc":"sorting_asc","sSortDesc":"sorting_desc","sSortable":"sorting","sSortableAsc":"sorting_asc_disabled","sSortableDesc":"sorting_desc_disabled","sSortableNone":"sorting_disabled","sSortColumn":"sorting_","sFilterInput":"","sLengthSelect":"","sScrollWrapper":"dataTables_scroll","sScrollHead":"dataTables_scrollHead","sScrollHeadInner":"dataTables_scrollHeadInner","sScrollBody":"dataTables_scrollBody","sScrollFoot":"dataTables_scrollFoot","sScrollFootInner":"dataTables_scrollFootInner","sHeaderTH":"","sFooterTH":"","sSortJUIAsc":"","sSortJUIDesc":"","sSortJUI":"","sSortJUIAscAllowed":"","sSortJUIDescAllowed":"","sSortJUIWrapper":"","sSortIcon":"","sJUIHeader":"","sJUIFooter":""});(function(){


var _empty='';_empty='';var _stateDefault=_empty+'ui-state-default';var _sortIcon=_empty+'css_right ui-icon ui-icon-';var _headerFooter=_empty+'fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix';$.extend(DataTable.ext.oJUIClasses,DataTable.ext.classes,{"sPageButton":"fg-button ui-button "+_stateDefault,"sPageButtonActive":"ui-state-disabled","sPageButtonDisabled":"ui-state-disabled","sPaging":"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi "+"ui-buttonset-multi paging_","sSortAsc":_stateDefault+" sorting_asc","sSortDesc":_stateDefault+" sorting_desc","sSortable":_stateDefault+" sorting","sSortableAsc":_stateDefault+" sorting_asc_disabled","sSortableDesc":_stateDefault+" sorting_desc_disabled","sSortableNone":_stateDefault+" sorting_disabled","sSortJUIAsc":_sortIcon+"triangle-1-n","sSortJUIDesc":_sortIcon+"triangle-1-s","sSortJUI":_sortIcon+"carat-2-n-s","sSortJUIAscAllowed":_sortIcon+"carat-1-n","sSortJUIDescAllowed":_sortIcon+"carat-1-s","sSortJUIWrapper":"DataTables_sort_wrapper","sSortIcon":"DataTables_sort_icon","sScrollHead":"dataTables_scrollHead "+_stateDefault,"sScrollFoot":"dataTables_scrollFoot "+_stateDefault,"sHeaderTH":_stateDefault,"sFooterTH":_stateDefault,"sJUIHeader":_headerFooter+" ui-corner-tl ui-corner-tr","sJUIFooter":_headerFooter+" ui-corner-bl ui-corner-br"});}());var extPagination=DataTable.ext.pager;function _numbers(page,pages){var
numbers=[],buttons=extPagination.numbers_length,half=Math.floor(buttons/2),i=1;if(pages<=buttons){numbers=_range(0,pages);}
else if(page<=half){numbers=_range(0,buttons-2);numbers.push('ellipsis');numbers.push(pages-1);}
else if(page>=pages-1-half){numbers=_range(pages-(buttons-2),pages);numbers.splice(0,0,'ellipsis'); numbers.splice(0,0,0);}
else{numbers=_range(page-1,page+2);numbers.push('ellipsis');numbers.push(pages-1);numbers.splice(0,0,'ellipsis');numbers.splice(0,0,0);}
numbers.DT_el='span';return numbers;}
$.extend(extPagination,{simple:function(page,pages){return['previous','next'];},full:function(page,pages){return['first','previous','next','last'];},simple_numbers:function(page,pages){return['previous',_numbers(page,pages),'next'];},full_numbers:function(page,pages){return['first','previous',_numbers(page,pages),'next','last'];}, _numbers:_numbers,numbers_length:7});$.extend(true,DataTable.ext.renderer,{pageButton:{_:function(settings,host,idx,buttons,page,pages){var classes=settings.oClasses;var lang=settings.oLanguage.oPaginate;var btnDisplay,btnClass;var attach=function(container,buttons){var i,ien,node,button;var clickHandler=function(e){_fnPageChange(settings,e.data.action,true);};for(i=0,ien=buttons.length;i<ien;i++){button=buttons[i];if($.isArray(button)){var inner=$('<'+(button.DT_el||'div')+'/>').appendTo(container);attach(inner,button);}
else{btnDisplay='';btnClass='';switch(button){case'ellipsis':container.append('<span>&hellip;</span>');break;case'first':btnDisplay=lang.sFirst;btnClass=button+(page>0?'':' '+classes.sPageButtonDisabled);break;case'previous':btnDisplay=lang.sPrevious;btnClass=button+(page>0?'':' '+classes.sPageButtonDisabled);break;case'next':btnDisplay=lang.sNext;btnClass=button+(page<pages-1?'':' '+classes.sPageButtonDisabled);break;case'last':btnDisplay=lang.sLast;btnClass=button+(page<pages-1?'':' '+classes.sPageButtonDisabled);break;default:btnDisplay=button+1;btnClass=page===button?classes.sPageButtonActive:'';break;}
if(btnDisplay){node=$('<a>',{'class':classes.sPageButton+' '+btnClass,'aria-controls':settings.sTableId,'tabindex':settings.iTabIndex,'id':idx===0&&typeof button==='string'?settings.sTableId+'_'+button:null}).html(btnDisplay).appendTo(container);_fnBindAction(node,{action:button},clickHandler);}}}};attach($(host).empty(),buttons);}}});var __numericReplace=function(d,re1,re2){if(!d||d==='-'){return-Infinity;}
if(d.replace){if(re1){d=d.replace(re1,'');}
if(re2){d=d.replace(re2,'');}}
return d*1;};$.extend(DataTable.ext.type.order,{"date-pre":function(d)
{return Date.parse(d)||0;},"numeric-pre":function(d)
{return __numericReplace(d);},"numeric-fmt-pre":function(d)
{return __numericReplace(d,_re_formatted_numeric);},"html-numeric-pre":function(d)
{return __numericReplace(d,_re_html);},"html-numeric-fmt-pre":function(d)
{return __numericReplace(d,_re_html,_re_formatted_numeric);},"html-pre":function(a)
{return a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+'';},"string-pre":function(a)
{return typeof a==='string'?a.toLowerCase():!a||!a.toString?'':a.toString();},
"string-asc":function(x,y)
{return((x<y)?-1:((x>y)?1:0));},"string-desc":function(x,y)
{return((x<y)?1:((x>y)?-1:0));}});
$.extend(DataTable.ext.type.detect,[
function(d)
{return _isNumber(d)?'numeric':null;},function(d)
{
if(d&&!_re_date_start.test(d)){return null;}
var parsed=Date.parse(d);return(parsed!==null&&!isNaN(parsed))||_empty(d)?'date':null;}, function(d)
{return _isNumber(d,true)?'numeric-fmt':null;}, function(d)
{return _htmlNumeric(d)?'html-numeric':null;}, function(d)
{return _htmlNumeric(d,true)?'html-numeric-fmt':null;},function(d)
{return _empty(d)||(typeof d==='string'&&d.indexOf('<')!==-1)?'html':null;}]);
$.extend(DataTable.ext.type.search,{html:function(data){return _empty(data)?'':typeof data==='string'?data.replace(_re_new_lines," ").replace(_re_html,""):'';},string:function(data){return _empty(data)?'':typeof data==='string'?data.replace(_re_new_lines," "):data;}});$.extend(true,DataTable.ext.renderer,{header:{_:function(settings,cell,column,idx,classes){
 
$(settings.nTable).on('order.dt',function(e,settings,sorting,columns){cell.removeClass(column.sSortingClass+' '+
classes.sSortAsc+' '+
classes.sSortDesc).addClass(columns[idx]=='asc'?classes.sSortAsc:columns[idx]=='desc'?classes.sSortDesc:column.sSortingClass);});},jqueryui:function(settings,cell,column,idx,classes){$('<div/>').addClass(classes.sSortJUIWrapper).append(cell.contents()).append($('<span/>').addClass(classes.sSortIcon+' '+column.sSortingClassJUI)).appendTo(cell); $(settings.nTable).on('order.dt',function(e,settings,sorting,columns){cell.removeClass(classes.sSortAsc+" "+classes.sSortDesc).addClass(columns[idx]=='asc'?classes.sSortAsc:columns[idx]=='desc'?classes.sSortDesc:column.sSortingClass);cell.find('span').removeClass(classes.sSortJUIAsc+" "+
classes.sSortJUIDesc+" "+
classes.sSortJUI+" "+
classes.sSortJUIAscAllowed+" "+
classes.sSortJUIDescAllowed).addClass(columns[idx]=='asc'?classes.sSortJUIAsc:columns[idx]=='desc'?classes.sSortJUIDesc:column.sSortingClassJUI);});}}}); $.fn.dataTable=DataTable; $.fn.dataTableSettings=DataTable.settings;$.fn.dataTableExt=DataTable.ext;
 $.fn.DataTable=function(opts){return $(this).dataTable(opts).api();};
 $.each(DataTable,function(prop,val){$.fn.DataTable[prop]=val;});}));}(window,document,jQuery));$.extend(true,$.fn.dataTable.defaults,{"sDom":"<'row'<'col-sm-6'l><'col-sm-6'f>r>"+"t"+"<'row'<'col-sm-6'i><'col-sm-6'p>>","oLanguage":{"sLengthMenu":"_MENU_ records per page"}});$.extend($.fn.dataTableExt.oStdClasses,{"sWrapper":"dataTables_wrapper form-inline","sFilterInput":"form-control input-sm","sLengthSelect":"form-control input-sm"});if($.fn.dataTable.Api){$.fn.dataTable.defaults.renderer='bootstrap';$.fn.dataTable.ext.renderer.pageButton.bootstrap=function(settings,host,idx,buttons,page,pages){var api=new $.fn.dataTable.Api(settings);var classes=settings.oClasses;var lang=settings.oLanguage.oPaginate;var btnDisplay,btnClass;var attach=function(container,buttons){var i,ien,node,button;var clickHandler=function(e){e.preventDefault();if(e.data.action!=='ellipsis'){api.page(e.data.action).draw(false);}};for(i=0,ien=buttons.length;i<ien;i++){button=buttons[i];if($.isArray(button)){attach(container,button);}else{btnDisplay='';btnClass='';switch(button){case'ellipsis':btnDisplay='&hellip;';btnClass='disabled';break;case'first':btnDisplay=lang.sFirst;btnClass=button+(page>0?'':' disabled');break;case'previous':btnDisplay=lang.sPrevious;btnClass=button+(page>0?'':' disabled');break;case'next':btnDisplay=lang.sNext;btnClass=button+(page<pages-1?'':' disabled');break;case'last':btnDisplay=lang.sLast;btnClass=button+(page<pages-1?'':' disabled');break;default:btnDisplay=button+1;btnClass=page===button?'active':'';break;}
if(btnDisplay){node=$('<li>',{'class':classes.sPageButton+' '+btnClass,'aria-controls':settings.sTableId,'tabindex':settings.iTabIndex,'id':idx===0&&typeof button==='string'?settings.sTableId+'_'+button:null}).append($('<a>',{'href':'#'}).html(btnDisplay)).appendTo(container);settings.oApi._fnBindAction(node,{action:button},clickHandler);}}}};attach($(host).empty().html('<ul class="pagination"/>').children('ul'),buttons);}}else{$.fn.dataTable.defaults.sPaginationType='bootstrap';$.fn.dataTableExt.oApi.fnPagingInfo=function(oSettings){return{"iStart":oSettings._iDisplayStart,"iEnd":oSettings.fnDisplayEnd(),"iLength":oSettings._iDisplayLength,"iTotal":oSettings.fnRecordsTotal(),"iFilteredTotal":oSettings.fnRecordsDisplay(),"iPage":oSettings._iDisplayLength===-1?0:Math.ceil(oSettings._iDisplayStart/oSettings._iDisplayLength),"iTotalPages":oSettings._iDisplayLength===-1?0:Math.ceil(oSettings.fnRecordsDisplay()/oSettings._iDisplayLength)};};$.extend($.fn.dataTableExt.oPagination,{"bootstrap":{"fnInit":function(oSettings,nPaging,fnDraw){var oLang=oSettings.oLanguage.oPaginate;var fnClickHandler=function(e){e.preventDefault();if(oSettings.oApi._fnPageChange(oSettings,e.data.action)){fnDraw(oSettings);}};$(nPaging).append('<ul class="pagination">'+'<li class="prev disabled"><a href="#">&larr; '+oLang.sPrevious+'</a></li>'+'<li class="next disabled"><a href="#">'+oLang.sNext+' &rarr; </a></li>'+'</ul>');var els=$('a',nPaging);$(els[0]).bind('click.DT',{action:"previous"},fnClickHandler);$(els[1]).bind('click.DT',{action:"next"},fnClickHandler);},"fnUpdate":function(oSettings,fnDraw){var iListLength=5;var oPaging=oSettings.oInstance.fnPagingInfo();var an=oSettings.aanFeatures.p;var i,ien,j,sClass,iStart,iEnd,iHalf=Math.floor(iListLength/2);if(oPaging.iTotalPages<iListLength){iStart=1;iEnd=oPaging.iTotalPages;}else if(oPaging.iPage<=iHalf){iStart=1;iEnd=iListLength;}else if(oPaging.iPage>=(oPaging.iTotalPages-iHalf)){iStart=oPaging.iTotalPages-iListLength+1;iEnd=oPaging.iTotalPages;}else{iStart=oPaging.iPage-iHalf+1;iEnd=iStart+iListLength-1;}
for(i=0,ien=an.length;i<ien;i++){ $('li:gt(0)',an[i]).filter(':not(:last)').remove(); for(j=iStart;j<=iEnd;j++){sClass=(j==oPaging.iPage+1)?'class="active"':'';$('<li '+sClass+'><a href="#">'+j+'</a></li>').insertBefore($('li:last',an[i])[0]).bind('click',function(e){e.preventDefault();oSettings._iDisplayStart=(parseInt($('a',this).text(),10)-1)*oPaging.iLength;fnDraw(oSettings);});} 
if(oPaging.iPage===0){$('li:first',an[i]).addClass('disabled');}else{$('li:first',an[i]).removeClass('disabled');}
if(oPaging.iPage===oPaging.iTotalPages-1||oPaging.iTotalPages===0){$('li:last',an[i]).addClass('disabled');}else{$('li:last',an[i]).removeClass('disabled');}}}}});}
if($.fn.DataTable.TableTools){ $.extend(true,$.fn.DataTable.TableTools.classes,{"container":"DTTT btn-group","buttons":{"normal":"btn btn-default","disabled":"disabled"},"collection":{"container":"DTTT_dropdown dropdown-menu","buttons":{"normal":"","disabled":"disabled"}},"print":{"info":"DTTT_print_info modal"},"select":{"row":"active"}}); $.extend(true,$.fn.DataTable.TableTools.DEFAULTS.oTags,{"collection":{"container":"ul","button":"li","liner":"a"}});}
var TableTools;(function(window,document,undefined){var factory=function($,DataTable){"use strict"; var ZeroClipboard_TableTools={version:"1.0.4-TableTools2",clients:{}, moviePath:'', nextId:1, $:function(thingy){ if(typeof(thingy)=='string'){thingy=document.getElementById(thingy);}
if(!thingy.addClass){ thingy.hide=function(){this.style.display='none';};thingy.show=function(){this.style.display='';};thingy.addClass=function(name){this.removeClass(name);this.className+=' '+name;};thingy.removeClass=function(name){this.className=this.className.replace(new RegExp("\\s*"+name+"\\s*")," ").replace(/^\s+/,'').replace(/\s+$/,'');};thingy.hasClass=function(name){return!!this.className.match(new RegExp("\\s*"+name+"\\s*"));};}
return thingy;},setMoviePath:function(path){ this.moviePath=path;},dispatch:function(id,eventName,args){ var client=this.clients[id];if(client){client.receiveEvent(eventName,args);}},register:function(id,client){ this.clients[id]=client;},getDOMObjectPosition:function(obj){ var info={left:0,top:0,width:obj.width?obj.width:obj.offsetWidth,height:obj.height?obj.height:obj.offsetHeight};if(obj.style.width!==""){info.width=obj.style.width.replace("px","");}
if(obj.style.height!==""){info.height=obj.style.height.replace("px","");}
while(obj){info.left+=obj.offsetLeft;info.top+=obj.offsetTop;obj=obj.offsetParent;}
return info;},Client:function(elem){ this.handlers={}; this.id=ZeroClipboard_TableTools.nextId++;this.movieId='ZeroClipboard_TableToolsMovie_'+this.id; ZeroClipboard_TableTools.register(this.id,this); if(elem){this.glue(elem);}}};ZeroClipboard_TableTools.Client.prototype={id:0, ready:false, movie:null, clipText:'', fileName:'', action:'copy', handCursorEnabled:true, cssEffects:true, handlers:null, sized:false,glue:function(elem,title){
 this.domElement=ZeroClipboard_TableTools.$(elem); var zIndex=99;if(this.domElement.style.zIndex){zIndex=parseInt(this.domElement.style.zIndex,10)+1;} 
var box=ZeroClipboard_TableTools.getDOMObjectPosition(this.domElement); this.div=document.createElement('div');var style=this.div.style;style.position='absolute';style.left='0px';style.top='0px';style.width=(box.width)+'px';style.height=box.height+'px';style.zIndex=zIndex;if(typeof title!="undefined"&&title!==""){this.div.title=title;}
if(box.width!==0&&box.height!==0){this.sized=true;} 
if(this.domElement){this.domElement.appendChild(this.div);this.div.innerHTML=this.getHTML(box.width,box.height).replace(/&/g,'&amp;');}},positionElement:function(){var box=ZeroClipboard_TableTools.getDOMObjectPosition(this.domElement);var style=this.div.style;style.position='absolute';style.width=box.width+'px';style.height=box.height+'px';if(box.width!==0&&box.height!==0){this.sized=true;}else{return;}
var flash=this.div.childNodes[0];flash.width=box.width;flash.height=box.height;},getHTML:function(width,height){ var html='';var flashvars='id='+this.id+'&width='+width+'&height='+height;if(navigator.userAgent.match(/MSIE/)){ var protocol=location.href.match(/^https/i)?'https://':'http://';html+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+protocol+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="'+width+'" height="'+height+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard_TableTools.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+flashvars+'"/><param name="wmode" value="transparent"/></object>';}
else{ html+='<embed id="'+this.movieId+'" src="'+ZeroClipboard_TableTools.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+flashvars+'" wmode="transparent" />';}
return html;},hide:function(){ if(this.div){this.div.style.left='-2000px';}},show:function(){this.reposition();},destroy:function(){ if(this.domElement&&this.div){this.hide();this.div.innerHTML='';var body=document.getElementsByTagName('body')[0];try{body.removeChild(this.div);}catch(e){}
this.domElement=null;this.div=null;}},reposition:function(elem){
 if(elem){this.domElement=ZeroClipboard_TableTools.$(elem);if(!this.domElement){this.hide();}}
if(this.domElement&&this.div){var box=ZeroClipboard_TableTools.getDOMObjectPosition(this.domElement);var style=this.div.style;style.left=''+box.left+'px';style.top=''+box.top+'px';}},clearText:function(){ this.clipText='';if(this.ready){this.movie.clearText();}},appendText:function(newText){ this.clipText+=newText;if(this.ready){this.movie.appendText(newText);}},setText:function(newText){ this.clipText=newText;if(this.ready){this.movie.setText(newText);}},setCharSet:function(charSet){this.charSet=charSet;if(this.ready){this.movie.setCharSet(charSet);}},setBomInc:function(bomInc){ this.incBom=bomInc;if(this.ready){this.movie.setBomInc(bomInc);}},setFileName:function(newText){ this.fileName=newText;if(this.ready){this.movie.setFileName(newText);}},setAction:function(newText){this.action=newText;if(this.ready){this.movie.setAction(newText);}},addEventListener:function(eventName,func){
 eventName=eventName.toString().toLowerCase().replace(/^on/,'');if(!this.handlers[eventName]){this.handlers[eventName]=[];}
this.handlers[eventName].push(func);},setHandCursor:function(enabled){this.handCursorEnabled=enabled;if(this.ready){this.movie.setHandCursor(enabled);}},setCSSEffects:function(enabled){ this.cssEffects=!!enabled;},receiveEvent:function(eventName,args){var self; eventName=eventName.toString().toLowerCase().replace(/^on/,''); switch(eventName){case'load': this.movie=document.getElementById(this.movieId);if(!this.movie){self=this;setTimeout(function(){self.receiveEvent('load',null);},1);return;} 
if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){self=this;setTimeout(function(){self.receiveEvent('load',null);},100);this.ready=true;return;}
this.ready=true;this.movie.clearText();this.movie.appendText(this.clipText);this.movie.setFileName(this.fileName);this.movie.setAction(this.action);this.movie.setCharSet(this.charSet);this.movie.setBomInc(this.incBom);this.movie.setHandCursor(this.handCursorEnabled);break;case'mouseover':if(this.domElement&&this.cssEffects){if(this.recoverActive){this.domElement.addClass('active');}}
break;case'mouseout':if(this.domElement&&this.cssEffects){this.recoverActive=false;if(this.domElement.hasClass('active')){this.domElement.removeClass('active');this.recoverActive=true;}
}
break;case'mousedown':if(this.domElement&&this.cssEffects){this.domElement.addClass('active');}
break;case'mouseup':if(this.domElement&&this.cssEffects){this.domElement.removeClass('active');this.recoverActive=false;}
break;} 
if(this.handlers[eventName]){for(var idx=0,len=this.handlers[eventName].length;idx<len;idx++){var func=this.handlers[eventName][idx];if(typeof(func)=='function'){ func(this,args);}
else if((typeof(func)=='object')&&(func.length==2)){func[0][func[1]](this,args);}
else if(typeof(func)=='string'){ window[func](this,args);}}
}
}};
window.ZeroClipboard_TableTools=ZeroClipboard_TableTools;  (function($,window,document){TableTools=function(oDT,oOpts)
{if(!this instanceof TableTools)
{alert("Warning: TableTools must be initialised with the keyword 'new'");}
 
var dtSettings=$.fn.dataTable.Api?new $.fn.dataTable.Api(oDT).settings()[0]:oDT.fnSettings();this.s={"that":this,"dt":dtSettings,"print":{"saveStart":-1,"saveLength":-1,"saveScroll":-1,"funcEnd":function(){}},"buttonCounter":0,"select":{"type":"","selected":[],"preRowSelect":null,"postSelected":null,"postDeselected":null,"all":false,"selectedClass":""},"custom":{},"swfPath":"","buttonSet":[],"master":false,"tags":{}};this.dom={"container":null,"table":null,"print":{"hidden":[],"message":null},"collection":{"collection":null,"background":null}};this.classes=$.extend(true,{},TableTools.classes);if(this.s.dt.bJUI)
{$.extend(true,this.classes,TableTools.classes_themeroller);}
this.fnSettings=function(){return this.s;};if(typeof oOpts=='undefined')
{oOpts={};}
TableTools._aInstances.push(this);this._fnConstruct(oOpts);return this;};TableTools.prototype={"fnGetSelected":function(filtered)
{var
out=[],data=this.s.dt.aoData,displayed=this.s.dt.aiDisplay,i,iLen;if(filtered)
{ for(i=0,iLen=displayed.length;i<iLen;i++)
{if(data[displayed[i]]._DTTT_selected)
{out.push(data[displayed[i]].nTr);}}}
else
{ for(i=0,iLen=data.length;i<iLen;i++)
{if(data[i]._DTTT_selected)
{out.push(data[i].nTr);}}}
return out;},"fnGetSelectedData":function()
{var out=[];var data=this.s.dt.aoData;var i,iLen;for(i=0,iLen=data.length;i<iLen;i++)
{if(data[i]._DTTT_selected)
{out.push(this.s.dt.oInstance.fnGetData(i));}}
return out;},"fnGetSelectedIndexes":function(filtered)
{var
out=[],data=this.s.dt.aoData,displayed=this.s.dt.aiDisplay,i,iLen;if(filtered)
{ for(i=0,iLen=displayed.length;i<iLen;i++)
{if(data[displayed[i]]._DTTT_selected)
{out.push(displayed[i]);}}}
else
{ for(i=0,iLen=data.length;i<iLen;i++)
{if(data[i]._DTTT_selected)
{out.push(i);}}}
return out;},"fnIsSelected":function(n)
{var pos=this.s.dt.oInstance.fnGetPosition(n);return(this.s.dt.aoData[pos]._DTTT_selected===true)?true:false;},"fnSelectAll":function(filtered)
{this._fnRowSelect(filtered?this.s.dt.aiDisplay:this.s.dt.aoData);},"fnSelectNone":function(filtered)
{this._fnRowDeselect(this.fnGetSelectedIndexes(filtered));},"fnSelect":function(n)
{if(this.s.select.type=="single")
{this.fnSelectNone();this._fnRowSelect(n);}
else
{this._fnRowSelect(n);}},"fnDeselect":function(n)
{this._fnRowDeselect(n);},"fnGetTitle":function(oConfig)
{var sTitle="";if(typeof oConfig.sTitle!='undefined'&&oConfig.sTitle!==""){sTitle=oConfig.sTitle;}else{var anTitle=document.getElementsByTagName('title');if(anTitle.length>0)
{sTitle=anTitle[0].innerHTML;}}
if("\u00A1".toString().length<4){return sTitle.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,"");}else{return sTitle.replace(/[^a-zA-Z0-9_\.,\-_ !\(\)]/g,"");}},"fnCalcColRatios":function(oConfig)
{var
aoCols=this.s.dt.aoColumns,aColumnsInc=this._fnColumnTargets(oConfig.mColumns),aColWidths=[],iWidth=0,iTotal=0,i,iLen;for(i=0,iLen=aColumnsInc.length;i<iLen;i++)
{if(aColumnsInc[i])
{iWidth=aoCols[i].nTh.offsetWidth;iTotal+=iWidth;aColWidths.push(iWidth);}}
for(i=0,iLen=aColWidths.length;i<iLen;i++)
{aColWidths[i]=aColWidths[i]/iTotal;}
return aColWidths.join('\t');},"fnGetTableData":function(oConfig)
{if(this.s.dt)
{return this._fnGetDataTablesData(oConfig);}},"fnSetText":function(clip,text)
{this._fnFlashSetText(clip,text);},"fnResizeButtons":function()
{for(var cli in ZeroClipboard_TableTools.clients)
{if(cli)
{var client=ZeroClipboard_TableTools.clients[cli];if(typeof client.domElement!='undefined'&&client.domElement.parentNode)
{client.positionElement();}}}},"fnResizeRequired":function()
{for(var cli in ZeroClipboard_TableTools.clients)
{if(cli)
{var client=ZeroClipboard_TableTools.clients[cli];if(typeof client.domElement!='undefined'&&client.domElement.parentNode==this.dom.container&&client.sized===false)
{return true;}}}
return false;},"fnPrint":function(bView,oConfig)
{if(oConfig===undefined)
{oConfig={};}
if(bView===undefined||bView)
{this._fnPrintStart(oConfig);}
else
{this._fnPrintEnd();}},"fnInfo":function(message,time){var info=$('<div/>').addClass(this.classes.print.info).html(message).appendTo('body');setTimeout(function(){info.fadeOut("normal",function(){info.remove();});},time);},"fnContainer":function(){return this.dom.container;},"_fnConstruct":function(oOpts)
{var that=this;this._fnCustomiseSettings(oOpts);this.dom.container=document.createElement(this.s.tags.container);this.dom.container.className=this.classes.container;if(this.s.select.type!='none')
{this._fnRowSelectConfig();}
this._fnButtonDefinations(this.s.buttonSet,this.dom.container);this.s.dt.aoDestroyCallback.push({"sName":"TableTools","fn":function(){$(that.s.dt.nTBody).off('click.DTTT_Select','tr');$(that.dom.container).empty(); var idx=$.inArray(that,TableTools._aInstances);if(idx!==-1){TableTools._aInstances.splice(idx,1);}}});},"_fnCustomiseSettings":function(oOpts)
{if(typeof this.s.dt._TableToolsInit=='undefined')
{this.s.master=true;this.s.dt._TableToolsInit=true;}
this.dom.table=this.s.dt.nTable;this.s.custom=$.extend({},TableTools.DEFAULTS,oOpts);this.s.swfPath=this.s.custom.sSwfPath;if(typeof ZeroClipboard_TableTools!='undefined')
{ZeroClipboard_TableTools.moviePath=this.s.swfPath;}
this.s.select.type=this.s.custom.sRowSelect;this.s.select.preRowSelect=this.s.custom.fnPreRowSelect;this.s.select.postSelected=this.s.custom.fnRowSelected;this.s.select.postDeselected=this.s.custom.fnRowDeselected; if(this.s.custom.sSelectedClass)
{this.classes.select.row=this.s.custom.sSelectedClass;}
this.s.tags=this.s.custom.oTags;this.s.buttonSet=this.s.custom.aButtons;},"_fnButtonDefinations":function(buttonSet,wrapper)
{var buttonDef;for(var i=0,iLen=buttonSet.length;i<iLen;i++)
{if(typeof buttonSet[i]=="string")
{if(typeof TableTools.BUTTONS[buttonSet[i]]=='undefined')
{alert("TableTools: Warning - unknown button type: "+buttonSet[i]);continue;}
buttonDef=$.extend({},TableTools.BUTTONS[buttonSet[i]],true);}
else
{if(typeof TableTools.BUTTONS[buttonSet[i].sExtends]=='undefined')
{alert("TableTools: Warning - unknown button type: "+buttonSet[i].sExtends);continue;}
var o=$.extend({},TableTools.BUTTONS[buttonSet[i].sExtends],true);buttonDef=$.extend(o,buttonSet[i],true);}
var button=this._fnCreateButton(buttonDef,$(wrapper).hasClass(this.classes.collection.container));if(button){wrapper.appendChild(button);}}},"_fnCreateButton":function(oConfig,bCollectionButton)
{var nButton=this._fnButtonBase(oConfig,bCollectionButton);if(oConfig.sAction.match(/flash/))
{if(!this._fnHasFlash()){return false;}
this._fnFlashConfig(nButton,oConfig);}
else if(oConfig.sAction=="text")
{this._fnTextConfig(nButton,oConfig);}
else if(oConfig.sAction=="div")
{this._fnTextConfig(nButton,oConfig);}
else if(oConfig.sAction=="collection")
{this._fnTextConfig(nButton,oConfig);this._fnCollectionConfig(nButton,oConfig);}
if(this.s.dt.iTabIndex!==-1){$(nButton).attr('tabindex',this.s.dt.iTabIndex).attr('aria-controls',this.s.dt.sTableId).on('keyup.DTTT',function(e){
 if(e.keyCode===13){e.stopPropagation();$(this).trigger('click');}}).on('mousedown.DTTT',function(e){



 if(!oConfig.sAction.match(/flash/)){e.preventDefault();}});}
return nButton;},"_fnButtonBase":function(o,bCollectionButton)
{var sTag,sLiner,sClass;if(bCollectionButton)
{sTag=o.sTag&&o.sTag!=="default"?o.sTag:this.s.tags.collection.button;sLiner=o.sLinerTag&&o.sLinerTag!=="default"?o.sLiner:this.s.tags.collection.liner;sClass=this.classes.collection.buttons.normal;}
else
{sTag=o.sTag&&o.sTag!=="default"?o.sTag:this.s.tags.button;sLiner=o.sLinerTag&&o.sLinerTag!=="default"?o.sLiner:this.s.tags.liner;sClass=this.classes.buttons.normal;}
var
nButton=document.createElement(sTag),nSpan=document.createElement(sLiner),masterS=this._fnGetMasterSettings();nButton.className=sClass+" "+o.sButtonClass;nButton.setAttribute('id',"ToolTables_"+this.s.dt.sInstance+"_"+masterS.buttonCounter);nButton.appendChild(nSpan);nSpan.innerHTML=o.sButtonText;masterS.buttonCounter++;return nButton;},"_fnGetMasterSettings":function()
{if(this.s.master)
{return this.s;}
else
{var instances=TableTools._aInstances;for(var i=0,iLen=instances.length;i<iLen;i++)
{if(this.dom.table==instances[i].s.dt.nTable)
{return instances[i].s;}}}},"_fnCollectionConfig":function(nButton,oConfig)
{var nHidden=document.createElement(this.s.tags.collection.container);nHidden.style.display="none";nHidden.className=this.classes.collection.container;oConfig._collection=nHidden;document.body.appendChild(nHidden);this._fnButtonDefinations(oConfig.aButtons,nHidden);},"_fnCollectionShow":function(nButton,oConfig)
{var
that=this,oPos=$(nButton).offset(),nHidden=oConfig._collection,iDivX=oPos.left,iDivY=oPos.top+$(nButton).outerHeight(),iWinHeight=$(window).height(),iDocHeight=$(document).height(),iWinWidth=$(window).width(),iDocWidth=$(document).width();nHidden.style.position="absolute";nHidden.style.left=iDivX+"px";nHidden.style.top=iDivY+"px";nHidden.style.display="block";$(nHidden).css('opacity',0);var nBackground=document.createElement('div');nBackground.style.position="absolute";nBackground.style.left="0px";nBackground.style.top="0px";nBackground.style.height=((iWinHeight>iDocHeight)?iWinHeight:iDocHeight)+"px";nBackground.style.width=((iWinWidth>iDocWidth)?iWinWidth:iDocWidth)+"px";nBackground.className=this.classes.collection.background;$(nBackground).css('opacity',0);document.body.appendChild(nBackground);document.body.appendChild(nHidden);var iDivWidth=$(nHidden).outerWidth();var iDivHeight=$(nHidden).outerHeight();if(iDivX+iDivWidth>iDocWidth)
{nHidden.style.left=(iDocWidth-iDivWidth)+"px";}
if(iDivY+iDivHeight>iDocHeight)
{nHidden.style.top=(iDivY-iDivHeight-$(nButton).outerHeight())+"px";}
this.dom.collection.collection=nHidden;this.dom.collection.background=nBackground;setTimeout(function(){$(nHidden).animate({"opacity":1},500);$(nBackground).animate({"opacity":0.25},500);},10);this.fnResizeButtons();$(nBackground).click(function(){that._fnCollectionHide.call(that,null,null);});},"_fnCollectionHide":function(nButton,oConfig)
{if(oConfig!==null&&oConfig.sExtends=='collection')
{return;}
if(this.dom.collection.collection!==null)
{$(this.dom.collection.collection).animate({"opacity":0},500,function(e){this.style.display="none";});$(this.dom.collection.background).animate({"opacity":0},500,function(e){this.parentNode.removeChild(this);});this.dom.collection.collection=null;this.dom.collection.background=null;}},"_fnRowSelectConfig":function()
{if(this.s.master)
{var
that=this,i,iLen,dt=this.s.dt,aoOpenRows=this.s.dt.aoOpenRows;$(dt.nTable).addClass(this.classes.select.table);

if(this.s.select.type==='os'){$(dt.nTBody).on('mousedown.DTTT_Select','tr',function(e){if(e.shiftKey){$(dt.nTBody).css('-moz-user-select','none').one('selectstart.DTTT_Select','tr',function(){return false;});}});$(dt.nTBody).on('mouseup.DTTT_Select','tr',function(e){$(dt.nTBody).css('-moz-user-select','');});} 
$(dt.nTBody).on('click.DTTT_Select',this.s.custom.sRowSelector,function(e){var row=this.nodeName.toLowerCase()==='tr'?this:$(this).parents('tr')[0];var select=that.s.select;var pos=that.s.dt.oInstance.fnGetPosition(row);if(row.parentNode!=dt.nTBody){return;}
if(dt.oInstance.fnGetData(row)===null){return;}
 
if(select.type=='os'){if(e.ctrlKey||e.metaKey){ if(that.fnIsSelected(row)){that._fnRowDeselect(row,e);}
else{that._fnRowSelect(row,e);}}
else if(e.shiftKey){
 var rowIdxs=that.s.dt.aiDisplay.slice(); var idx1=$.inArray(select.lastRow,rowIdxs);var idx2=$.inArray(pos,rowIdxs);if(that.fnGetSelected().length===0||idx1===-1){
 rowIdxs.splice($.inArray(pos,rowIdxs)+1,rowIdxs.length);}
else{ if(idx1>idx2){var tmp=idx2;idx2=idx1;idx1=tmp;}
rowIdxs.splice(idx2+1,rowIdxs.length);rowIdxs.splice(0,idx1);}
if(!that.fnIsSelected(row)){ that._fnRowSelect(rowIdxs,e);}
else{ rowIdxs.splice($.inArray(pos,rowIdxs),1);that._fnRowDeselect(rowIdxs,e);}}
else{ if(that.fnIsSelected(row)&&that.fnGetSelected().length===1){that._fnRowDeselect(row,e);}
else{that.fnSelectNone();that._fnRowSelect(row,e);}}}
else if(that.fnIsSelected(row)){that._fnRowDeselect(row,e);}
else if(select.type=="single"){that.fnSelectNone();that._fnRowSelect(row,e);}
else if(select.type=="multi"){that._fnRowSelect(row,e);}
select.lastRow=pos;});
dt.oApi._fnCallbackReg(dt,'aoRowCreatedCallback',function(tr,data,index){if(dt.aoData[index]._DTTT_selected){$(tr).addClass(that.classes.select.row);}},'TableTools-SelectAll');}},"_fnRowSelect":function(src,e)
{var
that=this,data=this._fnSelectData(src),firstTr=data.length===0?null:data[0].nTr,anSelected=[],i,len; for(i=0,len=data.length;i<len;i++)
{if(data[i].nTr)
{anSelected.push(data[i].nTr);}} 
if(this.s.select.preRowSelect!==null&&!this.s.select.preRowSelect.call(this,e,anSelected,true))
{return;} 
for(i=0,len=data.length;i<len;i++)
{data[i]._DTTT_selected=true;if(data[i].nTr)
{$(data[i].nTr).addClass(that.classes.select.row);}} 
if(this.s.select.postSelected!==null)
{this.s.select.postSelected.call(this,anSelected);}
TableTools._fnEventDispatch(this,'select',anSelected,true);},"_fnRowDeselect":function(src,e)
{var
that=this,data=this._fnSelectData(src),firstTr=data.length===0?null:data[0].nTr,anDeselectedTrs=[],i,len; for(i=0,len=data.length;i<len;i++)
{if(data[i].nTr)
{anDeselectedTrs.push(data[i].nTr);}} 
if(this.s.select.preRowSelect!==null&&!this.s.select.preRowSelect.call(this,e,anDeselectedTrs,false))
{return;} 
for(i=0,len=data.length;i<len;i++)
{data[i]._DTTT_selected=false;if(data[i].nTr)
{$(data[i].nTr).removeClass(that.classes.select.row);}} 
if(this.s.select.postDeselected!==null)
{this.s.select.postDeselected.call(this,anDeselectedTrs);}
TableTools._fnEventDispatch(this,'select',anDeselectedTrs,false);},"_fnSelectData":function(src)
{var out=[],pos,i,iLen;if(src.nodeName)
{ pos=this.s.dt.oInstance.fnGetPosition(src);out.push(this.s.dt.aoData[pos]);}
else if(typeof src.length!=='undefined')
{ for(i=0,iLen=src.length;i<iLen;i++)
{if(src[i].nodeName)
{pos=this.s.dt.oInstance.fnGetPosition(src[i]);out.push(this.s.dt.aoData[pos]);}
else if(typeof src[i]==='number')
{out.push(this.s.dt.aoData[src[i]]);}
else
{out.push(src[i]);}}
return out;}
else
{ out.push(src);}
return out;},"_fnTextConfig":function(nButton,oConfig)
{var that=this;if(oConfig.fnInit!==null)
{oConfig.fnInit.call(this,nButton,oConfig);}
if(oConfig.sToolTip!=="")
{nButton.title=oConfig.sToolTip;}
$(nButton).hover(function(){if(oConfig.fnMouseover!==null)
{oConfig.fnMouseover.call(this,nButton,oConfig,null);}},function(){if(oConfig.fnMouseout!==null)
{oConfig.fnMouseout.call(this,nButton,oConfig,null);}});if(oConfig.fnSelect!==null)
{TableTools._fnEventListen(this,'select',function(n){oConfig.fnSelect.call(that,nButton,oConfig,n);});}
$(nButton).click(function(e){if(oConfig.fnClick!==null)
{oConfig.fnClick.call(that,nButton,oConfig,null,e);}
if(oConfig.fnComplete!==null)
{oConfig.fnComplete.call(that,nButton,oConfig,null,null);}
that._fnCollectionHide(nButton,oConfig);});},"_fnHasFlash":function()
{try{var fo=new ActiveXObject('ShockwaveFlash.ShockwaveFlash');if(fo){return true;}}
catch(e){if(navigator.mimeTypes&&navigator.mimeTypes['application/x-shockwave-flash']!==undefined&&navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin){return true;}}
return false;},"_fnFlashConfig":function(nButton,oConfig)
{var that=this;var flash=new ZeroClipboard_TableTools.Client();if(oConfig.fnInit!==null)
{oConfig.fnInit.call(this,nButton,oConfig);}
flash.setHandCursor(true);if(oConfig.sAction=="flash_save")
{flash.setAction('save');flash.setCharSet((oConfig.sCharSet=="utf16le")?'UTF16LE':'UTF8');flash.setBomInc(oConfig.bBomInc);flash.setFileName(oConfig.sFileName.replace('*',this.fnGetTitle(oConfig)));}
else if(oConfig.sAction=="flash_pdf")
{flash.setAction('pdf');flash.setFileName(oConfig.sFileName.replace('*',this.fnGetTitle(oConfig)));}
else
{flash.setAction('copy');}
flash.addEventListener('mouseOver',function(client){if(oConfig.fnMouseover!==null)
{oConfig.fnMouseover.call(that,nButton,oConfig,flash);}});flash.addEventListener('mouseOut',function(client){if(oConfig.fnMouseout!==null)
{oConfig.fnMouseout.call(that,nButton,oConfig,flash);}});flash.addEventListener('mouseDown',function(client){if(oConfig.fnClick!==null)
{oConfig.fnClick.call(that,nButton,oConfig,flash);}});flash.addEventListener('complete',function(client,text){if(oConfig.fnComplete!==null)
{oConfig.fnComplete.call(that,nButton,oConfig,flash,text);}
that._fnCollectionHide(nButton,oConfig);});this._fnFlashGlue(flash,nButton,oConfig.sToolTip);},"_fnFlashGlue":function(flash,node,text)
{var that=this;var id=node.getAttribute('id');if(document.getElementById(id))
{flash.glue(node,text);}
else
{setTimeout(function(){that._fnFlashGlue(flash,node,text);},100);}},"_fnFlashSetText":function(clip,sData)
{var asData=this._fnChunkData(sData,8192);clip.clearText();for(var i=0,iLen=asData.length;i<iLen;i++)
{clip.appendText(asData[i]);}},"_fnColumnTargets":function(mColumns)
{var aColumns=[];var dt=this.s.dt;var i,iLen;var columns=dt.aoColumns;var columnCount=columns.length;if(typeof mColumns=="function")
{var a=mColumns.call(this,dt);for(i=0,iLen=columnCount;i<iLen;i++)
{aColumns.push($.inArray(i,a)!==-1?true:false);}}
else if(typeof mColumns=="object")
{for(i=0,iLen=columnCount;i<iLen;i++)
{aColumns.push(false);}
for(i=0,iLen=mColumns.length;i<iLen;i++)
{aColumns[mColumns[i]]=true;}}
else if(mColumns=="visible")
{for(i=0,iLen=columnCount;i<iLen;i++)
{aColumns.push(columns[i].bVisible?true:false);}}
else if(mColumns=="hidden")
{for(i=0,iLen=columnCount;i<iLen;i++)
{aColumns.push(columns[i].bVisible?false:true);}}
else if(mColumns=="sortable")
{for(i=0,iLen=columnCount;i<iLen;i++)
{aColumns.push(columns[i].bSortable?true:false);}}
else {for(i=0,iLen=columnCount;i<iLen;i++)
{aColumns.push(true);}}
return aColumns;},"_fnNewline":function(oConfig)
{if(oConfig.sNewLine=="auto")
{return navigator.userAgent.match(/Windows/)?"\r\n":"\n";}
else
{return oConfig.sNewLine;}},"_fnGetDataTablesData":function(oConfig)
{var i,iLen,j,jLen;var aRow,aData=[],sLoopData='',arr;var dt=this.s.dt,tr,child;var regex=new RegExp(oConfig.sFieldBoundary,"g");var aColumnsInc=this._fnColumnTargets(oConfig.mColumns);var bSelectedOnly=(typeof oConfig.bSelectedOnly!='undefined')?oConfig.bSelectedOnly:false;if(oConfig.bHeader)
{aRow=[];for(i=0,iLen=dt.aoColumns.length;i<iLen;i++)
{if(aColumnsInc[i])
{sLoopData=dt.aoColumns[i].sTitle.replace(/\n/g," ").replace(/<.*?>/g,"").replace(/^\s+|\s+$/g,"");sLoopData=this._fnHtmlDecode(sLoopData);aRow.push(this._fnBoundData(sLoopData,oConfig.sFieldBoundary,regex));}}
aData.push(aRow.join(oConfig.sFieldSeperator));}
bSelectedOnly=true;var aDataIndex;var aSelected=this.fnGetSelectedIndexes();bSelectedOnly=this.s.select.type!=="none"&&bSelectedOnly&&aSelected.length!==0;if(bSelectedOnly){ aDataIndex=aSelected;}
else if(DataTable.Api){ aDataIndex=new DataTable.Api(dt).rows(oConfig.oSelectorOpts).indexes().flatten().toArray();}
else{ aDataIndex=dt.oInstance.$('tr',oConfig.oSelectorOpts).map(function(id,row){return dt.oInstance.fnGetPosition(row);}).get();}
for(j=0,jLen=aDataIndex.length;j<jLen;j++)
{tr=dt.aoData[aDataIndex[j]].nTr;aRow=[];for(i=0,iLen=dt.aoColumns.length;i<iLen;i++)
{if(aColumnsInc[i])
{var mTypeData=dt.oApi._fnGetCellData(dt,aDataIndex[j],i,'display');if(oConfig.fnCellRender)
{sLoopData=oConfig.fnCellRender(mTypeData,i,tr,aDataIndex[j])+"";}
else if(typeof mTypeData=="string")
{sLoopData=mTypeData.replace(/\n/g," ");sLoopData=sLoopData.replace(/<img.*?\s+alt\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+)).*?>/gi,'$1$2$3');sLoopData=sLoopData.replace(/<.*?>/g,"");}
else
{sLoopData=mTypeData+"";}
sLoopData=sLoopData.replace(/^\s+/,'').replace(/\s+$/,'');sLoopData=this._fnHtmlDecode(sLoopData);aRow.push(this._fnBoundData(sLoopData,oConfig.sFieldBoundary,regex));}}
aData.push(aRow.join(oConfig.sFieldSeperator));if(oConfig.bOpenRows)
{arr=$.grep(dt.aoOpenRows,function(o){return o.nParent===tr;});if(arr.length===1)
{sLoopData=this._fnBoundData($('td',arr[0].nTr).html(),oConfig.sFieldBoundary,regex);aData.push(sLoopData);}}}
if(oConfig.bFooter&&dt.nTFoot!==null)
{aRow=[];for(i=0,iLen=dt.aoColumns.length;i<iLen;i++)
{if(aColumnsInc[i]&&dt.aoColumns[i].nTf!==null)
{sLoopData=dt.aoColumns[i].nTf.innerHTML.replace(/\n/g," ").replace(/<.*?>/g,"");sLoopData=this._fnHtmlDecode(sLoopData);aRow.push(this._fnBoundData(sLoopData,oConfig.sFieldBoundary,regex));}}
aData.push(aRow.join(oConfig.sFieldSeperator));}
var _sLastData=aData.join(this._fnNewline(oConfig));return _sLastData;},"_fnBoundData":function(sData,sBoundary,regex)
{if(sBoundary==="")
{return sData;}
else
{return sBoundary+sData.replace(regex,sBoundary+sBoundary)+sBoundary;}},"_fnChunkData":function(sData,iSize)
{var asReturn=[];var iStrlen=sData.length;for(var i=0;i<iStrlen;i+=iSize)
{if(i+iSize<iStrlen)
{asReturn.push(sData.substring(i,i+iSize));}
else
{asReturn.push(sData.substring(i,iStrlen));}}
return asReturn;},"_fnHtmlDecode":function(sData)
{if(sData.indexOf('&')===-1)
{return sData;}
var n=document.createElement('div');return sData.replace(/&([^\s]*?);/g,function(match,match2){if(match.substr(1,1)==='#')
{return String.fromCharCode(Number(match2.substr(1)));}
else
{n.innerHTML=match;return n.childNodes[0].nodeValue;}});},"_fnPrintStart":function(oConfig)
{var that=this;var oSetDT=this.s.dt;this._fnPrintHideNodes(oSetDT.nTable);this.s.print.saveStart=oSetDT._iDisplayStart;this.s.print.saveLength=oSetDT._iDisplayLength;if(oConfig.bShowAll)
{oSetDT._iDisplayStart=0;oSetDT._iDisplayLength=-1;if(oSetDT.oApi._fnCalculateEnd){oSetDT.oApi._fnCalculateEnd(oSetDT);}
oSetDT.oApi._fnDraw(oSetDT);}
if(oSetDT.oScroll.sX!==""||oSetDT.oScroll.sY!=="")
{this._fnPrintScrollStart(oSetDT);
 $(this.s.dt.nTable).bind('draw.DTTT_Print',function(){that._fnPrintScrollStart(oSetDT);});}
var anFeature=oSetDT.aanFeatures;for(var cFeature in anFeature)
{if(cFeature!='i'&&cFeature!='t'&&cFeature.length==1)
{for(var i=0,iLen=anFeature[cFeature].length;i<iLen;i++)
{this.dom.print.hidden.push({"node":anFeature[cFeature][i],"display":"block"});anFeature[cFeature][i].style.display="none";}}}
$(document.body).addClass(this.classes.print.body);if(oConfig.sInfo!=="")
{this.fnInfo(oConfig.sInfo,3000);}
if(oConfig.sMessage)
{$('<div/>').addClass(this.classes.print.message).html(oConfig.sMessage).prependTo('body');}
this.s.print.saveScroll=$(window).scrollTop();window.scrollTo(0,0);$(document).bind("keydown.DTTT",function(e){if(e.keyCode==27)
{e.preventDefault();that._fnPrintEnd.call(that,e);}});},"_fnPrintEnd":function(e)
{var that=this;var oSetDT=this.s.dt;var oSetPrint=this.s.print;var oDomPrint=this.dom.print;this._fnPrintShowNodes();if(oSetDT.oScroll.sX!==""||oSetDT.oScroll.sY!=="")
{$(this.s.dt.nTable).unbind('draw.DTTT_Print');this._fnPrintScrollEnd();}
window.scrollTo(0,oSetPrint.saveScroll);$('div.'+this.classes.print.message).remove();$(document.body).removeClass('DTTT_Print');oSetDT._iDisplayStart=oSetPrint.saveStart;oSetDT._iDisplayLength=oSetPrint.saveLength;if(oSetDT.oApi._fnCalculateEnd){oSetDT.oApi._fnCalculateEnd(oSetDT);}
oSetDT.oApi._fnDraw(oSetDT);$(document).unbind("keydown.DTTT");},"_fnPrintScrollStart":function()
{var
oSetDT=this.s.dt,nScrollHeadInner=oSetDT.nScrollHead.getElementsByTagName('div')[0],nScrollHeadTable=nScrollHeadInner.getElementsByTagName('table')[0],nScrollBody=oSetDT.nTable.parentNode,nTheadSize,nTfootSize;nTheadSize=oSetDT.nTable.getElementsByTagName('thead');if(nTheadSize.length>0)
{oSetDT.nTable.removeChild(nTheadSize[0]);}
if(oSetDT.nTFoot!==null)
{nTfootSize=oSetDT.nTable.getElementsByTagName('tfoot');if(nTfootSize.length>0)
{oSetDT.nTable.removeChild(nTfootSize[0]);}}
nTheadSize=oSetDT.nTHead.cloneNode(true);oSetDT.nTable.insertBefore(nTheadSize,oSetDT.nTable.childNodes[0]);if(oSetDT.nTFoot!==null)
{nTfootSize=oSetDT.nTFoot.cloneNode(true);oSetDT.nTable.insertBefore(nTfootSize,oSetDT.nTable.childNodes[1]);}
if(oSetDT.oScroll.sX!=="")
{oSetDT.nTable.style.width=$(oSetDT.nTable).outerWidth()+"px";nScrollBody.style.width=$(oSetDT.nTable).outerWidth()+"px";nScrollBody.style.overflow="visible";}
if(oSetDT.oScroll.sY!=="")
{nScrollBody.style.height=$(oSetDT.nTable).outerHeight()+"px";nScrollBody.style.overflow="visible";}},"_fnPrintScrollEnd":function()
{var
oSetDT=this.s.dt,nScrollBody=oSetDT.nTable.parentNode;if(oSetDT.oScroll.sX!=="")
{nScrollBody.style.width=oSetDT.oApi._fnStringToCss(oSetDT.oScroll.sX);nScrollBody.style.overflow="auto";}
if(oSetDT.oScroll.sY!=="")
{nScrollBody.style.height=oSetDT.oApi._fnStringToCss(oSetDT.oScroll.sY);nScrollBody.style.overflow="auto";}},"_fnPrintShowNodes":function()
{var anHidden=this.dom.print.hidden;for(var i=0,iLen=anHidden.length;i<iLen;i++)
{anHidden[i].node.style.display=anHidden[i].display;}
anHidden.splice(0,anHidden.length);},"_fnPrintHideNodes":function(nNode)
{var anHidden=this.dom.print.hidden;var nParent=nNode.parentNode;var nChildren=nParent.childNodes;for(var i=0,iLen=nChildren.length;i<iLen;i++)
{if(nChildren[i]!=nNode&&nChildren[i].nodeType==1)
{var sDisplay=$(nChildren[i]).css("display");if(sDisplay!="none")
{anHidden.push({"node":nChildren[i],"display":sDisplay});nChildren[i].style.display="none";}}}
if(nParent.nodeName.toUpperCase()!="BODY")
{this._fnPrintHideNodes(nParent);}}};TableTools._aInstances=[];TableTools._aListeners=[];TableTools.fnGetMasters=function()
{var a=[];for(var i=0,iLen=TableTools._aInstances.length;i<iLen;i++)
{if(TableTools._aInstances[i].s.master)
{a.push(TableTools._aInstances[i]);}}
return a;};TableTools.fnGetInstance=function(node)
{if(typeof node!='object')
{node=document.getElementById(node);}
for(var i=0,iLen=TableTools._aInstances.length;i<iLen;i++)
{if(TableTools._aInstances[i].s.master&&TableTools._aInstances[i].dom.table==node)
{return TableTools._aInstances[i];}}
return null;};TableTools._fnEventListen=function(that,type,fn)
{TableTools._aListeners.push({"that":that,"type":type,"fn":fn});};TableTools._fnEventDispatch=function(that,type,node,selected)
{var listeners=TableTools._aListeners;for(var i=0,iLen=listeners.length;i<iLen;i++)
{if(that.dom.table==listeners[i].that.dom.table&&listeners[i].type==type)
{listeners[i].fn(node,selected);}}};TableTools.buttonBase={"sAction":"text","sTag":"default","sLinerTag":"default","sButtonClass":"DTTT_button_text","sButtonText":"Button text","sTitle":"","sToolTip":"","sCharSet":"utf8","bBomInc":false,"sFileName":"*.csv","sFieldBoundary":"","sFieldSeperator":"\t","sNewLine":"auto","mColumns":"all","bHeader":true,"bFooter":true,"bOpenRows":false,"bSelectedOnly":false,"oSelectorOpts":undefined,
"fnMouseover":null,"fnMouseout":null,"fnClick":null,"fnSelect":null,"fnComplete":null,"fnInit":null,"fnCellRender":null};TableTools.BUTTONS={"csv":$.extend({},TableTools.buttonBase,{"sAction":"flash_save","sButtonClass":"DTTT_button_csv","sButtonText":"CSV","sFieldBoundary":'"',"sFieldSeperator":",","fnClick":function(nButton,oConfig,flash){this.fnSetText(flash,this.fnGetTableData(oConfig));}}),"xls":$.extend({},TableTools.buttonBase,{"sAction":"flash_save","sCharSet":"utf16le","bBomInc":true,"sButtonClass":"DTTT_button_xls","sButtonText":"Excel","fnClick":function(nButton,oConfig,flash){this.fnSetText(flash,this.fnGetTableData(oConfig));}}),"copy":$.extend({},TableTools.buttonBase,{"sAction":"flash_copy","sButtonClass":"DTTT_button_copy","sButtonText":"Copy","fnClick":function(nButton,oConfig,flash){this.fnSetText(flash,this.fnGetTableData(oConfig));},"fnComplete":function(nButton,oConfig,flash,text){var lines=text.split('\n').length;if(oConfig.bHeader)lines--;if(this.s.dt.nTFoot!==null&&oConfig.bFooter)lines--;var plural=(lines==1)?"":"s";this.fnInfo('<h6>Table copied</h6>'+'<p>Copied '+lines+' row'+plural+' to the clipboard.</p>',1500);}}),"pdf":$.extend({},TableTools.buttonBase,{"sAction":"flash_pdf","sNewLine":"\n","sFileName":"*.pdf","sButtonClass":"DTTT_button_pdf","sButtonText":"PDF","sPdfOrientation":"portrait","sPdfSize":"A4","sPdfMessage":"","fnClick":function(nButton,oConfig,flash){this.fnSetText(flash,"title:"+this.fnGetTitle(oConfig)+"\n"+"message:"+oConfig.sPdfMessage+"\n"+"colWidth:"+this.fnCalcColRatios(oConfig)+"\n"+"orientation:"+oConfig.sPdfOrientation+"\n"+"size:"+oConfig.sPdfSize+"\n"+"--/TableToolsOpts--\n"+
this.fnGetTableData(oConfig));}}),"print":$.extend({},TableTools.buttonBase,{"sInfo":"<h6>Print view</h6><p>Please use your browser's print function to "+"print this table. Press escape when finished.</p>","sMessage":null,"bShowAll":true,"sToolTip":"View print view","sButtonClass":"DTTT_button_print","sButtonText":"Print","fnClick":function(nButton,oConfig){this.fnPrint(true,oConfig);}}),"text":$.extend({},TableTools.buttonBase),"select":$.extend({},TableTools.buttonBase,{"sButtonText":"Select button","fnSelect":function(nButton,oConfig){if(this.fnGetSelected().length!==0){$(nButton).removeClass(this.classes.buttons.disabled);}else{$(nButton).addClass(this.classes.buttons.disabled);}},"fnInit":function(nButton,oConfig){$(nButton).addClass(this.classes.buttons.disabled);}}),"select_single":$.extend({},TableTools.buttonBase,{"sButtonText":"Select button","fnSelect":function(nButton,oConfig){var iSelected=this.fnGetSelected().length;if(iSelected==1){$(nButton).removeClass(this.classes.buttons.disabled);}else{$(nButton).addClass(this.classes.buttons.disabled);}},"fnInit":function(nButton,oConfig){$(nButton).addClass(this.classes.buttons.disabled);}}),"select_all":$.extend({},TableTools.buttonBase,{"sButtonText":"Select all","fnClick":function(nButton,oConfig){this.fnSelectAll();},"fnSelect":function(nButton,oConfig){if(this.fnGetSelected().length==this.s.dt.fnRecordsDisplay()){$(nButton).addClass(this.classes.buttons.disabled);}else{$(nButton).removeClass(this.classes.buttons.disabled);}}}),"select_none":$.extend({},TableTools.buttonBase,{"sButtonText":"Deselect all","fnClick":function(nButton,oConfig){this.fnSelectNone();},"fnSelect":function(nButton,oConfig){if(this.fnGetSelected().length!==0){$(nButton).removeClass(this.classes.buttons.disabled);}else{$(nButton).addClass(this.classes.buttons.disabled);}},"fnInit":function(nButton,oConfig){$(nButton).addClass(this.classes.buttons.disabled);}}),"ajax":$.extend({},TableTools.buttonBase,{"sAjaxUrl":"/xhr.php","sButtonText":"Ajax button","fnClick":function(nButton,oConfig){var sData=this.fnGetTableData(oConfig);$.ajax({"url":oConfig.sAjaxUrl,"data":[{"name":"tableData","value":sData}],"success":oConfig.fnAjaxComplete,"dataType":"json","type":"POST","cache":false,"error":function(){alert("Error detected when sending table data to server");}});},"fnAjaxComplete":function(json){alert('Ajax complete');}}),"div":$.extend({},TableTools.buttonBase,{"sAction":"div","sTag":"div","sButtonClass":"DTTT_nonbutton","sButtonText":"Text button"}),"collection":$.extend({},TableTools.buttonBase,{"sAction":"collection","sButtonClass":"DTTT_button_collection","sButtonText":"Collection","fnClick":function(nButton,oConfig){this._fnCollectionShow(nButton,oConfig);}})};TableTools.buttons=TableTools.BUTTONS;TableTools.classes={"container":"DTTT_container","buttons":{"normal":"DTTT_button","disabled":"DTTT_disabled"},"collection":{"container":"DTTT_collection","background":"DTTT_collection_background","buttons":{"normal":"DTTT_button","disabled":"DTTT_disabled"}},"select":{"table":"DTTT_selectable","row":"DTTT_selected selected"},"print":{"body":"DTTT_Print","info":"DTTT_print_info","message":"DTTT_PrintMessage"}};TableTools.classes_themeroller={"container":"DTTT_container ui-buttonset ui-buttonset-multi","buttons":{"normal":"DTTT_button ui-button ui-state-default"},"collection":{"container":"DTTT_collection ui-buttonset ui-buttonset-multi"}};TableTools.DEFAULTS={"sSwfPath":"../swf/copy_csv_xls_pdf.swf","sRowSelect":"none","sRowSelector":"tr","sSelectedClass":null,"fnPreRowSelect":null,"fnRowSelected":null,"fnRowDeselected":null,"aButtons":["copy","csv","xls","pdf","print"],"oTags":{"container":"div","button":"a",
"liner":"span","collection":{"container":"div","button":"a","liner":"span"}}};TableTools.defaults=TableTools.DEFAULTS;TableTools.prototype.CLASS="TableTools";TableTools.version="2.2.3";


if($.fn.dataTable.Api){$.fn.dataTable.Api.register('tabletools()',function(){var tt=null;if(this.context.length>0){tt=TableTools.fnGetInstance(this.context[0].nTable);}
return tt;});}
if(typeof $.fn.dataTable=="function"&&typeof $.fn.dataTableExt.fnVersionCheck=="function"&&$.fn.dataTableExt.fnVersionCheck('1.9.0'))
{$.fn.dataTableExt.aoFeatures.push({"fnInit":function(oDTSettings){var init=oDTSettings.oInit;var opts=init?init.tableTools||init.oTableTools||{}:{};return new TableTools(oDTSettings.oInstance,opts).dom.container;},"cFeature":"T","sFeature":"TableTools"});}
else
{alert("Warning: TableTools requires DataTables 1.9.0 or newer - www.datatables.net/download");}
$.fn.DataTable.TableTools=TableTools;})(jQuery,window,document);if(typeof $.fn.dataTable=="function"&&typeof $.fn.dataTableExt.fnVersionCheck=="function"&&$.fn.dataTableExt.fnVersionCheck('1.9.0'))
{$.fn.dataTableExt.aoFeatures.push({"fnInit":function(oDTSettings){var oOpts=typeof oDTSettings.oInit.oTableTools!='undefined'?oDTSettings.oInit.oTableTools:{};var oTT=new TableTools(oDTSettings.oInstance,oOpts);TableTools._aInstances.push(oTT);return oTT.dom.container;},"cFeature":"T","sFeature":"TableTools"});}
else
{alert("Warning: TableTools 2 requires DataTables 1.9.0 or newer - www.datatables.net/download");}
$.fn.dataTable.TableTools=TableTools;$.fn.DataTable.TableTools=TableTools;return TableTools;};
if(typeof define==='function'&&define.amd){define(['jquery','datatables'],factory);}
else if(typeof exports==='object'){ factory(require('jquery'),require('datatables'));}
else if(jQuery&&!jQuery.fn.dataTable.TableTools){ factory(jQuery,jQuery.fn.dataTable);}})(window,document);(function($,undefined){var $window=$(window);function UTCDate(){return new Date(Date.UTC.apply(Date,arguments));}
function UTCToday(){var today=new Date();return UTCDate(today.getFullYear(),today.getMonth(),today.getDate());}
function alias(method){return function(){return this[method].apply(this,arguments);};}
var DateArray=(function(){var extras={get:function(i){return this.slice(i)[0];},contains:function(d){ var val=d&&d.valueOf();for(var i=0,l=this.length;i<l;i++)
if(this[i].valueOf()===val)
return i;return-1;},remove:function(i){this.splice(i,1);},replace:function(new_array){if(!new_array)
return;if(!$.isArray(new_array))
new_array=[new_array];this.clear();this.push.apply(this,new_array);},clear:function(){this.splice(0);},copy:function(){var a=new DateArray();a.replace(this);return a;}};return function(){var a=[];a.push.apply(a,arguments);$.extend(a,extras);return a;};})(); var Datepicker=function(element,options){this.dates=new DateArray();this.viewDate=UTCToday();this.focusDate=null;this._process_options(options);this.element=$(element);this.isInline=false;this.isInput=this.element.is('input');this.component=this.element.is('.date')?this.element.find('.add-on, .input-group-addon, .btn'):false;this.hasInput=this.component&&this.element.find('input').length;if(this.component&&this.component.length===0)
this.component=false;this.picker=$(DPGlobal.template);this._buildEvents();this._attachEvents();if(this.isInline){this.picker.addClass('datepicker-inline').appendTo(this.element);}
else{this.picker.addClass('datepicker-dropdown dropdown-menu');}
if(this.o.rtl){this.picker.addClass('datepicker-rtl');}
this.viewMode=this.o.startView;if(this.o.calendarWeeks)
this.picker.find('tfoot th.today').attr('colspan',function(i,val){return parseInt(val)+1;});this._allow_update=false;this.setStartDate(this._o.startDate);this.setEndDate(this._o.endDate);this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);this.fillDow();this.fillMonths();this._allow_update=true;this.update();this.showMode();if(this.isInline){this.show();}};Datepicker.prototype={constructor:Datepicker,_process_options:function(opts){ this._o=$.extend({},this._o,opts); var o=this.o=$.extend({},this._o);
var lang=o.language;if(!dates[lang]){lang=lang.split('-')[0];if(!dates[lang])
lang=defaults.language;}
o.language=lang;switch(o.startView){case 2:case'decade':o.startView=2;break;case 1:case'year':o.startView=1;break;default:o.startView=0;}
switch(o.minViewMode){case 1:case'months':o.minViewMode=1;break;case 2:case'years':o.minViewMode=2;break;default:o.minViewMode=0;}
o.startView=Math.max(o.startView,o.minViewMode); if(o.multidate!==true){o.multidate=Number(o.multidate)||false;if(o.multidate!==false)
o.multidate=Math.max(0,o.multidate);else
o.multidate=1;}
o.multidateSeparator=String(o.multidateSeparator);o.weekStart%=7;o.weekEnd=((o.weekStart+6)%7);var format=DPGlobal.parseFormat(o.format);if(o.startDate!==-Infinity){if(!!o.startDate){if(o.startDate instanceof Date)
o.startDate=this._local_to_utc(this._zero_time(o.startDate));else
o.startDate=DPGlobal.parseDate(o.startDate,format,o.language);}
else{o.startDate=-Infinity;}}
if(o.endDate!==Infinity){if(!!o.endDate){if(o.endDate instanceof Date)
o.endDate=this._local_to_utc(this._zero_time(o.endDate));else
o.endDate=DPGlobal.parseDate(o.endDate,format,o.language);}
else{o.endDate=Infinity;}}
o.daysOfWeekDisabled=o.daysOfWeekDisabled||[];if(!$.isArray(o.daysOfWeekDisabled))
o.daysOfWeekDisabled=o.daysOfWeekDisabled.split(/[,\s]*/);o.daysOfWeekDisabled=$.map(o.daysOfWeekDisabled,function(d){return parseInt(d,10);});var plc=String(o.orientation).toLowerCase().split(/\s+/g),_plc=o.orientation.toLowerCase();plc=$.grep(plc,function(word){return(/^auto|left|right|top|bottom$/).test(word);});o.orientation={x:'auto',y:'auto'};if(!_plc||_plc==='auto'); else if(plc.length===1){switch(plc[0]){case'top':case'bottom':o.orientation.y=plc[0];break;case'left':case'right':o.orientation.x=plc[0];break;}}
else{_plc=$.grep(plc,function(word){return(/^left|right$/).test(word);});o.orientation.x=_plc[0]||'auto';_plc=$.grep(plc,function(word){return(/^top|bottom$/).test(word);});o.orientation.y=_plc[0]||'auto';}},_events:[],_secondaryEvents:[],_applyEvents:function(evs){for(var i=0,el,ch,ev;i<evs.length;i++){el=evs[i][0];if(evs[i].length===2){ch=undefined;ev=evs[i][1];}
else if(evs[i].length===3){ch=evs[i][1];ev=evs[i][2];}
el.on(ev,ch);}},_unapplyEvents:function(evs){for(var i=0,el,ev,ch;i<evs.length;i++){el=evs[i][0];if(evs[i].length===2){ch=undefined;ev=evs[i][1];}
else if(evs[i].length===3){ch=evs[i][1];ev=evs[i][2];}
el.off(ev,ch);}},_buildEvents:function(){if(this.isInput){ this._events=[[this.element,{focus:$.proxy(this.show,this),keyup:$.proxy(function(e){if($.inArray(e.keyCode,[27,37,39,38,40,32,13,9])===-1)
this.update();},this),keydown:$.proxy(this.keydown,this)}]];}
else if(this.component&&this.hasInput){ this._events=[[this.element.find('input'),{focus:$.proxy(this.show,this),keyup:$.proxy(function(e){if($.inArray(e.keyCode,[27,37,39,38,40,32,13,9])===-1)
this.update();},this),keydown:$.proxy(this.keydown,this)}],[this.component,{click:$.proxy(this.show,this)}]];}
else if(this.element.is('div')){ this.isInline=true;}
else{this._events=[[this.element,{click:$.proxy(this.show,this)}]];}
this._events.push([this.element,'*',{blur:$.proxy(function(e){this._focused_from=e.target;},this)}],[this.element,{blur:$.proxy(function(e){this._focused_from=e.target;},this)}]);this._secondaryEvents=[[this.picker,{click:$.proxy(this.click,this)}],[$(window),{resize:$.proxy(this.place,this)}],[$(document),{'mousedown touchstart':$.proxy(function(e){ if(!(this.element.is(e.target)||this.element.find(e.target).length||this.picker.is(e.target)||this.picker.find(e.target).length)){this.hide();}},this)}]];},_attachEvents:function(){this._detachEvents();this._applyEvents(this._events);},_detachEvents:function(){this._unapplyEvents(this._events);},_attachSecondaryEvents:function(){this._detachSecondaryEvents();this._applyEvents(this._secondaryEvents);},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents);},_trigger:function(event,altdate){var date=altdate||this.dates.get(-1),local_date=this._utc_to_local(date);this.element.trigger({type:event,date:local_date,dates:$.map(this.dates,this._utc_to_local),format:$.proxy(function(ix,format){if(arguments.length===0){ix=this.dates.length-1;format=this.o.format;}
else if(typeof ix==='string'){format=ix;ix=this.dates.length-1;}
format=format||this.o.format;var date=this.dates.get(ix);return DPGlobal.formatDate(date,format,this.o.language);},this)});},show:function(){if(!this.isInline)
this.picker.appendTo('body');this.picker.show();this.place();this._attachSecondaryEvents();this._trigger('show');},hide:function(){if(this.isInline)
return;if(!this.picker.is(':visible'))
return;this.focusDate=null;this.picker.hide().detach();this._detachSecondaryEvents();this.viewMode=this.o.startView;this.showMode();if(this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find('input').val()))
this.setValue();this._trigger('hide');},remove:function(){this.hide();this._detachEvents();this._detachSecondaryEvents();this.picker.remove();delete this.element.data().datepicker;if(!this.isInput){delete this.element.data().date;}},_utc_to_local:function(utc){return utc&&new Date(utc.getTime()+(utc.getTimezoneOffset()*60000));},_local_to_utc:function(local){return local&&new Date(local.getTime()-(local.getTimezoneOffset()*60000));},_zero_time:function(local){return local&&new Date(local.getFullYear(),local.getMonth(),local.getDate());},_zero_utc_time:function(utc){return utc&&new Date(Date.UTC(utc.getUTCFullYear(),utc.getUTCMonth(),utc.getUTCDate()));},getDates:function(){return $.map(this.dates,this._utc_to_local);},getUTCDates:function(){return $.map(this.dates,function(d){return new Date(d);});},getDate:function(){return this._utc_to_local(this.getUTCDate());},getUTCDate:function(){return new Date(this.dates.get(-1));},setDates:function(){var args=$.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,args);this._trigger('changeDate');this.setValue();},setUTCDates:function(){var args=$.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,$.map(args,this._utc_to_local));this._trigger('changeDate');this.setValue();},setDate:alias('setDates'),setUTCDate:alias('setUTCDates'),setValue:function(){var formatted=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find('input').val(formatted).change();}}
else{this.element.val(formatted).change();}},getFormattedDate:function(format){if(format===undefined)
format=this.o.format;var lang=this.o.language;return $.map(this.dates,function(d){return DPGlobal.formatDate(d,format,lang);}).join(this.o.multidateSeparator);},setStartDate:function(startDate){this._process_options({startDate:startDate});this.update();this.updateNavArrows();},setEndDate:function(endDate){this._process_options({endDate:endDate});this.update();this.updateNavArrows();},setDaysOfWeekDisabled:function(daysOfWeekDisabled){this._process_options({daysOfWeekDisabled:daysOfWeekDisabled});this.update();this.updateNavArrows();},place:function(){if(this.isInline)
return;var calendarWidth=this.picker.outerWidth(),calendarHeight=this.picker.outerHeight(),visualPadding=10,windowWidth=$window.width(),windowHeight=$window.height(),scrollTop=$window.scrollTop();var zIndex=parseInt(this.element.parents().filter(function(){return $(this).css('z-index')!=='auto';}).first().css('z-index'))+10;var offset=this.component?this.component.parent().offset():this.element.offset();var height=this.component?this.component.outerHeight(true):this.element.outerHeight(false);var width=this.component?this.component.outerWidth(true):this.element.outerWidth(false);var left=offset.left,top=offset.top;this.picker.removeClass('datepicker-orient-top datepicker-orient-bottom '+'datepicker-orient-right datepicker-orient-left');if(this.o.orientation.x!=='auto'){this.picker.addClass('datepicker-orient-'+this.o.orientation.x);if(this.o.orientation.x==='right')
left-=calendarWidth-width;}
 
else{ this.picker.addClass('datepicker-orient-left');if(offset.left<0)
left-=offset.left-visualPadding;else if(offset.left+calendarWidth>windowWidth)
left=windowWidth-calendarWidth-visualPadding;} 
var yorient=this.o.orientation.y,top_overflow,bottom_overflow;if(yorient==='auto'){top_overflow=-scrollTop+offset.top-calendarHeight;bottom_overflow=scrollTop+windowHeight-(offset.top+height+calendarHeight);if(Math.max(top_overflow,bottom_overflow)===bottom_overflow)
yorient='top';else
yorient='bottom';}
this.picker.addClass('datepicker-orient-'+yorient);if(yorient==='top')
top+=height;else
top-=calendarHeight+parseInt(this.picker.css('padding-top'));this.picker.css({top:top,left:left,zIndex:zIndex});},_allow_update:true,update:function(){if(!this._allow_update)
return;var oldDates=this.dates.copy(),dates=[],fromArgs=false;if(arguments.length){$.each(arguments,$.proxy(function(i,date){if(date instanceof Date)
date=this._local_to_utc(date);dates.push(date);},this));fromArgs=true;}
else{dates=this.isInput?this.element.val():this.element.data('date')||this.element.find('input').val();if(dates&&this.o.multidate)
dates=dates.split(this.o.multidateSeparator);else
dates=[dates];delete this.element.data().date;}
dates=$.map(dates,$.proxy(function(date){return DPGlobal.parseDate(date,this.o.format,this.o.language);},this));dates=$.grep(dates,$.proxy(function(date){return(date<this.o.startDate||date>this.o.endDate||!date);},this),true);this.dates.replace(dates);if(this.dates.length)
this.viewDate=new Date(this.dates.get(-1));else if(this.viewDate<this.o.startDate)
this.viewDate=new Date(this.o.startDate);else if(this.viewDate>this.o.endDate)
this.viewDate=new Date(this.o.endDate);if(fromArgs){ this.setValue();}
else if(dates.length){ if(String(oldDates)!==String(this.dates))
this._trigger('changeDate');}
if(!this.dates.length&&oldDates.length)
this._trigger('clearDate');this.fill();},fillDow:function(){var dowCnt=this.o.weekStart,html='<tr>';if(this.o.calendarWeeks){var cell='<th class="cw">&nbsp;</th>';html+=cell;this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);}
while(dowCnt<this.o.weekStart+7){html+='<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';}
html+='</tr>';this.picker.find('.datepicker-days thead').append(html);},fillMonths:function(){var html='',i=0;while(i<12){html+='<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';}
this.picker.find('.datepicker-months td').html(html);},setRange:function(range){if(!range||!range.length)
delete this.range;else
this.range=$.map(range,function(d){return d.valueOf();});this.fill();},getClassNames:function(date){var cls=[],year=this.viewDate.getUTCFullYear(),month=this.viewDate.getUTCMonth(),today=new Date();if(date.getUTCFullYear()<year||(date.getUTCFullYear()===year&&date.getUTCMonth()<month)){cls.push('old');}
else if(date.getUTCFullYear()>year||(date.getUTCFullYear()===year&&date.getUTCMonth()>month)){cls.push('new');}
if(this.focusDate&&date.valueOf()===this.focusDate.valueOf())
cls.push('focused'); if(this.o.todayHighlight&&date.getUTCFullYear()===today.getFullYear()&&date.getUTCMonth()===today.getMonth()&&date.getUTCDate()===today.getDate()){cls.push('today');}
if(this.dates.contains(date)!==-1)
cls.push('active');if(date.valueOf()<this.o.startDate||date.valueOf()>this.o.endDate||$.inArray(date.getUTCDay(),this.o.daysOfWeekDisabled)!==-1){cls.push('disabled');}
if(this.range){if(date>this.range[0]&&date<this.range[this.range.length-1]){cls.push('range');}
if($.inArray(date.valueOf(),this.range)!==-1){cls.push('selected');}}
return cls;},fill:function(){var d=new Date(this.viewDate),year=d.getUTCFullYear(),month=d.getUTCMonth(),startYear=this.o.startDate!==-Infinity?this.o.startDate.getUTCFullYear():-Infinity,startMonth=this.o.startDate!==-Infinity?this.o.startDate.getUTCMonth():-Infinity,endYear=this.o.endDate!==Infinity?this.o.endDate.getUTCFullYear():Infinity,endMonth=this.o.endDate!==Infinity?this.o.endDate.getUTCMonth():Infinity,todaytxt=dates[this.o.language].today||dates['en'].today||'',cleartxt=dates[this.o.language].clear||dates['en'].clear||'',tooltip;this.picker.find('.datepicker-days thead th.datepicker-switch').text(dates[this.o.language].months[month]+' '+year);this.picker.find('tfoot th.today').text(todaytxt).toggle(this.o.todayBtn!==false);this.picker.find('tfoot th.clear').text(cleartxt).toggle(this.o.clearBtn!==false);this.updateNavArrows();this.fillMonths();var prevMonth=UTCDate(year,month-1,28),day=DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(),prevMonth.getUTCMonth());prevMonth.setUTCDate(day);prevMonth.setUTCDate(day-(prevMonth.getUTCDay()-this.o.weekStart+7)%7);var nextMonth=new Date(prevMonth);nextMonth.setUTCDate(nextMonth.getUTCDate()+42);nextMonth=nextMonth.valueOf();var html=[];var clsName;while(prevMonth.valueOf()<nextMonth){if(prevMonth.getUTCDay()===this.o.weekStart){html.push('<tr>');if(this.o.calendarWeeks){var
 
ws=new Date(+prevMonth+(this.o.weekStart-prevMonth.getUTCDay()-7)%7*864e5), th=new Date(Number(ws)+(7+4-ws.getUTCDay())%7*864e5), yth=new Date(Number(yth=UTCDate(th.getUTCFullYear(),0,1))+(7+4-yth.getUTCDay())%7*864e5), calWeek=(th-yth)/864e5/7+1;html.push('<td class="cw">'+calWeek+'</td>');}}
clsName=this.getClassNames(prevMonth);clsName.push('day');if(this.o.beforeShowDay!==$.noop){var before=this.o.beforeShowDay(this._utc_to_local(prevMonth));if(before===undefined)
before={};else if(typeof(before)==='boolean')
before={enabled:before};else if(typeof(before)==='string')
before={classes:before};if(before.enabled===false)
clsName.push('disabled');if(before.classes)
clsName=clsName.concat(before.classes.split(/\s+/));if(before.tooltip)
tooltip=before.tooltip;}
clsName=$.unique(clsName);html.push('<td class="'+clsName.join(' ')+'"'+(tooltip?' title="'+tooltip+'"':'')+'>'+prevMonth.getUTCDate()+'</td>');if(prevMonth.getUTCDay()===this.o.weekEnd){html.push('</tr>');}
prevMonth.setUTCDate(prevMonth.getUTCDate()+1);}
this.picker.find('.datepicker-days tbody').empty().append(html.join(''));var months=this.picker.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');$.each(this.dates,function(i,d){if(d.getUTCFullYear()===year)
months.eq(d.getUTCMonth()).addClass('active');});if(year<startYear||year>endYear){months.addClass('disabled');}
if(year===startYear){months.slice(0,startMonth).addClass('disabled');}
if(year===endYear){months.slice(endMonth+1).addClass('disabled');}
html='';year=parseInt(year/10,10)*10;var yearCont=this.picker.find('.datepicker-years').find('th:eq(1)').text(year+'-'+(year+9)).end().find('td');year-=1;var years=$.map(this.dates,function(d){return d.getUTCFullYear();}),classes;for(var i=-1;i<11;i++){classes=['year'];if(i===-1)
classes.push('old');else if(i===10)
classes.push('new');if($.inArray(year,years)!==-1)
classes.push('active');if(year<startYear||year>endYear)
classes.push('disabled');html+='<span class="'+classes.join(' ')+'">'+year+'</span>';year+=1;}
yearCont.html(html);},updateNavArrows:function(){if(!this._allow_update)
return;var d=new Date(this.viewDate),year=d.getUTCFullYear(),month=d.getUTCMonth();switch(this.viewMode){case 0:if(this.o.startDate!==-Infinity&&year<=this.o.startDate.getUTCFullYear()&&month<=this.o.startDate.getUTCMonth()){this.picker.find('.prev').css({visibility:'hidden'});}
else{this.picker.find('.prev').css({visibility:'visible'});}
if(this.o.endDate!==Infinity&&year>=this.o.endDate.getUTCFullYear()&&month>=this.o.endDate.getUTCMonth()){this.picker.find('.next').css({visibility:'hidden'});}
else{this.picker.find('.next').css({visibility:'visible'});}
break;case 1:case 2:if(this.o.startDate!==-Infinity&&year<=this.o.startDate.getUTCFullYear()){this.picker.find('.prev').css({visibility:'hidden'});}
else{this.picker.find('.prev').css({visibility:'visible'});}
if(this.o.endDate!==Infinity&&year>=this.o.endDate.getUTCFullYear()){this.picker.find('.next').css({visibility:'hidden'});}
else{this.picker.find('.next').css({visibility:'visible'});}
break;}},click:function(e){e.preventDefault();var target=$(e.target).closest('span, td, th'),year,month,day;if(target.length===1){switch(target[0].nodeName.toLowerCase()){case'th':switch(target[0].className){case'datepicker-switch':this.showMode(1);break;case'prev':case'next':var dir=DPGlobal.modes[this.viewMode].navStep*(target[0].className==='prev'?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,dir);this._trigger('changeMonth',this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,dir);if(this.viewMode===1)
this._trigger('changeYear',this.viewDate);break;}
this.fill();break;case'today':var date=new Date();date=UTCDate(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0);this.showMode(-2);var which=this.o.todayBtn==='linked'?null:'view';this._setDate(date,which);break;case'clear':var element;if(this.isInput)
element=this.element;else if(this.component)
element=this.element.find('input');if(element)
element.val("").change();this.update();this._trigger('changeDate');if(this.o.autoclose)
this.hide();break;}
break;case'span':if(!target.is('.disabled')){this.viewDate.setUTCDate(1);if(target.is('.month')){day=1;month=target.parent().find('span').index(target);year=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(month);this._trigger('changeMonth',this.viewDate);if(this.o.minViewMode===1){this._setDate(UTCDate(year,month,day));}}
else{day=1;month=0;year=parseInt(target.text(),10)||0;this.viewDate.setUTCFullYear(year);this._trigger('changeYear',this.viewDate);if(this.o.minViewMode===2){this._setDate(UTCDate(year,month,day));}}
this.showMode(-1);this.fill();}
break;case'td':if(target.is('.day')&&!target.is('.disabled')){day=parseInt(target.text(),10)||1;year=this.viewDate.getUTCFullYear();month=this.viewDate.getUTCMonth();if(target.is('.old')){if(month===0){month=11;year-=1;}
else{month-=1;}}
else if(target.is('.new')){if(month===11){month=0;year+=1;}
else{month+=1;}}
this._setDate(UTCDate(year,month,day));}
break;}}
if(this.picker.is(':visible')&&this._focused_from){$(this._focused_from).focus();}
delete this._focused_from;},_toggle_multidate:function(date){var ix=this.dates.contains(date);if(!date){this.dates.clear();}
else if(ix!==-1){this.dates.remove(ix);}
else{this.dates.push(date);}
if(typeof this.o.multidate==='number')
while(this.dates.length>this.o.multidate)
this.dates.remove(0);},_setDate:function(date,which){if(!which||which==='date')
this._toggle_multidate(date&&new Date(date));if(!which||which==='view')
this.viewDate=date&&new Date(date);this.fill();this.setValue();this._trigger('changeDate');var element;if(this.isInput){element=this.element;}
else if(this.component){element=this.element.find('input');}
if(element){element.change();}
if(this.o.autoclose&&(!which||which==='date')){this.hide();}},moveMonth:function(date,dir){if(!date)
return undefined;if(!dir)
return date;var new_date=new Date(date.valueOf()),day=new_date.getUTCDate(),month=new_date.getUTCMonth(),mag=Math.abs(dir),new_month,test;dir=dir>0?1:-1;if(mag===1){test=dir===-1


?function(){return new_date.getUTCMonth()===month;}

:function(){return new_date.getUTCMonth()!==new_month;};new_month=month+dir;new_date.setUTCMonth(new_month); if(new_month<0||new_month>11)
new_month=(new_month+12)%12;}
else{for(var i=0;i<mag;i++)
new_date=this.moveMonth(new_date,dir); new_month=new_date.getUTCMonth();new_date.setUTCDate(day);test=function(){return new_month!==new_date.getUTCMonth();};}
 
while(test()){new_date.setUTCDate(--day);new_date.setUTCMonth(new_month);}
return new_date;},moveYear:function(date,dir){return this.moveMonth(date,dir*12);},dateWithinRange:function(date){return date>=this.o.startDate&&date<=this.o.endDate;},keydown:function(e){if(this.picker.is(':not(:visible)')){if(e.keyCode===27) 
this.show();return;}
var dateChanged=false,dir,newDate,newViewDate,focusDate=this.focusDate||this.viewDate;switch(e.keyCode){case 27: if(this.focusDate){this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.fill();}
else
this.hide();e.preventDefault();break;case 37: case 39: if(!this.o.keyboardNavigation)
break;dir=e.keyCode===37?-1:1;if(e.ctrlKey){newDate=this.moveYear(this.dates.get(-1)||UTCToday(),dir);newViewDate=this.moveYear(focusDate,dir);this._trigger('changeYear',this.viewDate);}
else if(e.shiftKey){newDate=this.moveMonth(this.dates.get(-1)||UTCToday(),dir);newViewDate=this.moveMonth(focusDate,dir);this._trigger('changeMonth',this.viewDate);}
else{newDate=new Date(this.dates.get(-1)||UTCToday());newDate.setUTCDate(newDate.getUTCDate()+dir);newViewDate=new Date(focusDate);newViewDate.setUTCDate(focusDate.getUTCDate()+dir);}
if(this.dateWithinRange(newDate)){this.focusDate=this.viewDate=newViewDate;this.setValue();this.fill();e.preventDefault();}
break;case 38: case 40: if(!this.o.keyboardNavigation)
break;dir=e.keyCode===38?-1:1;if(e.ctrlKey){newDate=this.moveYear(this.dates.get(-1)||UTCToday(),dir);newViewDate=this.moveYear(focusDate,dir);this._trigger('changeYear',this.viewDate);}
else if(e.shiftKey){newDate=this.moveMonth(this.dates.get(-1)||UTCToday(),dir);newViewDate=this.moveMonth(focusDate,dir);this._trigger('changeMonth',this.viewDate);}
else{newDate=new Date(this.dates.get(-1)||UTCToday());newDate.setUTCDate(newDate.getUTCDate()+dir*7);newViewDate=new Date(focusDate);newViewDate.setUTCDate(focusDate.getUTCDate()+dir*7);}
if(this.dateWithinRange(newDate)){this.focusDate=this.viewDate=newViewDate;this.setValue();this.fill();e.preventDefault();}
break;case 32:
break;case 13: focusDate=this.focusDate||this.dates.get(-1)||this.viewDate;this._toggle_multidate(focusDate);dateChanged=true;this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.setValue();this.fill();if(this.picker.is(':visible')){e.preventDefault();if(this.o.autoclose)
this.hide();}
break;case 9: this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.fill();this.hide();break;}
if(dateChanged){if(this.dates.length)
this._trigger('changeDate');else
this._trigger('clearDate');var element;if(this.isInput){element=this.element;}
else if(this.component){element=this.element.find('input');}
if(element){element.change();}}},showMode:function(dir){if(dir){this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+dir));}
this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).css('display','block');this.updateNavArrows();}};var DateRangePicker=function(element,options){this.element=$(element);this.inputs=$.map(options.inputs,function(i){return i.jquery?i[0]:i;});delete options.inputs;$(this.inputs).datepicker(options).bind('changeDate',$.proxy(this.dateUpdated,this));this.pickers=$.map(this.inputs,function(i){return $(i).data('datepicker');});this.updateDates();};DateRangePicker.prototype={updateDates:function(){this.dates=$.map(this.pickers,function(i){return i.getUTCDate();});this.updateRanges();},updateRanges:function(){var range=$.map(this.dates,function(d){return d.valueOf();});$.each(this.pickers,function(i,p){p.setRange(range);});},dateUpdated:function(e){

if(this.updating)
return;this.updating=true;var dp=$(e.target).data('datepicker'),new_date=dp.getUTCDate(),i=$.inArray(e.target,this.inputs),l=this.inputs.length;if(i===-1)
return;$.each(this.pickers,function(i,p){if(!p.getUTCDate())
p.setUTCDate(new_date);});if(new_date<this.dates[i]){ while(i>=0&&new_date<this.dates[i]){this.pickers[i--].setUTCDate(new_date);}}
else if(new_date>this.dates[i]){ while(i<l&&new_date>this.dates[i]){this.pickers[i++].setUTCDate(new_date);}}
this.updateDates();delete this.updating;},remove:function(){$.map(this.pickers,function(p){p.remove();});delete this.element.data().datepicker;}};function opts_from_el(el,prefix){ var data=$(el).data(),out={},inkey,replace=new RegExp('^'+prefix.toLowerCase()+'([A-Z])');prefix=new RegExp('^'+prefix.toLowerCase());function re_lower(_,a){return a.toLowerCase();}
for(var key in data)
if(prefix.test(key)){inkey=key.replace(replace,re_lower);out[inkey]=data[key];}
return out;}
function opts_from_locale(lang){ var out={};
if(!dates[lang]){lang=lang.split('-')[0];if(!dates[lang])
return;}
var d=dates[lang];$.each(locale_opts,function(i,k){if(k in d)
out[k]=d[k];});return out;}
var old=$.fn.datepicker;$.fn.datepicker=function(option){var args=Array.apply(null,arguments);args.shift();var internal_return;this.each(function(){var $this=$(this),data=$this.data('datepicker'),options=typeof option==='object'&&option;if(!data){var elopts=opts_from_el(this,'date'), xopts=$.extend({},defaults,elopts,options),locopts=opts_from_locale(xopts.language), opts=$.extend({},defaults,locopts,elopts,options);if($this.is('.input-daterange')||opts.inputs){var ropts={inputs:opts.inputs||$this.find('input').toArray()};$this.data('datepicker',(data=new DateRangePicker(this,$.extend(opts,ropts))));}
else{$this.data('datepicker',(data=new Datepicker(this,opts)));}}
if(typeof option==='string'&&typeof data[option]==='function'){internal_return=data[option].apply(data,args);if(internal_return!==undefined)
return false;}});if(internal_return!==undefined)
return internal_return;else
return this;};var defaults=$.fn.datepicker.defaults={autoclose:false,beforeShowDay:$.noop,calendarWeeks:false,clearBtn:false,daysOfWeekDisabled:[],endDate:Infinity,forceParse:true,format:'mm/dd/yyyy',keyboardNavigation:true,language:'en',minViewMode:0,multidate:false,multidateSeparator:',',orientation:"auto",rtl:false,startDate:-Infinity,startView:0,todayBtn:false,todayHighlight:false,weekStart:0};var locale_opts=$.fn.datepicker.locale_opts=['format','rtl','weekStart'];$.fn.datepicker.Constructor=Datepicker;var dates=$.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}};var DPGlobal={modes:[{clsName:'days',navFnc:'Month',navStep:1},{clsName:'months',navFnc:'FullYear',navStep:1},{clsName:'years',navFnc:'FullYear',navStep:10}],isLeapYear:function(year){return(((year%4===0)&&(year%100!==0))||(year%400===0));},getDaysInMonth:function(year,month){return[31,(DPGlobal.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(format){ var separators=format.replace(this.validParts,'\0').split('\0'),parts=format.match(this.validParts);if(!separators||!separators.length||!parts||parts.length===0){throw new Error("Invalid date format.");}
return{separators:separators,parts:parts};},parseDate:function(date,format,language){if(!date)
return undefined;if(date instanceof Date)
return date;if(typeof format==='string')
format=DPGlobal.parseFormat(format);var part_re=/([\-+]\d+)([dmwy])/,parts=date.match(/([\-+]\d+)([dmwy])/g),part,dir,i;if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){date=new Date();for(i=0;i<parts.length;i++){part=part_re.exec(parts[i]);dir=parseInt(part[1]);switch(part[2]){case'd':date.setUTCDate(date.getUTCDate()+dir);break;case'm':date=Datepicker.prototype.moveMonth.call(Datepicker.prototype,date,dir);break;case'w':date.setUTCDate(date.getUTCDate()+dir*7);break;case'y':date=Datepicker.prototype.moveYear.call(Datepicker.prototype,date,dir);break;}}
return UTCDate(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),0,0,0);}
parts=date&&date.match(this.nonpunctuation)||[];date=new Date();var parsed={},setters_order=['yyyy','yy','M','MM','m','mm','d','dd'],setters_map={yyyy:function(d,v){return d.setUTCFullYear(v);},yy:function(d,v){return d.setUTCFullYear(2000+v);},m:function(d,v){if(isNaN(d))
return d;v-=1;while(v<0)v+=12;v%=12;d.setUTCMonth(v);while(d.getUTCMonth()!==v)
d.setUTCDate(d.getUTCDate()-1);return d;},d:function(d,v){return d.setUTCDate(v);}},val,filtered;setters_map['M']=setters_map['MM']=setters_map['mm']=setters_map['m'];setters_map['dd']=setters_map['d'];date=UTCDate(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0);var fparts=format.parts.slice(); if(parts.length!==fparts.length){fparts=$(fparts).filter(function(i,p){return $.inArray(p,setters_order)!==-1;}).toArray();} 
function match_part(){var m=this.slice(0,parts[i].length),p=parts[i].slice(0,m.length);return m===p;}
if(parts.length===fparts.length){var cnt;for(i=0,cnt=fparts.length;i<cnt;i++){val=parseInt(parts[i],10);part=fparts[i];if(isNaN(val)){switch(part){case'MM':filtered=$(dates[language].months).filter(match_part);val=$.inArray(filtered[0],dates[language].months)+1;break;case'M':filtered=$(dates[language].monthsShort).filter(match_part);val=$.inArray(filtered[0],dates[language].monthsShort)+1;break;}}
parsed[part]=val;}
var _date,s;for(i=0;i<setters_order.length;i++){s=setters_order[i];if(s in parsed&&!isNaN(parsed[s])){_date=new Date(date);setters_map[s](_date,parsed[s]);if(!isNaN(_date))
date=_date;}}}
return date;},formatDate:function(date,format,language){if(!date)
return'';if(typeof format==='string')
format=DPGlobal.parseFormat(format);var val={d:date.getUTCDate(),D:dates[language].daysShort[date.getUTCDay()],DD:dates[language].days[date.getUTCDay()],m:date.getUTCMonth()+1,M:dates[language].monthsShort[date.getUTCMonth()],MM:dates[language].months[date.getUTCMonth()],yy:date.getUTCFullYear().toString().substring(2),yyyy:date.getUTCFullYear()};val.dd=(val.d<10?'0':'')+val.d;val.mm=(val.m<10?'0':'')+val.m;date=[];var seps=$.extend([],format.separators);for(var i=0,cnt=format.parts.length;i<=cnt;i++){if(seps.length)
date.push(seps.shift());date.push(val[format.parts[i]]);}
return date.join('');},headTemplate:'<thead>'+'<tr>'+'<th class="prev">&laquo;</th>'+'<th colspan="5" class="datepicker-switch"></th>'+'<th class="next">&raquo;</th>'+'</tr>'+'</thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot>'+'<tr>'+'<th colspan="7" class="today"></th>'+'</tr>'+'<tr>'+'<th colspan="7" class="clear"></th>'+'</tr>'+'</tfoot>'};DPGlobal.template='<div class="datepicker">'+'<div class="datepicker-days">'+'<table class=" table-condensed">'+
DPGlobal.headTemplate+'<tbody></tbody>'+
DPGlobal.footTemplate+'</table>'+'</div>'+'<div class="datepicker-months">'+'<table class="table-condensed">'+
DPGlobal.headTemplate+
DPGlobal.contTemplate+
DPGlobal.footTemplate+'</table>'+'</div>'+'<div class="datepicker-years">'+'<table class="table-condensed">'+
DPGlobal.headTemplate+
DPGlobal.contTemplate+
DPGlobal.footTemplate+'</table>'+'</div>'+'</div>';$.fn.datepicker.DPGlobal=DPGlobal;$.fn.datepicker.noConflict=function(){$.fn.datepicker=old;return this;};$(document).on('focus.datepicker.data-api click.datepicker.data-api','[data-provide="datepicker"]',function(e){var $this=$(this);if($this.data('datepicker'))
return;e.preventDefault(); $this.datepicker('show');});$(function(){$('[data-provide="datepicker-inline"]').datepicker();});}(window.jQuery));(function($){"use strict";var defaultOptions={tagClass:function(item){return'label label-info';},itemValue:function(item){return item?item.toString():item;},itemText:function(item){return this.itemValue(item);},freeInput:true,addOnBlur:true,maxTags:undefined,maxChars:undefined,confirmKeys:[13,44],onTagExists:function(item,$tag){$tag.hide().fadeIn();},trimValue:false,allowDuplicates:false};function TagsInput(element,options){this.itemsArray=[];this.$element=$(element);this.$element.hide();this.isSelect=(element.tagName==='SELECT');this.multiple=(this.isSelect&&element.hasAttribute('multiple'));this.objectItems=options&&options.itemValue;this.placeholderText=element.hasAttribute('placeholder')?this.$element.attr('placeholder'):'';this.inputSize=Math.max(1,this.placeholderText.length);this.$container=$('<div class="bootstrap-tagsinput"></div>');this.$input=$('<input type="text" placeholder="'+this.placeholderText+'"/>').appendTo(this.$container);this.$element.after(this.$container);this.build(options);}
TagsInput.prototype={constructor:TagsInput,add:function(item,dontPushVal){var self=this;if(self.options.maxTags&&self.itemsArray.length>=self.options.maxTags)
return; if(item!==false&&!item)
return; if(typeof item==="string"&&self.options.trimValue){item=$.trim(item);} 
if(typeof item==="object"&&!self.objectItems)
throw("Can't add objects when itemValue option is not set"); if(item.toString().match(/^\s*$/))
return; if(self.isSelect&&!self.multiple&&self.itemsArray.length>0)
self.remove(self.itemsArray[0]);if(typeof item==="string"&&this.$element[0].tagName==='INPUT'){var items=item.split(',');if(items.length>1){for(var i=0;i<items.length;i++){this.add(items[i],true);}
if(!dontPushVal)
self.pushVal();return;}}
var itemValue=self.options.itemValue(item),itemText=self.options.itemText(item),tagClass=self.options.tagClass(item); var existing=$.grep(self.itemsArray,function(item){return self.options.itemValue(item)===itemValue;})[0];if(existing&&!self.options.allowDuplicates){ if(self.options.onTagExists){var $existingTag=$(".tag",self.$container).filter(function(){return $(this).data("item")===existing;});self.options.onTagExists(item,$existingTag);}
return;} 
if(self.items().toString().length+item.length+1>self.options.maxInputLength)
return; var beforeItemAddEvent=$.Event('beforeItemAdd',{item:item,cancel:false});self.$element.trigger(beforeItemAddEvent);if(beforeItemAddEvent.cancel)
return; self.itemsArray.push(item); var $tag=$('<span class="tag '+htmlEncode(tagClass)+'">'+htmlEncode(itemText)+'<span data-role="remove"></span></span>');$tag.data('item',item);self.findInputWrapper().before($tag);$tag.after(' '); if(self.isSelect&&!$('option[value="'+encodeURIComponent(itemValue)+'"]',self.$element)[0]){var $option=$('<option selected>'+htmlEncode(itemText)+'</option>');$option.data('item',item);$option.attr('value',itemValue);self.$element.append($option);}
if(!dontPushVal)
self.pushVal(); if(self.options.maxTags===self.itemsArray.length||self.items().toString().length===self.options.maxInputLength)
self.$container.addClass('bootstrap-tagsinput-max');self.$element.trigger($.Event('itemAdded',{item:item}));self.$input.typeahead('val','');},remove:function(item,dontPushVal){var self=this;if(self.objectItems){if(typeof item==="object")
item=$.grep(self.itemsArray,function(other){return self.options.itemValue(other)==self.options.itemValue(item);});else
item=$.grep(self.itemsArray,function(other){return self.options.itemValue(other)==item;});item=item[item.length-1];}
if(item){var beforeItemRemoveEvent=$.Event('beforeItemRemove',{item:item,cancel:false});self.$element.trigger(beforeItemRemoveEvent);if(beforeItemRemoveEvent.cancel)
return;$('.tag',self.$container).filter(function(){return $(this).data('item')===item;}).remove();$('option',self.$element).filter(function(){return $(this).data('item')===item;}).remove();if($.inArray(item,self.itemsArray)!==-1)
self.itemsArray.splice($.inArray(item,self.itemsArray),1);}
if(!dontPushVal)
self.pushVal(); if(self.options.maxTags>self.itemsArray.length)
self.$container.removeClass('bootstrap-tagsinput-max');self.$element.trigger($.Event('itemRemoved',{item:item}));},removeAll:function(){var self=this;$('.tag',self.$container).remove();$('option',self.$element).remove();while(self.itemsArray.length>0)
self.itemsArray.pop();self.pushVal();},refresh:function(){var self=this;$('.tag',self.$container).each(function(){var $tag=$(this),item=$tag.data('item'),itemValue=self.options.itemValue(item),itemText=self.options.itemText(item),tagClass=self.options.tagClass(item); $tag.attr('class',null);$tag.addClass('tag '+htmlEncode(tagClass));$tag.contents().filter(function(){return this.nodeType==3;})[0].nodeValue=htmlEncode(itemText);if(self.isSelect){var option=$('option',self.$element).filter(function(){return $(this).data('item')===item;});option.attr('value',itemValue);}});},items:function(){return this.itemsArray;},pushVal:function(){var self=this,val=$.map(self.items(),function(item){return self.options.itemValue(item).toString();});self.$element.val(val,true).trigger('change');},build:function(options){var self=this;self.options=$.extend({},defaultOptions,options); if(self.objectItems)
self.options.freeInput=false;makeOptionItemFunction(self.options,'itemValue');makeOptionItemFunction(self.options,'itemText');makeOptionFunction(self.options,'tagClass'); if(self.options.typeahead){var typeahead=self.options.typeahead||{};makeOptionFunction(typeahead,'source');self.$input.typeahead($.extend({},typeahead,{source:function(query,process){function processItems(items){var texts=[];for(var i=0;i<items.length;i++){var text=self.options.itemText(items[i]);map[text]=items[i];texts.push(text);}
process(texts);}
this.map={};var map=this.map,data=typeahead.source(query);if($.isFunction(data.success)){ data.success(processItems);}else if($.isFunction(data.then)){ data.then(processItems);}else{ $.when(data).then(processItems);}},updater:function(text){self.add(this.map[text]);},matcher:function(text){return(text.toLowerCase().indexOf(this.query.trim().toLowerCase())!==-1);},sorter:function(texts){return texts.sort();},highlighter:function(text){var regex=new RegExp('('+this.query+')','gi');return text.replace(regex,"<strong>$1</strong>");}}));} 
if(self.options.typeaheadjs){var typeaheadjs=self.options.typeaheadjs||{};self.$input.typeahead(null,typeaheadjs).on('typeahead:selected',$.proxy(function(obj,datum){if(typeaheadjs.valueKey)
self.add(datum[typeaheadjs.valueKey]);else
self.add(datum);self.$input.typeahead('val','');},self));}
self.$container.on('click',$.proxy(function(event){if(!self.$element.attr('disabled')){self.$input.removeAttr('disabled');}
self.$input.focus();},self));if(self.options.addOnBlur&&self.options.freeInput){self.$input.on('focusout',$.proxy(function(event){
 if($('.typeahead, .twitter-typeahead',self.$container).length===0){self.add(self.$input.val());self.$input.val('');}},self));}
self.$container.on('keydown','input',$.proxy(function(event){var $input=$(event.target),$inputWrapper=self.findInputWrapper();if(self.$element.attr('disabled')){self.$input.attr('disabled','disabled');return;}
switch(event.which){ case 8:if(doGetCaretPosition($input[0])===0){var prev=$inputWrapper.prev();if(prev){self.remove(prev.data('item'));}}
break; case 46:if(doGetCaretPosition($input[0])===0){var next=$inputWrapper.next();if(next){self.remove(next.data('item'));}}
break; case 37: var $prevTag=$inputWrapper.prev();if($input.val().length===0&&$prevTag[0]){$prevTag.before($inputWrapper);$input.focus();}
break; case 39: var $nextTag=$inputWrapper.next();if($input.val().length===0&&$nextTag[0]){$nextTag.after($inputWrapper);$input.focus();}
break;default:} 
var textLength=$input.val().length,wordSpace=Math.ceil(textLength/5),size=textLength+wordSpace+1;$input.attr('size',Math.max(this.inputSize,$input.val().length));},self));self.$container.on('keypress','input',$.proxy(function(event){var $input=$(event.target);if(self.$element.attr('disabled')){self.$input.attr('disabled','disabled');return;}
var text=$input.val(),maxLengthReached=self.options.maxChars&&text.length>=self.options.maxChars;if(self.options.freeInput&&(keyCombinationInList(event,self.options.confirmKeys)||maxLengthReached)){self.add(maxLengthReached?text.substr(0,self.options.maxChars):text);$input.val('');event.preventDefault();} 
var textLength=$input.val().length,wordSpace=Math.ceil(textLength/5),size=textLength+wordSpace+1;$input.attr('size',Math.max(this.inputSize,$input.val().length));},self)); self.$container.on('click','[data-role=remove]',$.proxy(function(event){if(self.$element.attr('disabled')){return;}
self.remove($(event.target).closest('.tag').data('item'));},self)); if(self.options.itemValue===defaultOptions.itemValue){if(self.$element[0].tagName==='INPUT'){self.add(self.$element.val());}else{$('option',self.$element).each(function(){self.add($(this).attr('value'),true);});}}},destroy:function(){var self=this; self.$container.off('keypress','input');self.$container.off('click','[role=remove]');self.$container.remove();self.$element.removeData('tagsinput');self.$element.show();},focus:function(){this.$input.focus();},input:function(){return this.$input;},findInputWrapper:function(){var elt=this.$input[0],container=this.$container[0];while(elt&&elt.parentNode!==container)
elt=elt.parentNode;return $(elt);}};$.fn.tagsinput=function(arg1,arg2){var results=[];this.each(function(){var tagsinput=$(this).data('tagsinput'); if(!tagsinput){tagsinput=new TagsInput(this,arg1);$(this).data('tagsinput',tagsinput);results.push(tagsinput);if(this.tagName==='SELECT'){$('option',$(this)).attr('selected','selected');}
$(this).val($(this).val());}else if(!arg1&&!arg2){
 results.push(tagsinput);}else if(tagsinput[arg1]!==undefined){ var retVal=tagsinput[arg1](arg2);if(retVal!==undefined)
results.push(retVal);}});if(typeof arg1=='string'){ return results.length>1?results:results[0];}else{return results;}};$.fn.tagsinput.Constructor=TagsInput;function makeOptionItemFunction(options,key){if(typeof options[key]!=='function'){var propertyName=options[key];options[key]=function(item){return item[propertyName];};}}
function makeOptionFunction(options,key){if(typeof options[key]!=='function'){var value=options[key];options[key]=function(){return value;};}}
var htmlEncodeContainer=$('<div />');function htmlEncode(value){if(value){return htmlEncodeContainer.text(value).html();}else{return'';}}
function doGetCaretPosition(oField){var iCaretPos=0;if(document.selection){oField.focus();var oSel=document.selection.createRange();oSel.moveStart('character',-oField.value.length);iCaretPos=oSel.text.length;}else if(oField.selectionStart||oField.selectionStart=='0'){iCaretPos=oField.selectionStart;}
return(iCaretPos);}
function keyCombinationInList(keyPressEvent,lookupList){var found=false;$.each(lookupList,function(index,keyCombination){if(typeof(keyCombination)==='number'&&keyPressEvent.which===keyCombination){found=true;return false;}
if(keyPressEvent.which===keyCombination.which){var alt=!keyCombination.hasOwnProperty('altKey')||keyPressEvent.altKey===keyCombination.altKey,shift=!keyCombination.hasOwnProperty('shiftKey')||keyPressEvent.shiftKey===keyCombination.shiftKey,ctrl=!keyCombination.hasOwnProperty('ctrlKey')||keyPressEvent.ctrlKey===keyCombination.ctrlKey;if(alt&&shift&&ctrl){found=true;return false;}}});return found;}
$(function(){$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();});})(window.jQuery);(function($){var _=function(){"use strict";return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:false;},isBlankString:function(str){return!str||/^\s*$/.test(str);},escapeRegExChars:function(str){return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");},isString:function(obj){return typeof obj==="string";},isNumber:function(obj){return typeof obj==="number";},isArray:$.isArray,isFunction:$.isFunction,isObject:$.isPlainObject,isUndefined:function(obj){return typeof obj==="undefined";},toStr:function toStr(s){return _.isUndefined(s)||s===null?"":s+"";},bind:$.proxy,each:function(collection,cb){$.each(collection,reverseArgs);function reverseArgs(index,value){return cb(value,index);}},map:$.map,filter:$.grep,every:function(obj,test){var result=true;if(!obj){return result;}
$.each(obj,function(key,val){if(!(result=test.call(null,val,key,obj))){return false;}});return!!result;},some:function(obj,test){var result=false;if(!obj){return result;}
$.each(obj,function(key,val){if(result=test.call(null,val,key,obj)){return false;}});return!!result;},mixin:$.extend,getUniqueId:function(){var counter=0;return function(){return counter++;};}(),templatify:function templatify(obj){return $.isFunction(obj)?obj:template;function template(){return String(obj);}},defer:function(fn){setTimeout(fn,0);},debounce:function(func,wait,immediate){var timeout,result;return function(){var context=this,args=arguments,later,callNow;later=function(){timeout=null;if(!immediate){result=func.apply(context,args);}};callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow){result=func.apply(context,args);}
return result;};},throttle:function(func,wait){var context,args,timeout,result,previous,later;previous=0;later=function(){previous=new Date();timeout=null;result=func.apply(context,args);};return function(){var now=new Date(),remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0){clearTimeout(timeout);timeout=null;previous=now;result=func.apply(context,args);}else if(!timeout){timeout=setTimeout(later,remaining);}
return result;};},noop:function(){}};}();var VERSION="0.10.5";var tokenizers=function(){"use strict";return{nonword:nonword,whitespace:whitespace,obj:{nonword:getObjTokenizer(nonword),whitespace:getObjTokenizer(whitespace)}};function whitespace(str){str=_.toStr(str);return str?str.split(/\s+/):[];}
function nonword(str){str=_.toStr(str);return str?str.split(/\W+/):[];}
function getObjTokenizer(tokenizer){return function setKey(){var args=[].slice.call(arguments,0);return function tokenize(o){var tokens=[];_.each(args,function(k){tokens=tokens.concat(tokenizer(_.toStr(o[k])));});return tokens;};};}}();var LruCache=function(){"use strict";function LruCache(maxSize){this.maxSize=_.isNumber(maxSize)?maxSize:100;this.reset();if(this.maxSize<=0){this.set=this.get=$.noop;}}
_.mixin(LruCache.prototype,{set:function set(key,val){var tailItem=this.list.tail,node;if(this.size>=this.maxSize){this.list.remove(tailItem);delete this.hash[tailItem.key];}
if(node=this.hash[key]){node.val=val;this.list.moveToFront(node);}else{node=new Node(key,val);this.list.add(node);this.hash[key]=node;this.size++;}},get:function get(key){var node=this.hash[key];if(node){this.list.moveToFront(node);return node.val;}},reset:function reset(){this.size=0;this.hash={};this.list=new List();}});function List(){this.head=this.tail=null;}
_.mixin(List.prototype,{add:function add(node){if(this.head){node.next=this.head;this.head.prev=node;}
this.head=node;this.tail=this.tail||node;},remove:function remove(node){node.prev?node.prev.next=node.next:this.head=node.next;node.next?node.next.prev=node.prev:this.tail=node.prev;},moveToFront:function(node){this.remove(node);this.add(node);}});function Node(key,val){this.key=key;this.val=val;this.prev=this.next=null;}
return LruCache;}();var PersistentStorage=function(){"use strict";var ls,methods;try{ls=window.localStorage;ls.setItem("~~~","!");ls.removeItem("~~~");}catch(err){ls=null;}
function PersistentStorage(namespace){this.prefix=["__",namespace,"__"].join("");this.ttlKey="__ttl__";this.keyMatcher=new RegExp("^"+_.escapeRegExChars(this.prefix));}
if(ls&&window.JSON){methods={_prefix:function(key){return this.prefix+key;},_ttlKey:function(key){return this._prefix(key)+this.ttlKey;},get:function(key){if(this.isExpired(key)){this.remove(key);}
return decode(ls.getItem(this._prefix(key)));},set:function(key,val,ttl){if(_.isNumber(ttl)){ls.setItem(this._ttlKey(key),encode(now()+ttl));}else{ls.removeItem(this._ttlKey(key));}
return ls.setItem(this._prefix(key),encode(val));},remove:function(key){ls.removeItem(this._ttlKey(key));ls.removeItem(this._prefix(key));return this;},clear:function(){var i,key,keys=[],len=ls.length;for(i=0;i<len;i++){if((key=ls.key(i)).match(this.keyMatcher)){keys.push(key.replace(this.keyMatcher,""));}}
for(i=keys.length;i--;){this.remove(keys[i]);}
return this;},isExpired:function(key){var ttl=decode(ls.getItem(this._ttlKey(key)));return _.isNumber(ttl)&&now()>ttl?true:false;}};}else{methods={get:_.noop,set:_.noop,remove:_.noop,clear:_.noop,isExpired:_.noop};}
_.mixin(PersistentStorage.prototype,methods);return PersistentStorage;function now(){return new Date().getTime();}
function encode(val){return JSON.stringify(_.isUndefined(val)?null:val);}
function decode(val){return JSON.parse(val);}}();var Transport=function(){"use strict";var pendingRequestsCount=0,pendingRequests={},maxPendingRequests=6,sharedCache=new LruCache(10);function Transport(o){o=o||{};this.cancelled=false;this.lastUrl=null;this._send=o.transport?callbackToDeferred(o.transport):$.ajax;this._get=o.rateLimiter?o.rateLimiter(this._get):this._get;this._cache=o.cache===false?new LruCache(0):sharedCache;}
Transport.setMaxPendingRequests=function setMaxPendingRequests(num){maxPendingRequests=num;};Transport.resetCache=function resetCache(){sharedCache.reset();};_.mixin(Transport.prototype,{_get:function(url,o,cb){var that=this,jqXhr;if(this.cancelled||url!==this.lastUrl){return;}
if(jqXhr=pendingRequests[url]){jqXhr.done(done).fail(fail);}else if(pendingRequestsCount<maxPendingRequests){pendingRequestsCount++;pendingRequests[url]=this._send(url,o).done(done).fail(fail).always(always);}else{this.onDeckRequestArgs=[].slice.call(arguments,0);}
function done(resp){cb&&cb(null,resp);that._cache.set(url,resp);}
function fail(){cb&&cb(true);}
function always(){pendingRequestsCount--;delete pendingRequests[url];if(that.onDeckRequestArgs){that._get.apply(that,that.onDeckRequestArgs);that.onDeckRequestArgs=null;}}},get:function(url,o,cb){var resp;if(_.isFunction(o)){cb=o;o={};}
this.cancelled=false;this.lastUrl=url;if(resp=this._cache.get(url)){_.defer(function(){cb&&cb(null,resp);});}else{this._get(url,o,cb);}
return!!resp;},cancel:function(){this.cancelled=true;}});return Transport;function callbackToDeferred(fn){return function customSendWrapper(url,o){var deferred=$.Deferred();fn(url,o,onSuccess,onError);return deferred;function onSuccess(resp){_.defer(function(){deferred.resolve(resp);});}
function onError(err){_.defer(function(){deferred.reject(err);});}};}}();var SearchIndex=function(){"use strict";function SearchIndex(o){o=o||{};if(!o.datumTokenizer||!o.queryTokenizer){$.error("datumTokenizer and queryTokenizer are both required");}
this.datumTokenizer=o.datumTokenizer;this.queryTokenizer=o.queryTokenizer;this.reset();}
_.mixin(SearchIndex.prototype,{bootstrap:function bootstrap(o){this.datums=o.datums;this.trie=o.trie;},add:function(data){var that=this;data=_.isArray(data)?data:[data];_.each(data,function(datum){var id,tokens;id=that.datums.push(datum)-1;tokens=normalizeTokens(that.datumTokenizer(datum));_.each(tokens,function(token){var node,chars,ch;node=that.trie;chars=token.split("");while(ch=chars.shift()){node=node.children[ch]||(node.children[ch]=newNode());node.ids.push(id);}});});},get:function get(query){var that=this,tokens,matches;tokens=normalizeTokens(this.queryTokenizer(query));_.each(tokens,function(token){var node,chars,ch,ids;if(matches&&matches.length===0){return false;}
node=that.trie;chars=token.split("");while(node&&(ch=chars.shift())){node=node.children[ch];}
if(node&&chars.length===0){ids=node.ids.slice(0);matches=matches?getIntersection(matches,ids):ids;}else{matches=[];return false;}});return matches?_.map(unique(matches),function(id){return that.datums[id];}):[];},reset:function reset(){this.datums=[];this.trie=newNode();},serialize:function serialize(){return{datums:this.datums,trie:this.trie};}});return SearchIndex;function normalizeTokens(tokens){tokens=_.filter(tokens,function(token){return!!token;});tokens=_.map(tokens,function(token){return token.toLowerCase();});return tokens;}
function newNode(){return{ids:[],children:{}};}
function unique(array){var seen={},uniques=[];for(var i=0,len=array.length;i<len;i++){if(!seen[array[i]]){seen[array[i]]=true;uniques.push(array[i]);}}
return uniques;}
function getIntersection(arrayA,arrayB){var ai=0,bi=0,intersection=[];arrayA=arrayA.sort(compare);arrayB=arrayB.sort(compare);var lenArrayA=arrayA.length,lenArrayB=arrayB.length;while(ai<lenArrayA&&bi<lenArrayB){if(arrayA[ai]<arrayB[bi]){ai++;}else if(arrayA[ai]>arrayB[bi]){bi++;}else{intersection.push(arrayA[ai]);ai++;bi++;}}
return intersection;function compare(a,b){return a-b;}}}();var oParser=function(){"use strict";return{local:getLocal,prefetch:getPrefetch,remote:getRemote};function getLocal(o){return o.local||null;}
function getPrefetch(o){var prefetch,defaults;defaults={url:null,thumbprint:"",ttl:24*60*60*1e3,filter:null,ajax:{}};if(prefetch=o.prefetch||null){prefetch=_.isString(prefetch)?{url:prefetch}:prefetch;prefetch=_.mixin(defaults,prefetch);prefetch.thumbprint=VERSION+prefetch.thumbprint;prefetch.ajax.type=prefetch.ajax.type||"GET";prefetch.ajax.dataType=prefetch.ajax.dataType||"json";!prefetch.url&&$.error("prefetch requires url to be set");}
return prefetch;}
function getRemote(o){var remote,defaults;defaults={url:null,cache:true,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}};if(remote=o.remote||null){remote=_.isString(remote)?{url:remote}:remote;remote=_.mixin(defaults,remote);remote.rateLimiter=/^throttle$/i.test(remote.rateLimitBy)?byThrottle(remote.rateLimitWait):byDebounce(remote.rateLimitWait);remote.ajax.type=remote.ajax.type||"GET";remote.ajax.dataType=remote.ajax.dataType||"json";delete remote.rateLimitBy;delete remote.rateLimitWait;!remote.url&&$.error("remote requires url to be set");}
return remote;function byDebounce(wait){return function(fn){return _.debounce(fn,wait);};}
function byThrottle(wait){return function(fn){return _.throttle(fn,wait);};}}}();(function(root){"use strict";var old,keys;old=root.Bloodhound;keys={data:"data",protocol:"protocol",thumbprint:"thumbprint"};root.Bloodhound=Bloodhound;function Bloodhound(o){if(!o||!o.local&&!o.prefetch&&!o.remote){$.error("one of local, prefetch, or remote is required");}
this.limit=o.limit||5;this.sorter=getSorter(o.sorter);this.dupDetector=o.dupDetector||ignoreDuplicates;this.local=oParser.local(o);this.prefetch=oParser.prefetch(o);this.remote=oParser.remote(o);this.cacheKey=this.prefetch?this.prefetch.cacheKey||this.prefetch.url:null;this.index=new SearchIndex({datumTokenizer:o.datumTokenizer,queryTokenizer:o.queryTokenizer});this.storage=this.cacheKey?new PersistentStorage(this.cacheKey):null;}
Bloodhound.noConflict=function noConflict(){root.Bloodhound=old;return Bloodhound;};Bloodhound.tokenizers=tokenizers;_.mixin(Bloodhound.prototype,{_loadPrefetch:function loadPrefetch(o){var that=this,serialized,deferred;if(serialized=this._readFromStorage(o.thumbprint)){this.index.bootstrap(serialized);deferred=$.Deferred().resolve();}else{deferred=$.ajax(o.url,o.ajax).done(handlePrefetchResponse);}
return deferred;function handlePrefetchResponse(resp){that.clear();that.add(o.filter?o.filter(resp):resp);that._saveToStorage(that.index.serialize(),o.thumbprint,o.ttl);}},_getFromRemote:function getFromRemote(query,cb){var that=this,url,uriEncodedQuery;if(!this.transport){return;}
query=query||"";uriEncodedQuery=encodeURIComponent(query);url=this.remote.replace?this.remote.replace(this.remote.url,query):this.remote.url.replace(this.remote.wildcard,uriEncodedQuery);return this.transport.get(url,this.remote.ajax,handleRemoteResponse);function handleRemoteResponse(err,resp){err?cb([]):cb(that.remote.filter?that.remote.filter(resp):resp);}},_cancelLastRemoteRequest:function cancelLastRemoteRequest(){this.transport&&this.transport.cancel();},_saveToStorage:function saveToStorage(data,thumbprint,ttl){if(this.storage){this.storage.set(keys.data,data,ttl);this.storage.set(keys.protocol,location.protocol,ttl);this.storage.set(keys.thumbprint,thumbprint,ttl);}},_readFromStorage:function readFromStorage(thumbprint){var stored={},isExpired;if(this.storage){stored.data=this.storage.get(keys.data);stored.protocol=this.storage.get(keys.protocol);stored.thumbprint=this.storage.get(keys.thumbprint);}
isExpired=stored.thumbprint!==thumbprint||stored.protocol!==location.protocol;return stored.data&&!isExpired?stored.data:null;},_initialize:function initialize(){var that=this,local=this.local,deferred;deferred=this.prefetch?this._loadPrefetch(this.prefetch):$.Deferred().resolve();local&&deferred.done(addLocalToIndex);this.transport=this.remote?new Transport(this.remote):null;return this.initPromise=deferred.promise();function addLocalToIndex(){that.add(_.isFunction(local)?local():local);}},initialize:function initialize(force){return!this.initPromise||force?this._initialize():this.initPromise;},add:function add(data){this.index.add(data);},get:function get(query,cb){var that=this,matches=[],cacheHit=false;matches=this.index.get(query);matches=this.sorter(matches).slice(0,this.limit);matches.length<this.limit?cacheHit=this._getFromRemote(query,returnRemoteMatches):this._cancelLastRemoteRequest();if(!cacheHit){(matches.length>0||!this.transport)&&cb&&cb(matches);}
function returnRemoteMatches(remoteMatches){var matchesWithBackfill=matches.slice(0);_.each(remoteMatches,function(remoteMatch){var isDuplicate;isDuplicate=_.some(matchesWithBackfill,function(match){return that.dupDetector(remoteMatch,match);});!isDuplicate&&matchesWithBackfill.push(remoteMatch);return matchesWithBackfill.length<that.limit;});cb&&cb(that.sorter(matchesWithBackfill));}},clear:function clear(){this.index.reset();},clearPrefetchCache:function clearPrefetchCache(){this.storage&&this.storage.clear();},clearRemoteCache:function clearRemoteCache(){this.transport&&Transport.resetCache();},ttAdapter:function ttAdapter(){return _.bind(this.get,this);}});return Bloodhound;function getSorter(sortFn){return _.isFunction(sortFn)?sort:noSort;function sort(array){return array.sort(sortFn);}
function noSort(array){return array;}}
function ignoreDuplicates(){return false;}})(this);var html=function(){return{wrapper:'<span class="twitter-typeahead"></span>',dropdown:'<span class="tt-dropdown-menu"></span>',dataset:'<div class="tt-dataset-%CLASS%"></div>',suggestions:'<span class="tt-suggestions"></span>',suggestion:'<div class="tt-suggestion"></div>'};}();var css=function(){"use strict";var css={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};if(_.isMsie()){_.mixin(css.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"});}
if(_.isMsie()&&_.isMsie()<=7){_.mixin(css.input,{marginTop:"-1px"});}
return css;}();var EventBus=function(){"use strict";var namespace="typeahead:";function EventBus(o){if(!o||!o.el){$.error("EventBus initialized without el");}
this.$el=$(o.el);}
_.mixin(EventBus.prototype,{trigger:function(type){var args=[].slice.call(arguments,1);this.$el.trigger(namespace+type,args);}});return EventBus;}();var EventEmitter=function(){"use strict";var splitter=/\s+/,nextTick=getNextTick();return{onSync:onSync,onAsync:onAsync,off:off,trigger:trigger};function on(method,types,cb,context){var type;if(!cb){return this;}
types=types.split(splitter);cb=context?bindContext(cb,context):cb;this._callbacks=this._callbacks||{};while(type=types.shift()){this._callbacks[type]=this._callbacks[type]||{sync:[],async:[]};this._callbacks[type][method].push(cb);}
return this;}
function onAsync(types,cb,context){return on.call(this,"async",types,cb,context);}
function onSync(types,cb,context){return on.call(this,"sync",types,cb,context);}
function off(types){var type;if(!this._callbacks){return this;}
types=types.split(splitter);while(type=types.shift()){delete this._callbacks[type];}
return this;}
function trigger(types){var type,callbacks,args,syncFlush,asyncFlush;if(!this._callbacks){return this;}
types=types.split(splitter);args=[].slice.call(arguments,1);while((type=types.shift())&&(callbacks=this._callbacks[type])){syncFlush=getFlush(callbacks.sync,this,[type].concat(args));asyncFlush=getFlush(callbacks.async,this,[type].concat(args));syncFlush()&&nextTick(asyncFlush);}
return this;}
function getFlush(callbacks,context,args){return flush;function flush(){var cancelled;for(var i=0,len=callbacks.length;!cancelled&&i<len;i+=1){cancelled=callbacks[i].apply(context,args)===false;}
return!cancelled;}}
function getNextTick(){var nextTickFn;if(window.setImmediate){nextTickFn=function nextTickSetImmediate(fn){setImmediate(function(){fn();});};}else{nextTickFn=function nextTickSetTimeout(fn){setTimeout(function(){fn();},0);};}
return nextTickFn;}
function bindContext(fn,context){return fn.bind?fn.bind(context):function(){fn.apply(context,[].slice.call(arguments,0));};}}();var highlight=function(doc){"use strict";var defaults={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:false,caseSensitive:false};return function hightlight(o){var regex;o=_.mixin({},defaults,o);if(!o.node||!o.pattern){return;}
o.pattern=_.isArray(o.pattern)?o.pattern:[o.pattern];regex=getRegex(o.pattern,o.caseSensitive,o.wordsOnly);traverse(o.node,hightlightTextNode);function hightlightTextNode(textNode){var match,patternNode,wrapperNode;if(match=regex.exec(textNode.data)){wrapperNode=doc.createElement(o.tagName);o.className&&(wrapperNode.className=o.className);patternNode=textNode.splitText(match.index);patternNode.splitText(match[0].length);wrapperNode.appendChild(patternNode.cloneNode(true));textNode.parentNode.replaceChild(wrapperNode,patternNode);}
return!!match;}
function traverse(el,hightlightTextNode){var childNode,TEXT_NODE_TYPE=3;for(var i=0;i<el.childNodes.length;i++){childNode=el.childNodes[i];if(childNode.nodeType===TEXT_NODE_TYPE){i+=hightlightTextNode(childNode)?1:0;}else{traverse(childNode,hightlightTextNode);}}}};function getRegex(patterns,caseSensitive,wordsOnly){var escapedPatterns=[],regexStr;for(var i=0,len=patterns.length;i<len;i++){escapedPatterns.push(_.escapeRegExChars(patterns[i]));}
regexStr=wordsOnly?"\\b("+escapedPatterns.join("|")+")\\b":"("+escapedPatterns.join("|")+")";return caseSensitive?new RegExp(regexStr):new RegExp(regexStr,"i");}}(window.document);var Input=function(){"use strict";var specialKeyCodeMap;specialKeyCodeMap={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"};function Input(o){var that=this,onBlur,onFocus,onKeydown,onInput;o=o||{};if(!o.input){$.error("input is missing");}
onBlur=_.bind(this._onBlur,this);onFocus=_.bind(this._onFocus,this);onKeydown=_.bind(this._onKeydown,this);onInput=_.bind(this._onInput,this);this.$hint=$(o.hint);this.$input=$(o.input).on("blur.tt",onBlur).on("focus.tt",onFocus).on("keydown.tt",onKeydown);if(this.$hint.length===0){this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=_.noop;}
if(!_.isMsie()){this.$input.on("input.tt",onInput);}else{this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function($e){if(specialKeyCodeMap[$e.which||$e.keyCode]){return;}
_.defer(_.bind(that._onInput,that,$e));});}
this.query=this.$input.val();this.$overflowHelper=buildOverflowHelper(this.$input);}
Input.normalizeQuery=function(str){return(str||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ");};_.mixin(Input.prototype,EventEmitter,{_onBlur:function onBlur(){this.resetInputValue();this.trigger("blurred");},_onFocus:function onFocus(){this.trigger("focused");},_onKeydown:function onKeydown($e){var keyName=specialKeyCodeMap[$e.which||$e.keyCode];this._managePreventDefault(keyName,$e);if(keyName&&this._shouldTrigger(keyName,$e)){this.trigger(keyName+"Keyed",$e);}},_onInput:function onInput(){this._checkInputValue();},_managePreventDefault:function managePreventDefault(keyName,$e){var preventDefault,hintValue,inputValue;switch(keyName){case"tab":hintValue=this.getHint();inputValue=this.getInputValue();preventDefault=hintValue&&hintValue!==inputValue&&!withModifier($e);break;case"up":case"down":preventDefault=!withModifier($e);break;default:preventDefault=false;}
preventDefault&&$e.preventDefault();},_shouldTrigger:function shouldTrigger(keyName,$e){var trigger;switch(keyName){case"tab":trigger=!withModifier($e);break;default:trigger=true;}
return trigger;},_checkInputValue:function checkInputValue(){var inputValue,areEquivalent,hasDifferentWhitespace;inputValue=this.getInputValue();areEquivalent=areQueriesEquivalent(inputValue,this.query);hasDifferentWhitespace=areEquivalent?this.query.length!==inputValue.length:false;this.query=inputValue;if(!areEquivalent){this.trigger("queryChanged",this.query);}else if(hasDifferentWhitespace){this.trigger("whitespaceChanged",this.query);}},focus:function focus(){this.$input.focus();},blur:function blur(){this.$input.blur();},getQuery:function getQuery(){return this.query;},setQuery:function setQuery(query){this.query=query;},getInputValue:function getInputValue(){return this.$input.val();},setInputValue:function setInputValue(value,silent){this.$input.val(value);silent?this.clearHint():this._checkInputValue();},resetInputValue:function resetInputValue(){this.setInputValue(this.query,true);},getHint:function getHint(){return this.$hint.val();},setHint:function setHint(value){this.$hint.val(value);},clearHint:function clearHint(){this.setHint("");},clearHintIfInvalid:function clearHintIfInvalid(){var val,hint,valIsPrefixOfHint,isValid;val=this.getInputValue();hint=this.getHint();valIsPrefixOfHint=val!==hint&&hint.indexOf(val)===0;isValid=val!==""&&valIsPrefixOfHint&&!this.hasOverflow();!isValid&&this.clearHint();},getLanguageDirection:function getLanguageDirection(){return(this.$input.css("direction")||"ltr").toLowerCase();},hasOverflow:function hasOverflow(){var constraint=this.$input.width()-2;this.$overflowHelper.text(this.getInputValue());return this.$overflowHelper.width()>=constraint;},isCursorAtEnd:function(){var valueLength,selectionStart,range;valueLength=this.$input.val().length;selectionStart=this.$input[0].selectionStart;if(_.isNumber(selectionStart)){return selectionStart===valueLength;}else if(document.selection){range=document.selection.createRange();range.moveStart("character",-valueLength);return valueLength===range.text.length;}
return true;},destroy:function destroy(){this.$hint.off(".tt");this.$input.off(".tt");this.$hint=this.$input=this.$overflowHelper=null;}});return Input;function buildOverflowHelper($input){return $('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:$input.css("font-family"),fontSize:$input.css("font-size"),fontStyle:$input.css("font-style"),fontVariant:$input.css("font-variant"),fontWeight:$input.css("font-weight"),wordSpacing:$input.css("word-spacing"),letterSpacing:$input.css("letter-spacing"),textIndent:$input.css("text-indent"),textRendering:$input.css("text-rendering"),textTransform:$input.css("text-transform")}).insertAfter($input);}
function areQueriesEquivalent(a,b){return Input.normalizeQuery(a)===Input.normalizeQuery(b);}
function withModifier($e){return $e.altKey||$e.ctrlKey||$e.metaKey||$e.shiftKey;}}();var Dataset=function(){"use strict";var datasetKey="ttDataset",valueKey="ttValue",datumKey="ttDatum";function Dataset(o){o=o||{};o.templates=o.templates||{};if(!o.source){$.error("missing source");}
if(o.name&&!isValidName(o.name)){$.error("invalid dataset name: "+o.name);}
this.query=null;this.highlight=!!o.highlight;this.name=o.name||_.getUniqueId();this.source=o.source;this.displayFn=getDisplayFn(o.display||o.displayKey);this.templates=getTemplates(o.templates,this.displayFn);this.$el=$(html.dataset.replace("%CLASS%",this.name));}
Dataset.extractDatasetName=function extractDatasetName(el){return $(el).data(datasetKey);};Dataset.extractValue=function extractDatum(el){return $(el).data(valueKey);};Dataset.extractDatum=function extractDatum(el){return $(el).data(datumKey);};_.mixin(Dataset.prototype,EventEmitter,{_render:function render(query,suggestions){if(!this.$el){return;}
var that=this,hasSuggestions;this.$el.empty();hasSuggestions=suggestions&&suggestions.length;if(!hasSuggestions&&this.templates.empty){this.$el.html(getEmptyHtml()).prepend(that.templates.header?getHeaderHtml():null).append(that.templates.footer?getFooterHtml():null);}else if(hasSuggestions){this.$el.html(getSuggestionsHtml()).prepend(that.templates.header?getHeaderHtml():null).append(that.templates.footer?getFooterHtml():null);}
this.trigger("rendered");function getEmptyHtml(){return that.templates.empty({query:query,isEmpty:true});}
function getSuggestionsHtml(){var $suggestions,nodes;$suggestions=$(html.suggestions).css(css.suggestions);nodes=_.map(suggestions,getSuggestionNode);$suggestions.append.apply($suggestions,nodes);that.highlight&&highlight({className:"tt-highlight",node:$suggestions[0],pattern:query});return $suggestions;function getSuggestionNode(suggestion){var $el;$el=$(html.suggestion).append(that.templates.suggestion(suggestion)).data(datasetKey,that.name).data(valueKey,that.displayFn(suggestion)).data(datumKey,suggestion);$el.children().each(function(){$(this).css(css.suggestionChild);});return $el;}}
function getHeaderHtml(){return that.templates.header({query:query,isEmpty:!hasSuggestions});}
function getFooterHtml(){return that.templates.footer({query:query,isEmpty:!hasSuggestions});}},getRoot:function getRoot(){return this.$el;},update:function update(query){var that=this;this.query=query;this.canceled=false;this.source(query,render);function render(suggestions){if(!that.canceled&&query===that.query){that._render(query,suggestions);}}},cancel:function cancel(){this.canceled=true;},clear:function clear(){this.cancel();this.$el.empty();this.trigger("rendered");},isEmpty:function isEmpty(){return this.$el.is(":empty");},destroy:function destroy(){this.$el=null;}});return Dataset;function getDisplayFn(display){display=display||"value";return _.isFunction(display)?display:displayFn;function displayFn(obj){return obj[display];}}
function getTemplates(templates,displayFn){return{empty:templates.empty&&_.templatify(templates.empty),header:templates.header&&_.templatify(templates.header),footer:templates.footer&&_.templatify(templates.footer),suggestion:templates.suggestion||suggestionTemplate};function suggestionTemplate(context){return"<p>"+displayFn(context)+"</p>";}}
function isValidName(str){return/^[_a-zA-Z0-9-]+$/.test(str);}}();var Dropdown=function(){"use strict";function Dropdown(o){var that=this,onSuggestionClick,onSuggestionMouseEnter,onSuggestionMouseLeave;o=o||{};if(!o.menu){$.error("menu is required");}
this.isOpen=false;this.isEmpty=true;this.datasets=_.map(o.datasets,initializeDataset);onSuggestionClick=_.bind(this._onSuggestionClick,this);onSuggestionMouseEnter=_.bind(this._onSuggestionMouseEnter,this);onSuggestionMouseLeave=_.bind(this._onSuggestionMouseLeave,this);this.$menu=$(o.menu).on("click.tt",".tt-suggestion",onSuggestionClick).on("mouseenter.tt",".tt-suggestion",onSuggestionMouseEnter).on("mouseleave.tt",".tt-suggestion",onSuggestionMouseLeave);_.each(this.datasets,function(dataset){that.$menu.append(dataset.getRoot());dataset.onSync("rendered",that._onRendered,that);});}
_.mixin(Dropdown.prototype,EventEmitter,{_onSuggestionClick:function onSuggestionClick($e){this.trigger("suggestionClicked",$($e.currentTarget));},_onSuggestionMouseEnter:function onSuggestionMouseEnter($e){this._removeCursor();this._setCursor($($e.currentTarget),true);},_onSuggestionMouseLeave:function onSuggestionMouseLeave(){this._removeCursor();},_onRendered:function onRendered(){this.isEmpty=_.every(this.datasets,isDatasetEmpty);this.isEmpty?this._hide():this.isOpen&&this._show();this.trigger("datasetRendered");function isDatasetEmpty(dataset){return dataset.isEmpty();}},_hide:function(){this.$menu.hide();},_show:function(){this.$menu.css("display","block");},_getSuggestions:function getSuggestions(){return this.$menu.find(".tt-suggestion");},_getCursor:function getCursor(){return this.$menu.find(".tt-cursor").first();},_setCursor:function setCursor($el,silent){$el.first().addClass("tt-cursor");!silent&&this.trigger("cursorMoved");},_removeCursor:function removeCursor(){this._getCursor().removeClass("tt-cursor");},_moveCursor:function moveCursor(increment){var $suggestions,$oldCursor,newCursorIndex,$newCursor;if(!this.isOpen){return;}
$oldCursor=this._getCursor();$suggestions=this._getSuggestions();this._removeCursor();newCursorIndex=$suggestions.index($oldCursor)+increment;newCursorIndex=(newCursorIndex+1)%($suggestions.length+1)-1;if(newCursorIndex===-1){this.trigger("cursorRemoved");return;}else if(newCursorIndex<-1){newCursorIndex=$suggestions.length-1;}
this._setCursor($newCursor=$suggestions.eq(newCursorIndex));this._ensureVisible($newCursor);},_ensureVisible:function ensureVisible($el){var elTop,elBottom,menuScrollTop,menuHeight;elTop=$el.position().top;elBottom=elTop+$el.outerHeight(true);menuScrollTop=this.$menu.scrollTop();menuHeight=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10);if(elTop<0){this.$menu.scrollTop(menuScrollTop+elTop);}else if(menuHeight<elBottom){this.$menu.scrollTop(menuScrollTop+(elBottom-menuHeight));}},close:function close(){if(this.isOpen){this.isOpen=false;this._removeCursor();this._hide();this.trigger("closed");}},open:function open(){if(!this.isOpen){this.isOpen=true;!this.isEmpty&&this._show();this.trigger("opened");}},setLanguageDirection:function setLanguageDirection(dir){this.$menu.css(dir==="ltr"?css.ltr:css.rtl);},moveCursorUp:function moveCursorUp(){this._moveCursor(-1);},moveCursorDown:function moveCursorDown(){this._moveCursor(+1);},getDatumForSuggestion:function getDatumForSuggestion($el){var datum=null;if($el.length){datum={raw:Dataset.extractDatum($el),value:Dataset.extractValue($el),datasetName:Dataset.extractDatasetName($el)};}
return datum;},getDatumForCursor:function getDatumForCursor(){return this.getDatumForSuggestion(this._getCursor().first());},getDatumForTopSuggestion:function getDatumForTopSuggestion(){return this.getDatumForSuggestion(this._getSuggestions().first());},update:function update(query){_.each(this.datasets,updateDataset);function updateDataset(dataset){dataset.update(query);}},empty:function empty(){_.each(this.datasets,clearDataset);this.isEmpty=true;function clearDataset(dataset){dataset.clear();}},isVisible:function isVisible(){return this.isOpen&&!this.isEmpty;},destroy:function destroy(){this.$menu.off(".tt");this.$menu=null;_.each(this.datasets,destroyDataset);function destroyDataset(dataset){dataset.destroy();}}});return Dropdown;function initializeDataset(oDataset){return new Dataset(oDataset);}}();var Typeahead=function(){"use strict";var attrsKey="ttAttrs";function Typeahead(o){var $menu,$input,$hint;o=o||{};if(!o.input){$.error("missing input");}
this.isActivated=false;this.autoselect=!!o.autoselect;this.minLength=_.isNumber(o.minLength)?o.minLength:1;this.$node=buildDom(o.input,o.withHint);$menu=this.$node.find(".tt-dropdown-menu");$input=this.$node.find(".tt-input");$hint=this.$node.find(".tt-hint");$input.on("blur.tt",function($e){var active,isActive,hasActive;active=document.activeElement;isActive=$menu.is(active);hasActive=$menu.has(active).length>0;if(_.isMsie()&&(isActive||hasActive)){$e.preventDefault();$e.stopImmediatePropagation();_.defer(function(){$input.focus();});}});$menu.on("mousedown.tt",function($e){$e.preventDefault();});this.eventBus=o.eventBus||new EventBus({el:$input});this.dropdown=new Dropdown({menu:$menu,datasets:o.datasets}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onAsync("datasetRendered",this._onDatasetRendered,this);this.input=new Input({input:$input,hint:$hint}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this);this._setLanguageDirection();}
_.mixin(Typeahead.prototype,{_onSuggestionClicked:function onSuggestionClicked(type,$el){var datum;if(datum=this.dropdown.getDatumForSuggestion($el)){this._select(datum);}},_onCursorMoved:function onCursorMoved(){var datum=this.dropdown.getDatumForCursor();this.input.setInputValue(datum.value,true);this.eventBus.trigger("cursorchanged",datum.raw,datum.datasetName);},_onCursorRemoved:function onCursorRemoved(){this.input.resetInputValue();this._updateHint();},_onDatasetRendered:function onDatasetRendered(){this._updateHint();},_onOpened:function onOpened(){this._updateHint();this.eventBus.trigger("opened");},_onClosed:function onClosed(){this.input.clearHint();this.eventBus.trigger("closed");},_onFocused:function onFocused(){this.isActivated=true;this.dropdown.open();},_onBlurred:function onBlurred(){this.isActivated=false;this.dropdown.empty();this.dropdown.close();},_onEnterKeyed:function onEnterKeyed(type,$e){var cursorDatum,topSuggestionDatum;cursorDatum=this.dropdown.getDatumForCursor();topSuggestionDatum=this.dropdown.getDatumForTopSuggestion();if(cursorDatum){this._select(cursorDatum);$e.preventDefault();}else if(this.autoselect&&topSuggestionDatum){this._select(topSuggestionDatum);$e.preventDefault();}},_onTabKeyed:function onTabKeyed(type,$e){var datum;if(datum=this.dropdown.getDatumForCursor()){this._select(datum);$e.preventDefault();}else{this._autocomplete(true);}},_onEscKeyed:function onEscKeyed(){this.dropdown.close();this.input.resetInputValue();},_onUpKeyed:function onUpKeyed(){var query=this.input.getQuery();this.dropdown.isEmpty&&query.length>=this.minLength?this.dropdown.update(query):this.dropdown.moveCursorUp();this.dropdown.open();},_onDownKeyed:function onDownKeyed(){var query=this.input.getQuery();this.dropdown.isEmpty&&query.length>=this.minLength?this.dropdown.update(query):this.dropdown.moveCursorDown();this.dropdown.open();},_onLeftKeyed:function onLeftKeyed(){this.dir==="rtl"&&this._autocomplete();},_onRightKeyed:function onRightKeyed(){this.dir==="ltr"&&this._autocomplete();},_onQueryChanged:function onQueryChanged(e,query){this.input.clearHintIfInvalid();query.length>=this.minLength?this.dropdown.update(query):this.dropdown.empty();this.dropdown.open();this._setLanguageDirection();},_onWhitespaceChanged:function onWhitespaceChanged(){this._updateHint();this.dropdown.open();},_setLanguageDirection:function setLanguageDirection(){var dir;if(this.dir!==(dir=this.input.getLanguageDirection())){this.dir=dir;this.$node.css("direction",dir);this.dropdown.setLanguageDirection(dir);}},_updateHint:function updateHint(){var datum,val,query,escapedQuery,frontMatchRegEx,match;datum=this.dropdown.getDatumForTopSuggestion();if(datum&&this.dropdown.isVisible()&&!this.input.hasOverflow()){val=this.input.getInputValue();query=Input.normalizeQuery(val);escapedQuery=_.escapeRegExChars(query);frontMatchRegEx=new RegExp("^(?:"+escapedQuery+")(.+$)","i");match=frontMatchRegEx.exec(datum.value);match?this.input.setHint(val+match[1]):this.input.clearHint();}else{this.input.clearHint();}},_autocomplete:function autocomplete(laxCursor){var hint,query,isCursorAtEnd,datum;hint=this.input.getHint();query=this.input.getQuery();isCursorAtEnd=laxCursor||this.input.isCursorAtEnd();if(hint&&query!==hint&&isCursorAtEnd){datum=this.dropdown.getDatumForTopSuggestion();datum&&this.input.setInputValue(datum.value);this.eventBus.trigger("autocompleted",datum.raw,datum.datasetName);}},_select:function select(datum){this.input.setQuery(datum.value);this.input.setInputValue(datum.value,true);this._setLanguageDirection();this.eventBus.trigger("selected",datum.raw,datum.datasetName);this.dropdown.close();_.defer(_.bind(this.dropdown.empty,this.dropdown));},open:function open(){this.dropdown.open();},close:function close(){this.dropdown.close();},setVal:function setVal(val){val=_.toStr(val);if(this.isActivated){this.input.setInputValue(val);}else{this.input.setQuery(val);this.input.setInputValue(val,true);}
this._setLanguageDirection();},getVal:function getVal(){return this.input.getQuery();},destroy:function destroy(){this.input.destroy();this.dropdown.destroy();destroyDomStructure(this.$node);this.$node=null;}});return Typeahead;function buildDom(input,withHint){var $input,$wrapper,$dropdown,$hint;$input=$(input);$wrapper=$(html.wrapper).css(css.wrapper);$dropdown=$(html.dropdown).css(css.dropdown);$hint=$input.clone().css(css.hint).css(getBackgroundStyles($input));$hint.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly",true).attr({autocomplete:"off",spellcheck:"false",tabindex:-1});$input.data(attrsKey,{dir:$input.attr("dir"),autocomplete:$input.attr("autocomplete"),spellcheck:$input.attr("spellcheck"),style:$input.attr("style")});$input.addClass("tt-input").attr({autocomplete:"off",spellcheck:false}).css(withHint?css.input:css.inputWithNoHint);try{!$input.attr("dir")&&$input.attr("dir","auto");}catch(e){}
return $input.wrap($wrapper).parent().prepend(withHint?$hint:null).append($dropdown);}
function getBackgroundStyles($el){return{backgroundAttachment:$el.css("background-attachment"),backgroundClip:$el.css("background-clip"),backgroundColor:$el.css("background-color"),backgroundImage:$el.css("background-image"),backgroundOrigin:$el.css("background-origin"),backgroundPosition:$el.css("background-position"),backgroundRepeat:$el.css("background-repeat"),backgroundSize:$el.css("background-size")};}
function destroyDomStructure($node){var $input=$node.find(".tt-input");_.each($input.data(attrsKey),function(val,key){_.isUndefined(val)?$input.removeAttr(key):$input.attr(key,val);});$input.detach().removeData(attrsKey).removeClass("tt-input").insertAfter($node);$node.remove();}}();(function(){"use strict";var old,typeaheadKey,methods;old=$.fn.typeahead;typeaheadKey="ttTypeahead";methods={initialize:function initialize(o,datasets){datasets=_.isArray(datasets)?datasets:[].slice.call(arguments,1);o=o||{};return this.each(attach);function attach(){var $input=$(this),eventBus,typeahead;_.each(datasets,function(d){d.highlight=!!o.highlight;});typeahead=new Typeahead({input:$input,eventBus:eventBus=new EventBus({el:$input}),withHint:_.isUndefined(o.hint)?true:!!o.hint,minLength:o.minLength,autoselect:o.autoselect,datasets:datasets});$input.data(typeaheadKey,typeahead);}},open:function open(){return this.each(openTypeahead);function openTypeahead(){var $input=$(this),typeahead;if(typeahead=$input.data(typeaheadKey)){typeahead.open();}}},close:function close(){return this.each(closeTypeahead);function closeTypeahead(){var $input=$(this),typeahead;if(typeahead=$input.data(typeaheadKey)){typeahead.close();}}},val:function val(newVal){return!arguments.length?getVal(this.first()):this.each(setVal);function setVal(){var $input=$(this),typeahead;if(typeahead=$input.data(typeaheadKey)){typeahead.setVal(newVal);}}
function getVal($input){var typeahead,query;if(typeahead=$input.data(typeaheadKey)){query=typeahead.getVal();}
return query;}},destroy:function destroy(){return this.each(unattach);function unattach(){var $input=$(this),typeahead;if(typeahead=$input.data(typeaheadKey)){typeahead.destroy();$input.removeData(typeaheadKey);}}}};$.fn.typeahead=function(method){var tts;if(methods[method]&&method!=="initialize"){tts=this.filter(function(){return!!$(this).data(typeaheadKey);});return methods[method].apply(tts,[].slice.call(arguments,1));}else{return methods.initialize.apply(this,arguments);}};$.fn.typeahead.noConflict=function noConflict(){$.fn.typeahead=old;return this;};})();})(window.jQuery);