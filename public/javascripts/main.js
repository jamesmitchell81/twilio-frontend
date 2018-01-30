(function(w, d, Twilio) {

    let eventLog = d.getElementById("events");

    let token = ""

    // get the token

    // let worker = new Twilio.TaskRouter.Worker(token);
    let worker = {
        on: function() {

        }
    }

    worker.on('ready', function(worker) {
        logEvent('ready');
    });

    worker.on('activity.update', function(worker) {
        logEvent('activity.update');
    });

    worker.on('attributes.update', function(worker) {
        logEvent('attributes.update');
    });

    worker.on('capacity.update', function(channel) {
        logEvent('capacity.update');
    });

    worker.on('reservation.created', function(reservation) {
        logEvent('reservation.created');
    });

    worker.on('reservation.accepted', function(reservation) {
        logEvent('reservation.accepted');
    });

    worker.on('reservation.rejected', function(reservation) {
        logEvent('reservation.rejected');
    });

    worker.on('reservation.timeout', function(reservation) {
        logEvent('reservation.timeout');
    });

    worker.on('reservation.canceled', function(reservation) {
        logEvent('reservation.canceled');
    });

    worker.on('reservation.rescinded', function(reservation) {
        logEvent('reservation.rescinded');
    });

    worker.on('token.expired', function() {
        logEvent('token.expired');
    });

    worker.on('connected', function() {
        logEvent('connected');
    });

    worker.on('disconnected', function() {
        logEvent('disconnected');
    });

    worker.on('error', function() {
        logEvent('error');
    });

    function logEvent(eventName) {
        let wrap = d.createElement("div");
        let nameElem = d.createElement("span");
        let timeElem = d.createElement("span")

        timeElem.innerHTML = time();
        timeElem.className = "event-log-time";
        nameElem.innerHTML = eventName;

        wrap.className = "event";
        wrap.appendChild(timeElem);
        wrap.appendChild(nameElem);

        wrap.className = "event";
        eventLog.insertBefore(wrap, eventLog.firstChild);
    }

    function time() {
        return new Date().toLocaleTimeString();
    }

} (window, document, Twilio))