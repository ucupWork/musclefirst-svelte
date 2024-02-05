import { c as create_ssr_component, e as escape, a as add_attribute, d as each, v as validate_component } from "../../../../_app/immutable/chunks/index-1e319aa9.js";
import "../../../../_app/immutable/chunks/common-3de0477a.js";
import { I as Index } from "../../../../_app/immutable/chunks/Index-1d60b221.js";
import "../../../../_app/immutable/chunks/index-fe7c0294.js";
import "../../../../_app/immutable/chunks/CardNoResult-60b04b1f.js";
import "../../../../_app/immutable/chunks/DisclosureButton-f7891f7a.js";
import "../../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
const FeatOne = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAAGRCAMAAAA+d/OgAAAAYFBMVEVHcEwIHjEIHjHyTHsIHjEIHjEIHjEIHjEIHjEIHjHfIUYIHjH/Zjr9f2NCJ0B0Hzv///+pIEFEMjfkLFTFVjrqPml1OEohIjSzP2b1c1OdTkDPIUTvk6VFVWT4z9fqboZh6UvcAAAACnRSTlMAWTD/FprqwH5AG54KywAACTFJREFUeNrt3et2qyoQAOAY77HVHQ0Sk570/d/yqEkbAfEKA3TNrP1r28vX4RLFUQ6HfZEmcZRNRRwnx4PBCMJp309ESWBMmC2OKDFCTKNsTcQGUullKyMC75Zhtjoiz/IswmcyzTZFBNgng2ibMYut7oyvAOuSwWZiFtmfRrhE8r2RlvLgjaGRQV1ePn+i+RDjRtkvhzEmzO+sP9/xMRosMgUxxkwWP2eNFwaZwHfHy4DYjBs/bvAdkhku82lsEwk/jUubWpbHD4uMH3Yas8+1/TGGH9e3BcYafswwRtrMzz0Z/NzDzuFlM2Nkp8cM5jz3yH0E181EY99qMyc+0Y7zHqBzim0XM6+AuloIticS7mLBsz6N/PSzIiBXVDa2NuBlYTf/bEFCL/lsQMKvSq1Gmlg4C1ZdwhpagDyky4d3aGoht23w2HYhfw5E83dQ+OvVRcbz6R0FGtGIxj9hvPrvqNGIRjSiEY1oRKOd5xTVO/C8B41otNIYpF4yF8w6RV68I2fWKWZ/jpeuX8pIkzgDjmhVEeIxjDIzsbQI0Yszk7Fg/So1K1ygDMLMgphcT02jzI6Qr0snmTURSabUMLMpPPuJo0jbiCNI+4gC0rOQyNXvjt60omV9u8DErS5n74GKHy60vnzAxq2crGwQJ8ZbI6/M0hei8re1hbvRfT2MAaNQ0PlubX5M19PVY1ojHx/bfJnybaYKD7S949HeWM9V4cFm8vnBzfbGcraaUXdQcWiz0/e7xs0Ukauh68tt2BFz+TRuZGsR+1ETSepCG3NIyjX2UZJGg3lkExlx3ZFyVaGXuv3IHu0zWg9cuA4Zyormm5/qyvIiKbvUd6BkZ59YWpH+W+pLL5IaYG0HarZILZZWKb97bikrXtV14MIapZXUw7/lJvsjNR3gKvOlFenDCaCWzQy6Diw0Mgdk3w9xAI1oRCMa0YhGNP4dY+OAcXiZaK+xVTY2GOmk8XkF0TQAxonz8KyZNWodTG0Cms/OcJswlquNXWq75HYdYadRcp3CG4ePhi7vqOMHmndwBz6bmR9VZ1PGwQONe42bDzTCMqmwTF7ebpfGkLEZuwsyYnx9RwltpCWV3Cg+LLrjBGGU38xeZuzyWrd9QFEn+L5cbreRF2zsNA5+yc4mpauLAtYbx24siu8d+fk/uv/HKzHqLq5AIxrRuMOY1zm1AEXzYsLYVXZf6zrPzemKvhp1xvgMci0KQGre4e7vUtlFRt+v+i8+nzsr1Za3zjas491i/I3zU6uA28Na2Qhtp3EQ995b9OR59PNp4uLJmnK18f31eHz5KoyyOA/jtD78x78+HpU+484g/37iYa3x8Wv897XQSIylsY2FRh/Y+DU0/rfQWDlg9F0wEgeMsK290QiK3GqERG42AiK3G30XjGCZ3GP0XTACZXKfkThghEnkTqPvghEikd9DYym/F2fSODzHfbDnuEw57tU3OGoGjc299Tde0tggxuoxejmTJVzpdW1y9qlemfzi30LNPYGUGzS2ffL76+u74lYVAuHtorVJY78KQvnlR/HJlNyskSf2dfbCG/Rrk0aBGI0/tpebMwrE10M+4os7a2NGKi6Gyx4uvBoyCgvH7903xIc0iRHjORtv6UVdEsZ4nyKOIK8GjMUkcW6WJEbSOPvgMAE3FnNEAVmDG/NZIoek8Gu6C4j8i+qhjWfupFHydgrmq4wa5a+Uj2WzD4EeMsn6t2xV0MZ0vfFkv5E4YDzZb6zsNwItku4xQp3f7jCCXSZsN8JdEW42Al5YbzVCrk9sNILe1NxmhL3vus14st9IHDCerDSG1hi9ZefhZ5NG6dZO7AaP0DVI5/G1KO6Si70uhDayyxThAmKWg9dyZbNIjphdwY35HJInZvA1cfzqYzhHLOGNwkJzOE3MiAGjsP4YThJrA/WPI8vh4cSr7KhvxCiuhyfSV9nR6wrjvWj7ES3uyw+sQb4+uI/jtz6qdZ2Inpce2HLzIx5fr69W/uX0vuzAynGTiJ/S74vWau18kS87sDKTfSJjyV2Pam0HoosOrM5kIt52XbeEUsjO5ortp3m5cMfQk907MmbkM8m9O2y4oGfOyGXSk9elGDSeuF29I9nNLZPGiWelqG+J8a7ymQpNxhMa0YhGNKIRjWhEIxrRiEY0ohGNaEQjGtGIRjSiEY1oRCMa0YhGNKIRjWhEIxrRiEY0olGBkalQvttpHFa15Sc7jcMjZ1uN72LQ4mSt8XTuq0HzTc+FQRn7F43fTye7jdvjDxkJGrGt0fjnjD4a1RgrNCoxEjQqMfpoVGOsHDASNCox+mhUY6wcMBIHjL4LxsoBI3HA6KNRjbFywOi7YKwcMBIHjL4LxsoBI3HA6LtgJA4YfReMxAGj74KxcsDou2AkDhh9F4zEAaPvgpE4YJTNP1YZiQNGSSLtMo4jLTMSB4yjibTN6Ltg9F0wEgeMYpe00Ci09vZXUeozCq09eA1iYYlRQN61pHGfUeiS59e7GvO7PUZx3JzzPC8Uv1l+pxHkJcl7jb4LRuKAESCTCozEAaP2TCoxEgeMmjOpyEgq+41aJ3NlRo1IdUZ9SIVGbcNbpVHX8FZr1NPeio1a2lu1UcdMqdyoIZUajMpTqcOoOpV6jGoHuC6jylRqMypUajQqU2o1KlJqNipRajcqmC4BjLtnIhjjvmRCGfcwAY2bmbDGjrnWWRFw48tZLeP1+/QYMb6gcmnV6t7bCJkzDqyt9uff0DZvpL4lcWWNzJ5NV0uM9RAVyve+Mhnc3lfsHmK1fcQs5fdiy4n5zshtGBcc2A7ZDZzaZK+81vzupDG/WfOLmdfEiC8XLf0WzkE2Gm06CayPjjoicddrzgnS7r2PSgzPnbCDKJuKXGdCr+Pty/bGLrxsLqgG6Cyvb+lgdI/zqYyqkXa6fNmv9CQbsc9JO+p1K042NGaJ65ADa4ud1ZJrT1uaOSmx7ZNRtiPyPuphPP9rzw+NjrObdJuOZGzb+DS0BxiFko3tD4EXRlYAvcNkHBOjjR7FSXBYEG06zTjjJD2sCHDnSt97FCVxBNL/kuNhTwSeTmjb/dLgoCQ6qOqmj0NlvOGQVyON9OiYnKZeEm6xRnGcJGl6gIwgTZOkzWw80V9bV5u1xEs1J245mQl1P/l/Y6GJCQcaI5YAAAAASUVORK5CYII=";
const FeatTwo = "/_app/immutable/assets/2-92997b35.png";
const FeatThree = "/_app/immutable/assets/5-4715bbb3.png";
const FeatFour = "/_app/immutable/assets/4-fc504003.png";
const FeatFive = "data:image/png;base64,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";
const FeatSix = "/_app/immutable/assets/3-b059c12a.png";
const IconOne = "/_app/immutable/assets/lazy-a9155a8d.png";
const IconTwo = "/_app/immutable/assets/coffee-4705e71f.png";
const IconThree = "/_app/immutable/assets/sleepy-7795ba55.png";
const IconFour = "/_app/immutable/assets/no-coffee-cups-5bc182f8.png";
const IconFive = "/_app/immutable/assets/run-13920441.png";
const IconSix = "/_app/immutable/assets/game-console-7655d18d.png";
const IconSeven = "/_app/immutable/assets/fear-f1479104.png";
const IconEight = "/_app/immutable/assets/sleep-138a4e43.png";
const cocokCardList = [
  {
    id: "1",
    title: "RASA ENAK, TANPA DIBUAT-BUAT",
    linkImg: FeatOne,
    altImg: "RASA ENAK",
    txtDesc: "Rasa yang enak dan menyegarkan, PRO NRGY bebas dari pemanis buatan dan pewarna buatan. PRO NRGY hanya menggunakan pemanis natural stevia."
  },
  {
    id: "2",
    title: "RENDAH KALORI, NOL GULA",
    linkImg: FeatTwo,
    altImg: "RENDAH KALORI",
    txtDesc: "Sangat rendah kalori, dan bebas gula, PRO NRGY sangat aman bagi kamu yang sedang menjalani program diet & pastinya juga aman bagi penderita diabetes."
  },
  {
    id: "3",
    title: "ENERGI JERNIH, TAHAN LAMA",
    linkImg: FeatThree,
    altImg: "ENERGI JERNIH",
    txtDesc: "Kamu tidak akan hanya merasakan tambahan energi dalam 1 jam pertama tetapi energi boost yang diberikan PRO NRGY sangatlah mulus dan tahan selama beberapa jam"
  },
  {
    id: "4",
    title: "FOCUS TAK TERPECAH",
    linkImg: FeatFour,
    altImg: "FOCUS TAK TERPECAH",
    txtDesc: "PRO NRGY bantu ciptakan fokus yang tak terpecahkan ! <br> NGEGAME DAN OLAHRAGA LEBIH LAMA TANPA TAKUT FOKUS HILANG"
  },
  {
    id: "5",
    title: "LELAH ATAU GELISAH? ITU DULU",
    linkImg: FeatFive,
    altImg: "LELAH ATAU GELISAH",
    txtDesc: "Kamu pasti sering merasakan lelah atau gelisah yang berlebih setelah meminum energy drink pada umumnya? Dengan PRO NRGY ga lagi deh kamu ngalamin hal ini ataupun tergesa-gesa."
  },
  {
    id: "6",
    title: "ENERGI JERNIH, TAHAN LAMA",
    linkImg: FeatSix,
    altImg: "ENERGI JERNIH",
    txtDesc: "Untuk kamu yang sensitif sama kafein pasti kamu sering menghindari minuman berkafein karena susah tidur di malam hari. Nah, Kandungan L-Theanine pada PRO NRGY ini akan mengantisipasi hal ini."
  }
];
const butuhCardList = [
  {
    id: "1",
    title: "KAMU YANG GABUTAN",
    linkImg: IconOne,
    altImg: "GABUTAN",
    txtDesc: "Mau ngapain aja males banget, bangun dari kasur aja males gimana yang lain?."
  },
  {
    id: "2",
    title: "KAMU YANG GA SUKA NGOPI",
    linkImg: IconTwo,
    altImg: "SUKA NGOPI",
    txtDesc: "Mau ngopi biar semangat tapi benci sama rasanya."
  },
  {
    id: "3",
    title: "KAMU YANG NGANTUK TERUS",
    linkImg: IconThree,
    altImg: "NGANTUK TERUS",
    txtDesc: "Setiap bangun pasti langsung ngantuk lagi, jadi males ngapain aja."
  },
  {
    id: "4",
    title: "KAMU YANG GA BANGET SAMA KAFEIN",
    linkImg: IconFour,
    altImg: "GA BANGET SAMA KAFEIN",
    txtDesc: "Pasti jadi ga bisa tidur kalau kena kafein dikit aja"
  },
  {
    id: "5",
    title: "KAMU YANG SUKA OLAHRAGA",
    linkImg: IconFive,
    altImg: "SUKA OLAHRAGA",
    txtDesc: "Mau olahraga tapi ga ada tenaga atau lemes?"
  },
  {
    id: "6",
    title: "KAMU YANG HOBI NGEGAME, TAPI KALAH MULU",
    linkImg: IconSix,
    altImg: "HOBI NGEGAME",
    txtDesc: "Hobinya sih ngegame tapi gagal fokus terus, kapan menang nya?"
  },
  {
    id: "7",
    title: "KAMU YANG HOBI REBAHAN",
    linkImg: IconSeven,
    altImg: "HOBI REBAHAN",
    txtDesc: "Boro-boro olahraga deh, ga semangat, hobinya rebahan bukan yang lain."
  },
  {
    id: "8",
    title: "KAMU YANG GA ADA MOTIVASI",
    linkImg: IconEight,
    altImg: "GA ADA MOTIVASI",
    txtDesc: "Motivasi buat bangun di pagi hari noneksisten."
  }
];
const SectionOne = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hashtag } = $$props;
  let { title } = $$props;
  let { btnText } = $$props;
  let { bgImage } = $$props;
  if ($$props.hashtag === void 0 && $$bindings.hashtag && hashtag !== void 0)
    $$bindings.hashtag(hashtag);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  if ($$props.bgImage === void 0 && $$bindings.bgImage && bgImage !== void 0)
    $$bindings.bgImage(bgImage);
  return `<section class="${"w-full h-auto md:h-screen overflow-hidden"}"><div class="${"grid grid-cols-2 gap-4 w-full h-screen relative bg-center bg-cover"}" style="${"background-image: url(" + escape(bgImage, true) + ");"}"><div class="${"col-span-full md:col-span-1 w-full h-screen flex justify-center items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0"}"><span class="${"text-rose-700 p-1 font-bold text-2xl max-w-xs text-left rounded-full"}">${escape(hashtag)}</span>
                <h2 class="${"text-3xl md:text-5xl font-black text-white max-w-xl leading-none"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
                <button class="${"flex justify-between items-center w-full max-w-xs md:max-w-sm h-auto py-4 px-8 rounded-full bg-rose-800 shadow-lg shadow-rose-500/50 mt-4 md:mt-8"}"><span class="${"uppercase font-black text-white"}">${escape(btnText)}</span>
                    <span class="${"w-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white w-4 h-4 bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></span></button></div></div></div></section>`;
});
const SectionTwo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  let { description } = $$props;
  let { imgLink } = $$props;
  let { altImg } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imgLink === void 0 && $$bindings.imgLink && imgLink !== void 0)
    $$bindings.imgLink(imgLink);
  if ($$props.altImg === void 0 && $$bindings.altImg && altImg !== void 0)
    $$bindings.altImg(altImg);
  return `<section class="${"w-full h-auto md:h-screen overflow-hidden"}"><div class="${"grid grid-cols-2 gap-4 w-full h-screen relative bg-center bg-cover bg-white md:px-16"}"><div class="${"col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center items-center md:px-8"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 text-left"}"><span class="${"text-red-800 font-bold text-3xl"}">${escape(subtitle)}</span>
                <h2 class="${"text-2xl md:text-5xl font-black text-zinc-900 leading-none"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
                <div class="${"flex flex-col w-full h-auto py-4 mt-4 md:mt-8"}"><p class="${"leading-relaxed text-md"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p></div></div></div>
        <div class="${"col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center md:justify-end items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0"}"><img${add_attribute("src", imgLink, 0)} class="${"w-auto h-auto"}"${add_attribute("alt", altImg, 0)}></div></div></div></section>`;
});
const SectionThree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { title } = $$props;
  let { subtitle } = $$props;
  let { imgLink } = $$props;
  let { altImg } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.imgLink === void 0 && $$bindings.imgLink && imgLink !== void 0)
    $$bindings.imgLink(imgLink);
  if ($$props.altImg === void 0 && $$bindings.altImg && altImg !== void 0)
    $$bindings.altImg(altImg);
  return `<section${add_attribute("id", id, 0)} class="${"w-full h-auto md:h-screen bg-[#0e1d32] relative overflow-hidden"}"><div class="${"grid grid-cols-2 gap-4 w-full h-screen"}"><div class="${"col-span-full md:col-span-1 w-full h-auto flex justify-center items-center md:px-8 z-10 bg-transparent"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-left"}"><span class="${"text-red-600 font-bold text-2xl"}">${escape(subtitle)}</span>
                <h2 class="${"text-2xl md:text-5xl font-black text-white leading-none text-left"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
                <p class="${"leading-relaxed text-left text-sm text-gray-300 max-w-md mt-4"}"><span class="${"font-bold"}">PRO NRGY</span> diformulasikan secara khusus untuk menambah energi dan fokus tanpa efek samping seperti deg-degan, gelisah atau susah tidur</p>
                <p class="${"leading-relaxed text-left text-sm text-gray-300 max-w-md mt-4"}">Harga lebih murah untuk meningkatkan fokus dan tanpa efek samping dibandingkan meminum kopi</p>
                <p class="${"leading-relaxed text-left text-sm text-gray-300 max-w-md mt-4"}">Tahan lama karena tidak hanya mendapat tambahan energi di awal konsumsi, tapi <span class="${"font-bold"}">PRO NRGY</span> juga dapat memberikan booster selama beberapa jam.</p></div></div>
    
        <div class="${"col-span-full md:col-span-1 w-full h-auto flex justify-end items-end z-0"}"><img${add_attribute("src", imgLink, 0)} class="${"w-full md:w-[870px] h-auto"}"${add_attribute("alt", altImg, 0)}></div></div></section>`;
});
const SectionFour = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { btnText } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  return `<section class="${"w-full h-auto"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto md:px-24 bg-[#e02d47] shadow"}"><div class="${"flex w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-center"}"><h2 class="${"text-3xl font-black text-white leading-none text-center"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2></div>
        <div class="${"flex w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-center"}"><button class="${"flex justify-between items-center leading-none text-center bg-[#0e1d32] shadow-lg shadow-rose-500/50 w-64 border rounded-full py-2 px-6"}"><span class="${"block text-xl font-black text-white"}">${escape(btnText)}</span> 
                <span><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"w-4 h-4 fill-current text-white bi bi-basket-fill"}" viewBox="${"0 0 16 16"}"><path d="${"M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"}"></path></svg></span></button></div></div></section>`;
});
const SectionFive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cocokCardList: cocokCardList2 } = $$props;
  let { gridCount } = $$props;
  let { title } = $$props;
  let { subtitle } = $$props;
  if ($$props.cocokCardList === void 0 && $$bindings.cocokCardList && cocokCardList2 !== void 0)
    $$bindings.cocokCardList(cocokCardList2);
  if ($$props.gridCount === void 0 && $$bindings.gridCount && gridCount !== void 0)
    $$bindings.gridCount(gridCount);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `<section class="${"flex justify-center items-center w-full h-auto py-8 md:py-16 bg-white relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center z-0"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center mb-4"}"><span class="${"text-rose-900 font-bold text-xl md:text-2xl"}">${escape(subtitle)}</span>
            <h2 class="${"text-lg md:text-3xl font-black text-gray-900 leading-none text-center"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2></div>
        <div class="${"grid grid-cols-" + escape(gridCount, true) + " gap-2 md:gap-4 w-full h-auto px-8 md:px-24"}">${each(cocokCardList2, (list) => {
    return `<div class="${"col-span-full md:col-span-1 w-full h-auto border rounded-xl shadow p-6 md:p-8"}"><div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"flex flex-col w-full justify-center items-center space-y-2"}">${list.linkImg ? `<span><img class="${"w-auto h-12"}"${add_attribute("src", list.linkImg, 0)}${add_attribute("alt", list.altImg, 0)}></span>` : ``}
                    <span class="${"font-black text-lg"}">${escape(list.title)}</span>
                    <p class="${"leading-relaxed text-left text-sm text-gray-700"}"><!-- HTML_TAG_START -->${list.txtDesc}<!-- HTML_TAG_END -->
                    </p></div>
            </div>`;
  })}</div></div></section>`;
});
const SectionSix = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { butuhCardList: butuhCardList2 } = $$props;
  let { title } = $$props;
  let { subtitle } = $$props;
  if ($$props.butuhCardList === void 0 && $$bindings.butuhCardList && butuhCardList2 !== void 0)
    $$bindings.butuhCardList(butuhCardList2);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `<section class="${"flex justify-center items-center w-full h-auto py-8 md:py-16 bg-[#0e1d32] relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center z-0"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center mb-4"}"><span class="${"text-rose-900 font-bold text-2xl"}">${escape(subtitle)}</span>
            <h2 class="${"text-3xl font-black text-white leading-none text-center"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2></div>
        <div class="${"grid grid-cols-4 gap-4 w-full h-auto px-8 md:px-24"}">${each(butuhCardList2, (list) => {
    return `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"col-span-full md:col-span-1 w-full h-auto rounded-xl shadow-xl bg-gray-900 p-8"}"><div class="${"flex flex-col w-full justify-center items-center text-center space-y-2"}">${list.linkImg ? `<span><img class="${"w-auto h-12"}"${add_attribute("src", list.linkImg, 0)}${add_attribute("alt", list.altImg, 0)}></span>` : ``}
                    <span class="${"text-white font-black text-lg"}">${escape(list.title)}</span>
                    <p class="${"leading-relaxed text-white text-left text-sm"}"><!-- HTML_TAG_START -->${list.txtDesc}<!-- HTML_TAG_END -->
                    </p></div>
            </div>`;
  })}</div>
        <div class="${"flex flex-col w-auto h-auto px-8 md:px-8 py-4 md:py-8 text-center mt-16 md:mt-8"}"><h2 class="${"text-md md:text-xl font-black text-white leading-none text-center md:max-w-md bg-rose-800 p-4 rounded-2xl shadow-xl"}"><span class="${"block uppercase"}">JIKA KAMU ADALAH SALAH SATU ORANG DIATAS, ITU TANDANYA KAMU PERLU PRO NRGY!</span></h2></div></div></section>`;
});
const SectionSeven = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  let { btnText } = $$props;
  let { imgLink } = $$props;
  let { altImg } = $$props;
  let { txtDescOne } = $$props;
  let { txtDescTwo } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  if ($$props.imgLink === void 0 && $$bindings.imgLink && imgLink !== void 0)
    $$bindings.imgLink(imgLink);
  if ($$props.altImg === void 0 && $$bindings.altImg && altImg !== void 0)
    $$bindings.altImg(altImg);
  if ($$props.txtDescOne === void 0 && $$bindings.txtDescOne && txtDescOne !== void 0)
    $$bindings.txtDescOne(txtDescOne);
  if ($$props.txtDescTwo === void 0 && $$bindings.txtDescTwo && txtDescTwo !== void 0)
    $$bindings.txtDescTwo(txtDescTwo);
  return `<section class="${"flex justify-center items-center w-full h-auto md:h-screen bg-gray-50 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center z-0"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto"}"><div class="${"col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-center"}"><img${add_attribute("src", imgLink, 0)} class="${"w-10/12 h-auto"}"${add_attribute("alt", altImg, 0)}></div></div>
            <div class="${"col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-left"}"><span class="${"text-rose-900 font-bold text-xl md:text-2xl"}">${escape(subtitle)}</span>
                    <h2 class="${"text-2xl md:text-4xl font-black text-gray-900 leading-none text-left"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
                    <p class="${"leading-relaxed text-left text-sm text-gray-700"}"><!-- HTML_TAG_START -->${txtDescOne}<!-- HTML_TAG_END --></p>
                    <p class="${"leading-relaxed text-left text-sm text-gray-700"}"><!-- HTML_TAG_START -->${txtDescTwo}<!-- HTML_TAG_END --></p>
                    <button class="${"w-full border-2 border-zinc-900 bg-transparent rounded-full text-center py-4 px-4 md:px-8 mt-4 md:mt-8"}"><span class="${"font-bold uppercase text-zinc-900"}">${escape(btnText)}</span></button></div></div></div></div></section>`;
});
const SectionEight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imgLink } = $$props;
  let { altImg } = $$props;
  if ($$props.imgLink === void 0 && $$bindings.imgLink && imgLink !== void 0)
    $$bindings.imgLink(imgLink);
  if ($$props.altImg === void 0 && $$bindings.altImg && altImg !== void 0)
    $$bindings.altImg(altImg);
  return `<section class="${"w-full h-auto"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto md:px-24 z-10 bg-[#0e1d32] shadow"}"><div class="${"flex w-auto h-auto px-0 md:px-0"}"><img${add_attribute("src", imgLink, 0)}${add_attribute("alt", altImg, 0)}></div></div></section>`;
});
const SectionNine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  let { btnText } = $$props;
  let { imgLink } = $$props;
  let { altImg } = $$props;
  let { titlePriceHead } = $$props;
  let { flavorDescription } = $$props;
  let { priceDescription } = $$props;
  let { priceBefore } = $$props;
  let { priceAfter } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  if ($$props.imgLink === void 0 && $$bindings.imgLink && imgLink !== void 0)
    $$bindings.imgLink(imgLink);
  if ($$props.altImg === void 0 && $$bindings.altImg && altImg !== void 0)
    $$bindings.altImg(altImg);
  if ($$props.titlePriceHead === void 0 && $$bindings.titlePriceHead && titlePriceHead !== void 0)
    $$bindings.titlePriceHead(titlePriceHead);
  if ($$props.flavorDescription === void 0 && $$bindings.flavorDescription && flavorDescription !== void 0)
    $$bindings.flavorDescription(flavorDescription);
  if ($$props.priceDescription === void 0 && $$bindings.priceDescription && priceDescription !== void 0)
    $$bindings.priceDescription(priceDescription);
  if ($$props.priceBefore === void 0 && $$bindings.priceBefore && priceBefore !== void 0)
    $$bindings.priceBefore(priceBefore);
  if ($$props.priceAfter === void 0 && $$bindings.priceAfter && priceAfter !== void 0)
    $$bindings.priceAfter(priceAfter);
  return `<section class="${"flex justify-center items-center w-full h-auto md:h-screen bg-white relative overflow-hidden"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto justify-center items-center z-0"}"><div class="${"col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center items-center"}"><div class="${"flex w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8"}"><div class="${"flex flex-col text-left w-auto h-auto"}"><span class="${"text-rose-900 font-bold text-xl md:text-2xl"}">${escape(subtitle)}</span>
                    <h2 class="${"text-2xl md:text-4xl font-black text-gray-900 leading-none text-left"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2></div></div>
            <div class="${"flex flex-col w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8 text-center"}"><div class="${"flex w-full h-auto justify-center items-center"}"><img${add_attribute("src", imgLink, 0)} class="${"w-10/12 h-auto"}"${add_attribute("alt", altImg, 0)}></div></div></div>
        <div class="${"col-span-full md:col-span-1 w-full h-auto flex flex-col justify-end items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-16 py-4 md:py-8 text-left"}"><h2 class="${"text-2xl md:text-4xl font-black text-gray-900 leading-none text-left max-w-sm mb-4"}"><span class="${"block"}">${escape(titlePriceHead)}</span></h2>
                <h3 class="${"text-gray-900 font-base text-xl md:text-2xl"}">${escape(flavorDescription)}</h3>
                <h3 class="${"text-gray-900 font-base text-xl md:text-2xl"}">${escape(priceDescription)}</h3>
                <h2 class="${"text-gray-900 font-bold text-2xl md:text-4xl line-through"}">${escape(priceBefore)}</h2>
                <h1 class="${"text-rose-900 font-black text-3xl md:text-6xl"}">${escape(priceAfter)}</h1>
                
                <div class="${"flex w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-center mt-2 md:mt-4"}"><button class="${"flex justify-between items-center leading-none text-center bg-rose-800 shadow-lg shadow-rose-500/50 w-64 border rounded-full py-4 px-6"}"><span class="${"block text-xl font-black text-white"}">${escape(btnText)}</span> 
                        <span><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"w-4 h-4 fill-current text-white bi bi-basket-fill"}" viewBox="${"0 0 16 16"}"><path d="${"M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"}"></path></svg></span></button></div></div></div></div></section>`;
});
const SectionTen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  let { btnText } = $$props;
  let { description } = $$props;
  let { linkShopee } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.linkShopee === void 0 && $$bindings.linkShopee && linkShopee !== void 0)
    $$bindings.linkShopee(linkShopee);
  return `<section id="${"get-product"}" class="${"flex justify-center items-center w-full h-auto py-8 md:py-16 bg-[#0e1d32] relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center z-0"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center"}"><span class="${"text-rose-900 font-black text-2xl uppercase"}">${escape(subtitle)}</span>
            <h2 class="${"text-4xl md:text-3xl font-black text-white leading-none text-center"}"><span class="${"block"}">${escape(title)}</span></h2></div>
        <div class="${"flex flex-col w-auto h-auto px-8 md:px-8 py-4 md:py-8 text-center mt-16 md:mt-8"}"><p class="${"text-md text-white leading-relaxed max-w-sm"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p></div>
                
        <a${add_attribute("href", linkShopee, 0)} class="${"flex w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-center"}"><h2 class="${"flex justify-center items-center leading-none text-center bg-rose-800 w-64 border border-gray-900 shadow-lg shadow-rose-500/50 rounded-full py-4 px-6"}"><span class="${"block text-xl font-black text-white"}">${escape(btnText)}</span></h2></a></div></section>`;
});
const SectionEleven = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `<section class="${"flex justify-center items-center w-full h-auto py-8 md:py-16 bg-gray-900 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center z-0"}"><div class="${"w-full h-auto flex justify-center items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center"}"><span class="${"text-amber-600 font-bold text-sm md:text-lg uppercase md:max-w-2xl"}">${escape(subtitle)}</span>
                <h2 class="${"text-3xl md:text-4xl font-black text-white leading-none text-center"}"><span class="${"block uppercase max-w-sm"}">${escape(title)}</span></h2></div></div>
        ${validate_component(Index, "IndexAgen").$$render(
    $$result,
    {
      colorType: "default",
      top: true,
      bottom: false,
      id: "list-agent",
      classes: "bg-gray-900"
    },
    {},
    {}
  )}</div></section>`;
});
const MainPronrgy = "/_app/immutable/assets/main-pro-nrgy-0d95efdc.jpg";
const AboutPronrgy = "/_app/immutable/assets/about-pro-nrgy-bf2dc0de.jpg";
const FeaturePronrgy = "/_app/immutable/assets/feature-pro-nrgy-5a8e9efc.jpg";
const FeatureImage = "/_app/immutable/assets/kandungan-nrgy-407632e7.png";
const BannerPronrgy = "/_app/immutable/assets/pro-nrgy-banner-8176df8a.jpg";
const HargaImage = "/_app/immutable/assets/harga-nrgy-71105c32.png";
const load = async ({ url }) => {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname,
    cache: { maxage: 3600, private: false }
  };
};
const Index_nrgy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SectionOne, "SectionOne").$$render(
    $$result,
    {
      bgImage: MainPronrgy,
      hashtag: "#focuswithmusclefirst",
      title: '<span class="block">TINGKATKAN FOKUS</span> \n    <span class="block">DAN ENERGI UNTUK</span> \n    <span class="block">PERFORMA TERBAIK</span> \n    <span class="block">DENGAN RASA UNIK</span>',
      btnText: "Cari Tahu Produknya"
    },
    {},
    {}
  )}

