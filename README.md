# 📚 University Library

A modern web application built with **Next.js 15**, **Upstash Redis**, **Drizzle ORM**, and **Tailwind CSS**. Designed for speed, scalability, and developer ergonomics.

---

## ✨ Features

- ⚡ Serverless & fast via **Next.js 15**
- 🔐 Authentication via **NextAuth.js**
- 🔄 Rate limiting with **Upstash Redis**
- 💾 Serverless DB support via **Neon + Drizzle ORM**
- 🎨 Styled with **Tailwind CSS** & Radix UI
- 📦 Image delivery via **ImageKit**
- 🛠 Developer tools like ESLint, Prettier, TypeScript

---

## 🧰 Tech Stack

| Category                 | Technologies                      |
| ------------------------ | --------------------------------- |
| **Frontend**             | React 19, Next.js 15, TailwindCSS |
| **Auth**                 | NextAuth.js                       |
| **Database**             | PostgreSQL (Neon), Drizzle ORM    |
| **Caching & Rate Limit** | Upstash Redis                     |
| **Image Hosting**        | ImageKit                          |
| **Deployment**           | Vercel                            |
| **Validation**           | Zod, React Hook Form              |
| **Tooling**              | ESLint, Prettier, TypeScript      |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/university-library.git
cd university-library
```

2. Install Dependencies

```bash
npm install
```

3. Configure Environment Variables

```env
DATABASE_URL=your_neon_database_url
AUTH_SECRET=your_nextauth_secret

NEXT_PUBLIC_API_ENDPOINT=http://localhost:3000
NEXT_PUBLIC_PROD_API_ENDPOINT=your_deployed_url

UPSTASH_REDIS_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_TOKEN=your_upstash_redis_token

NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

```

4. Set Up the Database
   Generate and apply the schema migrations:

```
npm run db:generate
npm run db:migrate
```

Then seed the database with initial data:

```
npm run seed
```

5. Start the Development Server

```
npm run dev
```

📂 Project Structure

```bash
git clone https://github.com/your-username/university-library.git
cd university-library

/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── database/            # Drizzle ORM schema & seeds
├── lib/                 # Helpers (auth, redis, etc.)
├── styles/              # Global styles (Tailwind)
├── public/              # Static files
└── .env.local           # Local environment variables

```

---

## 🌍 Live Demo

You can view the live application here:

🔗 **[university-library.vercel.app](https://university-library-d8mg.vercel.app/)**

> Hosted on [Vercel](https://vercel.com/) with serverless architecture and edge functions.
