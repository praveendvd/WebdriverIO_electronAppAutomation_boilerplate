CALL rmdir /Q /S allure-results
CALL rmdir /Q /S allure-report
CALL npm install
CALL npx wdio run wdio.conf.js
CALL allure generate
CALL allure open
