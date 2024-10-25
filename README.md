# Blog Website

Welcome to the **Blog Website**! This web application allows users to view blogs and provides an admin interface for creating, updating, and deleting blog posts. 

## Features

- **User Interface**: View a list of blogs with a clean and responsive design.
- **Admin Panel**: Admin users can create, update, and delete blog posts easily.
- **Markdown Support**: Blog content is written in Markdown, enabling rich text formatting.
- **Syntax Highlighting**: Code snippets are displayed with syntax highlighting for better readability.

## Technologies Used

This project is built using the following technologies and packages:

- **Next.js**: A React framework for building server-rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Prisma**: An ORM for Node.js and TypeScript to manage database interactions.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Markdown**: A Markdown component for rendering Markdown as React components.
- **React Syntax Highlighter**: For syntax highlighting of code snippets.

### Package.json Overview

```json
{
  "name": "blog-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@prisma/client": "^5.20.0",
    "next": "14.2.15",
    "react": "^18",
    "react-dom": "^18",
    "react-markdown": "7.0.0",
    "react-syntax-highlighter": "15.4.4",
    "remark-breaks": "3.0.1",
    "remark-gfm": "2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/react-syntax-highlighter": "^15.5.13",
    "eslint": "^8",
    "eslint-config-next": "14.2.15",
    "postcss": "^8",
    "prisma": "^5.20.0",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd blog-website
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root of your project and add the following environment variable:

```plaintext
DATABASE_URL="file:./dev.db"
```

> **Note**: Environment variables declared in this file are automatically made available to Prisma. For more details, refer to the [Prisma documentation](https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema).

Prisma supports the native connection string format for various databases, including PostgreSQL, MySQL, SQLite, SQL Server, MongoDB, and CockroachDB. You can find more connection string options in the [Prisma documentation](https://pris.ly/d/connection-strings).

### Setting Up Prisma

1. Generate the Prisma Client:

   ```bash
   npx prisma generate
   ```

2. Run migrations to set up your database schema:

   ```bash
   npx prisma migrate dev --name init
   ```

## Running the Development Server

To start the development server, run:

```bash
npm run dev
```

You can now access the application at `http://localhost:3000`.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

After building, you can start the production server with:

```bash
npm run start
```

## Usage

### Admin Page

- Navigate to the admin page to manage blog posts.
- Create new posts by filling out the form.
- Update existing posts or delete them as needed.

### Viewing Blogs

- Users can view all published blogs on the homepage.
- Click on a blog title to read the full content.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes you would like to suggest.

## License

This project is licensed under the MIT License.

---

Feel free to adjust any part of the README to better fit your needs!
