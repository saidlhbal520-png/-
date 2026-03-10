let lang = "ar";

// قائمة الصيدليات الكاملة مع العناوين بالعربية والفرنسية
const pharmacies = [

{
name_ar:"صيدلية الفتح",
name_fr:"Pharmacie El Fath",
address_ar:"أمام مسجد الفتح",
address_fr:"Face à la mosquée El Fath",
phone:"0528863442",
map:"https://maps.google.com/?q=Pharmacie+El+Fath+Tiznit"
},

{
name_ar:"صيدلية أبوزيد",
name_fr:"Pharmacie Abouzaid",
address_ar:"طريق أكلو قرب المستشفى",
address_fr:"Route d'Aglou, près de l'Hôpital Hassan I",
phone:"0528601500",
map:"https://maps.google.com/?q=Pharmacie+Abouzaid+Tiznit"
},

{
name_ar:"صيدلية السوق",
name_fr:"Pharmacie Souk",
address_ar:"طريق تفراوت، الحي الصناعي",
address_fr:"Route Tafraoute, Quartier Industriel",
phone:"0528860200",
map:"https://maps.google.com/?q=Pharmacie+Souk+Tiznit"
},

{
name_ar:"صيدلية إراك",
name_fr:"Pharmacie Erac",
address_ar:"شارع 30، تجزئة إراك",
address_fr:"Rue 30, Lotissement Erac",
phone:"0528600346",
map:"https://maps.google.com/?q=Pharmacie+Erac+Tiznit"
},

{
name_ar:"صيدلية طريق كلميم",
name_fr:"Pharmacie Route de Guelmim",
address_ar:"شارع بئر أنزاران، طريق كلميم",
address_fr:"Boulevard Bir Anzarane, Route de Guelmim",
phone:"0528866778",
map:"https://maps.google.com/?q=Pharmacie+Route+de+Guelmim+Tiznit"
},

{
name_ar:"صيدلية الأمل",
name_fr:"Pharmacie Al Amal",
address_ar:"شارع 30 أفراك، قرب مقهى فينيسيا",
address_fr:"Avenue 30 Afrag, près du café Venezia",
phone:"0528861729",
map:"https://maps.google.com/?q=Pharmacie+Al+Amal+Tiznit"
},

{
name_ar:"صيدلية أسفار ن إسفارن",
name_fr:"Pharmacie Assafar N Issafarne",
address_ar:"شارع الحسن الثاني، تجزئة الحرية",
address_fr:"Avenue Hassan II, Lot Al Houria",
phone:"0528862434",
map:"https://maps.google.com/?q=Pharmacie+Assafar+N+Issafarne+Tiznit"
},

{
name_ar:"صيدلية أوروبا",
name_fr:"Pharmacie Europe",
address_ar:"ودادية الموظفين، أمام حديقة مولاي عبد الله",
address_fr:"Amicale des fonctionnaires, face au parc My Abdellah",
phone:"0528863545",
map:"https://maps.google.com/?q=Pharmacie+Europe+Tiznit"
},

{
name_ar:"صيدلية الشريف الإدريسي",
name_fr:"Pharmacie Charif Idrissi",
address_ar:"خارج باب أكلو، قرب عيادة جاسم",
address_fr:"Hors Bab Aglou, près de la clinique Jassim",
phone:"0528602525",
map:"https://maps.google.com/?q=Pharmacie+Charif+Idrissi+Tiznit"
},

{
name_ar:"صيدلية شارع 30",
name_fr:"Pharmacie Avenue 30",
address_ar:"شارع 30، قرب ثانوية الوحدة",
address_fr:"Avenue 30, près du lycée Al Wahda",
phone:"0528864433",
map:"https://maps.google.com/?q=Pharmacie+Avenue+30+Tiznit"
},

{
name_ar:"صيدلية أفراك",
name_fr:"Pharmacie Afrag",
address_ar:"شارع إدريس الحارثي، قرب مسجد القدس",
address_fr:"Boulevard Driss El Harti, près de la mosquée Al Qods",
phone:"0528600788",
map:"https://maps.google.com/?q=Pharmacie+Afrag+Tiznit"
},

{
name_ar:"صيدلية بن عمر",
name_fr:"Pharmacie Ben Omar",
address_ar:"شارع 30 أفراك، مقابل BMCE",
address_fr:"30 rue Afrak, face à BMCE",
phone:"0528600814",
map:"https://maps.google.com/?q=Pharmacie+Ben+Omar+Tiznit"
},

{
name_ar:"صيدلية الصحة",
name_fr:"Pharmacie La Santé",
address_ar:"حي المسيرة، بين حمام أسكتي وشارع الوفاق",
address_fr:"Quartier Al Massira",
phone:"0528602526",
map:"https://maps.google.com/?q=Pharmacie+La+Santé+Tiznit"
},

{
name_ar:"صيدلية إكرام",
name_fr:"Pharmacie Ikram",
address_ar:"عمارة نصر، طريق أكلو",
address_fr:"Immeuble Nasr, Route Aglou",
phone:"0707150651",
map:"https://maps.google.com/?q=Pharmacie+Ikram+Tiznit"
},

{
name_ar:"صيدلية الشعب",
name_fr:"Pharmacie du Peuple",
address_ar:"شارع علال بن عبد الله، قرب المحكمة الابتدائية",
address_fr:"Rue Allal Ben Abdellah, près du tribunal",
phone:"0528601755",
map:"https://maps.google.com/?q=Pharmacie+du+Peuple+Tiznit"
},

{
name_ar:"صيدلية الجنوب",
name_fr:"Pharmacie du Sud",
address_ar:"بالقرب من ودادية الموظفين",
address_fr:"Près de l'Amicale des fonctionnaires",
phone:"0528601400",
map:"https://maps.google.com/?q=Pharmacie+du+Sud+Tiznit"
},

{
name_ar:"صيدلية الجديدة",
name_fr:"Pharmacie Nouvelle",
address_ar:"شارع سيدي عبد الرحمان",
address_fr:"Avenue Sidi Abderrahmane",
phone:"0528862742",
map:"https://maps.google.com/?q=Pharmacie+Nouvelle+Tiznit"
},

{
name_ar:"صيدلية النصيري",
name_fr:"Pharmacie Nassiri",
address_ar:"شارع محمد الخامس، اليوسفية",
address_fr:"N° 1, Avenue Mohammed V, Youssoufia",
phone:"0528600721",
map:"https://maps.google.com/?q=Pharmacie+Nassiri+Tiznit"
},

{
name_ar:"صيدلية بلحاج",
name_fr:"Pharmacie Bel Haj",
address_ar:"سوق سي بلعيد",
address_fr:"Souk Si Blaid",
phone:"0528601782",
map:"https://maps.google.com/?q=Pharmacie+Bel+Haj+Tiznit"
},

{
name_ar:"صيدلية التكوين",
name_fr:"Pharmacie Attakwine",
address_ar:"طريق تفراوت، قرب التكوين المهني",
address_fr:"Route de Tafraoute, près de la formation professionnelle",
phone:"0525255060",
map:"https://maps.google.com/?q=Pharmacie+Attakwine+Tiznit"
},

{
name_ar:"صيدلية حي النخيل",
name_fr:"Pharmacie Hay Nakhil",
address_ar:"الشارع الرئيسي حي النخيل",
address_fr:"Rue principale Nakhil",
phone:"0528861949",
map:"https://maps.google.com/?q=Pharmacie+Hay+Nakhil+Tiznit"
},

{
name_ar:"صيدلية المحطة",
name_fr:"Pharmacie La Gare",
address_ar:"طريق تفراوت، قرب السوق الأسبوعي",
address_fr:"Route de Tafraoute, près du marché hebdomadaire",
phone:"0667134940",
map:"https://maps.google.com/?q=Pharmacie+La+Gare+Tiznit"
},

{
name_ar:"صيدلية إيليغ",
name_fr:"Pharmacie Iligh",
address_ar:"حي السعيدية، تجزئة المستقبل",
address_fr:"Cité Saidia, Lot Al Moustakbal",
phone:"0528860289",
map:"https://maps.google.com/?q=Pharmacie+Iligh+Tiznit"
},

{
name_ar:"صيدلية ابن سينا",
name_fr:"Pharmacie Ibn Sina",
address_ar:"طريق كلميم، أمام محطة شيل",
address_fr:"Route de Guelmim, face à la station Shell",
phone:"0528860285",
map:"https://maps.google.com/?q=Pharmacie+Ibn+Sina+Tiznit"
},

{
name_ar:"الصيدلية الكبرى",
name_fr:"Pharmacie La Grande",
address_ar:"شارع محمد الخامس، اليوسفية",
address_fr:"Avenue Mohammed V, Youssoufia",
phone:"0528600814",
map:"https://maps.google.com/?q=Pharmacie+La+Grande+Tiznit"
},

{
name_ar:"صيدلية فوق الواد",
name_fr:"Pharmacie Fouk El Wad",
address_ar:"فوق الواد، قرب مدرسة 18 نونبر",
address_fr:"Agadir Assif direction Tarka, près de l'école 18 Novembre",
phone:"0528601061",
map:"https://maps.google.com/?q=Pharmacie+Fouk+El+Wad+Tiznit"
},

{
name_ar:"صيدلية المختار السوسي",
name_fr:"Pharmacie Mokhtar Soussi",
address_ar:"أمام مستشفى حمان الفتوكي",
address_fr:"Face à l'Hôpital Houmane El Fatouaki",
phone:"0528863565",
map:"https://maps.google.com/?q=Pharmacie+Mokhtar+Soussi+Tiznit"
},

{
name_ar:"صيدلية الشفاء",
name_fr:"Pharmacie Narjou Chifaa",
address_ar:"الطريق القديم لأكلو، قرب مدرسة الصفا",
address_fr:"Ancienne route d'Aglou, près de l'école Assfa 1",
phone:"0707735712",
map:"https://maps.google.com/?q=Pharmacie+Narjou+Chifaa+Tiznit"
},

{
name_ar:"صيدلية رحمة الله",
name_fr:"Pharmacie Rahmatallah",
address_ar:"تجزئة نهضة 2، أمام مؤسسة رواد النهضة الخاصة",
address_fr:"Lotissement Nahda 2, devant l'Institution Privée Rowad Nahda",
phone:"0528866233",
map:"https://maps.google.com/?q=Pharmacie+Rahmatallah+Tiznit"
},

{
name_ar:"الصيدلية الإقليمية",
name_fr:"Pharmacie Provinciale",
address_ar:"طريق أكادير",
address_fr:"Route d'Agadir",
phone:"0528600775",
map:"https://maps.google.com/?q=Pharmacie+Provinciale+Tiznit"
},

{
name_ar:"صيدلية المستقبل",
name_fr:"Pharmacie Almostaqbal",
address_ar:"تجزئة العبور، العين الزرقة، قرب خزان المياه",
address_fr:"N°71 lotissement Al Oubour, Ain Zerka",
phone:"0528602111",
map:"https://maps.google.com/?q=Pharmacie+Almostaqbal+Tiznit"
},

{
name_ar:"صيدلية المستشفى",
name_fr:"Pharmacie l'Hôpital",
address_ar:"طريق أكلو، أمام مستشفى الحسن الأول",
address_fr:"Route Aglou, face à l'Hôpital Hassan I",
phone:"0528863285",
map:"https://maps.google.com/?q=Pharmacie+l'Hôpital+Tiznit"
},

{
name_ar:"صيدلية الأطلس",
name_fr:"Pharmacie El Atlas",
address_ar:"تقاطع طريق إفني وشارع 30",
address_fr:"Intersection Route Ifni et Rue 30",
phone:"0528601534",
map:"https://maps.google.com/?q=Pharmacie+El+Atlas+Tiznit"
},

{
name_ar:"صيدلية سهل سوس",
name_fr:"Pharmacie Sahl Souss",
address_ar:"ساحة المشوار",
address_fr:"Place El Mechouare",
phone:"0528861741",
map:"https://maps.google.com/?q=Pharmacie+Sahl+Souss+Tiznit"
},

{
name_ar:"صيدلية طريق إفني",
name_fr:"Pharmacie Route Ifni",
address_ar:"طريق إفني، قرب محطة الوقود أفريقيا",
address_fr:"Route Ifni, près de la station-service Afriquia",
phone:"0528601296",
map:"https://maps.google.com/?q=Pharmacie+Route+Ifni+Tiznit"
},

{
name_ar:"الصيدلية المركزية",
name_fr:"Pharmacie Centrale",
address_ar:"رقم 186، بلوك B، ودادية الموظفين",
address_fr:"N°186, Bloc B, Amicales des Fonctionnaires",
phone:"0528861731",
map:"https://maps.google.com/?q=Pharmacie+Centrale+Tiznit"
},

{
name_ar:"صيدلية المرس",
name_fr:"Pharmacie Al Mers",
address_ar:"شارع المرس اد الضلحى، أمام المركز الصحي",
address_fr:"Rue El Mers Edalha, en face du dispensaire, El Mers",
phone:"0528860728",
map:"https://maps.google.com/?q=Pharmacie+Al+Mers+Tiznit"
}

];

// اختيار صيدلية اليوم
function pharmacyToday(){
  const day = new Date().getDate();
  return pharmacies[day % pharmacies.length];
}

// عرض صيدلية اليوم
function showToday(){
  const p = pharmacyToday();
  document.getElementById("today").innerHTML =
    `<h2>📅 صيدلية المداومة اليوم</h2>
    <h3>${lang==="ar"?p.name_ar:p.name_fr}</h3>
    <p>${lang==="ar"?p.address_ar:p.address_fr}</p>
    <a class='phone' href='tel:${p.phone}'>📞 اتصال</a>
    <a class='map' target='_blank' href='${p.map}'>🗺️ خريطة</a>`;
}

// عرض قائمة الصيدليات
function showList(data){
  const list=document.getElementById("list");
  list.innerHTML="";
  data.forEach(p=>{
    list.innerHTML+=
    `<div class='card'>
      <h3>${lang==="ar"?p.name_ar:p.name_fr}</h3>
      <p>${lang==="ar"?p.address_ar:p.address_fr}</p>
      <div class="buttons">
        <a class='phone' href='tel:${p.phone}'>📞 اتصال
