**MAZERUNNER**

*About* 
JS Maze generator and solver.

*Use*

 * Generate a new maze with: 

```
let maze = new Mazerunner(n, prob);
```
*n* will create a n X n open grid, with each cell having a probability of *prob* of being closed.
A random starting point will be denoted 'S' on the grid. A random finishing point will be denoted 'F'.

 * View the grid in console with:

 ```
maze.logGrid();
 ```

 * Check whether there is a path with:

 ```
maze.checkForPath();
 ```

**Future**
Working on feature to display the shortest path between start and finish.







