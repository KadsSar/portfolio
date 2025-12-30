@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
echo ===================================================
echo      TIM'S NETFLIX PORTFOLIO - LAUNCHER
echo ===================================================
echo.
echo Starting the server...
echo Once started, hold Ctrl and click the 'Local' URL below (e.g. http://localhost:5173)
echo.
call npm run dev
pause
