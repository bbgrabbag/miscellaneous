Monte Carlo Node.js Simulation

About: Contains javascript code for constructing a small-scale (up to ~4000 nodes) Monte Carlo percolation simulation. 

To Use: 

`new Percolation(N, prob)` generates a new simulation with grid N x N size and Monte Carlo probability value `prob`.

`.logGrid()` displays the grid with nodes displaying either `X` or `" "` determined by `prob`. Generated using pseudo random numbers.

`.checkPerc()` returns a boolean which refers to whether the simulation percolates or not. A grid percolates if there is an open and non-diagonal path from at least one node on the top row to at least one node on the bottom.

Example of a non-percolating grid:

`var simulation = new Percolation(5, .5);`
`simulation.logGrid();`
`console.log(simulation.checkPerc());`

`[ [ [ ' ' ], [ 'X' ], [ ' ' ], [ ' ' ], [ 'X' ] ],`
`  [ [ ' ' ], [ ' ' ], [ 'X' ], [ ' ' ], [ ' ' ] ],`
`  [ [ 'X' ], [ 'X' ], [ ' ' ], [ ' ' ], [ 'X' ] ],`
`  [ [ ' ' ], [ ' ' ], [ 'X' ], [ ' ' ], [ 'X' ] ],`
`  [ [ 'X' ], [ ' ' ], [ 'X' ], [ 'X' ], [ 'X' ] ] ]`

`false`

Example of a percolating grid:

`var simulation = new Percolation(5, .5);`
`simulation.logGrid();`
`console.log(simulation.checkPerc());`

`[ [ [ ' ' ], [ ' ' ], [ 'X' ], [ ' ' ], [ 'X' ] ],`
`  [ [ 'X' ], [ ' ' ], [ 'X' ], [ ' ' ], [ 'X' ] ],`
`  [ [ ' ' ], [ ' ' ], [ 'X' ], [ 'X' ], [ 'X' ] ],`
`  [ [ ' ' ], [ ' ' ], [ ' ' ], [ 'X' ], [ 'X' ] ],`
`  [ [ 'X' ], [ ' ' ], [ ' ' ], [ 'X' ], [ 'X' ] ] ]`

`true`