${validate_component(SectionTwo, "SectionTwo").$$render(
    $$result,
    {
      title: '<span class="block">PRO NRGY, CARA CEPAT</span> \n    <span class="block">NAIKKAN FOKUS DAN</span> \n    <span class="block">ENERGIMU</span> ',
      subtitle: "Apa itu Pro NRGY?",
      imgLink: AboutPronrgy,
      altImg: "About Image Product",
      description: 'PRO NRGY adalah <span class="font-bold italic">Energy Drink pertama Indonesia</span> yang terbuat dari bahan-bahan aktif dan teruji secara klinis mampu bantu kamu agar lebih fokus dan berenergi dalam melakukan aktivitas yang kamu jalanin.'
    },
    {},
    {}
  )}

${validate_component(SectionThree, "SectionThree").$$render(
    $$result,
    {
      id: "musclefirst-education",
      title: '<span class="block">INI FUNGSI</span> \n    <span class="block max-w-xl">PRO NRGY UNTUK LEVEL UP FOKUS DAN ENERGIMU</span>',
      subtitle: "Kenapa Harus PRO NRGY?",
      imgLink: FeaturePronrgy,
      altImg: "Featured Product"
    },
    {},
    {}
  )}

${validate_component(SectionFour, "SectionFour").$$render(
    $$result,
    {
      title: "ORDER PRO NRGY SEKARANG",
      btnText: "Beli Sekarang"
    },
    {},
    {}
  )}

