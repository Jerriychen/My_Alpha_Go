// Import or create JGO namespace
// {% load staticfiles %}
var JGO = JGO || {};

JGO.BOARD = JGO.BOARD || {};

JGO.BOARD.large = {
    textures: {
        black: '/static/images/large/black.png',
        white: '/static/images/large/white.png',
        shadow:'/static/images/large/shadow.png',
        board: '/static/images/large/shinkaya.jpg'
    },

    // Margins around the board, both on normal edges and clipped ones
    margin: {normal: 25, clipped: 25},

    // Shadow color, blur and offset
    boardShadow: {color: '#ffe0a8', blur: 10, offX: 0, offY: 0},

    // Lighter border around the board makes it more photorealistic
    border: {color: 'rgba(255, 255, 255, 0.3)', lineWidth: 100},

    // Amount of "extra wood" around the grid where stones lie
    padding: {normal: 10, clipped: 0},

    // Grid color and size, line widths
    grid: {color: '#202020', x: 20, y: 20, smooth: 0.0,
        borderWidth: 0.8, lineWidth: 0.5},

    // Star point radiuste
    stars: {radius: 1},

    // Coordinate color and font
    coordinates: {color: '#808080', font: 'normal 18px sanf-serif'},

    // Stone radius  and alpha for semi-transparent stones
    stone: {radius: 5, dimAlpha:0.1},

    // Shadow offset from center
    shadow: {xOff: 0, yOff: 0},

    // Mark base size and line width, color and font settings
    mark: {lineWidth: 1.5, blackColor: 'white', whiteColor: 'black',
        clearColor: 'black', font: 'normal 24px sanf-serif'}
};

JGO.BOARD.largeWalnut = JGO.util.extend(JGO.util.extend({}, JGO.BOARD.large), {
    textures: {board: '/static/images/large/walnut.jpg', shadow: '/static/images/large/shadow_dark.png'},
    boardShadow: {color: '#e2baa0'},
    grid: {color: '#101010', borderWidth:0.5, lineWidth: 0.5}
});

JGO.BOARD.largeBW = JGO.util.extend(JGO.util.extend({}, JGO.BOARD.large), {
    textures: false
});
