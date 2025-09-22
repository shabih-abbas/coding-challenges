/*
FCC Daily Challenge  21/09/2025
Probelm: Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, 
return the number of whole videos the hard drive can store using the following constraints:
- The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
- The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
*/

function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  var units = {
      "B" : 0,
      "KB" : 3,
      "MB" : 6,
      "GB" : 9,
      "TB" : 12
    }
  videoUnit = videoUnit.toUpperCase()
  driveUnit = driveUnit.toUpperCase()
  
  if(!(videoUnit in units)) return "Invalid video unit"
  
  if(!["GB", "TB"].includes(driveUnit)) return "Invalid drive unit"
  
  return Math.floor(convertStorageUnits(driveSize, driveUnit, videoUnit) / videoSize);
  
  function convertStorageUnits(val, curUnit, conUnit){
    return (val * 10 ** units[curUnit]) / 10 ** units[conUnit]
  }
  
}

//tests
console.log(numberOfVideos(1.5, "GB", 2.2, "TB") == 1466)
console.log(numberOfVideos(500000, "KB", 2, "TB") == 4000)
console.log(numberOfVideos(2000, "MB", 100000, "MB") == "Invalid drive unit")
