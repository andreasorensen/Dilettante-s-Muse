
interface ArtData {
  title: String,
  artistDisplayName: String, 
  objectDate: String | Number, 
  primaryImage?: String, 
  primaryImageSmall?: String
}

// Clean up data function: 

const cleanUpData = (data: ArtData) => {
  const { title, artistDisplayName, objectDate, primaryImage, primaryImageSmall } = data;

  const updatedTitle = title === '' ? "Title unknown" : title

  const updatedArtistName = artistDisplayName === '' ? 'Artist unknown' : artistDisplayName;

  return {
    title: updatedTitle, 
    artistDisplayName: updatedArtistName,
    objectDate,
    primaryImage: primaryImage || primaryImageSmall
  }
}

// Generate randomID: 

const generateID = (): number => Math.floor(Math.random() * 1000) + 1;

let objectID: number = generateID()

// (( We don't have to use the objectID variable, we can always call the generateID function within the API call itself, or move this variable ))


export { cleanUpData, generateID, objectID }