const { exec, execSync } = require("child_process");

function getDiffCommand(folder, prefix, i) {
  const src = `./${prefix}-${i}-ORJ.jpg`;
  const src2 = `./${prefix}-${i}-EDT.jpg`;
  console.log("magic", src, src2);
  return `magick compare -fuzz 10%  ${src} ${src2} out/${prefix}-${i}-DIF.jpg`;
}

const packs = [
  {
    folder: "ANIMAL",
    prefix: "ANIMA",
  },
  {
    folder: "CULTURE",
    prefix: "CULTURE",
  },
  {
    folder: "HISTORY",
    prefix: "HISTORY",
  },
  {
    folder: "LANDSCAPE",
    prefix: "LANDSCAPE",
  },
  {
    folder: "MOVIE",
    prefix: "MOVIES",
  },
  {
    folder: "TRAVEL",
    prefix: "TRAVEL",
  },
];

packs.forEach((p) => {
  for (let i = 1; i <= 20; i++) {
    exec(getDiffCommand(p.folder, p.prefix, i));
  }
});

// packs.forEach(p => {
//   exec (`magick mogrify -resize 50% ./out/${p.folder}/*.jpg`)
// });

// packs.forEach(p => {
//   for (let i = 1; i <= 20; i++) {
//     execSync(`node main.js ./out/${p.folder}/${p.prefix}-${i}-DIF.jpg >> ${p.folder}.json`)
//   }
// });
