# MegaBlogs

A full-stack blogging platform built with **React** and **Appwrite**. Users can sign up, log in, write posts with a rich text editor, upload featured images, and manage their own content.

## Features

- User authentication (sign up, log in, log out) with Appwrite Auth
- Create, read, update and delete blog posts
- Rich text editor (TinyMCE) for formatted content
- Featured image upload and display using Appwrite Storage
- Auto-generated post slugs from the title
- Active / inactive post status (only active posts show on Home)
- Protected routes: only logged-in users can add, edit or view all posts
- Only the author sees the Edit and Delete buttons on a post
- Responsive, clean UI 

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| State management | Redux Toolkit |
| Routing | React Router |
| Forms | React Hook Form |
| Rich text editor | TinyMCE (`@tinymce/tinymce-react`) |
| HTML rendering | `html-react-parser` |
| Backend | Appwrite (Auth, TablesDB, Storage) |

## Project Structure

```
MegaBlogs
├── public
├── src
│   ├── appwrite
│   │   ├── auth.js            # Appwrite authentication service
│   │   └── config.js          # Posts (database) and files (storage) service
│   ├── components
│   │   ├── container
│   │   │   └── Container.jsx
│   │   ├── Footer
│   │   │   └── Footer.jsx
│   │   ├── Header
│   │   │   ├── Header.jsx
│   │   │   └── LogoutBtn.jsx
│   │   ├── post-form
│   │   │   └── PostForm.jsx   # Create / edit post form
│   │   ├── AuthLayout.jsx     # Protected route wrapper
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Login.jsx
│   │   ├── Logo.jsx
│   │   ├── PostCard.jsx
│   │   ├── RTE.jsx            # TinyMCE rich text editor
│   │   ├── Select.jsx
│   │   ├── Signup.jsx
│   │   └── index.js           # Central export for all components
│   ├── conf
│   │   └── conf.js            # Reads environment variables
│   ├── pages
│   │   ├── AddPost.jsx
│   │   ├── AllPost.jsx
│   │   ├── EditPost.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Post.jsx
│   │   └── Signup.jsx
│   ├── store
│   │   ├── authSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx               # App entry point and route definitions
├── .env                       # Your real keys (not committed)
├── .env.sample                # Template of required variables
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```


### Set up environment variables

Copy `.env.sample` to a new file named `.env` in the project root and fill in your values:

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
VITE_TINYMCE_API_KEY=
```

| Variable | Where to find it |
| --- | --- |
| `VITE_APPWRITE_URL` | Appwrite Console, Settings (API endpoint), for example `https://cloud.appwrite.io/v1` |
| `VITE_APPWRITE_PROJECT_ID` | Appwrite Console, project Settings |
| `VITE_APPWRITE_DATABASE_ID` | Appwrite Console, Databases |
| `VITE_APPWRITE_COLLECTION_ID` | The ID of your posts table |
| `VITE_APPWRITE_BUCKET_ID` | Appwrite Console, Storage |
| `VITE_TINYMCE_API_KEY` | TinyMCE dashboard, Integrate TinyMCE |

> Never commit `.env` to GitHub. It is already listed in `.gitignore`.

### Configure Appwrite

**Platform:** In your Appwrite project, add a **Web platform** with hostname `localhost`.

**Database table (posts):** create a table with these columns:

| Column | Type | Required |
| --- | --- | --- |
| `title` | String | Yes |
| `content` | String (large size, for HTML content) | No |
| `featuredImage` | String | Yes |
| `status` | String | Yes |
| `userId` | String | Yes |

Add an index on `status` so the Home page query works.

**Table permissions:**
- Role **Any**: Read
- Role **Users**: Create, Update, Delete

**Storage bucket permissions:**
- Role **Any**: Read
- Role **Users**: Create, Update, Delete

## Routes

| Path | Page | Access |
| --- | --- | --- |
| `/` | Home | Public |
| `/login` | Login | Logged-out users only |
| `/signup` | Signup | Logged-out users only |
| `/all-posts` | All Posts | Logged-in users |
| `/add-post` | Add Post | Logged-in users |
| `/edit-post/:slug` | Edit Post | Logged-in users |
| `/post/:slug` | Post details | Public |

## Author

**Partik Dhiman**
GitHub: [@partikdhiman](https://github.com/partikdhiman)

## License

This project is for learning and personal use. Add a license of your choice if you plan to share or reuse it.