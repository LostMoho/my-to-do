/**
 * @module ui/task.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Task
 * @extends Component
 */
exports.Task = Component.specialize(/** @lends Task# */ {
    constructor: {
        value: function Task() {
            this.super();
        }
    }
});
