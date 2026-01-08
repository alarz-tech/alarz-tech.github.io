import { BaseTexture } from "@pixi/core";
import { Log } from "../utils/Log";
import { randomInt } from "../utils/randomInt";
import { weightedPick } from "../utils/weightedPick";
import { ITEM_GROUPS, ItemKind } from "../world/entities/Item";

//tileset is 23x33 tiles

const g = 1;
const gap = 2;

const monsterX = 0;
const monsterY = 17;

const heroX = 0;
const heroY = 29;

const itemX = 12;
const itemY = 17;

const wallX = 2; // yellow cave, gray cave
// const wallX = 14; // green dungeon, red dungeon

const wallY = 0; // yellow cave, green dungeon
// const wallY = 3; // gray cave, red dungeon

const base = 16 + gap;

export const SHEET_CONFIG = {
  baseTileSize: 16,
  scale: 2,
};

export const SHEET_DATA = {
  frames: {
    // corners
    c1: {
      frame: {
        h: 16,
        w: 16,
        x: base * (wallX + 0) + g,
        y: base * (wallY + 0) + g,
      },
    }, // top-left
    c2: {
      frame: {
        h: 16,
        w: 16,
        x: base * (wallX + 0) + g,
        y: base * (wallY + 1) + g,
      },
    }, // bottom-left
    c3: {
      frame: {
        h: 16,
        w: 16,
        x: base * (wallX + 2) + g,
        y: base * (wallY + 0) + g,
      },
    }, // top-right
    c4: {
      frame: {
        h: 16,
        w: 16,
        x: base * (wallX + 2) + g,
        y: base * (wallY + 2) + g,
      },
    }, // bottom-right

    // doors
    d1: {
      frame: {
        h: 16,
        w: 16,
        x: base * (wallX + 3) + g,
        y: base * (wallY + 2) + g,
      },
    }, // door type 1
    d2: {
      frame: {
        h: 16,
        w: 16,
        x: base * (wallX + 4) + g,
        y: base * (wallY + 2) + g,
      },
    }, // door type 2

    // arrow right
    arrow_right: { frame: { h: 16, w: 16, x: base * 0 + g, y: base * 27 + g } }, // none

    // dpad
    d_none: { frame: { h: 16, w: 16, x: base * 0 + g, y: base * 28 + g } }, // none
    d_up: { frame: { h: 16, w: 16, x: base * 1 + g, y: base * 28 + g } }, // up
    d_right: { frame: { h: 16, w: 16, x: base * 2 + g, y: base * 28 + g } }, // right
    d_down: { frame: { h: 16, w: 16, x: base * 3 + g, y: base * 28 + g } }, // down
    d_left: { frame: { h: 16, w: 16, x: base * 4 + g, y: base * 28 + g } }, // left

    // wall endings
    e1: {
      frame: {
        h: 16,
        w: 16,
        x: base * (wallX - 2) + g,
        y: base * (wallY + 2) + g,
      },
    }, // bottom end
    e2: {
      frame: {
        h: 16,
        w: 16,
        x: base * (wallX - 1) + g,
        y: base * (wallY + 2) + g,
      },
    }, // top end
    e3: {
      frame: {
        h: 16,
        w: 16,
        x: base * (wallX + 0) + g,
        y: base * (wallY + 2) + g,
      },
    }, // left end
    e4: {
      frame: {
        h: 16,
        w: 16,
        x: base * (wallX + 1) + g,
        y: base * (wallY + 1) + g,
      },
    }, // right end

    // floors
    f00: { frame: { h: 16, w: 16, x: base * 5 + g, y: base * 11 + g } }, // large brazier
    f0: { frame: { h: 16, w: 16, x: base * 6 + g, y: base * 11 + g } }, // small brazier
    f1: { frame: { h: 16, w: 16, x: base * 21 + g, y: base * 0 + g } },
    f2: { frame: { h: 16, w: 16, x: base * 22 + g, y: base * 0 + g } },
    f3: { frame: { h: 16, w: 16, x: base * 21 + g, y: base * 1 + g } },
    f4: { frame: { h: 16, w: 16, x: base * 22 + g, y: base * 1 + g } },
    f5: { frame: { h: 16, w: 16, x: base * 21 + g, y: base * 2 + g } },
    f6: { frame: { h: 16, w: 16, x: base * 22 + g, y: base * 2 + g } },
    f7: { frame: { h: 16, w: 16, x: base * 21 + g, y: base * 3 + g } },
    f8: { frame: { h: 16, w: 16, x: base * 22 + g, y: base * 3 + g } },
    f9: { frame: { h: 16, w: 16, x: base * 21 + g, y: base * 4 + g } },
    f10: { frame: { h: 16, w: 16, x: base * 22 + g, y: base * 4 + g } },
    f11: { frame: { h: 16, w: 16, x: base * 21 + g, y: base * 5 + g } },
    f12: { frame: { h: 16, w: 16, x: base * 22 + g, y: base * 5 + g } },
    f13: { frame: { h: 16, w: 16, x: base * 21 + g, y: base * 6 + g } },
    f14: { frame: { h: 16, w: 16, x: base * 22 + g, y: base * 6 + g } },
    f15: { frame: { h: 16, w: 16, x: base * 21 + g, y: base * 7 + g } },
    f16: { frame: { h: 16, w: 16, x: base * 22 + g, y: base * 7 + g } },
    f17: { frame: { h: 16, w: 16, x: base * 21 + g, y: base * 8 + g } },
    f18: { frame: { h: 16, w: 16, x: base * 22 + g, y: base * 8 + g } },
    f19: { frame: { h: 16, w: 16, x: base * 21 + g, y: base * 9 + g } },
    f20: { frame: { h: 16, w: 16, x: base * 22 + g, y: base * 9 + g } },

    // items
    i1: {
      frame: { h: 16, w: 16, x: base * itemX + g, y: base * itemY + g },
    },

    // monsters
    m11: {
      frame: {
        h: 16,
        w: 16,
        x: base * (monsterX + 0) + g,
        y: base * monsterY + g,
      },
    },
    m12: {
      frame: {
        h: 16,
        w: 16,
        x: base * (monsterX + 1) + g,
        y: base * monsterY + g,
      },
    },
    m13: {
      frame: {
        h: 16,
        w: 16,
        x: base * (monsterX + 2) + g,
        y: base * monsterY + g,
      },
    },

    p1: { frame: { h: 16, w: 16, x: base * 8 + g, y: base * 0 + g } }, // path type 1
    p2: { frame: { h: 16, w: 16, x: base * 9 + g, y: base * 0 + g } }, // path type 2

    s1: { frame: { h: 16, w: 16, x: base * 12 + g, y: base * 7 + g } }, // stair down

    w1: {
      frame: {
        h: 16,
        w: 16,
        x: base * (wallX + 1) + g,
        y: base * (wallY + 0) + g,
      },
    }, // horizontal wall
    w2: {
      frame: {
        h: 16,
        w: 16,
        x: base * (wallX + 2) + g,
        y: base * (wallY + 1) + g,
      },
    }, // vertical wall
  },
  animations: {
    m1: ["m11", "m12", "m13"],
    h1: ["h1", "h2", "h3"],
  },
  meta: {
    size: { w: 0, h: 0 },
    scale: "1",
  },
};

