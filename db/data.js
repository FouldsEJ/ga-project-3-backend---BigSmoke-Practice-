const createPlace = (
  name,
  description,
  category,
  image,
  lat,
  long,
  openingTimes
) => {
  return {
    name: name,
    description: description,
    category: category,
    image: image,
    lat: lat,
    long: long,
    openingTimes: openingTimes,
  };
};

const places = [
  createPlace(
    'London Eye',
    'The London Eye is the world largest cantilevered observation wheel. It was conceived and designed by Marks Barfield Architects and was launched in 2000.',
    'arts/culture',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/1200px-London-Eye-2009.JPG',
    '51.5033° N',
    ' 0.1196° W',
    ' 11am-6pm'
  ),
  createPlace(
    'Liberty London',
    'Liberty is known around the world for its close connection to art and culture, it is most famous for its bold and floral print fabrics.',
    'shopping',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSm4QxHKoxa36wguz5BBT8k4ej0FzmpErYZw&usqp=CAU',
    '51.5139° N',
    '0.1400° W',
    ' 11am-6pm'
  ),
];

export default places;
