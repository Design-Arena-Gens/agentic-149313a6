export default function Home() {
  const services = [
    {
      name: "Vietnam Fast Track Service",
      website: "vietnamfasttrackservice.com",
      url: "https://www.vietnamfasttrackservice.com/",
      rating: "4.8/5",
      price: "$30-35",
      priceDetails: "Starting price for basic fast track",
      features: [
        "Meet & greet at arrival gate",
        "Priority immigration lane",
        "Skip long queues",
        "Professional staff assistance"
      ],
      reviews: [
        "Saved us at least a couple of hours - regular queue was snaking around the entire arrivals hall",
        "Picking up baggage within 15 minutes of first encounter with staff",
        "Well worth the money to save an hour or more"
      ],
      reputation: "Highly Recommended",
      bookingAdvance: "24 hours minimum"
    },
    {
      name: "Klook Fast Track Service",
      website: "klook.com",
      url: "https://www.klook.com/activity/86247-tan-son-nhat-airport-fast-track-service/",
      rating: "4.7/5",
      price: "$33-40",
      priceDetails: "Per person for standard service",
      features: [
        "Instant confirmation",
        "Mobile voucher accepted",
        "Immigration fast track",
        "Baggage assistance (premium)",
        "Lounge access (premium)"
      ],
      reviews: [
        "Best $33 spent for each person",
        "Straight through immigration in less than 10 minutes",
        "Clear communication from booking"
      ],
      reputation: "Very Reputable",
      bookingAdvance: "Book 16 days before on average"
    },
    {
      name: "GetYourGuide Fast Track",
      website: "getyourguide.com",
      url: "https://www.getyourguide.com/ho-chi-minh-city-l272/fast-track-services-tan-son-nhat-airport-hcm-no-waiting-t694577/",
      rating: "4.6/5",
      price: "$35-45",
      priceDetails: "Per person, group discounts available",
      features: [
        "Skip-the-line access",
        "Meet & greet service",
        "Immigration assistance",
        "Free cancellation up to 24h",
        "English-speaking staff"
      ],
      reviews: [
        "Professional, highly efficient, and a complete time-saver",
        "Through the VIP lane in literally under a minute",
        "Highly recommend, especially if you don't speak Vietnamese"
      ],
      reputation: "Trusted Platform",
      bookingAdvance: "Flexible booking"
    },
    {
      name: "Viator VIP Service",
      website: "viator.com",
      url: "https://www.viator.com/tours/Ho-Chi-Minh-City/FAST-TRACK-ServicesTAN-SON-NHAT-AIRPORT-HCM-NO-WAITING/d352-404514P2",
      rating: "4.5/5",
      price: "$40-50",
      priceDetails: "Full VIP service with meet & greet",
      features: [
        "Gate-to-exit escort service",
        "VIP immigration lane",
        "Luggage trolley provided",
        "Customs assistance",
        "Transport coordination"
      ],
      reviews: [
        "Absolutely worth it to avoid up to 2hrs of queues",
        "Landed at 19:30 on Sunday and through within 5 minutes",
        "Really worth it during Vietnam's public holidays"
      ],
      reputation: "Established Provider",
      bookingAdvance: "24-48 hours recommended"
    },
    {
      name: "Vietnam Airport Assistance",
      website: "vietnamairportassistance.com",
      url: "https://www.vietnamairportassistance.com/",
      rating: "4.7/5",
      price: "$50-80",
      priceDetails: "Premium service with full assistance",
      features: [
        "Diplomatic Lane upgrade (+$10)",
        "Personalized assistance",
        "VOA & e-Visa processing",
        "Luggage retrieval",
        "Vehicle escort service"
      ],
      reviews: [
        "Premium service worth every penny",
        "Staff held welcome sign with our names",
        "Seamless experience from gate to car"
      ],
      reputation: "Premium Option",
      bookingAdvance: "24 hours minimum"
    }
  ];

  const comparisonData = {
    priceRange: "$30-80 per person",
    timesSaved: "1-2 hours average",
    peakSavings: "Up to 2-3 hours during holidays",
    whenToBook: "24 hours before flight minimum",
    bestFor: [
      "Peak travel times (holidays, weekends)",
      "Families with children",
      "Elderly travelers",
      "First-time visitors",
      "Business travelers",
      "Anyone avoiding 100,000+ daily arrivals during Tet"
    ]
  };

  return (
    <main style={{ backgroundColor: '#f5f7fa', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{
          backgroundColor: '#1a73e8',
          color: 'white',
          padding: '40px 30px',
          borderRadius: '12px',
          marginBottom: '30px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5em' }}>
            🛫 SGN Airport Fast Track Guide
          </h1>
          <p style={{ margin: 0, fontSize: '1.2em', opacity: 0.9 }}>
            Tan Son Nhat Airport (Ho Chi Minh City) - Immigration Fast Track Services
          </p>
        </header>

        {/* Quick Summary */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '30px'
        }}>
          <h2 style={{ marginTop: 0, color: '#856404' }}>⚡ Quick Summary</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
            <div>
              <strong>💰 Price Range:</strong> {comparisonData.priceRange}
            </div>
            <div>
              <strong>⏱️ Time Saved:</strong> {comparisonData.timesSaved}
            </div>
            <div>
              <strong>🎯 Peak Savings:</strong> {comparisonData.peakSavings}
            </div>
            <div>
              <strong>📅 Book By:</strong> {comparisonData.whenToBook}
            </div>
          </div>
        </div>

        {/* When to Use */}
        <div style={{
          backgroundColor: '#d1ecf1',
          border: '2px solid #17a2b8',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '30px'
        }}>
          <h3 style={{ marginTop: 0, color: '#0c5460' }}>💡 When Fast Track Is Most Valuable</h3>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            {comparisonData.bestFor.map((reason, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>{reason}</li>
            ))}
          </ul>
        </div>

        {/* Services Comparison */}
        <h2 style={{ color: '#333', marginBottom: '20px' }}>🏆 Top Reputable Services</h2>

        <div style={{ display: 'grid', gap: '25px' }}>
          {services.map((service, idx) => (
            <div key={idx} style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '25px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: idx === 0 ? '3px solid #4caf50' : '1px solid #e0e0e0'
            }}>
              {idx === 0 && (
                <div style={{
                  backgroundColor: '#4caf50',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  display: 'inline-block',
                  marginBottom: '15px',
                  fontSize: '0.9em',
                  fontWeight: 'bold'
                }}>
                  ⭐ MOST RECOMMENDED
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', color: '#1a73e8', fontSize: '1.5em' }}>
                    {service.name}
                  </h3>
                  <a href={service.url} target="_blank" rel="noopener noreferrer" style={{
                    color: '#666',
                    fontSize: '0.9em',
                    textDecoration: 'none'
                  }}>
                    {service.website} →
                  </a>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.8em', fontWeight: 'bold', color: '#2e7d32' }}>
                    {service.price}
                  </div>
                  <div style={{ fontSize: '0.85em', color: '#666' }}>
                    {service.priceDetails}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                <span style={{
                  backgroundColor: '#fff3e0',
                  color: '#e65100',
                  padding: '5px 12px',
                  borderRadius: '5px',
                  fontSize: '0.9em',
                  fontWeight: 'bold'
                }}>
                  ⭐ {service.rating}
                </span>
                <span style={{
                  backgroundColor: idx < 2 ? '#e8f5e9' : '#f3e5f5',
                  color: idx < 2 ? '#2e7d32' : '#6a1b9a',
                  padding: '5px 12px',
                  borderRadius: '5px',
                  fontSize: '0.9em',
                  fontWeight: 'bold'
                }}>
                  {service.reputation}
                </span>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#333' }}>📋 Features:</strong>
                <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ marginBottom: '5px', color: '#555' }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                backgroundColor: '#f8f9fa',
                borderLeft: '4px solid #1a73e8',
                padding: '15px',
                borderRadius: '5px',
                marginBottom: '10px'
              }}>
                <strong style={{ color: '#333' }}>💬 Customer Reviews:</strong>
                {service.reviews.map((review, rIdx) => (
                  <p key={rIdx} style={{
                    margin: '10px 0',
                    fontStyle: 'italic',
                    color: '#555',
                    fontSize: '0.95em'
                  }}>
                    "{review}"
                  </p>
                ))}
              </div>

              <div style={{ fontSize: '0.9em', color: '#666' }}>
                ⏰ Booking: {service.bookingAdvance}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '25px',
          marginTop: '30px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#333', marginTop: 0 }}>📝 Important Tips</h2>
          <ul style={{ lineHeight: '1.8', color: '#555' }}>
            <li><strong>Queue Reality:</strong> Regular immigration queues at SGN can take 1-3 hours during peak times, especially during Tet (Vietnamese New Year), Reunification Day, and National Day when the airport processes 100,000+ arrivals daily</li>
            <li><strong>Service Timing:</strong> Staff typically meet you at the arrival gate or before immigration area holding a sign with your name</li>
            <li><strong>What's Included:</strong> Most services include meet & greet, priority immigration lane, and basic assistance. Premium options add luggage handling, lounge access, and escort to vehicle</li>
            <li><strong>Booking Window:</strong> Book at least 24 hours in advance; most travelers book 2 weeks ahead</li>
            <li><strong>Value Assessment:</strong> At $30-50, the service is considered "best money spent" by most reviewers given the time saved and stress reduced</li>
            <li><strong>Upgrades Available:</strong> Some services offer Diplomatic Lane access for an additional $10</li>
            <li><strong>Language Support:</strong> All major providers have English-speaking staff, particularly helpful for non-Vietnamese speakers</li>
          </ul>
        </div>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '30px',
          color: '#666',
          fontSize: '0.9em'
        }}>
          <p>Information compiled from TripAdvisor, Klook, GetYourGuide, Viator, and official service providers</p>
          <p style={{ marginTop: '10px' }}>Last updated: January 2025</p>
        </footer>
      </div>
    </main>
  );
}
