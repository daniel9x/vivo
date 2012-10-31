/*! idTabs v3.0 ~ Sean Catchpole - Copyright 2010 MIT/GPL */
(function(d){var b,e,a=function(f){return d(f).attr("href")},c=function(f){return f===null&&"Null"||f===e&&"Undefined"||({}).toString.call(f).slice(8,-1)};d.fn.idTabs=function(){var f=b.args.apply(this,arguments),g=f.update&&"update"||f.remove&&"remove"||"bind";f.area=this;b[g](f);return this};b=d.idTabs=function(f,n,g){var h,k,j,i=d(),l=d.metadata?d(f).metadata():{},m={tab:b.tab,item:b.item};m=d.extend(m,b.settings,l,n||{});m.tabarea=d(f);m.data=g||"idTabs"+ +new Date;d.each({selected:".",event:"!",start:"#"},function(p,o){if(c(m[p])=="String"&&m[p].indexOf(o)==0){m[p]=m[p].substr(1)}});if(m.start===null){m.start=-1}j=[];m.tabs=k=d("a[href^=#]",f);k.each(function(){i=m.item(a(this));if(i.length){j=j.concat(i.get())}});m.items=d(j).hide();h="idTabs."+m.event;g=m.tabarea.data("idTabs")||{};g[h]=m;m.tabarea.data("idTabs",g);k.trigger(h).data(m.data,m).bind(h,{s:m},function(){return b.unbind.apply(this,arguments)}).bind(m.event,{s:m},b.find);c(m.start)=="Number"&&(m.start<0||(i=k.eq(m.start)).length)||c(m.start)=="String"&&(i=k.filter("a[href=#"+m.start+"]")).length||(i=k.filter("."+m.selected).removeClass(m.selected)).length||(m.start===e&&(i=k.eq(0)).length);if(i.length){i.trigger(m.event)}return m};b.args=function(){var f,h=0,j={},g=arguments,k=function(l,i){if(i.indexOf(".")==0){j.selected=i}else{if(i.indexOf("!")==0){if(/^!(true|false)$/i.test(i)){j.toggle=/^!true$/i.test(i)}else{j.event=i}}else{if(i.indexOf(":")==0){i=i.substr(1).toLowerCase();if(i.indexOf("!")==0){j[i.substr(1)]=false}else{j[i]=true}}else{if(i){j.start=i}}}}};while(h<g.length){f=g[h++];switch(c(f)){case"Object":d.extend(j,f);break;case"Boolean":j.change=f;break;case"Number":j.start=f;break;case"Function":j.click=f;break;case"Null":j.start=f;break;case"String":d.each(f.split(/\s+/g),k);default:break}}return j};b.bind=function(f){if(!f){return}var g="idTabs"+ +new Date;if(f.grouped){d.idTabs(f.area,f,g)}else{f.area.each(function(){d.idTabs(this,f,g)})}};b.update=function(g){if(!g){return}g.update=false;var f,h,j,i=g.event;i=(i+"").indexOf("!")==0&&i.substr(1)||i;i=i?"idTabs."+i:"";return g.area.each(function(){f=d(this);h=f.data("idTabs");if(!h){return}if(i){j=d.extend({},h[i],g);b.remove(h[i]);b(j.tabarea,j,j.data)}else{for(i in h){if(!Object.hasOwnProperty.call(h,i)){continue}j=d.extend({},h[i],g);b.remove(h[i]);b(j.tabarea,j,j.data)}}})};b.remove=function(g){if(!g){return}var h,f,i=g.event;i=(i+"").indexOf("!")==0&&i.substr(1)||i;i="idTabs"+(i?"."+i:"");return g.area.each(function(){h=d(this).data("idTabs");delete h["idTabs."+g.event];d(this).data("idTabs",h);f=g.tabs||d("a[href^=#]",this);if(!f.length&&d(this).is("a[href^=#]")){f=d(this)}f.trigger(i)})};b.find=function(i){var f=this,g=false,h=i.data.s;d("a[href="+a(this)+"]:first",h.area).each(function(){var j=d(this).data(h.data);if(j){g=b.showtab.call(j.tabarea==h.tabarea?f:this,j,i)||g}});return g};b.showtab=function(f,g){if(!f||!f.toggle&&d(this).is("."+f.selected)){return f&&f.change}var h=a(this);if(f.click&&f.click.call(this,h,f,g)==false){return f.change}if(f.toggle&&d(this).is("."+f.selected)){h=null}return b.show.call(this,h,f,g)};b.show=function(g,f){f.tabs.removeClass(f.selected);f.tab(g).addClass(f.selected);f.items.hide();f.item(g).show();return f.change};b.unbind=function(g){var f=g.data.s;d(this).removeData(f.data).unbind("idTabs."+f.event);return false};b.extend=function(){var f=arguments;return function(){[].push.apply(f,arguments);this.idTabs.apply(this,f)}};b.tab=function(f){if(!f){return d([])}return d("a[href="+f+"]",this.tabarea)};b.item=function(g){if(!g){return d([])}var f=d(g);return f.length?f:d("."+g.substr(1))};b.settings={start:e,change:false,click:null,selected:".selected",event:"!click",toggle:false,grouped:false};b.version="3.0";d(function(){d(".idTabs").idTabs()})})(jQuery);