class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }
  yearsExperienceFromBeginningOf(year) { 
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation; 
  }
  blocksTravelled() { 
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const streetDistance = 
}


blocksTravelled() {
+    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
+    let vertDistance = Math.abs(this.endingLocation.vertical-this.beginningLocation.vertical);
+    let horizDistance = Math.abs(eastWest.indexOf(this.endingLocation.horizontal)-eastWest.indexOf(this.beginningLocation.horizontal));
+    return vertDistance + horizDistance;
+  }