import { c as create_ssr_component, d as each, e as escape, b as subscribe, v as validate_component, a as add_attribute } from "../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import { w as writable } from "../../../_app/immutable/chunks/common-65c7f3c2.js";
import { L as LogoWhite } from "../../../_app/immutable/chunks/logo-white-bbda6e5d.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import crypto from "crypto";
import { C as CrownImage } from "../../../_app/immutable/chunks/crown-f3b9967b.js";
import "../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const Confetti_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.confetti-holder.svelte-d4f2zx.svelte-d4f2zx{position:relative}@-webkit-keyframes svelte-d4f2zx-rotate{0%{transform:skew(var(--skew)) rotate3d(var(--full-rotation))}to{transform:skew(var(--skew)) rotate3d(var(--rotation-xyz),calc(var(--rotation-deg) + 1turn))}}@keyframes svelte-d4f2zx-rotate{0%{transform:skew(var(--skew)) rotate3d(var(--full-rotation))}to{transform:skew(var(--skew)) rotate3d(var(--rotation-xyz),calc(var(--rotation-deg) + 1turn))}}@-webkit-keyframes svelte-d4f2zx-translate{0%{opacity:1}8%{opacity:1;transform:translateY(calc(var(--translate-y)*.95)) translateX(calc(var(--translate-x)*(var(--x-spread)*0.9)))}12%{opacity:1;transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x)*(var(--x-spread)*0.95)))}16%{opacity:1;transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x)*var(--x-spread)))}to{opacity:0;transform:translateY(calc(var(--translate-y) + var(--fall-distance))) translateX(var(--translate-x))}}@keyframes svelte-d4f2zx-translate{0%{opacity:1}8%{opacity:1;transform:translateY(calc(var(--translate-y)*.95)) translateX(calc(var(--translate-x)*(var(--x-spread)*0.9)))}12%{opacity:1;transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x)*(var(--x-spread)*0.95)))}16%{opacity:1;transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x)*var(--x-spread)))}to{opacity:0;transform:translateY(calc(var(--translate-y) + var(--fall-distance))) translateX(var(--translate-x))}}@-webkit-keyframes svelte-d4f2zx-no-gravity-translate{0%{opacity:1}to{opacity:0;transform:translateY(var(--translate-y)) translateX(var(--translate-x))}}@keyframes svelte-d4f2zx-no-gravity-translate{0%{opacity:1}to{opacity:0;transform:translateY(var(--translate-y)) translateX(var(--translate-x))}}.confetti.svelte-d4f2zx.svelte-d4f2zx{--translate-y:calc(-200px*var(--translate-y-multiplier));--translate-x:calc(200px*var(--translate-x-multiplier));-webkit-animation:svelte-d4f2zx-translate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;animation:svelte-d4f2zx-translate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;height:calc(var(--size)*var(--scale));opacity:0;pointer-events:none;position:absolute;width:calc(var(--size)*var(--scale))}.confetti.svelte-d4f2zx.svelte-d4f2zx:before{--full-rotation:var(--rotation-xyz),var(--rotation-deg);-webkit-animation:svelte-d4f2zx-rotate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;animation:svelte-d4f2zx-rotate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;background:var(--color);background-size:contain;content:"";display:block;height:100%;transform:skew(var(--skew)) rotate3d(var(--full-rotation));width:100%}.rounded.svelte-d4f2zx .confetti.svelte-d4f2zx:before{border-radius:50%}.cone.svelte-d4f2zx .confetti.svelte-d4f2zx{--translate-x:calc(200px*var(--translate-y-multiplier)*var(--translate-x-multiplier))}.no-gravity.svelte-d4f2zx .confetti.svelte-d4f2zx{-webkit-animation-name:svelte-d4f2zx-no-gravity-translate;animation-name:svelte-d4f2zx-no-gravity-translate;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@media(prefers-reduced-motion){.confetti.svelte-d4f2zx.svelte-d4f2zx,.confetti.svelte-d4f2zx.svelte-d4f2zx:before{-webkit-animation:none;animation:none}}',
  map: null
};
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
const Confetti = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 10 } = $$props;
  let { x = [-0.5, 0.5] } = $$props;
  let { y = [0.25, 1] } = $$props;
  let { duration = 2e3 } = $$props;
  let { infinite = false } = $$props;
  let { delay = [0, 50] } = $$props;
  let { colorRange = [0, 360] } = $$props;
  let { colorArray = [] } = $$props;
  let { amount = 50 } = $$props;
  let { iterationCount = 1 } = $$props;
  let { fallDistance = "100px" } = $$props;
  let { rounded = false } = $$props;
  let { cone = false } = $$props;
  let { noGravity = false } = $$props;
  let { xSpread = 0.15 } = $$props;
  let { destroyOnComplete = true } = $$props;
  function getColor() {
    if (colorArray.length)
      return colorArray[Math.round(Math.random() * (colorArray.length - 1))];
    else
      return `hsl(${Math.round(randomBetween(colorRange[0], colorRange[1]))}, 75%, 50%`;
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.infinite === void 0 && $$bindings.infinite && infinite !== void 0)
    $$bindings.infinite(infinite);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.colorRange === void 0 && $$bindings.colorRange && colorRange !== void 0)
    $$bindings.colorRange(colorRange);
  if ($$props.colorArray === void 0 && $$bindings.colorArray && colorArray !== void 0)
    $$bindings.colorArray(colorArray);
  if ($$props.amount === void 0 && $$bindings.amount && amount !== void 0)
    $$bindings.amount(amount);
  if ($$props.iterationCount === void 0 && $$bindings.iterationCount && iterationCount !== void 0)
    $$bindings.iterationCount(iterationCount);
  if ($$props.fallDistance === void 0 && $$bindings.fallDistance && fallDistance !== void 0)
    $$bindings.fallDistance(fallDistance);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.cone === void 0 && $$bindings.cone && cone !== void 0)
    $$bindings.cone(cone);
  if ($$props.noGravity === void 0 && $$bindings.noGravity && noGravity !== void 0)
    $$bindings.noGravity(noGravity);
  if ($$props.xSpread === void 0 && $$bindings.xSpread && xSpread !== void 0)
    $$bindings.xSpread(xSpread);
  if ($$props.destroyOnComplete === void 0 && $$bindings.destroyOnComplete && destroyOnComplete !== void 0)
    $$bindings.destroyOnComplete(destroyOnComplete);
  $$result.css.add(css$1);
  return `${`<div class="${[
    "confetti-holder svelte-d4f2zx",
    (rounded ? "rounded" : "") + " " + (cone ? "cone" : "") + " " + (noGravity ? "no-gravity" : "")
  ].join(" ").trim()}">${each({ length: amount }, (_) => {
    return `<div class="${"confetti svelte-d4f2zx"}" style="${"--fall-distance: " + escape(fallDistance, true) + "; --size: " + escape(size, true) + "px; --color: " + escape(getColor(), true) + "; --skew: " + escape(randomBetween(-45, 45), true) + "deg," + escape(randomBetween(-45, 45), true) + "deg; --rotation-xyz: " + escape(randomBetween(-10, 10), true) + ", " + escape(randomBetween(-10, 10), true) + ", " + escape(randomBetween(-10, 10), true) + "; --rotation-deg: " + escape(randomBetween(0, 360), true) + "deg; --translate-y-multiplier: " + escape(randomBetween(y[0], y[1]), true) + "; --translate-x-multiplier: " + escape(randomBetween(x[0], x[1]), true) + "; --scale: " + escape(0.1 * randomBetween(2, 10), true) + "; --transition-duration: " + escape(
      infinite ? `calc(${duration}ms * var(--scale))` : `${duration}ms`,
      true
    ) + "; --transition-delay: " + escape(randomBetween(delay[0], delay[1]), true) + "ms; --transition-iteration-count: " + escape(infinite ? "infinite" : iterationCount, true) + "; --x-spread: " + escape(1 - xSpread, true)}"></div>`;
  })}</div>`}`;
});
const rnds8Pool = new Uint8Array(256);
let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
const native = {
  randomUUID: crypto.randomUUID
};
function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
const setLoading = writable(false);
const setListPerson = writable([
  { id: v4(), text: "allmy.brain" }
]);
const setListPersonData = writable([
  { id: v4(), text: "mr.lanna008" },
  { id: v4(), text: "lena_azoraa1997" },
  { id: v4(), text: "choleq_aswinyanuar_areatimur" },
  { id: v4(), text: "zai_gaming18" },
  { id: v4(), text: "itsme_siti_lena18" },
  { id: v4(), text: "priskajeje" },
  { id: v4(), text: "evaningsih38" },
  { id: v4(), text: "muhamad_aliakhtar" },
  { id: v4(), text: "nisyakhomariah" },
  { id: v4(), text: "sevila4561" },
  { id: v4(), text: "ovierianty" },
  { id: v4(), text: "lena_azoraa1997" },
  { id: v4(), text: "sole_ma12_" },
  { id: v4(), text: "meelasuhendar" },
  { id: v4(), text: "audrisalsabilaa" },
  { id: v4(), text: "dafaa.aza" },
  { id: v4(), text: "stphy_mrt" },
  { id: v4(), text: "ilena_1818" },
  { id: v4(), text: "adyarizkia" },
  { id: v4(), text: "hernita_syarif" },
  { id: v4(), text: "reyhan_aliakbar" },
  { id: v4(), text: "akbar_munandar" },
  { id: v4(), text: "adikkakaksonia" },
  { id: v4(), text: "ziaikaa" },
  { id: v4(), text: "0xy_ciutun14" },
  { id: v4(), text: "_n.u.rrrr" },
  { id: v4(), text: "windhaka10" },
  { id: v4(), text: "ilena_1818" },
  { id: v4(), text: "its_siti180997" },
  { id: v4(), text: "raturikaaa" },
  { id: v4(), text: "arydmstyo_" },
  { id: v4(), text: "qolbyabhy_" },
  { id: v4(), text: "ini.ikaa1" },
  { id: v4(), text: "aisah_aisahhh" },
  { id: v4(), text: "n.e.n.e.ng" },
  { id: v4(), text: "_riskarusmiati" },
  { id: v4(), text: "ria.cikal" },
  { id: v4(), text: "abuy3057" },
  { id: v4(), text: "oga_yoga2" },
  { id: v4(), text: "meelasuhendar" },
  { id: v4(), text: "muhammad_fabian21" },
  { id: v4(), text: "siti_chanel97" },
  { id: v4(), text: "ilham.ali12" },
  { id: v4(), text: "its_inaa97" },
  { id: v4(), text: "siti_gamers18" },
  { id: v4(), text: "ifannadit" },
  { id: v4(), text: "aditzuher" },
  { id: v4(), text: "suryaa_m09" },
  { id: v4(), text: "_marhamah_99" },
  { id: v4(), text: "22indhhy_indhhy" },
  { id: v4(), text: "helo_zikin" },
  { id: v4(), text: "muhammad_zain_al_fanani" },
  { id: v4(), text: "its.azizahrohmahalfan987" },
  { id: v4(), text: "azoralena" },
  { id: v4(), text: "mabroer_s" },
  { id: v4(), text: "siti_gamers18" },
  { id: v4(), text: "ilena_1818" },
  { id: v4(), text: "solehmabrur" },
  { id: v4(), text: "tediprayogaa" },
  { id: v4(), text: "arfah_dpk01" },
  { id: v4(), text: "leon_bonaparte14" },
  { id: v4(), text: "abimanamy_" },
  { id: v4(), text: "trirafa03" },
  { id: v4(), text: "angginovita_06" },
  { id: v4(), text: "nevitawijaya" },
  { id: v4(), text: "rinaldrinaldi" },
  { id: v4(), text: "triyantiar" },
  { id: v4(), text: "rizalds24" },
  { id: v4(), text: "ngayogyakarto56" },
  { id: v4(), text: "hendragunawantravel" },
  { id: v4(), text: "chai.melissa" },
  { id: v4(), text: "azoralena" },
  { id: v4(), text: "salimtina08" },
  { id: v4(), text: "jhonpky_097" },
  { id: v4(), text: "salimtina08" },
  { id: v4(), text: "muhammad.fauzanalfarisi" },
  { id: v4(), text: "bim_bim_abim" },
  { id: v4(), text: "arifhandoko02" },
  { id: v4(), text: "iiyeu.ella96_" },
  { id: v4(), text: "iiyeu.ella96_" },
  { id: v4(), text: "priyo18" },
  { id: v4(), text: "elisalibra10" },
  { id: v4(), text: "zero__zidan" },
  { id: v4(), text: "liger.fuad" },
  { id: v4(), text: "yeniafrilia_01" },
  { id: v4(), text: "yenskitchen_21" },
  { id: v4(), text: "babang_bilal_hamonangan" },
  { id: v4(), text: "jakust_" },
  { id: v4(), text: "_anisajumala" },
  { id: v4(), text: "meon.k91" },
  { id: v4(), text: "atharazzkakhayla" },
  { id: v4(), text: "tytriyana_16" },
  { id: v4(), text: "fadl_dhayax" },
  { id: v4(), text: "agung_hidayatulah" },
  { id: v4(), text: "alissya_ikthiar" },
  { id: v4(), text: "anisautami853" },
  { id: v4(), text: "aiai04_" },
  { id: v4(), text: "alixhvm_" },
  { id: v4(), text: "alanacatline" },
  { id: v4(), text: "delfiana737_" },
  { id: v4(), text: "cikalratu" },
  { id: v4(), text: "dheadelynch" },
  { id: v4(), text: "its_me_fajar14" },
  { id: v4(), text: "excelnevv" },
  { id: v4(), text: "fatehfayehdrap__" },
  { id: v4(), text: "nilamlarasutra_" },
  { id: v4(), text: "fatinnissa24" },
  { id: v4(), text: "nadiaajengsarii" },
  { id: v4(), text: "its_mamagii" },
  { id: v4(), text: "dita_rissa" },
  { id: v4(), text: "mami_kasmiii" },
  { id: v4(), text: "kim.eshayva" },
  { id: v4(), text: "husn.ul301" },
  { id: v4(), text: "husn.ul301" },
  { id: v4(), text: "duwil_18" },
  { id: v4(), text: "good_xfun10" },
  { id: v4(), text: "yub_kenzo13" },
  { id: v4(), text: "riskyafrinandapratama" },
  { id: v4(), text: "bundatwins_01" },
  { id: v4(), text: "maul.ida3291" },
  { id: v4(), text: "nay.vaptr" },
  { id: v4(), text: "djo.kohariyanto" },
  { id: v4(), text: "its_abel21" },
  { id: v4(), text: "maulidyaaa____" },
  { id: v4(), text: "aulia_ap2" },
  { id: v4(), text: "mamaaqilah11" },
  { id: v4(), text: "aldiannn_faktur" },
  { id: v4(), text: "kelvin.putra1" },
  { id: v4(), text: "assifa_sifaaa" },
  { id: v4(), text: "asrie_formosa" },
  { id: v4(), text: "calistacandr" },
  { id: v4(), text: "mas.ropil93" },
  { id: v4(), text: "teresa.ayyu" },
  { id: v4(), text: "hiputri60" },
  { id: v4(), text: "aniisahdyt" },
  { id: v4(), text: "tiaraira78" },
  { id: v4(), text: "fittriyani2" },
  { id: v4(), text: "alina_safira84" },
  { id: v4(), text: "_cansual" },
  { id: v4(), text: "nomanii._" },
  { id: v4(), text: "clawdiariska" },
  { id: v4(), text: "nenkia61" },
  { id: v4(), text: "fri_silia14" },
  { id: v4(), text: "aldi_we240298" },
  { id: v4(), text: "hensuhendih" },
  { id: v4(), text: "syifa_nurmala24" },
  { id: v4(), text: "okytirta7" },
  { id: v4(), text: "gea_yoube" },
  { id: v4(), text: "deri_cli" },
  { id: v4(), text: "jaselamanya" },
  { id: v4(), text: "retnoyuli18" },
  { id: v4(), text: "hanifathunnisa" },
  { id: v4(), text: "theresiaa.via" },
  { id: v4(), text: "herliandhi" },
  { id: v4(), text: "salsa.bila390" },
  { id: v4(), text: "amanda666691" },
  { id: v4(), text: "kswyooand.rik" },
  { id: v4(), text: "mochammad.ainurroziqin" },
  { id: v4(), text: "anastasiagema92" },
  { id: v4(), text: "fennychan94" },
  { id: v4(), text: "arieframadhan_8" },
  { id: v4(), text: "muhammad_faizal_1" },
  { id: v4(), text: "ita_ramanda2" },
  { id: v4(), text: "ivanmichaelirawan" },
  { id: v4(), text: "novie.perjalanan_menuju_sehat" },
  { id: v4(), text: "wandirise6289" },
  { id: v4(), text: "tamiramadhanti_" },
  { id: v4(), text: "dianfely_" },
  { id: v4(), text: "4imron4" },
  { id: v4(), text: "arfiansyah_kurnia" },
  { id: v4(), text: "reginaysnda" },
  { id: v4(), text: "atikasimbolon41" },
  { id: v4(), text: "jenung05" },
  { id: v4(), text: "dhi_cuyyyy" },
  { id: v4(), text: "briptuadi280" },
  { id: v4(), text: "yenny_taz" },
  { id: v4(), text: "yenny_taz" },
  { id: v4(), text: "laila_fit07" },
  { id: v4(), text: "sesiliatataa11" },
  { id: v4(), text: "bubun9601" },
  { id: v4(), text: "diar_garci" },
  { id: v4(), text: "tegarsprasetyo_031" },
  { id: v4(), text: "letwinnavitaloka" },
  { id: v4(), text: "salzalarose" },
  { id: v4(), text: "mhyaniputri" },
  { id: v4(), text: "rajendrabs" },
  { id: v4(), text: "ffatmalya_" },
  { id: v4(), text: "ajungkelvin" },
  { id: v4(), text: "rizka.afriani93" },
  { id: v4(), text: "fafa_shofa05" },
  { id: v4(), text: "mas_jack_55" },
  { id: v4(), text: "afifah_saka" },
  { id: v4(), text: "henryherdiansyah83" },
  { id: v4(), text: "ramdani17" },
  { id: v4(), text: "rafndan" },
  { id: v4(), text: "inesqueena" },
  { id: v4(), text: "muhammadmukti70" },
  { id: v4(), text: "amir.restufara" },
  { id: v4(), text: "susydhanie" },
  { id: v4(), text: "bella.istiqomah27" },
  { id: v4(), text: "shellyputriamnda_" },
  { id: v4(), text: "azisazoy" },
  { id: v4(), text: "aidaawa2510" },
  { id: v4(), text: "estithea_21" },
  { id: v4(), text: "bayu_krewol" },
  { id: v4(), text: "miss_angel_jong" },
  { id: v4(), text: "dhiniin29" },
  { id: v4(), text: "adekvrniawan" },
  { id: v4(), text: "lastri.dewiy" },
  { id: v4(), text: "codiiim" },
  { id: v4(), text: "nana_liem_ana" },
  { id: v4(), text: "gya3_humairaa" },
  { id: v4(), text: "rhm_hobbies" },
  { id: v4(), text: "rrzzaa_yoo" },
  { id: v4(), text: "hanhanreal" },
  { id: v4(), text: "_wishimyours" },
  { id: v4(), text: "farida.siahaan_379" },
  { id: v4(), text: "esythea_103" },
  { id: v4(), text: "fmuhammadali2" },
  { id: v4(), text: "melvin_radhika" },
  { id: v4(), text: "imron.mbong" },
  { id: v4(), text: "azam1904" },
  { id: v4(), text: "melianihalim" },
  { id: v4(), text: "ineskharis" },
  { id: v4(), text: "diskaapriyanti" },
  { id: v4(), text: "mamah.elrumi" },
  { id: v4(), text: "airinima.2616" },
  { id: v4(), text: "putri_nuraika06" },
  { id: v4(), text: "addyjoyful" },
  { id: v4(), text: "myjob_myhobby" },
  { id: v4(), text: "fari_daa997" },
  { id: v4(), text: "nurida.shayva" },
  { id: v4(), text: "mama.azzamkhan17" },
  { id: v4(), text: "lun_lunawa.fiq" },
  { id: v4(), text: "andri_yo25" },
  { id: v4(), text: "ferrytintuscahyadi" },
  { id: v4(), text: "arifhariansyah" },
  { id: v4(), text: "viskha.pratiwi" },
  { id: v4(), text: "callme_amril.06" },
  { id: v4(), text: "itsme_ivangkhan" },
  { id: v4(), text: "anandaayutricahyani2222" },
  { id: v4(), text: "rey__tia__rahman1111" },
  { id: v4(), text: "vano19332022" },
  { id: v4(), text: "aku___vano99" },
  { id: v4(), text: "sweet_faano2022" },
  { id: v4(), text: "akke.__cantik" },
  { id: v4(), text: "itsmeirpan1992" },
  { id: v4(), text: "hello.visskha" },
  { id: v4(), text: "am_real06" },
  { id: v4(), text: "akujuara.g4" },
  { id: v4(), text: "its.amril004" },
  { id: v4(), text: "my.nameeitss_amril" },
  { id: v4(), text: "viskaaaa001" },
  { id: v4(), text: "itsmril001" },
  { id: v4(), text: "papahnyavano" },
  { id: v4(), text: "akuadalah.amril" },
  { id: v4(), text: "sugik.ugik82" },
  { id: v4(), text: "its.terserahlah_" },
  { id: v4(), text: "justdheym17" },
  { id: v4(), text: "shadeofald1" },
  { id: v4(), text: "_hadeyyy_90" },
  { id: v4(), text: "anisamaulida2691" },
  { id: v4(), text: "vindaaa.mr" },
  { id: v4(), text: "itsamril.00.06" },
  { id: v4(), text: "itsme.elvno" },
  { id: v4(), text: "me.nindaretno" },
  { id: v4(), text: "soni_exspres" },
  { id: v4(), text: "giselleanatasya2024" },
  { id: v4(), text: "ceu_linamarlina" },
  { id: v4(), text: "m.alha__" },
  { id: v4(), text: "ikapriita" },
  { id: v4(), text: "akmalputra811" },
  { id: v4(), text: "devan_gabrielll" },
  { id: v4(), text: "mang_abenktea" },
  { id: v4(), text: "mutti_aratiara" },
  { id: v4(), text: "lengaming_1897" },
  { id: v4(), text: "withhd10" },
  { id: v4(), text: "its_siti180997" },
  { id: v4(), text: "kkkrnsr___" },
  { id: v4(), text: "osesiba1897" },
  { id: v4(), text: "lydiaarsil5" },
  { id: v4(), text: "yo_la6702" },
  { id: v4(), text: "emhade.123" },
  { id: v4(), text: "churiatunnisak" },
  { id: v4(), text: "osesiba1897" },
  { id: v4(), text: "0vie.junovee_" },
  { id: v4(), text: "gaminglena_1897" },
  { id: v4(), text: "callmeyaara_" },
  { id: v4(), text: "mee.adhysta" },
  { id: v4(), text: "bendjauh" },
  { id: v4(), text: "zai_gaming18" },
  { id: v4(), text: "itsmee_zora" },
  { id: v4(), text: "gaminglena_1897" },
  { id: v4(), text: "raniiekaseptya" },
  { id: v4(), text: "itsme_siti_lena18" },
  { id: v4(), text: "bella_mikayla88" },
  { id: v4(), text: "aldym_el.hd" },
  { id: v4(), text: "melhaaaa_005" },
  { id: v4(), text: "witno94" },
  { id: v4(), text: "dinda_kiki55" },
  { id: v4(), text: "pisces8152" },
  { id: v4(), text: "jejechristina" },
  { id: v4(), text: "raraaa98_" },
  { id: v4(), text: "pjm.amril1199" },
  { id: v4(), text: "nayvaputri06" },
  { id: v4(), text: "ohmymld" },
  { id: v4(), text: "siihjeds_" },
  { id: v4(), text: "vyanisyaa" },
  { id: v4(), text: "its_inaa97" },
  { id: v4(), text: "itsmee_zora" },
  { id: v4(), text: "dityahmadr" },
  { id: v4(), text: "syarifesha" },
  { id: v4(), text: "iryanieka19" },
  { id: v4(), text: "aliya_rahma_kamila" },
  { id: v4(), text: "sagitarius_1198" },
  { id: v4(), text: "rachal.soleha" },
  { id: v4(), text: "mikhayla.athira.hd" },
  { id: v4(), text: "damaynti_my" },
  { id: v4(), text: "sherlyou32" },
  { id: v4(), text: "aquarianz19" },
  { id: v4(), text: "lengaming_1897" },
  { id: v4(), text: "salman_nok" },
  { id: v4(), text: "hai.salnayva10" },
  { id: v4(), text: "riniputri2108" },
  { id: v4(), text: "siti_chanel97" },
  { id: v4(), text: "dion.88" },
  { id: v4(), text: "allmy.brain" },
  { id: v4(), text: "_ahsan_aswinyanuar_familys" },
  { id: v4(), text: "iam_ahmad19" },
  { id: v4(), text: "mama_okta10" },
  { id: v4(), text: "ucupallvlog_" },
  { id: v4(), text: "zulfatun_nimah" },
  { id: v4(), text: "af_lucky99" },
  { id: v4(), text: "askanahaiwa" },
  { id: v4(), text: "ilham__alhami" },
  { id: v4(), text: "zainulafff" },
  { id: v4(), text: "raooodenk" },
  { id: v4(), text: "aliwongbejo" },
  { id: v4(), text: "fadddlur" },
  { id: v4(), text: "neeenkida" },
  { id: v4(), text: "vespaaaunik" },
  { id: v4(), text: "enymegaaa" },
  { id: v4(), text: "almiyatulll" },
  { id: v4(), text: "khoironsejatiii" },
  { id: v4(), text: "sangkaisarrrrr" },
  { id: v4(), text: "fawaidddef" },
  { id: v4(), text: "tapaiiikhan" },
  { id: v4(), text: "pecintamacrooo" },
  { id: v4(), text: "ejku.93" },
  { id: v4(), text: "dega_diliandiar" },
  { id: v4(), text: "gita.anggraeni24" },
  { id: v4(), text: "belafff2" },
  { id: v4(), text: "linda_obing" },
  { id: v4(), text: "stnursaadah" },
  { id: v4(), text: "okeayra20" },
  { id: v4(), text: "adeliaaa__68" },
  { id: v4(), text: "justne103" },
  { id: v4(), text: "falennsp" },
  { id: v4(), text: "thiiciiaa" },
  { id: v4(), text: "joje.ctk" },
  { id: v4(), text: "andikusuma23_" },
  { id: v4(), text: "erial_clr" },
  { id: v4(), text: "keith.flt" },
  { id: v4(), text: "thode_pf" },
  { id: v4(), text: "kssy_lens" },
  { id: v4(), text: "mro_brayen" },
  { id: v4(), text: "fhytriati" },
  { id: v4(), text: "gab.riellana" },
  { id: v4(), text: "itsme_lan97" },
  { id: v4(), text: "raditya_fairuz88" },
  { id: v4(), text: "azizlutfy" },
  { id: v4(), text: "devideslianti" },
  { id: v4(), text: "passquit01" },
  { id: v4(), text: "mega.agustin88" },
  { id: v4(), text: "ymansyur0582" },
  { id: v4(), text: "putrawindri" },
  { id: v4(), text: "neng.retnow26" },
  { id: v4(), text: "kikihiyori322" },
  { id: v4(), text: "rieany03" },
  { id: v4(), text: "evelin_v.26" },
  { id: v4(), text: "indra_fahhlevi" },
  { id: v4(), text: "fiet.maghfir" },
  { id: v4(), text: "nifarazalia" },
  { id: v4(), text: "falides1619" },
  { id: v4(), text: "chocolatos_coklat_" },
  { id: v4(), text: "cherrymoeey__" },
  { id: v4(), text: "bangdoelldisiniie__" },
  { id: v4(), text: "pu.putri_alwaqyh" },
  { id: v4(), text: "witryass__" },
  { id: v4(), text: "aronadzry.zull" },
  { id: v4(), text: "oktavia_shan95" },
  { id: v4(), text: "eni.ardiansyah84" },
  { id: v4(), text: "imotna" },
  { id: v4(), text: "saripeh" },
  { id: v4(), text: "ptri.nyvaa" },
  { id: v4(), text: "megasal82" },
  { id: v4(), text: "its_vaivavaaa10" },
  { id: v4(), text: "piscvely" },
  { id: v4(), text: "ayang_eca019" },
  { id: v4(), text: "irianimia" },
  { id: v4(), text: "i.t.sme_mput.putriii" },
  { id: v4(), text: "ika.vanay610" },
  { id: v4(), text: "ismanto99_" },
  { id: v4(), text: "nayvaputrinur" },
  { id: v4(), text: "me.indah021" },
  { id: v4(), text: "me.indah021" },
  { id: v4(), text: "ptr.nay_iva" },
  { id: v4(), text: "mahicamahendr4_" },
  { id: v4(), text: "mr.and_rix.kswy" },
  { id: v4(), text: "jeni.simorangkir" },
  { id: v4(), text: "rf.prfrstaaa_" },
  { id: v4(), text: "mshyunst" },
  { id: v4(), text: "hei_kasmi87" },
  { id: v4(), text: "andrikkk.puluh_8" },
  { id: v4(), text: "andrian_coy88" },
  { id: v4(), text: "denisinstagrm" },
  { id: v4(), text: "vania.elsa23" },
  { id: v4(), text: "raisya_pratiwi21" },
  { id: v4(), text: "namaku.jamsii" },
  { id: v4(), text: "nuraikaputrinayva" },
  { id: v4(), text: "rismaarizkia" },
  { id: v4(), text: "si.putrinayva" },
  { id: v4(), text: "aljamsi_razzaq3" },
  { id: v4(), text: "asyraf_rabbany" },
  { id: v4(), text: "bundatwins_01" },
  { id: v4(), text: "bundatwins_01" },
  { id: v4(), text: "tisya.anes26" },
  { id: v4(), text: "mellzard_adi" },
  { id: v4(), text: "ary.martadinata.3" },
  { id: v4(), text: "ikhsan_patir" },
  { id: v4(), text: "tamaa_priyadii" },
  { id: v4(), text: "aji.sukmaaa" },
  { id: v4(), text: "raplyy_sarajii" },
  { id: v4(), text: "syifaa.selly" },
  { id: v4(), text: "kikiyy_trissaaa" },
  { id: v4(), text: "windyaaa_kusumaaa" },
  { id: v4(), text: "wisnuu_tw" },
  { id: v4(), text: "indra_ferdiannn" },
  { id: v4(), text: "hadii_sofian" },
  { id: v4(), text: "cikacahyanii" },
  { id: v4(), text: "nabilaa__nissawatyy" },
  { id: v4(), text: "amirul_musari" },
  { id: v4(), text: "christian_armandoo" },
  { id: v4(), text: "ahmadd_aprilyadii" },
  { id: v4(), text: "dhany_cahyono" },
  { id: v4(), text: "alvan_gustiawan" },
  { id: v4(), text: "_irwantooo" },
  { id: v4(), text: "dhanii_maulanaa" },
  { id: v4(), text: "jakiyah09_" },
  { id: v4(), text: "iiintannn_sr" },
  { id: v4(), text: "elsalestarii.n" },
  { id: v4(), text: "putriidesinaaa_" },
  { id: v4(), text: "defri_delian" },
  { id: v4(), text: "hengkiy_hariawann" },
  { id: v4(), text: "budii_julianto" },
  { id: v4(), text: "nur_salsaptri" },
  { id: v4(), text: "heruu_herbayuuu" },
  { id: v4(), text: "pujii_arshantyydwii" },
  { id: v4(), text: "devinaa_pramitaaa" },
  { id: v4(), text: "kharismaawulansarii__" },
  { id: v4(), text: "namaku_wingky" },
  { id: v4(), text: "violita_renata" },
  { id: v4(), text: "rossa_lindaana" },
  { id: v4(), text: "msdih_" },
  { id: v4(), text: "vitaaa_ameliaaa" },
  { id: v4(), text: "ridwan_aldisyah" },
  { id: v4(), text: "tantyaa_firmansyah" },
  { id: v4(), text: "prayogaa_m" },
  { id: v4(), text: "lukman_setyaawann" },
  { id: v4(), text: "delaa.yuliantii" },
  { id: v4(), text: "hestii.haranii" },
  { id: v4(), text: "dekky_adityya" },
  { id: v4(), text: "sulis.ma_" },
  { id: v4(), text: "gery_tasik" },
  { id: v4(), text: "widyawati104_" },
  { id: v4(), text: "hilal_bilal_99" },
  { id: v4(), text: "nuraikka_010" },
  { id: v4(), text: "nurul.farida90" },
  { id: v4(), text: "marioaditya.7" },
  { id: v4(), text: "anton_suhendra22" },
  { id: v4(), text: "nafia.qn" },
  { id: v4(), text: "nnuurruull.989" },
  { id: v4(), text: "rojab_barokah24" },
  { id: v4(), text: "tria.ramdhayani" },
  { id: v4(), text: "nadira5896" },
  { id: v4(), text: "aleshazahra671" },
  { id: v4(), text: "_hanyakangen" },
  { id: v4(), text: "dito_syarief" },
  { id: v4(), text: "ibrahim_hartonooo" },
  { id: v4(), text: "jefri_ariess" },
  { id: v4(), text: "dessilla_yulipurnamawati_" },
  { id: v4(), text: "alvin.alfarizkyy" },
  { id: v4(), text: "hendrik_ardiansyahh" },
  { id: v4(), text: "wendyy.wirawan" },
  { id: v4(), text: "farzannnn_" },
  { id: v4(), text: "dhuwiii.pramanaa" },
  { id: v4(), text: "vajar_wijayaaa" },
  { id: v4(), text: "wahyudi_setyawann" },
  { id: v4(), text: "aswan_saputraaa" },
  { id: v4(), text: "bayuuu_pradanaaa" },
  { id: v4(), text: "shandyy.sutrisno" },
  { id: v4(), text: "lilis__luartii" },
  { id: v4(), text: "wikaalitaani" },
  { id: v4(), text: "rahayuuuuu____" },
  { id: v4(), text: "olivia.chistyy" },
  { id: v4(), text: "haniihestia_" },
  { id: v4(), text: "nitaa.nessyaa" },
  { id: v4(), text: "vellaa_anatasyaa" },
  { id: v4(), text: "lufthiaa_maraniii" },
  { id: v4(), text: "evaa_elityaa" },
  { id: v4(), text: "nandaaanuzulii" },
  { id: v4(), text: "lailalatul_ismiiii" },
  { id: v4(), text: "citra.dheamanda" },
  { id: v4(), text: "rismaariniaa" },
  { id: v4(), text: "andinnnuzuli" },
  { id: v4(), text: "_eldaalisa" },
  { id: v4(), text: "listialusianaa" },
  { id: v4(), text: "deswitaaaa__mhrn" },
  { id: v4(), text: "meilinaaaa_melindaarss" },
  { id: v4(), text: "rossitaaa_larastiii" },
  { id: v4(), text: "niaaaramadiann" },
  { id: v4(), text: "ririnn.silviaaa" },
  { id: v4(), text: "lianalansari" },
  { id: v4(), text: "lianalansari" },
  { id: v4(), text: "anisaa.rahayuuu" },
  { id: v4(), text: "martha_margaretaaa" },
  { id: v4(), text: "puspitaaa_anjasarii" },
  { id: v4(), text: "denataa_wulansarii20" },
  { id: v4(), text: "rannydarma" },
  { id: v4(), text: "miraaaa.na" },
  { id: v4(), text: "_friskaaandrianaa" },
  { id: v4(), text: "__dheaamandaa__" },
  { id: v4(), text: "bilaaarosaliaaa_" },
  { id: v4(), text: "seliaaroseliaa_" },
  { id: v4(), text: "nindypratiwidiansastri" },
  { id: v4(), text: "_viviii_kartikaaa" },
  { id: v4(), text: "noviaaa_saputriii" },
  { id: v4(), text: "sulis_maaaa" },
  { id: v4(), text: "riska.hnm" },
  { id: v4(), text: "firlinaaa_aaa" },
  { id: v4(), text: "kusumaaa_a_d" },
  { id: v4(), text: "liindaa_psss" },
  { id: v4(), text: "neviaaa_tr" },
  { id: v4(), text: "reniaa_sysniiaaa" },
  { id: v4(), text: "nadhifandnasha" },
  { id: v4(), text: "rindyyandrianaa" },
  { id: v4(), text: "elisa_santilandari" },
  { id: v4(), text: "ditaaaniaaa" },
  { id: v4(), text: "deliaa.kiantiyaa" },
  { id: v4(), text: "dilaa_widiawati" },
  { id: v4(), text: "anjanii_maharanii" },
  { id: v4(), text: "nesayunisaa" },
  { id: v4(), text: "endahh_rossalinaaa" },
  { id: v4(), text: "kristinn_apriliaa" },
  { id: v4(), text: "puputt_kusumaaa" },
  { id: v4(), text: "myname_adhelia" },
  { id: v4(), text: "nandamami_" },
  { id: v4(), text: "jes.ikavina" },
  { id: v4(), text: "ejkust" },
  { id: v4(), text: "ejawinner" },
  { id: v4(), text: "aje_budadud" },
  { id: v4(), text: "awijaya.10" },
  { id: v4(), text: "ekustian4" },
  { id: v4(), text: "devaagustiani_" },
  { id: v4(), text: "ek.doang" },
  { id: v4(), text: "myname_eja21" },
  { id: v4(), text: "ekaboyboy_" },
  { id: v4(), text: "j.amsi" },
  { id: v4(), text: "andrikwoyo8" },
  { id: v4(), text: "santi_ana30" },
  { id: v4(), text: "rizal.aza15" },
  { id: v4(), text: "kanzadewi64" },
  { id: v4(), text: "sarahmia732" },
  { id: v4(), text: "_aypos" },
  { id: v4(), text: "_aypos" },
  { id: v4(), text: "rita.vegania" },
  { id: v4(), text: "itsme.sheila30" },
  { id: v4(), text: "neng.noviaa" },
  { id: v4(), text: "jamsi_kejora10" },
  { id: v4(), text: "alganiyy_jamsi" },
  { id: v4(), text: "almugni1_zahra" },
  { id: v4(), text: "annisa_amawati" },
  { id: v4(), text: "ollan_97" },
  { id: v4(), text: "h.m.lutfi_86" },
  { id: v4(), text: "h.m.lutfi_86" },
  { id: v4(), text: "mers_mers08" },
  { id: v4(), text: "candra__liem" },
  { id: v4(), text: "budilaohan" },
  { id: v4(), text: "rizkyhanidah" },
  { id: v4(), text: "tungtungcaktung" },
  { id: v4(), text: "nanikuidah" },
  { id: v4(), text: "gunpriatampan" },
  { id: v4(), text: "my.4gus" },
  { id: v4(), text: "tatri96" },
  { id: v4(), text: "ita211118" },
  { id: v4(), text: "papiyaka" },
  { id: v4(), text: "ku5cul_again" },
  { id: v4(), text: "berog.kolot" },
  { id: v4(), text: "bapakyaka" },
  { id: v4(), text: "rabegkolot" },
  { id: v4(), text: "bedog.oclok" },
  { id: v4(), text: "ardiandanik" },
  { id: v4(), text: "rah_malik08" },
  { id: v4(), text: "theresiaa.via" },
  { id: v4(), text: "theresiaa.via" },
  { id: v4(), text: "theresiaa.via" },
  { id: v4(), text: "safira.x13" },
  { id: v4(), text: "djo.hariyanto" },
  { id: v4(), text: "bang_jago.97" },
  { id: v4(), text: "agung_hidayathidayat" },
  { id: v4(), text: "ivangkhan.charlie_" },
  { id: v4(), text: "ivangkhan_shop" },
  { id: v4(), text: "hemsters_" },
  { id: v4(), text: "m_nazirfatahilah" },
  { id: v4(), text: "hei.cicinyva" },
  { id: v4(), text: "itsme_lan9" },
  { id: v4(), text: "me.jamsi" },
  { id: v4(), text: "itsme.hoki1" },
  { id: v4(), text: "itsme.cool88" },
  { id: v4(), text: "yudiarsana26" },
  { id: v4(), text: "jomu1_" },
  { id: v4(), text: "permataputri610" },
  { id: v4(), text: "andrikuswo" },
  { id: v4(), text: "erickstyo" },
  { id: v4(), text: "mamaqia27" },
  { id: v4(), text: "andrikuswo" },
  { id: v4(), text: "dita._reta" },
  { id: v4(), text: "irpan_iv" },
  { id: v4(), text: "namakunur2021" },
  { id: v4(), text: "daffy_diffa" },
  { id: v4(), text: "choiriyah_hoiriyah" },
  { id: v4(), text: "saya_ipvaah" },
  { id: v4(), text: "yogandriksaputra" },
  { id: v4(), text: "sarahjamsi" },
  { id: v4(), text: "andrikandmada" },
  { id: v4(), text: "dewidanjamsi" },
  { id: v4(), text: "milafarah6" },
  { id: v4(), text: "nindiasari16" },
  { id: v4(), text: "dahhlia24" },
  { id: v4(), text: "annur_2.019" },
  { id: v4(), text: "a.n_d.r.i.k1988" },
  { id: v4(), text: "farda_nurl39" },
  { id: v4(), text: "rida_9062" },
  { id: v4(), text: "anyapd_" },
  { id: v4(), text: "h.m.lutfi_86" },
  { id: v4(), text: "itsme.fitriirpan" },
  { id: v4(), text: "fitrihandayani_1596" },
  { id: v4(), text: "dami_handayani31" },
  { id: v4(), text: "ivaiviivuive.1513" },
  { id: v4(), text: "memey_fitri2016" },
  { id: v4(), text: "hatra_saputra" },
  { id: v4(), text: "ahdytlh99" },
  { id: v4(), text: "b4ngsuryaa_" },
  { id: v4(), text: "elma_selviana_" },
  { id: v4(), text: "rstu.ilhm_" },
  { id: v4(), text: "daniati5352" },
  { id: v4(), text: "imayninilasari" },
  { id: v4(), text: "bertha_intan" },
  { id: v4(), text: "rchrd0602" },
  { id: v4(), text: "alisaputri8976" },
  { id: v4(), text: "ilhamdani227" },
  { id: v4(), text: "iamshndr" },
  { id: v4(), text: "afrianitaayupermatasari" },
  { id: v4(), text: "andingpermadi_" },
  { id: v4(), text: "rahayu_fhalizha24" },
  { id: v4(), text: "freddyyyyy19" },
  { id: v4(), text: "wahyudidiagama" },
  { id: v4(), text: "dwi.putra.kusuma" },
  { id: v4(), text: "al_bustomi92" },
  { id: v4(), text: "_rmaulidan" },
  { id: v4(), text: "aries_s48" },
  { id: v4(), text: "ve_avitha" },
  { id: v4(), text: "ardi_cigar" },
  { id: v4(), text: "putri_setya29" },
  { id: v4(), text: "yudiamau1995" },
  { id: v4(), text: "farok_fadillah" },
  { id: v4(), text: "taupikkarliah" },
  { id: v4(), text: "mrizqy_aditya" },
  { id: v4(), text: "itsme.dini29" },
  { id: v4(), text: "mrassya6" },
  { id: v4(), text: "ristaaoktaaaa" },
  { id: v4(), text: "makanterus_06" },
  { id: v4(), text: "lieya_me" },
  { id: v4(), text: "maliivanefendi13" },
  { id: v4(), text: "rizvan_za24" },
  { id: v4(), text: "itsme_ariess" },
  { id: v4(), text: "sabila_munaff" },
  { id: v4(), text: "dk.hadianto" },
  { id: v4(), text: "yusratiari_01" },
  { id: v4(), text: "dianraa021" },
  { id: v4(), text: "m_rizqy_aditya12" },
  { id: v4(), text: "m_ali_ivan_efendi" },
  { id: v4(), text: "ef_ivans" },
  { id: v4(), text: "m_rizqy_aditya" },
  { id: v4(), text: "omix.id" },
  { id: v4(), text: "rhmtrommmm" },
  { id: v4(), text: "tumpaldoau" },
  { id: v4(), text: "efghxzy" },
  { id: v4(), text: "mommy_arsyla_2023" },
  { id: v4(), text: "iisrisma.yanti" },
  { id: v4(), text: "mommy_arsyla_2023" },
  { id: v4(), text: "rosmelydewi" },
  { id: v4(), text: "indrianidini46_" },
  { id: v4(), text: "primamathela" },
  { id: v4(), text: "yatiayatti48" },
  { id: v4(), text: "iirna.ajjah" },
  { id: v4(), text: "iskhanra" },
  { id: v4(), text: "farlosjuminje" },
  { id: v4(), text: "irsyaamelia31" },
  { id: v4(), text: "maedaaries" },
  { id: v4(), text: "rantienggar" },
  { id: v4(), text: "yeyetnurhayati845" },
  { id: v4(), text: "fairah9900" },
  { id: v4(), text: "nuraenikarliahar" },
  { id: v4(), text: "fatma021192" },
  { id: v4(), text: "winarniusman99" },
  { id: v4(), text: "anditenri99i" },
  { id: v4(), text: "3___yan" },
  { id: v4(), text: "junianto08" },
  { id: v4(), text: "putrijunisyamappa" },
  { id: v4(), text: "veram_ita" },
  { id: v4(), text: "hess_galz" },
  { id: v4(), text: "ng_siufa" },
  { id: v4(), text: "revanstevano" },
  { id: v4(), text: "mrs.sylviadavit" },
  { id: v4(), text: "zefanyagerson" },
  { id: v4(), text: "antonius_ngelo" },
  { id: v4(), text: "vallerianiv_" },
  { id: v4(), text: "jannahnur897" },
  { id: v4(), text: "indahferdyansah" },
  { id: v4(), text: "nhuer_andi09" },
  { id: v4(), text: "ellenahandijoe" },
  { id: v4(), text: "salsabilaaaaa078" },
  { id: v4(), text: "rukman129" },
  { id: v4(), text: "hotmauli594" },
  { id: v4(), text: "kimberlyrichelle_c" },
  { id: v4(), text: "merdeka.winner" },
  { id: v4(), text: "mom.haidar_2020_" },
  { id: v4(), text: "mom.haidar_2020_" },
  { id: v4(), text: "aminudin_arkadewa19" },
  { id: v4(), text: "tichan_mata" },
  { id: v4(), text: "rayapales" },
  { id: v4(), text: "oriesadewii" },
  { id: v4(), text: "rifky_jio" },
  { id: v4(), text: "putrinaipa_" },
  { id: v4(), text: "rivaldi.rkh" },
  { id: v4(), text: "_dessyayu" },
  { id: v4(), text: "emak_handayani15" },
  { id: v4(), text: "niakurnia3536" },
  { id: v4(), text: "dipanggil_bangiimm" },
  { id: v4(), text: "adekvrniawan" },
  { id: v4(), text: "maksyafasyafira" },
  { id: v4(), text: "haysis.sava" },
  { id: v4(), text: "joe_namud" },
  { id: v4(), text: "rendiafian_99" },
  { id: v4(), text: "nabilanayva.6110" },
  { id: v4(), text: "anazia15_" },
  { id: v4(), text: "nersyudidg" },
  { id: v4(), text: "mamayyu23" },
  { id: v4(), text: "sarryaulianzr_" },
  { id: v4(), text: "lusiana_liem" },
  { id: v4(), text: "nur.janah1198" },
  { id: v4(), text: "she_eca.alesha" },
  { id: v4(), text: "ibusatuanak01" },
  { id: v4(), text: "yinme83" },
  { id: v4(), text: "dariust99" },
  { id: v4(), text: "antirn12" },
  { id: v4(), text: "cahyadi_robbie" },
  { id: v4(), text: "adhe.adhelia" },
  { id: v4(), text: "yuliana.tan89" },
  { id: v4(), text: "wilson.ho78" },
  { id: v4(), text: "rudi.hr99" },
  { id: v4(), text: "nengwina.id" },
  { id: v4(), text: "hai.tiktika" },
  { id: v4(), text: "fitri.fitori21" },
  { id: v4(), text: "hrico55" },
  { id: v4(), text: "yogi.t09" },
  { id: v4(), text: "tonnydeus.sky" },
  { id: v4(), text: "hanpin.id" },
  { id: v4(), text: "indahamalia196" },
  { id: v4(), text: "milaamaliakhaerunisaa" },
  { id: v4(), text: "ramlah_feb02" },
  { id: v4(), text: "linda.mus08" },
  { id: v4(), text: "mus26ima" },
  { id: v4(), text: "azkiya.ibrahim" },
  { id: v4(), text: "mayaputrilestari16" },
  { id: v4(), text: "bunda.annisa26" },
  { id: v4(), text: "airin_alkarimah" },
  { id: v4(), text: "mamah.elrumi" },
  { id: v4(), text: "airinima.2616" },
  { id: v4(), text: "im.aleshaa021" },
  { id: v4(), text: "sa_zahra.an19" },
  { id: v4(), text: "rendyfeb0402" },
  { id: v4(), text: "riyan.caem" },
  { id: v4(), text: "putri.aikaa" },
  { id: v4(), text: "jamsiii_" },
  { id: v4(), text: "dias_syila" },
  { id: v4(), text: "maasalaluuu" },
  { id: v4(), text: "raynasariii" },
  { id: v4(), text: "nadelyn05" },
  { id: v4(), text: "rizky_wahyud" },
  { id: v4(), text: "tari.larisca88" },
  { id: v4(), text: "athy.a02" },
  { id: v4(), text: "erdinaap" },
  { id: v4(), text: "abinya_ghani" },
  { id: v4(), text: "edhie_543" },
  { id: v4(), text: "babanggglora" },
  { id: v4(), text: "budi_madrista" },
  { id: v4(), text: "ummmkhai" },
  { id: v4(), text: "jibungblegas" },
  { id: v4(), text: "makmunnnnn" },
  { id: v4(), text: "hayyisemahhh" }
]);
const setResult = writable("");
const urlLink = writable("");
const countData = writable(0);
const switchLayer = writable("");
const LoadingCountdown_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-130kydl{align-items:center;display:flex;height:100%;justify-content:center;position:fixed;top:0;width:100%;z-index:999}",
  map: null
};
const LoadingCountdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"wrapper w-full h-screen bg-zinc-900 svelte-130kydl"}">${``}
</div>`;
});
let countDataPerson = 939;
const Index_tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $setLoading, $$unsubscribe_setLoading;
  let $setResult, $$unsubscribe_setResult;
  let $setListPerson, $$unsubscribe_setListPerson;
  let $switchLayer, $$unsubscribe_switchLayer;
  let $urlLink, $$unsubscribe_urlLink;
  let $countData, $$unsubscribe_countData;
  let $setListPersonData, $$unsubscribe_setListPersonData;
  $$unsubscribe_setLoading = subscribe(setLoading, (value) => $setLoading = value);
  $$unsubscribe_setResult = subscribe(setResult, (value) => $setResult = value);
  $$unsubscribe_setListPerson = subscribe(setListPerson, (value) => $setListPerson = value);
  $$unsubscribe_switchLayer = subscribe(switchLayer, (value) => $switchLayer = value);
  $$unsubscribe_urlLink = subscribe(urlLink, (value) => $urlLink = value);
  $$unsubscribe_countData = subscribe(countData, (value) => $countData = value);
  $$unsubscribe_setListPersonData = subscribe(setListPersonData, (value) => $setListPersonData = value);
  let { inputValueName } = $$props;
  let { inputValueLink } = $$props;
  let urlLinkSite;
  if ($$props.inputValueName === void 0 && $$bindings.inputValueName && inputValueName !== void 0)
    $$bindings.inputValueName(inputValueName);
  if ($$props.inputValueLink === void 0 && $$bindings.inputValueLink && inputValueLink !== void 0)
    $$bindings.inputValueLink(inputValueLink);
  $$unsubscribe_setLoading();
  $$unsubscribe_setResult();
  $$unsubscribe_setListPerson();
  $$unsubscribe_switchLayer();
  $$unsubscribe_urlLink();
  $$unsubscribe_countData();
  $$unsubscribe_setListPersonData();
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Tools Random Picker",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${$setLoading ? `${validate_component(LoadingCountdown, "LoadingCountdown").$$render($$result, {}, {}, {})}` : `${$setResult ? `<div class="${"flex justify-center items-center w-full h-screen relative"}"><div class="${"absolute w-full inset-0 h-full flex justify-center items-start overflow-hidden z-0"}">${validate_component(Confetti, "Confetti").$$render(
    $$result,
    {
      x: [-5, 5],
      y: [0, 0.1],
      delay: [500, 2e3],
      infinite: true,
      duration: "15000",
      amount: "200",
      fallDistance: "100vh"
    },
    {},
    {}
  )}</div>
        <div class="${"absolute w-full inset-0 h-full bg-gradient-to-r from-zinc-900/50 to-slate-900/50 z-10"}"></div>
        <div class="${"w-auto h-auto p-4 border border-yellow-500 z-20"}"><div class="${"flex flex-col justify-center items-center space-y-4 w-72 md:w-96 h-96 bg-zinc-50 shadow-xl p-4 px-8 py-16"}"><div class="${"flex flex-col justify-center items-center w-auto h-auto"}"><img class="${"w-10 h-auto"}"${add_attribute("src", CrownImage, 0)} alt="${"Musclefirst Crown"}">
                    <div class="${"flex flex-col justify-center items-center w-auto h-auto bg-black p-2 shadow"}"><img width="${"647px"}" height="${"504px"}"${add_attribute("src", LogoWhite, 0)} class="${"w-12 h-auto"}" alt="${"Musclefirst Logo"}"></div></div>
                <div class="${"flex flex-col justify-center items-center w-auto h-auto mb-2 md:mb-10 pb-2 md:pb-10"}"><div class="${"flex flex-col justify-center items-center -space-y-1 w-auto h-auto"}"><span class="${"text-md font-bold text-yellow-500"}">The Winner</span></div>
                    <div class="${"border border-black py-2 px-4"}"><span class="${"text-black font-black uppercase text-xl leading-none tracking-tighter"}">${escape($setResult)}</span></div></div>
                <div class="${"w-auto h-auto border border-yellow-900 p-2"}"><button type="${"button"}" class="${"w-auto h-auto bg-black text-white py-2 px-4"}"><span class="${"uppercase text-xs font-bold"}">Kembali</span></button></div></div></div></div>` : `<div class="${"flex flex-col justify-center items-center w-full " + escape($setListPerson.length > 3 ? "h-screen" : "h-screen", true) + " px-4 md:px-24"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto"}"><div class="${"col-span-full flex flex-col w-full h-auto"}"><div class="${"flex flex-col md:flex-row justify-between items-center space-y-4 w-full h-auto pt-12 md:pt-24"}"><a href="${"/"}" rel="${"no-referrer"}" class="${"flex flex-row justify-between md:justify-start items-center px-4 md:px-0 w-full md:w-full"}"><img${add_attribute("src", LogoWhite, 0)} class="${"w-24 md:w-20 block"}" alt="${"Musclefirst Logo"}">
                        <div class="${"flex flex-col text-right md:text-left w-auto h-auto"}"><h1 class="${"text-lg text-bold font-bankghotic text-white"}">Musclefirst</h1></div></a>
                    </div>

                

                ${!$switchLayer ? `<div class="${"flex flex-col w-full h-auto mt-4 md:mt-8 rounded-3xl bg-transparent border-none md:border border-zinc-400 p-4 sm:p-10"}"><h3 class="${"text-center md:text-left uppercase text-lg md:text-xl font-bold text-gray-50 dark:text-white mb-2"}">Welcome back</h3>
                    <form class="${"flex flex-col justify-center items-center w-full h-auto bg-transparent"}"><div class="${"grid grid-cols-2 gap-2 w-full h-auto mb-4"}"><div class="${"col-span-full w-full h-auto relative flex items-center"}"><div class="${"i-bi:person w-6 h-6 absolute left-2 md:left-4 inset-y-0 my-auto text-zinc-900"}"></div>              
                                <input type="${"text"}" name="${"url"}" id="${"url"}" placeholder="${"Masukkan Url"}" class="${"focus:outline-none block w-full rounded placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-10 md:pl-12 pr-4 h-12 text-gray-600"}"${add_attribute("value", urlLinkSite, 0)}></div>
                            </div>
                        <div class="${"w-full h-auto"}"><button ${""} type="${"submit"}" class="${"flex justify-center md:justify-between items-center w-full h-auto " + escape(!inputValueName ? "bg-zinc-300" : "bg-amber-500", true) + " px-0 md:px-4 py-3 md:py-4 rounded-xl"}"><span class="${"relative text-xs font-black text-zinc-900 sm:block uppercase"}">Kirim</span>
                                <div class="${"hidden md:block i-bi:send-fill w-4 h-4 text-zinc-900"}"></div></button></div></form></div>` : ``}</div>
            
            ${$switchLayer === "L1" ? `${$urlLink && $countData ? `${$setListPersonData.length ? `<div class="${"col-span-full flex flex-col w-full h-auto"}"><div class="${"flex flex-col w-full h-auto mt-4 rounded-3xl bg-transparent border-none md:border border-zinc-400 p-4 sm:p-10"}"><div class="${"flex flex-col md:flex-row justify-between items-center"}"><div class="${"flex flex-col w-auto h-auto pb-2"}"><span class="${"text-center md:text-left uppercase text-sm text-white font-bold"}">Daftar Akun</span>
                                    <span class="${"text-center md:text-left text-xs text-zinc-50 uppercase"}">Hasil pengambilan data dari pengguna instagram</span></div></div>
                            <div class="${"flex flex-col w-full h-96 space-y-2 overflow-y-auto"}">${each($setListPersonData, (item) => {
    return `<div class="${"flex flex-row justify-between items-center md:items-center w-full h-auto bg-white p-4"}"><h3 class="${"uppercase text-sm md:text-md font-bold text-zinc-900 mb-0 md:mb-0"}">${escape(item.text)}</h3>
                                    <div class="${"flex flex-row justify-between md:justify-end items-center space-x-1 w-auto md:w-auto h-auto"}">
                                        <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"w-4 md:w-6 h-4 md:h-6 text-zinc-800 bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></div>
                                </div>`;
  })}</div>
                            <div class="${"flex flex-col md:flex-row justify-between items-center"}"><div class="${"flex flex-row space-x-2 w-auto h-auto mt-2 md:mt-0"}"><span class="${"text-sm tracking-tight uppercase font-thin text-white"}">Comment /</span>
                                    <span class="${"text-sm tracking-widest uppercase font-bold text-white"}">${escape(countDataPerson)}</span></div></div></div>
                        <div class="${"flex justify-center items-center w-full h-auto mt-2 px-4 md:px-8"}"><button type="${"button"}" class="${"w-full h-auto bg-gradient-to-r from-zinc-50 to-gray-100 text-center border border-gray-50 text-black rounded-xl p-2"}"><span class="${"uppercase text-xs font-black"}">Selanjutnya</span></button></div></div>` : ``}` : ``}` : ``}
            
            ${$switchLayer === "L2" ? `${$urlLink && $countData ? `${$setListPersonData.length ? `<div class="${"col-span-full flex flex-col w-auto h-auto"}"><div class="${"flex flex-col w-full h-96 overflow-y-auto mt-4 space-y-2 rounded-3xl bg-transparent border-none md:border border-zinc-400 p-4 sm:p-10"}"><div class="${"flex flex-col w-auto h-auto pb-2"}"><span class="${"text-center md:text-left uppercase text-sm text-white font-bold"}">Shorting Selected List</span>
                                <span class="${"text-center md:text-left text-xs text-zinc-50 uppercase"}">Hasil akhir, data pemilihan giveaway.</span></div>
                            ${each($setListPersonData, (item) => {
    return `<div class="${"flex justify-between items-center w-full h-auto bg-white p-4"}"><h3 class="${"uppercase text-sm md:text-md font-bold text-zinc-900"}">${escape(item.text)}</h3>
                                
                                <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"w-4 md:w-6 h-4 md:h-6 text-zinc-800 bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg>
                            </div>`;
  })}</div>
                        ${$setListPersonData.length > 1 ? `<div class="${"flex justify-center items-center w-full h-auto mt-2 px-4 md:px-8"}"><button type="${"button"}" class="${"w-full h-auto p-2 bg-gradient-to-r from-amber-500 to-yellow-900 border border-amber-500 rounded-xl"}"><span class="${"uppercase text-xs font-black"}">Pilih Pemenang</span></button></div>` : ``}
                        </div>` : ``}` : ``}` : ``}</div>
        <div class="${"flex flex-col w-auto h-auto mt-4 md:mt-16 pb-8"}"><div class="${"space-x-4 text-center"}"><span class="${"text-white text-xs"}"><small>\xA9 PT Unggulan Bugar Indonesia</small></span></div>
            <div class="${"flex flex-col space-y-1 text-center -mt-2"}"><span class="${"text-white text-xs"}"><small>BETA V0.1</small></span>
                <span class="${"text-white text-xs uppercase font-bold"}"><small>Tools</small></span></div></div></div>`}`}`;
});
export {
  Index_tools as default
};
