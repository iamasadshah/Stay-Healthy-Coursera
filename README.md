# Stay Healthy - Healthcare Website

A modern, responsive healthcare website built with Next.js and TypeScript, featuring appointment booking, health blog, and patient reviews.

## 🌟 Features

### 📱 Responsive Design
- Modern and clean user interface
- Mobile-first approach
- Smooth transitions and animations
- Consistent styling across all pages

### 🏥 Core Features
1. **Appointment Booking**
   - Search for doctors by name or specialization
   - View doctor availability
   - Select convenient time slots
   - Book appointments with symptoms description

2. **Health Blog**
   - Latest health tips and medical insights
   - Categorized articles
   - Easy-to-read format
   - Share functionality

3. **Patient Reviews**
   - Star rating system
   - Detailed feedback submission
   - View other patient experiences
   - Sort and filter reviews

4. **User Authentication**
   - Secure sign-up process
   - Login with email
   - Password recovery
   - Profile management

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Form Handling**: React Hook Form
- **Icons**: Heroicons
- **Development Tools**: ESLint, Prettier

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd stay-healthy
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
stay-healthy/
├── src/
│   ├── app/
│   │   ├── components/     # Reusable UI components
│   │   ├── appointments/   # Appointment booking feature
│   │   ├── blog/          # Health blog feature
│   │   ├── review/        # Patient reviews
│   │   ├── signin/        # Authentication pages
│   │   └── signup/
│   ├── styles/            # Global styles
│   └── types/             # TypeScript definitions
├── public/                # Static assets
└── package.json
```

## 🎨 Component Features

### Navbar
- Responsive navigation
- Mobile menu
- Active link indicators
- Smooth transitions

### Appointment Booking
- Doctor search functionality
- Calendar integration
- Time slot selection
- Form validation

### Blog Section
- Article grid layout
- Category filtering
- Reading time estimates
- Related articles

### Review System
- Star rating input
- Comment submission
- Review moderation
- Sort and filter options

## 🔧 Configuration

The project uses various configuration files:

- `.env.local`: Environment variables
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `next.config.js`: Next.js configuration

## 📝 Development Guidelines

1. **Code Style**
   - Use TypeScript for type safety
   - Follow ESLint rules
   - Use Prettier for formatting
   - Write meaningful comments

2. **Component Structure**
   - Create reusable components
   - Use proper TypeScript interfaces
   - Implement error boundaries
   - Add proper loading states

3. **Styling**
   - Use Tailwind CSS classes
   - Follow mobile-first approach
   - Maintain consistent spacing
   - Use semantic HTML

4. **Performance**
   - Optimize images
   - Implement lazy loading
   - Use proper caching
   - Minimize bundle size

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors who have helped with the project
