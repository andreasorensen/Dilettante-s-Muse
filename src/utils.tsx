
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

// Generate randomID: 

const generateID = (): number => Math.floor(Math.random() * 1000) + 1;

// const getRandomObjectID = (data: Data): number | null => {
//   const { objectIDs } = data;
//   if (!objectIDs || objectIDs.length === 0) return null;

//   const randomIndex = Math.floor(Math.random() * objectIDs.length);
//   return objectIDs[randomIndex];
// }

export { cleanUpData, generateID }

// export { cleanUpData, getRandomObjectID }