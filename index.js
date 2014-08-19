exports.version= '0.0.2';

exports.initPathData= function(pathData){
	pathData= (pathData)? pathData: {};
	pathData.count= (pathData.count)? pathData.count : 0;
	pathData.map = (pathData.map)? pathData.map : {};
}
exports.shorten= function(pathData,path) {
	exports.initPathData(pathData);
	pathData.count++;
	pathData.map[pathData.count]=path;
	returnpathData.count.toString(36);
}
exports.expand= function(pathData,shortened) {
	exports.initPathData(pathData);
	varpathIndex= parseInt(shortened,36);
	returnpathData.map[pathIndex];
}
