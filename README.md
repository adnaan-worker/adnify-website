# Adnify 官网

## 项目信息

- **软件名**: Adnify
- **作者**: adnaan
- **邮箱**: adnaan.worker@gmail.com
- **GitHub**: https://github.com/adnaan-worker/adnify
- **Gitee**: https://gitee.com/adnaan/adnify

## 预览

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

## 需要补充的截图

### 1. Hero 区域 - 两张截图

**截图 A: 智能补全演示**
- 位置: Hero 左侧 slice-back
- 内容: Monaco 编辑器中的 LSP 智能补全弹窗
- 尺寸: 400×300

**截图 B: AI Agent 对话面板**
- 位置: Hero 右侧 slice-front
- 内容: AI 聊天面板，展示对话和工具调用
- 尺寸: 400×300

### 2. 工作流区域 - 主界面截图

**截图 C: 主界面全貌**
- 位置: workflow 区域 main-panel
- 内容: 完整界面 = 文件树 + 编辑器 + AI 面板 + 终端
- 尺寸: 800×500

**截图 D: AI 工具调用**
- 位置: workflow 区域 side-panel
- 内容: Agent 执行工具的过程（如 edit_file、run_command）
- 尺寸: 400×300

## 替换截图方法

找到 `placeholder-img` 或 `placeholder-full` 元素，替换为：

```html
<img src="images/screenshot-name.png" alt="描述">
```

## 内容已更新

✅ 移除了错误的 "Rust 内核" 描述
✅ 更新为真实的 Electron + React + TypeScript 技术栈
✅ 启动时间改为 <400ms（真实数据）
✅ 添加了 22 个 AI 工具展示
✅ 添加了 @ 上下文引用说明
✅ 添加了斜杠命令说明
✅ 添加了作者信息和仓库链接
✅ 更新了 Footer 信息
