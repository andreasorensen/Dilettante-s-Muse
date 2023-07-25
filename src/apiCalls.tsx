
const getArt = (objectID: number) => {
  // console.log(" obj ID", objectID);
  return fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  ).then((res) => res.json());
};

const getIDs = () => {
  return fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=painting'
  ).then((res) => res.json())
}


export { getArt, getIDs }