
let data = {
    "Andaman and Nicobar Islands": ["Port Blair"],
    "Andhra Pradesh": ["Adoni", "Amaravati", "Anantapur", "Chandragiri", "Chittoor", "Dowlaiswaram", "Eluru", "Guntur", "Kadapa", "Kakinada", "Kurnool", "Machilipatnam", "Nagarjunakoṇḍa", "Rajahmundry", "Srikakulam", "Tirupati", "Vijayawada", "Visakhapatnam", "Vizianagaram", "Yemmiganur"],
    "Arunachal Pradesh": ["Itanagar"],
    "Lakshadweep" : ["Lakshadweep"],
    "Assam": ["Dhuburi", "Dibrugarh", "Dispur", "Guwahati", "Jorhat", "Nagaon", "Sivasagar", "Silchar", "Tezpur", "Tinsukia"],
    "Bihar": ["Ara", "Barauni", "Begusarai", "Bettiah", "Bhagalpur", "Bihar Sharif", "Bodh Gaya", "Buxar", "Chapra", "Darbhanga", "Dehri", "Dinapur Nizamat", "Gaya", "Hajipur", "Jamalpur", "Katihar", "Madhubani", "Motihari", "Munger", "Muzaffarpur", "Patna", "Purnia", "Pusa", "Saharsa", "Samastipur", "Sasaram", "Sitamarhi", "Siwan"],
    "Chandigarh": ["Chandigarh"],
    "Chattisgarh": ["Ambikapur", "Bhilai", "Bilaspur", "Dhamtari", "Durg", "Jagdalpur", "Raipur", "Rajnandgaon"],
    "Daman and Diu": ["Daman", "Diu"],
    "Dadra and Nagar Haveli":["Silvassa"],
    "Delhi": ["Delhi", "New Delhi"],
    "Goa": ["Madgaon", "Panaji"],
    "Gujarat": ["Ahmadabad", "Amreli", "Bharuch", "Bhavnagar", "Bhuj", "Dwarka", "Gandhinagar", "Godhra", "Jamnagar", "Junagadh", "Kandla", "Khambhat", "Kheda", "Mahesana", "Morbi", "Nadiad", "Navsari", "Okha", "Palanpur", "Patan", "Porbandar", "Rajkot", "Surat", "Surendranagar", "Valsad", "Veraval"],
    "Haryana": ["Ambala", "Bhiwani", "Chandigarh", "Faridabad", "Firozpur Jhirka", "Gurugram", "Hansi", "Hisar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Panipat", "Pehowa", "Rewari", "Rohtak", "Sirsa", "Sonipat"],
    "Himachal Pradesh": ["Bilaspur", "Chamba", "Dalhousie", "Dharmshala", "Hamirpur", "Kangra", "Kullu", "Mandi", "Nahan", "Shimla", "Una"],
    "Jammu and Kashmir": ["Anantnag", "Baramula", "Doda", "Gulmarg", "Jammu", "Kathua", "Punch", "Rajouri", "Srinagar", "Udhampur"],
    "Jharkhand": ["Bokaro", "Chaibasa", "Deoghar", "Dhanbad", "Dumka", "Giridih", "Hazaribag", "Jamshedpur", "Jharia", "Rajmahal", "Ranchi", "Saraikela"],
    "Karnataka": ["Badami", "Ballari", "Bengaluru", "Belagavi", "Bhadravati", "Bidar", "Chikkamagaluru", "Chitradurga", "Davangere", "Halebid", "Hassan", "Hubballi-Dharwad", "Kalaburagi", "Kolar", "Madikeri", "Mandya", "Mangaluru", "Mysuru", "Raichur", "Shivamogga", "Shravanabelagola", "Shrirangapattana", "Tumakuru", "Vijayapura"],
    "Kerala": ["Alappuzha", "Vatakara", "Idukki", "Kannur", "Kochi", "Kollam", "Kottayam", "Kozhikode", "Mattancheri", "Palakkad", "Thalassery", "Thiruvananthapuram", "Thrissur"],
    "Ladakh": ["Kargil", "Leh"],
    "Madhya Pradesh": ["Balaghat", "Barwani", "Betul", "Bharhut", "Bhind", "Bhojpur", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dr. Ambedkar Nagar (Mhow)", "Guna", "Gwalior", "Hoshangabad", "Indore", "Itarsi", "Jabalpur", "Jhabua", "Khajuraho", "Khandwa", "Khargone", "Maheshwar", "Mandla", "Mandsaur", "Morena", "Murwara", "Narsimhapur", "Narsinghgarh", "Narwar", "Neemuch", "Nowgong", "Orchha", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Sarangpur", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Ujjain", "Vidisha"],
    "Maharashtra": ["Ahmadnagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Bhusawal", "Bid", "Buldhana", "Chandrapur", "Daulatabad", "Dhule", "Jalgaon", "Kalyan", "Karli", "Kolhapur", "Mahabaleshwar", "Malegaon", "Matheran", "Mumbai", "Nagpur", "Nanded", "Nashik", "Osmanabad", "Pandharpur", "Parbhani", "Pune", "Ratnagiri", "Sangli", "Satara", "Sevagram", "Solapur", "Thane", "Ulhasnagar", "Vasai-Virar", "Wardha", "Yavatmal"],
    "Manipur": ["Imphal"],
    "Meghalaya": ["Cherrapunji", "Shillong"],
    "Mizoram": ["Aizawl", "Lunglei"],
    "Nagaland": ["Kohima", "Mon", "Phek", "Wokha", "Zunheboto"],
    "Odisha": ["Balangir", "Baleshwar", "Baripada", "Bhubaneshwar", "Brahmapur", "Cuttack", "Dhenkanal", "Kendujhar", "Konark", "Koraput", "Paradip", "Phulabani", "Puri", "Sambalpur", "Udayagiri"],
    "Puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"],
    "Punjab": ["Amritsar", "Batala", "Chandigarh", "Faridkot", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Nabha", "Patiala", "Rupnagar", "Sangrur"],
    "Rajasthan": ["Abu", "Ajmer", "Alwar", "Amer", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittaurgarh", "Churu", "Dhaulpur", "Dungarpur", "Ganganagar", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalor", "Jhalawar", "Jhunjhunu", "Jodhpur", "Kishangarh", "Kota", "Merta", "Nagaur", "Nathdwara", "Pali", "Phalodi", "Pushkar", "Sawai Madhopur", "Shahpura", "Sikar", "Sirohi", "Tonk", "Udaipur"],
    "Sikkim": ["Gangtok", "Gyalshing", "Lachung", "Mangan"],
    "Tamil Nadu": ["Arcot", "Chengalpattu", "Chennai", "Chidambaram", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanniyakumari", "Kodaikanal", "Kumbakonam", "Madurai", "Mamallapuram", "Nagappattinam", "Nagercoil", "Palayamkottai", "Pudukkottai", "Rajapalayam", "Ramanathapuram", "Salem", "Thanjavur", "Tiruchchirappalli", "Tirunelveli", "Tiruppur", "Thoothukudi", "Udhagamandalam", "Vellore"],
    "Telangana": ["Hyderabad", "Karimnagar", "Khammam", "Mahbubnagar", "Nizamabad", "Sangareddi", "Warangal"],
    "Tripura": ["Agartala"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Amroha", "Ayodhya", "Azamgarh", "Bahraich", "Ballia", "Banda", "Bara Banki", "Bareilly", "Basti", "Bijnor", "Bithur", "Budaun", "Bulandshahr", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad-cum-Fatehgarh", "Fatehpur", "Fatehpur Sikri", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Lakhimpur", "Lalitpur", "Lucknow", "Mainpuri", "Mathura", "Meerut", "Mirzapur-Vindhyachal", "Moradabad", "Muzaffarnagar", "Partapgarh", "Pilibhit", "Prayagraj", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Shahjahanpur", "Sitapur", "Sultanpur", "Tehri", "Varanasi"],
    "Uttarakhand": ["Almora", "Dehra Dun", "Haridwar", "Mussoorie", "Nainital", "Pithoragarh"],
    "West Bengal": ["Alipore", "Alipur Duar", "Asansol", "Baharampur", "Bally", "Balurghat", "Bankura", "Baranagar", "Barasat", "Barrackpore", "Basirhat", "Bhatpara", "Bishnupur", "Budge Budge", "Burdwan", "Chandernagore", "Darjeeling", "Diamond Harbour", "Dum Dum", "Durgapur", "Halisahar", "Haora", "Hugli", "Ingraj Bazar", "Jalpaiguri", "Kalimpong", "Kamarhati", "Kanchrapara", "Kharagpur", "Cooch Behar", "Kolkata", "Krishnanagar", "Malda", "Midnapore", "Murshidabad", "Nabadwip", "Palashi", "Panihati", "Purulia", "Raiganj", "Santipur", "Shantiniketan", "Shrirampur", "Siliguri", "Siuri", "Tamluk", "Titagarh"]
  }
  
  
  // var AndraPradesh = [
  //   "EAST GODAVARI",
  //   "WEST GODAVARI",
  //   "GUNTUR",
  //   "KRISHNA",
  //   "NELLORE",
  //   "PRAKASAM",
  //   "SRIKAKULAM",
  //   "VISAKHAPATNAM",
  //   "VIZIANAGARAM",
  //   "ADILABAD",
  //   "HYDERABAD",
  //   "KARIMNAGAR",
  //   "KHAMMAM",
  //   "MAHABUBNAGAR",
  //   "MEDAK",
  //   "NALGONDA",
  //   "NIZAMABAD",
  //   "WARANGAL",
  //   "RANGAREDDY",
  //   "ANANTAPUR",
  //   "CHITTOOR",
  //   "KUDDAPAH",
  //   "KURNOOL",
  // ];
  // var ArunachalPradesh = [
  //   "LOHIT",
  //   "EAST SIANG",
  //   "SUBANSIRI F.D",
  //   "TIRAP",
  //   "ch (LOHIT)",
  //   "LOWER DIBANG",
  //   "CHANGLANG",
  //   "PAPUM PARE",
  //   "LOW SUBANSIRI",
  //   "UPPER SIANG",
  //   "WEST SIANG",
  //   "DIBANG VALLEY",
  //   "WEST KAMENG",
  //   "EAST KAMENG",
  //   "TAWANG(W KAME)",
  //   "KURUNG KUMEY",
  // ];
  // var Assam = [
  //   "CACHAR",
  //   "DARRANG",
  //   "GOALPARA",
  //   "KAMRUP",
  //   "LAKHIMPUR",
  //   "NORTH CACHAR",
  //   "NAGAON",
  //   "SIVASAGAR",
  //   "BARPETA",
  //   "DHUBRI",
  //   "DIBRUGARH",
  //   "JORHAT",
  //   "KARIMGANJ",
  //   "KOKRAJHAR",
  //   "SHONITPUR",
  //   "GOLAGHAT",
  //   "TINSUKIA",
  //   "HAILAKANDI",
  //   "DHEMAJI(LAKHI",
  //   "KARBI ANGLONG",
  //   "UDALGURI(DARA",
  //   "KAMRUP METROP",
  //   "CHIRANG(BONGAI",
  //   "BAKSA BARPETA",
  //   "BONGAIGAON",
  //   "MORIGAON",
  //   "NALBARI",
  // ];
  // var Bihar = [
  //   "BHAGALPUR",
  //   "EAST CHAMPARAN",
  //   "DARBHANGA",
  //   "GAYA",
  //   "MUNGER",
  //   "MUZAFFARPUR",
  //   "WEST CHAMPARAN",
  //   "PURNEA",
  //   "GOPALGANJ",
  //   "MADHUBANI",
  //   "AURANGABAD",
  //   "BEGUSARAI",
  //   "BHOJPUR",
  //   "NALANDA",
  //   "PATNA",
  //   "KATIHAR",
  //   "KHAGARIA",
  //   "SARAN",
  //   "MADHEPURA",
  //   "NAWADA",
  //   "ROHTAS",
  //   "SAMASTIPUR",
  //   "SITAMARHI",
  //   "SIWAN",
  //   "VAISHALI",
  //   "JAHANABAD",
  //   "BUXAR",
  //   "ARARIA",
  //   "BANKA",
  //   "BHABUA",
  //   "JAMUI",
  //   "KISHANGANJ",
  //   "SHEIKHPURA",
  //   "SUPAUL",
  //   "LAKHISARAI",
  //   "SHEOHAR",
  //   "ARWAL",
  //   "SAHARSA",
  // ];
  // var Chhattisgarh = [
  //   "BASTAR",
  //   "BILASPUR",
  //   "DURG",
  //   "RAIGARH",
  //   "RAIPUR",
  //   "SURGUJA",
  //   "RAJNANDGAON",
  //   "DANTEWADA",
  //   "KANKER (NORH",
  //   "JANJGIR-CHAMP",
  //   "KORBA",
  //   "JASHPUR",
  //   "DHAMTARI",
  //   "MAHASAMUND",
  //   "KORIYA",
  //   "KOWARDHA (KAB",
  //   "NARAYANPUR",
  //   "BIJAPUR",
  // ];
  // var Goa = ["NORTH GOA", "SOUTH GOA"];
  // var Gujarat = [
  //   "AHMEDABAD",
  //   "BANASKANTHA",
  //   "BARODA",
  //   "BHARUCH",
  //   "VALSAD",
  //   "DANGS",
  //   "KHEDA",
  //   "MEHSANA",
  //   "PANCHMAHALS",
  //   "SABARKANTHA",
  //   "SURAT",
  //   "GANDHINAGAR",
  //   "NARMADA(BRC)",
  //   "NAVSARI(VSD)",
  //   "ANAND(KHR)",
  //   "PATAN(MHSN)",
  //   "DAHOD(PNML)",
  //   "TAPI(SRT)",
  //   "AMRELI",
  //   "BHAVNAGAR",
  //   "JAMNAGAR",
  //   "JUNAGADH",
  //   "KUTCH",
  //   "RAJKOT",
  //   "SURENDRANAGAR",
  //   "PORBANDAR",
  // ];
  // var Haryana = [
  //   "AMBALA",
  //   "GURGAON",
  //   "HISAR",
  //   "JIND",
  //   "KARNAL",
  //   "MAHENDRAGARH",
  //   "ROHTAK",
  //   "BHIWANI",
  //   "FARIDABAD",
  //   "KURUKSHETRA",
  //   "SIRSA",
  //   "SONEPAT(RTK)",
  //   "YAMUNANAGAR",
  //   "KAITHAL",
  //   "PANIPAT",
  //   "REWARI",
  //   "FATEHABAD",
  //   "JHAJJAR",
  //   "PANCHKULA",
  //   "MEWAT",
  //   "PALWAL(FRD)",
  // ];
  // var HimachalPradesh = [
  //   "BILASPUR",
  //   "CHAMBA",
  //   "KANGRA",
  //   "KINNAUR",
  //   "KULLU",
  //   "LAHUL & SPITI",
  //   "MANDI",
  //   "HAMIRPUR",
  //   "SHIMLA",
  //   "SIRMAUR",
  //   "SOLAN",
  //   "UNA",
  // ];
  // var JammuKashmir = [
  //   "ANANTNAG",
  //   "BARAMULLA",
  //   "DODA",
  //   "JAMMU",
  //   "KATHUA",
  //   "LADAKH (LEH)",
  //   "UDHAMPUR",
  //   "BADGAM",
  //   "KUPWARA",
  //   "PULWAMA",
  //   "SRINAGAR",
  //   "KARGIL",
  //   "POONCH",
  //   "RAJOURI",
  //   "BANDIPORE",
  //   "GANDERWAL",
  //   "KULGAM/(ANT)",
  //   "SHOPAN",
  //   "SAMBA",
  //   "KISTWAR",
  //   "REASI",
  //   "RAMBAN(DDA)",
  // ];
  // var Jharkhand = [
  //   "BOKARO",
  //   "DHANBAD",
  //   "DUMKA",
  //   "HAZARIBAG",
  //   "PALAMU",
  //   "RANCHI",
  //   "SAHIBGANJ",
  //   "WEST SINGHBHUM",
  //   "DEOGHAR",
  //   "GIRIDIH",
  //   "GODDA",
  //   "GUMLA",
  //   "LOHARDAGA",
  //   "CHATRA",
  //   "KODERMA",
  //   "PAKUR",
  //   "EAST SINGHBHU",
  //   "GARHWA",
  //   "SERAIKELA-KHA",
  //   "JAMTARA",
  //   "LATEHAR",
  //   "SIMDEGA",
  //   "KHUNTI(RANCHI",
  //   "RAMGARH",
  // ];
  // var Karnataka = [
  //   "UTTAR KANNADA",
  //   "DAKSHIN KANDA",
  //   "UDUPI",
  //   "BELGAM",
  //   "BIDAR",
  //   "BIJAPUR",
  //   "DHARWAD",
  //   "GULBARGA",
  //   "YADGIR",
  //   "RAICHUR",
  //   "BAGALKOTE",
  //   "GADAG",
  //   "HAVERI",
  //   "KOPPAL",
  //   "BANGALORE RUR",
  //   "BELLARY",
  //   "CHIKMAGALUR",
  //   "CHITRADURGA",
  //   "KODAGU",
  //   "HASSAN",
  //   "KOLAR",
  //   "MANDYA",
  //   "MYSORE",
  //   "SHIMOGA",
  //   "TUMKUR",
  //   "BANGALORE URB",
  //   "CHAMARAJANAGA",
  //   "DAVANGERE",
  //   "RAMNAGAR(BNGR)",
  //   "CHICKBALLAPUR",
  // ];
  // var Kerala = [
  //   "ALAPPUZHA",
  //   "CANNUR",
  //   "ERNAKULAM",
  //   "KOTTAYAM",
  //   "KOZHIKODE",
  //   "MALAPPURAM",
  //   "PALAKKAD",
  //   "KOLLAM",
  //   "THRISSUR",
  //   "THIRUVANANTHA",
  //   "IDUKKI",
  //   "KASARGOD",
  //   "PATHANAMTHITTA",
  //   "WAYANAD",
  // ];
  // var MadhyaPradesh = [
  //   "BETUL",
  //   "VIDISHA",
  //   "BHIND",
  //   "DATIA",
  //   "DEWAS",
  //   "DHAR",
  //   "GUNA",
  //   "GWALIOR",
  //   "HOSHANGABAD",
  //   "INDORE",
  //   "JHABUA",
  //   "MANDSAUR",
  //   "MORENA",
  //   "KHANDWA",
  //   "KHARGONE",
  //   "RAISEN",
  //   "RAJGARH",
  //   "RATLAM",
  //   "SEHORE",
  //   "SHAJAPUR",
  //   "SHIVPURI",
  //   "UJJAIN",
  //   "BHOPAL",
  //   "HARDA",
  //   "NEEMUCH",
  //   "SHEOPUR",
  //   "BARWANI",
  //   "ASHOKNAGAR(GNA",
  //   "BURHANPUR",
  //   "ALIRAJPUR(JBA)",
  //   "BALAGHAT",
  //   "CHHATARPUR",
  //   "CHHINDWARA",
  //   "JABALPUR",
  //   "MANDLA",
  //   "NARSINGHPUR",
  //   "PANNA",
  //   "REWA",
  //   "SAGAR",
  //   "SATNA",
  //   "SEONI",
  //   "SHAHDOL",
  //   "SIDHI",
  //   "TIKAMGARH",
  //   "KATNI",
  //   "DINDORI",
  //   "UMARIA",
  //   "DAMOH",
  //   "ANUPPUR(SHAHD",
  //   "SINGRAULI",
  // ];
  // var Maharashtra = [
  //   "MUMBAI CITY",
  //   "RAIGAD",
  //   "RATNAGIRI",
  //   "THANE",
  //   "SINDHUDURG",
  //   "MUMBAI SUB",
  //   "AHMEDNAGAR",
  //   "DHULE",
  //   "JALGAON",
  //   "KOLHAPUR",
  //   "NASHIK",
  //   "PUNE",
  //   "SANGLI",
  //   "SATARA",
  //   "SOLAPUR",
  //   "NANDURBAR",
  //   "AURANGABAD",
  //   "BEED",
  //   "NANDED",
  //   "OSMANABAD",
  //   "PARBHANI",
  //   "LATUR",
  //   "JALNA",
  //   "HINGOLI",
  //   "AKOLA",
  //   "AMRAVATI",
  //   "BHANDARA",
  //   "BULDHANA",
  //   "CHANDRAPUR",
  //   "NAGPUR",
  //   "YAVATMAL",
  //   "WARDHA",
  //   "GADCHIROLI",
  //   "WASHIM",
  //   "GONDIA",
  // ];
  // var Manipur = [
  //   "IMPHAL EAST",
  //   "SENAPATI",
  //   "TAMENGLONG",
  //   "CHANDEL",
  //   "UKHRUL",
  //   "THOUBAL",
  //   "BISHNUPUR",
  //   "IMPHAL WEST",
  //   "CHURACHANDPUR",
  // ];
  // var Meghalaya = [
  //   "EAST KHASI HI",
  //   "JAINTIA HILLS",
  //   "EAST GARO HIL",
  //   "RI-BHOI",
  //   "SOUTH GARO HI",
  //   "W KHASI HILL",
  //   "WEST GARO HIL",
  // ];
  // var Mizoram = [
  //   "AIZAWL",
  //   "CHAMPHAI",
  //   "KOLASIB",
  //   "LUNGLEI",
  //   "CHHIMTUIPUI",
  //   "LAWNGTLAI",
  //   "MAMIT",
  //   "SAIHA",
  //   "SERCHHIP",
  // ];
  // var Nagaland = [
  //   "KOHIMA",
  //   "TUENSANG",
  //   "MOKOKCHUNG",
  //   "DIMAPUR",
  //   "WOKHA",
  //   "MON",
  //   "ZUNHEBOTO",
  //   "PHEK",
  //   "KEPHRIE",
  //   "LONGLENG",
  //   "PEREN",
  // ];
  // var Odisha = [
  //   "BALASORE",
  //   "BOLANGIR",
  //   "KANDHAMAL/PHU",
  //   "CUTTACK",
  //   "DHENKANAL",
  //   "GANJAM",
  //   "KALAHANDI",
  //   "KEONDJHARGARH",
  //   "KORAPUT",
  //   "MAYURBHANJ",
  //   "PURI",
  //   "SAMBALPUR",
  //   "SUNDARGARH",
  //   "BHADRAK",
  //   "JAJPUR",
  //   "KENDRAPARA",
  //   "ANGUL",
  //   "NAWAPARA",
  //   "MALKANGIRI",
  //   "NAWARANGPUR",
  //   "NAYAGARH",
  //   "KHURDA",
  //   "BARGARH",
  //   "JHARSUGUDA",
  //   "DEOGARH",
  //   "RAYAGADA",
  //   "GAJAPATI",
  //   "JAGATSINGHAPU",
  //   "BOUDHGARH",
  //   "SONEPUR",
  // ];
  // var Punjab = [
  //   "AMRITSAR",
  //   "BATHINDA",
  //   "FEROZEPUR",
  //   "GURDASPUR",
  //   "HOSHIARPUR",
  //   "JALANDHAR",
  //   "KAPURTHALA",
  //   "LUDHIANA",
  //   "PATIALA",
  //   "RUPNAGAR",
  //   "SANGRUR",
  //   "FARIDKOT",
  //   "MOGA",
  //   "NAWANSHAHR",
  //   "FATEHGARH SAH",
  //   "MUKTSAR",
  //   "MANSA",
  //   "BARNALA",
  //   "SAS NAGAR(MGA)",
  //   "TARN TARAN",
  // ];
  // var Rajasthan = [
  //   "BARMER",
  //   "BIKANER",
  //   "CHURU",
  //   "SRI GANGANAGA",
  //   "JAISALMER",
  //   "JALORE",
  //   "JODHPUR",
  //   "NAGAUR",
  //   "PALI",
  //   "HANUMANGARH",
  //   "AJMER",
  //   "ALWAR",
  //   "BANSWARA",
  //   "BHARATPUR",
  //   "BHILWARA",
  //   "BUNDI",
  //   "CHITTORGARH",
  //   "DUNGARPUR",
  //   "JAIPUR",
  //   "JHALAWAR",
  //   "JHUNJHUNU",
  //   "KOTA",
  //   "SAWAI MADHOPUR",
  //   "SIKAR",
  //   "SIROHI",
  //   "TONK",
  //   "UDAIPUR",
  //   "DHOLPUR",
  //   "BARAN",
  //   "DAUSA",
  //   "RAJSAMAND",
  //   "KARAULI",
  //   "PRATAPGARH(CHT",
  // ];
  // var Sikkim = ["NORTH SIKKIM", "EAST SIKKIM", "WEST SIKKIM", "SOUTH SIKKIM"];
  // var TamilNadu = [
  //   "VELLORE",
  //   "COIMBATORE",
  //   "DHARMAPURI",
  //   "KANYAKUMARI",
  //   "CHENNAI",
  //   "MADURAI",
  //   "NILGIRIS",
  //   "RAMANATHAPURA",
  //   "SALEM",
  //   "THANJAVUR",
  //   "TIRUCHIRAPPAL",
  //   "TIRUNELVELI",
  //   "ERODE",
  //   "PUDUKKOTTAI",
  //   "DINDIGUL",
  //   "VIRUDHUNAGAR",
  //   "SIVAGANGA",
  //   "THOOTHUKUDI",
  //   "TIRUVANNAMALA",
  //   "NAGAPATTINAM",
  //   "VILUPPURAM",
  //   "CUDDALORE",
  //   "KANCHIPURAM",
  //   "TIRUVALLUR",
  //   "THENI",
  //   "NAMAKKAL",
  //   "KARUR",
  //   "PERAMBALUR",
  //   "TIRUVARUR",
  //   "KRISHNAGIRI",
  //   "ARIYALUR",
  //   "TIRUPUR",
  // ];
  // // var Telangana = ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"];
  // var Tripura = ["NORTH TRIPURA", "SOUTH TRIPURA", "WEST TRIPURA", "DHALAI"];
  // var UttarPradesh = [
  //   "ALLAHABAD",
  //   "AZAMGARH",
  //   "BAHRAICH",
  //   "BALLIA",
  //   "BANDA",
  //   "BARABANKI",
  //   "BASTI",
  //   "DEORIA",
  //   "FAIZABAD",
  //   "FARRUKHABAD",
  //   "FATEHPUR",
  //   "GHAZIPUR",
  //   "GONDA",
  //   "GORAKHPUR",
  //   "HARDOI",
  //   "JAUNPUR",
  //   "KANPUR NAGAR",
  //   "KHERI LAKHIMP",
  //   "LUCKNOW",
  //   "MIRZAPUR",
  //   "PRATAPGARH",
  //   "RAE BARELI",
  //   "SITAPUR",
  //   "SULTANPUR",
  //   "UNNAO",
  //   "VARANASI",
  //   "SONBHADRA",
  //   "MAHARAJGANJ",
  //   "MAU",
  //   "SIDDHARTH NGR",
  //   "KUSHINAGAR",
  //   "AMBEDKAR NAGAR",
  //   "KANNAUJ",
  //   "BALRAMPUR",
  //   "KAUSHAMBI",
  //   "SAHUJI MAHARA",
  //   "KANPUR DEHAT",
  //   "CHANDAULI",
  //   "SANT KABIR NGR",
  //   "SANT RAVIDAS",
  //   "SHRAVASTI NGR",
  //   "AGRA",
  //   "ALIGARH",
  //   "BAREILLY",
  //   "BIJNOR",
  //   "BADAUN",
  //   "BULANDSHAHAR",
  //   "ETAH",
  //   "ETAWAH",
  //   "HAMIRPUR",
  //   "JALAUN",
  //   "JHANSI",
  //   "LALITPUR",
  //   "MAINPURI",
  //   "MATHURA",
  //   "MEERUT",
  //   "MORADABAD",
  //   "MUZAFFARNAGAR",
  //   "PILIBHIT",
  //   "RAMPUR",
  //   "SAHARANPUR",
  //   "SHAHJAHANPUR",
  //   "GHAZIABAD",
  //   "FIROZABAD",
  //   "MAHOBA",
  //   "MAHAMAYA NAGA",
  //   "AURAIYA",
  //   "BAGPAT",
  //   "JYOTIBA PHULE",
  //   "GAUTAM BUDDHA",
  //   "KANSHIRAM NAG",
  // ];
  // var Uttarakhand = [
  //   "ALMORA",
  //   "CHAMOLI",
  //   "DEHRADUN",
  //   "GARHWAL PAURI",
  //   "NAINITAL",
  //   "PITHORAGARH",
  //   "GARHWAL TEHRI",
  //   "UTTARKASHI",
  //   "HARIDWAR",
  //   "CHAMPAWAT",
  //   "RUDRAPRAYAG",
  //   "UDHAM SINGH N",
  //   "BAGESHWAR",
  // ];
  // var WestBengal = [
  //   "COOCH BEHAR",
  //   "DARJEELING",
  //   "JALPAIGURI",
  //   "MALDA",
  //   "SOUTH DINAJPUR",
  //   "NORTH DINAJPUR",
  //   "BANKURA",
  //   "BIRBHUM",
  //   "BURDWAN",
  //   "HOOGHLY",
  //   "HOWRAH",
  //   "PURULIA",
  //   "MURSHIDABAD",
  //   "NADIA",
  //   "NORTH 24 PARG",
  //   "SOUTH 24 PARG",
  //   "EAST MIDNAPOR",
  //   "WEST MIDNAPOR",
  //   "KOLKATA",
  // ];
  // var AndamanNicobar = ["NICOBAR", "SOUTH ANDAMAN", "N & M ANDAMAN"];
  // var Chandigarh = ["CHANDIGARH"];
  // var DadraHaveli = ["DNH"];
  // var DamanDiu = ["DAMAN", "DIU"];
  // var Delhi = [
  //   "NEW DELHI",
  //   "CENTRAL DELHI",
  //   "EAST DELHI",
  //   "NORTH DELHI",
  //   "NE DELHI",
  //   "SW DELHI",
  //   "NW DELHI",
  //   "SOUTH DELHI",
  //   "WEST DELHI",
  // ];
  // var Lakshadweep = ["LAKSHADWEEP"];
  // var Puducherry = ["PONDICHERRY", "KARAIKAL", "MAHE", "YANAM"];
  let inputState = document.getElementById('inputState');
  inputState.change
//   $("#inputState").change
  (function () {
    var StateSelected = inputState.value;
    console.log("state selected:::::::::::::::::::: "+ StateSelected);
    var optionsList;
    optionsList = data[StateSelected];
    var htmlString = "";
  
    // switch (StateSelected) {
    //   case "ANDHRA PRADESH":
    //     optionsList = data["Andhra Pradesh"];
    //     break;
    //   case "ARUNACHAL PRADESH":
    //     optionsList = ArunachalPradesh;
    //     break;
    //   case "ASSAM":
    //     optionsList = Assam;
    //     break;
    //   case "BIHAR":
    //     optionsList = Bihar;
    //     break;
    //   case "CHATISGARH":
    //     optionsList = Chhattisgarh;
    //     break;
    //   case "GOA":
    //     optionsList = Goa;
    //     break;
    //   case "GUJARAT":
    //     optionsList = Gujarat;
    //     break;
    //   case "HARYANA":
    //     optionsList = Haryana;
    //     break;
    //   case "HIMACHAL":
    //     optionsList = HimachalPradesh;
    //     break;
    //   case "JAMMU AND KASHMIR":
    //     optionsList = JammuKashmir;
    //     break;
    //   case "JHARKHAND":
    //     optionsList = Jharkhand;
    //     break;
    //   case "KARNATAKA":
    //     optionsList = Karnataka;
    //     break;
    //   case "KERALA":
    //     optionsList = Kerala;
    //     break;
    //   case "MADHYA PRADESH":
    //     optionsList = MadhyaPradesh;
    //     break;
    //   case "MAHARASHTRA":
    //     optionsList = Maharashtra;
    //     break;
    //   case "MANIPUR":
    //     optionsList = Manipur;
    //     break;
    //   case "MEGHALAYA":
    //     optionsList = Meghalaya;
    //     break;
    //   case "MIZORAM":
    //     optionsList = Mizoram;
    //     break;
    //   case "NAGALAND":
    //     optionsList = Nagaland;
    //     break;
    //   case "ORISSA":
    //     optionsList = Orissa;
    //     break;
    //   case "PUNJAB":
    //     optionsList = Punjab;
    //     break;
    //   case "RAJASTHAN":
    //     optionsList = Rajasthan;
    //     break;
    //   case "SIKKIM":
    //     optionsList = Sikkim;
    //     break;
    //   case "TAMIL NADU":
    //     optionsList = TamilNadu;
    //     break;
    //   // case  "TELANGANA":
    //   //     optionsList = Telangana;
    //   //     break;
    //   case "TRIPURA":
    //     optionsList = Tripura;
    //     break;
    //   case "UTTARANCHAL":
    //     optionsList = Uttaranchal;
    //     break;
    //   case "UTTAR PRADESH":
    //     optionsList = UttarPradesh;
    //     break;
    //   case "WEST BENGAL":
    //     optionsList = WestBengal;
    //     break;
    //   case "ANDAMAN And NICOBAR ISLANDS":
    //     optionsList = AndamanNicobar;
    //     break;
    //   case "CHANDIGARH":
    //     optionsList = Chandigarh;
    //     break;
    //   case "DADAR NAGAR HAVELI":
    //     optionsList = DadraHaveli;
    //     break;
    //   case "DAMAN AND DUI":
    //     optionsList = DamanDiu;
    //     break;
    //   case "DELHI":
    //     optionsList = Delhi;
    //     break;
    //   case "LAKSHADWEEP":
    //     optionsList = Lakshadeep;
    //     break;
    //   case "PONDICHERRY":
    //     optionsList = Pondicherry;
    //     break;
    // }
  
    for (var i = 0; i < optionsList.length; i++) {
      htmlString =
        htmlString +
        "<option value='" +
        optionsList[i] +
        "'>" +
        optionsList[i] +
        "</option>";
    }
    let inputDistrict = document.getElementById("inputDistrict").html(htmlString);
  });
  
  function predict() {
    var nitrogen = Number(document.getElementById("nitrogen").value);
  
    var phosphorous = Number(document.getElementById("phosphorous").value);
  
    var potassium = Number(document.getElementById("potassium").value);
  
    var ph = Number(document.getElementById("ph").value);
  
    var state = document.getElementById("inputState").value;
  
    var district = document.getElementById("inputDistrict").value;
  
    var rainfall = document.getElementById("inputRainfall").value;
  
    // Get the values above, put it in a json object and send it to the backend endpoint localhost:8000/predict using fetch
  
    var data = {
      nitrogen: nitrogen,
      phosphorous: phosphorous,
      potassium: potassium,
      ph: ph,
      state: state,
      district: district,
      rainfall: rainfall,
    };
    fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("prediction").innerHTML = data["result"];
        const image = new Image();
        image.src = "data/Crops/" + data.result + ".jpg";
        image.height = 250;
        console.log(image.src);
  
        let imageContainer = document.getElementById("imageContainer");
        while (imageContainer.firstChild) {
          imageContainer.removeChild(imageContainer.firstChild);
        }
        imageContainer.appendChild(image);
  
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  
    // console.log("response", response);
    // console.log(ph);
  }