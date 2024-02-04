import require$$0 from "encode-utf8";
import require$$7$1 from "dijkstrajs";
import require$$0$1 from "fs";
import require$$1 from "pngjs";
import require$$0$3 from "util";
import require$$1$2 from "stream";
import require$$1$1 from "os";
import require$$2 from "path";
import require$$3 from "child_process";
import require$$4 from "semver/functions/coerce.js";
import require$$5 from "semver/functions/gte.js";
import require$$0$2 from "detect-libc";
import { c as commonjsRequire } from "../../../../_app/immutable/chunks/_commonjs-dynamic-modules-bf2a53fc.js";
import require$$0$4 from "color";
import require$$2$1 from "events";
var lib = { exports: {} };
var server = {};
var canPromise$1 = function() {
  return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
};
var qrcode = {};
var utils$1 = {};
let toSJISFunction;
const CODEWORDS_COUNT = [
  0,
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
utils$1.getSymbolSize = function getSymbolSize(version2) {
  if (!version2)
    throw new Error('"version" cannot be null or undefined');
  if (version2 < 1 || version2 > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return version2 * 4 + 17;
};
utils$1.getSymbolTotalCodewords = function getSymbolTotalCodewords(version2) {
  return CODEWORDS_COUNT[version2];
};
utils$1.getBCHDigit = function(data) {
  let digit = 0;
  while (data !== 0) {
    digit++;
    data >>>= 1;
  }
  return digit;
};
utils$1.setToSJISFunction = function setToSJISFunction(f) {
  if (typeof f !== "function") {
    throw new Error('"toSJISFunc" is not a valid function.');
  }
  toSJISFunction = f;
};
utils$1.isKanjiModeEnabled = function() {
  return typeof toSJISFunction !== "undefined";
};
utils$1.toSJIS = function toSJIS(kanji2) {
  return toSJISFunction(kanji2);
};
var errorCorrectionLevel = {};
(function(exports) {
  exports.L = { bit: 1 };
  exports.M = { bit: 0 };
  exports.Q = { bit: 3 };
  exports.H = { bit: 2 };
  function fromString(string2) {
    if (typeof string2 !== "string") {
      throw new Error("Param is not a string");
    }
    const lcStr = string2.toLowerCase();
    switch (lcStr) {
      case "l":
      case "low":
        return exports.L;
      case "m":
      case "medium":
        return exports.M;
      case "q":
      case "quartile":
        return exports.Q;
      case "h":
      case "high":
        return exports.H;
      default:
        throw new Error("Unknown EC Level: " + string2);
    }
  }
  exports.isValid = function isValid2(level) {
    return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
  };
  exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
      return value;
    }
    try {
      return fromString(value);
    } catch (e) {
      return defaultValue;
    }
  };
})(errorCorrectionLevel);
function BitBuffer$1() {
  this.buffer = [];
  this.length = 0;
}
BitBuffer$1.prototype = {
  get: function(index) {
    const bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
  },
  put: function(num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) === 1);
    }
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(bit) {
    const bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 128 >>> this.length % 8;
    }
    this.length++;
  }
};
var bitBuffer = BitBuffer$1;
function BitMatrix$1(size) {
  if (!size || size < 1) {
    throw new Error("BitMatrix size must be defined and greater than 0");
  }
  this.size = size;
  this.data = new Uint8Array(size * size);
  this.reservedBit = new Uint8Array(size * size);
}
BitMatrix$1.prototype.set = function(row, col, value, reserved) {
  const index = row * this.size + col;
  this.data[index] = value;
  if (reserved)
    this.reservedBit[index] = true;
};
BitMatrix$1.prototype.get = function(row, col) {
  return this.data[row * this.size + col];
};
BitMatrix$1.prototype.xor = function(row, col, value) {
  this.data[row * this.size + col] ^= value;
};
BitMatrix$1.prototype.isReserved = function(row, col) {
  return this.reservedBit[row * this.size + col];
};
var bitMatrix = BitMatrix$1;
var alignmentPattern = {};
(function(exports) {
  const getSymbolSize3 = utils$1.getSymbolSize;
  exports.getRowColCoords = function getRowColCoords(version2) {
    if (version2 === 1)
      return [];
    const posCount = Math.floor(version2 / 7) + 2;
    const size = getSymbolSize3(version2);
    const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    const positions = [size - 7];
    for (let i = 1; i < posCount - 1; i++) {
      positions[i] = positions[i - 1] - intervals;
    }
    positions.push(6);
    return positions.reverse();
  };
  exports.getPositions = function getPositions2(version2) {
    const coords = [];
    const pos = exports.getRowColCoords(version2);
    const posLength = pos.length;
    for (let i = 0; i < posLength; i++) {
      for (let j = 0; j < posLength; j++) {
        if (i === 0 && j === 0 || i === 0 && j === posLength - 1 || i === posLength - 1 && j === 0) {
          continue;
        }
        coords.push([pos[i], pos[j]]);
      }
    }
    return coords;
  };
})(alignmentPattern);
var finderPattern = {};
const getSymbolSize2 = utils$1.getSymbolSize;
const FINDER_PATTERN_SIZE = 7;
finderPattern.getPositions = function getPositions(version2) {
  const size = getSymbolSize2(version2);
  return [
    [0, 0],
    [size - FINDER_PATTERN_SIZE, 0],
    [0, size - FINDER_PATTERN_SIZE]
  ];
};
var maskPattern = {};
(function(exports) {
  exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  exports.isValid = function isValid2(mask) {
    return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
  };
  exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : void 0;
  };
  exports.getPenaltyN1 = function getPenaltyN1(data) {
    const size = data.size;
    let points = 0;
    let sameCountCol = 0;
    let sameCountRow = 0;
    let lastCol = null;
    let lastRow = null;
    for (let row = 0; row < size; row++) {
      sameCountCol = sameCountRow = 0;
      lastCol = lastRow = null;
      for (let col = 0; col < size; col++) {
        let module = data.get(row, col);
        if (module === lastCol) {
          sameCountCol++;
        } else {
          if (sameCountCol >= 5)
            points += PenaltyScores.N1 + (sameCountCol - 5);
          lastCol = module;
          sameCountCol = 1;
        }
        module = data.get(col, row);
        if (module === lastRow) {
          sameCountRow++;
        } else {
          if (sameCountRow >= 5)
            points += PenaltyScores.N1 + (sameCountRow - 5);
          lastRow = module;
          sameCountRow = 1;
        }
      }
      if (sameCountCol >= 5)
        points += PenaltyScores.N1 + (sameCountCol - 5);
      if (sameCountRow >= 5)
        points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
  };
  exports.getPenaltyN2 = function getPenaltyN2(data) {
    const size = data.size;
    let points = 0;
    for (let row = 0; row < size - 1; row++) {
      for (let col = 0; col < size - 1; col++) {
        const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
        if (last === 4 || last === 0)
          points++;
      }
    }
    return points * PenaltyScores.N2;
  };
  exports.getPenaltyN3 = function getPenaltyN3(data) {
    const size = data.size;
    let points = 0;
    let bitsCol = 0;
    let bitsRow = 0;
    for (let row = 0; row < size; row++) {
      bitsCol = bitsRow = 0;
      for (let col = 0; col < size; col++) {
        bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
        if (col >= 10 && (bitsCol === 1488 || bitsCol === 93))
          points++;
        bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
        if (col >= 10 && (bitsRow === 1488 || bitsRow === 93))
          points++;
      }
    }
    return points * PenaltyScores.N3;
  };
  exports.getPenaltyN4 = function getPenaltyN4(data) {
    let darkCount = 0;
    const modulesCount = data.data.length;
    for (let i = 0; i < modulesCount; i++)
      darkCount += data.data[i];
    const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * PenaltyScores.N4;
  };
  function getMaskAt(maskPattern2, i, j) {
    switch (maskPattern2) {
      case exports.Patterns.PATTERN000:
        return (i + j) % 2 === 0;
      case exports.Patterns.PATTERN001:
        return i % 2 === 0;
      case exports.Patterns.PATTERN010:
        return j % 3 === 0;
      case exports.Patterns.PATTERN011:
        return (i + j) % 3 === 0;
      case exports.Patterns.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
      case exports.Patterns.PATTERN101:
        return i * j % 2 + i * j % 3 === 0;
      case exports.Patterns.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 === 0;
      case exports.Patterns.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + maskPattern2);
    }
  }
  exports.applyMask = function applyMask(pattern, data) {
    const size = data.size;
    for (let col = 0; col < size; col++) {
      for (let row = 0; row < size; row++) {
        if (data.isReserved(row, col))
          continue;
        data.xor(row, col, getMaskAt(pattern, row, col));
      }
    }
  };
  exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    const numPatterns = Object.keys(exports.Patterns).length;
    let bestPattern = 0;
    let lowerPenalty = Infinity;
    for (let p = 0; p < numPatterns; p++) {
      setupFormatFunc(p);
      exports.applyMask(p, data);
      const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
      exports.applyMask(p, data);
      if (penalty < lowerPenalty) {
        lowerPenalty = penalty;
        bestPattern = p;
      }
    }
    return bestPattern;
  };
})(maskPattern);
var errorCorrectionCode = {};
const ECLevel$1 = errorCorrectionLevel;
const EC_BLOCKS_TABLE = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
];
const EC_CODEWORDS_TABLE = [
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
errorCorrectionCode.getBlocksCount = function getBlocksCount(version2, errorCorrectionLevel2) {
  switch (errorCorrectionLevel2) {
    case ECLevel$1.L:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 0];
    case ECLevel$1.M:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 1];
    case ECLevel$1.Q:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 2];
    case ECLevel$1.H:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 3];
    default:
      return void 0;
  }
};
errorCorrectionCode.getTotalCodewordsCount = function getTotalCodewordsCount(version2, errorCorrectionLevel2) {
  switch (errorCorrectionLevel2) {
    case ECLevel$1.L:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 0];
    case ECLevel$1.M:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 1];
    case ECLevel$1.Q:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 2];
    case ECLevel$1.H:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 3];
    default:
      return void 0;
  }
};
var polynomial = {};
var galoisField = {};
const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256);
(function initTables() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;
    x <<= 1;
    if (x & 256) {
      x ^= 285;
    }
  }
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255];
  }
})();
galoisField.log = function log(n) {
  if (n < 1)
    throw new Error("log(" + n + ")");
  return LOG_TABLE[n];
};
galoisField.exp = function exp(n) {
  return EXP_TABLE[n];
};
galoisField.mul = function mul(x, y) {
  if (x === 0 || y === 0)
    return 0;
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};
(function(exports) {
  const GF = galoisField;
  exports.mul = function mul2(p1, p2) {
    const coeff = new Uint8Array(p1.length + p2.length - 1);
    for (let i = 0; i < p1.length; i++) {
      for (let j = 0; j < p2.length; j++) {
        coeff[i + j] ^= GF.mul(p1[i], p2[j]);
      }
    }
    return coeff;
  };
  exports.mod = function mod(divident, divisor) {
    let result = new Uint8Array(divident);
    while (result.length - divisor.length >= 0) {
      const coeff = result[0];
      for (let i = 0; i < divisor.length; i++) {
        result[i] ^= GF.mul(divisor[i], coeff);
      }
      let offset = 0;
      while (offset < result.length && result[offset] === 0)
        offset++;
      result = result.slice(offset);
    }
    return result;
  };
  exports.generateECPolynomial = function generateECPolynomial(degree) {
    let poly = new Uint8Array([1]);
    for (let i = 0; i < degree; i++) {
      poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
    }
    return poly;
  };
})(polynomial);
const Polynomial = polynomial;
function ReedSolomonEncoder$1(degree) {
  this.genPoly = void 0;
  this.degree = degree;
  if (this.degree)
    this.initialize(this.degree);
}
ReedSolomonEncoder$1.prototype.initialize = function initialize(degree) {
  this.degree = degree;
  this.genPoly = Polynomial.generateECPolynomial(this.degree);
};
ReedSolomonEncoder$1.prototype.encode = function encode(data) {
  if (!this.genPoly) {
    throw new Error("Encoder not initialized");
  }
  const paddedData = new Uint8Array(data.length + this.degree);
  paddedData.set(data);
  const remainder = Polynomial.mod(paddedData, this.genPoly);
  const start = this.degree - remainder.length;
  if (start > 0) {
    const buff = new Uint8Array(this.degree);
    buff.set(remainder, start);
    return buff;
  }
  return remainder;
};
var reedSolomonEncoder = ReedSolomonEncoder$1;
var version$1 = {};
var mode = {};
var versionCheck = {};
versionCheck.isValid = function isValid(version2) {
  return !isNaN(version2) && version2 >= 1 && version2 <= 40;
};
var regex = {};
const numeric = "[0-9]+";
const alphanumeric = "[A-Z $%*+\\-./:]+";
let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
kanji = kanji.replace(/u/g, "\\u");
const byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
regex.KANJI = new RegExp(kanji, "g");
regex.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
regex.BYTE = new RegExp(byte, "g");
regex.NUMERIC = new RegExp(numeric, "g");
regex.ALPHANUMERIC = new RegExp(alphanumeric, "g");
const TEST_KANJI = new RegExp("^" + kanji + "$");
const TEST_NUMERIC = new RegExp("^" + numeric + "$");
const TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
regex.testKanji = function testKanji(str) {
  return TEST_KANJI.test(str);
};
regex.testNumeric = function testNumeric(str) {
  return TEST_NUMERIC.test(str);
};
regex.testAlphanumeric = function testAlphanumeric(str) {
  return TEST_ALPHANUMERIC.test(str);
};
(function(exports) {
  const VersionCheck = versionCheck;
  const Regex = regex;
  exports.NUMERIC = {
    id: "Numeric",
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  };
  exports.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  };
  exports.BYTE = {
    id: "Byte",
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  };
  exports.KANJI = {
    id: "Kanji",
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  };
  exports.MIXED = {
    bit: -1
  };
  exports.getCharCountIndicator = function getCharCountIndicator(mode2, version2) {
    if (!mode2.ccBits)
      throw new Error("Invalid mode: " + mode2);
    if (!VersionCheck.isValid(version2)) {
      throw new Error("Invalid version: " + version2);
    }
    if (version2 >= 1 && version2 < 10)
      return mode2.ccBits[0];
    else if (version2 < 27)
      return mode2.ccBits[1];
    return mode2.ccBits[2];
  };
  exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr))
      return exports.NUMERIC;
    else if (Regex.testAlphanumeric(dataStr))
      return exports.ALPHANUMERIC;
    else if (Regex.testKanji(dataStr))
      return exports.KANJI;
    else
      return exports.BYTE;
  };
  exports.toString = function toString2(mode2) {
    if (mode2 && mode2.id)
      return mode2.id;
    throw new Error("Invalid mode");
  };
  exports.isValid = function isValid2(mode2) {
    return mode2 && mode2.bit && mode2.ccBits;
  };
  function fromString(string2) {
    if (typeof string2 !== "string") {
      throw new Error("Param is not a string");
    }
    const lcStr = string2.toLowerCase();
    switch (lcStr) {
      case "numeric":
        return exports.NUMERIC;
      case "alphanumeric":
        return exports.ALPHANUMERIC;
      case "kanji":
        return exports.KANJI;
      case "byte":
        return exports.BYTE;
      default:
        throw new Error("Unknown mode: " + string2);
    }
  }
  exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
      return value;
    }
    try {
      return fromString(value);
    } catch (e) {
      return defaultValue;
    }
  };
})(mode);
(function(exports) {
  const Utils2 = utils$1;
  const ECCode2 = errorCorrectionCode;
  const ECLevel2 = errorCorrectionLevel;
  const Mode2 = mode;
  const VersionCheck = versionCheck;
  const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
  const G18_BCH = Utils2.getBCHDigit(G18);
  function getBestVersionForDataLength(mode2, length, errorCorrectionLevel2) {
    for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
      if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel2, mode2)) {
        return currentVersion;
      }
    }
    return void 0;
  }
  function getReservedBitsCount(mode2, version2) {
    return Mode2.getCharCountIndicator(mode2, version2) + 4;
  }
  function getTotalBitsFromDataArray(segments2, version2) {
    let totalBits = 0;
    segments2.forEach(function(data) {
      const reservedBits = getReservedBitsCount(data.mode, version2);
      totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
  }
  function getBestVersionForMixedData(segments2, errorCorrectionLevel2) {
    for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
      const length = getTotalBitsFromDataArray(segments2, currentVersion);
      if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel2, Mode2.MIXED)) {
        return currentVersion;
      }
    }
    return void 0;
  }
  exports.from = function from(value, defaultValue) {
    if (VersionCheck.isValid(value)) {
      return parseInt(value, 10);
    }
    return defaultValue;
  };
  exports.getCapacity = function getCapacity(version2, errorCorrectionLevel2, mode2) {
    if (!VersionCheck.isValid(version2)) {
      throw new Error("Invalid QR Code version");
    }
    if (typeof mode2 === "undefined")
      mode2 = Mode2.BYTE;
    const totalCodewords = Utils2.getSymbolTotalCodewords(version2);
    const ecTotalCodewords = ECCode2.getTotalCodewordsCount(version2, errorCorrectionLevel2);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode2 === Mode2.MIXED)
      return dataTotalCodewordsBits;
    const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode2, version2);
    switch (mode2) {
      case Mode2.NUMERIC:
        return Math.floor(usableBits / 10 * 3);
      case Mode2.ALPHANUMERIC:
        return Math.floor(usableBits / 11 * 2);
      case Mode2.KANJI:
        return Math.floor(usableBits / 13);
      case Mode2.BYTE:
      default:
        return Math.floor(usableBits / 8);
    }
  };
  exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel2) {
    let seg;
    const ecl = ECLevel2.from(errorCorrectionLevel2, ECLevel2.M);
    if (Array.isArray(data)) {
      if (data.length > 1) {
        return getBestVersionForMixedData(data, ecl);
      }
      if (data.length === 0) {
        return 1;
      }
      seg = data[0];
    } else {
      seg = data;
    }
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
  };
  exports.getEncodedBits = function getEncodedBits2(version2) {
    if (!VersionCheck.isValid(version2) || version2 < 7) {
      throw new Error("Invalid QR Code version");
    }
    let d = version2 << 12;
    while (Utils2.getBCHDigit(d) - G18_BCH >= 0) {
      d ^= G18 << Utils2.getBCHDigit(d) - G18_BCH;
    }
    return version2 << 12 | d;
  };
})(version$1);
var formatInfo = {};
const Utils$3 = utils$1;
const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
const G15_BCH = Utils$3.getBCHDigit(G15);
formatInfo.getEncodedBits = function getEncodedBits(errorCorrectionLevel2, mask) {
  const data = errorCorrectionLevel2.bit << 3 | mask;
  let d = data << 10;
  while (Utils$3.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= G15 << Utils$3.getBCHDigit(d) - G15_BCH;
  }
  return (data << 10 | d) ^ G15_MASK;
};
var segments = {};
const Mode$4 = mode;
function NumericData(data) {
  this.mode = Mode$4.NUMERIC;
  this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
  return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
  return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength2() {
  return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer2) {
  let i, group, value;
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3);
    value = parseInt(group, 10);
    bitBuffer2.put(value, 10);
  }
  const remainingNum = this.data.length - i;
  if (remainingNum > 0) {
    group = this.data.substr(i);
    value = parseInt(group, 10);
    bitBuffer2.put(value, remainingNum * 3 + 1);
  }
};
var numericData = NumericData;
const Mode$3 = mode;
const ALPHA_NUM_CHARS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function AlphanumericData(data) {
  this.mode = Mode$3.ALPHANUMERIC;
  this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength3(length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength2() {
  return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength4() {
  return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write2(bitBuffer2) {
  let i;
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
    bitBuffer2.put(value, 11);
  }
  if (this.data.length % 2) {
    bitBuffer2.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
  }
};
var alphanumericData = AlphanumericData;
const encodeUtf8 = require$$0;
const Mode$2 = mode;
function ByteData(data) {
  this.mode = Mode$2.BYTE;
  if (typeof data === "string") {
    data = encodeUtf8(data);
  }
  this.data = new Uint8Array(data);
}
ByteData.getBitsLength = function getBitsLength5(length) {
  return length * 8;
};
ByteData.prototype.getLength = function getLength3() {
  return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength6() {
  return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function(bitBuffer2) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer2.put(this.data[i], 8);
  }
};
var byteData = ByteData;
const Mode$1 = mode;
const Utils$2 = utils$1;
function KanjiData(data) {
  this.mode = Mode$1.KANJI;
  this.data = data;
}
KanjiData.getBitsLength = function getBitsLength7(length) {
  return length * 13;
};
KanjiData.prototype.getLength = function getLength4() {
  return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength8() {
  return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function(bitBuffer2) {
  let i;
  for (i = 0; i < this.data.length; i++) {
    let value = Utils$2.toSJIS(this.data[i]);
    if (value >= 33088 && value <= 40956) {
      value -= 33088;
    } else if (value >= 57408 && value <= 60351) {
      value -= 49472;
    } else {
      throw new Error(
        "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
      );
    }
    value = (value >>> 8 & 255) * 192 + (value & 255);
    bitBuffer2.put(value, 13);
  }
};
var kanjiData = KanjiData;
(function(exports) {
  const Mode2 = mode;
  const NumericData2 = numericData;
  const AlphanumericData2 = alphanumericData;
  const ByteData2 = byteData;
  const KanjiData2 = kanjiData;
  const Regex = regex;
  const Utils2 = utils$1;
  const dijkstra = require$$7$1;
  function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
  }
  function getSegments(regex2, mode2, str) {
    const segments2 = [];
    let result;
    while ((result = regex2.exec(str)) !== null) {
      segments2.push({
        data: result[0],
        index: result.index,
        mode: mode2,
        length: result[0].length
      });
    }
    return segments2;
  }
  function getSegmentsFromString(dataStr) {
    const numSegs = getSegments(Regex.NUMERIC, Mode2.NUMERIC, dataStr);
    const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode2.ALPHANUMERIC, dataStr);
    let byteSegs;
    let kanjiSegs;
    if (Utils2.isKanjiModeEnabled()) {
      byteSegs = getSegments(Regex.BYTE, Mode2.BYTE, dataStr);
      kanjiSegs = getSegments(Regex.KANJI, Mode2.KANJI, dataStr);
    } else {
      byteSegs = getSegments(Regex.BYTE_KANJI, Mode2.BYTE, dataStr);
      kanjiSegs = [];
    }
    const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
      return s1.index - s2.index;
    }).map(function(obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      };
    });
  }
  function getSegmentBitsLength(length, mode2) {
    switch (mode2) {
      case Mode2.NUMERIC:
        return NumericData2.getBitsLength(length);
      case Mode2.ALPHANUMERIC:
        return AlphanumericData2.getBitsLength(length);
      case Mode2.KANJI:
        return KanjiData2.getBitsLength(length);
      case Mode2.BYTE:
        return ByteData2.getBitsLength(length);
    }
  }
  function mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
      const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
      if (prevSeg && prevSeg.mode === curr.mode) {
        acc[acc.length - 1].data += curr.data;
        return acc;
      }
      acc.push(curr);
      return acc;
    }, []);
  }
  function buildNodes(segs) {
    const nodes = [];
    for (let i = 0; i < segs.length; i++) {
      const seg = segs[i];
      switch (seg.mode) {
        case Mode2.NUMERIC:
          nodes.push([
            seg,
            { data: seg.data, mode: Mode2.ALPHANUMERIC, length: seg.length },
            { data: seg.data, mode: Mode2.BYTE, length: seg.length }
          ]);
          break;
        case Mode2.ALPHANUMERIC:
          nodes.push([
            seg,
            { data: seg.data, mode: Mode2.BYTE, length: seg.length }
          ]);
          break;
        case Mode2.KANJI:
          nodes.push([
            seg,
            { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
          ]);
          break;
        case Mode2.BYTE:
          nodes.push([
            { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
          ]);
      }
    }
    return nodes;
  }
  function buildGraph(nodes, version2) {
    const table = {};
    const graph = { start: {} };
    let prevNodeIds = ["start"];
    for (let i = 0; i < nodes.length; i++) {
      const nodeGroup = nodes[i];
      const currentNodeIds = [];
      for (let j = 0; j < nodeGroup.length; j++) {
        const node = nodeGroup[j];
        const key = "" + i + j;
        currentNodeIds.push(key);
        table[key] = { node, lastCount: 0 };
        graph[key] = {};
        for (let n = 0; n < prevNodeIds.length; n++) {
          const prevNodeId = prevNodeIds[n];
          if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
            graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
            table[prevNodeId].lastCount += node.length;
          } else {
            if (table[prevNodeId])
              table[prevNodeId].lastCount = node.length;
            graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode2.getCharCountIndicator(node.mode, version2);
          }
        }
      }
      prevNodeIds = currentNodeIds;
    }
    for (let n = 0; n < prevNodeIds.length; n++) {
      graph[prevNodeIds[n]].end = 0;
    }
    return { map: graph, table };
  }
  function buildSingleSegment(data, modesHint) {
    let mode2;
    const bestMode = Mode2.getBestModeForData(data);
    mode2 = Mode2.from(modesHint, bestMode);
    if (mode2 !== Mode2.BYTE && mode2.bit < bestMode.bit) {
      throw new Error('"' + data + '" cannot be encoded with mode ' + Mode2.toString(mode2) + ".\n Suggested mode is: " + Mode2.toString(bestMode));
    }
    if (mode2 === Mode2.KANJI && !Utils2.isKanjiModeEnabled()) {
      mode2 = Mode2.BYTE;
    }
    switch (mode2) {
      case Mode2.NUMERIC:
        return new NumericData2(data);
      case Mode2.ALPHANUMERIC:
        return new AlphanumericData2(data);
      case Mode2.KANJI:
        return new KanjiData2(data);
      case Mode2.BYTE:
        return new ByteData2(data);
    }
  }
  exports.fromArray = function fromArray(array) {
    return array.reduce(function(acc, seg) {
      if (typeof seg === "string") {
        acc.push(buildSingleSegment(seg, null));
      } else if (seg.data) {
        acc.push(buildSingleSegment(seg.data, seg.mode));
      }
      return acc;
    }, []);
  };
  exports.fromString = function fromString(data, version2) {
    const segs = getSegmentsFromString(data, Utils2.isKanjiModeEnabled());
    const nodes = buildNodes(segs);
    const graph = buildGraph(nodes, version2);
    const path2 = dijkstra.find_path(graph.map, "start", "end");
    const optimizedSegs = [];
    for (let i = 1; i < path2.length - 1; i++) {
      optimizedSegs.push(graph.table[path2[i]].node);
    }
    return exports.fromArray(mergeSegments(optimizedSegs));
  };
  exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(
      getSegmentsFromString(data, Utils2.isKanjiModeEnabled())
    );
  };
})(segments);
const Utils$1 = utils$1;
const ECLevel = errorCorrectionLevel;
const BitBuffer = bitBuffer;
const BitMatrix = bitMatrix;
const AlignmentPattern = alignmentPattern;
const FinderPattern = finderPattern;
const MaskPattern = maskPattern;
const ECCode = errorCorrectionCode;
const ReedSolomonEncoder = reedSolomonEncoder;
const Version = version$1;
const FormatInfo = formatInfo;
const Mode = mode;
const Segments = segments;
function setupFinderPattern(matrix, version2) {
  const size = matrix.size;
  const pos = FinderPattern.getPositions(version2);
  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];
    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r)
        continue;
      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c)
          continue;
        if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}
