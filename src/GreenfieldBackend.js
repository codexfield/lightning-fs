const { Client } = require('@bnb-chain/greenfield-js-sdk');
const { ACCOUNT_ADDRESS, ACCOUNT_PRIVATEKEY } = require('./env');
module.exports = class GnfdBackend {
    constructor(rpcEndpoint, chainID, bucketName) {
        this._bucketName = bucketName
        this._store = Client.create(rpcEndpoint, chainID)
    }
    saveSuperblock(superblock) {
        return idb.set("!root", superblock, this._store);
    }
    loadSuperblock() {
        return idb.get("!root", this._store);
    }
    readFile(objectName) {
        this._store.object.getObject()
    }
    writeFile(objectName, dat
    }
    unlink(objectName) {
    }
    wipe() {
    }
    close() {
    }
}