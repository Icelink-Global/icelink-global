@echo off
setlocal enabledelayedexpansion
title Icelink Global - Code Connect

echo ===================================================
echo        ICELINK GLOBAL - CODE CONNECT (RESTORE)
echo ===================================================
echo.

if exist "%~dp0src\app\page.tsx" (
    set "PROJECT_ROOT=%~dp0"
) else if exist "%~dp0icelink-global\src\app\page.tsx" (
    set "PROJECT_ROOT=%~dp0icelink-global\"
) else (
    echo [ERROR] Could not find the icelink-global project directory.
    pause
    exit /b 1
)

set "APP_DIR=%PROJECT_ROOT%src\app"
set "PAGE_FILE=%APP_DIR%\page.tsx"
set "PAGE_CONNECTED=%APP_DIR%\page.connected.tsx"

if not exist "%PAGE_CONNECTED%" (
    echo [ERROR] Backup file page.connected.tsx was not found.
    echo Attempting to restore from git history...
    cd /d "%PROJECT_ROOT%"
    git checkout HEAD -- src/app/page.tsx
    if errorlevel 1 (
        echo [ERROR] Could not restore from git. Please check your files.
        pause
        exit /b 1
    )
) else (
    copy /y "%PAGE_CONNECTED%" "%PAGE_FILE%" >nul
    if errorlevel 1 (
        echo [ERROR] Failed to restore page.tsx
        pause
        exit /b 1
    )
)

echo [OK] Website code reconnected successfully!
echo [OK] All vehicles, pages, and components are back to normal.
echo.
echo ===================================================
echo.
set /p COMMIT_CHOICE="Do you want to commit and push to GitHub now? (Y/N): "
if /i "!COMMIT_CHOICE!"=="Y" (
    echo.
    echo Staging and committing changes...
    cd /d "%PROJECT_ROOT%"
    git add src/app/page.tsx
    git commit -m "Restore application status"
    echo Pushing to GitHub...
    git push
    echo.
    echo [OK] Changes pushed to GitHub! The website is back online.
) else (
    echo.
    echo [NOTE] Remember to commit and push to GitHub when ready:
    echo        git add src/app/page.tsx
    echo        git commit -m "Restore application status"
    echo        git push
)

echo.
pause