function setupTimingPattern(matrix) {
  const size = matrix.size;
  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0;
    matrix.set(r, 6, value, true);
    matrix.set(6, r, value, true);
  }
}
function setupAlignmentPattern(matrix, version2) {
  const pos = AlignmentPattern.getPositions(version2);
  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];
    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}
function setupVersionInfo(matrix, version2) {
  const size = matrix.size;
  const bits = Version.getEncodedBits(version2);
  let row, col, mod;
  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3);
    col = i % 3 + size - 8 - 3;
    mod = (bits >> i & 1) === 1;
    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}
function setupFormatInfo(matrix, errorCorrectionLevel2, maskPattern2) {
  const size = matrix.size;
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel2, maskPattern2);
  let i, mod;
  for (i = 0; i < 15; i++) {
    mod = (bits >> i & 1) === 1;
    if (i < 6) {
      matrix.set(i, 8, mod, true);
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i, 8, mod, true);
    }
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true);
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i - 1, mod, true);
    }
  }
  matrix.set(size - 8, 8, 1, true);
}
function setupData(matrix, data) {
  const size = matrix.size;
  let inc = -1;
  let row = size - 1;
  let bitIndex = 7;
  let byteIndex = 0;
  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6)
      col--;
    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false;
          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) === 1;
          }
          matrix.set(row, col - c, dark);
          bitIndex--;
          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }
      row += inc;
      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
}
function createData(version2, errorCorrectionLevel2, segments2) {
  const buffer2 = new BitBuffer();
  segments2.forEach(function(data) {
    buffer2.put(data.mode.bit, 4);
    buffer2.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version2));
    data.write(buffer2);
  });
  const totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
  if (buffer2.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer2.put(0, 4);
  }
  while (buffer2.getLengthInBits() % 8 !== 0) {
    buffer2.putBit(0);
  }
  const remainingByte = (dataTotalCodewordsBits - buffer2.getLengthInBits()) / 8;
  for (let i = 0; i < remainingByte; i++) {
    buffer2.put(i % 2 ? 17 : 236, 8);
  }
  return createCodewords(buffer2, version2, errorCorrectionLevel2);
}
function createCodewords(bitBuffer2, version2, errorCorrectionLevel2) {
  const totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
  const dataTotalCodewords = totalCodewords - ecTotalCodewords;
  const ecTotalBlocks = ECCode.getBlocksCount(version2, errorCorrectionLevel2);
  const blocksInGroup2 = totalCodewords % ecTotalBlocks;
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
  const rs = new ReedSolomonEncoder(ecCount);
  let offset = 0;
  const dcData = new Array(ecTotalBlocks);
  const ecData = new Array(ecTotalBlocks);
  let maxDataSize = 0;
  const buffer2 = new Uint8Array(bitBuffer2.buffer);
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
    dcData[b] = buffer2.slice(offset, offset + dataSize);
    ecData[b] = rs.encode(dcData[b]);
    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  }
  const data = new Uint8Array(totalCodewords);
  let index = 0;
  let i, r;
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i];
      }
    }
  }
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i];
    }
  }
  return data;
}
function createSymbol(data, version2, errorCorrectionLevel2, maskPattern2) {
  let segments2;
  if (Array.isArray(data)) {
    segments2 = Segments.fromArray(data);
  } else if (typeof data === "string") {
    let estimatedVersion = version2;
    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data);
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel2);
    }
    segments2 = Segments.fromString(data, estimatedVersion || 40);
  } else {
    throw new Error("Invalid data");
  }
  const bestVersion = Version.getBestVersionForData(segments2, errorCorrectionLevel2);
  if (!bestVersion) {
    throw new Error("The amount of data is too big to be stored in a QR Code");
  }
  if (!version2) {
    version2 = bestVersion;
  } else if (version2 < bestVersion) {
    throw new Error(
      "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
    );
  }
  const dataBits = createData(version2, errorCorrectionLevel2, segments2);
  const moduleCount = Utils$1.getSymbolSize(version2);
  const modules = new BitMatrix(moduleCount);
  setupFinderPattern(modules, version2);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version2);
  setupFormatInfo(modules, errorCorrectionLevel2, 0);
  if (version2 >= 7) {
    setupVersionInfo(modules, version2);
  }
  setupData(modules, dataBits);
  if (isNaN(maskPattern2)) {
    maskPattern2 = MaskPattern.getBestMask(
      modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel2)
    );
  }
  MaskPattern.applyMask(maskPattern2, modules);
  setupFormatInfo(modules, errorCorrectionLevel2, maskPattern2);
  return {
    modules,
    version: version2,
    errorCorrectionLevel: errorCorrectionLevel2,
    maskPattern: maskPattern2,
    segments: segments2
  };
}
qrcode.create = function create(data, options) {
  if (typeof data === "undefined" || data === "") {
    throw new Error("No input text");
  }
  let errorCorrectionLevel2 = ECLevel.M;
  let version2;
  let mask;
  if (typeof options !== "undefined") {
    errorCorrectionLevel2 = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
    version2 = Version.from(options.version);
    mask = MaskPattern.from(options.maskPattern);
    if (options.toSJISFunc) {
      Utils$1.setToSJISFunction(options.toSJISFunc);
    }
  }
  return createSymbol(data, version2, errorCorrectionLevel2, mask);
};
var png$1 = {};
var utils = {};
(function(exports) {
  function hex2rgba(hex) {
    if (typeof hex === "number") {
      hex = hex.toString();
    }
    if (typeof hex !== "string") {
      throw new Error("Color should be defined as hex string");
    }
    let hexCode = hex.slice().replace("#", "").split("");
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
      throw new Error("Invalid hex color: " + hex);
    }
    if (hexCode.length === 3 || hexCode.length === 4) {
      hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
        return [c, c];
      }));
    }
    if (hexCode.length === 6)
      hexCode.push("F", "F");
    const hexValue = parseInt(hexCode.join(""), 16);
    return {
      r: hexValue >> 24 & 255,
      g: hexValue >> 16 & 255,
      b: hexValue >> 8 & 255,
      a: hexValue & 255,
      hex: "#" + hexCode.slice(0, 6).join("")
    };
  }
  exports.getOptions = function getOptions(options) {
    if (!options)
      options = {};
    if (!options.color)
      options.color = {};
    const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
    const width = options.width && options.width >= 21 ? options.width : void 0;
    const scale = options.scale || 4;
    return {
      width,
      scale: width ? 4 : scale,
      margin,
      color: {
        dark: hex2rgba(options.color.dark || "#000000ff"),
        light: hex2rgba(options.color.light || "#ffffffff")
      },
      type: options.type,
      rendererOpts: options.rendererOpts || {}
    };
  };
  exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
  };
  exports.getImageWidth = function getImageWidth(qrSize, opts) {
    const scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
  };
  exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    const size = qr.modules.size;
    const data = qr.modules.data;
    const scale = exports.getScale(size, opts);
    const symbolSize = Math.floor((size + opts.margin * 2) * scale);
    const scaledMargin = opts.margin * scale;
    const palette = [opts.color.light, opts.color.dark];
    for (let i = 0; i < symbolSize; i++) {
      for (let j = 0; j < symbolSize; j++) {
        let posDst = (i * symbolSize + j) * 4;
        let pxColor = opts.color.light;
        if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
          const iSrc = Math.floor((i - scaledMargin) / scale);
          const jSrc = Math.floor((j - scaledMargin) / scale);
          pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
        }
        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
      }
    }
  };
})(utils);
(function(exports) {
  const fs2 = require$$0$1;
  const PNG = require$$1.PNG;
  const Utils2 = utils;
  exports.render = function render3(qrData, options) {
    const opts = Utils2.getOptions(options);
    const pngOpts = opts.rendererOpts;
    const size = Utils2.getImageWidth(qrData.modules.size, opts);
    pngOpts.width = size;
    pngOpts.height = size;
    const pngImage = new PNG(pngOpts);
    Utils2.qrToImageData(pngImage.data, qrData, opts);
    return pngImage;
  };
  exports.renderToDataURL = function renderToDataURL(qrData, options, cb) {
    if (typeof cb === "undefined") {
      cb = options;
      options = void 0;
    }
    exports.renderToBuffer(qrData, options, function(err, output2) {
      if (err)
        cb(err);
      let url = "data:image/png;base64,";
      url += output2.toString("base64");
      cb(null, url);
    });
  };
  exports.renderToBuffer = function renderToBuffer(qrData, options, cb) {
    if (typeof cb === "undefined") {
      cb = options;
      options = void 0;
    }
    const png2 = exports.render(qrData, options);
    const buffer2 = [];
    png2.on("error", cb);
    png2.on("data", function(data) {
      buffer2.push(data);
    });
    png2.on("end", function() {
      cb(null, Buffer.concat(buffer2));
    });
    png2.pack();
  };
  exports.renderToFile = function renderToFile(path2, qrData, options, cb) {
    if (typeof cb === "undefined") {
      cb = options;
      options = void 0;
    }
    let called = false;
    const done = (...args) => {
      if (called)
        return;
      called = true;
      cb.apply(null, args);
    };
    const stream2 = fs2.createWriteStream(path2);
    stream2.on("error", done);
    stream2.on("close", done);
    exports.renderToFileStream(stream2, qrData, options);
  };
  exports.renderToFileStream = function renderToFileStream(stream2, qrData, options) {
    const png2 = exports.render(qrData, options);
    png2.pack().pipe(stream2);
  };
})(png$1);
var utf8 = {};
(function(exports) {
  const Utils2 = utils;
  const BLOCK_CHAR = {
    WW: " ",
    WB: "\u2584",
    BB: "\u2588",
    BW: "\u2580"
  };
  const INVERTED_BLOCK_CHAR = {
    BB: " ",
    BW: "\u2584",
    WW: "\u2588",
    WB: "\u2580"
  };
  function getBlockChar(top, bottom, blocks) {
    if (top && bottom)
      return blocks.BB;
    if (top && !bottom)
      return blocks.BW;
    if (!top && bottom)
      return blocks.WB;
    return blocks.WW;
  }
  exports.render = function(qrData, options, cb) {
    const opts = Utils2.getOptions(options);
    let blocks = BLOCK_CHAR;
    if (opts.color.dark.hex === "#ffffff" || opts.color.light.hex === "#000000") {
      blocks = INVERTED_BLOCK_CHAR;
    }
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    let output2 = "";
    let hMargin = Array(size + opts.margin * 2 + 1).join(blocks.WW);
    hMargin = Array(opts.margin / 2 + 1).join(hMargin + "\n");
    const vMargin = Array(opts.margin + 1).join(blocks.WW);
    output2 += hMargin;
    for (let i = 0; i < size; i += 2) {
      output2 += vMargin;
      for (let j = 0; j < size; j++) {
        const topModule = data[i * size + j];
        const bottomModule = data[(i + 1) * size + j];
        output2 += getBlockChar(topModule, bottomModule, blocks);
      }
      output2 += vMargin + "\n";
    }
    output2 += hMargin.slice(0, -1);
    if (typeof cb === "function") {
      cb(null, output2);
    }
    return output2;
  };
  exports.renderToFile = function renderToFile(path2, qrData, options, cb) {
    if (typeof cb === "undefined") {
      cb = options;
      options = void 0;
    }
    const fs2 = require$$0$1;
    const utf82 = exports.render(qrData, options);
    fs2.writeFile(path2, utf82, cb);
  };
})(utf8);
var terminal$1 = {};
var terminal = {};
terminal.render = function(qrData, options, cb) {
  const size = qrData.modules.size;
  const data = qrData.modules.data;
  const black = "\x1B[40m  \x1B[0m";
  const white = "\x1B[47m  \x1B[0m";
  let output2 = "";
  const hMargin = Array(size + 3).join(white);
  const vMargin = Array(2).join(white);
  output2 += hMargin + "\n";
  for (let i = 0; i < size; ++i) {
    output2 += white;
    for (let j = 0; j < size; j++) {
      output2 += data[i * size + j] ? black : white;
    }
    output2 += vMargin + "\n";
  }
  output2 += hMargin + "\n";
  if (typeof cb === "function") {
    cb(null, output2);
  }
  return output2;
};
var terminalSmall = {};
const backgroundWhite = "\x1B[47m";
const backgroundBlack = "\x1B[40m";
const foregroundWhite = "\x1B[37m";
const foregroundBlack = "\x1B[30m";
const reset = "\x1B[0m";
const lineSetupNormal = backgroundWhite + foregroundBlack;
const lineSetupInverse = backgroundBlack + foregroundWhite;
const createPalette = function(lineSetup, foregroundWhite2, foregroundBlack2) {
  return {
    "00": reset + " " + lineSetup,
    "01": reset + foregroundWhite2 + "\u2584" + lineSetup,
    "02": reset + foregroundBlack2 + "\u2584" + lineSetup,
    10: reset + foregroundWhite2 + "\u2580" + lineSetup,
    11: " ",
    12: "\u2584",
    20: reset + foregroundBlack2 + "\u2580" + lineSetup,
    21: "\u2580",
    22: "\u2588"
  };
};
const mkCodePixel = function(modules, size, x, y) {
  const sizePlus = size + 1;
  if (x >= sizePlus || y >= sizePlus || y < -1 || x < -1)
    return "0";
  if (x >= size || y >= size || y < 0 || x < 0)
    return "1";
  const idx = y * size + x;
  return modules[idx] ? "2" : "1";
};
const mkCode = function(modules, size, x, y) {
  return mkCodePixel(modules, size, x, y) + mkCodePixel(modules, size, x, y + 1);
};
terminalSmall.render = function(qrData, options, cb) {
  const size = qrData.modules.size;
  const data = qrData.modules.data;
  const inverse = !!(options && options.inverse);
  const lineSetup = options && options.inverse ? lineSetupInverse : lineSetupNormal;
  const white = inverse ? foregroundBlack : foregroundWhite;
  const black = inverse ? foregroundWhite : foregroundBlack;
  const palette = createPalette(lineSetup, white, black);
  const newLine = reset + "\n" + lineSetup;
  let output2 = lineSetup;
  for (let y = -1; y < size + 1; y += 2) {
    for (let x = -1; x < size; x++) {
      output2 += palette[mkCode(data, size, x, y)];
    }
    output2 += palette[mkCode(data, size, size, y)] + newLine;
  }
  output2 += reset;
  if (typeof cb === "function") {
    cb(null, output2);
  }
  return output2;
};
const big = terminal;
const small = terminalSmall;
terminal$1.render = function(qrData, options, cb) {
  if (options && options.small) {
    return small.render(qrData, options, cb);
  }
  return big.render(qrData, options, cb);
};
var svg = {};
var svgTag = {};
const Utils = utils;
function getColorAttrib(color2, attrib) {
  const alpha = color2.a / 255;
  const str = attrib + '="' + color2.hex + '"';
  return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
  let str = cmd + x;
  if (typeof y !== "undefined")
    str += " " + y;
  return str;
}
function qrToPath(data, size, margin) {
  let path2 = "";
  let moveBy = 0;
  let newRow = false;
  let lineLength = 0;
  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size);
    const row = Math.floor(i / size);
    if (!col && !newRow)
      newRow = true;
    if (data[i]) {
      lineLength++;
      if (!(i > 0 && col > 0 && data[i - 1])) {
        path2 += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
        moveBy = 0;
        newRow = false;
      }
      if (!(col + 1 < size && data[i + 1])) {
        path2 += svgCmd("h", lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }
  return path2;
}
svgTag.render = function render(qrData, options, cb) {
  const opts = Utils.getOptions(options);
  const size = qrData.modules.size;
  const data = qrData.modules.data;
  const qrcodesize = size + opts.margin * 2;
  const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
  const path2 = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
  const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
  const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
  const svgTag2 = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path2 + "</svg>\n";
  if (typeof cb === "function") {
    cb(null, svgTag2);
  }
  return svgTag2;
};
(function(exports) {
  const svgTagRenderer = svgTag;
  exports.render = svgTagRenderer.render;
  exports.renderToFile = function renderToFile(path2, qrData, options, cb) {
    if (typeof cb === "undefined") {
      cb = options;
      options = void 0;
    }
    const fs2 = require$$0$1;
    const svgTag2 = exports.render(qrData, options);
    const xmlStr = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' + svgTag2;
    fs2.writeFile(path2, xmlStr, cb);
  };
})(svg);
var browser = {};
var canvas = {};
var hasRequiredCanvas;
function requireCanvas() {
  if (hasRequiredCanvas)
    return canvas;
  hasRequiredCanvas = 1;
  (function(exports) {
    const Utils2 = utils;
    function clearCanvas(ctx, canvas2, size) {
      ctx.clearRect(0, 0, canvas2.width, canvas2.height);
      if (!canvas2.style)
        canvas2.style = {};
      canvas2.height = size;
      canvas2.width = size;
      canvas2.style.height = size + "px";
      canvas2.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render3(qrData, canvas2, options) {
      let opts = options;
      let canvasEl = canvas2;
      if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
        opts = canvas2;
        canvas2 = void 0;
      }
      if (!canvas2) {
        canvasEl = getCanvasElement();
      }
      opts = Utils2.getOptions(opts);
      const size = Utils2.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils2.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas2, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
        opts = canvas2;
        canvas2 = void 0;
      }
      if (!opts)
        opts = {};
      const canvasEl = exports.render(qrData, canvas2, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  })(canvas);
  return canvas;
}
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser)
    return browser;
  hasRequiredBrowser = 1;
  const canPromise2 = canPromise$1;
  const QRCode2 = qrcode;
  const CanvasRenderer = requireCanvas();
  const SvgRenderer2 = svgTag;
  function renderCanvas(renderFunc, canvas2, text, opts, cb) {
    const args = [].slice.call(arguments, 1);
    const argsNum = args.length;
    const isLastArgCb = typeof args[argsNum - 1] === "function";
    if (!isLastArgCb && !canPromise2()) {
      throw new Error("Callback required as last argument");
    }
    if (isLastArgCb) {
      if (argsNum < 2) {
        throw new Error("Too few arguments provided");
      }
      if (argsNum === 2) {
        cb = text;
        text = canvas2;
        canvas2 = opts = void 0;
      } else if (argsNum === 3) {
        if (canvas2.getContext && typeof cb === "undefined") {
          cb = opts;
          opts = void 0;
        } else {
          cb = opts;
          opts = text;
          text = canvas2;
          canvas2 = void 0;
        }
      }
    } else {
      if (argsNum < 1) {
        throw new Error("Too few arguments provided");
      }
      if (argsNum === 1) {
        text = canvas2;
        canvas2 = opts = void 0;
      } else if (argsNum === 2 && !canvas2.getContext) {
        opts = text;
        text = canvas2;
        canvas2 = void 0;
      }
      return new Promise(function(resolve, reject) {
        try {
          const data = QRCode2.create(text, opts);
          resolve(renderFunc(data, canvas2, opts));
        } catch (e) {
          reject(e);
        }
      });
    }
    try {
      const data = QRCode2.create(text, opts);
      cb(null, renderFunc(data, canvas2, opts));
    } catch (e) {
      cb(e);
    }
  }
  browser.create = QRCode2.create;
  browser.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
  browser.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
  browser.toString = renderCanvas.bind(null, function(data, _, opts) {
    return SvgRenderer2.render(data, opts);
  });
  return browser;
}
const canPromise = canPromise$1;
const QRCode = qrcode;
const PngRenderer = png$1;
const Utf8Renderer = utf8;
const TerminalRenderer = terminal$1;
const SvgRenderer = svg;
function checkParams(text, opts, cb) {
  if (typeof text === "undefined") {
    throw new Error("String required as first argument");
  }
  if (typeof cb === "undefined") {
    cb = opts;
    opts = {};
  }
  if (typeof cb !== "function") {
    if (!canPromise()) {
      throw new Error("Callback required as last argument");
    } else {
      opts = cb || {};
      cb = null;
    }
  }
  return {
    opts,
    cb
  };
}
function getTypeFromFilename(path2) {
  return path2.slice((path2.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();
}
function getRendererFromType(type) {
  switch (type) {
    case "svg":
      return SvgRenderer;
    case "txt":
    case "utf8":
      return Utf8Renderer;
    case "png":
    case "image/png":
    default:
      return PngRenderer;
  }
}
function getStringRendererFromType(type) {
  switch (type) {
    case "svg":
      return SvgRenderer;
    case "terminal":
      return TerminalRenderer;
    case "utf8":
    default:
      return Utf8Renderer;
  }
}
function render2(renderFunc, text, params) {
  if (!params.cb) {
    return new Promise(function(resolve, reject) {
      try {
        const data = QRCode.create(text, params.opts);
        return renderFunc(data, params.opts, function(err, data2) {
          return err ? reject(err) : resolve(data2);
        });
      } catch (e) {
        reject(e);
      }
    });
  }
  try {
    const data = QRCode.create(text, params.opts);
    return renderFunc(data, params.opts, params.cb);
  } catch (e) {
    params.cb(e);
  }
}
server.create = QRCode.create;
server.toCanvas = requireBrowser().toCanvas;
server.toString = function toString(text, opts, cb) {
  const params = checkParams(text, opts, cb);
  const type = params.opts ? params.opts.type : void 0;
  const renderer = getStringRendererFromType(type);
  return render2(renderer.render, text, params);
};
server.toDataURL = function toDataURL(text, opts, cb) {
  const params = checkParams(text, opts, cb);
  const renderer = getRendererFromType(params.opts.type);
  return render2(renderer.renderToDataURL, text, params);
};
server.toBuffer = function toBuffer(text, opts, cb) {
  const params = checkParams(text, opts, cb);
  const renderer = getRendererFromType(params.opts.type);
  return render2(renderer.renderToBuffer, text, params);
};
server.toFile = function toFile(path2, text, opts, cb) {
  if (typeof path2 !== "string" || !(typeof text === "string" || typeof text === "object")) {
    throw new Error("Invalid argument");
  }
  if (arguments.length < 3 && !canPromise()) {
    throw new Error("Too few arguments provided");
  }
  const params = checkParams(text, opts, cb);
  const type = params.opts.type || getTypeFromFilename(path2);
  const renderer = getRendererFromType(type);
  const renderToFile = renderer.renderToFile.bind(null, path2);
  return render2(renderToFile, text, params);
};
server.toFileStream = function toFileStream(stream2, text, opts) {
  if (arguments.length < 2) {
    throw new Error("Too few arguments provided");
  }
  const params = checkParams(text, opts, stream2.emit.bind(stream2, "error"));
  const renderer = getRendererFromType("png");
  const renderToFileStream = renderer.renderToFileStream.bind(null, stream2);
  render2(renderToFileStream, text, params);
};
(function(module) {
  module.exports = server;
})(lib);
const defined = function(val) {
  return typeof val !== "undefined" && val !== null;
};
const object = function(val) {
  return typeof val === "object";
};
const plainObject = function(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
};
const fn = function(val) {
  return typeof val === "function";
};
const bool$1 = function(val) {
  return typeof val === "boolean";
};
const buffer = function(val) {
  return val instanceof Buffer;
};
const typedArray = function(val) {
  if (defined(val)) {
    switch (val.constructor) {
      case Uint8Array:
      case Uint8ClampedArray:
      case Int8Array:
      case Uint16Array:
      case Int16Array:
      case Uint32Array:
      case Int32Array:
      case Float32Array:
      case Float64Array:
        return true;
    }
  }
  return false;
};
const string = function(val) {
  return typeof val === "string" && val.length > 0;
};
const number = function(val) {
  return typeof val === "number" && !Number.isNaN(val);
};
const integer = function(val) {
  return Number.isInteger(val);
};
const inRange = function(val, min, max) {
  return val >= min && val <= max;
};
const inArray = function(val, list) {
  return list.includes(val);
};
const invalidParameterError = function(name2, expected, actual) {
  return new Error(
    `Expected ${expected} for ${name2} but received ${actual} of type ${typeof actual}`
  );
};
var is$9 = {
  defined,
  object,
  plainObject,
  fn,
  bool: bool$1,
  buffer,
  typedArray,
  string,
  number,
  integer,
  inRange,
  inArray,
  invalidParameterError
};
const detectLibc$1 = require$$0$2;
const env$1 = process.env;
var platform$1 = function() {
  const arch = env$1.npm_config_arch || process.arch;
  const platform2 = env$1.npm_config_platform || process.platform;
  const libc = process.env.npm_config_libc || (detectLibc$1.isNonGlibcLinuxSync() ? detectLibc$1.familySync() : "");
  const libcId = platform2 !== "linux" || libc === detectLibc$1.GLIBC ? "" : libc;
  const platformId = [`${platform2}${libcId}`];
  if (arch === "arm") {
    const fallback = process.versions.electron ? "7" : "6";
    platformId.push(`armv${env$1.npm_config_arm_version || process.config.variables.arm_version || fallback}`);
  } else if (arch === "arm64") {
    platformId.push(`arm64v${env$1.npm_config_arm_version || "8"}`);
  } else {
    platformId.push(arch);
  }
  return platformId.join("-");
};
const name = "sharp";
const description = "High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, GIF, AVIF and TIFF images";
const version = "0.30.7";
const author = "Lovell Fuller <npm@lovell.info>";
const homepage = "https://github.com/lovell/sharp";
const contributors = [
  "Pierre Inglebert <pierre.inglebert@gmail.com>",
  "Jonathan Ong <jonathanrichardong@gmail.com>",
  "Chanon Sajjamanochai <chanon.s@gmail.com>",
  "Juliano Julio <julianojulio@gmail.com>",
  "Daniel Gasienica <daniel@gasienica.ch>",
  "Julian Walker <julian@fiftythree.com>",
  "Amit Pitaru <pitaru.amit@gmail.com>",
  "Brandon Aaron <hello.brandon@aaron.sh>",
  "Andreas Lind <andreas@one.com>",
  "Maurus Cuelenaere <mcuelenaere@gmail.com>",
  "Linus Unneb\xE4ck <linus@folkdatorn.se>",
  "Victor Mateevitsi <mvictoras@gmail.com>",
  "Alaric Holloway <alaric.holloway@gmail.com>",
  "Bernhard K. Weisshuhn <bkw@codingforce.com>",
  "Chris Riley <criley@primedia.com>",
  "David Carley <dacarley@gmail.com>",
  "John Tobin <john@limelightmobileinc.com>",
  "Kenton Gray <kentongray@gmail.com>",
  "Felix B\xFCnemann <Felix.Buenemann@gmail.com>",
  "Samy Al Zahrani <samyalzahrany@gmail.com>",
  "Chintan Thakkar <lemnisk8@gmail.com>",
  "F. Orlando Galashan <frulo@gmx.de>",
  "Kleis Auke Wolthuizen <info@kleisauke.nl>",
  "Matt Hirsch <mhirsch@media.mit.edu>",
  "Matthias Thoemmes <thoemmes@gmail.com>",
  "Patrick Paskaris <patrick@paskaris.gr>",
  "J\xE9r\xE9my Lal <kapouer@melix.org>",
  "Rahul Nanwani <r.nanwani@gmail.com>",
  "Alice Monday <alice0meta@gmail.com>",
  "Kristo Jorgenson <kristo.jorgenson@gmail.com>",
  "YvesBos <yves_bos@outlook.com>",
  "Guy Maliar <guy@tailorbrands.com>",
  "Nicolas Coden <nicolas@ncoden.fr>",
  "Matt Parrish <matt.r.parrish@gmail.com>",
  "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
  "Matthew McEachen <matthew+github@mceachen.org>",
  "Jarda Kot\u011B\u0161ovec <jarda.kotesovec@gmail.com>",
  "Kenric D'Souza <kenric.dsouza@gmail.com>",
  "Oleh Aleinyk <oleg.aleynik@gmail.com>",
  "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
  "Andrea Bianco <andrea.bianco@unibas.ch>",
  "Rik Heywood <rik@rik.org>",
  "Thomas Parisot <hi@oncletom.io>",
  "Nathan Graves <nathanrgraves+github@gmail.com>",
  "Tom Lokhorst <tom@lokhorst.eu>",
  "Espen Hovlandsdal <espen@hovlandsdal.com>",
  "Sylvain Dumont <sylvain.dumont35@gmail.com>",
  "Alun Davies <alun.owain.davies@googlemail.com>",
  "Aidan Hoolachan <ajhoolachan21@gmail.com>",
  "Axel Eirola <axel.eirola@iki.fi>",
  "Freezy <freezy@xbmc.org>",
  "Daiz <taneli.vatanen@gmail.com>",
  "Julian Aubourg <j@ubourg.net>",
  "Keith Belovay <keith@picthrive.com>",
  "Michael B. Klein <mbklein@gmail.com>",
  "Jordan Prudhomme <jordan@raboland.fr>",
  "Ilya Ovdin <iovdin@gmail.com>",
  "Andargor <andargor@yahoo.com>",
  "Paul Neave <paul.neave@gmail.com>",
  "Brendan Kennedy <brenwken@gmail.com>",
  "Brychan Bennett-Odlum <git@brychan.io>",
  "Edward Silverton <e.silverton@gmail.com>",
  "Roman Malieiev <aromaleev@gmail.com>",
  "Tomas Szabo <tomas.szabo@deftomat.com>",
  "Robert O'Rourke <robert@o-rourke.org>",
  "Guillermo Alfonso Varela Chouci\xF1o <guillevch@gmail.com>",
  "Christian Flintrup <chr@gigahost.dk>",
  "Manan Jadhav <manan@motionden.com>",
  "Leon Radley <leon@radley.se>",
  "alza54 <alza54@thiocod.in>",
  "Jacob Smith <jacob@frende.me>",
  "Michael Nutt <michael@nutt.im>",
  "Brad Parham <baparham@gmail.com>",
  "Taneli Vatanen <taneli.vatanen@gmail.com>",
  "Joris Dugu\xE9 <zaruike10@gmail.com>",
  "Chris Banks <christopher.bradley.banks@gmail.com>",
  "Ompal Singh <ompal.hitm09@gmail.com>",
  "Brodan <christopher.hranj@gmail.com",
  "Ankur Parihar <ankur.github@gmail.com>"
];
const scripts = {
  install: "(node install/libvips && node install/dll-copy && prebuild-install) || (node install/can-compile && node-gyp rebuild && node install/dll-copy)",
  clean: "rm -rf node_modules/ build/ vendor/ .nyc_output/ coverage/ test/fixtures/output.*",
  test: "npm run test-lint && npm run test-unit && npm run test-licensing",
  "test-lint": "semistandard && cpplint",
  "test-unit": "nyc --reporter=lcov --branches=99 mocha --slow=1000 --timeout=60000 ./test/unit/*.js",
  "test-licensing": 'license-checker --production --summary --onlyAllow="Apache-2.0;BSD;ISC;MIT"',
  "test-coverage": "./test/coverage/report.sh",
  "test-leak": "./test/leak/leak.sh",
  "docs-build": "documentation lint lib && node docs/build && node docs/search-index/build",
  "docs-serve": "cd docs && npx serve",
  "docs-publish": "cd docs && npx firebase-tools deploy --project pixelplumbing --only hosting:pixelplumbing-sharp"
};
const main = "lib/index.js";
const files = [
  "binding.gyp",
  "install/**",
  "lib/**",
  "src/**"
];
const repository = {
  type: "git",
  url: "git://github.com/lovell/sharp"
};
const keywords = [
  "jpeg",
  "png",
  "webp",
  "avif",
  "tiff",
  "gif",
  "svg",
  "jp2",
  "dzi",
  "image",
  "resize",
  "thumbnail",
  "crop",
  "embed",
  "libvips",
  "vips"
];
const dependencies = {
  color: "^4.2.3",
  "detect-libc": "^2.0.1",
  "node-addon-api": "^5.0.0",
  "prebuild-install": "^7.1.1",
  semver: "^7.3.7",
  "simple-get": "^4.0.1",
  "tar-fs": "^2.1.1",
  "tunnel-agent": "^0.6.0"
};
const devDependencies = {
  async: "^3.2.4",
  cc: "^3.0.1",
  "decompress-zip": "^0.3.3",
  documentation: "^13.2.5",
  "exif-reader": "^1.0.3",
  icc: "^2.0.0",
  "license-checker": "^25.0.1",
  mocha: "^10.0.0",
  "mock-fs": "^5.1.2",
  nyc: "^15.1.0",
  prebuild: "^11.0.3",
  rimraf: "^3.0.2",
  semistandard: "^16.0.1"
};
const license = "Apache-2.0";
const config$1 = {
  libvips: "8.12.2",
  integrity: {
    "darwin-arm64v8": "sha512-p46s/bbJAjkOXzPISZt9HUpG9GWjwQkYnLLRLKzsBJHLtB3X6C6Y/zXI5Hd0DOojcFkks9a0kTN+uDQ/XJY19g==",
    "darwin-x64": "sha512-6vOHVZnvXwe6EXRsy29jdkUzBE6ElNpXUwd+m8vV7qy32AnXu7B9YemHsZ44vWviIwPZeXF6Nhd9EFLM0wWohw==",
    "linux-arm64v8": "sha512-XwZdS63yhqLtbFtx/0eoLF/Agf5qtTrI11FMnMRpuBJWd4jHB60RAH+uzYUgoChCmKIS+AeXYMLm4d8Ns2QX8w==",
    "linux-armv6": "sha512-Rh0Q0kqwPG2MjXWOkPCuPEyiUKFgKJYWLgS835D4MrXgdKr8Tft/eVrc2iGIxt2re30VpDiZ1h0Rby1aCZt2zw==",
    "linux-armv7": "sha512-heTS/MsmRvu4JljINxP+vDiS9ZZfuGhr3IStb5F7Gc0/QLRhllYAg4rcO8L1eTK9sIIzG5ARvI19+YUZe7WbzA==",
    "linux-x64": "sha512-SSWAwBFi0hx8V/h/v82tTFGKWTFv9FiCK3Timz5OExuI+sX1Ngrd0PVQaWXOThGNdel/fcD3Bz9YjSt4feBR1g==",
    "linuxmusl-arm64v8": "sha512-Rhks+5C7p7aO6AucLT1uvzo8ohlqcqCUPgZmN+LZjsPWob/Iix3MfiDYtv/+gTvdeEfXxbCU6/YuPBwHQ7/crA==",
    "linuxmusl-x64": "sha512-IOyjSQqpWVntqOUpCHVWuQwACwmmjdi15H8Pc+Ma1JkhPogTfVsFQWyL7DuOTD3Yr23EuYGzovUX00duOtfy/g==",
    "win32-arm64v8": "sha512-A+Qe8Ipewtvw9ldvF6nWed2J8kphzrUE04nFeKCtNx6pfGQ/MAlCKMjt/U8VgUKNjB01zJDUW9XE0+FhGZ/UpQ==",
    "win32-ia32": "sha512-cMrAvwFdDeAVnLJt0IPMPRKaIFhyXYGTprsM0DND9VUHE8F7dJMR44tS5YkXsGh1QNDtjKT6YuxAVUglmiXtpA==",
    "win32-x64": "sha512-vLFIfw6aW2zABa8jpgzWDhljnE6glktrddErVyazAIoHl6BFFe/Da+LK1DbXvIYHz7fyOoKhSfCJHCiJG1Vg6w=="
  },
  runtime: "napi",
  target: 5
};
const engines = {
  node: ">=12.13.0"
};
const funding = {
  url: "https://opencollective.com/libvips"
};
const binary = {
  napi_versions: [
    5
  ]
};
const semistandard = {
  env: [
    "mocha"
  ]
};
const cc = {
  linelength: "120",
  filter: [
    "build/include"
  ]
};
const require$$7 = {
  name,
  description,
  version,
  author,
  homepage,
  contributors,
  scripts,
  main,
  files,
  repository,
  keywords,
  dependencies,
  devDependencies,
  license,
  config: config$1,
  engines,
  funding,
  binary,
  semistandard,
  cc
};
const fs$1 = require$$0$1;
const os = require$$1$1;
const path$2 = require$$2;
const spawnSync = require$$3.spawnSync;
const semverCoerce = require$$4;
const semverGreaterThanOrEqualTo = require$$5;
const platform = platform$1;
const { config } = require$$7;
const env = process.env;
const minimumLibvipsVersionLabelled = env.npm_package_config_libvips || config.libvips;
const minimumLibvipsVersion = semverCoerce(minimumLibvipsVersionLabelled).version;
const spawnSyncOptions = {
  encoding: "utf8",
  shell: true
};
const vendorPath = path$2.join(__dirname, "..", "vendor", minimumLibvipsVersion, platform());
const mkdirSync = function(dirPath) {
  try {
    fs$1.mkdirSync(dirPath, { recursive: true });
  } catch (err) {
    if (err.code !== "EEXIST") {
      throw err;
    }
  }
};
const cachePath = function() {
  const npmCachePath = env.npm_config_cache || (env.APPDATA ? path$2.join(env.APPDATA, "npm-cache") : path$2.join(os.homedir(), ".npm"));
  mkdirSync(npmCachePath);
  const libvipsCachePath = path$2.join(npmCachePath, "_libvips");
  mkdirSync(libvipsCachePath);
  return libvipsCachePath;
};
const integrity = function(platformAndArch2) {
  return env[`npm_package_config_integrity_${platformAndArch2.replace("-", "_")}`] || config.integrity[platformAndArch2];
};
const log2 = function(item) {
  if (item instanceof Error) {
    console.error(`sharp: Installation error: ${item.message}`);
  } else {
    console.log(`sharp: ${item}`);
  }
};
const isRosetta = function() {
  if (process.platform === "darwin" && process.arch === "x64") {
    const translated = spawnSync("sysctl sysctl.proc_translated", spawnSyncOptions).stdout;
    return (translated || "").trim() === "sysctl.proc_translated: 1";
  }
  return false;
};
const globalLibvipsVersion = function() {
  if (process.platform !== "win32") {
    const globalLibvipsVersion2 = spawnSync("pkg-config --modversion vips-cpp", {
      ...spawnSyncOptions,
      env: {
        ...env,
        PKG_CONFIG_PATH: pkgConfigPath()
      }
    }).stdout;
    return (globalLibvipsVersion2 || "").trim();
  } else {
    return "";
  }
};
const hasVendoredLibvips = function() {
  return fs$1.existsSync(vendorPath);
};
const removeVendoredLibvips = function() {
  const rm = fs$1.rmSync ? fs$1.rmSync : fs$1.rmdirSync;
  rm(vendorPath, { recursive: true, maxRetries: 3, force: true });
};
const pkgConfigPath = function() {
  if (process.platform !== "win32") {
    const brewPkgConfigPath = spawnSync(
      'which brew >/dev/null 2>&1 && brew environment --plain | grep PKG_CONFIG_LIBDIR | cut -d" " -f2',
      spawnSyncOptions
    ).stdout || "";
    return [
      brewPkgConfigPath.trim(),
      env.PKG_CONFIG_PATH,
      "/usr/local/lib/pkgconfig",
      "/usr/lib/pkgconfig",
      "/usr/local/libdata/pkgconfig",
      "/usr/libdata/pkgconfig"
    ].filter(Boolean).join(":");
  } else {
    return "";
  }
};
const useGlobalLibvips = function() {
  if (Boolean(env.SHARP_IGNORE_GLOBAL_LIBVIPS) === true) {
    return false;
  }
  if (isRosetta()) {
    return false;
  }
  const globalVipsVersion = globalLibvipsVersion();
  return !!globalVipsVersion && semverGreaterThanOrEqualTo(globalVipsVersion, minimumLibvipsVersion);
};
var libvips = {
  minimumLibvipsVersion,
  minimumLibvipsVersionLabelled,
  cachePath,
  integrity,
  log: log2,
  globalLibvipsVersion,
  hasVendoredLibvips,
  removeVendoredLibvips,
  pkgConfigPath,
  useGlobalLibvips,
  mkdirSync
};
var sharp$3 = { exports: {} };
(function(module) {
  const platformAndArch2 = platform$1();
  try {
    module.exports = commonjsRequire(`../build/Release/sharp-${platformAndArch2}.node`);
  } catch (err) {
    const help = ["", 'Something went wrong installing the "sharp" module', "", err.message, "", "Possible solutions:"];
    if (/dylib/.test(err.message) && /Incompatible library version/.test(err.message)) {
      help.push('- Update Homebrew: "brew update && brew upgrade vips"');
    } else {
      const [platform2, arch] = platformAndArch2.split("-");
      if (platform2 === "linux" && /Module did not self-register/.test(err.message)) {
        help.push("- Using worker threads? See https://sharp.pixelplumbing.com/install#worker-threads");
      }
      help.push(
        '- Install with verbose logging and look for errors: "npm install --ignore-scripts=false --foreground-scripts --verbose sharp"',
        `- Install for the current ${platformAndArch2} runtime: "npm install --platform=${platform2} --arch=${arch} sharp"`
      );
    }
    help.push(
      "- Consult the installation documentation: https://sharp.pixelplumbing.com/install"
    );
    if (process.platform === "win32" || /symbol/.test(err.message)) {
      const loadedModule = Object.keys(require.cache).find((i) => /[\\/]build[\\/]Release[\\/]sharp(.*)\.node$/.test(i));
      if (loadedModule) {
        const [, loadedPackage] = loadedModule.match(/node_modules[\\/]([^\\/]+)[\\/]/);
        help.push(`- Ensure the version of sharp aligns with the ${loadedPackage} package: "npm ls sharp"`);
      }
    }
    throw new Error(help.join("\n"));
  }
})(sharp$3);
const util = require$$0$3;
const stream = require$$1$2;
const is$8 = is$9;
libvips.hasVendoredLibvips();
const debuglog = util.debuglog("sharp");
const Sharp$1 = function(input2, options) {
  if (arguments.length === 1 && !is$8.defined(input2)) {
    throw new Error("Invalid input");
  }
  if (!(this instanceof Sharp$1)) {
    return new Sharp$1(input2, options);
  }
  stream.Duplex.call(this);
  this.options = {
    topOffsetPre: -1,
    leftOffsetPre: -1,
    widthPre: -1,
    heightPre: -1,
    topOffsetPost: -1,
    leftOffsetPost: -1,
    widthPost: -1,
    heightPost: -1,
    width: -1,
    height: -1,
    canvas: "crop",
    position: 0,
    resizeBackground: [0, 0, 0, 255],
    useExifOrientation: false,
    angle: 0,
    rotationAngle: 0,
    rotationBackground: [0, 0, 0, 255],
    rotateBeforePreExtract: false,
    flip: false,
    flop: false,
    extendTop: 0,
    extendBottom: 0,
    extendLeft: 0,
    extendRight: 0,
    extendBackground: [0, 0, 0, 255],
    withoutEnlargement: false,
    withoutReduction: false,
    affineMatrix: [],
    affineBackground: [0, 0, 0, 255],
    affineIdx: 0,
    affineIdy: 0,
    affineOdx: 0,
    affineOdy: 0,
    affineInterpolator: this.constructor.interpolators.bilinear,
    kernel: "lanczos3",
    fastShrinkOnLoad: true,
    tintA: 128,
    tintB: 128,
    flatten: false,
    flattenBackground: [0, 0, 0],
    negate: false,
    negateAlpha: true,
    medianSize: 0,
    blurSigma: 0,
    sharpenSigma: 0,
    sharpenM1: 1,
    sharpenM2: 2,
    sharpenX1: 2,
    sharpenY2: 10,
    sharpenY3: 20,
    threshold: 0,
    thresholdGrayscale: true,
    trimThreshold: 0,
    gamma: 0,
    gammaOut: 0,
    greyscale: false,
    normalise: false,
    claheWidth: 0,
    claheHeight: 0,
    claheMaxSlope: 3,
    brightness: 1,
    saturation: 1,
    hue: 0,
    lightness: 0,
    booleanBufferIn: null,
    booleanFileIn: "",
    joinChannelIn: [],
    extractChannel: -1,
    removeAlpha: false,
    ensureAlpha: -1,
    colourspace: "srgb",
    colourspaceInput: "last",
    composite: [],
    fileOut: "",
    formatOut: "input",
    streamOut: false,
    withMetadata: false,
    withMetadataOrientation: -1,
    withMetadataDensity: 0,
    withMetadataIcc: "",
    withMetadataStrs: {},
    resolveWithObject: false,
    jpegQuality: 80,
    jpegProgressive: false,
    jpegChromaSubsampling: "4:2:0",
    jpegTrellisQuantisation: false,
    jpegOvershootDeringing: false,
    jpegOptimiseScans: false,
    jpegOptimiseCoding: true,
    jpegQuantisationTable: 0,
    pngProgressive: false,
    pngCompressionLevel: 6,
    pngAdaptiveFiltering: false,
    pngPalette: false,
    pngQuality: 100,
    pngEffort: 7,
    pngBitdepth: 8,
    pngDither: 1,
    jp2Quality: 80,
    jp2TileHeight: 512,
    jp2TileWidth: 512,
    jp2Lossless: false,
    jp2ChromaSubsampling: "4:4:4",
    webpQuality: 80,
    webpAlphaQuality: 100,
    webpLossless: false,
    webpNearLossless: false,
    webpSmartSubsample: false,
    webpEffort: 4,
    gifBitdepth: 8,
    gifEffort: 7,
    gifDither: 1,
    tiffQuality: 80,
    tiffCompression: "jpeg",
    tiffPredictor: "horizontal",
    tiffPyramid: false,
    tiffBitdepth: 8,
    tiffTile: false,
    tiffTileHeight: 256,
    tiffTileWidth: 256,
    tiffXres: 1,
    tiffYres: 1,
    tiffResolutionUnit: "inch",
    heifQuality: 50,
    heifLossless: false,
    heifCompression: "av1",
    heifEffort: 4,
    heifChromaSubsampling: "4:4:4",
    rawDepth: "uchar",
    tileSize: 256,
    tileOverlap: 0,
    tileContainer: "fs",
    tileLayout: "dz",
    tileFormat: "last",
    tileDepth: "last",
    tileAngle: 0,
    tileSkipBlanks: -1,
    tileBackground: [255, 255, 255, 255],
    tileCentre: false,
    tileId: "https://example.com/iiif",
    timeoutSeconds: 0,
    linearA: 1,
    linearB: 0,
    debuglog: (warning) => {
      this.emit("warning", warning);
      debuglog(warning);
    },
    queueListener: function(queueLength) {
      Sharp$1.queue.emit("change", queueLength);
    }
  };
  this.options.input = this._createInputDescriptor(input2, options, { allowStream: true });
  return this;
};
Object.setPrototypeOf(Sharp$1.prototype, stream.Duplex.prototype);
Object.setPrototypeOf(Sharp$1, stream.Duplex);
function clone() {
  const clone2 = this.constructor.call();
  clone2.options = Object.assign({}, this.options);
  if (this._isStreamInput()) {
    this.on("finish", () => {
      this._flattenBufferIn();
      clone2.options.bufferIn = this.options.bufferIn;
      clone2.emit("finish");
    });
  }
  return clone2;
}
Object.assign(Sharp$1.prototype, { clone });
var constructor = Sharp$1;
const color$2 = require$$0$4;
const is$7 = is$9;
const sharp$2 = sharp$3.exports;
function _inputOptionsFromObject(obj) {
  const { raw: raw2, density, limitInputPixels, unlimited, sequentialRead, failOn, failOnError, animated, page, pages, subifd } = obj;
  return [raw2, density, limitInputPixels, unlimited, sequentialRead, failOn, failOnError, animated, page, pages, subifd].some(is$7.defined) ? { raw: raw2, density, limitInputPixels, unlimited, sequentialRead, failOn, failOnError, animated, page, pages, subifd } : void 0;
}
function _createInputDescriptor(input2, inputOptions, containerOptions) {
  const inputDescriptor = {
    failOn: "warning",
    limitInputPixels: Math.pow(16383, 2),
    unlimited: false,
    sequentialRead: false
  };
  if (is$7.string(input2)) {
    inputDescriptor.file = input2;
  } else if (is$7.buffer(input2)) {
    if (input2.length === 0) {
      throw Error("Input Buffer is empty");
    }
    inputDescriptor.buffer = input2;
  } else if (is$7.typedArray(input2)) {
    if (input2.length === 0) {
      throw Error("Input Bit Array is empty");
    }
    inputDescriptor.buffer = Buffer.from(input2.buffer, input2.byteOffset, input2.byteLength);
  } else if (is$7.plainObject(input2) && !is$7.defined(inputOptions)) {
    inputOptions = input2;
    if (_inputOptionsFromObject(inputOptions)) {
      inputDescriptor.buffer = [];
    }
  } else if (!is$7.defined(input2) && !is$7.defined(inputOptions) && is$7.object(containerOptions) && containerOptions.allowStream) {
    inputDescriptor.buffer = [];
  } else {
    throw new Error(`Unsupported input '${input2}' of type ${typeof input2}${is$7.defined(inputOptions) ? ` when also providing options of type ${typeof inputOptions}` : ""}`);
  }
  if (is$7.object(inputOptions)) {
    if (is$7.defined(inputOptions.failOnError)) {
      if (is$7.bool(inputOptions.failOnError)) {
        inputDescriptor.failOn = inputOptions.failOnError ? "warning" : "none";
      } else {
        throw is$7.invalidParameterError("failOnError", "boolean", inputOptions.failOnError);
      }
    }
    if (is$7.defined(inputOptions.failOn)) {
      if (is$7.string(inputOptions.failOn) && is$7.inArray(inputOptions.failOn, ["none", "truncated", "error", "warning"])) {
        inputDescriptor.failOn = inputOptions.failOn;
      } else {
        throw is$7.invalidParameterError("failOn", "one of: none, truncated, error, warning", inputOptions.failOn);
      }
    }
    if (is$7.defined(inputOptions.density)) {
      if (is$7.inRange(inputOptions.density, 1, 1e5)) {
        inputDescriptor.density = inputOptions.density;
      } else {
        throw is$7.invalidParameterError("density", "number between 1 and 100000", inputOptions.density);
      }
    }
    if (is$7.defined(inputOptions.limitInputPixels)) {
      if (is$7.bool(inputOptions.limitInputPixels)) {
        inputDescriptor.limitInputPixels = inputOptions.limitInputPixels ? Math.pow(16383, 2) : 0;
      } else if (is$7.integer(inputOptions.limitInputPixels) && is$7.inRange(inputOptions.limitInputPixels, 0, Number.MAX_SAFE_INTEGER)) {
        inputDescriptor.limitInputPixels = inputOptions.limitInputPixels;
      } else {
        throw is$7.invalidParameterError("limitInputPixels", "positive integer", inputOptions.limitInputPixels);
      }
    }
    if (is$7.defined(inputOptions.unlimited)) {
      if (is$7.bool(inputOptions.unlimited)) {
        inputDescriptor.unlimited = inputOptions.unlimited;
      } else {
        throw is$7.invalidParameterError("unlimited", "boolean", inputOptions.unlimited);
      }
    }
    if (is$7.defined(inputOptions.sequentialRead)) {
      if (is$7.bool(inputOptions.sequentialRead)) {
        inputDescriptor.sequentialRead = inputOptions.sequentialRead;
      } else {
        throw is$7.invalidParameterError("sequentialRead", "boolean", inputOptions.sequentialRead);
      }
    }
    if (is$7.defined(inputOptions.raw)) {
      if (is$7.object(inputOptions.raw) && is$7.integer(inputOptions.raw.width) && inputOptions.raw.width > 0 && is$7.integer(inputOptions.raw.height) && inputOptions.raw.height > 0 && is$7.integer(inputOptions.raw.channels) && is$7.inRange(inputOptions.raw.channels, 1, 4)) {
        inputDescriptor.rawWidth = inputOptions.raw.width;
        inputDescriptor.rawHeight = inputOptions.raw.height;
        inputDescriptor.rawChannels = inputOptions.raw.channels;
        inputDescriptor.rawPremultiplied = !!inputOptions.raw.premultiplied;
        switch (input2.constructor) {
          case Uint8Array:
          case Uint8ClampedArray:
            inputDescriptor.rawDepth = "uchar";
            break;
          case Int8Array:
            inputDescriptor.rawDepth = "char";
            break;
          case Uint16Array:
            inputDescriptor.rawDepth = "ushort";
            break;
          case Int16Array:
            inputDescriptor.rawDepth = "short";
            break;
          case Uint32Array:
            inputDescriptor.rawDepth = "uint";
            break;
          case Int32Array:
            inputDescriptor.rawDepth = "int";
            break;
          case Float32Array:
            inputDescriptor.rawDepth = "float";
            break;
          case Float64Array:
            inputDescriptor.rawDepth = "double";
            break;
          default:
            inputDescriptor.rawDepth = "uchar";
            break;
        }
      } else {
        throw new Error("Expected width, height and channels for raw pixel input");
      }
    }
    if (is$7.defined(inputOptions.animated)) {
      if (is$7.bool(inputOptions.animated)) {
        inputDescriptor.pages = inputOptions.animated ? -1 : 1;
      } else {
        throw is$7.invalidParameterError("animated", "boolean", inputOptions.animated);
      }
    }
    if (is$7.defined(inputOptions.pages)) {
      if (is$7.integer(inputOptions.pages) && is$7.inRange(inputOptions.pages, -1, 1e5)) {
        inputDescriptor.pages = inputOptions.pages;
      } else {
        throw is$7.invalidParameterError("pages", "integer between -1 and 100000", inputOptions.pages);
      }
    }
    if (is$7.defined(inputOptions.page)) {
      if (is$7.integer(inputOptions.page) && is$7.inRange(inputOptions.page, 0, 1e5)) {
        inputDescriptor.page = inputOptions.page;
      } else {
        throw is$7.invalidParameterError("page", "integer between 0 and 100000", inputOptions.page);
      }
    }
    if (is$7.defined(inputOptions.level)) {
      if (is$7.integer(inputOptions.level) && is$7.inRange(inputOptions.level, 0, 256)) {
        inputDescriptor.level = inputOptions.level;
      } else {
        throw is$7.invalidParameterError("level", "integer between 0 and 256", inputOptions.level);
      }
    }
    if (is$7.defined(inputOptions.subifd)) {
      if (is$7.integer(inputOptions.subifd) && is$7.inRange(inputOptions.subifd, -1, 1e5)) {
        inputDescriptor.subifd = inputOptions.subifd;
      } else {
        throw is$7.invalidParameterError("subifd", "integer between -1 and 100000", inputOptions.subifd);
      }
    }
    if (is$7.defined(inputOptions.create)) {
      if (is$7.object(inputOptions.create) && is$7.integer(inputOptions.create.width) && inputOptions.create.width > 0 && is$7.integer(inputOptions.create.height) && inputOptions.create.height > 0 && is$7.integer(inputOptions.create.channels)) {
        inputDescriptor.createWidth = inputOptions.create.width;
        inputDescriptor.createHeight = inputOptions.create.height;
        inputDescriptor.createChannels = inputOptions.create.channels;
        if (is$7.defined(inputOptions.create.noise)) {
          if (!is$7.object(inputOptions.create.noise)) {
            throw new Error("Expected noise to be an object");
          }
          if (!is$7.inArray(inputOptions.create.noise.type, ["gaussian"])) {
            throw new Error("Only gaussian noise is supported at the moment");
          }
          if (!is$7.inRange(inputOptions.create.channels, 1, 4)) {
            throw is$7.invalidParameterError("create.channels", "number between 1 and 4", inputOptions.create.channels);
          }
          inputDescriptor.createNoiseType = inputOptions.create.noise.type;
          if (is$7.number(inputOptions.create.noise.mean) && is$7.inRange(inputOptions.create.noise.mean, 0, 1e4)) {
            inputDescriptor.createNoiseMean = inputOptions.create.noise.mean;
          } else {
            throw is$7.invalidParameterError("create.noise.mean", "number between 0 and 10000", inputOptions.create.noise.mean);
          }
          if (is$7.number(inputOptions.create.noise.sigma) && is$7.inRange(inputOptions.create.noise.sigma, 0, 1e4)) {
            inputDescriptor.createNoiseSigma = inputOptions.create.noise.sigma;
          } else {
            throw is$7.invalidParameterError("create.noise.sigma", "number between 0 and 10000", inputOptions.create.noise.sigma);
          }
        } else if (is$7.defined(inputOptions.create.background)) {
          if (!is$7.inRange(inputOptions.create.channels, 3, 4)) {
            throw is$7.invalidParameterError("create.channels", "number between 3 and 4", inputOptions.create.channels);
          }
          const background = color$2(inputOptions.create.background);
          inputDescriptor.createBackground = [
            background.red(),
            background.green(),
            background.blue(),
            Math.round(background.alpha() * 255)
          ];
        } else {
          throw new Error("Expected valid noise or background to create a new input image");
        }
        delete inputDescriptor.buffer;
      } else {
        throw new Error("Expected valid width, height and channels to create a new input image");
      }
    }
  } else if (is$7.defined(inputOptions)) {
    throw new Error("Invalid input options " + inputOptions);
  }
  return inputDescriptor;
}
function _write(chunk, encoding, callback) {
  if (Array.isArray(this.options.input.buffer)) {
    if (is$7.buffer(chunk)) {
      if (this.options.input.buffer.length === 0) {
        this.on("finish", () => {
          this.streamInFinished = true;
        });
      }
      this.options.input.buffer.push(chunk);
      callback();
    } else {
      callback(new Error("Non-Buffer data on Writable Stream"));
    }
  } else {
    callback(new Error("Unexpected data on Writable Stream"));
  }
}
function _flattenBufferIn() {
  if (this._isStreamInput()) {
    this.options.input.buffer = Buffer.concat(this.options.input.buffer);
  }
}
function _isStreamInput() {
  return Array.isArray(this.options.input.buffer);
}
function metadata(callback) {
  if (is$7.fn(callback)) {
    if (this._isStreamInput()) {
      this.on("finish", () => {
        this._flattenBufferIn();
        sharp$2.metadata(this.options, callback);
      });
    } else {
      sharp$2.metadata(this.options, callback);
    }
    return this;
  } else {
    if (this._isStreamInput()) {
      return new Promise((resolve, reject) => {
        this.on("finish", () => {
          this._flattenBufferIn();
          sharp$2.metadata(this.options, (err, metadata2) => {
            if (err) {
              reject(err);
            } else {
              resolve(metadata2);
            }
          });
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        sharp$2.metadata(this.options, (err, metadata2) => {
          if (err) {
            reject(err);
          } else {
            resolve(metadata2);
          }
        });
      });
    }
  }
}
function stats(callback) {
  if (is$7.fn(callback)) {
    if (this._isStreamInput()) {
      this.on("finish", () => {
        this._flattenBufferIn();
        sharp$2.stats(this.options, callback);
      });
    } else {
      sharp$2.stats(this.options, callback);
    }
    return this;
  } else {
    if (this._isStreamInput()) {
      return new Promise((resolve, reject) => {
        this.on("finish", function() {
          this._flattenBufferIn();
          sharp$2.stats(this.options, (err, stats2) => {
            if (err) {
              reject(err);
            } else {
              resolve(stats2);
            }
          });
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        sharp$2.stats(this.options, (err, stats2) => {
          if (err) {
            reject(err);
          } else {
            resolve(stats2);
          }
        });
      });
    }
  }
}
var input = function(Sharp2) {
  Object.assign(Sharp2.prototype, {
    _inputOptionsFromObject,
    _createInputDescriptor,
    _write,
    _flattenBufferIn,
    _isStreamInput,
    metadata,
    stats
  });
};
const is$6 = is$9;
const gravity = {
  center: 0,
  centre: 0,
  north: 1,
  east: 2,
  south: 3,
  west: 4,
  northeast: 5,
  southeast: 6,
  southwest: 7,
  northwest: 8
};
const position = {
  top: 1,
  right: 2,
  bottom: 3,
  left: 4,
  "right top": 5,
  "right bottom": 6,
  "left bottom": 7,
  "left top": 8
};
const strategy = {
  entropy: 16,
  attention: 17
};
const kernel = {
  nearest: "nearest",
  cubic: "cubic",
  mitchell: "mitchell",
  lanczos2: "lanczos2",
  lanczos3: "lanczos3"
};
const fit = {
  contain: "contain",
  cover: "cover",
  fill: "fill",
  inside: "inside",
  outside: "outside"
};
const mapFitToCanvas = {
  contain: "embed",
  cover: "crop",
  fill: "ignore_aspect",
  inside: "max",
  outside: "min"
};
function isRotationExpected(options) {
  return options.angle % 360 !== 0 || options.useExifOrientation === true || options.rotationAngle !== 0;
}
function resize(width, height, options) {
  if (is$6.defined(width)) {
    if (is$6.object(width) && !is$6.defined(options)) {
      options = width;
    } else if (is$6.integer(width) && width > 0) {
      this.options.width = width;
    } else {
      throw is$6.invalidParameterError("width", "positive integer", width);
    }
  } else {
    this.options.width = -1;
  }
  if (is$6.defined(height)) {
    if (is$6.integer(height) && height > 0) {
      this.options.height = height;
    } else {
      throw is$6.invalidParameterError("height", "positive integer", height);
    }
  } else {
    this.options.height = -1;
  }
  if (is$6.object(options)) {
    if (is$6.defined(options.width)) {
      if (is$6.integer(options.width) && options.width > 0) {
        this.options.width = options.width;
      } else {
        throw is$6.invalidParameterError("width", "positive integer", options.width);
      }
    }
    if (is$6.defined(options.height)) {
      if (is$6.integer(options.height) && options.height > 0) {
        this.options.height = options.height;
      } else {
        throw is$6.invalidParameterError("height", "positive integer", options.height);
      }
    }
    if (is$6.defined(options.fit)) {
      const canvas2 = mapFitToCanvas[options.fit];
      if (is$6.string(canvas2)) {
        this.options.canvas = canvas2;
      } else {
        throw is$6.invalidParameterError("fit", "valid fit", options.fit);
      }
    }
    if (is$6.defined(options.position)) {
      const pos = is$6.integer(options.position) ? options.position : strategy[options.position] || position[options.position] || gravity[options.position];
      if (is$6.integer(pos) && (is$6.inRange(pos, 0, 8) || is$6.inRange(pos, 16, 17))) {
        this.options.position = pos;
      } else {
        throw is$6.invalidParameterError("position", "valid position/gravity/strategy", options.position);
      }
    }
    this._setBackgroundColourOption("resizeBackground", options.background);
    if (is$6.defined(options.kernel)) {
      if (is$6.string(kernel[options.kernel])) {
        this.options.kernel = kernel[options.kernel];
      } else {
        throw is$6.invalidParameterError("kernel", "valid kernel name", options.kernel);
      }
    }
    if (is$6.defined(options.withoutEnlargement)) {
      this._setBooleanOption("withoutEnlargement", options.withoutEnlargement);
    }
    if (is$6.defined(options.withoutReduction)) {
      this._setBooleanOption("withoutReduction", options.withoutReduction);
    }
    if (is$6.defined(options.fastShrinkOnLoad)) {
      this._setBooleanOption("fastShrinkOnLoad", options.fastShrinkOnLoad);
    }
  }
  return this;
}
function extend(extend2) {
  if (is$6.integer(extend2) && extend2 > 0) {
    this.options.extendTop = extend2;
    this.options.extendBottom = extend2;
    this.options.extendLeft = extend2;
    this.options.extendRight = extend2;
  } else if (is$6.object(extend2)) {
    if (is$6.defined(extend2.top)) {
      if (is$6.integer(extend2.top) && extend2.top >= 0) {
        this.options.extendTop = extend2.top;
      } else {
        throw is$6.invalidParameterError("top", "positive integer", extend2.top);
      }
    }
    if (is$6.defined(extend2.bottom)) {
      if (is$6.integer(extend2.bottom) && extend2.bottom >= 0) {
        this.options.extendBottom = extend2.bottom;
      } else {
        throw is$6.invalidParameterError("bottom", "positive integer", extend2.bottom);
      }
    }
    if (is$6.defined(extend2.left)) {
      if (is$6.integer(extend2.left) && extend2.left >= 0) {
        this.options.extendLeft = extend2.left;
      } else {
        throw is$6.invalidParameterError("left", "positive integer", extend2.left);
      }
    }
    if (is$6.defined(extend2.right)) {
      if (is$6.integer(extend2.right) && extend2.right >= 0) {
        this.options.extendRight = extend2.right;
      } else {
        throw is$6.invalidParameterError("right", "positive integer", extend2.right);
      }
    }
    this._setBackgroundColourOption("extendBackground", extend2.background);
  } else {
    throw is$6.invalidParameterError("extend", "integer or object", extend2);
  }
  return this;
}
function extract(options) {
  const suffix = this.options.width === -1 && this.options.height === -1 ? "Pre" : "Post";
  ["left", "top", "width", "height"].forEach(function(name2) {
    const value = options[name2];
    if (is$6.integer(value) && value >= 0) {
      this.options[name2 + (name2 === "left" || name2 === "top" ? "Offset" : "") + suffix] = value;
    } else {
      throw is$6.invalidParameterError(name2, "integer", value);
    }
  }, this);
  if (suffix === "Pre" && isRotationExpected(this.options)) {
    this.options.rotateBeforePreExtract = true;
  }
  return this;
}
function trim(threshold2) {
  if (!is$6.defined(threshold2)) {
    this.options.trimThreshold = 10;
  } else if (is$6.number(threshold2) && threshold2 > 0) {
    this.options.trimThreshold = threshold2;
  } else {
    throw is$6.invalidParameterError("threshold", "number greater than zero", threshold2);
  }
  if (this.options.trimThreshold && isRotationExpected(this.options)) {
    this.options.rotateBeforePreExtract = true;
  }
  return this;
}
var resize_1 = function(Sharp2) {
  Object.assign(Sharp2.prototype, {
    resize,
    extend,
    extract,
    trim
  });
  Sharp2.gravity = gravity;
  Sharp2.strategy = strategy;
  Sharp2.kernel = kernel;
  Sharp2.fit = fit;
  Sharp2.position = position;
};
const is$5 = is$9;
const blend = {
  clear: "clear",
  source: "source",
  over: "over",
  in: "in",
  out: "out",
  atop: "atop",
  dest: "dest",
  "dest-over": "dest-over",
  "dest-in": "dest-in",
  "dest-out": "dest-out",
  "dest-atop": "dest-atop",
  xor: "xor",
  add: "add",
  saturate: "saturate",
  multiply: "multiply",
  screen: "screen",
  overlay: "overlay",
  darken: "darken",
  lighten: "lighten",
  "colour-dodge": "colour-dodge",
  "color-dodge": "colour-dodge",
  "colour-burn": "colour-burn",
  "color-burn": "colour-burn",
  "hard-light": "hard-light",
  "soft-light": "soft-light",
  difference: "difference",
  exclusion: "exclusion"
};
function composite(images) {
  if (!Array.isArray(images)) {
    throw is$5.invalidParameterError("images to composite", "array", images);
  }
  this.options.composite = images.map((image) => {
    if (!is$5.object(image)) {
      throw is$5.invalidParameterError("image to composite", "object", image);
    }
    const inputOptions = this._inputOptionsFromObject(image);
    const composite2 = {
      input: this._createInputDescriptor(image.input, inputOptions, { allowStream: false }),
      blend: "over",
      tile: false,
      left: 0,
      top: 0,
      hasOffset: false,
      gravity: 0,
      premultiplied: false
    };
    if (is$5.defined(image.blend)) {
      if (is$5.string(blend[image.blend])) {
        composite2.blend = blend[image.blend];
      } else {
        throw is$5.invalidParameterError("blend", "valid blend name", image.blend);
      }
    }
    if (is$5.defined(image.tile)) {
      if (is$5.bool(image.tile)) {
        composite2.tile = image.tile;
      } else {
        throw is$5.invalidParameterError("tile", "boolean", image.tile);
      }
    }
    if (is$5.defined(image.left)) {
      if (is$5.integer(image.left)) {
        composite2.left = image.left;
      } else {
        throw is$5.invalidParameterError("left", "integer", image.left);
      }
    }
    if (is$5.defined(image.top)) {
      if (is$5.integer(image.top)) {
        composite2.top = image.top;
      } else {
        throw is$5.invalidParameterError("top", "integer", image.top);
      }
    }
    if (is$5.defined(image.top) !== is$5.defined(image.left)) {
      throw new Error("Expected both left and top to be set");
    } else {
      composite2.hasOffset = is$5.integer(image.top) && is$5.integer(image.left);
    }
    if (is$5.defined(image.gravity)) {
      if (is$5.integer(image.gravity) && is$5.inRange(image.gravity, 0, 8)) {
        composite2.gravity = image.gravity;
      } else if (is$5.string(image.gravity) && is$5.integer(this.constructor.gravity[image.gravity])) {
        composite2.gravity = this.constructor.gravity[image.gravity];
      } else {
        throw is$5.invalidParameterError("gravity", "valid gravity", image.gravity);
      }
    }
    if (is$5.defined(image.premultiplied)) {
      if (is$5.bool(image.premultiplied)) {
        composite2.premultiplied = image.premultiplied;
      } else {
        throw is$5.invalidParameterError("premultiplied", "boolean", image.premultiplied);
      }
    }
    return composite2;
  });
  return this;
}
var composite_1 = function(Sharp2) {
  Sharp2.prototype.composite = composite;
  Sharp2.blend = blend;
};
const color$1 = require$$0$4;
const is$4 = is$9;
function rotate(angle, options) {
  if (!is$4.defined(angle)) {
    this.options.useExifOrientation = true;
  } else if (is$4.integer(angle) && !(angle % 90)) {
    this.options.angle = angle;
  } else if (is$4.number(angle)) {
    this.options.rotationAngle = angle;
    if (is$4.object(options) && options.background) {
      const backgroundColour = color$1(options.background);
      this.options.rotationBackground = [
        backgroundColour.red(),
        backgroundColour.green(),
        backgroundColour.blue(),
        Math.round(backgroundColour.alpha() * 255)
      ];
    }
  } else {
    throw is$4.invalidParameterError("angle", "numeric", angle);
  }
  return this;
}
function flip(flip2) {
  this.options.flip = is$4.bool(flip2) ? flip2 : true;
  return this;
}
function flop(flop2) {
  this.options.flop = is$4.bool(flop2) ? flop2 : true;
  return this;
}
function affine(matrix, options) {
  const flatMatrix = [].concat(...matrix);
  if (flatMatrix.length === 4 && flatMatrix.every(is$4.number)) {
    this.options.affineMatrix = flatMatrix;
  } else {
    throw is$4.invalidParameterError("matrix", "1x4 or 2x2 array", matrix);
  }
  if (is$4.defined(options)) {
    if (is$4.object(options)) {
      this._setBackgroundColourOption("affineBackground", options.background);
      if (is$4.defined(options.idx)) {
        if (is$4.number(options.idx)) {
          this.options.affineIdx = options.idx;
        } else {
          throw is$4.invalidParameterError("options.idx", "number", options.idx);
        }
      }
      if (is$4.defined(options.idy)) {
        if (is$4.number(options.idy)) {
          this.options.affineIdy = options.idy;
        } else {
          throw is$4.invalidParameterError("options.idy", "number", options.idy);
        }
      }
      if (is$4.defined(options.odx)) {
        if (is$4.number(options.odx)) {
          this.options.affineOdx = options.odx;
        } else {
          throw is$4.invalidParameterError("options.odx", "number", options.odx);
        }
      }
      if (is$4.defined(options.ody)) {
        if (is$4.number(options.ody)) {
          this.options.affineOdy = options.ody;
        } else {
          throw is$4.invalidParameterError("options.ody", "number", options.ody);
        }
      }
      if (is$4.defined(options.interpolator)) {
        if (is$4.inArray(options.interpolator, Object.values(this.constructor.interpolators))) {
          this.options.affineInterpolator = options.interpolator;
        } else {
          throw is$4.invalidParameterError("options.interpolator", "valid interpolator name", options.interpolator);
        }
      }
    } else {
      throw is$4.invalidParameterError("options", "object", options);
    }
  }
  return this;
}
function sharpen(options, flat, jagged) {
  if (!is$4.defined(options)) {
    this.options.sharpenSigma = -1;
  } else if (is$4.bool(options)) {
    this.options.sharpenSigma = options ? -1 : 0;
  } else if (is$4.number(options) && is$4.inRange(options, 0.01, 1e4)) {
    this.options.sharpenSigma = options;
    if (is$4.defined(flat)) {
      if (is$4.number(flat) && is$4.inRange(flat, 0, 1e4)) {
        this.options.sharpenM1 = flat;
      } else {
        throw is$4.invalidParameterError("flat", "number between 0 and 10000", flat);
      }
    }
    if (is$4.defined(jagged)) {
      if (is$4.number(jagged) && is$4.inRange(jagged, 0, 1e4)) {
        this.options.sharpenM2 = jagged;
      } else {
        throw is$4.invalidParameterError("jagged", "number between 0 and 10000", jagged);
      }
    }
  } else if (is$4.plainObject(options)) {
    if (is$4.number(options.sigma) && is$4.inRange(options.sigma, 0.01, 1e4)) {
      this.options.sharpenSigma = options.sigma;
    } else {
      throw is$4.invalidParameterError("options.sigma", "number between 0.01 and 10000", options.sigma);
    }
    if (is$4.defined(options.m1)) {
      if (is$4.number(options.m1) && is$4.inRange(options.m1, 0, 1e4)) {
        this.options.sharpenM1 = options.m1;
      } else {
        throw is$4.invalidParameterError("options.m1", "number between 0 and 10000", options.m1);
      }
    }
    if (is$4.defined(options.m2)) {
      if (is$4.number(options.m2) && is$4.inRange(options.m2, 0, 1e4)) {
        this.options.sharpenM2 = options.m2;
      } else {
        throw is$4.invalidParameterError("options.m2", "number between 0 and 10000", options.m2);
      }
    }
    if (is$4.defined(options.x1)) {
      if (is$4.number(options.x1) && is$4.inRange(options.x1, 0, 1e4)) {
        this.options.sharpenX1 = options.x1;
      } else {
        throw is$4.invalidParameterError("options.x1", "number between 0 and 10000", options.x1);
      }
    }
    if (is$4.defined(options.y2)) {
      if (is$4.number(options.y2) && is$4.inRange(options.y2, 0, 1e4)) {
        this.options.sharpenY2 = options.y2;
      } else {
        throw is$4.invalidParameterError("options.y2", "number between 0 and 10000", options.y2);
      }
    }
    if (is$4.defined(options.y3)) {
      if (is$4.number(options.y3) && is$4.inRange(options.y3, 0, 1e4)) {
        this.options.sharpenY3 = options.y3;
      } else {
        throw is$4.invalidParameterError("options.y3", "number between 0 and 10000", options.y3);
      }
    }
  } else {
    throw is$4.invalidParameterError("sigma", "number between 0.01 and 10000", options);
  }
  return this;
}
function median(size) {
  if (!is$4.defined(size)) {
    this.options.medianSize = 3;
  } else if (is$4.integer(size) && is$4.inRange(size, 1, 1e3)) {
    this.options.medianSize = size;
  } else {
    throw is$4.invalidParameterError("size", "integer between 1 and 1000", size);
  }
  return this;
}
function blur(sigma) {
  if (!is$4.defined(sigma)) {
    this.options.blurSigma = -1;
  } else if (is$4.bool(sigma)) {
    this.options.blurSigma = sigma ? -1 : 0;
  } else if (is$4.number(sigma) && is$4.inRange(sigma, 0.3, 1e3)) {
    this.options.blurSigma = sigma;
  } else {
    throw is$4.invalidParameterError("sigma", "number between 0.3 and 1000", sigma);
  }
  return this;
}
function flatten(options) {
  this.options.flatten = is$4.bool(options) ? options : true;
  if (is$4.object(options)) {
    this._setBackgroundColourOption("flattenBackground", options.background);
  }
  return this;
}
function gamma(gamma2, gammaOut) {
  if (!is$4.defined(gamma2)) {
    this.options.gamma = 2.2;
  } else if (is$4.number(gamma2) && is$4.inRange(gamma2, 1, 3)) {
    this.options.gamma = gamma2;
  } else {
    throw is$4.invalidParameterError("gamma", "number between 1.0 and 3.0", gamma2);
  }
  if (!is$4.defined(gammaOut)) {
    this.options.gammaOut = this.options.gamma;
  } else if (is$4.number(gammaOut) && is$4.inRange(gammaOut, 1, 3)) {
    this.options.gammaOut = gammaOut;
  } else {
    throw is$4.invalidParameterError("gammaOut", "number between 1.0 and 3.0", gammaOut);
  }
  return this;
}
function negate(options) {
  this.options.negate = is$4.bool(options) ? options : true;
  if (is$4.plainObject(options) && "alpha" in options) {
    if (!is$4.bool(options.alpha)) {
      throw is$4.invalidParameterError("alpha", "should be boolean value", options.alpha);
    } else {
      this.options.negateAlpha = options.alpha;
    }
  }
  return this;
}
function normalise(normalise2) {
  this.options.normalise = is$4.bool(normalise2) ? normalise2 : true;
  return this;
}
function normalize(normalize2) {
  return this.normalise(normalize2);
}
function clahe(options) {
  if (!is$4.plainObject(options)) {
    throw is$4.invalidParameterError("options", "plain object", options);
  }
  if (!("width" in options) || !is$4.integer(options.width) || options.width <= 0) {
    throw is$4.invalidParameterError("width", "integer above zero", options.width);
  } else {
    this.options.claheWidth = options.width;
  }
  if (!("height" in options) || !is$4.integer(options.height) || options.height <= 0) {
    throw is$4.invalidParameterError("height", "integer above zero", options.height);
  } else {
    this.options.claheHeight = options.height;
  }
  if (!is$4.defined(options.maxSlope)) {
    this.options.claheMaxSlope = 3;
  } else if (!is$4.integer(options.maxSlope) || options.maxSlope < 0 || options.maxSlope > 100) {
    throw is$4.invalidParameterError("maxSlope", "integer 0-100", options.maxSlope);
  } else {
    this.options.claheMaxSlope = options.maxSlope;
  }
  return this;
}
function convolve(kernel2) {
  if (!is$4.object(kernel2) || !Array.isArray(kernel2.kernel) || !is$4.integer(kernel2.width) || !is$4.integer(kernel2.height) || !is$4.inRange(kernel2.width, 3, 1001) || !is$4.inRange(kernel2.height, 3, 1001) || kernel2.height * kernel2.width !== kernel2.kernel.length) {
    throw new Error("Invalid convolution kernel");
  }
  if (!is$4.integer(kernel2.scale)) {
    kernel2.scale = kernel2.kernel.reduce(function(a, b) {
      return a + b;
    }, 0);
  }
  if (kernel2.scale < 1) {
    kernel2.scale = 1;
  }
  if (!is$4.integer(kernel2.offset)) {
    kernel2.offset = 0;
  }
  this.options.convKernel = kernel2;
  return this;
}
function threshold(threshold2, options) {
  if (!is$4.defined(threshold2)) {
    this.options.threshold = 128;
  } else if (is$4.bool(threshold2)) {
    this.options.threshold = threshold2 ? 128 : 0;
  } else if (is$4.integer(threshold2) && is$4.inRange(threshold2, 0, 255)) {
    this.options.threshold = threshold2;
  } else {
    throw is$4.invalidParameterError("threshold", "integer between 0 and 255", threshold2);
  }
  if (!is$4.object(options) || options.greyscale === true || options.grayscale === true) {
    this.options.thresholdGrayscale = true;
  } else {
    this.options.thresholdGrayscale = false;
  }
  return this;
}
function boolean(operand, operator, options) {
  this.options.boolean = this._createInputDescriptor(operand, options);
  if (is$4.string(operator) && is$4.inArray(operator, ["and", "or", "eor"])) {
    this.options.booleanOp = operator;
  } else {
    throw is$4.invalidParameterError("operator", "one of: and, or, eor", operator);
  }
  return this;
}
function linear(a, b) {
  if (!is$4.defined(a)) {
    this.options.linearA = 1;
  } else if (is$4.number(a)) {
    this.options.linearA = a;
  } else {
    throw is$4.invalidParameterError("a", "numeric", a);
  }
  if (!is$4.defined(b)) {
    this.options.linearB = 0;
  } else if (is$4.number(b)) {
    this.options.linearB = b;
  } else {
    throw is$4.invalidParameterError("b", "numeric", b);
  }
  return this;
}
function recomb(inputMatrix) {
  if (!Array.isArray(inputMatrix) || inputMatrix.length !== 3 || inputMatrix[0].length !== 3 || inputMatrix[1].length !== 3 || inputMatrix[2].length !== 3) {
    throw new Error("Invalid recombination matrix");
  }
  this.options.recombMatrix = [
    inputMatrix[0][0],
    inputMatrix[0][1],
    inputMatrix[0][2],
    inputMatrix[1][0],
    inputMatrix[1][1],
    inputMatrix[1][2],
    inputMatrix[2][0],
    inputMatrix[2][1],
    inputMatrix[2][2]
  ].map(Number);
  return this;
}
function modulate(options) {
  if (!is$4.plainObject(options)) {
    throw is$4.invalidParameterError("options", "plain object", options);
  }
  if ("brightness" in options) {
    if (is$4.number(options.brightness) && options.brightness >= 0) {
      this.options.brightness = options.brightness;
    } else {
      throw is$4.invalidParameterError("brightness", "number above zero", options.brightness);
    }
  }
  if ("saturation" in options) {
    if (is$4.number(options.saturation) && options.saturation >= 0) {
      this.options.saturation = options.saturation;
    } else {
      throw is$4.invalidParameterError("saturation", "number above zero", options.saturation);
    }
  }
  if ("hue" in options) {
    if (is$4.integer(options.hue)) {
      this.options.hue = options.hue % 360;
    } else {
      throw is$4.invalidParameterError("hue", "number", options.hue);
    }
  }
  if ("lightness" in options) {
    if (is$4.number(options.lightness)) {
      this.options.lightness = options.lightness;
    } else {
      throw is$4.invalidParameterError("lightness", "number", options.lightness);
    }
  }
  return this;
}
var operation = function(Sharp2) {
  Object.assign(Sharp2.prototype, {
    rotate,
    flip,
    flop,
    affine,
    sharpen,
    median,
    blur,
    flatten,
    gamma,
    negate,
    normalise,
    normalize,
    clahe,
    convolve,
    threshold,
    boolean,
    linear,
    recomb,
    modulate
  });
};
const color = require$$0$4;
const is$3 = is$9;
const colourspace = {
  multiband: "multiband",
  "b-w": "b-w",
  bw: "b-w",
  cmyk: "cmyk",
  srgb: "srgb"
};
function tint(rgb) {
  const colour2 = color(rgb);
  this.options.tintA = colour2.a();
  this.options.tintB = colour2.b();
  return this;
}
function greyscale(greyscale2) {
  this.options.greyscale = is$3.bool(greyscale2) ? greyscale2 : true;
  return this;
}
function grayscale(grayscale2) {
  return this.greyscale(grayscale2);
}
function pipelineColourspace(colourspace2) {
  if (!is$3.string(colourspace2)) {
    throw is$3.invalidParameterError("colourspace", "string", colourspace2);
  }
  this.options.colourspaceInput = colourspace2;
  return this;
}
function pipelineColorspace(colorspace) {
  return this.pipelineColourspace(colorspace);
}
function toColourspace(colourspace2) {
  if (!is$3.string(colourspace2)) {
    throw is$3.invalidParameterError("colourspace", "string", colourspace2);
  }
  this.options.colourspace = colourspace2;
  return this;
}
function toColorspace(colorspace) {
  return this.toColourspace(colorspace);
}
function _setBackgroundColourOption(key, value) {
  if (is$3.defined(value)) {
    if (is$3.object(value) || is$3.string(value)) {
      const colour2 = color(value);
      this.options[key] = [
        colour2.red(),
        colour2.green(),
        colour2.blue(),
        Math.round(colour2.alpha() * 255)
      ];
    } else {
      throw is$3.invalidParameterError("background", "object or string", value);
    }
  }
}
var colour = function(Sharp2) {
  Object.assign(Sharp2.prototype, {
    tint,
    greyscale,
    grayscale,
    pipelineColourspace,
    pipelineColorspace,
    toColourspace,
    toColorspace,
    _setBackgroundColourOption
  });
  Sharp2.colourspace = colourspace;
  Sharp2.colorspace = colourspace;
};
const is$2 = is$9;
const bool = {
  and: "and",
  or: "or",
  eor: "eor"
};
function removeAlpha() {
  this.options.removeAlpha = true;
  return this;
}
function ensureAlpha(alpha) {
  if (is$2.defined(alpha)) {
    if (is$2.number(alpha) && is$2.inRange(alpha, 0, 1)) {
      this.options.ensureAlpha = alpha;
    } else {
      throw is$2.invalidParameterError("alpha", "number between 0 and 1", alpha);
    }
  } else {
    this.options.ensureAlpha = 1;
  }
  return this;
}
function extractChannel(channel2) {
  const channelMap = { red: 0, green: 1, blue: 2, alpha: 3 };
  if (Object.keys(channelMap).includes(channel2)) {
    channel2 = channelMap[channel2];
  }
  if (is$2.integer(channel2) && is$2.inRange(channel2, 0, 4)) {
    this.options.extractChannel = channel2;
  } else {
    throw is$2.invalidParameterError("channel", "integer or one of: red, green, blue, alpha", channel2);
  }
  return this.toColourspace("b-w");
}
function joinChannel(images, options) {
  if (Array.isArray(images)) {
    images.forEach(function(image) {
      this.options.joinChannelIn.push(this._createInputDescriptor(image, options));
    }, this);
  } else {
    this.options.joinChannelIn.push(this._createInputDescriptor(images, options));
  }
  return this;
}
function bandbool(boolOp) {
  if (is$2.string(boolOp) && is$2.inArray(boolOp, ["and", "or", "eor"])) {
    this.options.bandBoolOp = boolOp;
  } else {
    throw is$2.invalidParameterError("boolOp", "one of: and, or, eor", boolOp);
  }
  return this;
}
var channel = function(Sharp2) {
  Object.assign(Sharp2.prototype, {
    removeAlpha,
    ensureAlpha,
    extractChannel,
    joinChannel,
    bandbool
  });
  Sharp2.bool = bool;
};
const path$1 = require$$2;
const is$1 = is$9;
const sharp$1 = sharp$3.exports;
const formats = /* @__PURE__ */ new Map([
  ["heic", "heif"],
  ["heif", "heif"],
  ["avif", "avif"],
  ["jpeg", "jpeg"],
  ["jpg", "jpeg"],
  ["png", "png"],
  ["raw", "raw"],
  ["tiff", "tiff"],
  ["tif", "tiff"],
  ["webp", "webp"],
  ["gif", "gif"],
  ["jp2", "jp2"],
  ["jpx", "jp2"],
  ["j2k", "jp2"],
  ["j2c", "jp2"]
]);
const errJp2Save = new Error("JP2 output requires libvips with support for OpenJPEG");
const bitdepthFromColourCount = (colours) => 1 << 31 - Math.clz32(Math.ceil(Math.log2(colours)));
function toFile2(fileOut, callback) {
  let err;
  if (!is$1.string(fileOut)) {
    err = new Error("Missing output file path");
  } else if (is$1.string(this.options.input.file) && path$1.resolve(this.options.input.file) === path$1.resolve(fileOut)) {
    err = new Error("Cannot use same file for input and output");
  }
  if (err) {
    if (is$1.fn(callback)) {
      callback(err);
    } else {
      return Promise.reject(err);
    }
  } else {
    this.options.fileOut = fileOut;
    return this._pipeline(callback);
  }
  return this;
}
function toBuffer2(options, callback) {
  if (is$1.object(options)) {
    this._setBooleanOption("resolveWithObject", options.resolveWithObject);
  } else if (this.options.resolveWithObject) {
    this.options.resolveWithObject = false;
  }
  this.options.fileOut = "";
  return this._pipeline(is$1.fn(options) ? options : callback);
}
function withMetadata(options) {
  this.options.withMetadata = is$1.bool(options) ? options : true;
  if (is$1.object(options)) {
    if (is$1.defined(options.orientation)) {
      if (is$1.integer(options.orientation) && is$1.inRange(options.orientation, 1, 8)) {
        this.options.withMetadataOrientation = options.orientation;
      } else {
        throw is$1.invalidParameterError("orientation", "integer between 1 and 8", options.orientation);
      }
    }
    if (is$1.defined(options.density)) {
      if (is$1.number(options.density) && options.density > 0) {
        this.options.withMetadataDensity = options.density;
      } else {
        throw is$1.invalidParameterError("density", "positive number", options.density);
      }
    }
    if (is$1.defined(options.icc)) {
      if (is$1.string(options.icc)) {
        this.options.withMetadataIcc = options.icc;
      } else {
        throw is$1.invalidParameterError("icc", "string filesystem path to ICC profile", options.icc);
      }
    }
    if (is$1.defined(options.exif)) {
      if (is$1.object(options.exif)) {
        for (const [ifd, entries] of Object.entries(options.exif)) {
          if (is$1.object(entries)) {
            for (const [k, v] of Object.entries(entries)) {
              if (is$1.string(v)) {
                this.options.withMetadataStrs[`exif-${ifd.toLowerCase()}-${k}`] = v;
              } else {
                throw is$1.invalidParameterError(`exif.${ifd}.${k}`, "string", v);
              }
            }
          } else {
            throw is$1.invalidParameterError(`exif.${ifd}`, "object", entries);
          }
        }
      } else {
        throw is$1.invalidParameterError("exif", "object", options.exif);
      }
    }
  }
  return this;
}
function toFormat(format2, options) {
  const actualFormat = formats.get((is$1.object(format2) && is$1.string(format2.id) ? format2.id : format2).toLowerCase());
  if (!actualFormat) {
    throw is$1.invalidParameterError("format", `one of: ${[...formats.keys()].join(", ")}`, format2);
  }
  return this[actualFormat](options);
}
function jpeg(options) {
  if (is$1.object(options)) {
    if (is$1.defined(options.quality)) {
      if (is$1.integer(options.quality) && is$1.inRange(options.quality, 1, 100)) {
        this.options.jpegQuality = options.quality;
      } else {
        throw is$1.invalidParameterError("quality", "integer between 1 and 100", options.quality);
      }
    }
    if (is$1.defined(options.progressive)) {
      this._setBooleanOption("jpegProgressive", options.progressive);
    }
    if (is$1.defined(options.chromaSubsampling)) {
      if (is$1.string(options.chromaSubsampling) && is$1.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
        this.options.jpegChromaSubsampling = options.chromaSubsampling;
      } else {
        throw is$1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
      }
    }
    const optimiseCoding = is$1.bool(options.optimizeCoding) ? options.optimizeCoding : options.optimiseCoding;
    if (is$1.defined(optimiseCoding)) {
      this._setBooleanOption("jpegOptimiseCoding", optimiseCoding);
    }
    if (is$1.defined(options.mozjpeg)) {
      if (is$1.bool(options.mozjpeg)) {
        if (options.mozjpeg) {
          this.options.jpegTrellisQuantisation = true;
          this.options.jpegOvershootDeringing = true;
          this.options.jpegOptimiseScans = true;
          this.options.jpegProgressive = true;
          this.options.jpegQuantisationTable = 3;
        }
      } else {
        throw is$1.invalidParameterError("mozjpeg", "boolean", options.mozjpeg);
      }
    }
    const trellisQuantisation = is$1.bool(options.trellisQuantization) ? options.trellisQuantization : options.trellisQuantisation;
    if (is$1.defined(trellisQuantisation)) {
      this._setBooleanOption("jpegTrellisQuantisation", trellisQuantisation);
    }
    if (is$1.defined(options.overshootDeringing)) {
      this._setBooleanOption("jpegOvershootDeringing", options.overshootDeringing);
    }
    const optimiseScans = is$1.bool(options.optimizeScans) ? options.optimizeScans : options.optimiseScans;
    if (is$1.defined(optimiseScans)) {
      this._setBooleanOption("jpegOptimiseScans", optimiseScans);
      if (optimiseScans) {
        this.options.jpegProgressive = true;
      }
    }
    const quantisationTable = is$1.number(options.quantizationTable) ? options.quantizationTable : options.quantisationTable;
    if (is$1.defined(quantisationTable)) {
      if (is$1.integer(quantisationTable) && is$1.inRange(quantisationTable, 0, 8)) {
        this.options.jpegQuantisationTable = quantisationTable;
      } else {
        throw is$1.invalidParameterError("quantisationTable", "integer between 0 and 8", quantisationTable);
      }
    }
  }
  return this._updateFormatOut("jpeg", options);
}
function png(options) {
  if (is$1.object(options)) {
    if (is$1.defined(options.progressive)) {
      this._setBooleanOption("pngProgressive", options.progressive);
    }
    if (is$1.defined(options.compressionLevel)) {
      if (is$1.integer(options.compressionLevel) && is$1.inRange(options.compressionLevel, 0, 9)) {
        this.options.pngCompressionLevel = options.compressionLevel;
      } else {
        throw is$1.invalidParameterError("compressionLevel", "integer between 0 and 9", options.compressionLevel);
      }
    }
    if (is$1.defined(options.adaptiveFiltering)) {
      this._setBooleanOption("pngAdaptiveFiltering", options.adaptiveFiltering);
    }
    if (is$1.defined(options.palette)) {
      this._setBooleanOption("pngPalette", options.palette);
    } else if ([options.quality, options.effort, options.colours, options.colors, options.dither].some(is$1.defined)) {
      this._setBooleanOption("pngPalette", true);
    }
    if (this.options.pngPalette) {
      if (is$1.defined(options.quality)) {
        if (is$1.integer(options.quality) && is$1.inRange(options.quality, 0, 100)) {
          this.options.pngQuality = options.quality;
        } else {
          throw is$1.invalidParameterError("quality", "integer between 0 and 100", options.quality);
        }
      }
      if (is$1.defined(options.effort)) {
        if (is$1.integer(options.effort) && is$1.inRange(options.effort, 1, 10)) {
          this.options.pngEffort = options.effort;
        } else {
          throw is$1.invalidParameterError("effort", "integer between 1 and 10", options.effort);
        }
      }
      const colours = options.colours || options.colors;
      if (is$1.defined(colours)) {
        if (is$1.integer(colours) && is$1.inRange(colours, 2, 256)) {
          this.options.pngBitdepth = bitdepthFromColourCount(colours);
        } else {
          throw is$1.invalidParameterError("colours", "integer between 2 and 256", colours);
        }
      }
      if (is$1.defined(options.dither)) {
        if (is$1.number(options.dither) && is$1.inRange(options.dither, 0, 1)) {
          this.options.pngDither = options.dither;
        } else {
          throw is$1.invalidParameterError("dither", "number between 0.0 and 1.0", options.dither);
        }
      }
    }
  }
  return this._updateFormatOut("png", options);
}
function webp(options) {
  if (is$1.object(options)) {
    if (is$1.defined(options.quality)) {
      if (is$1.integer(options.quality) && is$1.inRange(options.quality, 1, 100)) {
        this.options.webpQuality = options.quality;
      } else {
        throw is$1.invalidParameterError("quality", "integer between 1 and 100", options.quality);
      }
    }
    if (is$1.defined(options.alphaQuality)) {
      if (is$1.integer(options.alphaQuality) && is$1.inRange(options.alphaQuality, 0, 100)) {
        this.options.webpAlphaQuality = options.alphaQuality;
      } else {
        throw is$1.invalidParameterError("alphaQuality", "integer between 0 and 100", options.alphaQuality);
      }
    }
    if (is$1.defined(options.lossless)) {
      this._setBooleanOption("webpLossless", options.lossless);
    }
    if (is$1.defined(options.nearLossless)) {
      this._setBooleanOption("webpNearLossless", options.nearLossless);
    }
    if (is$1.defined(options.smartSubsample)) {
      this._setBooleanOption("webpSmartSubsample", options.smartSubsample);
    }
    const effort = is$1.defined(options.effort) ? options.effort : options.reductionEffort;
    if (is$1.defined(effort)) {
      if (is$1.integer(effort) && is$1.inRange(effort, 0, 6)) {
        this.options.webpEffort = effort;
      } else {
        throw is$1.invalidParameterError("effort", "integer between 0 and 6", effort);
      }
    }
  }
  trySetAnimationOptions(options, this.options);
  return this._updateFormatOut("webp", options);
}
function gif(options) {
  if (is$1.object(options)) {
    const colours = options.colours || options.colors;
    if (is$1.defined(colours)) {
      if (is$1.integer(colours) && is$1.inRange(colours, 2, 256)) {
        this.options.gifBitdepth = bitdepthFromColourCount(colours);
      } else {
        throw is$1.invalidParameterError("colours", "integer between 2 and 256", colours);
      }
    }
    if (is$1.defined(options.effort)) {
      if (is$1.number(options.effort) && is$1.inRange(options.effort, 1, 10)) {
        this.options.gifEffort = options.effort;
      } else {
        throw is$1.invalidParameterError("effort", "integer between 1 and 10", options.effort);
      }
    }
    if (is$1.defined(options.dither)) {
      if (is$1.number(options.dither) && is$1.inRange(options.dither, 0, 1)) {
        this.options.gifDither = options.dither;
      } else {
        throw is$1.invalidParameterError("dither", "number between 0.0 and 1.0", options.dither);
      }
    }
  }
  trySetAnimationOptions(options, this.options);
  return this._updateFormatOut("gif", options);
}
function jp2(options) {
  if (!this.constructor.format.jp2k.output.buffer) {
    throw errJp2Save;
  }
  if (is$1.object(options)) {
    if (is$1.defined(options.quality)) {
      if (is$1.integer(options.quality) && is$1.inRange(options.quality, 1, 100)) {
        this.options.jp2Quality = options.quality;
      } else {
        throw is$1.invalidParameterError("quality", "integer between 1 and 100", options.quality);
      }
    }
    if (is$1.defined(options.lossless)) {
      if (is$1.bool(options.lossless)) {
        this.options.jp2Lossless = options.lossless;
      } else {
        throw is$1.invalidParameterError("lossless", "boolean", options.lossless);
      }
    }
    if (is$1.defined(options.tileWidth)) {
      if (is$1.integer(options.tileWidth) && is$1.inRange(options.tileWidth, 1, 32768)) {
        this.options.jp2TileWidth = options.tileWidth;
      } else {
        throw is$1.invalidParameterError("tileWidth", "integer between 1 and 32768", options.tileWidth);
      }
    }
    if (is$1.defined(options.tileHeight)) {
      if (is$1.integer(options.tileHeight) && is$1.inRange(options.tileHeight, 1, 32768)) {
        this.options.jp2TileHeight = options.tileHeight;
      } else {
        throw is$1.invalidParameterError("tileHeight", "integer between 1 and 32768", options.tileHeight);
      }
    }
    if (is$1.defined(options.chromaSubsampling)) {
      if (is$1.string(options.chromaSubsampling) && is$1.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
        this.options.heifChromaSubsampling = options.chromaSubsampling;
      } else {
        throw is$1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
      }
    }
  }
  return this._updateFormatOut("jp2", options);
}
function trySetAnimationOptions(source, target) {
  if (is$1.object(source) && is$1.defined(source.loop)) {
    if (is$1.integer(source.loop) && is$1.inRange(source.loop, 0, 65535)) {
      target.loop = source.loop;
    } else {
      throw is$1.invalidParameterError("loop", "integer between 0 and 65535", source.loop);
    }
  }
  if (is$1.object(source) && is$1.defined(source.delay)) {
    if (is$1.integer(source.delay) && is$1.inRange(source.delay, 0, 65535)) {
      target.delay = [source.delay];
    } else if (Array.isArray(source.delay) && source.delay.every(is$1.integer) && source.delay.every((v) => is$1.inRange(v, 0, 65535))) {
      target.delay = source.delay;
    } else {
      throw is$1.invalidParameterError("delay", "integer or an array of integers between 0 and 65535", source.delay);
    }
  }
}
function tiff(options) {
  if (is$1.object(options)) {
    if (is$1.defined(options.quality)) {
      if (is$1.integer(options.quality) && is$1.inRange(options.quality, 1, 100)) {
        this.options.tiffQuality = options.quality;
      } else {
        throw is$1.invalidParameterError("quality", "integer between 1 and 100", options.quality);
      }
    }
    if (is$1.defined(options.bitdepth)) {
      if (is$1.integer(options.bitdepth) && is$1.inArray(options.bitdepth, [1, 2, 4, 8])) {
        this.options.tiffBitdepth = options.bitdepth;
      } else {
        throw is$1.invalidParameterError("bitdepth", "1, 2, 4 or 8", options.bitdepth);
      }
    }
    if (is$1.defined(options.tile)) {
      this._setBooleanOption("tiffTile", options.tile);
    }
    if (is$1.defined(options.tileWidth)) {
      if (is$1.integer(options.tileWidth) && options.tileWidth > 0) {
        this.options.tiffTileWidth = options.tileWidth;
      } else {
        throw is$1.invalidParameterError("tileWidth", "integer greater than zero", options.tileWidth);
      }
    }
    if (is$1.defined(options.tileHeight)) {
      if (is$1.integer(options.tileHeight) && options.tileHeight > 0) {
        this.options.tiffTileHeight = options.tileHeight;
      } else {
        throw is$1.invalidParameterError("tileHeight", "integer greater than zero", options.tileHeight);
      }
    }
    if (is$1.defined(options.pyramid)) {
      this._setBooleanOption("tiffPyramid", options.pyramid);
    }
    if (is$1.defined(options.xres)) {
      if (is$1.number(options.xres) && options.xres > 0) {
        this.options.tiffXres = options.xres;
      } else {
        throw is$1.invalidParameterError("xres", "number greater than zero", options.xres);
      }
    }
    if (is$1.defined(options.yres)) {
      if (is$1.number(options.yres) && options.yres > 0) {
        this.options.tiffYres = options.yres;
      } else {
        throw is$1.invalidParameterError("yres", "number greater than zero", options.yres);
      }
    }
    if (is$1.defined(options.compression)) {
      if (is$1.string(options.compression) && is$1.inArray(options.compression, ["lzw", "deflate", "jpeg", "ccittfax4", "none"])) {
        this.options.tiffCompression = options.compression;
      } else {
        throw is$1.invalidParameterError("compression", "one of: lzw, deflate, jpeg, ccittfax4, none", options.compression);
      }
    }
    if (is$1.defined(options.predictor)) {
      if (is$1.string(options.predictor) && is$1.inArray(options.predictor, ["none", "horizontal", "float"])) {
        this.options.tiffPredictor = options.predictor;
      } else {
        throw is$1.invalidParameterError("predictor", "one of: none, horizontal, float", options.predictor);
      }
    }
    if (is$1.defined(options.resolutionUnit)) {
      if (is$1.string(options.resolutionUnit) && is$1.inArray(options.resolutionUnit, ["inch", "cm"])) {
        this.options.tiffResolutionUnit = options.resolutionUnit;
      } else {
        throw is$1.invalidParameterError("resolutionUnit", "one of: inch, cm", options.resolutionUnit);
      }
    }
  }
  return this._updateFormatOut("tiff", options);
}
function avif(options) {
  return this.heif({ ...options, compression: "av1" });
}
function heif(options) {
  if (is$1.object(options)) {
    if (is$1.defined(options.quality)) {
      if (is$1.integer(options.quality) && is$1.inRange(options.quality, 1, 100)) {
        this.options.heifQuality = options.quality;
      } else {
        throw is$1.invalidParameterError("quality", "integer between 1 and 100", options.quality);
      }
    }
    if (is$1.defined(options.lossless)) {
      if (is$1.bool(options.lossless)) {
        this.options.heifLossless = options.lossless;
      } else {
        throw is$1.invalidParameterError("lossless", "boolean", options.lossless);
      }
    }
    if (is$1.defined(options.compression)) {
      if (is$1.string(options.compression) && is$1.inArray(options.compression, ["av1", "hevc"])) {
        this.options.heifCompression = options.compression;
      } else {
        throw is$1.invalidParameterError("compression", "one of: av1, hevc", options.compression);
      }
    }
    if (is$1.defined(options.effort)) {
      if (is$1.integer(options.effort) && is$1.inRange(options.effort, 0, 9)) {
        this.options.heifEffort = options.effort;
      } else {
        throw is$1.invalidParameterError("effort", "integer between 0 and 9", options.effort);
      }
    } else if (is$1.defined(options.speed)) {
      if (is$1.integer(options.speed) && is$1.inRange(options.speed, 0, 9)) {
        this.options.heifEffort = 9 - options.speed;
      } else {
        throw is$1.invalidParameterError("speed", "integer between 0 and 9", options.speed);
      }
    }
    if (is$1.defined(options.chromaSubsampling)) {
      if (is$1.string(options.chromaSubsampling) && is$1.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
        this.options.heifChromaSubsampling = options.chromaSubsampling;
      } else {
        throw is$1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
      }
    }
  }
  return this._updateFormatOut("heif", options);
}
function raw(options) {
  if (is$1.object(options)) {
    if (is$1.defined(options.depth)) {
      if (is$1.string(options.depth) && is$1.inArray(
        options.depth,
        ["char", "uchar", "short", "ushort", "int", "uint", "float", "complex", "double", "dpcomplex"]
      )) {
        this.options.rawDepth = options.depth;
      } else {
        throw is$1.invalidParameterError("depth", "one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex", options.depth);
      }
    }
  }
  return this._updateFormatOut("raw");
}
function tile(options) {
  if (is$1.object(options)) {
    if (is$1.defined(options.size)) {
      if (is$1.integer(options.size) && is$1.inRange(options.size, 1, 8192)) {
        this.options.tileSize = options.size;
      } else {
        throw is$1.invalidParameterError("size", "integer between 1 and 8192", options.size);
      }
    }
    if (is$1.defined(options.overlap)) {
      if (is$1.integer(options.overlap) && is$1.inRange(options.overlap, 0, 8192)) {
        if (options.overlap > this.options.tileSize) {
          throw is$1.invalidParameterError("overlap", `<= size (${this.options.tileSize})`, options.overlap);
        }
        this.options.tileOverlap = options.overlap;
      } else {
        throw is$1.invalidParameterError("overlap", "integer between 0 and 8192", options.overlap);
      }
    }
    if (is$1.defined(options.container)) {
      if (is$1.string(options.container) && is$1.inArray(options.container, ["fs", "zip"])) {
        this.options.tileContainer = options.container;
      } else {
        throw is$1.invalidParameterError("container", "one of: fs, zip", options.container);
      }
    }
    if (is$1.defined(options.layout)) {
      if (is$1.string(options.layout) && is$1.inArray(options.layout, ["dz", "google", "iiif", "iiif3", "zoomify"])) {
        this.options.tileLayout = options.layout;
      } else {
        throw is$1.invalidParameterError("layout", "one of: dz, google, iiif, iiif3, zoomify", options.layout);
      }
    }
    if (is$1.defined(options.angle)) {
      if (is$1.integer(options.angle) && !(options.angle % 90)) {
        this.options.tileAngle = options.angle;
      } else {
        throw is$1.invalidParameterError("angle", "positive/negative multiple of 90", options.angle);
      }
    }
    this._setBackgroundColourOption("tileBackground", options.background);
    if (is$1.defined(options.depth)) {
      if (is$1.string(options.depth) && is$1.inArray(options.depth, ["onepixel", "onetile", "one"])) {
        this.options.tileDepth = options.depth;
      } else {
        throw is$1.invalidParameterError("depth", "one of: onepixel, onetile, one", options.depth);
      }
    }
    if (is$1.defined(options.skipBlanks)) {
      if (is$1.integer(options.skipBlanks) && is$1.inRange(options.skipBlanks, -1, 65535)) {
        this.options.tileSkipBlanks = options.skipBlanks;
      } else {
        throw is$1.invalidParameterError("skipBlanks", "integer between -1 and 255/65535", options.skipBlanks);
      }
    } else if (is$1.defined(options.layout) && options.layout === "google") {
      this.options.tileSkipBlanks = 5;
    }
    const centre = is$1.bool(options.center) ? options.center : options.centre;
    if (is$1.defined(centre)) {
      this._setBooleanOption("tileCentre", centre);
    }
    if (is$1.defined(options.id)) {
      if (is$1.string(options.id)) {
        this.options.tileId = options.id;
      } else {
        throw is$1.invalidParameterError("id", "string", options.id);
      }
    }
  }
  if (is$1.inArray(this.options.formatOut, ["jpeg", "png", "webp"])) {
    this.options.tileFormat = this.options.formatOut;
  } else if (this.options.formatOut !== "input") {
    throw is$1.invalidParameterError("format", "one of: jpeg, png, webp", this.options.formatOut);
  }
  return this._updateFormatOut("dz");
}
function timeout(options) {
  if (!is$1.plainObject(options)) {
    throw is$1.invalidParameterError("options", "object", options);
  }
  if (is$1.integer(options.seconds) && is$1.inRange(options.seconds, 0, 3600)) {
    this.options.timeoutSeconds = options.seconds;
  } else {
    throw is$1.invalidParameterError("seconds", "integer between 0 and 3600", options.seconds);
  }
  return this;
}
function _updateFormatOut(formatOut, options) {
  if (!(is$1.object(options) && options.force === false)) {
    this.options.formatOut = formatOut;
  }
  return this;
}
function _setBooleanOption(key, val) {
  if (is$1.bool(val)) {
    this.options[key] = val;
  } else {
    throw is$1.invalidParameterError(key, "boolean", val);
  }
}
function _read() {
  if (!this.options.streamOut) {
    this.options.streamOut = true;
    this._pipeline();
  }
}
function _pipeline(callback) {
  if (typeof callback === "function") {
    if (this._isStreamInput()) {
      this.on("finish", () => {
        this._flattenBufferIn();
        sharp$1.pipeline(this.options, callback);
      });
    } else {
      sharp$1.pipeline(this.options, callback);
    }
    return this;
  } else if (this.options.streamOut) {
    if (this._isStreamInput()) {
      this.once("finish", () => {
        this._flattenBufferIn();
        sharp$1.pipeline(this.options, (err, data, info) => {
          if (err) {
            this.emit("error", err);
          } else {
            this.emit("info", info);
            this.push(data);
          }
          this.push(null);
          this.emit("close");
        });
      });
      if (this.streamInFinished) {
        this.emit("finish");
      }
    } else {
      sharp$1.pipeline(this.options, (err, data, info) => {
        if (err) {
          this.emit("error", err);
        } else {
          this.emit("info", info);
          this.push(data);
        }
        this.push(null);
        this.emit("close");
      });
    }
    return this;
  } else {
    if (this._isStreamInput()) {
      return new Promise((resolve, reject) => {
        this.once("finish", () => {
          this._flattenBufferIn();
          sharp$1.pipeline(this.options, (err, data, info) => {
            if (err) {
              reject(err);
            } else {
              if (this.options.resolveWithObject) {
                resolve({ data, info });
              } else {
                resolve(data);
              }
            }
          });
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        sharp$1.pipeline(this.options, (err, data, info) => {
          if (err) {
            reject(err);
          } else {
            if (this.options.resolveWithObject) {
              resolve({ data, info });
            } else {
              resolve(data);
            }
          }
        });
      });
    }
  }
}
var output = function(Sharp2) {
  Object.assign(Sharp2.prototype, {
    toFile: toFile2,
    toBuffer: toBuffer2,
    withMetadata,
    toFormat,
    jpeg,
    jp2,
    png,
    webp,
    tiff,
    avif,
    heif,
    gif,
    raw,
    tile,
    timeout,
    _updateFormatOut,
    _setBooleanOption,
    _read,
    _pipeline
  });
};
const fs = require$$0$1;
const path = require$$2;
const events = require$$2$1;
const detectLibc = require$$0$2;
const is = is$9;
const platformAndArch = platform$1();
const sharp = sharp$3.exports;
const format = sharp.format();
const interpolators = {
  nearest: "nearest",
  bilinear: "bilinear",
  bicubic: "bicubic",
  locallyBoundedBicubic: "lbb",
  nohalo: "nohalo",
  vertexSplitQuadraticBasisSpline: "vsqbs"
};
let versions = {
  vips: sharp.libvipsVersion()
};
try {
  versions = commonjsRequire(`../vendor/${versions.vips}/${platformAndArch}/versions.json`);
} catch (_err) {
}
const vendor = {
  current: platformAndArch,
  installed: []
};
try {
  vendor.installed = fs.readdirSync(path.join(__dirname, `../vendor/${versions.vips}`));
} catch (_err) {
}
function cache(options) {
  if (is.bool(options)) {
    if (options) {
      return sharp.cache(50, 20, 100);
    } else {
      return sharp.cache(0, 0, 0);
    }
  } else if (is.object(options)) {
    return sharp.cache(options.memory, options.files, options.items);
  } else {
    return sharp.cache();
  }
}
cache(true);
function concurrency(concurrency2) {
  return sharp.concurrency(is.integer(concurrency2) ? concurrency2 : null);
}
if (detectLibc.familySync() === detectLibc.GLIBC && !sharp._isUsingJemalloc()) {
  sharp.concurrency(1);
}
const queue = new events.EventEmitter();
function counters() {
  return sharp.counters();
}
function simd(simd2) {
  return sharp.simd(is.bool(simd2) ? simd2 : null);
}
simd(true);
var utility = function(Sharp2) {
  Sharp2.cache = cache;
  Sharp2.concurrency = concurrency;
  Sharp2.counters = counters;
  Sharp2.simd = simd;
  Sharp2.format = format;
  Sharp2.interpolators = interpolators;
  Sharp2.versions = versions;
  Sharp2.vendor = vendor;
  Sharp2.queue = queue;
};
const Sharp = constructor;
input(Sharp);
resize_1(Sharp);
composite_1(Sharp);
operation(Sharp);
colour(Sharp);
channel(Sharp);
output(Sharp);
utility(Sharp);
