export enum DynamicKeys {
    WORK = "work"
}

function generateDynamicKey(key: string, userId: string) {
    return `${key}:${userId}`;
}

function getWorkDetailsKey(workId: string) {
    return generateDynamicKey(DynamicKeys.WORK, workId);
}

function getWorksKey() {
    return `${DynamicKeys.WORK}`;
}

export const workKeys = {
    getWorkDetailsKey,
    getWorksKey
}