${validate_component(SectionFive, "SectionFive").$$render(
    $$result,
    {
      title: '<span class="block">ALASAN KENAPA PRO NRGY LEBIH</span> \n    <span class="block max-w-xl">BAIK DARI PRODUK ENERGY DRINK</span>\n    <span class="block">DI MARKET</span>',
      subtitle: "PRO NRGY Muscle First",
      cocokCardList,
      gridCount: 3
    },
    {},
    {}
  )}

${validate_component(SectionSix, "SectionSix").$$render(
    $$result,
    {
      title: '<span class="block">SIAPA YANG PERLU PRO NRGY</span> ',
      subtitle: "Butuh fokus lebih?",
      butuhCardList
    },
    {},
    {}
  )}

${validate_component(SectionSeven, "SectionSeven").$$render(
    $$result,
    {
      title: '<span class="block">INI KANDUNGAN <br> PRO NRGY</span> ',
      subtitle: "Masih Ragu?",
      btnText: "Composition",
      imgLink: FeatureImage,
      altImg: "Featured Image Product",
      txtDescOne: "Terbuat dari pemanis alami daun stevia",
      txtDescTwo: 'Rasa <span class="font-bold uppercase text-rose-500">stroberi</span> dan <span class="font-bold uppercase text-rose-500">semangka</span>'
    },
    {},
    {}
  )}

