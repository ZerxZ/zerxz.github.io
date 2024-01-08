import{_ as s,o as n,c as a,U as l}from"./chunks/framework.79SMDegS.js";const C=JSON.parse('{"title":"GDSCRIPT4 速查表","description":"速查表","frontmatter":{"title":"GDSCRIPT4 速查表","description":"速查表","tag":["Godot"],"categories":["Godot"]},"headers":[],"relativePath":"godot/index.md","filePath":"godot/index.md","lastUpdated":1704731692000}'),p={name:"godot/index.md"},o=l(`<h1 id="备忘清单" tabindex="-1">备忘清单 <a class="header-anchor" href="#备忘清单" aria-label="Permalink to &quot;备忘清单&quot;">​</a></h1><h2 id="基础节点" tabindex="-1">基础节点 <a class="header-anchor" href="#基础节点" aria-label="Permalink to &quot;基础节点&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-BxVjM" id="tab-RLhYwB8" checked="checked"><label for="tab-RLhYwB8">base_node.gd</label></div><div class="blocks"><div class="language-gdscript active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">gdscript</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 自定义节点图片</span></span>
<span class="line"><span style="color:#61AFEF;">@icon</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;res://icon.svg&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 自定义节点类名</span></span>
<span class="line"><span style="color:#C678DD;">class_name</span><span style="color:#E5C07B;"> MyNode</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 继承节点类型</span></span>
<span class="line"><span style="color:#C678DD;">extends</span><span style="color:#E5C07B;"> Node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 节点变量</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> a</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 5</span><span style="color:#7F848E;font-style:italic;"> # 整数</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> s</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &quot;Hello&quot;</span><span style="color:#7F848E;font-style:italic;"> # 字符串</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> arr</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">] </span><span style="color:#7F848E;font-style:italic;"># 数组</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> dict</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> {</span><span style="color:#98C379;">&quot;key&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;value&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">} </span><span style="color:#7F848E;font-style:italic;"># 字典</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> other_dict</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> {</span><span style="color:#E06C75;">key</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &quot;value&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">other_key</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 2</span><span style="color:#ABB2BF;">}  </span><span style="color:#7F848E;font-style:italic;"># 另外写法字典</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> typed_var</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">int</span><span style="color:#7F848E;font-style:italic;"> # 类型标注</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> inferred_type</span><span style="color:#56B6C2;"> :=</span><span style="color:#98C379;"> &quot;String&quot;</span><span style="color:#7F848E;font-style:italic;"> # 类型推断</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 获取节点</span></span>
<span class="line"><span style="color:#61AFEF;">@onready</span><span style="color:#C678DD;"> var</span><span style="color:#E06C75;"> child_node</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> get_node</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">&quot;child_node&quot;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#E5C07B;"> Node</span></span>
<span class="line"><span style="color:#61AFEF;">@onready</span><span style="color:#C678DD;"> var</span><span style="color:#E06C75;"> child_node2</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> $</span><span style="color:#56B6C2;">child_node</span><span style="color:#56B6C2;"> as</span><span style="color:#56B6C2;"> Node</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 获取唯一化节点</span></span>
<span class="line"><span style="color:#61AFEF;">@onready</span><span style="color:#C678DD;"> var</span><span style="color:#E06C75;"> unique_child_node</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> get_node</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">&quot;</span><span style="color:#C678DD;">%</span><span style="color:#56B6C2;">child_node&quot;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#E5C07B;"> Node</span></span>
<span class="line"><span style="color:#61AFEF;">@onready</span><span style="color:#C678DD;"> var</span><span style="color:#E06C75;"> unique_child_node2</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> %</span><span style="color:#56B6C2;">child_node</span><span style="color:#56B6C2;"> as</span><span style="color:#56B6C2;"> Node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 节点常量 不能修改</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#D19A66;"> ANSWER</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 42</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#D19A66;"> THE_NAME</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &quot;Charly&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 节点枚举 默认从0开始</span></span>
<span class="line"><span style="color:#C678DD;">enum</span><span style="color:#ABB2BF;"> {</span><span style="color:#D19A66;">UNIT_NEUTRAL</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">UNIT_ENEMY</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">UNIT_ALLY</span><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">enum</span><span style="color:#E5C07B;"> Named</span><span style="color:#ABB2BF;"> {</span><span style="color:#D19A66;">THING_1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">THING_2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">ANOTHER_THING</span><span style="color:#56B6C2;"> =</span><span style="color:#56B6C2;"> -</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 内置Vector类型</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> v2</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> Vector2</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> v3</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> Vector3</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 声明函数</span></span>
<span class="line"><span style="color:#C678DD;">func</span><span style="color:#61AFEF;"> some_function</span><span style="color:#ABB2BF;">(</span><span style="color:#ABB2BF;font-style:italic;">param1</span><span style="color:#ABB2BF;">, </span><span style="color:#ABB2BF;font-style:italic;">param2</span><span style="color:#ABB2BF;">, </span><span style="color:#ABB2BF;font-style:italic;">param3</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#C678DD;">	const</span><span style="color:#E06C75;"> local_const</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	# 条件语句</span></span>
<span class="line"><span style="color:#C678DD;">	if</span><span style="color:#E06C75;"> param1</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#E06C75;"> local_const</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#61AFEF;">		print</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">param1</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">	elif</span><span style="color:#E06C75;"> param2</span><span style="color:#56B6C2;"> &gt;</span><span style="color:#D19A66;"> 5</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#61AFEF;">		print</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">param2</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">	else</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#61AFEF;">		print</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;Fail!&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	# 循环语句</span></span>
<span class="line"><span style="color:#C678DD;">	for</span><span style="color:#E06C75;"> i</span><span style="color:#C678DD;"> in</span><span style="color:#61AFEF;"> range</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#61AFEF;">		print</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	# while循环</span></span>
<span class="line"><span style="color:#C678DD;">	while</span><span style="color:#E06C75;"> param2</span><span style="color:#56B6C2;"> !=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">		param2</span><span style="color:#56B6C2;"> -=</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	# match语句</span></span>
<span class="line"><span style="color:#C678DD;">	match</span><span style="color:#E06C75;"> param3</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#D19A66;">		3</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#61AFEF;">			print</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;param3 is 3!&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D19A66;">		1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#61AFEF;">			print</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;param3 is 1 or 2!&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D19A66;">		_</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#61AFEF;">			print</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;param3 is not 3!&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">	var</span><span style="color:#E06C75;"> local_var</span><span style="color:#56B6C2;"> =</span><span style="color:#E06C75;"> param1</span><span style="color:#56B6C2;"> +</span><span style="color:#D19A66;"> 3</span></span>
<span class="line"><span style="color:#C678DD;">	return</span><span style="color:#E06C75;"> local_var</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div></div></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-vFthR" id="tab-OJdbGuW" checked="checked"><label for="tab-OJdbGuW">setget.gd</label></div><div class="blocks"><div class="language-gdscript active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">gdscript</span><pre class="shiki one-dark-pro has-focused-lines vp-code"><code><span class="line"><span style="color:#C678DD;">extends</span><span style="color:#E5C07B;"> Node</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> _name</span><span style="color:#ABB2BF;">:</span><span style="color:#E5C07B;">String</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &quot;&quot;</span><span style="color:#ABB2BF;">; </span></span>
<span class="line has-focus"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> person_name</span><span style="color:#ABB2BF;"> : </span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">:</span></span>
<span class="line has-focus"><span style="color:#61AFEF;">    get</span><span style="color:#ABB2BF;">:</span></span>
<span class="line has-focus"><span style="color:#C678DD;">        return</span><span style="color:#E06C75;"> _name</span></span>
<span class="line has-focus"><span style="color:#61AFEF;">    set</span><span style="color:#ABB2BF;">(</span><span style="color:#ABB2BF;font-style:italic;">value</span><span style="color:#ABB2BF;">):</span></span>
<span class="line has-focus"><span style="color:#E06C75;">        _name</span><span style="color:#56B6C2;"> =</span><span style="color:#E06C75;"> value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> test</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &quot;&quot;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> _age</span><span style="color:#ABB2BF;">:</span><span style="color:#E5C07B;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 18</span><span style="color:#ABB2BF;">; </span></span>
<span class="line has-focus"><span style="color:#C678DD;">var</span><span style="color:#E06C75;"> person_age</span><span style="color:#ABB2BF;"> : </span><span style="color:#E5C07B;">int</span><span style="color:#ABB2BF;">:</span></span>
<span class="line has-focus"><span style="color:#61AFEF;">    get</span><span style="color:#ABB2BF;">:</span></span>
<span class="line has-focus"><span style="color:#C678DD;">        return</span><span style="color:#E06C75;"> _age</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></div></div>`,5),e=[o];function r(c,t,y,i,B,b){return n(),a("div",null,e)}const F=s(p,[["render",r]]);export{C as __pageData,F as default};
