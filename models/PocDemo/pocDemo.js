const mongoose 		= require('mongoose');
var connection = require('../../services/PocDemoMongoDB');

const pocDemoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    meterassignemnt_id: Number,
    gross_datetime: Date,
    gross_load_mw: String,
    net_datetime: Date,
    net_load_mw: String,
    station_use_mwh: String,
    frequency_hz: String,
    reactive_power_mv: String,
    frequency_status: String,
    created_by: String,
    created_date: Date
}, {
    versionKey: false,
    collection : 'pocCollection'
});

module.exports = connection != null ? connection.model('pocCollection', pocDemoSchema) : null;
