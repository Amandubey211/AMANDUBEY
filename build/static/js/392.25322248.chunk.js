"use strict";(self.webpackChunkadv_project_1=self.webpackChunkadv_project_1||[]).push([[392],{3392:function(e,s,a){a.r(s),a.d(s,{default:function(){return h}});var n=a(2791),l=a(3728),t=a(3864),c=a(9287),r=a(9439),i=a(4165),d=a(5861),o=a(5218),x=a(1243),m=function(){var e=(0,n.useState)(!1),s=(0,r.Z)(e,2),a=s[0],l=s[1],t=function(){var e=(0,d.Z)((0,i.Z)().mark((function e(s,a,n){var t,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,x.Z.post("".concat("http://localhost:5100","/api/contact"),{Name:s,Email:a,Message:n});case 4:t=e.sent,(c=t.data)?o.Am.success(c.message):o.Am.error(c.message),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),o.Am.error("something went wrong"),console.log(e.t0);case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(s,a,n){return e.apply(this,arguments)}}();return{submitForm:t,loading:a}},p=a(184),u=function(){var e=(0,n.useState)(""),s=(0,r.Z)(e,2),a=s[0],t=s[1],c=(0,n.useState)(""),i=(0,r.Z)(c,2),d=i[0],o=i[1],x=(0,n.useState)(""),u=(0,r.Z)(x,2),h=u[0],f=u[1],j=m(),g=j.loading,b=j.submitForm;return(0,p.jsx)("div",{children:(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"",children:(0,p.jsxs)("form",{className:" form  bg-light p-4 rounded-4 ",style:{boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"},onSubmit:function(e){e.preventDefault(),b(d,a,h),o(""),t(""),f("")},children:[(0,p.jsxs)("div",{className:"mt-2  fw-semibold text-capitalize text-center d-flex  py-2 flex-row flex-wrap gap-2 justify-content-center  align-items-center rounded-2 bg-none ",style:{boxShadow:"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"},children:[(0,p.jsx)(l.G4$,{className:"fs-3  "}),(0,p.jsxs)("h5",{className:"text-center fw-bold text-capitalize",children:[" ","message box"]})]}),(0,p.jsxs)("div",{className:"txt_field ",children:[(0,p.jsx)("input",{type:"text",name:"Name",maxLength:30,value:a,onChange:function(e){return t(e.target.value)},required:!0}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:" Name"})]}),(0,p.jsxs)("div",{className:"txt_field",children:[(0,p.jsx)("input",{type:"email",name:"Email",value:d,onChange:function(e){return o(e.target.value)},required:!0}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:"Email"})]}),(0,p.jsxs)("div",{className:"txt_field",children:[(0,p.jsx)("input",{type:"text",name:"Message",maxLength:200,value:h,onChange:function(e){return f(e.target.value)},required:!0}),(0,p.jsx)("span",{}),(0,p.jsx)("label",{children:"Message"})]}),(0,p.jsx)("div",{className:"d-flex justify-content-start ",children:(0,p.jsx)("button",{className:"  ms-2  px-5  py-2  fw-bold  button-85",type:"submit",style:{fontSize:"12px"},children:g?"loading":"send"})})]})})})})},h=function(){return(0,p.jsx)(t.Z,{title:"contact page",children:(0,p.jsx)("div",{className:"contact_main",children:(0,p.jsxs)("div",{className:"row container-fluid ",children:[(0,p.jsx)("div",{className:"col-lg-3 col-md-3 col-sm-12 p-2 rounded-3",children:(0,p.jsx)(c.Z,{})}),(0,p.jsxs)("div",{className:"col-lg-8 col-md-8 col-sm-12 p-2 ms-3 ps-3 rounded-2",style:{boxShadow:"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"},children:[(0,p.jsx)("h4",{className:"py-4 px-3",children:"contact"})," ",(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-sm-12 col-lg-6 col-md-6 col-xl-6",children:(0,p.jsxs)("div",{className:"p-3 border border-successs rounded-3",style:{backgroundImage:"linear-gradient(to right, #0f0c29, #302b63, #24243e",color:"whitesmoke"},children:[(0,p.jsxs)("div",{className:"d-flex flex-row flex-wrap  justify-content-center align-items-center ",children:[(0,p.jsxs)("span",{children:[" ",(0,p.jsx)(l.Yek,{className:"fs-5 me-2 "})]})," ",(0,p.jsx)("span",{className:"fw-semibold",children:" Phone "})]}),(0,p.jsx)("hr",{}),(0,p.jsx)("div",{className:"d-flex flex-row  gap-1 justify-content-center ",children:(0,p.jsx)("span",{className:"fw-semibold ",children:" +91 77000 42037"})}),(0,p.jsx)("div",{className:"d-flex flex-row  gap-1 justify-content-center ",children:(0,p.jsx)("span",{className:"fw-semibold ",children:" +91 66666 99999"})})]})}),(0,p.jsxs)("div",{className:"col-sm-12 col-lg-6 col-md-6 col-xl-6",children:[" ",(0,p.jsxs)("div",{className:"p-3 border border-successs rounded-3",style:{backgroundImage:" linear-gradient(to right, #0f0c29, #302b63, #24243e",color:"whitesmoke"},children:[(0,p.jsxs)("div",{className:"d-flex flex-row flex-wrap  justify-content-center align-items-center  ",children:[(0,p.jsx)(l.JM8,{className:"fs-5 me-2 "})," ",(0,p.jsx)("span",{children:" Mail "})]}),(0,p.jsx)("hr",{}),(0,p.jsx)("div",{className:"d-flex flex-row  gap-1 justify-content-center ",children:(0,p.jsxs)("span",{className:"fw-semibold ",children:[" ","amandubey8833@gmail.com"]})}),(0,p.jsx)("div",{className:"d-flex flex-row  gap-1 justify-content-center ",children:(0,p.jsxs)("span",{className:"fw-semibold ",children:[" ","amanheller8833@gmail.com"]})})]})]})]}),(0,p.jsx)("div",{className:"  rounded-4 pb-5 m-2 ",children:(0,p.jsxs)("div",{className:" ",children:[(0,p.jsxs)("div",{className:"p-3 pt-4 ",children:[(0,p.jsx)("h6",{className:"fw-semibold text-capitalize",children:"I'm always open to discussing product"})," ",(0,p.jsx)("h6",{className:"fw-bold",children:"design work or partnerships."})]}),(0,p.jsx)("div",{children:(0,p.jsx)(u,{})})]})})]})]})})})}}}]);
//# sourceMappingURL=392.25322248.chunk.js.map