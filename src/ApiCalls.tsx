import {objectID} from './utils'

const getArt = (objectID: number) => {
  console.log(' obj ID', objectID)
  return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
  .then(res => res.json())
}

export default getArt