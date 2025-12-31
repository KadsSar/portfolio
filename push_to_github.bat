@echo off
set "PATH=C:\Program Files\Git\cmd;%PATH%"
echo ===================================================
echo      PUSHING TO GITHUB...
echo ===================================================
echo.
echo Please enter your GitHub login details if prompted...
echo.
git push -u origin main
pause
