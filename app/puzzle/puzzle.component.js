System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n            Enter your name please:\n            <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        \n        <section [style.display]=\"name.value === '' ? 'none' : 'block'\">\n            <h2>The Pubzzle</h2>\n            <p>OK, welcom <span class=\"name\">XXX</span></p>\n            <br>\n            Switch 1:\n            <input type=\"text\" #switch1><br>\n            Switch 2:\n            <input type=\"text\" #switch2><br>\n            Switch 3:\n            <input type=\"text\" #switch3><br>\n            Switch 4:\n            <input type=\"text\" #switch4><br>\n        </section>\n        <h2>Congratulations XXX, you didi it !</h2>\n    \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});
//# sourceMappingURL=puzzle.component.js.map