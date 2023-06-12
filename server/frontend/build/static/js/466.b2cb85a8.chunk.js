"use strict";(self.webpackChunkportfolio2=self.webpackChunkportfolio2||[]).push([[466],{6466:function(e,n,a){a.r(n),a.d(n,{DataContext:function(){return E},default:function(){return S}});var t=a(9439),i=a(2791),r=a(1413),l=a(9823),o=a(184),s=function(e){var n=e.id,a=e.title,t=e.subTitle,i=e.period,r=e.about,s=e.deleteItem;e.editItem;return(0,o.jsxs)("div",{className:"profile-form-card-container",children:[(0,o.jsx)("button",{className:"profile-form-wk-delete-btn",onClick:function(e){return s(e,n)},children:(0,o.jsx)(l.Z,{})}),(0,o.jsx)("h2",{children:a}),(0,o.jsxs)("p",{children:[t," - ",i]}),(0,o.jsx)("ul",{children:Object.values(r).map((function(e){return(0,o.jsx)("li",{children:e})}))})]})},c=a(4942),d=function(){return(Math.random()+1).toString(36).substring(2)},u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=function(e){if(0===e.length)return"";var n=parseInt(e.substring(5,7)),a=parseInt(e.substring(0,4));return"".concat(u[n-1]," ").concat(a)},p=function(e){var n=e.addEducation,a=e.closeModal,s=(0,i.useState)(!1),u=(0,t.Z)(s,2),p=u[0],h=u[1],f=(0,i.useState)({degreeName:"",collegeName:"",fromDate:"",toDate:"",about:{line1:""}}),x=(0,t.Z)(f,2),j=x[0],v=x[1],b=function(e){v((0,r.Z)((0,r.Z)({},j),{},(0,c.Z)({},e.target.name,e.target.value)))},Z=function(e){var n=j.about;n[e.target.name]=e.target.value,v((0,r.Z)((0,r.Z)({},j),{},{about:n}))};return(0,o.jsx)("div",{className:"card-modal",children:(0,o.jsxs)("div",{className:"card-modal-container",children:[(0,o.jsx)("h2",{children:"Education"}),(0,o.jsx)("div",{className:"card-modal-close-btn",onClick:a,children:(0,o.jsx)(l.Z,{})}),(0,o.jsxs)("form",{className:"card-modal-form",children:[(0,o.jsx)("span",{className:"card-modal-label",children:"Degree Name"}),(0,o.jsx)("input",{onChange:b,placeholder:"Enter Degree Name",name:"degreeName",value:j.degreeName}),(0,o.jsx)("span",{className:"card-modal-label",children:"College Name"}),(0,o.jsx)("input",{onChange:b,placeholder:"Enter College Name",name:"collegeName",value:j.collegeName}),(0,o.jsxs)("div",{className:"card-modal-date-container",children:[(0,o.jsx)("span",{className:"card-modal-label",children:"From Date"}),(0,o.jsx)("input",{type:"month",onChange:b,placeholder:"From",name:"fromDate",value:j.fromDate}),(0,o.jsx)("span",{children:"Is this course going on ?"}),(0,o.jsx)("input",{type:"checkbox",value:p,onClick:function(){h(!p)}}),!p&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"card-modal-label",children:"To Date"}),(0,o.jsx)("input",{type:"month",onChange:b,placeholder:"To",name:"toDate",value:j.toDate})]})]}),(0,o.jsxs)("div",{className:"card-modal-responsibility-container",children:[(0,o.jsx)("span",{className:"card-modal-label",children:"Achievements"}),Object.entries(j.about).map((function(e){var n=(0,t.Z)(e,2),a=n[0],i=n[1];return(0,o.jsxs)("div",{className:"card-modal-responsibility",children:[(0,o.jsx)("input",{name:a,placeholder:"Add your achievements",value:i,onChange:Z}),(0,o.jsx)("span",{onClick:function(e){return function(e,n){e.preventDefault();var a=j.about;delete a[n],v((0,r.Z)((0,r.Z)({},j),{},{about:a}))}(e,a)},children:(0,o.jsx)(l.Z,{})})]})})),(0,o.jsx)("button",{onClick:function(e){e.preventDefault();for(var n=j.about,a=d();a in n;)a=d();n["line".concat(a)]=e.target.value,v((0,r.Z)((0,r.Z)({},j),{},{about:n}))},children:"Add Line"})]}),(0,o.jsx)("button",{className:"card-modal-submit-button",onClick:function(e){e.preventDefault();var t=p?m(j.fromDate)+" - Present":m(j.fromDate)+" "+m(j.toDate),i=j;delete i.fromDate,delete i.toDate,i.period=t,n(e,i),a()},children:"Submit"})]})]})})},h=function(){var e=(0,i.useContext)(E),n=e.data,a=e.setData,l=(0,i.useState)(!1),c=(0,t.Z)(l,2),u=c[0],m=c[1],h=n.education,f=function(e,t){e.preventDefault();var i=n.education;delete i[t],a((0,r.Z)((0,r.Z)({},n),{},{education:i}))},x=function(e,t,i){e.preventDefault();var l=n.education;l[t]=i,a((0,r.Z)((0,r.Z)({},n),{},{education:l}))};return(0,o.jsxs)(o.Fragment,{children:[u&&(0,o.jsx)(p,{addEducation:function(e,t){e.preventDefault();var i=n.education,l=d();i["line".concat(l)]=t,a((0,r.Z)((0,r.Z)({},n),{},{education:i}))},closeModal:function(){return m(!1)}}),(0,o.jsx)("h3",{children:"Educational Details"}),(0,o.jsx)("div",{className:"profile-form-education-container",children:Object.entries(h).map((function(e){var n=(0,t.Z)(e,2),a=n[0],i=n[1],r=i.degreeName,l=i.collegeName,c=i.period,d=i.about;return(0,o.jsx)(s,{id:a,title:r,subTitle:l,period:c,about:d,deleteItem:f,editItem:x},a)}))}),(0,o.jsx)("div",{className:"profile-form-add-education",children:(0,o.jsx)("button",{onClick:function(e){e.preventDefault(),m(!0)},children:"Add Education"})})]})},f=function(){var e=(0,i.useContext)(E),n=e.data,a=e.setData,s=n.name,u=n.email,m=n.phone,p=n.profession,h=n.resumeLink,f=n.links,x=n.introduction,j=f.twitter,v=f.linkedin,b=f.github,Z=function(e){a((0,r.Z)((0,r.Z)({},n),{},(0,c.Z)({},e.target.name,e.target.value)))},N=function(e){a((0,r.Z)((0,r.Z)({},n),{},{links:(0,r.Z)((0,r.Z)({},f),{},(0,c.Z)({},e.target.name,e.target.value))}))},g=function(e){a((0,r.Z)((0,r.Z)({},n),{},{introduction:(0,r.Z)((0,r.Z)({},x),{},(0,c.Z)({},e.target.name,e.target.value))}))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"Personal Details"}),(0,o.jsxs)("div",{className:"profile-photo-container",children:[(0,o.jsx)("div",{className:"profile-photo",children:(0,o.jsx)("img",{src:"https://res.cloudinary.com/dwtxio5dn/image/upload/v1676140913/portfolio/prasanna_slx3qm.jpg"})}),(0,o.jsxs)("div",{className:"profile-name-email",children:[(0,o.jsx)("div",{className:"profile-form-single-input",children:(0,o.jsx)("input",{name:"name",className:"profile-input",placeholder:"Full Name",value:s,onChange:Z})}),(0,o.jsx)("div",{className:"profile-form-single-input",children:(0,o.jsx)("input",{name:"email",className:"profile-input",placeholder:"Email",value:u,onChange:Z})})]})]}),(0,o.jsxs)("div",{className:"profile-form-double-input",children:[(0,o.jsx)("input",{name:"phone",onChange:Z,className:"profile-input",type:"text",placeholder:"Phone",value:m}),(0,o.jsx)("input",{name:"profession",onChange:Z,className:"profile-input",type:"text",placeholder:"Profession",value:p})]}),(0,o.jsxs)("div",{className:"profile-form-double-input",children:[(0,o.jsx)("input",{name:"twitter",onChange:N,className:"profile-input",type:"text",placeholder:"Twitter",value:j}),(0,o.jsx)("input",{name:"linkedin",onChange:N,className:"profile-input",type:"text",placeholder:"LinkedIn",value:v})]}),(0,o.jsxs)("div",{className:"profile-form-double-input",children:[(0,o.jsx)("input",{name:"github",onChange:N,className:"profile-input",type:"text",placeholder:"Github",value:b}),(0,o.jsx)("input",{name:"resumeLink",onChange:Z,className:"profile-input",type:"text",placeholder:"Resume Link",value:h})]}),(0,o.jsx)("h3",{children:"Your Introduction"}),(0,o.jsxs)("div",{className:"profile-form-introduction-container",children:[Object.entries(x).map((function(e){var i=(0,t.Z)(e,2),s=i[0],c=i[1];return(0,o.jsxs)("div",{className:"profile-form-single-input",children:[(0,o.jsx)("input",{onChange:g,name:s,className:"profile-input",placeholder:"Enter your line",value:c}),(0,o.jsx)("button",{className:"profile-input-delete-button",onClick:function(e){return function(e,t){e.preventDefault();var i=x;delete i[t],a((0,r.Z)((0,r.Z)({},n),{},{introduction:i}))}(e,s)},children:(0,o.jsx)(l.Z,{})})]},s)})),(0,o.jsx)("div",{className:"profile-form-add-intro-line",children:(0,o.jsx)("button",{onClick:function(e){e.preventDefault();for(var t=x,i=d();"line".concat(i)in t;)i=d();t["line".concat(i)]="",a((0,r.Z)((0,r.Z)({},n),{},{introduction:t}))},children:"Add line"})})]})]})},x=a(5536),j=function(e){var n=e.image,a=e.name,t=e.about,i=e.link;return(0,o.jsxs)("div",{className:"photo-card-container",children:[(0,o.jsx)("div",{className:"photo-card-photo",children:(0,o.jsx)("img",{src:n})}),(0,o.jsxs)("div",{className:"photo-card-info-container",children:[(0,o.jsx)("h2",{children:a}),(0,o.jsxs)("a",{href:i,className:"photo-card-link-container",children:["View Project ",(0,o.jsx)(x.Z,{sx:{fontSize:15}})]}),(0,o.jsx)("ul",{children:Object.values(t).map((function(e){return(0,o.jsx)("li",{children:e})}))})]}),(0,o.jsx)("button",{className:"profile-form-wk-delete-btn",children:(0,o.jsx)(l.Z,{})})]})},v=function(){return(0,o.jsx)("div",{children:"ProjectCardModal"})},b=function(){var e=(0,i.useContext)(E),n=e.data,a=(e.setData,(0,i.useState)(!1)),r=(0,t.Z)(a,2),l=r[0],s=r[1],c=n.projects;return(0,o.jsxs)(o.Fragment,{children:[l&&(0,o.jsx)(v,{}),(0,o.jsx)("h3",{children:"Projects"}),(0,o.jsx)("div",{className:"profile-form-projects-container",children:Object.entries(c).map((function(e){var n=(0,t.Z)(e,2),a=n[0],i=n[1],r=i.name,l=i.link,s=i.about,c=i.image;return(0,o.jsx)(j,{name:r,link:l,image:c,about:s},a)}))}),(0,o.jsx)("div",{className:"profile-form-add-project",children:(0,o.jsx)("button",{onClick:function(e){e.preventDefault(),s(!0)},children:"Add Project"})})]})},Z=function(){var e=(0,i.useContext)(E),n=e.data,a=e.setData,l=n.skills,s=function(e){var t=l[e.target.name];t.proficiency=parseInt(e.target.value),a((0,r.Z)((0,r.Z)({},n),{},{skills:(0,r.Z)((0,r.Z)({},l),{},(0,c.Z)({},e.target.name,t))}))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"Skills"}),(0,o.jsx)("div",{className:"profile-form-skills-container",children:Object.entries(l).map((function(e){var i=(0,t.Z)(e,2),c=i[0],d=i[1];return(0,o.jsxs)("div",{className:"profile-form-skill",children:[(0,o.jsx)("label",{children:(0,o.jsx)("input",{onChange:function(e){return function(e,t){var i=l;i[t].name=e.target.value,a((0,r.Z)((0,r.Z)({},n),{},{skills:i}))}(e,c)},style:{border:"none",outline:"none",width:"65%"},value:d.name,placeholder:"Enter Skill"})}),(0,o.jsx)("div",{class:"slidecontainer",children:(0,o.jsx)("input",{name:c,onChange:s,type:"range",min:"1",max:"100",value:d.proficiency,class:"slider",id:"myRange"})}),(0,o.jsx)("button",{onClick:function(e){return function(e,t){e.preventDefault();var i=l;delete i[t],a((0,r.Z)((0,r.Z)({},n),{},{skills:i}))}(e,c)},children:"-"})]})}))}),(0,o.jsx)("div",{className:"profile-form-add-skill",children:(0,o.jsx)("button",{onClick:function(e){e.preventDefault();var t=l,i=d();t["skill".concat(i)]={name:"",proficiency:50},a((0,r.Z)((0,r.Z)({},n),{},{skills:t}))},children:"Add Skill"})})]})},N=function(e){var n=e.addExperience,a=e.closeModal,s=(0,i.useState)(!1),u=(0,t.Z)(s,2),m=u[0],p=u[1],h=(0,i.useState)({position:"",companyName:"",fromDate:"",toDate:"",about:{line1:""}}),f=(0,t.Z)(h,2),x=f[0],j=f[1],v=function(e){j((0,r.Z)((0,r.Z)({},x),{},(0,c.Z)({},e.target.name,e.target.value)))},b=function(e){var n=x.about;n[e.target.name]=e.target.value,j((0,r.Z)((0,r.Z)({},x),{},{about:n}))};return(0,o.jsx)("div",{className:"card-modal",children:(0,o.jsxs)("div",{className:"card-modal-container",children:[(0,o.jsx)("h2",{children:"Work Experience"}),(0,o.jsx)("div",{className:"card-modal-close-btn",onClick:a,children:(0,o.jsx)(l.Z,{})}),(0,o.jsxs)("form",{className:"card-modal-form",children:[(0,o.jsx)("span",{className:"card-modal-label",children:"Position"}),(0,o.jsx)("input",{onChange:v,placeholder:"Enter Position",name:"position",value:x.position}),(0,o.jsx)("span",{className:"card-modal-label",children:"Company Name"}),(0,o.jsx)("input",{onChange:v,placeholder:"Enter Company Name",name:"companyName",value:x.companyName}),(0,o.jsxs)("div",{className:"card-modal-date-container",children:[(0,o.jsx)("span",{className:"card-modal-label",children:"From Date"}),(0,o.jsx)("input",{type:"month",onChange:v,placeholder:"From",name:"fromDate",value:x.fromDate}),(0,o.jsx)("span",{children:"Is this your Current Company ?"}),(0,o.jsx)("input",{type:"checkbox",value:m,onClick:function(){p(!m)}}),!m&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"card-modal-label",children:"To Date"}),(0,o.jsx)("input",{type:"month",onChange:v,placeholder:"To",name:"toDate",value:x.toDate})]})]}),(0,o.jsxs)("div",{className:"card-modal-responsibility-container",children:[(0,o.jsx)("span",{className:"card-modal-label",children:"Responsibilies"}),Object.entries(x.about).map((function(e){var n=(0,t.Z)(e,2),a=n[0],i=n[1];return(0,o.jsxs)("div",{className:"card-modal-responsibility",children:[(0,o.jsx)("input",{name:a,placeholder:"Add your responsibilities",value:i,onChange:b}),(0,o.jsx)("span",{onClick:function(e){return function(e,n){e.preventDefault();var a=x.about;delete a[n],j((0,r.Z)((0,r.Z)({},x),{},{about:a}))}(e,a)},children:(0,o.jsx)(l.Z,{})})]})})),(0,o.jsx)("button",{onClick:function(e){e.preventDefault();for(var n=x.about,a=d();a in n;)a=d();n["line".concat(a)]=e.target.value,j((0,r.Z)((0,r.Z)({},x),{},{about:n}))},children:"Add Line"})]}),(0,o.jsx)("button",{className:"card-modal-submit-button",onClick:function(e){e.preventDefault(),console.log(x.fromDate,x.toDate);var t=m?x.fromDate+" - Present":x.fromDate+" "+x.toDate,i=x;delete i.fromDate,delete i.toDate,i.period=t,console.log(i),n(e,i),a()},children:"Submit"})]})]})})},g=function(){var e=(0,i.useContext)(E),n=e.data,a=e.setData,l=(0,i.useState)(!1),c=(0,t.Z)(l,2),u=c[0],m=c[1],p=n.workExperience,h=function(e,t){e.preventDefault();var i=n.workExperience;delete i[t],a((0,r.Z)((0,r.Z)({},n),{},{workExperience:i}))},f=function(e,t,i){e.preventDefault();var l=n.workExperience;l[t]=i,a((0,r.Z)((0,r.Z)({},n),{},{workExperience:l}))};return(0,o.jsxs)(o.Fragment,{children:[u&&(0,o.jsx)(N,{addExperience:function(e,t){e.preventDefault();var i=n.workExperience,l=d();i["line".concat(l)]=t,a((0,r.Z)((0,r.Z)({},n),{},{workExperience:i}))},closeModal:function(){return m(!1)}}),(0,o.jsx)("h3",{children:"Work Experience"}),(0,o.jsx)("div",{className:"profile-form-work-experience-container",children:Object.entries(p).map((function(e){var n=(0,t.Z)(e,2),a=n[0],i=n[1],r=i.position,l=i.companyName,c=i.period,d=i.about;return(0,o.jsx)(s,{id:a,editItem:f,deleteItem:h,title:r,subTitle:l,period:c,about:d},a)}))}),(0,o.jsx)("div",{className:"profile-form-add-experience",children:(0,o.jsx)("button",{onClick:function(e){e.preventDefault(),m(!0)},children:"Add Experience"})})]})},k=a(9889),D=a(7689),C=a(3978),y=function(){var e=(0,i.useContext)(E).data;console.log(e);var n=function(){};return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"My Achievements"}),(0,o.jsx)("div",{children:Object.entries(null===e||void 0===e?void 0:e.achievements).map((function(e,a){var i=(0,t.Z)(e,2),r=i[0],l=i[1]||{},c=l.achievementName,d=l.desc;return(0,o.jsx)(s,{id:r,title:c,subTitle:d,period:"",about:"",deleteItem:n})}))})]})},E=i.createContext(),S=function(){var e=(0,i.useContext)(k.S),n=(0,i.useState)(e),a=(0,t.Z)(n,2),r=a[0],l=a[1],s=(0,i.useState)(!1),c=(0,t.Z)(s,2),d=c[0];c[1],(0,D.s0)();return d?(0,o.jsx)(C.Z,{}):(0,o.jsxs)("div",{className:"profile-container",children:[(0,o.jsx)("h1",{children:"Profile"}),(0,o.jsx)(E.Provider,{value:{data:r,setData:l},children:(0,o.jsxs)("form",{className:"profile-form-container",children:[(0,o.jsx)(f,{}),(0,o.jsx)(Z,{}),(0,o.jsx)(g,{}),(0,o.jsx)(h,{}),(0,o.jsx)(y,{}),(0,o.jsx)(b,{}),(0,o.jsx)("div",{className:"profile-form-submit-button",children:(0,o.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log(r)},children:"Submit Details"})})]})})]})}},9823:function(e,n,a){var t=a(4836);n.Z=void 0;var i=t(a(5649)),r=a(184),l=(0,i.default)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=l},5536:function(e,n,a){var t=a(4836);n.Z=void 0;var i=t(a(5649)),r=a(184),l=(0,i.default)((0,r.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");n.Z=l}}]);
//# sourceMappingURL=466.b2cb85a8.chunk.js.map