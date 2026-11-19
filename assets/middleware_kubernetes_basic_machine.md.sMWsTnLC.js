import{G as e,K as t,at as n,n as r}from"./chunks/framework.CZI4dhmU.js";var i=JSON.parse(`{"title":"机器准备","description":"","frontmatter":{},"headers":[],"relativePath":"middleware/kubernetes/basic/machine.md","filePath":"middleware/kubernetes/basic/machine.md"}`),a={name:`middleware/kubernetes/basic/machine.md`};function o(r,i,a,o,s,c){return n(),e(`div`,null,[...i[0]||=[t(`<h1 id="机器准备" tabindex="-1">机器准备 <a class="header-anchor" href="#机器准备" aria-label="Permalink to “机器准备”">​</a></h1><ul><li>如果是虚拟机，网络选择桥接模式Bridger</li></ul><h2 id="配置清单" tabindex="-1">配置清单 <a class="header-anchor" href="#配置清单" aria-label="Permalink to “配置清单”">​</a></h2><table tabindex="0"><thead><tr><th>机器</th><th>角色</th><th>IP</th></tr></thead><tbody><tr><td>kuboard</td><td>可视化面板</td><td>192.168.0.150</td></tr><tr><td>k8s-master-1</td><td>master</td><td>192.168.0.151</td></tr><tr><td>k8s-node-1</td><td>node</td><td>192.168.0.152</td></tr><tr><td>k8s-node-2</td><td>node</td><td>192.168.0.153</td></tr></tbody></table><h2 id="vmware-fusion" tabindex="-1">VMware fusion <a class="header-anchor" href="#vmware-fusion" aria-label="Permalink to “VMware fusion”">​</a></h2><ul><li>免费的虚拟机软件</li><li>官方下载地址：<a href="https://www.vmware.com/products/fusion.html" target="_blank" rel="noreferrer">https://www.vmware.com/products/fusion.html</a></li><li>其他下载地址：<a href="https://www.free-codecs.com/vmware-fusion-pro_download.htm" target="_blank" rel="noreferrer">https://www.free-codecs.com/vmware-fusion-pro_download.htm</a></li></ul><h2 id="系统镜像" tabindex="-1">系统镜像 <a class="header-anchor" href="#系统镜像" aria-label="Permalink to “系统镜像”">​</a></h2><ul><li>个人腾讯系，选择<code>OpenCloudOS</code></li></ul><h3 id="自建服务器" tabindex="-1">自建服务器 <a class="header-anchor" href="#自建服务器" aria-label="Permalink to “自建服务器”">​</a></h3><ul><li><p>OpenCloudOS，腾讯系开源系统</p></li><li><p>官方下载地址：<a href="https://opencloudos.org/" target="_blank" rel="noreferrer">https://opencloudos.org/</a></p></li><li><p>Anolis OS，阿里系开源系统</p></li><li><p>官方下载地址：<a href="https://openanolis.cn" target="_blank" rel="noreferrer">https://openanolis.cn</a></p></li></ul><h3 id="腾讯系-云服务器" tabindex="-1">腾讯系-云服务器 <a class="header-anchor" href="#腾讯系-云服务器" aria-label="Permalink to “腾讯系-云服务器”">​</a></h3><ul><li>TencentOS，闭源，只能在腾讯云上使用。</li></ul><h3 id="阿里系-云服务器" tabindex="-1">阿里系-云服务器 <a class="header-anchor" href="#阿里系-云服务器" aria-label="Permalink to “阿里系-云服务器”">​</a></h3><ul><li>Alibaba Cloud Linux，闭源，只能在阿里云上使用。</li></ul><h2 id="静态ip" tabindex="-1">静态IP <a class="header-anchor" href="#静态ip" aria-label="Permalink to “静态IP”">​</a></h2><ul><li>虚拟机网络需要设置<code>bridge</code>模式</li></ul><div class="language-bash" dir="ltr"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"># 安装基础工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"># 查看ip地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"># 自己的网卡名称是 enp2s0 / ens33</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"># 修改网卡</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sysconfig/network-scripts/ifcfg-enp2s0</span></span></code></pre></div><ul><li>配置静态IP (192.168.0.150)</li><li>子网掩码：255.255.255.0</li><li>网关地址：192.168.0.1</li><li>首选DNS：223.5.5.5</li><li>备用DNS：114.114.114.114</li></ul><div class="language-txt" dir="ltr"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 网卡类型：以太网</span></span>
<span class="line"><span>TYPE=Ethernet</span></span>
<span class="line"><span># 代理方式：关闭代理</span></span>
<span class="line"><span>PROXY_METHOD=none</span></span>
<span class="line"><span># 仅浏览器代理：关闭</span></span>
<span class="line"><span>BROWSER_ONLY=no</span></span>
<span class="line"><span># IP获取方式：static静态IP（dhcp为自动获取）</span></span>
<span class="line"><span>BOOTPROTO=static</span></span>
<span class="line"><span># 是否作为默认路由：开启</span></span>
<span class="line"><span>DEFROUTE=yes</span></span>
<span class="line"><span># IPv4路由失败时是否终止网络：关闭</span></span>
<span class="line"><span>IPV4_FAILURE_FATAL=no</span></span>
<span class="line"><span># 启用IPv6功能</span></span>
<span class="line"><span>IPV6INIT=yes</span></span>
<span class="line"><span># IPv6自动配置开启</span></span>
<span class="line"><span>IPV6_AUTOCONF=yes</span></span>
<span class="line"><span># IPv6默认路由开启</span></span>
<span class="line"><span>IPV6_DEFROUTE=yes</span></span>
<span class="line"><span># IPv6异常不直接断网</span></span>
<span class="line"><span>IPV6_FAILURE_FATAL=no</span></span>
<span class="line"><span># 网卡连接名称</span></span>
<span class="line"><span>NAME=enp2s0</span></span>
<span class="line"><span># 系统硬件网卡名，和实际网卡一致</span></span>
<span class="line"><span>DEVICE=enp2s0</span></span>
<span class="line"><span># 开机自动启用这块网卡 yes启用 no禁用</span></span>
<span class="line"><span>ONBOOT=yes</span></span>
<span class="line"><span># 自定义静态IP地址</span></span>
<span class="line"><span>IPADDR=192.168.0.150</span></span>
<span class="line"><span># 子网掩码</span></span>
<span class="line"><span>NETMASK=255.255.255.0</span></span>
<span class="line"><span># 网关地址（路由器地址）</span></span>
<span class="line"><span>GATEWAY=192.168.0.1</span></span>
<span class="line"><span># 首选DNS（阿里公共DNS）</span></span>
<span class="line"><span>DNS1=223.5.5.5</span></span>
<span class="line"><span># 备用DNS（国内通用DNS）</span></span>
<span class="line"><span>DNS2=114.114.114.114</span></span></code></pre></div><ul><li>重启网络服务</li></ul><div class="language-bash" dir="ltr"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"># 重载配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nmcli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connection</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"># 重启网卡</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nmcli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connection</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enp2s0</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;"># 重启系统</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reboot</span></span></code></pre></div><ul><li>验证IP地址</li></ul><div class="language-bash" dir="ltr"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span></span></code></pre></div>`,23)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};