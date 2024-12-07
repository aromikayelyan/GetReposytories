
# GetRepositories

## Описание / Description

**GetRepositories** – это приложение для работы с API GitHub, позволяющее получать популярные репозитории, сохранять их в базу данных и предоставлять публичный API.  
**GetRepositories** is an application for working with the GitHub API, allowing you to fetch popular repositories, save them to a database, and provide a public API.

---

## Установка / Installation

1. **Клонируйте репозиторий / Clone the repository:**  
   ```bash
   git clone https://github.com/aromikayelyan/GetRepositories.git
   ```

2. **Установите зависимости / Install dependencies:**  
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Настройте окружение / Set up the environment:**  
   - Добавьте токен Octokit в `backend/routes/getrep.js`.  
     Add your Octokit token in `backend/routes/getrep.js`.  
   - Настройте параметры MySQL в `backend/utils/database.js`.  
     Configure MySQL settings in `backend/utils/database.js`.

---

## Запуск / Running the Application

1. Используйте два терминала: один для `backend`, другой для `frontend`.  
   Use two terminals: one for `backend` and one for `frontend`.

2. В каждом терминале выполните:  
   In each terminal, run:  
   ```bash
   npm run dev
   ```

---

## Функционал / Features

- Получение популярных репозиториев из GitHub API.  
  Fetching popular repositories from the GitHub API.  
- Сохранение данных в MySQL.  
  Saving data to MySQL.  
- Публичный API для работы с репозиториями.  
  Public API for repository operations.  
- CLI-клиент для взаимодействия с приложением.  
  CLI client for interacting with the application.  
- SPA для визуализации данных (по выбору).  
  SPA for data visualization (optional).

---

## Требования / Requirements

- Node.js версии 14 или выше.  
  Node.js version 14 or higher.  
- MySQL сервер для работы с базой данных.  
  MySQL server for database operations.

---

## Структура проекта / Project Structure

- `backend/`  
  - API для взаимодействия с базой данных и GitHub API.  
    API for interacting with the database and GitHub API.
  - Основная логика приложения.  
    Core application logic.

- `frontend/`  
  - Пользовательский интерфейс.  
    User interface.
  - Взаимодействие с публичным API.  
    Interaction with the public API.

- `cli/`  
  - Клиент командной строки для выполнения задач.  
    Command-line client for performing tasks.

---

## Лицензия / License

Этот проект распространяется под лицензией MIT.  
This project is licensed under the MIT License.  

См. файл [LICENSE](LICENSE) для получения подробной информации.  
See the [LICENSE](LICENSE) file for details.

---

## Автор / Author

- **Ararat Miqayelyan**  
  [GitHub Profile](https://github.com/aromikayelyan)
