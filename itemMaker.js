const items = fetch('./items.json')
  .then((response) => response.json())
//.then((json) => console.log(json));

const objects = fetch('./objects.json')
  .then((response) => response.json())
//.then((json) => console.log(json));

// const qualityFormulas = {
//   "Tree": "(AvgSoil*2+AvgWater*2+Pot*3+Table*3+Seed*15)/25 + rnd(-5+5)",
//   "Herbalist Table": "(AvgFibre+AvgBoard+AvgBlock)/2",
//   "Unfired Treeplanter's Pot": "Clay",
//   "Treeplanter's Pot": "",
// }

// const createTreeplantersPot = (clay, isUsingPottersWheel) => {
//   const treePlantersPotQuality = 0
//   if (isUsingPottersWheel) {
//     treePlantersPotQuality = ((clay.quality * 3) + pottersWheel.quality) / 2
//   }
//   else {
//     treePlantersPotQuality = clay / 2
//   }

//   return {
//     name: "Treeplanter's Pot",
//     quality: treePlantersPotQuality
//   }
// }

// console.log(createTreeplantersPot({ name: "clay", quality: 15 }, true))
const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const averageItems = (items) => {
  return items.reduce((acc, item) => acc + item.quality, 0) / items.length
}

const createCompostBin = (boardArray, blockArray, glueArray) => {
  const avgBoard = averageItems(boardArray)
  const avgBlock = averageItems(blockArray)
  const avgGlue = averageItems(glueArray)
  const compostBinQuality = (avgBoard + avgBlock + avgGlue) / 3
  return {
    name: "Compost Bin",
    quality: compostBinQuality,
    composition: [
      boardArray,
      blockArray,
      glueArray]
  }
}

const createTree = (soilArray, waterArray, pot, table, seed) => {
  const avgSoil = averageItems(soilArray)
  const avgWater = averageItems(waterArray)
  const treeQuality = (avgSoil * 2 + avgWater * 2 + pot.quality * 3 + table.quality * 3 + seed.quality * 15) / 25 //+ generateRandom(-5, 5)
  return {
    name: "Tree",
    quality: treeQuality,
    maxQuality: treeQuality + 5,
    minQuality: treeQuality - 5,
    composition: [
      soilArray,
      waterArray,
      pot,
      table,
      seed]
  }
}

const soilQ = 173
const soil = [
  { name: "Mulch", quality: soilQ },  // Soil #1
  { name: "Mulch", quality: soilQ },  // Soil #2
  { name: "Mulch", quality: soilQ },  // Soil #3
  { name: "Mulch", quality: soilQ } // Soil #4
]
const water = [
  { name: "Water", quality: 339 },  // water
]
const pot = { name: "Treeplanter's Pot", quality: 358.5 }  // Treeplanter's Pot
const table = { name: "Herbalist Table", quality: 325 }  // Herbalist Table
const seed = {
  name: "Plane Seedpods", quality: 294 // Seed
}

const glueQ = 100
const glue = [
  { name: "Mulch", quality: glueQ },
  { name: "Mulch", quality: glueQ },
  { name: "Mulch", quality: glueQ },
  { name: "Mulch", quality: glueQ }
]
const blockQ = 100
const block = [
  { name: "block", quality: blockQ },
  { name: "block", quality: blockQ },
  { name: "block", quality: blockQ },
  { name: "block", quality: blockQ }
]
const boardQ = 100
const board = [
  { name: "Board", quality: boardQ },
  { name: "Board", quality: boardQ },
  { name: "Board", quality: boardQ },
  { name: "Board", quality: boardQ }
]

console.log(createTree(soil, water, pot, table, seed))
console.log(createCompostBin(board, block, glue))
console.log(`Seed max quality per pot and H Table Q325
358.5\t:280
229.7\t:241
227.2\t:240
180.9\t:226
180.5\t:226
144\t:216
143.9\t:216
143.5\t:215
82.1\t:197
70.6\t:
47.1\t:
Worst Case Scenario:
Pot: 41.1 Table: 31 Water: 279 Soil: 41 Seed: 73
Best Case Scenario:
Pot: 358.5 Table: 325 Water: 339 Soil: 173 Seed: 294
`)