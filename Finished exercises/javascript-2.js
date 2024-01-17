// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: '',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (records[id][prop] === '') {
    console.log(value);
    delete records[id][prop];
  }

  if (prop !== 'tracks' && records[id][prop] !== '') {
    records[id][prop] = value;
  } else if (prop === 'tracks' && records[id][prop] !== '') {

    if (records[id].hasOwnProperty(prop) === false) {
      records[id][prop] = [];
      records[id][prop].push(value);
    } else if (records[id].hasOwnProperty(prop)) {
      records[id][prop].push(value);
    }
  }

  return records;
}

console.log(updateRecords(recordCollection, '5439', 'tracks', 'Robert Palmer'))


