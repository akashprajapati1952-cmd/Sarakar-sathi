

export interface Scheme {
  id: string;
  name: string;
  category: 'ROZGAAR' | 'SWASTHYA' | 'VIDYA';
  description: string;
  eligibility: {
    minAge: number;
    maxAge: number;
    maxIncome: number; 
    states: string[]; 
    occupations: string[]; 
  };
  documentsRequired: string[];
  applyLink: string;
}

export const schemesData: Scheme[] = [
  {
    id: 'pm-kisan',
    name: 'पीएम किसान सम्मान निधि योजना (PM-KISAN)',
    category: 'ROZGAAR',
    description: 'छोटे और सीमांत किसानों को खेती की जरूरतों के लिए हर साल ₹6,000 की आर्थिक सहायता तीन किस्तों में दी जाती है।',
    eligibility: {
      minAge: 18,
      maxAge: 100,
      maxIncome: 0, 
      states: ['All'],
      occupations: ['Farmer']
    },
    documentsRequired: ['आधार कार्ड', 'भूमि के दस्तावेज़ (खतौनी)', 'बैंक खाता विवरण', 'मोबाइल नंबर'],
    applyLink: 'https://pmkisan.gov.in/'
  },
  {
    id: 'up-post-matric',
    name: 'उत्तर प्रदेश पोस्ट मैट्रिक छात्रवृत्ति (UP Scholarship)',
    category: 'VIDYA',
    description: 'कक्षा 11, 12, स्नातक (B.A., B.Sc.) और उच्च शिक्षा ले रहे गरीब छात्रों की फीस भरपाई और स्कॉलरशिप के लिए सहायता।',
    eligibility: {
      minAge: 16,
      maxAge: 30,
      maxIncome: 250000,
      states: ['UP'],
      occupations: ['Student']
    },
    documentsRequired: ['आधार कार्ड', 'आय प्रमाण पत्र', 'जाति प्रमाण पत्र', 'मार्कशीट', 'फीस रसीद', 'बैंक पासबुक'],
    applyLink: 'https://scholarship.up.gov.in/'
  },
  {
    id: 'ayushman-bharat',
    name: 'आयुष्मान भारत योजना (PM-JAY)',
    category: 'SWASTHYA',
    description: 'गरीब और जरूरतमंद परिवारों को हर साल ₹5 लाख तक का मुफ्त इलाज (कैशलेस स्वास्थ्य बीमा) सरकारी और सूचीबद्ध अस्पतालों में मिलता है।',
    eligibility: {
      minAge: 0,
      maxAge: 110,
      maxIncome: 120000,
      states: ['All'],
      occupations: ['Laborer', 'Farmer', 'All']
    },
    documentsRequired: ['आधार कार्ड', 'राशन कार्ड (पात्र गृहस्थी/अंत्योदय)', 'मोबाइल नंबर'],
    applyLink: 'https://dashboard.pmjay.gov.in/'
  },
  {
    id: 'pmeegp',
    name: 'प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP)',
    category: 'ROZGAAR',
    description: 'नया उद्योग या व्यवसाय शुरू करने के लिए ₹10 लाख से ₹50 लाख तक का लोन, जिस पर सरकार 15% से 35% तक की सब्सिडी देती है।',
    eligibility: {
      minAge: 18,
      maxAge: 60,
      maxIncome: 0,
      states: ['All'],
      occupations: ['Laborer', 'All'] 
    },
    documentsRequired: ['आधार कार्ड', 'प्रोजेक्ट रिपोर्ट (बिजनेस प्लान)', 'आठवीं पास सर्टिफिकेट (यदि लोन >10 लाख है)', 'जाति प्रमाण पत्र'],
    applyLink: 'https://www.kviconline.gov.in/pmegpeportal/'
  }
];
