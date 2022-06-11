// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function findMatching(collection, match){
    const filteredCollection = collection.filter((element) => {
        if (element.toLowerCase() === match.toLowerCase()){
            return element;
        }
    })
    return filteredCollection;
}


function fuzzyMatch(collection, match){
    const matchLength = match.split('').length;
    const filteredCollection = collection.filter((element) => {
      const elementSlice = element.split('').slice(0, matchLength).join('');
        if( elementSlice === match){
            return element;
        }
    })
    return filteredCollection;
}


function matchName(collection, match){
    const filteredCollection = collection.filter((element) => {
        if(element.name === match){
            return element;
        }
    })
    return filteredCollection;
}