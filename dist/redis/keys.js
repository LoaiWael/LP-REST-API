export var DynamicKeys;
(function (DynamicKeys) {
    DynamicKeys["USER_TODOS"] = "user-todos";
})(DynamicKeys || (DynamicKeys = {}));
function generateDynamicKey(key, userId) {
    return `${key}:${userId}`;
}
export function getUserTodosKey(userId) {
    return generateDynamicKey(DynamicKeys.USER_TODOS, userId);
}
//# sourceMappingURL=keys.js.map