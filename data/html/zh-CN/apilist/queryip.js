document.write("<h3>API地址</h3>\n\n<p>本功能使用了 <a href=\"https://gitee.com/lionsoul/ip2region\">狮子的魂</a> 项目提供的IP地址数据库</p>\n<pre><code>GET https://devops-api.com/api/v1/queryip?ip=IP地址\n</code></pre>\n\n<p>返回:</p>\n<pre><code>{\n    &quot;data&quot;: {\n        &quot;ip&quot;: &quot;xxx.xxx.xxx.xxx&quot;,\n        &quot;ipInfo&quot;: {\n            &quot;CityId&quot;: 995,\n            &quot;Country&quot;: &quot;中国&quot;,\n            &quot;Region&quot;: &quot;0&quot;,\n            &quot;Province&quot;: &quot;上海&quot;,\n            &quot;City&quot;: &quot;上海市&quot;,\n            &quot;ISP&quot;: &quot;电信&quot;\n        }\n    },\n    &quot;entryType&quot;: &quot;Query IP&quot;,\n    &quot;errmsg&quot;: &quot;&quot;,\n    &quot;requestId&quot;: &quot;6aae483e-5c72-4cb7-bbb7-50089e2da4d3&quot;,\n    &quot;statuscode&quot;: 0\n}\n</code></pre>\n")