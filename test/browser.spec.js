'use strict'
const isNode = require('is-node')
// This file will be picked up by webpack into the
// tests bundle and the code here gets run when imported
// into the browser tests index through browser/run.js
if (!isNode) {
  // If in browser, put the fixture keys in local storage
  // so that Keystore can find them
  const levelup = require('levelup')
  const level = require('level-js')
  const signingStore = levelup(level('./orbitdb/identity/signingkeys'))
  const identityStore = levelup(level('./orbitdb/identity/identitykeys'))

  const copyFixtures = []
  copyFixtures.push(signingStore.open())
  copyFixtures.push(identityStore.open())

  const keyA = require('./fixtures/keys/signing-keys/userA')
  const keyB = require('./fixtures/keys/signing-keys/userB')
  const keyC = require('./fixtures/keys/signing-keys/userC')
  const keyD = require('./fixtures/keys/signing-keys/userD')
  const keyE = require('./fixtures/keys/identity-keys/0358df8eb5def772917748fdf8a8b146581ad2041eae48d66cc6865f11783499a6')
  const keyF = require('./fixtures/keys/identity-keys/032f7b6ef0432b572b45fcaf27e7f6757cd4123ff5c5266365bec82129b8c5f214')
  const keyG = require('./fixtures/keys/identity-keys/02a38336e3a47f545a172c9f77674525471ebeda7d6c86140e7a778f67ded92260')
  const keyH = require('./fixtures/keys/identity-keys/03e0480538c2a39951d054e17ff31fde487cb1031d0044a037b53ad2e028a3e77c')

  copyFixtures.push(signingStore.put('userA', JSON.stringify(keyA)))
  copyFixtures.push(signingStore.put('userB', JSON.stringify(keyB)))
  copyFixtures.push(signingStore.put('userC', JSON.stringify(keyC)))
  copyFixtures.push(signingStore.put('userD', JSON.stringify(keyD)))

  copyFixtures.push(identityStore.put('0358df8eb5def772917748fdf8a8b146581ad2041eae48d66cc6865f11783499a6', JSON.stringify(keyE)))
  copyFixtures.push(identityStore.put('032f7b6ef0432b572b45fcaf27e7f6757cd4123ff5c5266365bec82129b8c5f214', JSON.stringify(keyF)))
  copyFixtures.push(identityStore.put('02a38336e3a47f545a172c9f77674525471ebeda7d6c86140e7a778f67ded92260', JSON.stringify(keyG)))
  copyFixtures.push(identityStore.put('03e0480538c2a39951d054e17ff31fde487cb1031d0044a037b53ad2e028a3e77c', JSON.stringify(keyH)))

  copyFixtures.push(signingStore.close())
  copyFixtures.push(identityStore.close())

  Promise.all(copyFixtures)
}
