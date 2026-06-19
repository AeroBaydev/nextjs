const schools = [
    {
        "name":  "Jayshree Periwal Global School",
        "location":  "Jaipur, Rajasthan",
        "logo":  "/images/clients/1.png"
    },
    {
        "name":  "Jayshree Periwal High School",
        "location":  "Jaipur, Rajasthan",
        "logo":  "/images/clients/2.png"
    },
    {
        "name":  "Aurobindo School",
        "location":  "Jaipur, Rajasthan",
        "logo":  "/images/clients/3.png"
    },
    {
        "name":  "RN Saha International School",
        "location":  "Mumbai, Maharashtra",
        "logo":  "/images/clients/4.png"
    },
    {
        "name":  "SVIS, Mumbai",
        "location":  "Maharashtra",
        "logo":  "/images/clients/5.png"
    },
    {
        "name":  "AM NAIK School, Mumbai",
        "location":  "Maharashtra",
        "logo":  "/images/clients/6.png"
    },
    {
        "name":  "DLF World School",
        "location":  "Greater Noida",
        "logo":  "/images/clients/7.png"
    },
    {
        "name":  "Shambhu Dayal Global School",
        "location":  "Ghaziabad",
        "logo":  "/images/clients/8.png"
    },
    {
        "name":  "DLF Public School",
        "location":  "Delhi NCR",
        "logo":  "/images/clients/9.png"
    },
    {
        "name":  "Ganga International School",
        "location":  "Delhi NCR",
        "logo":  "/images/clients/10.png"
    },
    {
        "name":  "Taurian International School",
        "location":  "Ranchi, Jharkhand",
        "logo":  "/images/clients/11.png"
    },
    {
        "name":  "DPS School, Bokaro",
        "location":  "Jharkhand",
        "logo":  "/images/clients/12.png"
    },
    {
        "name":  "GD Goenka, Bhiwani",
        "location":  "Haryana",
        "logo":  "/images/clients/13.png"
    },
    {
        "name":  "Seth MR Jaipuriya, Lucknow",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/14.png"
    },
    {
        "name":  "GD Goenka, Purnea",
        "location":  "Bihar",
        "logo":  "/images/clients/15.png"
    },
    {
        "name":  "Cohen International, Odisha",
        "location":  "Odisha",
        "logo":  "/images/clients/16.png"
    },
    {
        "name":  "GD Goenka, Siliguri",
        "location":  "West Bengal",
        "logo":  "/images/clients/17.png"
    },
    {
        "name":  "Trinity Public School, Kolkata",
        "location":  "West Bengal",
        "logo":  "/images/clients/18.png"
    },
    {
        "name":  "Stemfield School, Jabalpur",
        "location":  "Madhya Pradesh",
        "logo":  "/images/clients/19.png"
    },
    {
        "name":  "DPS, Nagaon",
        "location":  "Assam",
        "logo":  "/images/clients/20.png"
    },
    {
        "name":  "NPS, Guwahati",
        "location":  "Assam",
        "logo":  "/images/clients/21.png"
    },
    {
        "name":  "GD Goenka, Jabalpur",
        "location":  "Madhya Pradesh",
        "logo":  "/images/clients/22.png"
    },
    {
        "name":  "Jayshree Periwal International School",
        "location":  "Jaipur, Rajasthan",
        "logo":  "/images/clients/23.png"
    },
    {
        "name":  "GH Raisoni, Jalgaon",
        "location":  "Maharashtra",
        "logo":  "/images/clients/24.png"
    },
    {
        "name":  "Narayana Vidyalayam",
        "location":  "Nagpur, Maharashtra",
        "logo":  "/images/clients/25.png"
    },
    {
        "name":  "SOS Wanadongri",
        "location":  "Maharashtra",
        "logo":  "/images/clients/26.png"
    },
    {
        "name":  "BD Somani International School",
        "location":  "Maharashtra",
        "logo":  "/images/clients/27.png"
    },
    {
        "name":  "Centre Point School International, Dhaba Road",
        "location":  "Maharashtra",
        "logo":  "/images/clients/28.png"
    },
    {
        "name":  "Scholars Rosary Junior Wing, Rohtak",
        "location":  "Haryana",
        "logo":  "/images/clients/29.png"
    },
    {
        "name":  "Acharyashri Sudarshan Patna Central School",
        "location":  "Bihar",
        "logo":  "/images/clients/30.png"
    },
    {
        "name":  "Birla Open Minds International School",
        "location":  "Buxar, Bihar",
        "logo":  "/images/clients/31.png"
    },
    {
        "name":  "GD Goenka, Jhansi",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/32.png"
    },
    {
        "name":  "DPS, Gangtok",
        "location":  "Sikkim",
        "logo":  "/images/clients/33.png"
    },
    {
        "name":  "Shemford Futuristic K12 School",
        "location":  "Auraiya, Uttar Pradesh",
        "logo":  "/images/clients/34.png"
    },
    {
        "name":  "Stellar World School, Bandra",
        "location":  "Maharashtra",
        "logo":  "/images/clients/35.png"
    },
    {
        "name":  "Prominence School, Greater Noida",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/36.png"
    },
    {
        "name":  "Don Bosco School, Kharagpur",
        "location":  "West Bengal",
        "logo":  "/images/clients/37.png"
    },
    {
        "name":  "Digmani Public School",
        "location":  "Gaya, Bihar",
        "logo":  "/images/clients/38.png"
    },
    {
        "name":  "GD Goenka Public School, Shahjahanpur",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/39.png"
    },
    {
        "name":  "GD Goenka Public School, Firozabad",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/40.png"
    },
    {
        "name":  "Birla Open Mind, BKT Lucknow",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/41.png"
    },
    {
        "name":  "The Nest, Chennai",
        "location":  "Tamil Nadu",
        "logo":  "/images/clients/42.png"
    },
    {
        "name":  "GD Goenka Public School, Chhibramau",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/43.png"
    },
    {
        "name":  "Mount Litera Zee School, Nagpur",
        "location":  "Maharashtra",
        "logo":  "/images/clients/44.png"
    },
    {
        "name":  "Suditi Global Academy, Etawah",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/45.png"
    },
    {
        "name":  "Meena Bhujbal School of Excellence, Nashik",
        "location":  "Maharashtra",
        "logo":  "/images/clients/46.png"
    },
    {
        "name":  "Delhi Public School, Etawah",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/47.png"
    },
    {
        "name":  "Shirdi Sai School, Moradabad",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/48.png"
    },
    {
        "name":  "Birla Open Mind School, Singur",
        "location":  "West Bengal",
        "logo":  "/images/clients/49.png"
    },
    {
        "name":  "Delhi World Public School, Orai",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/50.png"
    },
    {
        "name":  "DPS Megacity, Kolkata",
        "location":  "West Bengal",
        "logo":  "/images/clients/51.png"
    },
    {
        "name":  "GD Goenka Public School, Basti",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/52.png"
    },
    {
        "name":  "Jeta Science Academy, Chalisgaon",
        "location":  "Maharashtra",
        "logo":  "/images/clients/53.png"
    },
    {
        "name":  "Vibgyor World Academy Nagpur",
        "location":  "Maharashtra",
        "logo":  "/images/clients/54.png"
    },
    {
        "name":  "Birla Open Minds, Punpun",
        "location":  "Bihar",
        "logo":  "/images/clients/55.png"
    },
    {
        "name":  "Lady LRD Public School, Mandi Gobindgarh",
        "location":  "Maharashtra",
        "logo":  "/images/clients/56.png"
    },
    {
        "name":  "Gopi Birla Memorial School, Walkeshwar",
        "location":  "Maharashtra",
        "logo":  "/images/clients/57.png"
    },
    {
        "name":  "Birla Open Minds, Amravati",
        "location":  "Maharashtra",
        "logo":  "/images/clients/58.png"
    },
    {
        "name":  "Gems Academia",
        "location":  "West Bengal",
        "logo":  "/images/clients/59.png"
    },
    {
        "name":  "Narayana International School - Khidderpore",
        "location":  "West Bengal",
        "logo":  "/images/clients/60.png"
    },
    {
        "name":  "Narayana School - Bally",
        "location":  "West Bengal",
        "logo":  "/images/clients/61.png"
    },
    {
        "name":  "GD Goenka Public School, North Lakhimpur",
        "location":  "Bihar",
        "logo":  "/images/clients/62.png"
    },
    {
        "name":  "Mount Litera Zee School, Bihta",
        "location":  "Bihar",
        "logo":  "/images/clients/63.png"
    },
    {
        "name":  "Guwahati International School, Assam",
        "location":  "Assam",
        "logo":  "/images/clients/64.png"
    },
    {
        "name":  "The Assam Valley School, Assam",
        "location":  "Assam",
        "logo":  "/images/clients/65.png"
    },
    {
        "name":  "Indo Scots Global School, Kamotee",
        "location":  "Maharashtra",
        "logo":  "/images/clients/66.png"
    },
    {
        "name":  "Allenhouse Public School, Vasundhara",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/67.png"
    },
    {
        "name":  "Allenhouse Public School, Rooma, Kanpur",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/68.png"
    },
    {
        "name":  "DPS, Bhilaur Kanpur",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/69.png"
    },
    {
        "name":  "DWPS, Purulia",
        "location":  "West Bengal",
        "logo":  "/images/clients/70.png"
    },
    {
        "name":  "Army Public School, Jaipur",
        "location":  "Rajasthan",
        "logo":  "/images/clients/72.png"
    },
    {
        "name":  "New Horizon International School, Mumbai",
        "location":  "Maharashtra",
        "logo":  "/images/clients/73.png"
    },
    {
        "name":  "New Horizon Public School, Mumbai",
        "location":  "Maharashtra",
        "logo":  "/images/clients/74.png"
    },
    {
        "name":  "GD Goenka International, Gandhidham",
        "location":  "Gujarat",
        "logo":  "/images/clients/75.png"
    },
    {
        "name":  "CPS, Kalikapur (Kolkata)",
        "location":  "West Bengal",
        "logo":  "/images/clients/76.png"
    },
    {
        "name":  "GD Goenka, Sitapur",
        "location":  "Uttar Pradesh",
        "logo":  "/images/clients/77.png"
    },
    {
        "name":  "Arya Gurukul, Kalyan",
        "location":  "Maharashtra",
        "logo":  "/images/clients/78.png"
    },
    {
        "name":  "The Presidency School, Bhiwandi, Thane",
        "location":  "Mumbai",
        "logo":  "/images/clients/80.png"
    },
    {
        "name":  "Gautam Singhania, Thane",
        "location":  "Mumbai",
        "logo":  "/images/clients/82.png"
    },
    {
        "name":  "Adani Vidya Mandir",
        "location":  "Ahmedabad",
        "logo":  "/images/clients/Adani Vidya Mandir, Ahmedabad.jpg"
    },
    {
        "name":  "Aikya World School",
        "location":  "Bengaluru",
        "logo":  "/images/clients/Aikya World School, Bengaluru.jpg"
    },
    {
        "name":  "Al- Huda Matriculation Hr. Secondary School",
        "location":  "Vaniyambadi",
        "logo":  "/images/clients/Al- Huda Matriculation Hr. Secondary School, Vaniyambadi.jpg"
    },
    {
        "name":  "Army Public School",
        "location":  "Ahmednagar",
        "logo":  "/images/clients/Army Public School, Ahmednagar.jpg"
    },
    {
        "name":  "Ashoka Universal School",
        "location":  "Nashik",
        "logo":  "/images/clients/Ashoka Universal School - Ashoka Marg, Nashik.png"
    },
    {
        "name":  "Bal Bharti School",
        "location":  "Rewa",
        "logo":  "/images/clients/Bal Bharti School, Rewa.jpg"
    },
    {
        "name":  "Baryons International Girls School",
        "location":  "Calicut",
        "logo":  "/images/clients/Baryons International Girls School, Calicut.jpg"
    },
    {
        "name":  "Birla Open Minds International School",
        "location":  "Bhopal",
        "logo":  "/images/clients/Birla Open Minds International School, Bhopal.png"
    },
    {
        "name":  "Birla Open Minds International School",
        "location":  "Chapra",
        "logo":  "/images/clients/Birla Open Minds International School, Chapra.png"
    },
    {
        "name":  "Birla Open Minds International School",
        "location":  "Nashik",
        "logo":  "/images/clients/Birla Open Minds International School, Nashik.png"
    },
    {
        "name":  "Central Academy",
        "location":  "Rewa",
        "logo":  "/images/clients/Central Academy, Rewa.jpg"
    },
    {
        "name":  "Central Model School",
        "location":  "Barrackpore",
        "logo":  "/images/clients/Central Model School, Barrackpore.jpg"
    },
    {
        "name":  "Central Model School, Konnagar",
        "location":  "Mirpur",
        "logo":  "/images/clients/Central Model School, Konnagar, Mirpur.jpg"
    },
    {
        "name":  "Chief Minister's Model School",
        "location":  "",
        "logo":  "/images/clients/Chief Minister's Model School.jpg"
    },
    {
        "name":  "CP Goenka International School",
        "location":  "Mumbai",
        "logo":  "/images/clients/CP Goenka International School, Mumbai.png"
    },
    {
        "name":  "Delhi Public School",
        "location":  "Chhatarpur",
        "logo":  "/images/clients/Delhi Public School, Chhatarpur.jpg"
    },
    {
        "name":  "Delhi Public School",
        "location":  "Karnal",
        "logo":  "/images/clients/Delhi Public School, Karnal.png"
    },
    {
        "name":  "Delhi Public School",
        "location":  "Tajpur",
        "logo":  "/images/clients/Delhi Public School, Tajpur.jpg"
    },
    {
        "name":  "DG Khetan International School",
        "location":  "Malad",
        "logo":  "/images/clients/DG Khetan International School, Malad.jpg"
    },
    {
        "name":  "DY Patil Public School",
        "location":  "Pune",
        "logo":  "/images/clients/DY Patil Public School, Pune.jpg"
    },
    {
        "name":  "Edify World School",
        "location":  "Attapur",
        "logo":  "/images/clients/Edify World School, Attapur.png"
    },
    {
        "name":  "Faith British School",
        "location":  "Bengaluru",
        "logo":  "/images/clients/Faith British School, Bengaluru.png"
    },
    {
        "name":  "Fortune High School",
        "location":  "Pune",
        "logo":  "/images/clients/Fortune High School, Pune.jpg"
    },
    {
        "name":  "Gayatri English Medium School",
        "location":  "Pune",
        "logo":  "/images/clients/Gayatri English Medium School, Pune.jpg"
    },
    {
        "name":  "GD Goenka Public School",
        "location":  "Ayodhya",
        "logo":  "/images/clients/GD Goenka Public School, Ayodhya.png"
    },
    {
        "name":  "GD Goenka Public School",
        "location":  "Begusarai",
        "logo":  "/images/clients/GD Goenka Public School, Begusarai.png"
    },
    {
        "name":  "GD Goenka Public School",
        "location":  "Darbhanga",
        "logo":  "/images/clients/GD Goenka Public School, Darbhanga - AeroBay.jpg"
    },
    {
        "name":  "GD Goenka Public School",
        "location":  "Gola",
        "logo":  "/images/clients/GD Goenka Public School, Gola.png"
    },
    {
        "name":  "Geeta Jyothi School",
        "location":  "Rewa",
        "logo":  "/images/clients/Geeta Jyothi School, Rewa.png"
    },
    {
        "name":  "Gems Akademia - Kolkata",
        "location":  "",
        "logo":  "/images/clients/Gems Akademia - Kolkata.jpg"
    },
    {
        "name":  "GM Global School",
        "location":  "Udupi",
        "logo":  "/images/clients/GM Global School, Udupi.png"
    },
    {
        "name":  "Greenfield School International",
        "location":  "Kakinada",
        "logo":  "/images/clients/Greenfield School International, Kakinada.png"
    },
    {
        "name":  "Greenfield School",
        "location":  "Birtamod",
        "logo":  "/images/clients/Greenfield School, Birtamod.jpg"
    },
    {
        "name":  "Greenwood High",
        "location":  "Sarjapur",
        "logo":  "/images/clients/Greenwood High, Sarjapur ICSE.png"
    },
    {
        "name":  "Gyansthali Senior Secondary School",
        "location":  "Rewa",
        "logo":  "/images/clients/Gyansthali Senior Secondary School, Rewa.jpg"
    },
    {
        "name":  "Indo Scots Global School",
        "location":  "Kalyan",
        "logo":  "/images/clients/Indo Scots Global School, Kalyan.jpg"
    },
    {
        "name":  "Indo Scots Global School",
        "location":  "Nashik",
        "logo":  "/images/clients/Indo Scots Global School, Nashik.png"
    },
    {
        "name":  "Jamnabai Narsee International School",
        "location":  "Mumbai",
        "logo":  "/images/clients/Jamnabai Narsee International School, Mumbai.png"
    },
    {
        "name":  "JBM Global School",
        "location":  "Noida",
        "logo":  "/images/clients/JBM Global School, Noida.jpg"
    },
    {
        "name":  "Jindal Vidya Mandir",
        "location":  "Hillside Township",
        "logo":  "/images/clients/Jindal Vidya Mandir, Hillside Township.png"
    },
    {
        "name":  "Jindal Vidya Mandir",
        "location":  "Vasind",
        "logo":  "/images/clients/Jindal Vidya Mandir, Vasind.png"
    },
    {
        "name":  "Jindal Vidya Mandir",
        "location":  "Vidyanagar",
        "logo":  "/images/clients/Jindal Vidya Mandir, Vidyanagar.jpg"
    },
    {
        "name":  "Kalyani Central Model School",
        "location":  "Kalyani",
        "logo":  "/images/clients/Kalyani Central Model School, Kalyani.jpg"
    },
    {
        "name":  "Kalyani Public School",
        "location":  "Barasat",
        "logo":  "/images/clients/Kalyani Public School, Barasat.jpg"
    },
    {
        "name":  "Kalyani Public School",
        "location":  "Salt Lake",
        "logo":  "/images/clients/Kalyani Public School, Salt Lake.jpg"
    },
    {
        "name":  "Kids Gurukul International School",
        "location":  "Jalgaon",
        "logo":  "/images/clients/Kids Gurukul International School, Jalgaon.jpg"
    },
    {
        "name":  "KLM International School",
        "location":  "Pathankot",
        "logo":  "/images/clients/KLM International School, Pathankot.jpg"
    },
    {
        "name":  "KR Mangalam World School",
        "location":  "Bahadurgarh",
        "logo":  "/images/clients/KR Mangalam World School, Bahadurgarh.png"
    },
    {
        "name":  "KR Mangalam World School",
        "location":  "South City, Gurgaon",
        "logo":  "/images/clients/KR Mangalam World School, South City I, Gurgaon.jpg"
    },
    {
        "name":  "KR Mangalam World School",
        "location":  "Vaishali",
        "logo":  "/images/clients/KR Mangalam World School, Vaishali.jpg"
    },
    {
        "name":  "KVTR",
        "location":  "Dhule",
        "logo":  "/images/clients/KVTR, Dhule.jpg"
    },
    {
        "name":  "Loreto Convent",
        "location":  "Ranchi",
        "logo":  "/images/clients/Loreto Convent, Ranchi.jpg"
    },
    {
        "name":  "MET Rishikul Vidyalaya",
        "location":  "Mumbai",
        "logo":  "/images/clients/MET Rishikul Vidyalaya, Mumbai.webp"
    },
    {
        "name":  "MIT Group of Institutions",
        "location":  "Pune",
        "logo":  "/images/clients/MIT Group of Institutions, Pune.jpg"
    },
    {
        "name":  "Montfort School",
        "location":  "Nagpur",
        "logo":  "/images/clients/Montfort School, Nagpur.png"
    },
    {
        "name":  "Mount Litera Zee School",
        "location":  "Bhopal",
        "logo":  "/images/clients/Mount Litera Zee School, Bhopal.jpg"
    },
    {
        "name":  "Mount Litera Zee School",
        "location":  "Pali",
        "logo":  "/images/clients/Mt. Litera Zee School, Pali.jpg"
    },
    {
        "name":  "Nankana Sahib Public School",
        "location":  "Ludhiana",
        "logo":  "/images/clients/Nankana Sahib Public School, Ludhiana.png"
    },
    {
        "name":  "Nankana Sahib Sr. Sec. Public School, Kila Raipur",
        "location":  "Ludhiana",
        "logo":  "/images/clients/Nankana Sahib Sr. Sec. Public School, Kila Raipur, Ludhiana.png"
    },
    {
        "name":  "Narayana International School - Ramachandrapur Sonarpur",
        "location":  "",
        "logo":  "/images/clients/Narayana International School - Ramachandrapur Sonarpur.png"
    },
    {
        "name":  "Narayana School - Barasat",
        "location":  "",
        "logo":  "/images/clients/Narayana School - Barasat.png"
    },
    {
        "name":  "Narayana School - Basirhat",
        "location":  "",
        "logo":  "/images/clients/Narayana School - Basirhat.png"
    },
    {
        "name":  "Narayana School - Berhampore",
        "location":  "",
        "logo":  "/images/clients/Narayana School - Berhampore.png"
    },
    {
        "name":  "Narayana School - Contai",
        "location":  "",
        "logo":  "/images/clients/Narayana School - Contai.png"
    },
    {
        "name":  "Narayana School - Haldia",
        "location":  "",
        "logo":  "/images/clients/Narayana School - Haldia.png"
    },
    {
        "name":  "Narayana School - Kalyani Town",
        "location":  "",
        "logo":  "/images/clients/Narayana School - Kalyani Town.png"
    },
    {
        "name":  "Narayana School - Krishnanagar",
        "location":  "",
        "logo":  "/images/clients/Narayana School - Krishnanagar.jpg"
    },
    {
        "name":  "Narayana School - Ranaghat",
        "location":  "",
        "logo":  "/images/clients/Narayana School - Ranaghat.png"
    },
    {
        "name":  "New Horizon World Academy",
        "location":  "Mumbai",
        "logo":  "/images/clients/New Horizon World Academy, Mumbai.jpg"
    },
    {
        "name":  "Prince Education",
        "location":  "Sikar",
        "logo":  "/images/clients/Prince Education, Sikar.jpg"
    },
    {
        "name":  "Ram Ratna Vidya Mandir",
        "location":  "Mumbai",
        "logo":  "/images/clients/Ram Ratna Vidya Mandir, Mumbai.jpg"
    },
    {
        "name":  "Ramakrishna Mission School",
        "location":  "Imphal",
        "logo":  "/images/clients/Ramakrishna Mission School, Imphal.jpg"
    },
    {
        "name":  "Raunaq Public School",
        "location":  "Sonipat",
        "logo":  "/images/clients/Raunaq Public School, Sonipat.jpg"
    },
    {
        "name":  "River Trail School",
        "location":  "Betul",
        "logo":  "/images/clients/River Trail School, Betul.png"
    },
    {
        "name":  "RPS Public School",
        "location":  "Patna",
        "logo":  "/images/clients/RPS Public School, Patna.jpg"
    },
    {
        "name":  "Sai Vikash Vidya Niketan",
        "location":  "Guwahati.",
        "logo":  "/images/clients/Sai Vikash Vidya Niketan, Guwahati..jpg"
    },
    {
        "name":  "Sai Vikash Vidya Niketan",
        "location":  "Silchar",
        "logo":  "/images/clients/Sai Vikash Vidya Niketan, Silchar.jpg"
    },
    {
        "name":  "Saini International School",
        "location":  "Howrah",
        "logo":  "/images/clients/Saini International School, Howrah.png"
    },
    {
        "name":  "Saini International School",
        "location":  "Maheshtala",
        "logo":  "/images/clients/Saini International School, Maheshtala.png"
    },
    {
        "name":  "Saint Patrick's Academy",
        "location":  "Dehradun",
        "logo":  "/images/clients/Saint Patrick's Academy, Dehradun.png"
    },
    {
        "name":  "Sanctus World School",
        "location":  "Shamshabad",
        "logo":  "/images/clients/Sanctus World School, Shamshabad.png"
    },
    {
        "name":  "Sandipani School",
        "location":  "Nagpur",
        "logo":  "/images/clients/Sandipani School, Nagpur.jpg"
    },
    {
        "name":  "Sanjivani Academy",
        "location":  "Kopargaon",
        "logo":  "/images/clients/Sanjivani Academy, Kopargaon.png"
    },
    {
        "name":  "Satya Prakash Public School",
        "location":  "Jabalpur",
        "logo":  "/images/clients/Satya Prakash Public School, Jabalpur.jpg"
    },
    {
        "name":  "School of Scholars Groups",
        "location":  "",
        "logo":  "/images/clients/School of Scholars, Amravati.jpg"
    },
    {
        "name":  "Seth MR Jaipuria",
        "location":  "Aligarh",
        "logo":  "/images/clients/Seth MR Jaipuria, Aligarh.png"
    },
    {
        "name":  "Seth MR Jaipuria",
        "location":  "Bahraich",
        "logo":  "/images/clients/SMRB.jpg"
    },
    {
        "name":  "Shri Ram Global School",
        "location":  "South City Ludhiana",
        "logo":  "/images/clients/Shri Ram Global School, South City Ludhiana.png"
    },
    {
        "name":  "SKD International School",
        "location":  "Lucknow",
        "logo":  "/images/clients/SKD International School, Lucknow.png"
    },
    {
        "name":  "Sloka International School",
        "location":  "Hyderabad",
        "logo":  "/images/clients/Sloka International School, Hyderabad.png"
    },
    {
        "name":  "Sri Sri Academy",
        "location":  "Hyderabad",
        "logo":  "/images/clients/Sri Sri Academy, Hyderabad.png"
    },
    {
        "name":  "Sri Venkateshwar International School",
        "location":  "Dwarka",
        "logo":  "/images/clients/Sri Venkateshwar International School, Dwarka.jpg"
    },
    {
        "name":  "St. Joseph's Academy",
        "location":  "Dehradun",
        "logo":  "/images/clients/St. Joseph's Academy, Dehradun.png"
    },
    {
        "name":  "St. Peter Senior Secondary School",
        "location":  "Chandigarh",
        "logo":  "/images/clients/St. Peter Senior Secondary School, Chandigarh.jpg"
    },
    {
        "name":  "St. Xavier's School",
        "location":  "Bokaro",
        "logo":  "/images/clients/St. Xavier's School, Bokaro.jpg"
    },
    {
        "name":  "Takshila Progressive School",
        "location":  "Birtamod",
        "logo":  "/images/clients/Takshila Progressive School, Birtamod.jpg"
    },
    {
        "name":  "Thanekar International School",
        "location":  "Badlapur",
        "logo":  "/images/clients/Thanekar International School, Badlapur.png"
    },
    {
        "name":  "The Gramodaya School",
        "location":  "Bilara",
        "logo":  "/images/clients/The Gramodaya School, Bilara.jpg"
    },
    {
        "name":  "The Somaiya School",
        "location":  "Mumbai",
        "logo":  "/images/clients/The Somaiya School, Mumbai.png"
    },
    {
        "name":  "The Takshilah Global School",
        "location":  "Vellore",
        "logo":  "/images/clients/The Takshilah Global School, Vellore.png"
    },
    {
        "name":  "Utpal Shanghvi Global School",
        "location":  "Mumbai",
        "logo":  "/images/clients/Utpal Shanghvi Global School, Mumbai.jpg"
    },
]

export default schools
