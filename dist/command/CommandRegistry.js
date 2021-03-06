"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Help_1 = __importDefault(require("../commands/Basic/Help"));
const Ping_1 = __importDefault(require("../commands/Basic/Ping"));
const Echo_1 = __importDefault(require("../commands/OwnerOnly/Echo"));
const Eval_1 = __importDefault(require("../commands/OwnerOnly/Eval"));
const LogOff_1 = __importDefault(require("../commands/OwnerOnly/LogOff"));
const Hug_1 = __importDefault(require("../commands/Fun/Hug"));
class CommandRegistry {
    constructor() {
        this.commands = [
            new Help_1.default(),
            new Ping_1.default(),
            new Hug_1.default(),
            new Echo_1.default(),
            new Eval_1.default(),
            new LogOff_1.default()
        ];
        this.groups = this.commands.map((command) => command.group).filter((group, index, self) => self.indexOf(group) === index);
    }
    getCommands(group) {
        return this.commands.filter((command) => command.group === group);
    }
    getCommand(trigger) {
        return this.commands.find((command) => command.triggers.includes(trigger.toLowerCase()));
    }
}
exports.default = new CommandRegistry();
//# sourceMappingURL=CommandRegistry.js.map