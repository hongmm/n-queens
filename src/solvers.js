/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

//We will make a recursive function that shrinks the board by 1 dimension after each recursion
// smallest case === smallest board
// row,col position for the rook/queen
// for loop of n cases, everytime you recurse, you pass the location of the first node down
// so we need to save the location(s) where a piece has been added
// first case === n = 4 -> next case is === n = 3
// we can keep track of rows and cols we have already been in -> recurse -> we would still operate on n = 4 but we would check and see if the pointer is on these rows/cols


window.findNRooksSolution = function(n) {
  var solution = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]; // has to be a matrix
  var bannedRows = [];
  var bannedCols = [];

  for (var i = 0; i < n; i++) { // rows
    for (var j = 0; j < n; j++) { // cols
      if (!bannedRows.includes(i) && !bannedCols.includes(j)) {
        //solution.push([i,j]);
        solution[i][j] = 1;
        bannedRows.push(i);
        bannedCols.push(j);
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};
//
// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
