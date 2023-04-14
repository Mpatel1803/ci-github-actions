const attack = (name, damage, isCritical) => {
	return `${name} dealt ${isCritical ? damage * 2 : damage} damage!`
}

module.exports = attack