export const ROOM_TILES = [
  "c1",
  "c2",
  "c3",
  "c4",
  "w1",
  "w2",
  "d1",
  "d2",
  "e1",
  "e2",
  "e3",
  "e4",
];

export function enhanceSheetData(bt: BaseTexture) {
  Log.log("info", "Enhancing spritesheet data");
  SHEET_DATA.meta.size.w = bt.width;
  SHEET_DATA.meta.size.h = bt.height;

  ROOM_TILES.forEach((t) => {
    const defaultFrame = SHEET_DATA.frames[t].frame;
    SHEET_DATA.frames[`${t}_yellow_cave`] = {
      frame: Object.assign({}, defaultFrame),
    };
    SHEET_DATA.frames[`${t}_gray_cave`] = {
      frame: Object.assign({}, defaultFrame, { y: defaultFrame.y + base * 3 }),
    };
    SHEET_DATA.frames[`${t}_green_dungeon`] = {
      frame: Object.assign({}, defaultFrame, { x: defaultFrame.x + base * 12 }),
    };
    SHEET_DATA.frames[`${t}_red_dungeon`] = {
      frame: Object.assign({}, defaultFrame, {
        x: defaultFrame.x + base * 12,
        y: defaultFrame.y + base * 3,
      }),
    };
  });

  // hero
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      const key = `h${i}_${j}`;
      SHEET_DATA.frames[`${key}_0`] = {
        frame: {
          h: 16,
          w: 16,
          x: base * (heroX + i * 4 + 0) + g,
          y: base * (heroY + j) + g,
        },
      };
      SHEET_DATA.frames[`${key}_1`] = {
        frame: {
          h: 16,
          w: 16,
          x: base * (heroX + i * 4 + 1) + g,
          y: base * (heroY + j) + g,
        },
      };
      SHEET_DATA.frames[`${key}_2`] = {
        frame: {
          h: 16,
          w: 16,
          x: base * (heroX + i * 4 + 2) + g,
          y: base * (heroY + j) + g,
        },
      };
      SHEET_DATA.animations[key] = [`${key}_0`, `${key}_1`, `${key}_2`];
    }
  }

  // monsters
  for (let i = 0; i < 22; i++) {
    const col = Math.floor(i / 8) * 4;
    const row = 17 + (i % 8);

    const key = `m${i + 1}`;

    SHEET_DATA.frames[`${key}1`] = {
      frame: { h: 16, w: 16, x: base * (col + 0) + g, y: base * row + g },
    };
    SHEET_DATA.frames[`${key}2`] = {
      frame: { h: 16, w: 16, x: base * (col + 1) + g, y: base * row + g },
    };
    SHEET_DATA.frames[`${key}3`] = {
      frame: { h: 16, w: 16, x: base * (col + 2) + g, y: base * row + g },
    };
    SHEET_DATA.animations[key] = [`m${i + 1}1`, `m${i + 1}2`, `m${i + 1}3`];
  }

  // items
  const itemOffsetX = 12;
  const itemOffsetY = 17;
  const itemGroups = Object.keys(ITEM_GROUPS) as ItemKind[];
  itemGroups.forEach((key) => {
    for (let j = 0; j < ITEM_GROUPS[key].amount; j++) {
      SHEET_DATA.frames[`i${ITEM_GROUPS[key].id}_${j}`] = {
        frame: {
          h: 16,
          w: 16,
          x: base * (itemOffsetX + j) + g,
          y: base * (itemOffsetY + ITEM_GROUPS[key].id) + g,
        },
      };
    }
  });

  // braziers
  for (let i = 0; i < 10; i++) {
    SHEET_DATA.frames[`b${i}`] = {
      frame: {
        h: 16,
        w: 16,
        x: base * (12 + i) + g,
        y: base * 28 + g,
      },
    };
  }

  Log.log("info", "Spritesheet data", SHEET_DATA);
}

export function getRandomItemKey(): string {
  const groups = Object.values(ITEM_GROUPS);
  const group = weightedPick(
    groups.map((g) => g.kind),
    groups.map((g) => g.chance)
  ) as ItemKind;
  const item = randomInt(0, ITEM_GROUPS[group].amount - 1);
  return `i${ITEM_GROUPS[group].id}_${item}`;
}

export function getTileSize() {
  return SHEET_CONFIG.baseTileSize * SHEET_CONFIG.scale;
}