${validate_component(SectionEight, "SectionEight").$$render(
    $$result,
    {
      imgLink: BannerPronrgy,
      altImg: "Banner Pronrgy"
    },
    {},
    {}
  )}

${validate_component(SectionNine, "SectionNine").$$render(
    $$result,
    {
      title: '<span class="block">BERAPA HARGANYA?</span> ',
      subtitle: "Promo Khusus Pemesanan Pre Order",
      imgLink: HargaImage,
      altImg: "Harga Product Image",
      titlePriceHead: "Dapatkan Harga Khusus Pre Order",
      flavorDescription: "Rasa Watermelon Yuzu dan Strawberry Orange",
      priceDescription: "Beli 2 pcs FREE Shaker Pro NRGY",
      priceBefore: "RP. 127.900,-",
      priceAfter: "RP. 89.990,-",
      btnText: "Beli Sekarang"
    },
    {},
    {}
  )}

${validate_component(SectionTen, "SectionTen").$$render(
    $$result,
    {
      title: "PRO NRGY",
      subtitle: "Order Now",
      btnText: "Order Via Shopee",
      description: "Pesan sekarang dengan voucher diskon di marketplace kesayanganmu atau hubungi kontak di bawah ini",
      linkShopee: "https://shopee.co.id/universal-link/product/8802988/19406803308?deep_and_web=1&utm_campaign=s8802988_ss_id_webs_lp-pronrgy_bp&utm_source=website&utm_medium=affiliates&utm_source=an_11373210424&utm_content=lp-pronrgy"
    },
    {},
    {}
  )}

${validate_component(SectionEleven, "SectionEleven").$$render(
    $$result,
    {
      title: "Muscle First Pro Nrgy",
      subtitle: "Temukan Agen Tedekat di Kota mu"
    },
    {},
    {}
  )}`;
});
export {
  Index_nrgy as default,
  load
};
