## 本Repo是小乐解题使用。大家一起来刷题呀。

**拜托 Repo 内容要转裁一定要通过我同意！！！**
  
Leetcode：
- 题目多, 有分类, 非收费题目可以自由选择完成顺序
- 题目有中文, 可以自由选择编程语言（我选择的是 Javascript)
- test case 多, 代码的边界条件考虑得仔细
- 有执行时间少，执行内存少榜，这点特别优秀
- 有提交错误记录, 对自己检查代码要求高
- 部分题目提供解题思路
- 评论区所有语言解答混在一起，不需要解答完成就能必须在线答题  
- 目前有 1015 题，其中 844 题免费题目 (中文站仅能看到免费题目)

CheckIO：
- 提供离线 client, 可以直接把题目同步到本地, 在 IDE 里写代码
- 有Best solution（top 40 * 3 种分类)设置, 解答完后才能查看
- 讨论区以 solution 为线索讨论, 有针对性
- 用户通过循序渐进的答题获取积分开放更多题目
- 目前 162 题，其中 145 题免费

## leetcode 本地IDE调试指南
### 获取所有代码
```
npm i xtool.js
node generateTemplate.js
```
会在当前目录下生成leetcode/template目录，按题目编码分别放进相应的子目录里。  
生成的答题模板包含题目描述，难度，和调试用的框架代码。  
执行的时候会统计代码执行时间。  

### 安装断言支持
``` 
npm i assert
```
安装完断言库，可以直接使用node-inspector来打断点调试代码。用vscode或webstorms来调试会更方便。  
以上步骤生成的代码模板带着test case模板，还需要在写代码的时候补写测试case。  
建议先考虑Case，尽可能多地考虑边界条件。空输入，超大超长输入，负数，都应该考虑。TDD是一种修养。  

## check io 本地IDE调试指南
### 安装client
```
pip3 install checkio_client
```

### 初始化
key获取方式：从浏览器访问 `js.checkio.org`，`edit profile` 页面里可以看到 `Api Access Code Key`
执行 `checkio config` 配置本地文件保存路径及access key

### 同步repo
做完题目后, 服务器上会有更多的新题目开放。通过`sync`参数来获取服务器上的新题目。
第一次执行 `checkio sync` 会把服务器上所有能回答的题目都同步到本地。

### 检查指定挑战代码是否通过, 需要check一次 
用ide打开本地的js文件，看到文件第一行代码
```shell
#!/usr/bin/env checkio --domain=js run ascending-list
```
把后面半行`checkio --domain=js run ascending-list`拷贝出来，把里面的`run`改成`check`后在terminal里执行。
terminal里会显示test case执行的情况, 如果全部通过会显示`Congratulations`字样。

### 得到更多的题目
答题完成并通过检查后，再次执行该命令`checkio sync`会把更多可以回答的题目同步回来。
如果你在浏览器里回答了题目并通过了测试，也一样会同步回来。

### 安装断言支持
``` 
npm i assert
```
安装完断言库，可以直接使用node-inspector来打断点调试代码。用vscode或webstorms来调试会更方便。