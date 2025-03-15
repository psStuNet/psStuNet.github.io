@echo off
:start
vpncmd localhost /server /hub:vpn /cmd statusget > "D:\web\web\123\Student-Catalog\status\session.txt"
echo 1
choice /t 300 /d y /n >nul
goto start