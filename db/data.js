const createPlace = (
  name,
  description,
  category,
  image,
  lat,
  long,
  openingTimes,
  contact,
  stationName
) => {
  return {
    name: name,
    description: description,
    category: category,
    image: image,
    lat: lat,
    long: long,
    openingTimes: openingTimes,
    contact: contact,
    stationName: stationName,
  };
};

const places = [
  createPlace(
    'Tower Of London',
    "The Tower of London is an internationally famous monument and one of England's most iconic structures.",
    ['Arts/Culture'],
    'https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-of-london/the-tower-of-london-castle-640x360.jpg',
    51.508112,
    -0.075949,
    '9am - 5:30pm',
    'https://www.hrp.org.uk/tower-of-london/#gs.v6iy8r',
    ['Tower Hill']
  ),
  createPlace(
    'Tate Modern',
    "Britain's national museum of modern and contemporary art from around the world is housed in the former Bankside Power Station on the banks of the Thames. The awe-inspiring Turbine Hall runs the length of the entire building and you can see amazing work for free by artists such as Cézanne, Bonnard, Matisse, Picasso, Rothko, DalÍ­, Pollock, Warhol and Bourgeois.",
    ['Arts/Culture'],
    'https://a.cdn-hotels.com/gdcs/production161/d329/1dd2958c-c93e-486a-a7ad-47ceb45995dc.jpg',
    51.507595,
    -0.099356,
    '10am - 6pm',
    'https://www.tate.org.uk/',
    ['Southwark']
  ),
  createPlace(
    'Victoria and Albert Museum',
    " The Victoria and Albert Museum was founded with a mission: to educate designers, manufacturers and the public in art and design. Its origins lie in the Great Exhibition of 1851 – the world's first international display of design and manufacturing.",
    ['Arts/Culture'],
    'https://cdn.theculturetrip.com/wp-content/uploads/2018/12/va_exterior_may_2012_c_victoria_and_albert_museum_london_med-e1547138131536-1024x566.jpg',
    51.496639,
    -0.17218,
    '10am - 5:45pm ',
    'https://www.vam.ac.uk/',
    [' South Kensington']
  ),
  createPlace(
    'Covent Garden',
    'Covent Garden is a world-class shopping and dining destination attracting food-lovers and fashionistas alike. Buzzing with the excitement of the opera and theatreland, the area boasts some of the best shopping and dining destinations in London West End , from Mulberry to Petersham Nurseries and Balthazar to Frenchie.',
    ['Shopping', 'Entertainment'],
    'https://vespergroup.co.uk/wp-content/uploads/maxresdefault.jpg',
    51.51178,
    -0.123191,
    'N/A',
    'https://www.coventgarden.london/',
    ['Covent Garden']
  ),
  createPlace(
    'Harrods',
    'The present Harrods building, constructed in 1905, houses roughly 300 departments, 20 restaurants, a bank, and a beauty salon. Although the store still sells gourmet food items, its emphasis is on high-fashion clothing. Known for its zealous customer service, Harrods is considered the best department store in Britain.',
    ['Shopping', 'Entertainment'],
    'https://www.p.city-walks.info/London/Harrods-London-Hans-Crescent.jpg',
    51.499405,
    -0.163234,
    'Monday - Wednesday: 11am - 7pm Thursday - Saturday: 11am - 8pm Sunday: 11.30am - 6pm',
    'https://www.harrods.com/en-gb/',
    ['Knightsbridge']
  ),
  createPlace(
    'Southbank Centre',
    'Southbank Centre is a complex of artistic venues in London, England, on the South Bank of the River Thames. It comprises three main performance venues, together with the Hayward Gallery, and is Europes largest centre for the arts.',
    ['Arts/Culture'],
    'https://d33hx0a45ryfj1.cloudfront.net/additional/Dynamic/media/189ff8d6400ce20c',
    51.505965,
    -0.116043,
    'Mondays and Tuesdays 10am - 6pm Wednesdays - Sundays 10am -   11pm',
    'https://www.southbankcentre.co.uk/',
    ['Waterloo']
  ),
  createPlace(
    'Ruislip Lido',
    'Ruislip Lido, a 60-acre lake with sandy beaches, is a great place to take the family. Play in the sand, build sand-castles, splash about, and have fun! The fun of the seaside, closer to home.',
    ['Outdoors'],
    'https://i.ytimg.com/vi/k5fv51HBdKU/maxresdefault.jpg',
    51.59028,
    -0.4323,
    '9am - 6pm',
    'https://www.ruisliplido.co.uk/',
    ['Northwood Hills']
  ),
  createPlace(
    'Tobacco Docks - Skylight',
    'Londons most imaginative rooftop bar is located in the heart of East London and promises booths, huts, and tables with flowing drinks and striking views.',
    ['Food/Drink'],
    'https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2021/02/13035831/Skylight-2-1024x683.jpg',
    51.5049846467,
    -0.05566977732,
    '12pm - 10pm',
    'https://www.skylightbars.com/tobacco-dock',
    ['Aldgate East']
  ),
  createPlace(
    'Copeland Park & Bussey Building',
    'The residents of Copeland Park make it what it is: a diverse community of artists, small businesses, bars, events, restaurants and cinemas, to name a few',
    ['Food/Drink', 'Arts/Culture', 'Entertainment'],
    'http://www.festivalofplace.co.uk/AcuCustom/Sitename/DAM/142/Copeland_Park_Resizedev_Main.jpg',
    51.46997057926431,
    -0.06633347950169306,
    '7am - 11pm',
    'https://www.copelandpark.com/',
    ['Brixton']
  ),
  createPlace(
    'Madame Tussauds',
    'Madame Tussauds is the oldest wax museum in the world. Founded in London, the museum now has branches all over and is the place to go to see movie stars, politicians, athletes and royalty up close -- if not quite in the flesh and blood.',
    ['Entertainment'],
    'https://mymaxcard.co.uk/wp-content/uploads/2018/04/Beyonc%C3%A9-figure-%E2%80%93-Queen-Bey-steals-the-crown-at-MTL-19.09-2-scaled.jpg',
    51.522899,
    -0.155015,
    '10am- 3pm',
    'https://www.madametussauds.com/',
    ['Baker Street']
  ),
  createPlace(
    'Natural History Museum',
    'The Museum is a world-class visitor attraction and leading science research centre. We use our unique collections and unrivalled expertise to tackle the biggest challenges facing the world today. We care for more than 80 million objects spanning billions of years and welcome more than five million visitors annually.',
    ['Arts/Culture'],
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Natural_History_Museum_London_Jan_2006.jpg/1200px-Natural_History_Museum_London_Jan_2006.jpg',
    51.496715,
    -0.176367,
    '10am - 5:50pm',
    'https://www.nhm.ac.uk/',
    ['South Kensington']
  ),
  createPlace(
    'The British Museum',
    'The British Museum is a public museum dedicated to human history, art and culture located in the Bloomsbury area of London. Its permanent collection of eight million works is among the largest and most comprehensive in existence. It documents the story of human culture from its beginnings to the present.',
    ['Arts/Culture'],
    'https://blog.britishmuseum.org/wp-content/uploads/2016/08/The-British-Museum.jpg',
    51.51891,
    -0.126384,
    '10am - 5:00pm',
    'https://www.bristolmuseums.org.uk/bristol-museum-and-art-gallery/',
    ['Tottenham Court Road', 'Holborn', 'Russell Square']
  ),
  createPlace(
    'Kensington Gardens',
    'Kensington Gardens was created for Caroline fo Brunswick, originally as a private gardens in the 18th century. The garden itself is a prime example of the new design of English Garden which became prevalent at the time, with sunken garden features, waterworks in the Dutch style and beautiful botanical areas. On top of this, you can find Kensington Palace within the garden grounds.',
    ['Outdoors'],
    'https://olympia.london/sites/default/files/styles/main_full_width__mobile/public/local-area/Kensington_Gardens_london_olympia_main_0.jpg?itok=GKSVnoj-',
    51.506987,
    -0.179165,
    '6am-sunset',
    'https://www.royalparks.org.uk/parks/kensington-gardens',
    ['High Street Kensington', 'Queensway']
  ),
  createPlace(
    'Selfridges',
    "Selfridges is one of London's most extraordinary shops. While selling the most in-demand products across fashion, beauty, homeware and food, it is also an innovative social space, revered for its special installations, events and pop-ups.",
    ['Shopping', 'Entertainment'],
    'https://www.irishtimes.com/polopoly_fs/1.4766102.1640884642!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg',
    51.514042,
    -0.151971,
    '10am - 9pm',
    'https://www.selfridges.com/GB/en/features/info/stores/london/',
    ['Bond Street']
  ),
  createPlace(
    'Spitalfields Market',
    'Spitalfields Market currently is open every day of the week. It hosts various retail brands, street-food stalls, bars and restaurants, and independent traders showcasing handcrafted goods, artwork, fashion, and jewellery. It also hosts public art and events programmes.',
    ['Shopping', 'Outdoors'],
    'https://media.timeout.com/images/105861573/image.jpg',
    51.519716,
    -0.074465,
    '8am–11pm',
    'https://www.spitalfields.co.uk/',
    ['Liverpool Street', 'Aldgate East']
  ),
  createPlace(
    "St Paul's Cathedral",
    "Paul's was a huge Gothic cathedral built by the Normans and regarded as one of the masterpieces of medieval Europe, with a tower and spire reaching a height of 489 ft. It was destroyed by the Great Fire of 1666, following which, a decision was taken to build a new cathedral from scratch",
    ['Arts/Culture'],
    'https://www.worldatlas.com/r/w1200/upload/8d/f5/2b/shutterstock-84619822.jpg',
    51.513707,
    -0.099528,
    '9:30am–4:30pm',
    'https://www.stpauls.co.uk/',
    ["St. Paul's"]
  ),
  createPlace(
    'Borough Market',
    'Borough Market is a wholesale and retail market hall in Southwark, London, England. It is one of the largest and oldest food markets in London, with a market on the site dating back to at least the 12th century. The present buildings were built in the 1850s, and today the market mainly sells specialty foods to the general public.',
    ['Shopping', 'Outdoors', 'Food/Drink'],
    'https://files.thehandbook.com/uploads/2019/08/GettyImages-521633496-5afab6c5ae9ab8003607f5fc-1200x801.jpg',
    51.505586,
    -0.090487,
    '10am–5pm',
    'https://boroughmarket.org.uk/',
    ['Borough', 'London Bridge']
  ),
  createPlace(
    'Printworks',
    'The converted printing factory opened its doors in February 2017 and immediately announced itself as a club like no other in the city. It’s a huge, looming warehouse of exposed metal and daunting balconies, with a long, narrow dancefloor — the whole thing feels like a cyberpunk movie set in a Berlin techno temple. It consistently draws in the most talked about DJs in electro, techno and house, boasting a schedule that few other clubs in the city can match.',
    ['Entertainment'],
    'https://i.ytimg.com/vi/FpNNJySaH2w/maxresdefault.jpg',
    51.49764974,
    -0.04366001488,
    'https://printworkslondon.co.uk/',
    'See website for details',
    ['Canada Water']
  ),
  createPlace(
    'Fabric',
    'Three massive spaces host resident and guest DJs playing drum and bass, dubstep, house and techno.',
    ['Entertainment'],
    'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/09/12/17/fabric-a.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart',
    51.5196875,
    -0.1024948302,
    'See website for details',
    'https://www.fabriclondon.com/',
    ['Farringdon']
  ),
  createPlace(
    'Kew Gardens',
    "Kew Gardens, London's largest UNESCO World Heritage Site, is the perfect escape from the hustle and bustle of the city. Home to the world's most diverse collection of living plants and a scientific research centre of international renown, it's the perfect day out.",
    ['Outdoors'],
    'https://static.standard.co.uk/2021/03/11/11/HEALTH20Coronavirus202012341638.jpg',
    51.484377,
    -0.291204,
    '10am - 6pm',
    'https://www.kew.org/',
    ['Kew Gardens']
  ),
  createPlace(
    'Hyde park',
    'Set right in the heart of London, Hyde Park offers both world-class events and concerts together with plenty of quiet places to relax and unwind. Dip your toes in the Diana, Princess of Wales Memorial Fountain, brave an open water swim in the Serpentine, or just admire the views across the lake from a waterside café. Have a go at tennis, horse riding, or join the many joggers, walkers and cyclists enjoying the open air.',
    ['Outdoors'],
    'http://prod-upp-image-read.ft.com/115d3e30-7155-11e7-93ff-99f383b09ff9',
    51.513028,
    -0.167996,
    '5am - 12am',
    'https://www.royalparks.org.uk/parks/hyde-park/visitor-information/opening-times-and-getting-here',
    ['Lancaster', 'Gate', 'Marble Arch', 'Hyde Park Corner', 'Knightsbridge']
  ),
  createPlace(
    'Heaven',
    "London's legendary and world famous nightclub, situated in the heart of the city, home to Live Music, G-A-Y and Popcorn.",
    ['Entertainment'],
    'https://www.mrafterparty.com/wp-content/uploads/2021/08/Mr.-Afterparty-Featured-Image-1-4.jpg',
    51.50816331,
    -0.1241430554,
    '10:30am - 5am',
    'https://heaven-live.co.uk/',
    ['Charing Cross']
  ),
  createPlace(
    'Ministry of Sound',
    'Flagship all-night club from trailblazing global dance and house music brand.',
    ['Entertainment'],
    'https://i.pinimg.com/736x/f4/cd/a6/f4cda6ddf1ac8d732daf31fc02f3973a--san-valentino-carina.jpg',
    51.49789992,
    -0.09958111673,
    '11pm - 6am',
    'https://www.ministryofsound.com/',
    ['Elephant & Castle']
  ),
  createPlace(
    'Studio 338',
    "Ibiza-style mega-club in South East London featuring some of the biggest names in electronic music. Includes one of the largest terrace arena's in Europe.",
    ['Entertainment'],
    'https://pbs.twimg.com/media/D_loMBuWsAAiaYP.jpg',
    51.495488,
    0.004763,
    'See website for details',
    'https://www.studio338.co.uk/',
    ['North Greenwich']
  ),
  createPlace(
    'XOYO',
    'One of London’s Best-Loved Nightclubs And Live Music Venues In The Heart Of Shoreditch.',
    ['Entertainment'],
    'https://setoftheday.com/wp-content/uploads/2018/07/basement.jpg',
    51.52557018,
    -0.08562761303,
    'See website for details',
    'https://www.xoyo.co.uk/',
    ['Old Street']
  ),
  createPlace(
    'The Shard',
    'Experience 360-degree views over London with a visit to The View from The Shard. At more than 1,000ft (300 metres) tall, The Shard in London Bridge is almost twice as high as any other building in the city.',
    ['Food/Drink'],
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/bf/d0/7e/ask-our-lovely-guest.jpg?w=1200&h=1200&s=1',
    51.5045,
    -0.0865,
    '8am-6pm',
    'https://www.the-shard.com/',
    ['London Bridge']
  ),
  createPlace(
    'Richmond Park',
    'Roam free in Richmond Park, London’s largest royal park and a haven for wildlife. This Site of Special Scientific Interest is home to a remarkable range of flora and fauna, including a herd of 650 deer – and all within a short distance of central London.',
    ['Outdoors'],
    'https://www.parkgrandheathrow.co.uk/blog/wp-content/uploads/2019/05/Richmond-Park-2.jpg',
    51.442687,
    -0.283707,
    '24h',
    'https://www.royalparks.org.uk/parks/richmond-park',
    ['Richmond']
  ),
  createPlace(
    'ZSL London Zoo',
    "London Zoo is the world's oldest scientific zoo. It was opened in London in1828, and was opened to the public in 1847. Today, it houses a collection of 673 species of animals, with 19,289 individuals, making it one of the largest collections in the United Kingdom. It is managed under the aegis of the Zoological Society of London (established in 1826), and is situated at the northern edge of Regent's Park",
    ['Outdoors'],
    'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fd2bd5da4-b2e7-11ea-a05b-f50ae7bba1d8.jpg?crop=2667%2C1500%2C0%2C0',
    51.535718,
    -0.155732,
    '10am - 5pm',
    'https://www.zsl.org/zsl-london-zoo',
    ['Camden Town']
  ),
  createPlace(
    'Backyard Cinema',
    'Backyard Cinema transports you to new and exciting worlds, to enjoy film like never before. Sink into our giant beanbags and discover a whole new cinema.',
    ['Entertainment'],
    'https://fever.imgix.net/plan/photo/20788676-7b34-11e6-82b7-069fa96992cb.png?w=550&h=550&auto=format&fm=jpg',
    51.45820033,
    -0.1947934167,
    '2pm - 11pm',
    'https://backyardcinema.co.uk/',
    ['East Putney']
  ),
  createPlace(
    'Tate Britain',
    'Tate Britain presents a landmark group exhibition celebrating 70 years of Caribbean-British art.',
    ['Arts/Culture'],
    'https://img.artrabbit.com/organisations/tate-britain/images/m44qgvdBRcZT/1500x1010/tate-britain-0015489713d13428.jpg',
    51.490833,
    -0.127222,
    '10am - 6pm',
    'https://www.tate.org.uk/visit/tate-britain?gclid=CjwKCAjwrfCRBhAXEiwAnkmKmTewblHEvj99UgyZ8I-bzqyHHRh9qZQp_bBtwC5STjtoUNfjEAH_mhoCs-AQAvD_BwE',
    ['Vauxhall', 'Victoria', 'Charing Cross']
  ),
  createPlace(
    'HMS Belfast',
    'HMS Belfast is the most significant surviving Second World War Royal Navy warship. Since her launch over 80 years ago, she fired some of the first shots at the D-Day landings, served in the Arctic Convoys, and in the Korean War.',
    ['Arts/Culture'],
    'https://www.iwm.org.uk/sites/default/files/styles/text_with_media_desktop_1x/public/2020-02/HMS%20Belfast%20-%20exterior.jpg?itok=ByoH607f',
    51.506579,
    -0.081389,
    '10am - 5pm',
    'https://www.iwm.org.uk/visits/hms-belfast',
    ['London Bridge']
  ),
  createPlace(
    'Warner Bros. Studio Tour London',
    'Step on to authentic sets, discover the magic behind spellbinding special effects and explore the behind-the-scenes secrets of the Harry Potter film series. Discover the iconic Hogwarts Great Hall and explore the Forbidden Forest, all before boarding the original Hogwarts Express at Platform 9 ¾ and wandering down Diagon Alley.',
    ['Entertainment'],
    'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/25/9c.jpg',
    51.69347739,
    -0.419728313,
    '8:30am - 10pm',
    'https://www.wbstudiotour.co.uk/',
    ['Watford']
  ),
  createPlace(
    'The London Eye',
    'Enjoy amazing 360-degree views over London from the London Eye, a rotating observation wheel which is 135 metres (443 ft) high.',
    ['Arts/Culture', 'Entertainment'],
    'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/82/6f/47.jpg',
    51.503325,
    -0.119543,
    '11am - 6pm',
    'https://www.londoneye.com/',
    ['Waterloo', 'Embankment']
  ),
  createPlace(
    'Between the Bridges',
    'Nestled between the London Eye and Waterloo Bridge, Between The Bridges is a brand new venue with London’s largest outdoor drinking area, plus sensational street food, legendary DJs, mini golf, Colombian throwing game Tejo, themed markets and Drag Brunches.',
    ['Entertainment', 'Food/Drink'],
    'https://southbanklondon.com/sites/default/files/2021-06/Between%20the%20Bridges_0.jpg',
    51.50502967,
    -0.1179715302,
    '11am - 11pm',
    'https://betweenthebridges.co.uk/',
    ['Embankment', 'Waterloo']
  ),
];

