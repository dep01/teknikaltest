// HOW TO IMPORT ?
// const Convert = require('location/jsonPlaceholdeModel.js'); 
// OR
// import Convert from 'location/jsonPlaceholdeModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfjsonPlaceholdeModel(data)
// FOR ARRAY
// const data = Convert.listOfjsonPlaceholdeModel(data)
const modelOfDatajsonPlaceholdeModel = {
	userId: 0,
	id: 0,
	title: '',
	body: ''
};
function listOfjsonPlaceholdeModel(data = []) {
  var listData = [modelOfDatajsonPlaceholdeModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				userId: val.userId ?? null,
				id: val.id ?? null,
				title: val.title ?? null,
				body: val.body ?? null
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOfjsonPlaceholdeModel(data = null) {
  var objectData = modelOfDatajsonPlaceholdeModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.userId = data.userId ?? null;
		objectData.id = data.id ?? null;
		objectData.title = data.title ?? null;
		objectData.body = data.body ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfjsonPlaceholdeModel: listOfjsonPlaceholdeModel,
  objectOfjsonPlaceholdeModel: objectOfjsonPlaceholdeModel,
};




  