export enum DynamicKeys {
    USER_TODOS = "user-todos"
}

function generateDynamicKey(key: string, userId: string) {
    return `${key}:${userId}`;
}

export function getUserTodosKey(userId: string) {
    return generateDynamicKey(DynamicKeys.USER_TODOS, userId);
}