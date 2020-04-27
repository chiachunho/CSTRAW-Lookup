# Google Sheet + Google Script Lookup System

## Info

利用 Google Script 內建的功能去查詢 Google Sheet 的資料，讓其他人的資料可以被保護，用戶只能查詢到自己的資料。

在此 repo 中以顧客以訂單編號查詢出貨進度為情境。

## Setup 

1. 在自己的 Google 帳號建立一個新 [Google Script](https://script.google.com/home) 專案
![image](https://user-images.githubusercontent.com/4931242/80332016-426d4100-887c-11ea-9e3c-ad145885a50a.png)
1. 為專案命名

1. 重新命名 `程式碼.gs` 為 `main.gs`，並將本 repo 中的 `main.gs` 貼上 
![image](https://user-images.githubusercontent.com/4931242/80332219-c6bfc400-887c-11ea-9312-d844ddc1ccce.png)

1. 將 `main.gs` 的第 10 行更換成自己的試算表網址

1. 將執行函式設為 `debug` 並按下左邊的執行按鈕
![image](https://user-images.githubusercontent.com/4931242/80332352-3c2b9480-887d-11ea-8300-3e046c4bd7d4.png)

1. 出現需要授權的視窗，按下 `核對權限`
![image](https://user-images.githubusercontent.com/4931242/80332452-739a4100-887d-11ea-824a-78d2f1e397a6.png)

1. 點選擁有存取你的試算表的帳號
![image](https://user-images.githubusercontent.com/4931242/80332748-4b5f1200-887e-11ea-8b9a-5c1316abc2d0.png)

1. 點選 `進階` 展開，點選 `前往「專案名稱」（不安全）`
![image](https://user-images.githubusercontent.com/4931242/80338653-7140e280-888f-11ea-8ce5-37a7f6a98af5.png)

1. 點選 `允許`
![image](https://user-images.githubusercontent.com/4931242/80338803-d7c60080-888f-11ea-9b99-b6e2623350a1.png)

1. 授權完後，我們需要取得 Google Script 的網址，點選 `發布→部署為網路應用程式...`
![image](https://user-images.githubusercontent.com/4931242/80338866-ff1ccd80-888f-11ea-905a-835e3ef3a044.png)

1. 依照上面設定，如果有修改程式碼的話就必須設定 Project version 為 **新增**，按下 `Deploy`
![image](https://user-images.githubusercontent.com/4931242/80339845-13fa6080-8892-11ea-954f-07ac55f4d573.png)

1. 複製出現的網址
![image](https://user-images.githubusercontent.com/4931242/80339253-d21cea80-8890-11ea-9e39-0b9db0fb5d56.png)

1. 將 repo 中的 `script.js` 打開，將把第 1 行的 `api_url` 網址換成上一步複製的網址，並儲存。

1. 接著可以點開 repo 中的 `index.html` 來測試功能是否正常。

1. 之後就可以將網頁部署到網站上了（[ref](https://www.blowhk.com/7-free-static-website-hosting/)）

## Reference 

* [Google Script with Google Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet)