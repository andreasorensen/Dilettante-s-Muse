export interface ArtData {
  objectID: number,
  title: string,
  artistDisplayName: string, 
  objectDate: string | number, 
  primaryImage?: string, 
  primaryImageSmall?: string
}

const cleanUpData = (data: ArtData) => {
  const { title, artistDisplayName, objectID, objectDate, primaryImage, primaryImageSmall } = data;

  const updatedTitle = title === '' ? "Title unknown" : title

  const updatedArtistName = artistDisplayName === '' ? 'Artist unknown' : artistDisplayName;

  const updatedObjectDate = objectDate === '' ? 'Date unknown' : objectDate;

  return {
    objectID,
    title: updatedTitle, 
    artistDisplayName: updatedArtistName,
    objectDate: updatedObjectDate,
    primaryImage: primaryImage || primaryImageSmall
  }
}

interface idData {
  objectIDs: number[]
}   

const getRandomIds = (data: idData): number => {
  const index = Math.floor(Math.random() * data.objectIDs.length)
  return data.objectIDs[index]
}

export { cleanUpData, getRandomIds }

