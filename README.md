# Next.js Django Chat Application

This is a real-time chat application built using Next.js for the front-end and Django for the back-end. The application leverages Pusher for instant messaging, providing users with a seamless and interactive chat experience.

## Features

- **Real-time Messaging:** Instant message updates without page refreshes.
- **Responsive Design:** Fully responsive interface for use on various devices.
- **Scalable Architecture:** Django and Next.js are used to ensure scalability and maintainability.

## Features not yet implemented:

- **User Authentication:** Secure login and registration.
- **Group Chats:** Create and join multiple chat rooms.

## Tech Stack

- **Front-end:** Next.js, React
- **Back-end:** Django, Django REST Framework
- **Real-time Communication:** Pusher
- **Database:** SQLite
- **Styling:** Bootstrap
  
## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/abderrahmane-stack/nextjs-django-chatapp.git
    cd nextjs-django-chatapp
    ```

2. **Install the dependencies for the Django backend:**

    ```bash
    cd backend
    pip install -r requirements.txt
    ```

3. **Set up the Django environment:**

    ```bash
    python manage.py migrate
    ```

4. **Install the dependencies for the Next.js frontend:**

    ```bash
    cd ../frontend
    npm install
    ```
5. **Run the development servers:**

    - Start the Django server:

        ```bash
        cd backend
        python manage.py runserver
        ```

    - Start the Next.js server:

        ```bash
        cd ../frontend
        npm run dev
        ```

6. **Access the application:**
    - Frontend: `http://localhost:3000`
    - Backend: `http://localhost:8000`
      
## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
