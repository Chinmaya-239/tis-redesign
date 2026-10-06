// All copy is taken from https://tis.edu.in/ so the brand voice is retained.
export const SITE = {
  name: 'Tulas International School',
  phone: '+91-9837983791',
  phoneHref: 'tel:+919837983791',
  email: 'info@tis.edu.in',
  applyUrl: 'https://admission.tis.edu.in',
  address: 'Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)',
  landlines: ['0135-2699444', '0135-2699666'],
  mapUrl: 'https://maps.app.goo.gl/maBF8syXueQkw31E6',
  logo: 'https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png',
  // Tried in order. Add your own photo as public/campus.jpg and it is used first.
  heroImages: [
    '/campus.jpg',
    'https://tis.edu.in/_next/static/media/campus.e67b1a0a.png',
    'https://tis.edu.in/images/tis-campus-og.jpg',
  ],
}

export const NAV = [
  { label: 'About TIS', href: '#about' },
  { label: 'Beyond Academics', href: '#sports' },
  { label: 'Alumni Network', href: '#community' },
  { label: 'Parents', href: '#parents' },
  { label: 'Admission', href: '#enquire' },
]

export const STATS = [
  { to: 22, label: 'Acre pollution-free campus' },
  { to: 16, suffix: '+', label: 'Olympic sports' },
  { text: '24×7', label: 'Medical assistance' },
  { to: 6, suffix: ':1', label: 'Student-teacher ratio' },
]

export const SPORTS = [
  'Archery', 'Cycling', 'Hockey', 'Swimming', 'Taekwondo', 'Football', 'Shooting Range', 'Horse Riding',
  'Billiards', 'Squash', 'Volleyball', 'Basketball', 'Cricket', 'Lawn Tennis', 'Badminton', 'Table Tennis',
]

export const RANKINGS = [
  { rank: '#1', place: 'In Dehradun', by: 'Co-Educational Boarding School in Dehradun by Education Today' },
  { rank: '#2', place: 'In Uttarakhand', by: 'Co-Educational Boarding School in North India by Education Today' },
  { rank: '#1', place: 'In North India', by: 'Co-Educational Boarding School in North India by Outlook' },
  { rank: '#4', place: 'In India', by: 'Co-Educational Boarding School in India by Education Today' },
]

const media = (file) => `https://tis.edu.in/_next/static/media/${file}`

export const PERSONALITIES = [
  { name: 'Sakshi Malik', role: 'Olympics Bronze Medalist in Wrestling, Rio 2016. Padma Shri Awardee 2017', img: media('SakshiMalik.91174bf4.webp') },
  { name: 'Abhishek Verma', role: '6th highest world ranking, Arjuna Awardee, Asian Games Gold Medalist in Archery 2013', img: media('AbhishekVerma.18f9d349.webp') },
  { name: 'Aditi Gopichand Swami', role: '7th highest world ranking, Arjuna Awardee, World Champion in Archery 2024', img: media('AditiGopichandSwami.b7afa246.webp') },
  { name: 'Ojus Devtale', role: '9th highest world ranking, Arjuna Awardee 2023 and current world champion in Archery', img: media('OjasPravinDeotale.1d2e01cc.webp') },
  { name: 'Vishesh Bhriguvanshi', role: 'Indian Basketball Team Captain and major FIBA Asia Championship player', img: media('VisheshBhriguvanshi.52af8bfd.webp') },
  { name: 'Arushi Nishank', role: 'Kathak dancer, actor, film producer, environmentalist and TEDx speaker', img: media('ArushiNishank.f3341404.webp') },
  { name: 'Laxmi Agarwal', role: 'International Women Empowerment Award, founder of The Laxmi Foundation', img: media('LakshmiAgarwal.7405df5d.webp') },
  { name: 'Saurabh Joshi', role: 'Influencer with 30 million subscribers on YouTube', img: media('SaurabhJoshi.450ff5df.webp') },
]

export const REVIEWS = [
  { quote: 'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.', name: 'Namita Agarwal', relation: 'M/O Krishna Agarwal' },
  { quote: 'Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme.', name: 'Suresh Kumar', relation: 'F/O Aditya Kumar' },
  { quote: 'It has been a fantastic journey for my daughter. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.', name: 'Ashu Arora', relation: 'M/O Manisha Changrani' },
  { quote: 'Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.', name: 'Sandeep Kumar', relation: 'F/O Aryan' },
  { quote: 'In the beginning it was very tough to send my son to a boarding school, but the day I visited the campus I knew this is the right place and right environment.', name: 'Selendra K. Ajmera', relation: 'F/O Aman Ajmera' },
  { quote: 'I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.', name: 'Tashi Tsering', relation: 'F/O Jigmet Skaldon' },
]

export const CLASSES = ['Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII']

export const STATES = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana',
  'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
  'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Other',
]
