self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
bK5(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0;x<u;++x){w=2*x
v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
buj(d,e,f,g,h){var x,w,v=null,u=e.length
if(f.length!==u)throw B.h(B.cH('"positions" and "colors" lengths must match.',v))
u=$.bpz()[d.a]
x=A.bK5(e)
w=B.bmT(f)
u=new A.J5(u,x,v,w,v)
u.zP(v,y.U)
return u},
bBw(d){var x,w=d.length,v=new Int32Array(w)
for(x=0;x<w;++x)v[x]=d[x].a
return v},
bJ8(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0,w=0;x<u;++x,w+=2){v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
J5:function J5(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=null},
a8q:function a8q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
av2(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.am(0,e)
w=f.am(0,e)
return e.a1(0,w.zJ(C.d.F(x.E2(w)/t,0,1)))},
bz0(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.am(0,q),o=e.b,n=o.am(0,q),m=e.d,l=m.am(0,q),k=p.E2(n),j=n.E2(n),i=p.E2(l),h=l.E2(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[A.av2(d,q,o),A.av2(d,o,x),A.av2(d,x,m),A.av2(d,m,q)]
v=B.c9("closestOverall")
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.qY()},
bBY(){var x=new B.bx(new Float64Array(16))
x.tW()
return new A.a8V(x,$.a9())},
bll(d,e){var x,w,v,u,t,s,r=new B.bx(new Float64Array(16))
r.qP(d)
r.z9(r)
x=e.a
w=e.b
v=new B.cq(new Float64Array(3))
v.ue(x,w,0)
v=r.zE(v)
u=e.c
t=new B.cq(new Float64Array(3))
t.ue(u,w,0)
t=r.zE(t)
w=e.d
s=new B.cq(new Float64Array(3))
s.ue(u,w,0)
s=r.zE(s)
u=new B.cq(new Float64Array(3))
u.ue(x,w,0)
u=r.zE(u)
x=new B.cq(new Float64Array(3))
x.qP(v)
w=new B.cq(new Float64Array(3))
w.qP(t)
v=new B.cq(new Float64Array(3))
v.qP(s)
t=new B.cq(new Float64Array(3))
t.qP(u)
return new A.a66(x,w,v,t)},
bkJ(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.q,w=0;w<4;++w){v=r[w]
u=A.bz0(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new B.l(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new B.l(x.a,t)}return A.bcA(x)},
bcA(d){return new B.l(B.alE(C.d.od(d.a,9)),B.alE(C.d.od(d.b,9)))},
bFf(d,e){if(d.m(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.ab:C.x},
L8:function L8(d,e,f,g,h,i){var _=this
_.e=d
_.r=e
_.as=f
_.ax=g
_.ch=h
_.a=i},
S1:function S1(d,e,f,g,h){var _=this
_.d=null
_.e=d
_.f=e
_.r=null
_.w=$
_.z=_.y=_.x=null
_.as=_.Q=0
_.at=null
_.pS$=f
_.R$=g
_.a=null
_.b=h
_.c=null},
aTa:function aTa(){},
adL:function adL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a8V:function a8V(d,e){var _=this
_.a=d
_.to$=0
_.x1$=e
_.xr$=_.x2$=0
_.y1$=!1},
Gh:function Gh(d,e){this.a=d
this.b=e},
Wv:function Wv(){},
bBZ(){return new A.ty(null)},
ty:function ty(d){this.a=d},
Vc:function Vc(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=$
_.x=null
_.pS$=g
_.R$=h
_.a=null
_.b=i
_.c=null},
b0J:function b0J(d,e){this.a=d
this.b=e},
b0K:function b0K(d){this.a=d},
b0Q:function b0Q(d){this.a=d},
b0P:function b0P(d){this.a=d},
b0O:function b0O(d){this.a=d},
b0N:function b0N(d){this.a=d},
b0M:function b0M(d,e){this.a=d
this.b=e},
b0L:function b0L(d,e,f){this.a=d
this.b=e
this.c=f},
aa6:function aa6(d,e){this.b=d
this.a=e},
aKb:function aKb(d,e){this.a=d
this.b=e},
Xa:function Xa(){},
b9K(d,e,f,g,h){var x=new A.Yn(e,g,f,B.b([],y.g),h,B.b([],y.h))
x.amy(d,e,f,g,h)
return x},
Yn:function Yn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
anx:function anx(d){this.a=d},
anw:function anw(d){this.a=d},
anv:function anv(d){this.a=d},
aKa:function aKa(d){this.a=d
this.c=this.b=null},
aX5:function aX5(d,e){this.a=d
this.b=e},
hb:function hb(d,e,f){this.a=d
this.b=e
this.c=f},
aa7:function aa7(){},
Zt:function Zt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aoS:function aoS(d){this.a=d},
aoR:function aoR(d,e){this.a=d
this.b=e},
zv:function zv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aLU:function aLU(d){this.a=d},
a1b:function a1b(d,e,f){this.c=d
this.d=e
this.a=f},
a66:function a66(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bCc(d,e,f){var x,w
if($.aS())return A.buj(d,e,f,null,null)
x=A.bBw(f)
w=A.bJ8(e)
if($.HS==null)$.HS=new B.ajA()
return new A.a8q(d,w,x,null)}},J,B,C,D,E,F
A=a.updateHolder(c[84],A)
J=c[1]
B=c[0]
C=c[2]
D=c[123]
E=c[113]
F=c[97]
A.J5.prototype={
yu(){var x=this
return J.bqg($.cB.rL(),x.b,x.c,x.d,x.e,x.f)},
As(){return this.yu()},
vf(d){var x=this.a
if(x!=null)J.iS(x)}}
A.a8q.prototype={}
A.L8.prototype={
G(){var x=null,w=y.z
return new A.S1(new B.ac(x,w),new B.ac(x,w),x,x,C.k)}}
A.S1.prototype={
gLC(){var x=$.R.t$.z.i(0,this.e).gI()
x.toString
x=y.x.a(x).k1
x.toString
return this.a.e.G9(new B.C(0,0,0+x.a,0+x.b))},
gNj(){var x=$.R.t$.z.i(0,this.f).gI()
x.toString
x=y.x.a(x).k1
return new B.C(0,0,0+x.a,0+x.b)},
Mw(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.m(0,C.q)){x=new B.bx(new Float64Array(16))
x.qP(a0)
return x}d.a.toString
w=new B.bx(new Float64Array(16))
w.qP(a0)
w.oW(0,a1.a,a1.b)
v=A.bll(w,d.gNj())
x=d.gLC()
if(x.gabR(x))return w
x=d.gLC()
u=d.as
t=new B.bx(new Float64Array(16))
t.tW()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.oW(0,q/2,o/2)
t.PE(u)
t.oW(0,-q/2,-o/2)
u=new B.cq(new Float64Array(3))
u.ue(r,x,0)
u=t.zE(u)
q=new B.cq(new Float64Array(3))
q.ue(s,x,0)
q=t.zE(q)
x=new B.cq(new Float64Array(3))
x.ue(s,p,0)
x=t.zE(x)
s=new B.cq(new Float64Array(3))
s.ue(r,p,0)
s=t.zE(s)
r=new Float64Array(3)
new B.cq(r).qP(u)
u=new Float64Array(3)
new B.cq(u).qP(q)
q=new Float64Array(3)
new B.cq(q).qP(x)
x=new Float64Array(3)
new B.cq(x).qP(s)
s=r[0]
p=u[0]
o=q[0]
n=x[0]
m=Math.min(s,Math.min(p,Math.min(o,n)))
r=r[1]
u=u[1]
q=q[1]
x=x[1]
l=Math.min(r,Math.min(u,Math.min(q,x)))
k=Math.max(s,Math.max(p,Math.max(o,n)))
j=Math.max(r,Math.max(u,Math.max(q,x)))
x=new B.cq(new Float64Array(3))
x.ue(m,l,0)
u=new B.cq(new Float64Array(3))
u.ue(k,l,0)
s=new B.cq(new Float64Array(3))
s.ue(k,j,0)
r=new B.cq(new Float64Array(3))
r.ue(m,j,0)
q=new B.cq(new Float64Array(3))
q.qP(x)
x=new B.cq(new Float64Array(3))
x.qP(u)
u=new B.cq(new Float64Array(3))
u.qP(s)
s=new B.cq(new Float64Array(3))
s.qP(r)
i=new A.a66(q,x,u,s)
h=A.bkJ(i,v)
if(h.m(0,C.q))return w
x=w.Qd().a
u=x[0]
x=x[1]
g=a0.KP()
u-=h.a*g
x-=h.b*g
f=new B.bx(new Float64Array(16))
f.qP(a0)
s=new B.cq(new Float64Array(3))
s.ue(u,x,0)
f.a_u(s)
e=A.bkJ(i,A.bll(f,d.gNj()))
if(e.m(0,C.q))return f
s=e.a===0
if(!s&&e.b!==0){x=new B.bx(new Float64Array(16))
x.qP(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new B.bx(new Float64Array(16))
s.qP(a0)
r=new B.cq(new Float64Array(3))
r.ue(u,x,0)
s.a_u(r)
return s},
a4P(d,e){var x,w,v,u,t,s,r=this
if(e===1){x=new B.bx(new Float64Array(16))
x.qP(d)
return x}w=r.d.a.KP()
x=r.gNj()
v=r.gLC()
u=r.gNj()
t=r.gLC()
s=C.d.F(Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b))),r.a.as,2.5)
x=new B.bx(new Float64Array(16))
x.qP(d)
x.rp(0,s/w)
return x},
aBH(d,e,f){var x,w,v,u
if(e===0){x=new B.bx(new Float64Array(16))
x.qP(d)
return x}w=this.d.zD(f)
x=new B.bx(new Float64Array(16))
x.qP(d)
v=w.a
u=w.b
x.oW(0,v,u)
x.PE(-e)
x.oW(0,-v,-u)
return x},
SV(d){switch(d){case D.azb:return!1
case D.uR:this.a.toString
return!0
case D.mg:case null:this.a.toString
return!0}},
a3i(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.uR
else return D.mg},
aAU(d){var x,w=this,v="_controller"
w.a.ax.$1(d)
x=B.c(w.w,v).r
if(x!=null&&x.a!=null){B.c(w.w,v).tj(0)
x=B.c(w.w,v)
x.sl(0,x.a)
x=w.r
if(x!=null)x.a.C(0,w.gMG())
w.r=null}w.x=w.at=null
w.z=w.d.a.KP()
w.y=w.d.zD(d.b)
w.Q=w.as},
aCV(d){var x,w,v,u,t,s,r=this,q=r.d.a.KP(),p=d.c,o=r.d.zD(p),n=r.at
if(n===D.mg)n=r.at=r.a3i(d)
else if(n==null){n=r.a3i(d)
r.at=n}if(!r.SV(n)){r.a.toString
return}switch(r.at.a){case 1:n=r.z
n.toString
x=r.d
x.sl(0,r.a4P(x.a,n*d.d/q))
w=r.d.zD(p)
n=r.d
x=n.a
v=r.y
v.toString
n.sl(0,r.Mw(x,w.am(0,v)))
u=r.d.zD(p)
p=r.y
p.toString
if(!A.bcA(p).m(0,A.bcA(u)))r.y=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}x=r.Q
x.toString
t=x+n
n=r.d
n.sl(0,r.aBH(n.a,r.as-t,p))
r.as=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.x==null){n=r.y
n.toString
r.x=A.bFf(n,o)}n=r.y
n.toString
s=o.am(0,n)
n=r.d
n.sl(0,r.Mw(n.a,s))
r.y=r.d.zD(p)
break}r.a.toString},
aCR(d){var x,w,v,u,t,s,r,q=this,p="_controller"
q.a.toString
q.y=q.Q=q.z=null
x=q.r
if(x!=null)x.a.C(0,q.gMG())
x=B.c(q.w,p)
x.sl(0,x.a)
if(!q.SV(q.at)){q.x=null
return}if(q.at!==D.mg||d.a.a.gtK()<50){q.x=null
return}x=q.d.a.Qd().a
w=x[0]
x=x[1]
v=d.a.a
u=Math.log(0.0000135)
t=Math.log(0.0000135)
s=Math.log(10/v.gtK())
r=Math.log(135e-9)
u=new B.BQ(0.0000135,u,w,v.a,C.d1).gJj()
v=new B.BQ(0.0000135,t,x,v.b,C.d1).gJj()
t=y.L
q.r=new B.G(B.aI(C.dX,B.c(q.w,p),null),new B.a6(new B.l(w,x),new B.l(u,v),t),t.h("G<X.T>"))
B.c(q.w,p).e=B.dC(0,0,C.d.aj(s/r*1000),0,0)
q.r.a.a9(0,q.gMG())
B.c(q.w,p).oN(0)},
aAW(d){var x,w,v,u,t,s,r=this
if(y.C.b(d)){if(d.gH0().b===0)return
x=r.a.ax
w=d.gqX(d)
v=d.gvk()
x.$1(new B.Dz(w,v,0))
x=d.gH0()
r.a.toString
u=Math.exp(-x.b/200)
if(!r.SV(D.uR)){r.a.toString
return}x=r.d
x.toString
t=x.zD(d.gvk())
x=r.d
x.sl(0,r.a4P(x.a,u))
x=r.d
x.toString
s=x.zD(d.gvk())
x=r.d
x.sl(0,r.Mw(x.a,s.am(0,t)))
r.a.toString}},
aCk(){var x,w,v,u,t=this,s="_controller",r=B.c(t.w,s).r
if(!(r!=null&&r.a!=null)){t.x=null
r=t.r
if(r!=null)r.a.C(0,t.gMG())
t.r=null
r=B.c(t.w,s)
r.sl(0,r.a)
return}r=t.d.a.Qd().a
x=r[0]
r=r[1]
w=t.d.zD(new B.l(x,r))
r=t.d
r.toString
x=t.r
v=x.b
x=x.a
u=r.zD(v.L(0,x.gl(x))).am(0,w)
x=t.d
x.sl(0,t.Mw(x.a,u))},
aD8(){this.E(new A.aTa())},
a2(){var x,w=this,v=null
w.a8()
x=w.a.ch
w.d=x
x.a9(0,w.gTU())
w.w=B.aO(C.w,v,v,v,1,v,w)},
aa(d){var x,w,v=this
v.al(d)
x=v.a
if(x.ch!==d.ch){x=v.gTU()
v.d.C(0,x)
w=v.a.ch
v.d=w
w.a9(0,x)}},
k(d){var x=this
B.c(x.w,"_controller").k(0)
x.d.C(0,x.gTU())
x.a.toString
x.alo(0)},
p(d,e){var x,w,v=this,u=null,t=v.a
t.toString
x=v.d.a
w=new A.adL(t.r,v.e,C.t,!0,x,u)
return B.LE(C.e8,B.cy(C.aO,w,C.B,!1,u,u,u,u,u,u,u,u,u,u,u,u,v.gaCQ(),v.gaAT(),v.gaCU(),u,u,u,u,u,u,u),v.f,u,u,v.gaAV(),u)}}
A.adL.prototype={
p(d,e){var x=this,w=B.md(null,new B.hi(x.c,x.d),x.r,!0)
return B.iZ(w,x.e,null)}}
A.a8V.prototype={
zD(d){var x=this.a,w=new B.bx(new Float64Array(16))
if(w.z9(x)===0)B.O(B.i2(x,"other","Matrix cannot be inverted"))
x=new B.cq(new Float64Array(3))
x.ue(d.a,d.b,0)
x=w.zE(x).a
return new B.l(x[0],x[1])}}
A.Gh.prototype={
j(d){return"_GestureType."+this.b}}
A.Wv.prototype={
p5(){this.qa()
this.pB()
this.rM()},
k(d){var x=this,w=x.R$
if(w!=null)w.C(0,x.grJ())
x.R$=null
x.a0(0)}}
A.ty.prototype={
G(){var x=null
return new A.Vc(new B.ac(x,y.z),A.b9K(x,8,1,16,x),A.bBY(),x,x,C.k)}}
A.Vc.prototype={
aCl(){var x=this,w="_controllerReset",v=x.r,u=v.b
v=v.a
x.f.sl(0,u.L(0,v.gl(v)))
v=B.c(x.w,w).r
if(!(v!=null&&v.a!=null)){v=x.r
if(v!=null)v.a.C(0,x.gTQ())
x.r=null
v=B.c(x.w,w)
v.sl(0,v.a)}},
aCT(d){var x,w=this,v="_controllerReset"
if(B.c(B.c(w.w,v).Q,"_status")===C.ao){B.c(w.w,v).tj(0)
x=w.r
if(x!=null)x.a.C(0,w.gTQ())
w.r=null
x=B.c(w.w,v)
x.sl(0,x.a)}},
aD5(d){var x=this,w=x.f.zD(d.a.am(0,B.eW(y.x.a($.R.t$.z.i(0,x.d).gI()).tq(0,null),C.q)))
x.E(new A.b0J(x,x.e.aRs(w)))},
a2(){var x=null
this.a8()
this.w=B.aO(C.w,x,x,x,1,x,this)},
p(d,e){var x=null,w=B.r(e)
return B.bV(B.cv(x,x,!1,x,x,x,1,x,x,x,!1,x,x,x,x,x,!0,x,x,x,x,B.q(B.v(e,C.i,y.s).gb8(),x,x,x,x,x,x,x,x),x,x,x,1,x),w.as.b,B.S(x,new B.cW(new A.b0K(this),x),C.h,D.wo,x,x,x,x,x,x,x,x,x,x),x,x,!1,x,x,x,B.b([this.gaSf(),this.gaN4()],y.p),x)},
gaSf(){var x=null,w=this.c
w.toString
return B.c1(B.r(w).as.cy,!0,x,D.a3a,x,x,new A.b0Q(this),C.L,x,"Reset")},
gaN4(){var x=null,w=this.c
w.toString
return B.c1(B.r(w).as.cy,!0,x,E.ol,x,x,new A.b0O(this),C.L,x,"Edit")},
k(d){B.c(this.w,"_controllerReset").k(0)
this.amg(0)}}
A.aa6.prototype={
av(d,e){this.b.a7(0,new A.aKb(this,d))},
uj(d){return d.b!==this.b}}
A.Xa.prototype={
p5(){this.qa()
this.pB()
this.rM()},
k(d){var x=this,w=x.R$
if(w!=null)w.C(0,x.grJ())
x.R$=null
x.a0(0)}}
A.Yn.prototype={
amy(d,e,f,g,h){var x,w,v,u,t,s=this,r=s.b,q=-r,p=r-s.c,o=Math.sqrt(3)/2*p
r=0+o
x=q+0.5*p
w=q+1.5*p
v=q+2*p
u=0-o
C.b.a4(s.d,B.b([new B.l(0,q),new B.l(r,x),new B.l(r,w),new B.l(r,w),new B.l(0,v),new B.l(0,v),new B.l(u,w),new B.l(u,w),new B.l(u,x)],y.g))
if(d!=null)C.b.a4(s.f,d)
else{t=s.a3n(null)
for(r=s.f;t!=null;){r.push(t)
t=s.a3n(t)}}},
go9(d){return new A.aKa(this.f)},
a3s(d){var x=this.a,w=-x
if(d<=0)w-=d
else x-=d
return new A.aX5(w,x)},
a3n(d){var x,w,v,u=this
if(d==null)return new A.hb(-u.a,0,D.hM)
x=d.a
w=u.a3s(x)
if(x>=u.a&&d.b>=w.b)return null
v=d.b
if(v>=w.b){++x
return new A.hb(x,u.a3s(x).a,D.hM)}return new A.hb(x,v+1,D.hM)},
gvr(d){var x=this.b,w=this.a
return new B.J((w*2+1)*(Math.sqrt(3)/2*x)*2,2*(x+w*1.5*x))},
aRs(d){var x=this,w=x.gvr(x),v=d.b-x.gvr(x).b/2,u=x.b,t=new A.hb(C.d.aj((Math.sqrt(3)/3*(d.a-w.a/2)-0.3333333333333333*v)/u),C.d.aj(0.6666666666666666*v/u),D.hM)
w=D.Ob.gaa5().a
v=t.gaa5().a
if(C.d.ri(Math.abs(w[0]-v[0])+Math.abs(w[1]-v[1])+Math.abs(w[2]-v[2]),2)>x.a)return null
return C.b.G3(x.f,new A.anx(t))},
af0(d,e){var x=this,w=Math.sqrt(3),v=x.b,u=d.a,t=Math.sqrt(3),s=d.b,r=x.d,q=B.ae(r).h("aC<1,l>"),p=B.av(new B.aC(r,new A.anw(new B.iA(w*v*u+t/2*v*s+x.gvr(x).a/2,1.5*v*s+x.gvr(x).b/2,y.O)),q),!0,q.h("bI.E"))
return A.bCc(C.Mz,p,B.bJ(p.length,e,!1,y.G))},
aMe(d){var x=this
if(J.k(x.e,d))return x
return A.b9K(x.f,x.a,x.c,x.b,d)},
aMd(d,e){var x,w,v=this,u=new A.hb(d.a,d.b,e),t=v.f,s=C.b.ON(t,new A.anv(d))
if(J.k(v.rd(0,s),d)&&d.c.m(0,e))return v
x=B.eF(t,!0,y.X)
x[s]=u
w=v.e
if(d.m(0,w))w=u
return A.b9K(x,v.a,v.c,v.b,w)},
$iI:1}
A.aKa.prototype={
A(){var x,w=this,v=w.b
v=v==null?w.b=0:w.b=v+1
x=w.a
if(v>=x.length){w.c=null
return!1}w.c=x[v]
return!0},
gU(d){return this.c}}
A.aX5.prototype={}
A.hb.prototype={
j(d){return"BoardPoint("+this.a+", "+this.b+", "+this.c.j(0)+")"},
m(d,e){if(e==null)return!1
if(J.ai(e)!==B.V(this))return!1
return e instanceof A.hb&&e.a===this.a&&e.b===this.b},
gJ(d){return B.dL(this.a,this.b,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e)},
gaa5(){var x=this.a,w=this.b,v=new B.cq(new Float64Array(3))
v.ue(x,w,-x-w)
return v}}
A.aa7.prototype={}
A.Zt.prototype={
p(d,e){var x=this.c,w=B.j(x).h("lr<e3.E,zv>")
return B.aF(B.av(new B.lr(x,new A.aoS(this),w),!0,w.h("I.E")),C.m,null,C.b7,C.l,null)}}
A.zv.prototype={
p(d,e){var x=null,w=!this.d?x:D.a2r
return B.S(x,B.bie(!1,w,C.h,C.OZ,0,2,!0,this.c,x,4,x,8,x,4,x,x,new A.aLU(this),C.dM,x,x),C.h,x,x,x,x,60,x,x,D.a_W,x,x,60)}}
A.a1b.prototype={
p(d,e){var x=null,w=B.dW([C.n,C.jL,C.nd,C.wv,D.wo],y.G),v=this.c
return B.a7(B.b([B.q(""+v.a+", "+v.b,x,x,x,x,C.m1,C.ud,x,x),new A.Zt(w,v.c,this.d,x)],y.p),C.aM,x,C.j,C.l,C.p)}}
A.a66.prototype={}
var z=a.updateTypes(["~()","~(Dz)","K(hb)","~(NZ)","~(Dy)","~(kK)","~(jk)","~(hb?)","zv(i)"])
A.aTa.prototype={
$0(){},
$S:0}
A.b0J.prototype={
$0(){var x=this.a
x.e=x.e.aMe(this.b)},
$S:0}
A.b0K.prototype={
$2(d,e){var x,w,v,u=null,t=e.b,s=e.d,r=this.a
if(r.x==null){x=new B.bx(new Float64Array(16))
x.tW()
w=r.e
w=w.gvr(w)
v=r.e
x.oW(0,t/2-w.a/2,s/2-v.gvr(v).b/2)
r.x=x
r.f.sl(0,x)}x=r.e
x=x.gvr(x)
return B.iZ(B.dP(B.cy(C.aO,new A.L8(new B.a2(t,s,t,s),B.bbv(B.hd(u,u,u,new A.aa6(r.e,u),x)),0.01,r.gaCS(),r.f,r.d),C.B,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,r.gaD4(),u,u,u),C.ar,u,u,u,u),C.t,u)},
$S:773}
A.b0Q.prototype={
$0(){var x=this.a
x.E(new A.b0P(x))},
$S:0}
A.b0P.prototype={
$0(){var x,w="_controllerReset",v=this.a,u=B.c(v.w,w)
u.sl(0,u.a)
u=v.f.a
x=v.x
v.r=new B.G(B.c(v.w,w),new B.oH(u,x),y.d.h("G<X.T>"))
B.c(v.w,w).e=C.hT
v.r.a.a9(0,v.gTQ())
B.c(v.w,w).oN(0)},
$S:0}
A.b0O.prototype={
$0(){var x,w=this.a
if(w.e.e==null)return
x=w.c
x.toString
F.bd8(new A.b0N(w),x,y.l)},
$S:0}
A.b0N.prototype={
$1(d){var x=null,w=this.a,v=w.e.e
v.toString
return B.S(x,new A.a1b(v,new A.b0M(w,d),x),C.h,x,x,x,x,150,x,x,C.hV,x,x,1/0)},
$S:774}
A.b0M.prototype={
$1(d){var x=this.a
x.E(new A.b0L(x,d,this.b))},
$S:775}
A.b0L.prototype={
$0(){var x=this.a,w=x.e,v=w.e
v.toString
x.e=w.aMd(v,this.b)
B.by(this.c,!1).tm(0,null)},
$S:0}
A.aKb.prototype={
$1(d){var x=d.c,w=this.a.b,v=w.af0(d,B.T(C.d.aj(255*(J.k(w.e,d)?0.7:1)),x.gl(x)>>>16&255,x.gl(x)>>>8&255,x.gl(x)&255))
x=$.aS()?B.aQ():new B.aN(new B.aP())
this.b.zh(0,v,C.O9,x)},
$S:z+7}
A.anx.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.anw.prototype={
$1(d){var x=this.a
return new B.l(d.a+x.a,d.b+x.b)},
$S:251}
A.anv.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.aoS.prototype={
$1(d){var x=this.a
return new A.zv(d,d.m(0,x.d),new A.aoR(x,d),null)},
$S:z+8}
A.aoR.prototype={
$0(){this.a.e.$1(this.b)},
$S:12}
A.aLU.prototype={
$0(){this.a.e.$0()},
$S:0};(function aliases(){var x=A.Wv.prototype
x.alo=x.k
x=A.Xa.prototype
x.amg=x.k})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.S1.prototype,"gaAT","aAU",1)
x(v,"gaCU","aCV",3)
x(v,"gaCQ","aCR",4)
x(v,"gaAV","aAW",5)
w(v,"gMG","aCk",0)
w(v,"gTU","aD8",0)
w(v=A.Vc.prototype,"gTQ","aCl",0)
x(v,"gaCS","aCT",1)
x(v,"gaD4","aD5",6)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.J5,B.hE)
u(B.a1,[A.a8q,A.aa7,A.aX5,A.hb,A.a66])
u(B.A,[A.L8,A.ty])
u(B.E,[A.Wv,A.Xa])
v(A.S1,A.Wv)
u(B.i5,[A.aTa,A.b0J,A.b0Q,A.b0P,A.b0O,A.b0L,A.aoR,A.aLU])
u(B.p,[A.adL,A.Zt,A.zv,A.a1b])
v(A.a8V,B.c2)
v(A.Gh,B.tJ)
v(A.Vc,A.Xa)
v(A.b0K,B.j_)
u(B.d9,[A.b0N,A.b0M,A.aKb,A.anx,A.anw,A.anv,A.aoS])
v(A.aa6,B.of)
v(A.Yn,A.aa7)
v(A.aKa,B.Ld)
x(A.Wv,B.cp)
x(A.Xa,B.cp)
w(A.aa7,B.jb)})()
B.b1(b.typeUniverse,JSON.parse('{"J5":{"hE":["th"],"fo":["th"]},"L8":{"A":[],"d":[]},"S1":{"E":["L8"]},"adL":{"p":[],"d":[]},"a8V":{"c2":["bx"],"an":[]},"Gh":{"W":[]},"ty":{"A":[],"d":[]},"Vc":{"E":["ty"]},"aa6":{"an":[]},"Yn":{"jb":["hb?"],"I":["hb?"],"jb.E":"hb?"},"zv":{"p":[],"d":[]},"Zt":{"p":[],"d":[]},"a1b":{"p":[],"d":[]}}'))
var y=(function rtii(){var x=B.Z
return{X:x("hb"),G:x("i"),s:x("B"),h:x("t<hb>"),g:x("t<l>"),p:x("t<d>"),z:x("ac<E<A>>"),d:x("oH"),O:x("iA<y>"),C:x("rO"),x:x("x"),U:x("th"),L:x("a6<l>"),l:x("d")}})();(function constants(){D.hM=new B.i(4291677645)
D.Ob=new A.hb(0,0,D.hM)
D.wo=new B.i(4280756007)
D.a_W=new B.a2(2,0,2,0)
D.a17=new B.aA(57686,"MaterialIcons",null,!1)
D.a2r=new B.bD(D.a17,null,C.n,null,null)
D.a1K=new B.aA(58659,"MaterialIcons",null,!1)
D.a3a=new B.bD(D.a1K,null,null,null,null)
D.mg=new A.Gh(0,"pan")
D.uR=new A.Gh(1,"scale")
D.azb=new A.Gh(2,"rotate")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bOB","bpz",()=>B.b([J.bs7(J.b9z(B.b4())),J.bs8(J.b9z(B.b4())),J.bs6(J.b9z(B.b4()))],B.Z("t<Eh>")))})()}
$__dart_deferred_initializers__["nS+4p8uch78qkzPYLc7N87KE/wM="] = $__dart_deferred_initializers__.current
