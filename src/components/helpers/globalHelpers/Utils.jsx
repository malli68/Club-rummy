/* import moment from 'moment-timezone'; */

export function hasWhiteSpace(s) {
    return /\s/g.test(s);
}

export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
/* 
export function dataformat(str) {
    const myDate = moment(str, 'YYYY-MM-DD').toDate();
    return myDate;
}

export function dateTost(date) {
    var d = moment(date).format('YYYY-MM-DD');
    return d;
}

export function dateconvert(st) {
    var date = new Date(st);
    return date.toString()
}

export function dateconvert1(dt) {
    var localDate = moment(dt).format('YYYY-MM-DD h:mm:ss a');
    return localDate;
}



export function currentdate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return today;
}



export function requestdataformat(date) {
    //var date = moment(date).utc().format('YYYY-MM-DD HH:mm:ss');
    var localDate = moment(date).tz("America/New_York").format('YYYY-MM-DD h:mm:ss a');
    return localDate;
}

export function requestdataformat24(date) {
    //var date = moment(date).utc().format('YYYY-MM-DD HH:mm:ss');
    var localDate = moment(date).tz("America/New_York").format('YYYY-MM-DD HH:mm:ss');
    return localDate;
}

export function requestdataformatUTC(date) {
    var dout = moment(date).format('YYYY-MM-DD HH:mm:ss');
    return dout;
}

export function diffdate(date1, date2) {
    if (!date1 && !date2) {
        return null;
    }
    var diffdate1 = moment(date1);
    var diffdate2 = moment(date2);
    var diffdate = diffdate2.diff(diffdate1);
    console.log("diffdate", diffdate);
    if (diffdate) {
        return diffdate;
    }
    return null;
}

export function filterTimes(time) {
    const currentDate = new Date();
    var data = [];
    var today = new Date();
    currentDate.setHours(12);
    currentDate.setMinutes(30);
    return data.push(currentDate)
}

export function validateFromDateWithCurrentDate(todate) {
    var today = new Date();
    console.log("ddddd", today.toString())
    var validatedate = diffdate(today, todate);
    if (validatedate <= 0) {
        return false;
    }
    return true;
}



export function dhms(t) {
    let remianing = t;
    let d = Math.floor(t / (60 * 24));
    let h = Math.floor((t % (60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((t % (60)) / (1000 * 60));

    console.log("diff ct", d, h, m)
    return d + ' Days(s) ' + h + ' Hrs(s) ' + m + ' Min(s) '

}

export function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    var d = { d: d, h: h, m: m, s: s };
    return TimeString(d);
};

function TimeString(t) {
    var t_st = '';
    if (t.d > 0) {
        t_st = t_st + t.d + ' Day' + (t.d > 1 ? 's ' : ' ');
    }
    if (t.h > 0) {
        t_st += t.h + ' Hour' + (t.h > 1 ? 's ' : ' ');
    }
    if (t.m > 0) {
        t_st += t.m + ' Min ';
    }
    if (t.s > 0) {
        t_st += t.s + ' Sec ';
    }
    return t_st;
}



export function locationMindate() {
    var today = new Date();
    today.setDate(today.getDate() - 7);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

export function todaydate() {
    var today = new Date();
    return today;
}

export function past7thdaydate() {
    var today = new Date();
    // today.setDate(today.getDate() - 1);
    today.setHours(today.getHours() - 1);
    return today;
}

export function nextday() {
    var today = new Date();
    today.setDate(today.getDate() + 1);
    today.setHours(today.getHours());
    return today;
}

export function locationfromMindate() {
    var today = new Date();
    today.setDate(today.getDate() - 7);
    return today;
}

export function formatAMPM(date) {
    // var date = moment(date).utc().format('YYYY-MM-DD HH:mm:ss');
    //  var stillUtc = moment.utc(date).toDate();
    var localDate = moment(date).tz("America/New_York").format('h:mm:ss a');
    return localDate;
}

export function convertStToDateObj(date) {
    if (date) {
        var date = moment(date).format('YYYY-MM-DD HH:mm:ss');
        var d = new Date(date);
        return d;
    }
    return date;

}

export function htmlDOBformat(st) {
    //2020-09-17
    var today = new Date(st);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return today;
}


export function rendereventcolor(type, status) {
    //1, 2 orange   status
    // 3 green
    // 4 merron
    console.log("event color", type, status)
    if ((type == 7 || type == 14 || type == 15) && (status == 1 || status == 2)) {
        return 't_alert_dot orange_dot mr-2';
    } else if ((type == 7 || type == 14 || type == 15) && status == 3) {
        return 't_alert_dot green_dot mr-2';
    } else if ((type == 7 || type == 14 || type == 15) && status == 4) {
        return 't_alert_dot maroon_dot mr-2';
    } else if (type == 1 || type == 9 || type == 10) {
        return 't_alert_dot green_dot mr-2';
    } else if (type == 3 || type == 4 || type == 6 || type == 7 || type == 13 || type == 14) {
        return 't_alert_dot orange_dot mr-2';
    } else if (type == 2 || type == 11 || type == 5 || type == 16 || type == 17) {
        return 't_alert_dot maroon_dot mr-2';
    } else {
        return 't_alert_dot round_dot mr-2';
    }
}

export function capital_letter(str) {
    if (str && str != "" && str.length > 0) {
        str = str.split(" ");
        for (var i = 0, x = str.length; i < x; i++) {
            str[i] = (str[i][0] ? str[i][0].toUpperCase() : "") + (str[i] && str[i].substr(1));
        }
        var st = str.join(" ");
        return st.length > 1 ? "Hi, " + st : '';
    } else {
        return str;
    }

}
export function filter_country_code(m) {
    var mobile;
    if (m && m.startsWith("+1")) {
        mobile = m.replace('+1', '');
    } else if (m && m.startsWith("+91")) {
        mobile = m.replace('+91', '');
    } else {
        mobile = m.replace('+', '');
    }
    return mobile;

}

export function validateOffender(off_type) {
    return OFFENDER_TYPES.includes(off_type)
}

export function OffenderTypeSt(offtype) {
    if (offtype == 1) {
        return "Violent Offenders"
    } else if (offtype == 2) {
        return "Sex Offenders"
    } else if (offtype == 3) {
        return "Non Violent Offenders"
    }
}

export function getOffenderId(off_type) {
    return (OFFENDER_TYPES.indexOf(off_type)) + 1;
}

export function ft_to_mts(radious) {
    if (radious) {
        return radious * 0.3048;
    } else {
        return radious;
    }
}

export function convertTolocationtoMap(obj) {
    var emptylocations = { radius: '', lat: '', lng: '', address: '' };
    if (obj) {
        let loc = JSON.parse(obj) ? JSON.parse(obj) : emptylocations;
        loc.radius = parseInt(loc.radius);
        loc.lat = parseFloat(loc.lat);
        loc.lng = parseFloat(loc.lng);
        return loc;
    } else {
        return emptylocations;
    }
}

export function eventType(type) {
    let search_by_event = '';
    if (type == 'check_ins') {
        search_by_event = '7';
    } else if (type == 'curfew_violation') {
        search_by_event = 16;  //16 curfew voilation
    } else if (type == 'low_battery') {
        search_by_event = 5;  // phone battery low
    } else if (type == 'perimeter_violation') {
        search_by_event = '11';
    } else if (type == 'victim_violation') {
        search_by_event = 17;
    }
    return search_by_event + '';
}

export function getEventName(e_type, events) {
    let obj = events.find(x => x.id === parseInt(e_type))
    if (e_type == 'check_ins') {
        return 'Check Ins Notifications';
    } else if (e_type == 'perimeter_violation') {
        return 'Perimeter Voilation Notifications';
    } else if (obj && obj.title) {
        return obj.title + " Notifications"
    } else {
        return "All Notifications"
    }
}
 */