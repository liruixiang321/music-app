(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["singer-detail"],{"10ce":function(t,e,n){"use strict";n.r(e);var a=n("5362"),c=n("7a23"),r=Object(c["withScopeId"])("data-v-508ad34e");Object(c["pushScopeId"])("data-v-508ad34e");var i={class:"singer-detail"};Object(c["popScopeId"])();var o=r((function(t,e,n,r,o,s){var l=a["a"];return Object(c["openBlock"])(),Object(c["createBlock"])("div",i,[Object(c["createVNode"])(l,{songs:t.songs,title:t.title,pic:t.pic,loading:t.loading},null,8,["songs","title","pic","loading"])])})),s=n("3524"),l=n("ae58"),u=n("aaef"),d=Object(s["a"])("singer-detail",u["f"],l["a"]),p=(n("671c"),n("6b0d")),b=n.n(p);const f=b()(d,[["render",o],["__scopeId","data-v-508ad34e"]]);e["default"]=f},"2bbc":function(t,e,n){},3524:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b0c0"),n("96cf");var a=n("1da1"),c=n("5362"),r=n("335a"),i=n("4240");function o(t,e,n){return{name:t,components:{MusicList:c["a"]},props:{data:Object},data:function(){return{songs:[],loading:!0}},computed:{computedData:function(){var t=null,n=this.data;if(n)t=n;else{var a=r["a"].session.get(e);a&&(a.mid||a.id+"")===this.$route.params.id&&(t=a)}return t},pic:function(){var t=this.computedData;return t&&t.pic},title:function(){var t=this.computedData;return t&&(t.name||t.title)}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var a,c,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.computedData,a){e.next=5;break}return c=t.$route.matched[0].path,t.$router.push({path:c}),e.abrupt("return");case 5:return e.next=7,n(a);case 7:return r=e.sent,e.next=10,Object(i["b"])(r.songs);case 10:t.songs=e.sent,t.loading=!1;case 12:case"end":return e.stop()}}),e)})))()}}}},"3b9f":function(t,e,n){"use strict";n("2bbc")},5362:function(t,e,n){"use strict";var a=n("75e4"),c=(n("f48c"),n("bba4")),r=n("a25b"),i=n("7a23"),o=Object(i["withScopeId"])("data-v-196c0c1a");Object(i["pushScopeId"])("data-v-196c0c1a");var s={class:"music-list"},l=Object(i["createVNode"])("i",{class:"icon-back"},null,-1),u={class:"title"},d=Object(i["createVNode"])("i",{class:"icon-play"},null,-1),p=Object(i["createVNode"])("span",{class:"text"},"随机播放全部",-1),b={class:"song-list-wrapper"};Object(i["popScopeId"])();var f=o((function(t,e,n,f,g,h){var m=r["a"],j=c["a"],O=a["a"],v=Object(i["resolveDirective"])("no-result");return Object(i["openBlock"])(),Object(i["createBlock"])("div",s,[Object(i["createVNode"])("div",{class:"back",onClick:e[1]||(e[1]=function(){return h.goBack&&h.goBack.apply(h,arguments)})},[l]),Object(i["createVNode"])("h1",u,Object(i["toDisplayString"])(n.title),1),Object(i["createVNode"])("div",{class:"bg-image",style:h.bgImageStyle,ref:"bgImage"},[Object(i["createVNode"])("div",{class:"play-btn-wrapper",style:h.playBtnStyle},[Object(i["withDirectives"])(Object(i["createVNode"])("div",{class:"play-btn",onClick:e[2]||(e[2]=function(){return h.random&&h.random.apply(h,arguments)})},[d,p],512),[[i["vShow"],n.songs.length>0]])],4),Object(i["createVNode"])("div",{class:"filter",style:h.filterStyle},null,4)],4),Object(i["withDirectives"])(Object(i["createVNode"])(j,{class:"list",style:h.scrollStyle,"probe-type":3,onScroll:h.onScroll},{default:o((function(){return[Object(i["createVNode"])("div",b,[Object(i["createVNode"])(m,{songs:n.songs,onSelect:h.selectItem,rank:n.rank},null,8,["songs","onSelect","rank"])])]})),_:1},8,["style","onScroll"]),[[O,n.loading],[v,h.noResult,n.noResultText]])])})),g=(n("99af"),n("5530")),h=n("70d8"),m=n("5502"),j=40,O={name:"music-list",components:{SongList:r["a"],Scroll:h["a"]},props:{songs:{type:Array,default:function(){return[]}},title:String,pic:String,loading:Boolean,noResultText:{type:String,default:"抱歉，没有找到可播放的歌曲"},rank:Boolean},data:function(){return{imageHeight:0,scrollY:0,maxTranslateY:0}},computed:Object(g["a"])({noResult:function(){return!this.loading&&!this.songs.length},playBtnStyle:function(){var t="";return this.scrollY>=this.maxTranslateY&&(t="none"),{display:t}},bgImageStyle:function(){var t=this.scrollY,e=0,n="70%",a=0,c=0;t>this.maxTranslateY&&(e=10,n=0,a="".concat(j,"px"),c=1);var r=1;return t<0&&(r=1+Math.abs(t/this.imageHeight)),{zIndex:e,paddingTop:n,height:a,backgroundImage:"url(".concat(this.pic,")"),transform:"scale(".concat(r,")translateZ(").concat(c,"px)")}},scrollStyle:function(){var t=this.playlist.length?"60px":"0";return{top:"".concat(this.imageHeight,"px"),bottom:t}},filterStyle:function(){var t=0,e=this.scrollY,n=this.imageHeight;return e>=0&&(t=20*Math.min(this.maxTranslateY/n,e/n)),{backdropFilter:"blur(".concat(t,"px)")}}},Object(m["d"])(["playlist"])),mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.maxTranslateY=this.imageHeight-j},methods:Object(g["a"])({goBack:function(){this.$router.back()},onScroll:function(t){this.scrollY=-t.y},selectItem:function(t){t.song;var e=t.index;this.selectPlay({list:this.songs,index:e})},random:function(){this.randomPlay(this.songs)}},Object(m["c"])(["selectPlay","randomPlay"]))},v=(n("3b9f"),n("6b0d")),y=n.n(v);const S=y()(O,[["render",f],["__scopeId","data-v-196c0c1a"]]);e["a"]=S},"671c":function(t,e,n){"use strict";n("6eae")},"6eae":function(t,e,n){},"70d8":function(t,e,n){"use strict";n("96cf");var a=n("1da1"),c=n("7a23"),r=n("bba4"),i=n("5502");e["a"]={name:"wrap-scroll",props:r["a"].props,emits:r["a"].emits,render:function(t){return Object(c["h"])(r["a"],Object(c["mergeProps"])({ref:"scrollRef"},t.$props,{onScroll:function(e){t.$emit("scroll",e)}}),{default:Object(c["withCtx"])((function(){return[Object(c["renderSlot"])(t.$slots,"default")]}))})},setup:function(){var t=Object(c["ref"])(null),e=Object(c["computed"])((function(){return t.value.scroll})),n=Object(i["e"])(),r=Object(c["computed"])((function(){return n.state.playlist}));return Object(c["watch"])(r,Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["nextTick"])();case 2:e.value.refresh();case 3:case"end":return t.stop()}}),t)})))),{scrollRef:t,scroll:e}}}},ae58:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return r}));var a=n("58ff");function c(){return Object(a["a"])("/api/getSingerList")}function r(t){return Object(a["a"])("/api/getSingerDetail",{mid:t.mid})}}}]);