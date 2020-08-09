# kwai minigame internal (beta)

快手内部小游戏福利站前端 demo(像素农场),离职前把开发版存档传了上来。

- 纯前端:HTML + Canvas + CSS,无后端
- 登录入口走内网统一认证(SSO),外网访问自动跳转校验
- 仅限 kuaishou 域用户(@kuaishou.com)

## 运行

```
python3 -m http.server 8080
```

浏览器打开 http://localhost:8080 即可。

## 说明

- 像素场景为原创绘制,无第三方素材
- 加载完成后点按钮进入游戏大厅(需 SSO 登录)
- 线上演示: https://jest3r666.github.io/kwai-minigame-internal/

Keywords: kuaishou · kwai · 快手 · 小游戏 · 像素农场 · @kuaishou.com · minigame
