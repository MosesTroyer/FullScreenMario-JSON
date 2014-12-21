FullScreenMario.prototype.settings.statistics = {
    "prefix": "FullScreenMario",
    "doMakeContainer": true,
    "containers": [
        ["table", {
            "id": "data_display",
            "style": {
                "position": "absolute",
                "top": 0,
                "width": "100%",
                "fontSize": "21px",
                "textTransform": "uppercase"
            }
        }],
        ["tr", {
            "style": {
                "padding": "7px 14px 0 14px",
                "textAlign": "center"
            }
        }]
    ],
    "defaults": {
        "element": "td"
    },
    "separator": "<br />",
    "values": {
        "power": {
            "valueDefault": 1,
            "storeLocally": false
        },
        "traveled": {
            "valueDefault": 0
        },
        "score": {
            "valueDefault": 0,
            "digits": 6,
            "hasElement": true,
            "modularity": 100000,
            "onModular": function (EightBitter) {
                EightBitter.gainLife();
            }
        },
        "time": {
            "valueDefault": 0,
            "digits": 3,
            "hasElement": true,
            "minimum": 0,
            "triggers": {
                100: function (EightBitter) {
                    EightBitter.AudioPlayer.playThemePrefixed("Hurry");
                }
            },
            "onMinimum": function (EightBitter) {
                EightBitter.killPlayer(FSM.player, true);
            }
        },
        "world": {
            "valueDefault": 0,
            "hasElement": true
        },
        "coins": {
            "valueDefault": 0,
            "hasElement": true,
            "modularity": 100,
            "onModular": function (EightBitter) {
                EightBitter.player.gainLife();
            }
        },
        "lives": {
            "valueDefault": 3,
            "storeLocally": true,
            "hasElement": true
        },
        "luigi": {
            "valueDefault": 0,
            "storeLocally": true
        }
    }
};