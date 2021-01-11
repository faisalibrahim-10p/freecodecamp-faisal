// Setup
var collection = {
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
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {
  
      if(object[id].hasOwnProperty(prop)){
        if(value == ""){
          delete object[id][prop];
        }else{
        switch(prop){
          case "tracks":
          object[id][prop].push(value);
          break;
  
          default:
          object[id][prop] = value;
          break;
        }
      }
      }else{
        switch(prop){
          case "tracks":
          object[id][prop] = [];
          object[id][prop].push(value);
          break;
  
          default:
          object[id][prop] = value;
          break;
        }
  }
    
    return object;
  }
  
  updateRecords(collection, 5439, 'artist', 'ABBA');