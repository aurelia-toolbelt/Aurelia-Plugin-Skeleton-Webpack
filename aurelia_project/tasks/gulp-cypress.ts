const es = require("event-stream");
const cypress = require("cypress");

module.exports = function (options) {
    // change as required
    const defaults = {
        reporter: "mocha-teamcity-reporter",
        browser: "chrome"
    };

    options = Object.assign(defaults, options || {});

    return es.through(() => { }, function () {
        const stream = this;

        cypress.run(options)
            .then(() => {
                stream.emit("end");
            })
            .catch(() => {
                stream.emit("error");
            });
    });
};
