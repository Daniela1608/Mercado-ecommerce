"use strict";(self.webpackChunkpruebas=self.webpackChunkpruebas||[]).push([[592],{5385:(u,e,r)=>{r.d(e,{E:()=>s});class s{}},5868:(u,e,r)=>{r.d(e,{G:()=>s});class s{}},6095:(u,e,r)=>{r.d(e,{s:()=>c});var s=r(2340),n=r(7716),_=r(1841);let c=(()=>{class a{constructor(t){this.http=t,this.url=`${s.N.apiUrl}/estado`}buscarTodo(){return this.http.get(`${this.url}/listar`)}}return a.\u0275fac=function(t){return new(t||a)(n.LFG(_.eN))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},1729:(u,e,r)=>{r.d(e,{U:()=>c});var s=r(2340),n=r(7716),_=r(1841);let c=(()=>{class a{constructor(t){this.http=t,this.url=`${s.N.apiUrl}/producto`}buscarTodo(){return this.http.get(`${this.url}/listar`)}buscarProductosPorCategoria(t){return this.http.get(`${this.url}/listar-por-categoria/${t}`)}crear(t,i){let o=new FormData;return o.set("imagen",t),o.set("json",JSON.stringify(i)),this.http.post(`${this.url}/insertar`,o)}editar(t,i){let o=new FormData;return o.set("imagen",t),o.set("json",JSON.stringify(i)),this.http.put(`${this.url}/actualizar`,o)}editarSinImagen(t){let i=new FormData;return i.set("json",JSON.stringify(t)),this.http.put(`${this.url}/actualizar-sin-imagen`,i)}eliminar(t){return this.http.put(`${this.url}/eliminar`,t)}buscarAdmin(){return this.http.get(`${this.url}/listar-admin`)}}return a.\u0275fac=function(t){return new(t||a)(n.LFG(_.eN))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);