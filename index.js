const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null },
];

  const sortedRobots = robots.map(function(robot){
    if(robot.name.includes('Megatron')){
      return Object.assign({}, robot, {
        alliance:'decepticon',
      });
    }
    else if (robot.name.includes('Skywarp')){
       return Object.assign({}, robot, {
        alliance:'decepticon',
      });
    }
    else if (robot.name.includes('Laserbeak')){
       return Object.assign({}, robot, {
        alliance:'decepticon',
      });
     }
    else if(robot.name.includes('Barricade')){
       return Object.assign({}, robot, {
              alliance:'decepticon',
            });
    }
    else{
      return Object.assign({}, robot, {
        alliance:'autobot',
      });
    }
});

function isEven(n){
    if(n % 2 == 0){
      return true;
    }
}

function isOdd(n){
  if(Math.abs(n%2) == 1){
    return true;
  }
}

var coloredZebraStripes = zebraStripes.map(function(zebraStripe, index){ 
    if(isEven(index) === true){
      return Object.assign({}, zebraStripe,{
        color:'black'
      });
    }
    else if(isOdd(index) === true){
        return Object.assign({}, zebraStripe, {
          color: 'white',
        });
  }
});

console.log(coloredZebraStripes);
