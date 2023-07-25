
const getArt = (objectID: number) => {
  // console.log(" obj ID", objectID);
  return fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  ).then((res) => res.json());
};

const getIDs = () => {
  return fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=painting'
  ).then((res) => res.json())
  .then(data => {
    const index = Math.floor(Math.random() * data.objectIDs.length)
    const index1 = Math.floor(Math.random() * data.objectIDs.length)
    const index2 = Math.floor(Math.random() * data.objectIDs.length)
    return [data.objectIDs[index], data.objectIDs[index1], data.objectIDs[index2]]
  })
}


export { getArt, getIDs }