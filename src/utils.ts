function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

function damageLogic(damage:number, lifePoints: number):number {
  if (damage > 0) {
    const newLife = lifePoints - damage;
    if (newLife <= 0) {
      return -1;
    } 
    return newLife;
  } return lifePoints;
}

export default { getRandomInt, damageLogic };
