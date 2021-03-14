(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3tIBc",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__138yb"}},11:function(e,t,a){},22:function(e,t,a){e.exports={Button:"Button_Button__1y2LZ"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1MoUC"}},25:function(e,t,a){e.exports={loader:"Loader_loader__1K_g5"}},31:function(e,t,a){},32:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(21),c=a.n(o),l=(a(31),a(12)),s=a(4),i=a(5),u=a(7),h=a(6),m=(a(32),a(22)),d=a.n(m),b=a(0),p=function(e){var t=e.loadMore;return Object(b.jsx)("button",{onClick:t,className:d.a.Button,children:"Load more"})},g=a(10),j=a.n(g),y=function(e){var t=e.img,a=e.openModal,n=t.webformatURL,r=t.tags;return Object(b.jsx)("li",{className:j.a.ImageGalleryItem,children:Object(b.jsx)("img",{onClick:function(){return a(t)},src:n,alt:r,className:j.a.ImageGalleryItemImage})})},f=a(23),S=a.n(f),_=function(e){var t=e.gallery,a=e.openModal;return Object(b.jsx)("ul",{className:S.a.ImageGallery,children:t.map((function(e){return Object(b.jsx)(y,{openModal:a,img:e},e.id)}))})},O=a(24),v=a.n(O),I=a(25),x=a.n(I),w=function(){return Object(b.jsx)(v.a,{className:x.a.loader,type:"Puff"})},F=a(11),M=a.n(F),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.showModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.img;return Object(b.jsx)("div",{onClick:this.props.closeModal,className:M.a.Overlay,children:Object(b.jsx)("div",{className:M.a.Modal,children:Object(b.jsx)("img",{src:e.largeImageURL,alt:e.tags})})})}}]),a}(n.Component),k=a(8),N=a.n(k),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSubmitForm=function(t){t.preventDefault(),e.props.handleSubmitForm(e.state.query)},e.handleInputChange=function(t){var a=t.currentTarget;e.setState({query:a.query})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:N.a.Searchbar,children:Object(b.jsxs)("form",{className:N.a.SearchForm,onSubmit:this.handleSubmitForm,children:[Object(b.jsx)("button",{type:"submit",className:N.a.SearchFormButton,children:Object(b.jsx)("span",{className:N.a.SearchFormBbuttonLabel,children:"Search"})}),Object(b.jsx)("input",{onChange:this.handleInputChange,className:N.a.SearchFormInput,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),G=a(26),q=a.n(G),C=a(2),A=a.n(C),D=function(e,t){return q.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("19872404-8517b83978ef96fd2196e3bf4","&image_type=photo&orientation=horizontal&&per_page=12"))},E=D;D.propTypes={query:A.a.string,page:A.a.number};var K=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",page:1,gallery:[],modal:!1,isLoading:!1,button:!0,modalAbout:{}},e.handleSubmitForm=function(t){t?(e.setState({isLoading:!0}),E(t,1).then((function(e){return e.data.hits})).then((function(a){return e.setState({gallery:a,query:t,page:2,isLoading:!1,button:12===a.length})})).catch((function(e){return console.error({error:e})}))):alert("please, enter query")},e.loadMore=function(){var t=e.state,a=t.query,n=t.page,r=t.gallery;e.setState({isLoading:!0}),E(a,n).then((function(e){return e.data.hits})).then((function(t){return e.setState({gallery:[].concat(Object(l.a)(r),Object(l.a)(t)),isLoading:!1,button:12===t.length})})),e.setState((function(e){return{page:e.page+1}}))},e.showModal=function(t){var a=e.state.modal;t?e.setState({modalAbout:t,modal:!a}):e.setState({modal:!a})},e.closeModal=function(t){var a=e.state.modal;"DIV"===t.target.nodeName&&e.setState({modal:!a})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(B,{handleSubmitForm:this.handleSubmitForm}),0===this.state.gallery.length?Object(b.jsx)("h1",{className:"title",children:"Enter your query"}):Object(b.jsx)(_,{gallery:this.state.gallery,openModal:this.showModal}),this.state.modal&&Object(b.jsx)(L,{showModal:this.showModal,closeModal:this.closeModal,img:this.state.modalAbout}),0!==this.state.gallery.length&&this.state.button&&Object(b.jsx)(p,{loadMore:this.loadMore}),this.state.isLoading&&Object(b.jsx)(w,{})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__LHALn",SearchForm:"Searchbar_SearchForm__20m_y",SearchFormButton:"Searchbar_SearchFormButton__teCAf","SearchForm-button":"Searchbar_SearchForm-button__1jmFK",SearchFormBbuttonLabel:"Searchbar_SearchFormBbuttonLabel__E7Aou",SearchFormInput:"Searchbar_SearchFormInput__uwSwk","SearchForm-input":"Searchbar_SearchForm-input__2xHjS"}}},[[72,1,2]]]);
//# sourceMappingURL=main.ae1adf4b.chunk.js.map