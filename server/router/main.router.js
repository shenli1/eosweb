/*
* Created by Rost
*/
const path = require('path');

module.exports = function(router, config, request, log) {

	router.get('/', (req, res) => {
	   	res.sendFile('index.html');
	});

	router.get('/bp.json', (req, res) => {
	   	res.sendFile(path.join(__dirname, '../../bp.json'));
	});

	router.get('/sitemap.xml', (req, res) => {
	   	res.sendFile(path.join(__dirname, '../../sitemap.xml'));
	});
// ============== END of exports 
};

























