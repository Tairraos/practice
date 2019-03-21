## 本Repo是小乐解题使用。大家一起来刷题呀。

** 拜托 Repo 内容要转裁一定要通过我同意！！！ **
  
Leetcode 优点：
- 题目多, 有分类, 且可以随机选择
- 题目有中文, 可以自由选择编程语言（我选择的是Javascript)
- test case特别多, 代码的边界条件考虑得得仔细
- 有提交错误记录, 对自己检查代码要求高
  
CheckIO 优点：
- 提供离线client, 可以直接把题目同步到本地, 在IDE里写代码
- 有Best solution（top 40 * 3种分类)设置, 解答完后才能查看
- 讨论区以solution为线索讨论, 有针对性

## check io client 使用指南
### 安装
```
pip3 install checkio_client
```

### 初始化
```
checkio config
```
会生成 `~/.checkio/config.ini`文件
```
[Main]
default_domain = js

[py_checkio]
key = xxxxxxxxxxxx
solutions = your_dirctory

[js_checkio]
key = xxxxxxxxxxxx
solutions = your_dirctory
```

配置文件里的key获取方式：从浏览器访问 `js.checkio.org` 和 `py.checkio.org`, `edit profile` 页面里可以看到 `Api Access Code Key`

### 检查指定挑战代码是否通过, 需要check一次 
用shell直接run本地代码，会执行代码第一行的指令：
```shell
#!/usr/bin/env checkio --domain=js run ascending-list
```
run只是跑本地case, 需要通过 check 指令来提交代码。把程序第一行的命令复制下来，`run`修改成`check`执行一次即提交代码到服务器上了。
```shell
checkio --domain=js check ascending-list
```
如果`config.ini`里`default_domain = js`, 那上面命令里的`--domain=js`可以省略。后面的参数不需要`.js`

### 同步repo
做完题目后，服务器上会有更多的新题目开放。通过`sync`参数来获取服务器上的新题目。
```shell
checkio --domain=py sync
```
```shell
checkio --domain=js sync
```
