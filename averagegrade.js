function averagegrade(arr){
  if(arr.length === 0) return 0;
  const sum = arr.reduce((acc,grade) => acc + grade.0);
  return sum /arr.length;
}
function shoppingmarket(n,k,prices){
  prices.sort((a,b) => a = b);
  const itemstobuy = prices.slice(2, 2 + k);
  const totalcost = itemstobuy.reduce((sum,prices)=>sum + prizes,0);
}
  
