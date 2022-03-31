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
    ['South Kensington']
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
  createPlace(
    'Buckingham Palace',
    'Celebrate the Platinum Jubilee With A Tour Of The Queens Official Residence.',
    ['arts/culture'],
    'https://cdn.londonandpartners.com/-/media/images/london/visit/whats-on/event-pages/buckinghampalace1920x1080.jpg?mw=640&hash=40096BE681415B8B7AAB77D542F889D7E174DBBC',
    51.501364,
    -0.14189,
    '9am - 5.45pm',
    'https://www.rct.uk/visit/buckingham-palace',
    ['Hyde Park Corner', 'Green Park']
  ),
  createPlace(
    'Westminster Abbey',
    'A royal church offering daily services for all and a World Heritage Site with over a thousand years of history.',
    ['arts/culture'],
    'https://cdn.londonandpartners.com/asset/westminster-abbey_westminster-abbey-copyright-shutterstock-image-courtesy-of-shutterstock_9ac64ccf26eadb50669d288736e98f65.jpg',
    51.499005,
    -0.127405,
    '9.30am - 3.30pm',
    'https://www.westminster-abbey.org/',
    ['Westminster']
  ),
  createPlace(
    'National Portrait Gallery',
    'The National Portrait Gallery is an art gallery in London housing a collection of portraits of historically important and famous British people. It was arguably the first national public gallery dedicated to portraits in the world when it opened in 1856.',
    ['arts/culture'],
    'https://bigbangartfund-assets.s3.eu-west-2.amazonaws.com/what-to-see/museums-and-galleries/n-p/national-portrait-gallery/npg-room-4.jpg',
    51.509435,
    -0.128569,
    '10am - 6pm',
    'https://www.npg.org.uk/',
    ['Leicester Square', 'Charing Cross']
  ),
  createPlace(
    'The Gherkin',
    'The Gherkin is London’s most instantly recognisable tower. Totalling 500,000 sq ft, The Gherkin is an iconic structure housing a flourishing community and deserves its reputation for being ‘the most civilised skyscraper in the world’. Fine dining. Fast eats. Street food. Bars. Find it all at The Gherkin. From the bustle on the ground floor to the tranquility at the top, eating and drinking at The Gherkin makes so much more of your working day.',
    ['arts/culture'],
    'https://saentys.com/images/_2400xAUTO_fit_center-center_90_none/work-30stmary-3.jpg',
    51.51467873,
    -0.08032795906,
    'Open 24 hours',
    'https://www.thegherkinlondon.com/',
    ['Aldgate', 'Liverpool Street']
  ),
  createPlace(
    'Shakespeares Globe Theatre',
    'A world-renowned theatre, education centre, and cultural landmark. Located on the bank of the River Thames in London, UK',
    ['arts/culture'],
    'https://images.squarespace-cdn.com/content/v1/594124ce29687fb19acf19d2/1508955987780-FKOX61DIYPN37R4JZPAT/DSC_0099.jpg?format=1000w',
    51.508209532915,
    -0.097172543718041,
    '10am - 5pm',
    'https://www.shakespearesglobe.com/?gclid=CjwKCAjwrfCRBhAXEiwAnkmKmfSCKIX72ZSUq1bbx0lAUYsZlO-7HwQMbjjUFIhTnzFspNYi7aknRBoCsxIQAvD_BwE',
    ['Mansion House', 'London Bridge']
  ),
  createPlace(
    'Kyoto Garden',
    'The charming Kyoto Garden is nestled in Holland Park and even features a roaming muster of peacocks (yes, that is the collective noun for a group of peacocks, just in case you were wondering). This unexpected slice of Japanese zen, incidentally, also happens to be exceptionally Instagrammable.',
    ['outdoors'],
    'https://assets.londonist.com/uploads/2017/04/i875/10540435503_417e7fb87e_k.jpg',
    51.50314578,
    -0.2047438456,
    '7:30am - 8pm',
    'https://www.rbkc.gov.uk/leisure-and-culture/parks/holland-park',
    ['Holland Park']
  ),
  createPlace(
    'Hampstead Heath',
    'Hampstead Heath is a wild park of woodland and meadows, tucked inside north London’s Zone Two - less than four miles from the centre, though you’d never know it. It sprawls over 800 acres and boasts some of the most spectacular views in the city. This is the park that inspired C.S. Lewis to write The Chronicles of Narnia, that Constable spent his final years painting, and Londoners of all stripes have been coming here to escape the city for over 200 years.',
    ['outdoors'],
    'https://www.londonforfree.net/blog/wp-content/uploads/2015/02/hampstead-heath.jpg',
    51.5609561083137,
    -0.162963059059071,
    'Open 24h',
    'https://www.hampsteadheath.net/',
    ['Hampstead']
  ),
  createPlace(
    'Primrose Hill',
    'Primrose Hill has a character all of its own, at the summit of this grassy hill are some spectacular views across London. It is separated from Regent’s Park by Prince Albert Road and the ZSL London Zoo. At one time this was a place where duels were fought and prize-fights took place. The hill has always had a somewhat lively reputation, with Mother Shipton making threatening prophesies about what would happen if the city sprawl was allowed to encroach on its boundaries.',
    ['outdoors'],
    'https://lhalondon.com/media/2019/08/belsize-area-guide-blog-1200x706.jpg',
    51.5399397668686,
    -0.161531543717129,
    'Open 24h',
    'https://www.royalparks.org.uk/parks/the-regents-park/things-to-see-and-do/primrose-hill?gclid=CjwKCAjwrfCRBhAXEiwAnkmKmfpGpv1UfqlwZc6uGUYNNOyxsUnNY8prdfSMA0mroe2T0rtj3Aw_UhoC2aAQAvD_BwE',
    ['Chalk Farm']
  ),
  createPlace(
    'London Transport Museum ',
    'Discover the history of London’s transport at London Transport Museum. Explore the heritage of London and its transport system, and the stories of the people who have travelled and worked in the city over the last 200 years, before taking a peek into how future technologies might impact London as we know it.',
    ['arts/culture'],
    'https://i2-prod.mylondon.news/incoming/article20429873.ece/ALTERNATES/s1200b/0_London-Transport-Museum-1-C-London-Transport-Museum.jpg',
    51.51231851,
    -0.1211357707,
    '10am - 6pm',
    'https://www.ltmuseum.co.uk/visit',
    ['Covent Garden']
  ),
  createPlace(
    'SEA LIFE London Aquarium',
    'Visit today to discover amazing marine life at SEA LIFE London Aquarium. Find out about penguins, sea turtles, sharks, jellyfish and much more!',
    ['entertainment'],
    'https://www.visitsealife.com/london/media/fvufnfwb/shark-theatre-ticket-900x500.jpg',
    51.5017049092361,
    -0.1194952726,
    '10am - 4pm',
    'https://www.visitsealife.com/london/',
    ['Westminster']
  ),
  createPlace(
    'The London Dungeon',
    ' The London Dungeon brings together an amazing cast of theatrical actors, special effects, stages, scenes and rides. Use the interactive map to find your way around the London Dungeon and explore our shows. Will you make it out?..',
    ['entertainment'],
    'https://assets.londonist.com/uploads/2017/07/i875/the_torturer_-1.jpg',
    51.50265881,
    -0.1187520726,
    '11am - 4pm',
    'https://www.thedungeons.com/london/',
    ['Waterloo']
  ),
  createPlace(
    'The London Bridge Experience',
    'Experience London’s gruesome history and a time that was an age of adventure, uncovering the dark secrets that lie beneath the world’s most famous haunted bridge. The London Bridge experience is an interactive walk through experience with live actors that play characters from the past 2000 years of London bridge History. It is funny, historical and educational. This ain’t one for the faint-hearted. Relive the history of London’s murky past in this interactive experience.',
    ['entertainment'],
    'https://cdn.londonandpartners.com/asset/london-bridge-experience_london-bridge-experience-image-courtesy-of-the-london-bridge-experience_f37d2534b15d546512b4a73ad1e5ce16.jpg',
    51.5066338933447,
    -0.087719043718089,
    '12pm - 6pm',
    'https://www.thelondonbridgeexperience.com/',
    ['London Bridge']
  ),
  createPlace(
    'Mercato Metropolitano',
    'Mercato Metropolitano, centrally located in Londons south-east Elephant & Castle, is the city’s first sustainable community market focused on revitalising neighbourhoods and protecting the environment. The market has incubated more than 40 food and beverage businesses, a delicatessen with sustainably sourced products from local farmers and artisans, a unique cinema experience, a communal kitchen and several circular economy concepts including a Bavarian micro-brewery.',
    ['food/drink'],
    'https://f3e6t7k9.stackpathcdn.com/wp-content/uploads/2021/02/mercatometropolitano.jpg',
    51.4986000401622,
    -0.0983559572114203,
    '12pm - 12am',
    'https://mercatometropolitano.com/',
    ['Borough', 'Elephant & Castle']
  ),
  createPlace(
    'Saatchi Gallery',
    'Since 1985, Saatchi Gallery has presented contemporary art exhibitions showcasing the work of emerging artists. Exhibitions which drew upon the collection of Charles Saatchi, led to Saatchi Gallery becoming a recognised authority in contemporary art globally. The Gallery acquired a strong reputation for introducing artists who would later gain worldwide recognition. In 2019 Saatchi Gallery became a registered charity and begun a new chapter in its history',
    ['arts / culture'],
    'https://aestheticamagazine.com/wp-content/uploads/2013/07/blog-13.jpg',
    51.4912382742862,
    -0.159360231527626,
    '10am - 6pm',
    'https://www.saatchigallery.com/',
    ['Sloane Square']
  ),
  createPlace(
    'Serpentine Gallery',
    'The Serpentine Gallery has presented pioneering exhibitions of 1,600 artists over 43 years, from the work of emerging practitioners to the most internationally recognised artists and architects of our time.',
    ['arts/culture'],
    'https://www.zaha-hadid.com/wp-content/uploads/2019/12/zha_serpentinesacklergallery194-scaled.jpg',
    51.5048006119648,
    -0.175040814882504,
    '10am - 6pm ',
    'https://www.royalparks.org.uk/parks/kensington-gardens/things-to-see-and-do/serpentine-galleries?gclid=Cj0KCQjw0PWRBhDKARIsAPKHFGjkmDcstbabSQq-B0ECBKV5lloCpJy062dtwuiGLhUAOhZpHgQNh1waAuayEALw_wcB',
    'Knightsbridge'
  ),
  createPlace(
    'The Science Museum',
    'Interactive and thought-provoking, the Science Museum is a great place to see, touch and experience science first-hand. From space travel to IMAX, there is something for all the family. Free entry.',
    ['arts/culture'],
    'https://www.sciencemuseum.org.uk/home',
    51.4973818816998,
    -0.1767283013896,
    '10am - 6pm',
    'https://www.sciencemuseum.org.uk/home',
    ['South Kensington', 'Gloucester Road']
  ),
  createPlace(
    'Camden Market',
    '1,000+ unique shops, stalls, bars & cafes. Unfollow convention at Camden market.',
    ['food/drink', 'shopping'],
    'https://wp-media.camdenmarket.com/wp-content/uploads/2019/08/02114955/6f18057db4ac6cf30950f4b6b1aeab952fdb7e44_camden-market_cm_jo_detail.jpg',
    51.5399672488468,
    -0.145425925370444,
    '10am - 6pm',
    'https://www.camdenmarket.com/',
    ['Camden Town']
  ),
  createPlace(
    'Churchill War Rooms',
    'Walk the top-secret corridors of Churchill War Rooms and glimpse what life would have been like during the tense days and nights of the Second World War.',
    ['arts/culture'],
    'https://www.whatsoninlondon.net/wp-content/uploads/2017/02/Churchill-War-Rooms.jpg',
    51.5022853717371,
    -0.129314286046963,
    '9:30am - 6pm',
    'https://www.iwm.org.uk/visits/churchill-war-rooms',
    ['Westminster']
  ),
  createPlace(
    'Madison Rooftop Bar',
    'Step out of the lift onto the top floor of One New Change into the world of Madison. With several rooftop terraces offering supreme views across the City of London skyline.',
    ['food/drink'],
    'https://media.timeout.com/images/105769955/image.jpg',
    51.5137915777044,
    -0.0954314590604008,
    '12pm - 12am',
    'https://www.madisonlondon.net/',
    ['St. Pauls', 'Mansion House']
  ),
  createPlace(
    'Tobacco Docks',
    'Tobacco Dock is a unique venue which hosts a number of live music events and everything in between.',
    ['entertainment'],
    'https://static.ra.co/images/clubs/lg/tobacco_dock.png?dateUpdated=1516274035827',
    51.5083319431875,
    -0.0596320744030728,
    '9am – 5:30pm',
    'https://www.tobaccodocklondon.com/',
    ['Aldgate East']
  ),
  createPlace(
    'London Bridge Rooftop',
    'London Bridge Rooftop is a 200 capacity outdoor venue with heaters and covers, with top-notch views of London, DJs, pints, delicious cocktails, hot drinks and banging authentic Spanish food by The Black Pig with White Pearls',
    ['food/drink'],
    'https://cdn.thenudge.com/wp-content/uploads/2021/04/London-bridge-rooftop-bar.jpg',
    51.5062890165,
    -0.0872109572112087,
    '12pm - 12am',
    'https://www.londonbridgerooftop.com/',
    ['London Bridge']
  ),
  createPlace(
    'Skylark Roof Garden',
    'Experience the best rooftop bar in London and enjoy the views out from 10 floors up, perfectly perched overlooking Notting Hill, on the banks of Little Venice, Skylark Roof Garden is London’s premier rooftop cocktail bar and pizza restaurant, with an enviable vista across the West London skyline.',
    ['food/drink'],
    'https://skylarkroofgarden.co.uk/wp-content/uploads/2019/07/Skylark-Roof-Garden-0288.jpg',
    51.5195894755631,
    -0.182838459060252,
    '12pm - 11pm',
    'https://skylarkroofgarden.co.uk/',
    ['Paddington']
  ),
  createPlace(
    'Vinegar Yard',
    'Located right next to London Bridge Station, Vinegar Yard is an eclectic mix of drinks, food, flea market, and art. In summer, socialise in the sun in our huge outside venue; in winter, we go undercover with huge tents and outdoor heating, or book a table in one of our two indoor bars. Alongside our extensive drinks menu, our food traders offer a great choice for every taste, daily. The infamous flea market operates on weekends, and art from Joe Rush can be seen throughout the venue.',
    ['food/drink'],
    'https://missjonesgroup.com/wp-content/uploads/2021/05/1-45.jpg',
    51.5027606058324,
    -0.0835329013894417,
    '12pm - 10pm',
    'https://www.vinegaryard.london/',
    ['London Bridge']
  ),
  createPlace(
    'Bussey Rooftop Bar',
    'Perched atop the iconic Bussey Building in the heart of bustling Peckham, Bussey Rooftop Bar literally stands head and shoulders above the rest as the highest drinking spot in the neighbourhood. Our menu is chock-a-block with a wide selection of tasty hard & virgin cocktails and beers, complimented by Share a Slice’s mouth-watering menu of socially good pizza – look out for the classic faves as well as tasty, exciting new pizza options! Rain or shine, our covered bar offers a unique drinking and dining experience with an unrivalled 360-degree view of London’s dazzling skyline.',
    ['food/drink'],
    'https://cdn.londonandpartners.com/asset/the-bussey-building-f8d07146716887c25a5c175488032ca5.jpg',
    51.4701631439119,
    -0.0669211437191465,
    '12pm - 10pm',
    'https://busseyrooftopbar.com/',
    ['Brixton']
  ),
  createPlace(
    'Bold Tendencies, Franks Cafe',
    'Bold Tendencies supports artists to develop their ideas and to realise site-specific projects and present live performances from its rooftop home. It commissions new visual art and architecture and produces an award-winning live events programme of music and dance.',
    ['food/drink'],
    'https://www.bainandgray.com/sites/default/files/franks.jpg',
    51.4710407755942,
    -0.0670027590616396,
    '12pm - 11pm',
    'https://boldtendencies.com/franks-cafe/',
    ['Brixton']
  ),
  createPlace(
    'Pergola Paddington',
    'West Londons largest alfresco drinking and dining experience. Hidden gardens, drinking and dining in the heart of London, 850 seats, self-service dining, two bars, a high-line bridge, tunes, fully heated and now with a new roof on the top deck, Pergola Paddington has got everything covered!',
    ['food/drink'],
    'https://www.globalblue.com/destinations/uk/london/article709468.ece/BINARY/Pergola-Paddington-2018.jpg',
    51.5194259801969,
    -0.183362201388986,
    '12pm - 11pm',
    'https://www.pergolapaddington.com/',
    ['Paddington', 'Royal Oak']
  ),
  createPlace(
    'Dalston Roof Park',
    'Dalston’s only rooftop bar and music venue, brought to you by the Bootstrap Charity, where all profits go back into empowering young people and businesses.',
    ['food/drink', 'arts/culture'],
    'https://cdn.londonandpartners.com/asset/df5876465d00d6d86f2bfd494e3ef94c.jpg',
    51.5470626349403,
    -0.0747202572100412,
    '5pm - 11pm',
    'https://www.bootstrapcharity.com/dalston-roof-park',
    ['Highbury & Islington']
  ),
  createPlace(
    'Queen Elizabeth Olympic Park',
    'Queen Elizabeth Olympic Park is a sporting complex and public park in Stratford and Hackney Wick, in east London. It was purpose-built for the 2012 Summer Olympics and Paralympics, situated adjacent to the Stratford City development. It contains the Olympic stadium, now known as the London Stadium, and the Olympic swimming pool together with the athletes Olympic Village and several other Olympic sporting venues and the London Olympics Media Centre. The park is overlooked by the ArcelorMittal Orbit, an observation tower and Britains largest piece of public art.',
    ['entertainment'],
    'https://www.queenelizabetholympicpark.co.uk/-/media/queen-elizabeth-olympic-park-north-to-south-7.ashx?mh=600&hash=8B90B489D25A96049B94F0EE0A1F6ABC97905F67&ar=1.5',
    51.5443443717288,
    -0.0158786437170114,
    'Open 24 hours',
    'https://www.queenelizabetholympicpark.co.uk/',
    ['Stratford']
  ),
];

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
];

export default {
  places,
  stations,
};

// import { getSpreadSheetData } from './spreadsheet.js';

// // const places = [];
// // const createPlace = {
// //   name: '',
// //   description: '',
// //   category: [],
// //   image: '',
// //   lat: null,
// //   long: null,
// //   openingTimes: '',
// //   price: null,
// //   contact: '',
// //   likes: [],
// //   stationName: [],
// //   stationId: [],
// // };

// const stations = [];
// const createStation = {
//   name: '',
//   tubeLine: [],
// };

// // Create Tube Data - access it first from google spreadsheet

// // // Create Places Data - access it first from google spreadsheet

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
