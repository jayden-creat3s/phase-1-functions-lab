// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42; // Scuber's headquarters at 42nd Street
  return Math.abs(pickupLocation - hqLocation);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264; // Each block is 264 feet
}

// Function to calculate distance traveled in feet
function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  return blocksTravelled * 264; // Each block is 264 feet
}

// Function to calculate fare price based on distance
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  
  if (distanceInFeet <= 400) {
    return 0; // First 400 feet are free
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02; // 2 cents per foot after 400 feet
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25; // Flat fare of $25 for distances over 2000 feet
  } else {
    return 'cannot travel that far'; // No rides over 2500 feet
  }
}

