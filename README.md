# Запуск проекта 

* Для начала создайте таблицу ***post*** в вашей базе данных. 
`create TABLE post(id SERIAL PRIMARY KEY, date VARCHAR(255), name VARCHAR(255), quantity INT, distance INT)` 
и импортируйте данные из файла ***post.csv*** командой 
`\copy post(id,date,name,quantity,distance) FROM '/path/post.csv' CSV  DELIMITER ',' HEADER`
    где `/path` это путь до файла ***post.csv***
    
* Измените параметры для подключения к вашей базе данных в файле ***db.js*** 
* Установите все зависимости с помощью команды `npm install`, также и в папке **client**
* Если все пукнты выше сделаны, то проект можно запустить с помощью команды `npm run dev`
