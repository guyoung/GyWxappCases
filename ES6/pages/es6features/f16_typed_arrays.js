// 类型化数组

function f16_typed_arrays() {

    console.log("\nf16:Typed Arrays");

    // ArrayBuffer
    var a = new ArrayBuffer(10);
    console.log(a.byteLength); // 输出:10

    // TypedArray
    let typedArray = new Uint8Array([0, 1, 2]);
    console.log(typedArray.length); // 输出:  3
    typedArray[0] = 5;
    let normalArray = [...typedArray];
    console.log(normalArray); // 输出:  [5,1,2]

    class Example {
        constructor(buffer = new ArrayBuffer(24)) {
            this.buffer = buffer;
        }
        set buffer(buffer) {
            this._buffer = buffer;
            this._id = new Uint32Array(this._buffer, 0, 1);
            this._username = new Uint8Array(this._buffer, 4, 16);
            this._amountDue = new Float32Array(this._buffer, 20, 1);
        }
        get buffer() {
            return this._buffer;
        }
        set id(v) {
            this._id[0] = v;
        }
        get id() {
            return this._id[0];
        }
        set username(v) {
            this._username[0] = v;
        }
        get username() {
            return this._username[0];
        }
        set amountDue(v) {
            this._amountDue[0] = v;
        }
        get amountDue() {
            return this._amountDue[0]
        }
    }

    let example = new Example();
    example.id = 7;
    example.username = "John Doe";
    example.amountDue = 42.0;
    console.log(example); // 输出: Example {_buffer: ArrayBuffer, _id: Uint32Array[1], _username: Uint8Array[16], _amountDue: Float32Array[1]}

    // DataView
    let typedArray2 = new Uint8Array([1, 4, 9, 25, 36, 49, 64, 81]);
    let dataView = new DataView(typedArray2.buffer);
    console.log(dataView.getUint8(5)); // 输出:  49

}

module.exports = f16_typed_arrays;