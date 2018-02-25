<template>
    <div class='jsonPaser'>
        <div class="K F" id="fU" :class="{'bQ':showType,'aP':showIndex}">
            <div class="z L">
                <div class="E" id="dS">
                    <div class="C A">
                        <div class="w">
                            <div class="P" id="iX" v-show='stringParseHtmlArray.length'>
                                <div v-for='(item ,index) in stringParseHtmlArray' v-html='item' :key='index'></div>
                            </div>
                            <div v-show='!stringParseHtmlArray.length'>
                                <div style="margin-top:20px;text-align: center;">
                                    <Icon type="social-dropbox-outline" size='100' color='#b2bac2'></Icon>
                                    <div style="font-size:14px;">暂无数据</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import _ from "lodash";
import api from '~api'
import jsonUtil from '~utils/jsonUtil'
export default {
    props: ['showType', 'showIndex', 'tagClose'],
    data() {
        return {
            config: {
                compact: false, //Minify
                color: true, //color-->colorize,
                bQ: false, //bQ-->SHOW JS TYPES,
                aP: false // aP-->SHOW Array Index
            },
            stringParseHtmlArray: [],
            N: null
        }
    },
    methods: {
        replaceBlank(T) { return T.replace(/\s+$/g, "") },
        replaceBlankPre(T) { return T.replace(/^\s+/g, "") },
        replaceBlankAll(T) { return this.replaceBlankPre(this.replaceBlank(T)) },
        quotesHandller() {
            var V = 0,
                U, T;
            do {
                V = this.N.indexOf('"', V + 1), U = 0, T = 1;
                do {
                    if (this.N.substring(V - T, V - T + 1) === "\\") {
                        U = U + 1;
                        T++;
                        continue
                    }
                    break
                } while (true);
                if (U % 2 === 0) { break }
            } while (true);
            return V
        },
        squareTool(X, W) {
            var V = 0;
            X.update("<li>");
            X = this.typeHandler(X, "]");
            if (X.substring(0, 1) === ",") { X.swap(1).update("</li>"); return this.squareTool(X, ++V) }
            if (X.substring(0, 1) === "]") { return X.update("</li>") }
            return X.err("Comma is missing", X.shift(X.search(/(,|\])/))).update("</li>")
        },
        typeHandler(Z, U) {
            var ab, X, V, T, W, aa = "";
            if (Z.search(/^(")/) === 0) {
                ab = Z.shift(this.quotesHandller(Z.todo) + 1);
                if (ab.search(/\\u(?![\d|A-F|a-f]{4})/g) !== -1) {
                    return Z.err("\\u must be followed by 4 hexadecimal characters", ab)
                }
                T = ab.length;
                for (V = 0; V < T; V++) {
                    if (ab.substring(V, V + 1) == "\\") {
                        if (V + 1 < T) {
                            V++;
                            if (!ab.substring(V, V + 1).search(/[^\"|\\|\/|b|f|n|r|t|u]/)) {
                                return Z.err("Backslash must be escaped", ab)
                            }
                        }
                    }
                }
                return Z.span("string", ab)
            }
            if (Z.search(/^\{/) === 0) { return this.bracesHandler(Z) }
            if (Z.search(/^\[/) === 0) { return this.squareHandler(Z) } X = Z.search(new RegExp("(,|" + U + ")"));
            if (X === -1) {
                X = Z.todo.length - 1;
                W = this.replaceBlank(Z.todo);
                Z.update("", "")
            } else { W = this.replaceBlank(Z.shift(X)) }
            try { aa = typeof $.parseJSON(W) } catch (Y) {}
            switch (aa) {
                case "boolean":
                case "number":
                    return Z.span(aa, W);
                default:
                    if (W === "null") { return Z.span("null", W) } else { if (W.search(/^(')/) === 0) { return Z.err("String must be wrapped in double quotes", W) } return Z.err("Unknown type", W) }
            }
        },
        squareHandler(U) {
            var V = 0;
            if (U.indexOf("[") === -1) { U.err("Opening square bracket is missing", U.todo); return U.update("", "") } U.shift(1);
            U.update(`<span class="array ${this.tagClose? 'collapsed':''}">`);
            U.update('<span class="toggle">[</span><ol>');
            if (U.indexOf("]") === 0) {
                U.shift(1);
                U.update('</ol><span class="toggle-end" card="0">]</span>');
                return U.update("</span>")
            }
            U = this.squareTool(U, 0);
            if (U.indexOf("]") === -1) {
                U.err("Closing braces bracket is missing", U.todo);
                U.update('</ol><span class="toggle-end" card="' + (V + 1) + '"></span>');
                return U.update("</span>")
            }
            U.shift(1);
            U.update('</ol><span class="toggle-end" card="' + (V + 1) + '">]</span>');
            return U.update("</span>")
        },

        backHandler(ac) {
            var aa, Z, Y, ab = ac.substring(0, 1);
            ac.update("");
            if (ab === '"') { aa = ac.shift(this.quotesHandller(ac.todo) + 1); if (aa.search(/\\u(?![\d|A-F|a-f]{4})/g) !== -1) { return ac.err("\\u must be followed by 4 hexadecimal characters", aa) } length = aa.length; for (Y = 0; Y < length; Y++) { if (aa.substring(Y, Y + 1) == "\\") { if (Y + 1 < length) { Y++; if (!aa.substring(Y, Y + 1).search(/[^\"|\\|\/|b|f|n|r|t|u]/)) { return ac.err("Backslash must be escaped", aa) } } } } return ac.update('<span class="property">"<span class="p">' + aa.substring(1, aa.length - 1) + '</span>"</span>') } aa = ac.shift(ac.indexOf(":"));
            return ac.err("Name property must be a String wrapped in double quotes.", aa)
        },

        missHandler(Y) {
            if (Y.substring(0, 1) !== ":") { Y.err("Semi-column is missing.", Y.shift(Y.indexOf(":"))) }
            return Y.swap(1)
        },

        ulHandler(X) {
            X.update("<li>")
            if (X.substring(0, 1) === "}") { return X.update("</li>") } X = this.backHandler(X);
            X = this.missHandler(X);
            X = this.typeHandler(X, "}");
            if (X.substring(0, 1) === ",") { X.swap(1).update("</li>"); return this.ulHandler(X) }
            if (X.substring(0, 1) === "}") { return X.update("</li>") }
            return X.err("Comma is missing", X.shift(X.indexOf("}"))).update("</li>")
        },
        bracesHandler(U) {
            if (U.indexOf("{") === -1) { U.err("Opening brace is missing", U.todo); return U.update("", "") } else {
                U.shift(1);
                U.update(`<span class="object ${this.tagClose? 'collapsed':''}"><span class="toggle">{</span><ul>`);
                U = this.ulHandler(U).update("</ul>");
                if (U.indexOf("}") === -1) { U.err("Closing brace is missing", U.todo); return U.update("", "") }
                return U.span("toggle-end", U.shift(1))
            }
        },
        DomHandller(O) {
            var P = false,
                S;
            this.N = new jsonUtil(this.replaceBlankAll(O))
            if (this.replaceBlankPre(O).substr(0, 1) === "[") {
                S = { html: this.squareHandler(this.N).toString(), valid: !P }
            } else {
                if (this.replaceBlankPre(O).substr(0, 1) === "{") {
                    S = { html: this.bracesHandler(this.N).toString(), valid: !P }
                } else {
                    P = true
                    S = { html: this.N.err("JSON expression must be an object or an array", O).update(null, "").toString(), valid: false }
                }
            }
            return S
        },

        init(data, time) {
            let _this = this,
                o = $(window),
                val = data || '',
                K;
            if (_.isObject(val)) {
                K = JSON.stringify(val)
                K = K.replace(/</g, "&lt;");
                K = K.replace(/>/g, "&gt;");


                var M = _this.DomHandller(K);

                let temp = `<div class='htmlWra'><div class='time'>${time}:</div>${M.html}</div>`
                _this.stringParseHtmlArray.push(temp)
                if (!M.valid) {
                    console.log("String parse 出错")
                }
                o.resize()

            } else {
                let temp = `<div class='htmlWra'><div class='time'>${time}:</div>'${val}'</div>`
                _this.stringParseHtmlArray.push(temp)
                o.resize()
            }

            $(".P").off().on("click", ".toggle", function() {
                var H = $(this).parent();
                if (H.length == 0) {
                    H = $(this).closest(".P")
                }
                H.toggleClass("collapsed");
                return false
            });
        },
        clear() {
            this.stringParseHtmlArray = []
        },
        collapse() {
            if (this.tagClose) {
                $('.array,.object').removeClass('collapsed')
            } else {
                $('.array,.object').addClass('collapsed')
            }

        }

    },
    created() {

    },
    mounted() {}
}
</script>