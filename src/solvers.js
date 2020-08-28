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
  var solution = new Board({n: n});
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution.togglePiece(i, j);
      if (solution.hasRowConflictAt(i) || solution.hasColConflictAt(j)) {
        solution.togglePiece(i, j);
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var solution = new Board({n: n});
  var recurse = function(row) {
    for (var col = 0; col < n; col++) {
      // a current solution board -> passing this around, at the end, push board into some solutions array
      solution.togglePiece(row, col);
      if (!solution.hasRowConflictAt(row) && !solution.hasColConflictAt(col)) {
        if (row === n - 1) {
          solutionCount++;
        } else {
          recurse(row + 1);
        }
      }
      solution.togglePiece(row, col);
    }
  };

  recurse(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 0) {
    return [];
  }
  var solution = new Board({n: n});
  var currentRow = 0;
  var currentCol = 0;
  var recurse = function(row) {
    if (row === n) {
      return solution; //row()
    }
    for (var col = 0; col < n; col++) {
      solution.togglePiece(row, col);
      if (!solution.hasAnyQueensConflicts()) {
        recurse(row + 1);
      } else {
        solution.togglePiece(row, col);
      }
      currentCol++;
    }
    currentRow++;
    return;
  };


  // var recurse = function(row) {
  //   //if row equals n, we have
  //   for (var col = 0; col < n; col++) {
  //     solution.togglePiece(row, col);
  //     if (!solution.hasAnyQueenConflicts()) {
  //       if (row === n - 1) {
  //         return solution;
  //       } else {
  //         recurse(row + 1);
  //       }
  //     }
  //     solution.togglePiece(row, col);
  //   }
  // };

  // for rows
  // for cols

  recurse(0);
  console.log('solution: ', solution);
  //console.log('newSolution: ', newSolution);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

  return solution.rows();
};

// for (var row = 0; row < n; row++) {
//   for (var col = 0; col < n; col++) {
//     solution.togglePiece(row, col);
//     var major = solution._getFirstRowColumnIndexForMajorDiagonalOn(row, col)
//     var minor = solution._getFirstRowColumnIndexForMinorDiagonalOn(row, col)
//     if (solution.hasRowConflictAt(row) || solution.hasColConflictAt(col) || solution.hasMajorDiagonalConflictAt(major) || solution.hasMinorDiagonalConflictAt(minor)) {
//       solution.togglePiece(row, col);
//     }
//   }
// }

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
