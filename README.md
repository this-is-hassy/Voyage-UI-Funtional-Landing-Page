# Next.js Landing Page with Authentication, Theme Toggle, and Smooth Scrolling

This project is a fully functional and responsive **Landing Page** built using **Next.js** and **Tailwind CSS**. It includes essential UI features and interactive functionalities such as **authentication**, **light/dark mode**, **smooth scroll**, and a **"Go to Top" button** for enhanced user experience.

## Features

- ⚡️ **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- 🔒 **Authentication**: User authentication with Firebase (Email/Password and Google).
- 🌗 **Light/Dark Mode**: Switch between light and dark themes for better accessibility.
- 🖱️ **Smooth Scroll**: Smooth scrolling to sections of the page for a seamless navigation experience.
- 🔝 **Go to Top Button**: Quickly scroll back to the top of the page.

## Technologies Used

- **Next.js**: Framework for building fast and modern web apps.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Firebase Authentication**: For secure user authentication.
- **React Icons**: Icon library for light/dark mode toggles and other UI elements.

## Setup and Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/nextjs-functional-landing-page.git
cd nextjs-functional-landing-page
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and add your **Firebase** configuration:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 4. Run the Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the project in action.

## Features in Detail

### 1. **Authentication**
Users can sign up and log in using their email and password or their Google account. Firebase handles user authentication securely and efficiently.

### 2. **Light/Dark Mode Toggle**
Users can switch between light and dark themes. The theme state is managed across the entire app to offer a consistent experience.

### 3. **Smooth Scroll**
Links to different sections of the landing page smoothly scroll the user to the desired content without abrupt jumps.

### 4. **Go to Top Button**
A floating "Go to Top" button becomes visible when the user scrolls down the page, allowing them to quickly return to the top.

### 5. **Responsive Design**
The page layout and components adapt to all screen sizes (mobile, tablet, and desktop) for a smooth user experience across devices.

## Project Structure

```bash
├── components
│   ├── Navbar.tsx       # Navigation bar with theme toggle and authentication links
│   ├── Button.tsx       # Reusable button component
│   ├── GoToTop.tsx      # Go to Top button
├── context
│   └── Firebase.tsx     # Firebase authentication context
├── pages
│   ├── index.tsx        # Main landing page
│   ├── login.tsx        # Login page
│   └── register.tsx     # Register page
├── public
│   └── logo.svg         # Logo assets
├── styles
│   └── globals.css      # Global styles using Tailwind CSS
├── .env.local           # Environment variables for Firebase
├── tailwind.config.js   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## Deployment

To deploy the project on platforms like **Vercel**:

1. Ensure all environment variables are set in the Vercel dashboard.
2. Push your project to GitHub.
3. Deploy directly from your GitHub repository in Vercel.

```bash
npm run build
```

The optimized production build will be created in the `.next` directory.

## Customization

- **Authentication**: Adjust Firebase configuration as needed in `Firebase.tsx`.
- **Theme Toggle**: Modify theme styles in the `globals.css` file.
- **Smooth Scroll**: Ensure the HTML element IDs match the navigation links.

---

With these features, your landing page is ready to provide an engaging user experience with modern UI elements and seamless functionality.
