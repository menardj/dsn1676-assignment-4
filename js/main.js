var blueberries = {
	name: '<p class="blueberries">Blueberries</p>',
	species: 'Vaccinium corymbosum',
	growsOnShrub: true,
	energy: '240 kJ',
	carbohydrates: '14.49 g',
	protein: '0.74 g',
};

var grapes = {
	name: '<p class="grapes">Grapes</p>',
	species: 'Vitis vinifera',
	growsOnShrub: false,
	energy: '288 kJ',
	carbohydrates: '18.1 g',
	protein: '0.72 g'
};

var redCurrant = {
	name: '<p class="redcurrant">Red Currant</p>',
	species: 'Ribes rubrum',
	growsOnShrub: true,
	energy: '234 kJ',
	carbohydrates: '13.8 g',
	protein: '1.4 g'
};

var berries = [blueberries, grapes, redCurrant];

var writeBerries = function (allBerries) {

	allBerries.forEach(function (item) {

	document.write('<h3>' + item.name + '</h3>');

	document.write('<dl>');

	document.write('<dt>Species:</dt>');
	document.write('<dd>' + item.species + '</dd>');

	document.write('<dt>Grows On Shrub:</dt>');
	document.write('<dd>' + item.growsOnShrub + '</dd>');

	document.write('<dt>Energy:</dt>');
	document.write('<dd>' + item.energy + '</dd>');

	document.write('<dt>Carbohydrates:</dt>');
	document.write('<dd>' + item.carbohydrates + '</dd>');

	document.write('<dt>Protein:</dt>');
	document.write('<dd>' + item.protein + '</dd>');

	document.write('</dl>');
	});

}

writeBerries( berries );
