import{G as e,K as t,at as n,n as r}from"./chunks/framework.CZI4dhmU.js";var i=JSON.parse(`{"title":"Compose","description":"","frontmatter":{},"headers":[],"relativePath":"middleware/docker/basic/compose.md","filePath":"middleware/docker/basic/compose.md"}`),a={name:`middleware/docker/basic/compose.md`};function o(r,i,a,o,s,c){return n(),e(`div`,null,[...i[0]||=[t(`<h1 id="compose" tabindex="-1">Compose <a class="header-anchor" href="#compose" aria-label="Permalink to “Compose”">​</a></h1><ul><li><p>Compose 是用于定义和运行多容器 Docker 应用程序的工具。</p></li><li><p>官方文档：<a href="https://docs.docker.com/get-started/08_using_compose/" target="_blank" rel="noreferrer">https://docs.docker.com/get-started/08_using_compose/</a></p></li></ul><h2 id="完整示例" tabindex="-1">完整示例 <a class="header-anchor" href="#完整示例" aria-label="Permalink to “完整示例”">​</a></h2><ul><li>compose.yml</li></ul><div class="language-yml" dir="ltr"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"># 定义应用服务</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    # 定义nginx应用</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">    nginx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 选择 nginx版本镜像</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nginx:latest</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 开机启动</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 端口映射 主机端口：容器端口</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">80:80</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 数据卷持久化</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 同步nginx配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bind</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/zouyl/code/docker/volume/nginx/conf.d</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/etc/nginx/conf.d</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 同步nginx工作目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bind</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/zouyl/code</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/share/nginx/html</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 同步log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bind</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/zouyl/code/docker/volume/nginx/logs</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/log/nginx</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 依赖</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">php</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">web-network</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    # 定义php应用</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">    php</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # dockerfile 构建镜像</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 构建目录</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">            context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./php</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 构建Dockerfile名称</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">            dockerfile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Dockerfile</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 开机启动</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 端口映射 主机端口：容器端口</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">9000:9000</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 配置环境变量</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 配置时区</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">            TZ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 数据卷持久化</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 同步php配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bind</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/zouyl/code/docker/volume/php8.2/conf/php.ini</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/local/etc/php/php.ini</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 同步log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bind</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/zouyl/code/docker/volume/php8.2/logs</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/log/php</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 同步php工作目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bind</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/zouyl/code</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/www/html/</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 依赖</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mysql</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">web-network</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    # 定义redis应用</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">    redis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis:latest</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 开机启动</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 端口映射 主机端口：容器端口</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">6379:6379</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 数据卷持久化</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 同步redis配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bind</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/zouyl/code/docker/volume/redis7/redis.conf</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/local/etc/redis/redis.conf</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 同步redis数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bind</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/zouyl/code/docker/volume/redis7/data</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/data</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 同步log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bind</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/zouyl/code/docker/volume/redis7/logs</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/log/redis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 指定配置文件启动</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            redis-server /usr/local/etc/redis/redis.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">    # 定义mysql应用</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">    mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 选择 mysql版本镜像</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mysql:9.1</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 开机启动</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 端口映射 主机端口：容器端口</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3306:3306</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 配置环境变量</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">            MYSQL_ROOT_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123456</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">        # 数据卷持久化</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 同步log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bind</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/zouyl/code/docker/volume/mysql9.1/log</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/log/mysql</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 同步 配置文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bind</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/zouyl/code/docker/volume/mysql9.1/conf/my.cnf</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/etc/mysql/conf.d/my.cnf</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 同步 配置数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bind</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/zouyl/code/docker/volume/mysql9.1/data</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">              target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/lib/mysql</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">            # 设置编码格式</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            --character-set-server=utf8mb4</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            --collation-server=utf8mb4_general_ci</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"># 定义网络</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">    web-network</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#11782a;--shiki-dark:#85E89D;">        driver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bridge</span></span></code></pre></div>`,5)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};