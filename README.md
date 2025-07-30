# 🚀 Balvendra Singh - Professional Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing my expertise as a Data Scientist Engineer. Features dynamic animations, dark/light mode, and a fully functional contact system.

![Portfolio Preview](https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&h=600&fit=crop)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with glassmorphism effects
- **📱 Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **🌓 Dark/Light Mode**: Toggle between themes with smooth transitions
- **⚡ Fast Performance**: Built with Next.js 15 and optimized for speed
- **📧 Contact Form**: Real-time email functionality with EmailJS integration
- **📄 Resume Download**: Direct CV download with one click
- **🎭 Smooth Animations**: Framer Motion animations throughout
- **🔍 SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **🎯 Interactive Elements**: Project filtering, skill progress bars, animated timeline

## 🛠️ Technologies Used

### Frontend Framework
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety and better development experience

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Declarative animations
- **Lucide React** - Beautiful icon library

### Functionality
- **EmailJS** - Client-side email sending
- **Typed.js** - Typing animation effects
- **Next-themes** - Dark/light mode management
- **React Hot Toast** - Elegant notifications

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🎯 Sections

1. **Hero Section** - Dynamic introduction with typing animation
2. **About** - Professional summary and social links
3. **Experience** - Work history with detailed timeline
4. **Skills** - Technical skills with progress indicators
5. **Projects** - Portfolio projects with filtering capabilities
6. **Certifications** - Professional certifications and achievements
7. **Contact** - Interactive contact form with real-time validation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/balvendar111/balvendra-portfolio.git
   cd balvendra-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your EmailJS credentials:
   ```env
   NEXT_PUBLIC_SERVICE_ID=your_service_id
   NEXT_PUBLIC_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📧 EmailJS Setup

To enable the contact form functionality:

1. **Create EmailJS Account**: Visit [EmailJS.com](https://emailjs.com)
2. **Create Email Service**: Add your email provider (Gmail, Outlook, etc.)
3. **Create Email Template**: Set up your message template
4. **Get Credentials**: Copy Service ID, Template ID, and Public Key
5. **Update Environment Variables**: Add credentials to `.env.local`

### Email Template Variables
Use these variables in your EmailJS template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (already done!)
2. **Visit [Vercel.com](https://vercel.com)**
3. **Import your repository**
4. **Add environment variables**:
   - `NEXT_PUBLIC_SERVICE_ID`
   - `NEXT_PUBLIC_TEMPLATE_ID`
   - `NEXT_PUBLIC_PUBLIC_KEY`
5. **Deploy!**

### Alternative Platforms
- **Netlify**: Connect GitHub repository and deploy
- **Heroku**: Use `heroku create` and `git push heroku main`
- **AWS Amplify**: Connect repository for automatic deployments

## 📁 Project Structure

```
balvendra-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── experience-section.tsx
│   ├── hero-section.tsx
│   ├── projects-section.tsx
│   └── skills-section.tsx
├── lib/                   # Utility functions and data
│   ├── data.ts           # Portfolio content
│   ├── email-config.ts   # EmailJS configuration
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   └── data/images/      # Images and documents
└── ...config files
```

## 🎨 Customization

### Update Personal Information
Edit `lib/data.ts` to customize:
- Personal details
- Work experience
- Skills and technologies
- Projects portfolio
- Certifications
- Social media links

### Modify Styling
- **Colors**: Update Tailwind config in `tailwind.config.ts`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Components**: Customize individual sections in `components/`

### Add New Sections
1. Create component in `components/`
2. Import and add to `app/page.tsx`
3. Update navigation in `components/ui/Header.tsx`

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run export       # Export static site
```

## 📊 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Static Generation**: Pre-rendered pages for faster loading
- **Font Optimization**: Google Fonts optimization
- **Bundle Analysis**: Webpack bundle analyzer integration

## 📱 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/improvement`
3. Commit changes: `git commit -m 'Add improvement'`
4. Push to branch: `git push origin feature/improvement`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Balvendra Singh**  
Data Scientist Engineer | Grid Dynamics  
📍 Hyderabad, India

- 💼 LinkedIn: [balvendra-singh-6834931a7](https://www.linkedin.com/in/balvendra-singh-6834931a7/)
- 🐙 GitHub: [balvendar111](https://github.com/balvendar111)
- 📧 Email: Balvendarsingh111@gmail.com
- 🐦 Twitter: [@balvendrasingh8](https://twitter.com/balvendrasingh8)
- 📸 Instagram: [@balvendra_111](https://www.instagram.com/balvendra_111/)

## 🌟 Features Showcase

### Interactive Elements
- **Typed.js Animation**: Dynamic hero text animation
- **Framer Motion**: Smooth page transitions and hover effects
- **Project Filtering**: Filter projects by technology
- **Progress Bars**: Animated skill level indicators
- **Timeline**: Interactive experience timeline

### Technical Highlights
- **Server-Side Rendering**: Fast initial page loads
- **Static Site Generation**: Optimal performance
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: WCAG 2.1 compliant
- **SEO Optimized**: Rich snippets and meta tags

---

## 🚀 Live Demo

**🌐 Portfolio Website**: [Coming Soon - Deploy to get URL]

**📱 Mobile Responsive**: Optimized for all screen sizes

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Balvendra Singh](https://github.com/balvendar111)

</div>
