@echo off
SETLOCAL EnableDelayedExpansion

:: Check if pnpm is installed
where pnpm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] pnpm is not installed. 
    echo Please install pnpm globally: npm install -g pnpm
    pause
    exit /b 1
)

:: Check if node_modules exists, if not run pnpm install
if not exist "node_modules" (
    echo [INFO] node_modules not found. Installing dependencies...
    call pnpm install
    if !ERRORLEVEL! neq 0 (
        echo [ERROR] Dependency installation failed.
        pause
        exit /b 1
    )
)

:: Run development server
echo [INFO] Starting development server on http://localhost:1408
set NODE_OPTIONS=--max-old-space-size=4096
call pnpm dev
pause