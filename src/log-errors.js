'use strict'

const ImmutableDBNotDefinedError = () => new Error('ImmutableDB instance not defined')
const LogNotDefinedError = () => new Error('Log instance not defined')
const NotALogError = () => new Error('Given argument is not an instance of Log')
const NeedToUpgrade = () => new Error('OrbitDB: append is now disabled in 0.19. Please upgrade to the newest version of OrbitDB')

module.exports = {
  ImmutableDBNotDefinedError: ImmutableDBNotDefinedError,
  LogNotDefinedError: LogNotDefinedError,
  NotALogError: NotALogError,
  NeedToUpgrade: NeedToUpgrade
}
