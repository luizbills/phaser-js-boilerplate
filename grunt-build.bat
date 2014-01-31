@ECHO OFF
IF NOT EXIST node_modules (npm install)
GRUNT BUILD && PAUSE
