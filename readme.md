## check io client 使用
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
key = d1438e26b92e4386b5b190abee5b4765
solutions = /Users/xiaole/Workspace/checkio/py

[js_checkio]
key = a46d0b1e82ae4ed1b214fb2e2a45ebb2
solutions = /Users/xiaole/Workspace/checkio/js
```

配置文件里的key获取方式：从浏览器访问 `js.checkio.org`和`py.checkio.org`，`edit profile`页面里可以看到`Api Access Code Key`

### 检查指定挑战代码是否通过, 需要check和run各一次
```shell
checkio --domain=py run non-unique-elements
checkio --domain=py check non-unique-elements
```
```shell
checkio --domain=js run non-unique-elements
checkio --domain=js check non-unique-elements
```
如果`config.ini`里`default_domain = js`，那上面命令里的`--domain=js`可以省略。后面的参数不需要`.js`

### 同步repo
```shell
checkio --domain=py sync
```
```shell
checkio --domain=js sync
```
