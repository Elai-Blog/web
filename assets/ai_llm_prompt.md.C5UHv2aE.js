import{G as e,K as t,at as n,n as r}from"./chunks/framework.CZI4dhmU.js";var i=JSON.parse(`{"title":"提示词","description":"","frontmatter":{},"headers":[],"relativePath":"ai/llm/prompt.md","filePath":"ai/llm/prompt.md"}`),a={name:`ai/llm/prompt.md`};function o(r,i,a,o,s,c){return n(),e(`div`,null,[...i[0]||=[t(`<h1 id="提示词" tabindex="-1">提示词 <a class="header-anchor" href="#提示词" aria-label="Permalink to “提示词”">​</a></h1><ul><li>好的<code>prompt</code>需要不断调优。</li><li>说清楚自己到底想要什么，要具体。</li><li>不要让机器去猜测太多，为了不让机器去猜测，我们就需要告诉细节。</li></ul><h2 id="组成" tabindex="-1">组成 <a class="header-anchor" href="#组成" aria-label="Permalink to “组成”">​</a></h2><h3 id="角色定义" tabindex="-1">角色定义 <a class="header-anchor" href="#角色定义" aria-label="Permalink to “角色定义”">​</a></h3><p>告诉 <code>llm</code> 你是什么角色，需要做什么，以及你能做什么。</p><h3 id="能力与工具清单" tabindex="-1">能力与工具清单 <a class="header-anchor" href="#能力与工具清单" aria-label="Permalink to “能力与工具清单”">​</a></h3><ul><li>告诉 <code>llm</code> 你能做什么，以及你有哪些工具。</li></ul><h3 id="思考框架" tabindex="-1">思考框架 <a class="header-anchor" href="#思考框架" aria-label="Permalink to “思考框架”">​</a></h3><ul><li>你必须按下面步骤思考，并且把思考写在标签内，对外答案在标签：</li><li>Thought：我现在要解决什么？缺少哪些信息？</li><li>Action：选择工具 + 填写参数（不需要工具就直接输出答案）</li><li>Observation：接收工具返回结果</li><li>循环：回到 Thought，继续判断是否信息足够，直到可以给出最终答案</li><li>禁止跳过思考直接给结论。</li></ul><h3 id="约束边界" tabindex="-1">约束边界 <a class="header-anchor" href="#约束边界" aria-label="Permalink to “约束边界”">​</a></h3><ul><li>禁止编造工具返回结果。</li><li>遇到超出工具范围，直接说明，不要强行回答。</li><li>输出格式固定（JSON/Markdown），方便程序解析。</li></ul><h3 id="输出格式" tabindex="-1">输出格式 <a class="header-anchor" href="#输出格式" aria-label="Permalink to “输出格式”">​</a></h3><p>结构化输出,让程序好进行处理，推荐 JSON。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to “示例”">​</a></h2><h3 id="思考型-agent-单轮回答" tabindex="-1">思考型 Agent（单轮回答） <a class="header-anchor" href="#思考型-agent-单轮回答" aria-label="Permalink to “思考型 Agent（单轮回答）”">​</a></h3><div class="language-txt" dir="ltr"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>你是一个任务智能代理Agent，可以使用工具解决用户问题。</span></span>
<span class="line"><span>遵循ReAct循环：Thought → Action → Observation，重复直到可以输出最终答案。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【可用工具】</span></span>
<span class="line"><span>1. Search：搜索外部信息，参数query</span></span>
<span class="line"><span>2. CodeInterpreter：运行代码，参数code</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【规则】</span></span>
<span class="line"><span>1. 不确定的事实，必须调用Search，严禁编造信息。</span></span>
<span class="line"><span>2. 每一轮只执行一个Action。</span></span>
<span class="line"><span>3. 思考过程写在thought字段。</span></span>
<span class="line"><span>4. 当信息足够，action设为null，输出final_answer。</span></span>
<span class="line"><span>5. 最多5轮循环，超过则终止并说明原因。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【输出要求】只输出JSON，不要额外文字：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;thought&quot;:&quot;&quot;,</span></span>
<span class="line"><span>    &quot;action&quot;:{&quot;tool&quot;:&quot;&quot;,&quot;params&quot;:{}},</span></span>
<span class="line"><span>    &quot;final_answer&quot;:&quot;&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="规划型-agent-复杂长任务" tabindex="-1">规划型 Agent （复杂长任务） <a class="header-anchor" href="#规划型-agent-复杂长任务" aria-label="Permalink to “规划型 Agent （复杂长任务）”">​</a></h3><div class="language-txt" dir="ltr"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>你是规划Agent，处理复杂任务，分为2阶段：</span></span>
<span class="line"><span>阶段1：制定完整计划。拆解用户任务为有序子任务列表，判断每个子任务是否需要调用工具。</span></span>
<span class="line"><span>阶段2：按计划逐个执行子任务，收集结果，遇到障碍修改计划。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>规则：</span></span>
<span class="line"><span>1. 先输出完整任务规划，再开始执行，不要直接跳到最终答案。</span></span>
<span class="line"><span>2. 每完成一个子任务，记录结果，再进入下一项。</span></span>
<span class="line"><span>3. 如果子任务执行失败，评估是否调整计划，而不是直接终止。</span></span>
<span class="line"><span>4. 全部完成后整合所有子结果，生成最终输出。</span></span></code></pre></div>`,18)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};