@echo off
set PORT=8080
set URL=http://localhost:%PORT%

echo Starting local server at %URL%
echo Press Ctrl+C to stop.
echo.

:: try Python 3 first
where python >nul 2>&1
if %errorlevel% == 0 (
    start "" "%URL%"
    python -m http.server %PORT%
    goto :eof
)

:: try Python launcher (py)
where py >nul 2>&1
if %errorlevel% == 0 (
    start "" "%URL%"
    py -m http.server %PORT%
    goto :eof
)

:: fall back to npx serve (requires Node.js)
where npx >nul 2>&1
if %errorlevel% == 0 (
    start "" "%URL%"
    npx --yes serve -l %PORT% .
    goto :eof
)

echo ERROR: Neither Python nor Node.js was found on PATH.
echo Install Python (https://www.python.org) or Node.js (https://nodejs.org) and try again.
pause
