## [在 Windows 下批量将 Markdown 文档转为 Word 文档](https://liam.page/2019/05/17/markdown-convert-to-docx-batch/)

 发表于 2019 年 05 月 17 日 |  分类于 [Computer Skills](https://liam.page/categories/Computer-Skills/)

转换本身需要通过开源的 Pandoc 来进行。因此，你首先需要[安装 Pandoc](https://pandoc.org/installing.html)。

而后，可以仿照[前作](https://liam.page/2014/08/21/bitmap-convert-to-eps-batch/)的做法，批量转换。

复制

```
@echo offfor /f "tokens=* delims=" %%i in ('dir /b *.md') do (  @echo %%i  pandoc -f markdown -t docx -o "%%~ni.docx" "%%i"  @echo Finished)pause > nul
```

具体操作路径：

- [安装 Pandoc](https://pandoc.org/installing.html)（按需）。
- 将[脚本](https://tar.cat/uploads/bat_scripts/md2docx.bat)保存在某个目录（例如桌面）。
- 将需要转换的 Markdown 文件也保存在该目录。
- 双击执行脚本。
- 收获一堆 Word 文档。