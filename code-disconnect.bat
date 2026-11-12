@echo off
setlocal enabledelayedexpansion
title Icelink Global - Code Disconnect

echo ===================================================
echo        ICELINK GLOBAL - CODE DISCONNECT (404)
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
set "PAGE_DISCONNECTED=%APP_DIR%\page.disconnected.tsx"

if not exist "%PAGE_CONNECTED%" (
    copy /y "%PAGE_FILE%" "%PAGE_CONNECTED%" >nul
    echo [OK] Backed up active website code to page.connected.tsx
)

if not exist "%PAGE_DISCONNECTED%" (
    (
        echo import { notFound } from 'next/navigation';
        echo.
        echo export default function DisconnectedPage^(^) {
        echo   notFound^(^);
        echo }
    ) > "%PAGE_DISCONNECTED%"
)

copy /y "%PAGE_DISCONNECTED%" "%PAGE_FILE%" >nul
if errorlevel 1 (
    echo [ERROR] Failed to update page.tsx
    pause
    exit /b 1
)

echo [OK] Website disconnected successfully!
echo [OK] Visiting the website will now return a 404 Error page.
echo.
echo ===================================================
echo.
set /p COMMIT_CHOICE="Do you want to commit and push to GitHub now? (Y/N): "
if /i "!COMMIT_CHOICE!"=="Y" (
    echo.
    echo Staging and committing changes...
    cd /d "%PROJECT_ROOT%"
    git add src/app/page.tsx src/app/page.connected.tsx src/app/page.disconnected.tsx src/app/not-found.tsx
    git commit -m "Update application status"
    echo Pushing to GitHub...
    git push
    echo.
    echo [OK] Changes pushed to GitHub! The 404 error is now live.
) else (
    echo.
    echo [NOTE] Remember to commit and push to GitHub when ready:
    echo        git add .
    echo        git commit -m "Update application status"
    echo        git push
)

echo.
pause
