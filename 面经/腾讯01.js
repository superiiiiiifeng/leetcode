// 排序算法类模板
function less(num1,num2) {
  return num1 < num2
}
function exch(a,i,j) {
  let t = a[i];
  a[i] = a[j];
  a[j] = t;
}
function isSorted(a) {
  for (let i = 1; i < a.length; i++) {
    if (a[i-1] > a[i]) return false
  }
  return true
}
/*
腾讯 PCG
一面 视频面试 40min
1.自我介绍
  我叫潘跟，今年25岁，本科毕业于安徽大学，目前在南京邮电大学攻读硕士研究生二年级，我的专业是通信工程，但是个人对互联网行业尤其是其中的前端技术较为感兴趣，所以从研一就开始自学JavaScript，
  因为本科也学习过C语言，有了一些编程基础，所以学习js的过程并不感到吃力，反而越学越感到有趣，平时爱好跑步、听音乐、打国球。
2.之前实习中遇到觉得最有困难的事情，如何解决的
  之前在趋势科技实习过一段时间，在实习过程中，有一次，mentor给我交代一个任务，是做一个homePage的admin后台管理数据页面，因为涉及到前后端联合开发，还涉及到数据库的操作，
  所以刚接手这个任务是有点懵的，后来就去github上找别人做过的关于admin的项目，获得了一点启发，有了一点想法后，就去跟mentor深入交流了一番，最终决定通过nodejs搭建后台服务器，
  结合mongodb数据库开发了一套可以正常投入使用的admin后台管理系统
3.我看你项目中有一个项目是前后端都是自己做的，你怎么解决跨域的
  跨域问题存在的原因：随着前后端分离技术的越来越盛行，跨域问题也逐渐凸显了出来。
  跨域问题的根本原因：跨域又称为非同源策略请求，因为浏览器受到同源策略SOP(Same origin policy)的限制(浏览器的安全机制)，当前域名的js只能读取同域下的窗口属性。什么叫做同源策略？就是不同的域名、不同端口、不同的协议不允许共享资源，以保障浏览器安全。同源策略是针对浏览器设置的门槛。
  这里要注意的是，只有访问类型为xhr（XMLHttpRequest)的才会出现跨域。
  前后端跨域问题也是我在实习过程中遇到过的一个问题，解决跨域问题我学习了两种方法：
  方法1
  直接在服务器端设置跨域访问，允许某些来源、某些接口、某些方法以某些形式被跨域调用。
  nodejs express配置
  app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*'); //不安全,不推荐
    res.header('Access-Control-Allow-Headers','X-Requested-With');
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By','3.2.1');
    res.header('Content-Type','application/json;charset=utf-8');
    next();
  });
  方法2
  CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing），是一种允许当前域（domain）的资源（比如html/js/web service）被其他域（domain）的脚本请求访问的机制，它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
  CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。
  整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。
  因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。
  浏览器将CORS请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。
  只要同时满足以下两大条件，就属于简单请求。
  （1) 请求方法是以下三种方法之一：
    HEAD
    GET
    POST
  （2）HTTP的头信息不超出以下几种字段：
    Accept
    Accept-Language
    Content-Language
    Last-Event-ID
    Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain、
    凡是不同时满足上面两个条件，就属于非简单请求。
    对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段。
  node中采用cors模块即可解决跨域问题
  app.use(cors());
4.如果我是一个黑客，现在对你这个项目的后端进行攻击，我能如何进行攻击
  比如破解一个后台admin管理系统的管理员帐号，一般得到的密码都是经过加密的，比如md5，可以通过md5解密工具进行解密获得密码
  拿到管理员权限后对网站的数据进行恶意的增删改查操作
  查询数据：耗尽网络式攻击。攻击者网络带宽资源超级丰富的，可以OS占满被攻击对象的入口和出口带宽，无法对外正常提供服务。
            耗尽服务器负载攻击。大量高并发的数据库请求，超过数据库的最大连接数，导致web应用无法完成数据库的正常查询。
            耗尽服务器CPU攻击。对于有复杂计算的应用，每次调用一次服务会造成大量的CPU消耗，导致服务异常。
            耗尽服务器内存攻击。通过查询产生大量的session，耗尽服务器内存。
   增加数据：在web应用里面恶意注册几十万级别的 僵尸 用户。然后通过程序来操控这些用户来投票，转发，刷帖等等。比如，微博，广告行业
   删除/修改数据：造成数据的不正常，这样的后果也是不可估量的。比如金融行业，比如电子交易行业。
   通过“图灵测试”可以达到对自然人和机器的良好区分，以达到将机器程序抵挡在外面的目的，阻止其利用其强大的计算能力和自动化信息处理能力来实施破坏。这就是“验证码”的最基本作用。
   验证码（CAPTCHA）是“Completely Automated Public Turing test to tell Computers and Humans Apart”（全自动区分计算机和人类的图灵测试）的缩写，是一种区分用户是计算机还是人的公共全自动程序。可以防止：恶意破解密码、刷票、论坛灌水，有效防止某个黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试，实际上用验证码是现在很多网站通行的方式，我们利用比较简易的方式实现了这个功能。这个问题可以由计算机生成并评判，但是必须只有人类才能解答。由于计算机无法解答CAPTCHA的问题，所以回答出问题的用户就可以被认为是人类。
5.对以下对象进行排序，面试官先给了一个TS的写法，我说我还没学TS，又问我会不会用JS进行一个TS的写法，我说不会，于是简化成下面这样
  const a = [{ age: 51 },{ age: 23 },{ age: 53 },{ age: 12 },{ age: 24 },{ age: 33 },{ age: 53 },{ age: 65 },{ age: 8 },{ age: 91 },];
 */
var a = [{ age: 51 },{ age: 23 },{ age: 53 },{ age: 12 },{ age: 24 },{ age: 33 },{ age: 53 },{ age: 65 },{ age: 8 },{ age: 91 },];
a.sort(function (a,b) {
  return a.age - b.age
});
console.log(a);

