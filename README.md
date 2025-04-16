# Task Manager Frontend (React + Tailwind CSS)

This is the frontend of the Task Manager app built with React and styled using Tailwind CSS. It communicates with a Laravel backend to manage a list of tasks.

## 🧰 Technologies

- React (JavaScript)
- Tailwind CSS
- Axios
- React Toastify

## 🚀 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourname/task-dashboard.git
   cd task-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm start
   ```

4. Make sure the Laravel API is running at:

   ```
   http://localhost:8000/api
   ```

   You can change this in `src/services/taskService.js` if needed.

## ✨ Features

- View task list in a responsive table
- Add a new task
- Edit an existing task
- Delete a task
- Toast notifications on actions
- Follows clean component structure

## 📁 Project Structure

```
src/
├── components/
│   ├── TaskForm.js
│   └── TaskTable.js
├── services/
│   └── taskService.js
├── App.js
├── index.css
```

## 💡 Customization

You can modify the API base URL in:

```js
src / services / taskService.js;
```

## 📄 License

MIT
