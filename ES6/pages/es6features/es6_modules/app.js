import * as math from "math";

function execute() {
    console.log("π = " + math.sum(math.pi));
    console.log("2π = " + math.sum(math.pi, math.pi));
    console.log("3π = " + math.sum(math.pi, math.pi, math.pi));
    console.log("4π = " + math.sum(math.pi, math.pi, math.pi, math.pi));
}

export { execute };