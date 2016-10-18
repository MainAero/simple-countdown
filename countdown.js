var countdown = {};

function pad(value) {
    return (value < 10) ? ("0" + value) : value;
}

function padDay(value) {
    if (value < 10) {
        return ("00" + value);
    } else if(value < 100) {
        return ("0" + value);
    } else {
        return value;
    }
}

countdown.getResponse = function (endDate) {
    var diff = Date.parse(endDate) - Date.parse(new Date()); 
    diff = (diff > 0) ? diff : 0;

    return {
        'days': padDay(Math.floor((diff/(1000*60*60*24)))),
        'hours': pad(Math.floor((diff/(1000*60*60)) % 24)),
        'minutes': pad(Math.floor((diff/(1000*60)) % 60)),
        'seconds': pad(Math.floor((diff/1000) % 60))
    }; 
};


if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
        exports = module.exports = countdown 
    }
    exports.countdown = countdown
} 
