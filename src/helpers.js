export function getClosestValueFromScale (exactValue, array) {
  for (var i = 0; i < array.length; i++) {

      if(array[i] == exactValue) {
        return i
      }
      // Check if the next bigger number was found
      if(array[i] > exactValue) {
        var upper = array[i]
        var lower = array[i - 1]

        // Calculate differences to upper and lower neighbour
        var upperDiff = upper - exactValue
        var lowerDiff = exactValue - lowerDiff

        // Determine which neighbour is the closest
        if(upperDiff > lowerDiff) {
          return i - 1
        } else {
          return i
        }
      }
    }

    // Return null if no match was found
    return null;
}
