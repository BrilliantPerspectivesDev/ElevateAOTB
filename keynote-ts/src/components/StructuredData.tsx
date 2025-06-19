import Script from 'next/script'

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "The Art of Thinking Brilliantly",
    "description": "Discover the Kingdom mindset that's already yours in Christ with Graham Cooke's transformative 18-session series. Learn to see every situation the way God sees it - full of possibility, promise, and provision.",
    "provider": {
      "@type": "Organization",
      "name": "Brilliant Perspectives",
      "url": "https://brilliantperspectives.com"
    },
    "instructor": {
      "@type": "Person",
      "name": "Graham Cooke",
      "description": "Kingdom Theologian & Prophetic Voice, Founder of Brilliant Perspectives",
      "url": "https://brilliantperspectives.com/about-graham"
    },
    "numberOfSessions": 18,
    "courseMode": "online",
    "educationalLevel": "All levels",
    "inLanguage": "en-US",
    "offers": {
      "@type": "Offer",
      "price": "97",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "description": "Lifetime streaming access to all 18 sessions"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "P24H",
      "instructor": {
        "@type": "Person",
        "name": "Graham Cooke"
      }
    },
    "about": [
      "Kingdom thinking",
      "Christian spirituality", 
      "Mind of Christ",
      "Spiritual transformation",
      "Kingdom mindset"
    ],
    "teaches": [
      "Finding your Kingdom starting place",
      "Recognizing your new nature voice", 
      "Seeing upgrades everywhere",
      "Living from Heaven's perspective",
      "Accessing hidden provision",
      "Practicing Kingdom routines"
    ]
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
} 