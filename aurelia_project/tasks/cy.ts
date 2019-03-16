const gulp = require("gulp");
const { spawn } = require("child_process");
const cypress = require("./gulp-cypress");

// hold onto the server process
let server;

function startServer(done) {
    server = spawn(process.argv[0], ["nps"], {
        detached: true,
        stdio: "ignore"
    });

    server.unref();
    done();
}

function runCypress(done) {
    const spec = "test/e2e/demo.e2e.ts";
    return gulp
        .src("/")
        .pipe(cypress({spec}))
        .on("error", error => handleError(error, done))
        .on("end", () => killServer(done));
}

function killServer(done) {
    server.kill();
    done();
}

function handleError(error, done) {
    server.kill();
    done(error);
}

const cy = gulp.series(startServer, runCypress, killServer);

export default cy;
