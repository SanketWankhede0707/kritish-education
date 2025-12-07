import React from 'react';

// --- Types ---
interface Review {
  id: number;
  author: string;
  avatarLetter: string; // The letter to show if no image (e.g. "R" for Rahul)
  rating: number;
  time: string;
  text: string;
}

// --- Static Data (Edit this list to change reviews) ---
const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Aditya Mehta",
    avatarLetter: "A",
    rating: 5,
    time: "2 days ago",
    text: "Extremely helpful with my German student visa application. They knew exactly which documents were needed for the Berlin consulate. Got my visa in 2 weeks!"
  },
  {
    id: 2,
    author: "Sneha Kapoor",
    avatarLetter: "S",
    rating: 5,
    time: "1 week ago",
    text: "The counseling sessions were very detailed. They helped me shortlist public universities in Germany with low tuition fees. Highly recommended."
  },
  {
    id: 3,
    author: "Rohan Deshmukh",
    avatarLetter: "R",
    rating: 4,
    time: "3 weeks ago",
    text: "Great experience overall. The team is very supportive. The only reason for 4 stars is that the office gets a bit crowded on Saturdays, but the service is worth it."
  },
  {
    id: 4,
    author: "Priya Sharma",
    avatarLetter: "P",
    rating: 5,
    time: "1 month ago",
    text: "Transparent process. No hidden charges. They helped me from university application to finding accommodation in Munich."
  },
  {
    id: 5,
    author: "Vikram Singh",
    avatarLetter: "V",
    rating: 5,
    time: "2 months ago",
    text: "Best consultancy for Europe studies. The team is very polite and professional."
  },
  {
    id: 6,
    author: "Anjali Nair",
    avatarLetter: "A",
    rating: 5,
    time: "2 months ago",
    text: "Thank you for making my dream come true! Currently studying at TU Berlin thanks to your guidance."
  }
];

// --- Components ---

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export default function GoogleReviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
            <GoogleLogo />
            <span className="text-sm font-semibold text-gray-700">Google Reviews</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Students
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our students have to say about their journey to Germany.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow"
            >
              {/* Header: Avatar + Name + Date */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg shrink-0">
                  {review.avatarLetter}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 leading-tight">
                    {review.author}
                  </h3>
                  <span className="text-xs text-gray-500">{review.time}</span>
                </div>
                <div className="ml-auto">
                   <GoogleLogo />
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < review.rating} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* 'Read More' Button linked to your specific Place ID */}
        <div className="mt-12 text-center">
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJW0cALEvr3TsRCFYjP9NIbf8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            Read all reviews on Google
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}