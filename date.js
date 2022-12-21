exports.getDate = function(){

    let today = new Date();
    // collection to use with toLocaleDateString to specify the format of the day.
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);

};

exports.getDay = function(){
    let today = new Date();
    // collection to use with toLocaleDateString to specify the format of the day.
    let options = {
        weekday: "long"
    };
    return today.toLocaleDateString("en-US", options);

};
