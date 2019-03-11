/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let checked = [], a = [0];
  for (let i = 0; i < preferences.length; i++) {
    a[i+1] = preferences[i];
  }
  let number = 0;
  for (let i = 1; i < a.length; i++){
    if (checked.indexOf(a[i]) > 0 || i == a[i]) continue
    else if (i == a[a[i]]) checked.push(a[i], a[a[i]]) 
    else if (i == a[a[a[i]]]){
      checked.push(a[i], a[a[i]], a[a[a[i]]]);
      number++;
    } 
  }
  return number;  
};
