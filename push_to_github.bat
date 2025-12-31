@echo off
set "PATH=C:\Program Files\Git\cmd;%PATH%"
echo ===================================================
echo      FORCE PUSHING TO GITHUB...
echo ===================================================
echo.
echo NOTE: This will overwrite the online repository with your local code.
echo (This is necessary because the online repo likely has a README that caused a conflict)
echo.
echo Please enter your GitHub login details if prompted...
echo.
git push -u origin main --force
pause
