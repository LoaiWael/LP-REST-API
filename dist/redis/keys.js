export var DynamicKeys;
(function (DynamicKeys) {
    DynamicKeys["WORK"] = "work";
})(DynamicKeys || (DynamicKeys = {}));
function generateDynamicKey(key, userId) {
    return `${key}:${userId}`;
}
function getWorkDetailsKey(workId) {
    return generateDynamicKey(DynamicKeys.WORK, workId);
}
function getWorksKey() {
    return `${DynamicKeys.WORK}`;
}
export const workKeys = {
    getWorkDetailsKey,
    getWorksKey
};
//# sourceMappingURL=keys.js.map