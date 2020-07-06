// Our custom tile mapping with:
// - Single index for putTileAt
// - Array of weights for weightedRandomize
// - Array or 2D array for putTilesAt
const TILE_MAPPING = {
    BLANK: 20,
    WALL: {
        TOP_LEFT: 3,
        TOP_RIGHT: 4,
        BOTTOM_RIGHT: 23,
        BOTTOM_LEFT: 22,
        TOP: [{ index: 39, weight: 4 }, { index: [57, 58, 59], weight: 1 }],
        LEFT: [{ index: 21, weight: 4 }, { index: [76, 95, 114], weight: 1 }],
        RIGHT: [{ index: 19, weight: 4 }, { index: [77, 96, 115], weight: 1 }],
        BOTTOM: [{ index: 1, weight: 4 }, { index: [78, 79, 80], weight: 1 }]
    },
    // FLOOR: [{ index: 0, weight: 9 }, { index: [1, 2, 3], weight: 1 }],
    FLOOR: [{ index: 6, weight: 9 }, { index: [26], weight: 1 }],
    POT: [{ index: 13, weight: 1 }, { index: 32, weight: 1 }, { index: 51, weight: 1 }],
    DOOR: {
        TOP: [40, 6, 38],
        LEFT: [
            [40],
            [6],
            [2]
        ],
        BOTTOM: [2, 6, 0],
        RIGHT: [
            [38],
            [6],
            [0]
        ]
    },
    KEYDOOR: 56,
    KEYDOORDOWN: 18,
    KEYDOORUP: 37,
    KEYDOORLEFT: 75,
    KEYDOORRIGHT: 56,
    CHEST: 166,
    KEYCHEST: 227,
    KEYCHESTOPEN: 208,
    CHESTFRONT: 45,
    CHESTOPEN: 246,
    STAIRS: 81,
    // prettier-ignore
    TOWER: [
        [186],
        [205]
    ]
};

export default TILE_MAPPING;