@echo off
setlocal enabledelayedexpansion

cd /d "%~dp0"

for %%F in (*.html) do (
    set "name=%%~nF"
    echo Moving %%F -^> !name!\index.html
    mkdir "!name!" 2>nul
    move "%%F" "!name!\index.html"
)

echo Done.
pause
