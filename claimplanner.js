const baseClaimSize = 25 / 5
const claimX = baseClaimSize + 1
const claimY = baseClaimSize + 1

function makeClaim(claimSizeX, claimSizeY) {
  const currentDiv = document.getElementById("Claim");
  const clm = [];
  for (let i = 0; i < claimSizeX; i++) {
    clm[i] = new Array(claimSizeY).fill().map((item, index) => {
      const claimSquare = document.createElement("div");
      claimSquare.setAttribute("id", "claimSquare")
      let text
      if (i === 1 && index === 1) {
        text = `C`
      } else {
        text = `${index + 1},${i + 1}`
      }
      const newContent = document.createTextNode(text);
      claimSquare.appendChild(newContent);
      currentDiv.appendChild(claimSquare)
      return `${index},${i}`
    });
    // console.log(`<rect width="50" height="50" x="10" y="10" rx="3" ry="3" fill="#080" />`)
  }
  return clm;
}

makeClaim(claimX, claimY)