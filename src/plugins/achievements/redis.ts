import { createClient } from 'redis'
import type { AsyncReturnType } from 'type-fest'
import {
  Index,
  Prefix,
  SchemaKey,
  schemaHistory,
  schemaHistoryId,
  schemaInvitation,
  schemaInvitationId,
} from './redis-schema'

export const defaultClient = createClient({
  url: import.meta.env.REDIS_URL,
  username: import.meta.env.REDIS_USERNAME ?? '',
  password: import.meta.env.REDIS_PASSWORD ?? '',
  socket: {
    keepAlive: 1,
    reconnectStrategy: 1,
  },
})

export const getDefaultClient = async () => {
  if (defaultClient.isOpen === false) {
    await defaultClient.connect()
  }
  return defaultClient
}

/**
 * Returns a redis client from the given async function with checking the current schema is indexed.
 * @param getClient - a function that returns redis client
 * @returns the redis client
 */
export const withCheckingIndex = async <
  T extends typeof getDefaultClient = typeof getDefaultClient,
>(
  getClient: T,
): Promise<AsyncReturnType<T>> => {
  const client = (await getClient()) as AsyncReturnType<T>
  const currentScmI = await client.get(SchemaKey.Invitation)
  const currentScmH = await client.get(SchemaKey.History)
  const isScmIIndexed = currentScmI === schemaInvitationId
  const isScmHIndexed = currentScmH === schemaHistoryId
  const ON = 'JSON'
  return isScmIIndexed && isScmHIndexed
    ? client
    : Promise.all([
        client.ft.dropIndex(Index.Invitation),
        client.ft.dropIndex(Index.History),
      ])
        .then(() =>
          Promise.all([
            client.ft.create(Index.Invitation, schemaInvitation, {
              ON,
              PREFIX: Prefix.Invitation,
            }),
            client.ft.create(Index.History, schemaHistory, {
              ON,
              PREFIX: Prefix.History,
            }),
          ]),
        )
        .then(() => client)
}
