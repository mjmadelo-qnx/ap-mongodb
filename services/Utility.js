const uuidV4 = require('uuid/v4');

module.exports = {

	getUUID: function() {
    return uuidV4();
  },

  generateUploadDirectory: function(req, file, path) {
    let directory;
    //let folderPath = req.body.folderPath;
    let folderPath = req.query.folderPath;
    switch(req.ssh.name) {
      case 'BRANCH': {
        directory = req.ssh.dir + process.env.ENVIRONMENT_FOLDER + "/";
       break; 
      }
      case 'HR_BENEFITS': {
        directory = req.ssh.dir + folderPath + "/";
        break;
      }
      case 'PLAY_EVERYDAY': {
        directory = req.ssh.dir + folderPath + "/";
        break;
      }
      case 'SMC': {
        directory = req.ssh.dir + folderPath + "/";
        break;
      }
      default: {
        directory = req.ssh.dir;
        break;
      }
    }
    return directory;
  },

  generateUploadFilename: function(req, file, path) {
    var filename;
    switch(req.ssh.name) {
      case 'BRANCH': {
        filename = `${file.fieldname}-${req.ssh.date}${path.extname(file.originalname).toLowerCase()}`;
        break;
      }
      case 'HR_BENEFITS': {
        filename = `${req.body.uuid}-${file.fieldname}-${req.ssh.date}${path.extname(file.originalname).toLowerCase()}`;
        break;
      }
      default: {
        filename = `${file.fieldname}${path.extname(file.originalname).toLowerCase()}`;
        break;
      }
    }
    return filename;
  },

  getDateToday(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
  
    if (dd < 10) dd = '0'+ dd
    if (mm < 10) mm = '0'+ mm
    
    return today = yyyy + '-' + mm + '-' + dd;
  },

  maskCardNumber: function(cardNumber) {
    return cardNumber.split('').map((value, index) => (index < 4 || index >= cardNumber.length - 4) ? value : 'X').join('');
  },

  encodeCardNumber: function(cardNumber) {
    let real = cardNumber.split('');
    let hash;
    let realArray = [];
    for(var index = 4; index < real.length - 4; index++) {
      var temp = (11 - Number(real[index])).toString();

      if(temp.length > 1) {
        realArray.push(temp.substr(1));
      } else {
        realArray.push(temp);
      }
    }
    hash = real.slice(0, 4).join('') + real.slice(12, 16).join('') + realArray.join('');

    return hash;
  },

  maskString: function(obj, mask, start, end) {
    if(!mask) mask = '*';
    if(!start) start = 0;
    if(!end) end = 0;

    return obj.split('').map((value, index) => (index < start || index >= obj.length - end) ? value : mask).join('');
  }
}