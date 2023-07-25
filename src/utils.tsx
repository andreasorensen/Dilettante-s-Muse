
export interface ArtData {
  objectID: number,
  title: string,
  artistDisplayName: string, 
  objectDate: string | number, 
  primaryImage?: string, 
  primaryImageSmall?: string
}

type Data = {
  objectIDs: number[];
};

// Clean up data function: 

const cleanUpData = (data: ArtData) => {
  const { title, artistDisplayName, objectID, objectDate, primaryImage, primaryImageSmall } = data;

  const updatedTitle = title === '' ? "Title unknown" : title

  const updatedArtistName = artistDisplayName === '' ? 'Artist unknown' : artistDisplayName;

  return {
    objectID,
    title: updatedTitle, 
    artistDisplayName: updatedArtistName,
    objectDate,
    primaryImage: primaryImage || primaryImageSmall
  }
}

interface idData {
  objectIDs: number[]
}   

const getRandomIds = (data: idData) => {
  const index = Math.floor(Math.random() * data.objectIDs.length)
  const index1 = Math.floor(Math.random() * data.objectIDs.length)
  const index2 = Math.floor(Math.random() * data.objectIDs.length)
  return [data.objectIDs[index], data.objectIDs[index1], data.objectIDs[index2]]
}

export { cleanUpData, getRandomIds }

