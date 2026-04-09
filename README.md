# Career Hub 🚀

A modern, responsive job portal application designed to help users discover, explore, and manage job opportunities with ease.

## 🌐 Live Link
**[https://carreier-hub.netlify.app/](https://carreier-hub.netlify.app/)**

---

## 📋 Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Key Components](#key-components)
- [Local Storage Management](#local-storage-management)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

---

## ✨ Features

- **Job Listings**: Browse featured jobs from top companies
- **Job Categories**: Filter and explore jobs by category
- **Job Details**: View comprehensive job information including:
  - Job description and responsibilities
  - Required experience and education
  - Salary range
  - Company information and contact details
  - Location and work type (Remote/Onsite)
- **Applied Jobs Tracker**: Save and manage your applied jobs locally
- **Responsive Design**: Fully responsive UI that works on all devices
- **Error Handling**: Graceful error page for invalid routes
- **Notifications**: Real-time feedback with toast notifications
- **Local Storage**: Persistent data for applied jobs without backend

---

## 🛠️ Technology Stack

**Frontend Framework:**
- React 18.2.0
- React Router DOM 6.16.0

**Build Tool:**
- Vite 4.4.5

**Styling:**
- Tailwind CSS 3.3.3
- DaisyUI 3.7.7
- PostCSS 8.4.30
- Autoprefixer 10.4.16

**UI & Icons:**
- React Icons 4.11.0
- React Toastify 9.1.3

**Data Management:**
- LocalForage 1.10.0
- Match Sorter 6.3.1
- Sort By 1.2.0

**Development Tools:**
- ESLint 8.45.0
- Vite Plugin React 4.0.3

---

## 📁 Project Structure

```
Career-Hub/
├── public/
│   ├── _redirects           # Netlify routing configuration
│   ├── categories.json      # Job categories data
│   └── jobs.json            # Job listings data
├── src/
│   ├── Components/
│   │   ├── AppliedJobs/     # Applied jobs listing page
│   │   ├── Banner/          # Hero banner component
│   │   ├── CategoryList/    # Category filter component
│   │   ├── ErrorPage/       # 404 error page
│   │   ├── FeturedJobs/     # Featured jobs display
│   │   ├── Footer/          # Footer component
│   │   ├── Header/          # Navigation header
│   │   ├── Home/            # Home page
│   │   ├── job/             # Individual job card
│   │   ├── JobDetails/      # Detailed job view
│   │   └── Root/            # Root layout component
│   ├── Utility/
│   │   └── localStorage.js  # Local storage helper functions
│   ├── assets/              # Images, icons, and logos
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── main.jsx             # React entry point
│   └── index.css            # Base styles
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── index.html               # HTML template
└── README.md                # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Career-Hub.git
   cd Career-Hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)

---

## 📖 Usage

### Browsing Jobs
1. Visit the home page to see featured jobs and categories
2. Click on any job card to view detailed information
3. Use category filters to narrow down your search

### Managing Applied Jobs
1. Click the "Apply Now" button on any job detail page
2. View all your applied jobs in the "Applied Jobs" section
3. Your applied jobs are saved in your browser's local storage
4. Applied jobs persist even after closing the browser

### Navigation
- **Home**: Landing page with featured jobs and categories
- **Applied Jobs**: View all jobs you've applied to
- **Job Details**: Comprehensive information about a specific job

---

## 🧩 Key Components

| Component | Purpose |
|-----------|---------|
| `Header` | Navigation and branding |
| `Banner` | Eye-catching hero section |
| `CategoryList` | Job category filtering |
| `FeturedJobs` | Display featured job listings |
| `Job` | Individual job card component |
| `JobDetails` | Detailed job information page |
| `AppliedJobs` | Track and manage applied jobs |
| `Footer` | Footer with contact info |
| `Root` | Main layout wrapper with routing |
| `ErrorPage` | 404 error handling |

---

## 💾 Local Storage Management

The application uses browser local storage to persist applied jobs. The `localStorage.js` utility file provides helper functions for:
- Saving applied jobs
- Retrieving applied jobs
- Removing jobs from applied list
- Checking if a job has been applied to

Jobs are stored in the browser and will be available even after refreshing the page or closing the browser.

---

## 📜 Available Scripts

- **`npm run dev`** - Start development server with hot module replacement
- **`npm run build`** - Create optimized production build
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

---

## 🌐 Deployment

This project is deployed on **Netlify**. 

### To deploy your own version:

1. Create a production build:
   ```bash
   npm run build
   ```

2. Connect your GitHub repository to Netlify
3. Configure build command: `npm run build`
4. Configure publish directory: `dist`
5. The `_redirects` file handles SPA routing on Netlify

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Contact

**Project Name:** Career Hub  
**Live URL:** [https://carreier-hub.netlify.app/](https://carreier-hub.netlify.app/)

For questions or support, please reach out through:
- Email: info@careerhub.com
- Twitter: [@CareerHub](https://twitter.com)
- LinkedIn: [Career Hub](https://linkedin.com)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- Built with React and Vite for optimal performance
- Styled with Tailwind CSS and DaisyUI for beautiful UI
- Hosted on Netlify for reliable deployment
- Icons from React Icons library

---

**Made with ❤️ for job seekers everywhere**
