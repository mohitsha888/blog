📁 blog-website/
│
├── 📁 frontend/                 # Next.js frontend
│   ├── 📁 pages/
│   │   ├── index.js            # Home page
│   │   ├── login.js            # Login page
│   │   ├── register.js         # Registration page
│   │   ├── discover.js         # Discover blogs page
│   │   ├── space/              # User space directory
│   │   │   └── [userId].js     # Dynamic user space page
│   │   ├── search.js           # Search page
│   │   └── blog/
│   │       ├── create.js       # Create blog page
│   │       └── [blogId].js     # Single blog view
│   │
│   ├── 📁 components/
│   │   ├── Layout.js           # Common layout wrapper
│   │   ├── Navbar.js           # Navigation component
│   │   ├── BlogCard.js         # Blog preview component
│   │   └── Editor.js           # Blog editor component
│   │
│   ├── 📁 styles/              # CSS files
│   ├── 📁 utils/               # Helper functions
│   │   ├── api.js              # API calls
│   │   └── auth.js             # Authentication utilities
│   │
│   └── 📁 public/              # Static files
│
├── 📁 backend/                  # Node.js backend
│   ├── 📁 controllers/
│   │   ├── authController.js
│   │   ├── blogController.js
│   │   └── userController.js
│   │
│   ├── 📁 models/
│   │   ├── User.js
│   │   └── Blog.js
│   │
│   ├── 📁 routes/
│   │   ├── auth.js
│   │   ├── blog.js
│   │   └── user.js
│   │
│   ├── 📁 middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   │
│   ├── 📁 config/
│   │   └── db.js               # MongoDB connection
│   │
│   └── server.js               # Entry point
│
└── 📁 shared/                  # Shared types/constants