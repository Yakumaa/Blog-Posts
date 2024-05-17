# Blog Application

This is a simple web application that allows users to create, read, update, and delete (CRUD) blog posts. The application is built using Django for the backend and React for the frontend.

## Technologies Used

- **Backend**: Django
- **Frontend**: React

## Setup and Installation

### Prerequisites

- Python 3.x
- Node.js and npm

### Backend Setup

1. Clone the repository:
```
git clone https://github.com/Yakumaa/Blog-Posts.git
```

2. Navigate to the backend directory:
```
cd Blog-Posts/blogs
```

3. Create a virtual environment and activate it:
```
virtualenv venv
venv\Scripts\activate
```

4. Apply the database migrations:
```
python manage.py migrate
```

5. Start the Django development server:
```
python manage.py runserver
```

### Frontend Setup

1. Navigate to the frontend directory:
```
cd Blog-Posts/blogs-frontend
```

2. Install the required Node.js packages:
```
npm install
```

3. Create the build directory
```
npm run build
```

4. Start the React development server:
```
npm start
```

The frontend should now be accessible at `http://localhost:3000`, and the backend API should be running at `http://localhost:8000`.

## Usage

Once both the backend and frontend servers are running, you can access the application through your web browser. You can create, view, update, and delete blog posts using the provided interface.

## Note

For security reasons, the database configuration and Django secret key have been excluded from this repository. You will need to set up your own database and provide the necessary configuration in the `backend/settings.py` file.

Additionally, the `build`, `node_modules`, and `public` folders from the frontend have been excluded from the repository to keep it lightweight.