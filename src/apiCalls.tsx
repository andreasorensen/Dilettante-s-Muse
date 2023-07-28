const getArt = async (objectID: number) => {
  const res = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );

  if (res.status >= 500 && res.status < 600) {
    throw new Error(`Server error: ${res.status}`);
  }
  
  return res.json();
};

const getIDs = async () => {
  const res = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=painting'); 
  if (res.status >= 500 && res.status < 600) {
    throw new Error(`Server error: ${res.status}`)
  }

  return res.json();
}



export { getArt, getIDs }