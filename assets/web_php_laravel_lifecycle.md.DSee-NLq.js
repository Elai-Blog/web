import{G as e,K as t,at as n,n as r}from"./chunks/framework.CZI4dhmU.js";var i=JSON.parse(`{"title":"生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"web/php/laravel/lifecycle.md","filePath":"web/php/laravel/lifecycle.md"}`),a={name:`web/php/laravel/lifecycle.md`};function o(r,i,a,o,s,c){return n(),e(`div`,null,[...i[0]||=[t(`<h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to “生命周期”">​</a></h1><ul><li><p>简单来说：接收请求 → 创建应用容器 → 内核处理请求 → 路由分发 → 执行业务 → 返回响应 → 终止应用</p></li><li><p>文字流程图</p></li></ul><div class="language-text" dir="ltr"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>HTTP请求</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>public/index.php</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>bootstrap/app.php → 创建Application容器 + 配置路由/中间件/异常</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>$app-&gt;handleRequest() 启动HTTP内核</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>执行引导程序：</span></span>
<span class="line"><span>env → config → 异常处理 → Facade → 所有Provider register() → 所有Provider boot()</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>请求进入中间件洋葱管道</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>路由匹配</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>容器注入依赖 → 执行控制器/闭包 → 生成Response</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>逆向走完所有中间件</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>response-&gt;send() 输出内容到浏览器</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>app-&gt;terminate() 执行后置回调</span></span>
<span class="line"><span>生命周期结束（PHP-FPM进程销毁）</span></span></code></pre></div><h2 id="入口-public-index-php" tabindex="-1">入口 <code>public/index.php</code> <a class="header-anchor" href="#入口-public-index-php" aria-label="Permalink to “入口 public/index.php”">​</a></h2><ul><li>所有请求到达应用入口文件（<code>public/index.php</code>）</li><li>加载 <code>Composer</code> 自动加载器</li><li>引入 <code>bootstrap/app.php</code> 文件，创建 <code>Application</code>（服务容器）实例</li></ul><h2 id="初始化应用-bootstrap-app-php" tabindex="-1">初始化应用 <code>bootstrap/app.php</code> <a class="header-anchor" href="#初始化应用-bootstrap-app-php" aria-label="Permalink to “初始化应用 bootstrap/app.php”">​</a></h2><ul><li>初始化应用容器</li><li>注册路由</li><li>注册中间件</li><li>异常处理</li></ul><h2 id="内核启动-bootstrap-kernel-php" tabindex="-1">内核启动 <code>bootstrap/kernel.php</code> <a class="header-anchor" href="#内核启动-bootstrap-kernel-php" aria-label="Permalink to “内核启动 bootstrap/kernel.php”">​</a></h2><ul><li>加载<code>.env</code>配置文件</li><li>加载 <code>config</code> 所有配置</li><li>初始化异常处理器</li><li>注册 <code>Facade</code> 静态代理</li></ul><h2 id="中间件" tabindex="-1">中间件 <a class="header-anchor" href="#中间件" aria-label="Permalink to “中间件”">​</a></h2><ul><li>全局中间件 → 路由中间件组 → 路由单独中间件</li></ul><h2 id="路由分发" tabindex="-1">路由分发 <a class="header-anchor" href="#路由分发" aria-label="Permalink to “路由分发”">​</a></h2><ul><li>根据请求路径匹配路由</li><li>执行路由回调函数</li></ul><h2 id="执行业务" tabindex="-1">执行业务 <a class="header-anchor" href="#执行业务" aria-label="Permalink to “执行业务”">​</a></h2><ul><li>执行控制器方法 / 路由闭包</li><li>模型操作、业务服务调用、事件触发</li><li>必须返回 Response、JsonResponse、视图、字符串等可响应对象</li></ul><h2 id="返回响应" tabindex="-1">返回响应 <a class="header-anchor" href="#返回响应" aria-label="Permalink to “返回响应”">​</a></h2><ul><li>返回响应给客户端</li></ul><h2 id="终止应用" tabindex="-1">终止应用 <a class="header-anchor" href="#终止应用" aria-label="Permalink to “终止应用”">​</a></h2><ul><li>执行终止中间件</li></ul>`,19)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};