// import { getSpreadSheetData } from './spreadsheet.js';

// const stationsData = await getSpreadSheetData('TubeLines');

// const stations = [];
// const createStation = (name, tubeLine) => {
//   return { name: name, tubeLine: tubeLine };
// };

// for (let i = 1; i < stationsData.length; i++) {
//   const rowData = stationsData[i];
//   stations.push(createStation(rowData[0], rowData[1].split('\n')));
// }

// export default {
//   places,
//   stations,
// };

const createStation = (name, tubeLine) => {
  return { name: name, tubeLine: tubeLine };
};

const stations = [
  createStation('Acton Town', ['District', 'Piccadilly']),
  createStation('Aldgate', ['Metropolitan', 'Circle Line']),
  createStation('Waterloo', [
    'Waterloo&City',
    'Bakerloo',
    'Northern',
    'Jubilee',
  ]),
  createStation('London Bridge', ['Northern', 'Jubilee']),
  createStation('Embankment', ['District', 'Bakerloo', 'Northern', 'Circle']),
];

export default {
  places,
  stations,
};

// const placesData = await getSpreadSheetData('Places');

// const createPlacesData = (seededStations) => {
//   for (let i = 1; i < placesData.length; i++) {
//     const rowData = placesData[i];
//     createPlace.name = rowData[0];
//     createPlace.description = rowData[1];
//     createPlace.category = rowData[2].split(' ');
//     createPlace.image = rowData[3];
//     createPlace.lat = parseFloat(rowData[4]);
//     createPlace.long = parseFloat(rowData[5]);
//     createPlace.openingTimes = rowData[6];
//     createPlace.price = rowData[7];
//     createPlace.contact = rowData[8];
//     createPlace.likes = rowData[9];
//     createPlace.stationName = rowData[10].split(', ');
//     createPlace.stationId = [];

//     console.log(createPlace.stationId);

//     for (let i = 0; i < createPlace.stationName.length; i++) {
//       seededStations.filter((item) => {
//         if (createPlace.stationName[i] === item.name) {
//           createPlace.stationId[i] = item._id;
//         }
//       });
//     }

//     places[i] = { ...createPlace };
//   }

//   return places;
// };

// export default {
//   stations,
//   places,
// };
