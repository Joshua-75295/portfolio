import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHelmet = ({ 
  title = "Gera Joshua - Full Stack Developer & AI Enthusiast",
  description = "B.Tech student in Computer Science and Business Systems at VFSTR, Guntur. Passionate about full-stack development, AI-driven automation, and building scalable applications. Available for internships and opportunities.",
  keywords = "Gera Joshua, full stack developer, VFSTR, Guntur, React developer, Node.js, JavaScript, Python, AI enthusiast, web development, computer science student, Andhra Pradesh",
  author = "Gera Joshua",
  image = "/og-image.jpg",
  url = "https://gerajoshua.dev"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Gera Joshua Portfolio" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@gerajoshua" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3a86ff" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Gera Joshua",
          "jobTitle": "Computer Science Student & Full Stack Developer",
          "description": description,
          "url": url,
          "image": image,
          "email": "joshuagera2006@gmail.com",
          "telephone": "+91-95814-80540",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Guntur",
            "addressRegion": "Andhra Pradesh",
            "addressCountry": "India"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "VFSTR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Guntur",
              "addressRegion": "Andhra Pradesh",
              "addressCountry": "India"
            }
          },
          "sameAs": [
            "https://github.com/Joshua-75295",
            "https://linkedin.com/in/joshua-gera"
          ],
          "knowsAbout": [
            "JavaScript",
            "React",
            "Node.js",
            "Python",
            "Full Stack Development",
            "AI and Machine Learning",
            "Web Development",
            "Database Management"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;