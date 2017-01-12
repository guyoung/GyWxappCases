/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
"use strict";
var hasOwn = Object.prototype.hasOwnProperty;
var supportsCreate = typeof Object.create === "function";
var supportsProto = { __proto__: [] } instanceof Array;
var supportsSymbol = typeof Symbol === "function";
var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
var createDictionary = supportsCreate ? function () { return MakeDictionary(Object.create(null)); } :
    supportsProto ? function () { return MakeDictionary({ __proto__: null }); } :
        function () { return MakeDictionary({}); };
var HashMap;
(function (HashMap) {
    var downLevel = !supportsCreate && !supportsProto;
    HashMap.has = downLevel
        ? function (map, key) { return hasOwn.call(map, key); }
        : function (map, key) { return key in map; };
    HashMap.get = downLevel
        ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
        : function (map, key) { return map[key]; };
})(HashMap || (HashMap = {}));
var functionPrototype = Object.getPrototypeOf(Function);
var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
var Metadata = new _WeakMap();
function decorate(decorators, target, targetKey, targetDescriptor) {
    if (!IsUndefined(targetKey)) {
        if (!IsArray(decorators))
            throw new TypeError();
        if (!IsObject(target))
            throw new TypeError();
        if (!IsObject(targetDescriptor) && !IsUndefined(targetDescriptor) && !IsNull(targetDescriptor))
            throw new TypeError();
        if (IsNull(targetDescriptor))
            targetDescriptor = undefined;
        targetKey = ToPropertyKey(targetKey);
        return DecorateProperty(decorators, target, targetKey, targetDescriptor);
    }
    else {
        if (!IsArray(decorators))
            throw new TypeError();
        if (!IsConstructor(target))
            throw new TypeError();
        return DecorateConstructor(decorators, target);
    }
}
exports.decorate = decorate;
function metadata(metadataKey, metadataValue) {
    function decorator(target, targetKey) {
        if (!IsUndefined(targetKey)) {
            if (!IsObject(target))
                throw new TypeError();
            targetKey = ToPropertyKey(targetKey);
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
        }
        else {
            if (!IsConstructor(target))
                throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, undefined);
        }
    }
    return decorator;
}
exports.metadata = metadata;
function defineMetadata(metadataKey, metadataValue, target, targetKey) {
    if (!IsObject(target))
        throw new TypeError();
    if (!IsUndefined(targetKey))
        targetKey = ToPropertyKey(targetKey);
    return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
}
exports.defineMetadata = defineMetadata;
function hasMetadata(metadataKey, target, targetKey) {
    if (!IsObject(target))
        throw new TypeError();
    if (!IsUndefined(targetKey))
        targetKey = ToPropertyKey(targetKey);
    return OrdinaryHasMetadata(metadataKey, target, targetKey);
}
exports.hasMetadata = hasMetadata;
function hasOwnMetadata(metadataKey, target, targetKey) {
    if (!IsObject(target))
        throw new TypeError();
    if (!IsUndefined(targetKey))
        targetKey = ToPropertyKey(targetKey);
    return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
}
exports.hasOwnMetadata = hasOwnMetadata;
function getMetadata(metadataKey, target, targetKey) {
    if (!IsObject(target))
        throw new TypeError();
    if (!IsUndefined(targetKey))
        targetKey = ToPropertyKey(targetKey);
    return OrdinaryGetMetadata(metadataKey, target, targetKey);
}
exports.getMetadata = getMetadata;
function getOwnMetadata(metadataKey, target, targetKey) {
    if (!IsObject(target))
        throw new TypeError();
    if (!IsUndefined(targetKey))
        targetKey = ToPropertyKey(targetKey);
    return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
}
exports.getOwnMetadata = getOwnMetadata;
function getMetadataKeys(target, targetKey) {
    if (!IsObject(target))
        throw new TypeError();
    if (!IsUndefined(targetKey))
        targetKey = ToPropertyKey(targetKey);
    return OrdinaryMetadataKeys(target, targetKey);
}
exports.getMetadataKeys = getMetadataKeys;
function getOwnMetadataKeys(target, targetKey) {
    if (!IsObject(target))
        throw new TypeError();
    if (!IsUndefined(targetKey))
        targetKey = ToPropertyKey(targetKey);
    return OrdinaryOwnMetadataKeys(target, targetKey);
}
exports.getOwnMetadataKeys = getOwnMetadataKeys;
function deleteMetadata(metadataKey, target, targetKey) {
    if (!IsObject(target))
        throw new TypeError();
    if (!IsUndefined(targetKey))
        targetKey = ToPropertyKey(targetKey);
    var metadataMap = GetOrCreateMetadataMap(target, targetKey, false);
    if (IsUndefined(metadataMap))
        return false;
    if (!metadataMap.delete(metadataKey))
        return false;
    if (metadataMap.size > 0)
        return true;
    var targetMetadata = Metadata.get(target);
    targetMetadata.delete(targetKey);
    if (targetMetadata.size > 0)
        return true;
    Metadata.delete(target);
    return true;
}
exports.deleteMetadata = deleteMetadata;
function DecorateConstructor(decorators, target) {
    for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        var decorated = decorator(target);
        if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated))
                throw new TypeError();
            target = decorated;
        }
    }
    return target;
}
function DecorateProperty(decorators, target, propertyKey, descriptor) {
    for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        var decorated = decorator(target, propertyKey, descriptor);
        if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated))
                throw new TypeError();
            descriptor = decorated;
        }
    }
    return descriptor;
}
function GetOrCreateMetadataMap(O, P, Create) {
    var targetMetadata = Metadata.get(O);
    if (IsUndefined(targetMetadata)) {
        if (!Create)
            return undefined;
        targetMetadata = new _Map();
        Metadata.set(O, targetMetadata);
    }
    var metadataMap = targetMetadata.get(P);
    if (IsUndefined(metadataMap)) {
        if (!Create)
            return undefined;
        metadataMap = new _Map();
        targetMetadata.set(P, metadataMap);
    }
    return metadataMap;
}
function OrdinaryHasMetadata(MetadataKey, O, P) {
    var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
    if (hasOwn)
        return true;
    var parent = OrdinaryGetPrototypeOf(O);
    if (!IsNull(parent))
        return OrdinaryHasMetadata(MetadataKey, parent, P);
    return false;
}
function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
    var metadataMap = GetOrCreateMetadataMap(O, P, false);
    if (IsUndefined(metadataMap))
        return false;
    return ToBoolean(metadataMap.has(MetadataKey));
}
function OrdinaryGetMetadata(MetadataKey, O, P) {
    var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
    if (hasOwn)
        return OrdinaryGetOwnMetadata(MetadataKey, O, P);
    var parent = OrdinaryGetPrototypeOf(O);
    if (!IsNull(parent))
        return OrdinaryGetMetadata(MetadataKey, parent, P);
    return undefined;
}
function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
    var metadataMap = GetOrCreateMetadataMap(O, P, false);
    if (IsUndefined(metadataMap))
        return undefined;
    return metadataMap.get(MetadataKey);
}
function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
    var metadataMap = GetOrCreateMetadataMap(O, P, true);
    metadataMap.set(MetadataKey, MetadataValue);
}
function OrdinaryMetadataKeys(O, P) {
    var ownKeys = OrdinaryOwnMetadataKeys(O, P);
    var parent = OrdinaryGetPrototypeOf(O);
    if (parent === null)
        return ownKeys;
    var parentKeys = OrdinaryMetadataKeys(parent, P);
    if (parentKeys.length <= 0)
        return ownKeys;
    if (ownKeys.length <= 0)
        return parentKeys;
    var set = new _Set();
    var keys = [];
    for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
        var key = ownKeys_1[_i];
        var hasKey = set.has(key);
        if (!hasKey) {
            set.add(key);
            keys.push(key);
        }
    }
    for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
        var key = parentKeys_1[_a];
        var hasKey = set.has(key);
        if (!hasKey) {
            set.add(key);
            keys.push(key);
        }
    }
    return keys;
}
function OrdinaryOwnMetadataKeys(O, P) {
    var metadataMap = GetOrCreateMetadataMap(O, P, false);
    var keys = [];
    if (IsUndefined(metadataMap))
        return keys;
    var keysObj = metadataMap.keys();
    var iterator = GetIterator(keysObj);
    while (true) {
        var next = IteratorStep(iterator);
        try {
            if (!next)
                return keys;
            var nextValue = IteratorValue(next);
            keys.push(nextValue);
        }
        catch (e) {
            try {
                if (next) {
                    next = false;
                    IteratorClose(iterator);
                }
            }
            finally {
                throw e;
            }
        }
        finally {
            if (next)
                IteratorClose(iterator);
        }
    }
}
function Type(x) {
    if (x === null)
        return 1;
    switch (typeof x) {
        case "undefined": return 0;
        case "boolean": return 2;
        case "string": return 3;
        case "symbol": return 4;
        case "number": return 5;
        case "object": return x === null ? 1 : 6;
        default: return 6;
    }
}
function IsUndefined(x) {
    return x === undefined;
}
function IsNull(x) {
    return x === null;
}
function IsSymbol(x) {
    return typeof x === "symbol";
}
function IsObject(x) {
    return typeof x === "object" ? x !== null : typeof x === "function";
}
function ToPrimitive(input, PreferredType) {
    switch (Type(input)) {
        case 0: return input;
        case 1: return input;
        case 2: return input;
        case 3: return input;
        case 4: return input;
        case 5: return input;
    }
    var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
    var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
    if (exoticToPrim !== undefined) {
        var result = exoticToPrim.call(input, hint);
        if (IsObject(result))
            throw new TypeError();
        return result;
    }
    return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
}
function OrdinaryToPrimitive(O, hint) {
    if (hint === "string") {
        var toString_1 = O.toString;
        if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result))
                return result;
        }
        var valueOf = O.valueOf;
        if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result))
                return result;
        }
    }
    else {
        var valueOf = O.valueOf;
        if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result))
                return result;
        }
        var toString_2 = O.toString;
        if (IsCallable(toString_2)) {
            var result = toString_2.call(O);
            if (!IsObject(result))
                return result;
        }
    }
    throw new TypeError();
}
function ToBoolean(argument) {
    return !!argument;
}
function ToString(argument) {
    return "" + argument;
}
function ToPropertyKey(argument) {
    var key = ToPrimitive(argument, 3);
    if (IsSymbol(key))
        return key;
    return ToString(key);
}
function IsArray(argument) {
    return Array.isArray
        ? Array.isArray(argument)
        : argument instanceof Object
            ? argument instanceof Array
            : Object.prototype.toString.call(argument) === "[object Array]";
}
function IsCallable(argument) {
    return typeof argument === "function";
}
function IsConstructor(argument) {
    return typeof argument === "function";
}
function GetMethod(V, P) {
    var func = V[P];
    if (func === undefined || func === null)
        return undefined;
    if (!IsCallable(func))
        throw new TypeError();
    return func;
}
function GetIterator(obj) {
    var method = GetMethod(obj, iteratorSymbol);
    if (!IsCallable(method))
        throw new TypeError();
    var iterator = method.call(obj);
    if (!IsObject(iterator))
        throw new TypeError();
    return iterator;
}
function IteratorValue(iterResult) {
    return iterResult.value;
}
function IteratorStep(iterator) {
    var result = iterator.next();
    return result.done ? false : result;
}
function IteratorClose(iterator) {
    var f = iterator["return"];
    if (f)
        f.call(iterator);
}
function OrdinaryGetPrototypeOf(O) {
    var proto = Object.getPrototypeOf(O);
    if (typeof O !== "function" || O === functionPrototype)
        return proto;
    if (proto !== functionPrototype)
        return proto;
    var prototype = O.prototype;
    var prototypeProto = prototype && Object.getPrototypeOf(prototype);
    if (prototypeProto == null || prototypeProto === Object.prototype)
        return proto;
    var constructor = prototypeProto.constructor;
    if (typeof constructor !== "function")
        return proto;
    if (constructor === O)
        return proto;
    return constructor;
}
function CreateMapPolyfill() {
    var cacheSentinel = {};
    var arraySentinel = [];
    var MapIterator = (function () {
        function MapIterator(keys, values, selector) {
            this._index = 0;
            this._keys = keys;
            this._values = values;
            this._selector = selector;
        }
        MapIterator.prototype["@@iterator"] = function () { return this; };
        MapIterator.prototype[iteratorSymbol] = function () { return this; };
        MapIterator.prototype.next = function () {
            var index = this._index;
            if (index >= 0 && index < this._keys.length) {
                var result = this._selector(this._keys[index], this._values[index]);
                if (index + 1 >= this._keys.length) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                else {
                    this._index++;
                }
                return { value: result, done: false };
            }
            return { value: undefined, done: true };
        };
        MapIterator.prototype.throw = function (error) {
            if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
            }
            throw error;
        };
        MapIterator.prototype.return = function (value) {
            if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
            }
            return { value: value, done: true };
        };
        return MapIterator;
    }());
    return (function () {
        function Map() {
            this._keys = [];
            this._values = [];
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
        }
        Object.defineProperty(Map.prototype, "size", {
            get: function () { return this._keys.length; },
            enumerable: true,
            configurable: true
        });
        Map.prototype.has = function (key) { return this._find(key, false) >= 0; };
        Map.prototype.get = function (key) {
            var index = this._find(key, false);
            return index >= 0 ? this._values[index] : undefined;
        };
        Map.prototype.set = function (key, value) {
            var index = this._find(key, true);
            this._values[index] = value;
            return this;
        };
        Map.prototype.delete = function (key) {
            var index = this._find(key, false);
            if (index >= 0) {
                var size = this._keys.length;
                for (var i = index + 1; i < size; i++) {
                    this._keys[i - 1] = this._keys[i];
                    this._values[i - 1] = this._values[i];
                }
                this._keys.length--;
                this._values.length--;
                if (key === this._cacheKey) {
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                return true;
            }
            return false;
        };
        Map.prototype.clear = function () {
            this._keys.length = 0;
            this._values.length = 0;
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
        };
        Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
        Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
        Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
        Map.prototype["@@iterator"] = function () { return this.entries(); };
        Map.prototype[iteratorSymbol] = function () { return this.entries(); };
        Map.prototype._find = function (key, insert) {
            if (this._cacheKey === key)
                return this._cacheIndex;
            var index = this._keys.indexOf(key);
            if (index < 0 && insert) {
                index = this._keys.length;
                this._keys.push(key);
                this._values.push(undefined);
            }
            return this._cacheKey = key, this._cacheIndex = index;
        };
        return Map;
    }());
    function getKey(key, _) {
        return key;
    }
    function getValue(_, value) {
        return value;
    }
    function getEntry(key, value) {
        return [key, value];
    }
}
function CreateSetPolyfill() {
    return (function () {
        function Set() {
            this._map = new _Map();
        }
        Object.defineProperty(Set.prototype, "size", {
            get: function () { return this._map.size; },
            enumerable: true,
            configurable: true
        });
        Set.prototype.has = function (value) { return this._map.has(value); };
        Set.prototype.add = function (value) { return this._map.set(value, value), this; };
        Set.prototype.delete = function (value) { return this._map.delete(value); };
        Set.prototype.clear = function () { this._map.clear(); };
        Set.prototype.keys = function () { return this._map.keys(); };
        Set.prototype.values = function () { return this._map.values(); };
        Set.prototype.entries = function () { return this._map.entries(); };
        Set.prototype["@@iterator"] = function () { return this.keys(); };
        Set.prototype[iteratorSymbol] = function () { return this.keys(); };
        return Set;
    }());
}
function CreateWeakMapPolyfill() {
    var UUID_SIZE = 16;
    var keys = createDictionary();
    var rootKey = CreateUniqueKey();
    return (function () {
        function WeakMap() {
            this._key = CreateUniqueKey();
        }
        WeakMap.prototype.has = function (target) {
            var table = GetOrCreateWeakMapTable(target, false);
            return table !== undefined ? HashMap.has(table, this._key) : false;
        };
        WeakMap.prototype.get = function (target) {
            var table = GetOrCreateWeakMapTable(target, false);
            return table !== undefined ? HashMap.get(table, this._key) : undefined;
        };
        WeakMap.prototype.set = function (target, value) {
            var table = GetOrCreateWeakMapTable(target, true);
            table[this._key] = value;
            return this;
        };
        WeakMap.prototype.delete = function (target) {
            var table = GetOrCreateWeakMapTable(target, false);
            return table !== undefined ? delete table[this._key] : false;
        };
        WeakMap.prototype.clear = function () {
            this._key = CreateUniqueKey();
        };
        return WeakMap;
    }());
    function CreateUniqueKey() {
        var key;
        do
            key = "@@WeakMap@@" + CreateUUID();
        while (HashMap.has(keys, key));
        keys[key] = true;
        return key;
    }
    function GetOrCreateWeakMapTable(target, create) {
        if (!hasOwn.call(target, rootKey)) {
            if (!create)
                return undefined;
            Object.defineProperty(target, rootKey, { value: createDictionary() });
        }
        return target[rootKey];
    }
    function FillRandomBytes(buffer, size) {
        for (var i = 0; i < size; ++i)
            buffer[i] = Math.random() * 0xff | 0;
        return buffer;
    }
    function GenRandomBytes(size) {
        if (typeof Uint8Array === "function") {
            if (typeof crypto !== "undefined")
                return crypto.getRandomValues(new Uint8Array(size));
            if (typeof msCrypto !== "undefined")
                return msCrypto.getRandomValues(new Uint8Array(size));
            return FillRandomBytes(new Uint8Array(size), size);
        }
        return FillRandomBytes(new Array(size), size);
    }
    function CreateUUID() {
        var data = GenRandomBytes(UUID_SIZE);
        data[6] = data[6] & 0x4f | 0x40;
        data[8] = data[8] & 0xbf | 0x80;
        var result = "";
        for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8)
                result += "-";
            if (byte < 16)
                result += "0";
            result += byte.toString(16).toLowerCase();
        }
        return result;
    }
}
function MakeDictionary(obj) {
    obj.__ = undefined;
    delete obj.__;
    return obj;
}
(function (__global) {
    if (typeof __global.Reflect !== "undefined") {
        if (__global.Reflect !== Reflect) {
            for (var p in Reflect) {
                if (hasOwn.call(Reflect, p)) {
                    __global.Reflect[p] = Reflect[p];
                }
            }
        }
    }
    else {
        __global.Reflect = Reflect;
    }
})(typeof global !== "undefined" ? global :
    typeof self !== "undefined" ? self :
        Function("return this;")());
