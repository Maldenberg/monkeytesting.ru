#!/bin/bash

# Переход в директорию с вашим проектом
cd /www/monkeytesting.ru

# Выполнение git pull для получения последних изменений
git pull origin main

# Перезапуск веб-сервера, если нужно (для проектов, использующих серверную часть)
# sudo service nginx restart
