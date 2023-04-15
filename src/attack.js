const attack = (name, damage, isCritical) => `${name} dealt ${isCritical ? damage * 2 : damage} damage!`;

export default attack;
