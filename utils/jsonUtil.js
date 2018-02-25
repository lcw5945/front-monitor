/**
 * Created by Cray on 2016/12/6.
 */

import _ from 'lodash'

class JsonUtil {
    constructor(T) {
        this.done = ""
        this.todo = T ? T : "";
    }
    update(V, U) { if (V) { this.done += V } if (U !== undefined) { this.todo = U.replace(/^\s+/g, "") } return this }
    swap(U) { if (U && !isNaN(Number(U)) && this.todo.length >= U) { this.update(this.todo.substr(0, U), this.todo.substring(U)) } return this }
    toString() { if (this.todo.length !== 0) { this.err("Text after last closing brace.", this.todo) } return this.done }
    span(U, V) { return this.update('<span class="' + U + '">' + V + "</span>") }
    err(V, U) {  return this.update('<span class="error" title="' + V + '">' + U + "</span>") }
    indexOf(V, U) { if (U) { return this.todo.indexOf(V, U) } else { return this.todo.indexOf(V) } };
    substring(U, V) { if (V) { return this.todo.substring(U, V) } else { return this.todo.substring(U) } }
    search(U) { return this.todo.search(U) }
    shift(U) {
        var V;
        if (U && !isNaN(Number(U)) && this.todo.length >= U) {
            V = this.substring(0, U);
            this.update("", this.substring(U));
            return V.replace(/\s+$/g, "")
        }
        return ""
    }
}

export default JsonUtil;